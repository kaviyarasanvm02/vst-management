import prisma from '@/lib/db';
import { getDistanceFromLatLonInMeters } from '@/lib/geo';
import { startOfDay, endOfDay, startOfMonth, endOfMonth } from 'date-fns';
import { AttendanceWithUser, Branch, EmployeeWithStats } from '@/types';

export class AttendanceService {
    /**
     * Finds the nearest active branch to a given location.
     */
    static async findNearestBranch(lat: number, lng: number) {
        const branches = await prisma.branch.findMany({
            where: { isActive: true },
        });

        if (branches.length === 0) return null;

        let nearest = branches[0];
        let minDistance = Infinity;

        for (const branch of branches) {
            const dist = getDistanceFromLatLonInMeters(lat, lng, branch.latitude, branch.longitude);
            if (dist < minDistance) {
                minDistance = dist;
                nearest = branch;
            }
        }

        return { branch: nearest, distance: minDistance };
    }

    /**
     * Determines the attendance status based on punch-in time and branch shift settings.
     */
    static async calculatePunchInStatus(branch: any, punchTime: Date = new Date()) {
        const [shiftHour, shiftMinute] = (branch.shiftStart || "09:00").split(':').map(Number);
        const shiftStartTime = new Date(punchTime);
        shiftStartTime.setHours(shiftHour, shiftMinute, 0, 0);

        // Add 15 mins grace period
        const graceTime = new Date(shiftStartTime.getTime() + 15 * 60000);

        return punchTime > graceTime ? 'LATE' : 'PRESENT';
    }

    /**
     * Determines the attendance status based on punch-out time.
     */
    static async calculatePunchOutStatus(branch: any, initialStatus: string, punchOutTime: Date = new Date()) {
        if (!branch) return initialStatus;

        const [endHour, endMinute] = (branch.shiftEnd || "18:00").split(':').map(Number);
        const shiftEndTime = new Date(punchOutTime);
        shiftEndTime.setHours(endHour, endMinute, 0, 0);

        if (punchOutTime < shiftEndTime && initialStatus === 'PRESENT') {
            return 'LEFT_EARLY';
        }

        return initialStatus;
    }

    /**
     * Checks if a user has an approved leave for a specific date.
     */
    static async hasApprovedLeave(userId: string, date: Date = new Date()) {
        const start = startOfDay(date);
        const end = endOfDay(date);

        const approvedLeave = await prisma.leave.findFirst({
            where: {
                userId,
                status: 'APPROVED',
                date: { gte: start, lte: end },
            },
        });

        return !!approvedLeave;
    }

    /**
     * Checks if a date falls on a weekend.
     */
    static isWeekend(date: Date = new Date()) {
        const day = date.getDay();
        return day === 0 || day === 6;
    }

    /**
     * Get attendance for a specific user and month.
     */
    static async getAttendanceByMonth(userId?: string, date: Date = new Date()): Promise<AttendanceWithUser[]> {
        const start = startOfMonth(date);
        const end = endOfMonth(date);

        return await prisma.attendance.findMany({
            where: {
                ...(userId ? { userId } : {}),
                date: { gte: start, lte: end }
            },
            include: {
                user: {
                    include: { branch: true }
                }
            },
            orderBy: { date: 'desc' },
        }) as AttendanceWithUser[];
    }

    /**
     * Get summary stats for attendance.
     */
    static getAttendanceStats(attendance: AttendanceWithUser[]) {
        return {
            totalPresent: attendance.filter(a => a.status === 'PRESENT' || a.status === 'LATE').length,
            totalLate: attendance.filter(a => a.status === 'LATE').length,
            earlyDepartures: attendance.filter(a => a.status === 'LEFT_EARLY').length,
        };
    }

    /**
     * Get attendance for today for a specific user.
     */
    static async getTodayAttendance(userId: string) {
        const start = startOfDay(new Date());
        const end = endOfDay(new Date());

        return await prisma.attendance.findFirst({
            where: {
                userId,
                date: { gte: start, lte: end },
            },
        });
    }

