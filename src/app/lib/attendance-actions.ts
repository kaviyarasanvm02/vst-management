'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { getCurrentUser } from './session';
import { AttendanceService } from '@/services/attendance-service';

export type PunchResult = {
    success?: string;
    error?: string;
};

import { headers } from 'next/headers';

export async function punchIn(lat: number, lng: number, mode: string = 'OFFICE', note?: string): Promise<PunchResult> {
    try {
        const user = await getCurrentUser();
        if (!user) return { error: 'Unauthorized' };

        const headersList = await headers();
        const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown';

        await AttendanceService.recordPunchIn(user.id, lat, lng, mode, ip, note);

        revalidatePath('/dashboard');
        return { success: 'Punched In Successfully!' };
    } catch (error: any) {
        console.error('Punch In Error:', error);
        return { error: error.message || 'Failed to punch in.' };
    }
}

export async function punchOut(lat: number, lng: number, note?: string): Promise<PunchResult> {
    try {
        const user = await getCurrentUser();
        if (!user) return { error: 'Unauthorized' };

        await AttendanceService.recordPunchOut(user.id, lat, lng, note);

        revalidatePath('/dashboard');
        return { success: 'Punched Out Successfully!' };
    } catch (error: any) {
        console.error('Punch Out Error:', error);
        return { error: error.message || 'Failed to punch out.' };
    }
}


export async function getTodayAttendance() {
    const user = await getCurrentUser();
    if (!user) return null;
    return await AttendanceService.getTodayAttendance(user.id);
}

export async function getUserBranch() {
    const user = await getCurrentUser();
    if (!user) return null;
    return await AttendanceService.getUserBranch(user.id);
}

export async function getAllBranches() {
    return await AttendanceService.getAllBranches();
}

export async function getAttendanceHistory() {
    const user = await getCurrentUser();
    if (!user) return [];
    return await AttendanceService.getAttendanceHistory(user.id);
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
        await AttendanceService.createRequest(user.id, data);
        revalidatePath('/dashboard/attendance');
        return { success: 'Correction request submitted successfully.' };
    } catch (error: any) {
        console.error('Create Attendance Request Error:', error);
        return { error: error.message || 'Failed to submit request.' };
    }
}

export async function getMyAttendanceRequests() {
    const user = await getCurrentUser();
    if (!user) return [];
    return await AttendanceService.getMyRequests(user.id);
}

export async function getAllAttendanceRequests() {
    const user = await getCurrentUser();
    if (!user) return [];

    const dbUser = await AttendanceService.getUserBranch(user.id); // Reusing getUserBranch to fetch user with branch/role if needed, but I need role.
    // Actually, getCurrentUser already has role in some contexts, but let's be explicit.
    const fullUser = await prisma.user.findUnique({
        where: { id: user.id },
        include: { role: true },
    });

    if (fullUser?.role?.code !== 'ADMIN') {
        return [];
    }

    return await AttendanceService.getAllRequests();
}

export async function processAttendanceRequest(requestId: string, status: 'APPROVED' | 'REJECTED', remarks?: string) {
    const user = await getCurrentUser();
    if (!user) return { error: 'Unauthorized' };

    try {
        await AttendanceService.processRequest(requestId, status, remarks);

        revalidatePath('/admin/management/attendance-requests');
        revalidatePath('/dashboard/attendance');
        return { success: status === 'APPROVED' ? 'Request approved and attendance updated.' : 'Request rejected.' };
    } catch (error: any) {
        console.error('Process Attendance Request Error:', error);
        return { error: error.message || 'Failed to process request.' };
    }
}
