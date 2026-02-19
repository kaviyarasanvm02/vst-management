'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { getCurrentUser } from './session';
import { LeaveSchema } from '@/lib/schemas';
import { isAdminRole } from '@/lib/permissions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function submitLeave(prevState: any, formData: FormData) {
    try {
        const user = await getCurrentUser();
        if (!user) return { error: 'Unauthorized' };

        const validatedData = LeaveSchema.safeParse({
            date: formData.get('date'),
            type: formData.get('type'),
            reason: formData.get('reason'),
        });

        if (!validatedData.success) {
            const fieldErrors = validatedData.error.flatten().fieldErrors;
            const firstError = Object.values(fieldErrors).flat()[0];
            return { error: firstError ?? 'Invalid data' };
        }

        const { date, type, reason } = validatedData.data;

        await prisma.leave.create({
            data: {
                userId: user.id,
                date: new Date(date),
                type,
                reason,
                status: 'PENDING',
            },
        });

        revalidatePath('/dashboard/leave');
        return { success: 'Leave request submitted successfully' };
    } catch (error: unknown) {
        console.error('Failed to submit leave:', error);
        const msg = error instanceof Error ? error.message : 'Failed to submit leave request';
        return { error: msg };
    }
}

export async function fetchMyLeaves() {
    const user = await getCurrentUser();
    if (!user) return [];

    return await prisma.leave.findMany({
        where: { userId: user.id },
        orderBy: { date: 'desc' },
        take: 200,
    });
}

export async function fetchAllLeaves() {
    const user = await getCurrentUser();
    if (!user || !isAdminRole(user.role?.code)) return [];

    return await prisma.leave.findMany({
        include: {
            user: {
                select: {
                    name: true,
                    email: true,
                    role: { select: { name: true } },
                },
            },
        },
        orderBy: { date: 'desc' },
        take: 500,
    });
}

export async function updateLeaveStatus(id: string, status: 'APPROVED' | 'REJECTED') {
    try {
        const user = await getCurrentUser();
        if (!user || !isAdminRole(user.role?.code)) return { error: 'Unauthorized' };

        await prisma.leave.update({ where: { id }, data: { status } });

        revalidatePath('/dashboard/leave');
        return { success: `Leave request ${status.toLowerCase()}` };
    } catch (error) {
        console.error('Failed to update leave status:', error);
        return { error: 'Failed to update leave status' };
    }
}
