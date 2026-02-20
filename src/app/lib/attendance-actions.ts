'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { getCurrentUser } from './session'; // Adjust path if needed, assuming user session logic exists
import { getDistanceFromLatLonInMeters } from '@/lib/geo';
import { startOfDay, endOfDay } from 'date-fns';

export type PunchResult = {
    success?: string;
    error?: string;
};

import { headers } from 'next/headers';

export async function punchIn(lat: number, lng: number, mode: string = 'OFFICE', note?: string): Promise<PunchResult> {
    try {
        const user = await getCurrentUser();
        if (!user) return { error: 'Unauthorized' };

        // 0. Weekend Check
        const today = new Date();
        const dayOfWeek = today.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            return { error: 'Punch-in is not allowed on weekends (Saturday/Sunday).' };
        }

        // 0.5 Check for Approved Leave
        const leaveCheckDate = new Date();
        const leaveStart = startOfDay(leaveCheckDate);
        const leaveEnd = endOfDay(leaveCheckDate);

        const approvedLeave = await prisma.leave.findFirst({
            where: {
                userId: user.id,
                status: 'APPROVED',
                date: {
                    gte: leaveStart,
                    lte: leaveEnd,
                },
            },
        });

        if (approvedLeave) {
            return { error: 'You have an approved leave for today. Punch-in is not allowed.' };
        }

        // 1. Get All Active Branches
        const branches = await prisma.branch.findMany({
            where: { isActive: true },
        });

        if (branches.length === 0) {
            return { error: 'No active branches found. Contact admin.' };
        }

        // 2. Geo-Fencing Check - Find nearest valid branch
        let validBranch = null;
        let minDistance = Infinity;

        if (mode === 'OFFICE') {
            for (const branch of branches) {
                const dist = getDistanceFromLatLonInMeters(lat, lng, branch.latitude, branch.longitude);
                console.log(`User at [${lat}, ${lng}], Check Branch ${branch.name}: Dist ${dist}m, Radius ${branch.radius}m`);

                if (dist <= branch.radius) {
                    // Found a valid branch within radius
                    validBranch = branch;
                    break;
                }

                if (dist < minDistance) {
                    minDistance = dist;
                    validBranch = branch; // Update nearest branch even if outside radius
                }
            }

            // Fallback: If no branch within radius, use the nearest/last checked provided validBranch is set (which it will be if branches > 0)
            // We already check branches.length === 0 above.

            // RELAXED CHECK: We allow punch in from anywhere, but we might want to flag it?
            // For now, based on user request "if i punch any place after i select punch in then only its detect my location",
            // we will just proceed with the found validBranch (which is the nearest one).

            if (!validBranch) {
                // Should theoretically not happen if branches > 0 and logic holds, but safe fallback
                validBranch = branches[0];
            }
        } else {
            // WFH or FIELD mode - skip geo-fencing and use user's assigned branch for shift times
            const dbUser = await prisma.user.findUnique({
                where: { id: user.id },
                include: { branch: true }
            });
            validBranch = dbUser?.branch || branches[0]; // Fallback to first branch if none assigned
        }

        // 2.5 Auto-Close Forgotten Punch-outs
        const openSessions = await prisma.attendance.findMany({
            where: {
                userId: user.id,
                clockOut: null,
                date: { lt: startOfDay(new Date()) }
            }
        });

        for (const session of openSessions) {
            const [endHour, endMinute] = (validBranch.shiftEnd || "18:00").split(':').map(Number);
            const autoOutTime = new Date(session.date);
            autoOutTime.setHours(endHour, endMinute, 0, 0);

            await prisma.attendance.update({
                where: { id: session.id },
                data: {
                    clockOut: autoOutTime,
                    status: 'AUTO_OUT'
                }
            });
        }

        // 3. Check if already punched in today
        const todayCommon = new Date();
        const start = startOfDay(todayCommon);
        const end = endOfDay(todayCommon);

        const existing = await prisma.attendance.findFirst({
            where: {
                userId: user.id,
                date: {
                    gte: start,
                    lte: end,
                },
            },
        });

        if (existing) {
            return { error: 'You have already punched in for today.' };
        }

        // 4. Checking Shift Timings (Late Entry)
        // Parse shiftStart from branch (e.g. "09:00")
        const [shiftHour, shiftMinute] = (validBranch.shiftStart || "09:00").split(':').map(Number);
        const shiftStartTime = new Date();
        shiftStartTime.setHours(shiftHour, shiftMinute, 0, 0);

        // Add 15 mins grace period
        const graceTime = new Date(shiftStartTime.getTime() + 15 * 60000); // 15 mins in ms

        let status = 'PRESENT';
        const now = new Date();
        if (now > graceTime) {
            status = 'LATE';
        }

        // 5. Get IP Address
        const headersList = await headers();
        const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown';

        // 6. Create Attendance Record
        await prisma.attendance.create({
            data: {
                userId: user.id,
                date: new Date(),
                clockIn: new Date(),
                clockInLat: lat,
                clockInLng: lng,
                status: status,
                ipAddress: ip,
                punchMode: mode,
                punchInNote: note,
            },
        });

        revalidatePath('/dashboard');
        return { success: `Punched In Successfully at ${validBranch.name}!` };
    } catch (error) {
        console.error('Punch In Error:', error);
        return { error: 'Failed to punch in.' };
    }
}

