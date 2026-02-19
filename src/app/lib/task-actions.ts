'use server';

import { CreateTaskSchema } from '@/lib/schemas';
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { createError } from '@/lib/api';
import { auth } from '@/lib/auth';
import { isAdminRole } from '@/lib/permissions';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createTask(prevState: any, formData: FormData) {
    const session = await auth();
    if (!isAdminRole((session?.user as any)?.role?.code)) {
        return createError('Unauthorized');
    }

    const rawData = {
        title: formData.get('title'),
        description: formData.get('description'),
        projectId: formData.get('projectId'),
        assignedToId: formData.get('assignedToId'),
        dueDate: formData.get('dueDate'),
        priority: formData.get('priority') || 'MEDIUM',
    };

    const validatedFields = CreateTaskSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return createError('Missing Fields. Failed to Create Task.', validatedFields.error.flatten().fieldErrors);
    }

    const { title, description, projectId, assignedToId, dueDate, priority } = validatedFields.data;

    try {
        await prisma.task.create({
            data: {
                title,
                description,
                projectId,
                assignedToId,
                dueDate: dueDate ? new Date(dueDate) : null,
                priority,
                status: 'OPEN'
            }
        });
    } catch (error) {
        console.error('Task creation error:', error);
        return createError('Database Error: Failed to Create Task.');
    }

    revalidatePath('/admin/tasks');
    return { message: 'Task Created Successfully' };
}

export async function fetchTasks() {
    const session = await auth();
    if (!isAdminRole((session?.user as any)?.role?.code)) return [];

    try {
        const tasks = await prisma.task.findMany({
            include: {
                assignedTo: true,
                project: { include: { customer: true } }
            },
            orderBy: { createdAt: 'desc' },
            take: 200,
        });
        return tasks;
    } catch (error) {
        console.error('Failed to fetch tasks:', error);
        return [];
    }
}

export async function updateTaskStatus(id: string, status: string) {
    const session = await auth();
    if (!isAdminRole((session?.user as any)?.role?.code)) return { message: 'Unauthorized' };

    try {
        await prisma.task.update({
            where: { id },
            data: { status }
        });
        revalidatePath('/admin/tasks');
        return { message: 'Status Updated' };
    } catch (error) {
        return { message: 'Database Error' };
    }
}

export async function deleteTask(id: string) {
    const session = await auth();
    if (!isAdminRole((session?.user as any)?.role?.code)) return { message: 'Unauthorized' };

    try {
        await prisma.task.delete({
            where: { id }
        });
        revalidatePath('/admin/tasks');
        return { message: 'Task Deleted' };
    } catch (error) {
        return { message: 'Database Error' };
    }
}

export async function fetchEmployees() {
    const session = await auth();
    if (!isAdminRole((session?.user as any)?.role?.code)) return [];

    try {
        const users = await prisma.user.findMany({
            select: { id: true, name: true },
            orderBy: { name: 'asc' }
        });
        return users;
    } catch (error) {
        console.error('Failed to fetch employees:', error);
        return [];
    }
}

export async function fetchMyTasks() {
    const session = await auth();
    if (!session?.user?.id) return [];

    try {
        const tasks = await prisma.task.findMany({
            where: { assignedToId: session.user.id },
            include: {
                project: { include: { customer: true } },
                assignedTo: true,
            },
            orderBy: { createdAt: 'desc' },
            take: 200,
        });
        return tasks;
    } catch (error) {
        console.error('Failed to fetch my tasks:', error);
        return [];
    }
}

export async function updateMyTaskStatus(id: string, status: string) {
    const session = await auth();
    if (!session?.user?.id) return { message: 'Unauthorized' };

    try {
        const task = await prisma.task.findFirst({
            where: { id, assignedToId: session.user.id },
        });
        if (!task) return { message: 'Task not found or not assigned to you' };

        await prisma.task.update({ where: { id }, data: { status } });
        revalidatePath('/dashboard/tasks');
        return { message: 'Status Updated' };
    } catch (error) {
        return { message: 'Database Error' };
    }
}