    /**
     * Creates an attendance correction request.
     */
    static async createRequest(userId: string, data: {
        attendanceId?: string;
        date: Date;
        requestType: string;
        newTime: Date;
        reason: string;
    }) {
        return await prisma.attendanceRequest.create({
            data: {
                userId,
                attendanceId: data.attendanceId,
                date: data.date,
                requestType: data.requestType,
                newTime: data.newTime,
                reason: data.reason,
                status: 'PENDING',
            },
        });
    }

    /**
     * Get user's attendance requests.
     */
    static async getMyRequests(userId: string) {
        return await prisma.attendanceRequest.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }

    /**
     * Get all attendance requests (Admin).
     */
    static async getAllRequests() {
        return await prisma.attendanceRequest.findMany({
            include: { user: { include: { branch: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }

    /**
     * Processes an attendance request.
     */
    static async processRequest(requestId: string, status: 'APPROVED' | 'REJECTED', remarks?: string) {
        const request = await prisma.attendanceRequest.findUnique({
            where: { id: requestId },
        });

        if (!request) throw new Error('Request not found.');

        if (status === 'REJECTED') {
            return await prisma.attendanceRequest.update({
                where: { id: requestId },
                data: { status, adminRemarks: remarks ?? null },
            });
        }

        // status === 'APPROVED'
        if (request.requestType === 'PUNCH_IN' || request.requestType === 'CORRECTION') {
            if (request.attendanceId) {
                await prisma.attendance.update({
                    where: { id: request.attendanceId },
                    data: { clockIn: request.newTime, status: 'PRESENT' },
                });
            } else {
                await prisma.attendance.create({
                    data: {
                        userId: request.userId,
                        date: request.date,
                        clockIn: request.newTime,
                        status: 'PRESENT',
                    },
                });
            }
        } else if (request.requestType === 'PUNCH_OUT') {
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
                throw new Error('No attendance record found to update punch-out.');
            }
        }

        return await prisma.attendanceRequest.update({
            where: { id: requestId },
            data: { status, adminRemarks: remarks ?? null },
        });
    }

    /**
     * Records a punch-in for a user.
     */
    static async recordPunchIn(userId: string, lat: number, lng: number, mode: string, ip: string, note?: string) {
        if (this.isWeekend()) {
            throw new Error('Punch-in is not allowed on weekends.');
        }

        if (await this.hasApprovedLeave(userId)) {
            throw new Error('You have an approved leave for today.');
        }

        const result = await this.findNearestBranch(lat, lng);
        if (!result) throw new Error('No active branches found. Contact admin.');

        const { branch: nearestBranch } = result;
        let validBranch = nearestBranch;

        if (mode !== 'OFFICE') {
            const dbUser = await prisma.user.findUnique({
                where: { id: userId },
                include: { branch: true }
            });
            validBranch = dbUser?.branch || nearestBranch;
        }

        await this.autoClosePreviousSessions(userId, validBranch);

        const start = startOfDay(new Date());
        const end = endOfDay(new Date());
        const existing = await prisma.attendance.findFirst({
            where: { userId, date: { gte: start, lte: end } },
        });

        if (existing) throw new Error('You have already punched in for today.');

        const status = await this.calculatePunchInStatus(validBranch);

        return await prisma.attendance.create({
            data: {
                userId,
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
    }

    /**
     * Records a punch-out for a user.
     */
    static async recordPunchOut(userId: string, lat: number, lng: number, note?: string) {
        const start = startOfDay(new Date());
        const end = endOfDay(new Date());
        const attendance = await prisma.attendance.findFirst({
            where: { userId, date: { gte: start, lte: end }, clockOut: null },
        });

        if (!attendance) throw new Error('No active punch-in record found today.');

        const dbUser = await prisma.user.findUnique({ where: { id: userId }, include: { branch: true } });
        const finalStatus = await this.calculatePunchOutStatus(dbUser?.branch, attendance.status);

        return await prisma.attendance.update({
            where: { id: attendance.id },
            data: {
                clockOut: new Date(),
                clockOutLat: lat,
                clockOutLng: lng,
                status: finalStatus,
                punchOutNote: note,
            },
        });
    }

    /**
     * Get all active branches.
     */
    static async getAllBranches() {
        return await prisma.branch.findMany({
            where: { isActive: true },
        });
    }

    /**
     * Get user's branch for attendance.
     */
    static async getUserBranch(userId: string) {
        const dbUser = await prisma.user.findUnique({
            where: { id: userId },
            include: { branch: true },
        });
        return dbUser?.branch || null;
    }

    /**
     * Get user's attendance history (last 30 days).
     */
    static async getAttendanceHistory(userId: string) {
        return await prisma.attendance.findMany({
            where: { userId },
            orderBy: { date: 'desc' },
            take: 30,
        });
    }

    /**
     * Fetches employees with their stats and current location.
     */
    static async fetchEmployeesWithStats(month?: string, year?: string): Promise<EmployeeWithStats[]> {
        let dateFilter = {};
        if (month && year && month !== '0') {
            const startDate = new Date(parseInt(year), parseInt(month) - 1, 1);
            const endDate = new Date(parseInt(year), parseInt(month), 0);
            dateFilter = {
                date: { gte: startDate, lte: endDate }
            };
        } else if (year) {
            const startDate = new Date(parseInt(year), 0, 1);
            const endDate = new Date(parseInt(year), 11, 31);
            dateFilter = {
                date: { gte: startDate, lte: endDate }
            };
        }

        const branches = await this.getAllBranches();

        const today = new Date();
        const startOfToday = startOfDay(today);
        const endOfToday = endOfDay(today);

        const users = await prisma.user.findMany({
            where: {},
            include: {
                role: true,
                branch: true,
                attendance: {
                    where: {
                        date: { gte: startOfToday, lte: endOfToday }
                    },
                    take: 1,
                    orderBy: { clockIn: 'desc' }
                },
                timesheets: {
                    where: dateFilter,
                    select: { totalHours: true }
                }
            },
            orderBy: { name: 'asc' }
        });

        return users.map((user: any) => {
            const totalHours = user.timesheets.reduce((acc: number, ts: any) => acc + ts.totalHours, 0);
            const { timesheets, attendance, ...userCore } = user;

            let currentLocation = undefined;
            if (attendance && attendance.length > 0) {
                const latest = attendance[0];
                if ((latest.status === 'PRESENT' || latest.status === 'LATE') && !latest.clockOut) {
                    if (latest.clockInLat && latest.clockInLng) {
                        let nearest = null;
                        let minDistance = Infinity;

                        for (const branch of branches) {
                            const dist = getDistanceFromLatLonInMeters(latest.clockInLat, latest.clockInLng, branch.latitude, branch.longitude);
                            if (dist < minDistance) {
                                minDistance = dist;
                                nearest = branch;
                            }
                        }
                        if (nearest) currentLocation = nearest.name;
                    } else if (latest.punchMode === 'WFH') {
                        currentLocation = 'Work From Home';
                    } else if (latest.punchMode === 'FIELD') {
                        currentLocation = 'On Field';
                    }
                }
            }

            return {
                ...userCore,
                totalHours,
                currentLocation,
                _count: {
                    timesheets: user.timesheets.length
                }
            } as EmployeeWithStats;
        });
    }

    /**
     * Auto-closes open attendance sessions from previous days.
     */
    static async autoClosePreviousSessions(userId: string, branch: any) {
        const openSessions = await prisma.attendance.findMany({
            where: {
                userId,
                clockOut: null,
                date: { lt: startOfDay(new Date()) }
            }
        });

        for (const session of openSessions) {
            const [endHour, endMinute] = (branch.shiftEnd || "18:00").split(':').map(Number);
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
    }
}