export async function getAllBranches() {
    return await prisma.branch.findMany({
        where: { isActive: true },
    });
}

export async function punchOut(lat: number, lng: number, note?: string): Promise<PunchResult> {
    try {
        const user = await getCurrentUser();
        if (!user) return { error: 'Unauthorized' };

        // 1. Find active attendance
        const todayCommon = new Date();
        const start = startOfDay(todayCommon);
        const end = endOfDay(todayCommon);

        const attendance = await prisma.attendance.findFirst({
            where: {
                userId: user.id,
                date: {
                    gte: start,
                    lte: end,
                },
                clockOut: null, // Only if not yet punched out
            },
        });

        if (!attendance) {
            return { error: 'No active punch-in record found for today.' };
        }

        // 2. Update with Punch Out
        // Check for Early Departure
        // We need the branch to check shiftEnd. 
        // We can get branch from user relation or we could have stored it in attendance. 
        // For now, let's look up the nearest branch again or use user's assigned branch as fallback for logic?
        // Better: Use the branch they punched in at... but we didn't store it. 
        // Let's use the user's assigned branch or nearest active one logic again? 
        // To simplify, let's fetch user's branch.
        const dbUser = await prisma.user.findUnique({ where: { id: user.id }, include: { branch: true } });
        const branch = dbUser?.branch;

        let finalStatus = attendance.status;

        if (branch) {
            const [endHour, endMinute] = (branch.shiftEnd || "18:00").split(':').map(Number);
            const shiftEndTime = new Date();
            shiftEndTime.setHours(endHour, endMinute, 0, 0);

            if (new Date() < shiftEndTime && finalStatus !== 'LATE') {
                // Only mark LEFT_EARLY if not already LATE? Or maybe we need a separate flag? 
                // The status field is a single string. "LATE" is already set if they came late.
                // Maybe we append? or just prioritize LATE? 
                // If status is PRESENT, we can change to LEFT_EARLY.
                if (finalStatus === 'PRESENT') {
                    finalStatus = 'LEFT_EARLY';
                }
                // If already LATE, maybe keep it as LATE or make "LATE_AND_EARLY"? 
                // For now let's keep it simple.
            }
        }

        await prisma.attendance.update({
            where: { id: attendance.id },
            data: {
                clockOut: new Date(),
                clockOutLat: lat,
                clockOutLng: lng,
                status: finalStatus,
                punchOutNote: note,
            },
        });

        revalidatePath('/dashboard');
        return { success: 'Punched Out Successfully!' };
    } catch (error) {
        console.error('Punch Out Error:', error);
        return { error: 'Failed to punch out.' };
    }
}

export async function getTodayAttendance() {
    const user = await getCurrentUser();
    if (!user) return null;

    const todayCommon = new Date();
    const start = startOfDay(todayCommon);
    const end = endOfDay(todayCommon);

    return await prisma.attendance.findFirst({
        where: {
            userId: user.id,
            date: {
                gte: start,
                lte: end,
            },
        },
    });
}

export async function getUserBranch() {
    const user = await getCurrentUser();
    if (!user) return null;

    const dbUser = await prisma.user.findUnique({
        where: { id: user.id },
        include: { branch: true },
    });

    return dbUser?.branch || null;
}

export async function getAttendanceHistory() {
    const user = await getCurrentUser();
    if (!user) return [];

    return await prisma.attendance.findMany({
        where: { userId: user.id },
        orderBy: { date: 'desc' },
        take: 30,
    });
}
export async function createAttendanceRequest(data: {
    attendanceId?: string;
    date: Date;
    requestType: string;
    newTime: Date;
    reason: string;
}) {
    const user = await getCurrentUser();
    if (!user) return { error: 'Unauthorized' };

    try {
        await prisma.attendanceRequest.create({
            data: {
                userId: user.id,
                attendanceId: data.attendanceId,
                date: data.date,
                requestType: data.requestType,
                newTime: data.newTime,
                reason: data.reason,
                status: 'PENDING',
            },
        });
        revalidatePath('/dashboard/attendance');
        return { success: 'Correction request submitted successfully.' };
    } catch (error) {
        console.error('Create Attendance Request Error:', error);
        return { error: 'Failed to submit request.' };
    }
}

export async function getMyAttendanceRequests() {
    const user = await getCurrentUser();
    if (!user) return [];

    return await prisma.attendanceRequest.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: 'desc' },
    });
}

export async function getAllAttendanceRequests() {
    const user = await getCurrentUser();
    if (!user) return [];

    // Check if user is admin (simplified for now)
    const dbUser = await prisma.user.findUnique({
        where: { id: user.id },
        include: { role: true },
    });

    if (dbUser?.role?.code !== 'ADMIN') {
        return [];
    }

    return await prisma.attendanceRequest.findMany({
        include: { user: true },
        orderBy: { createdAt: 'desc' },
    });
}

export async function processAttendanceRequest(requestId: string, status: 'APPROVED' | 'REJECTED', remarks?: string) {
    const user = await getCurrentUser();
    if (!user) return { error: 'Unauthorized' };

    try {
        const request = await prisma.attendanceRequest.findUnique({
            where: { id: requestId },
        });

        if (!request) return { error: 'Request not found.' };

        if (status === 'REJECTED') {
            await prisma.attendanceRequest.update({
                where: { id: requestId },
                data: { status, adminRemarks: remarks ?? null },
            });
            revalidatePath('/admin/management/attendance-requests');
            return { success: 'Request rejected.' };
        }

        // status === 'APPROVED'
        if (request.requestType === 'PUNCH_IN' || request.requestType === 'CORRECTION') {
            if (request.attendanceId) {
                // Update existing record
                await prisma.attendance.update({
                    where: { id: request.attendanceId },
                    data: { clockIn: request.newTime, status: 'PRESENT' },
                });
            } else {
                // Create new record
                await prisma.attendance.create({
                    data: {
                        userId: request.userId,
                        date: request.date,
                        clockIn: request.newTime,
                        status: 'PRESENT', // Or 'CORRECTED'
                    },
                });
            }
        } else if (request.requestType === 'PUNCH_OUT') {
            // Find existing attendance for that date if not provided
            let attendanceId = request.attendanceId;
            if (!attendanceId) {
                const existing = await prisma.attendance.findFirst({
                    where: {
                        userId: request.userId,
                        date: {
                            gte: startOfDay(request.date),
                            lte: endOfDay(request.date),
                        },
                    },
                });
                attendanceId = existing?.id ?? null;
            }

            if (attendanceId) {
                await prisma.attendance.update({
                    where: { id: attendanceId },
                    data: { clockOut: request.newTime },
                });
            } else {
                return { error: 'No attendance record found to update punch-out.' };
            }
        }

        await prisma.attendanceRequest.update({
            where: { id: requestId },
            data: { status, adminRemarks: remarks ?? null },
        });

        revalidatePath('/admin/management/attendance-requests');
        revalidatePath('/dashboard/attendance');
        return { success: 'Request approved and attendance updated.' };
    } catch (error) {
        console.error('Process Attendance Request Error:', error);
        return { error: 'Failed to process request.' };
    }
}
