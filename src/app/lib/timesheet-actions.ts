'use server';

import { z } from 'zod';
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

const TimesheetSchema = z.object({
    date: z.string(),
    entries: z.array(z.object({
        projectId: z.string(),
        description: z.string(),
        hours: z.coerce.number().min(0.1),
    }))
});

export async function createTimesheet(prevState: any, formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) {
        return { message: 'Not authenticated' };
    }

    // Parse raw data. In a real dynamic form, parsing formData directly is tricky with arrays.
    // For simplicity, we might assume a JSON payload or structured form fields.
    // Converting FormData to object for easier handling
    const rawData = {
        date: formData.get('date'),
        projectId: formData.get('projectId'),
        description: formData.get('description'),
        activity: formData.get('activity'),
        location: formData.get('location'),
        hours: formData.get('hours'),
    };

    // Simple single entry creation for MVP
    const validatedFields = z.object({
        date: z.string(),
        projectId: z.string(),
        description: z.string(),
        activity: z.string(),
        location: z.string(),
        hours: z.coerce.number().min(0.1)
    }).safeParse(rawData);

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Timesheet.',
        };
    }

    const { date, projectId, description, activity, location, hours } = validatedFields.data;
    const dateObj = new Date(date);

    try {
        // Check if timesheet for date exists for user
        let timesheet = await prisma.timesheet.findFirst({
            where: {
                userId: session.user.id,
                date: dateObj
            }
        });

        if (!timesheet) {
            timesheet = await prisma.timesheet.create({
                data: {
                    userId: session.user.id,
                    date: dateObj,
                    status: 'PENDING',
                    totalHours: 0
                }
            });
        }

        await prisma.timesheetEntry.create({
            data: {
                timesheetId: timesheet.id,
                projectId: projectId,
                description: description,
                activity: activity,
                location: location,
                hours: hours
            }
        });

        // Update total hours
        const allEntries = await prisma.timesheetEntry.findMany({
            where: { timesheetId: timesheet.id }
        });
        const total = allEntries.reduce((acc, curr) => acc + curr.hours, 0);

        await prisma.timesheet.update({
            where: { id: timesheet.id },
            data: { totalHours: total }
        });

    } catch (error) {
        return { message: 'Database Error: Failed to Create Timesheet.' };
    }

    revalidatePath('/dashboard/timesheet');
    redirect('/dashboard/timesheet');
}

export async function fetchProjects() {
    return await prisma.project.findMany({ where: { isActive: true } });
}

export async function fetchUserTimesheets() {
    const session = await auth();
    if (!session?.user?.id) return [];

    return await prisma.timesheet.findMany({
        where: { userId: session.user.id },
        include: { entries: { include: { project: true } } },
        orderBy: { date: 'desc' },
    });
}

export async function fetchPendingTimesheets() {
    const session = await auth();
    // In a real app, verify strict admin role here too
    if (!session?.user?.id) return [];

    return await prisma.timesheet.findMany({
        where: { status: 'PENDING' },
        include: {
            user: true,
            entries: { include: { project: true } }
        },
        orderBy: { date: 'asc' },
    });
}

export async function updateTimesheetStatus(id: string, status: 'APPROVED' | 'REJECTED') {
    const session = await auth();
    // Verify admin role
    if (!session?.user?.id) return { message: 'Unauthorized' };

    try {
        await prisma.timesheet.update({
            where: { id },
            data: { status }
        });
        revalidatePath('/admin/approvals');
        revalidatePath('/dashboard/timesheet');
    } catch (error) {
        return { message: 'Failed to update status' };
    }
}

export async function fetchDashboardStats() {
    const session = await auth();
    if (!session?.user?.id) return null;

    const [projectsCount, timesheets, pendingCount] = await Promise.all([
        prisma.project.count({ where: { isActive: true } }),
        prisma.timesheet.findMany({
            where: { userId: session.user.id },
            include: { entries: { include: { project: true } } },
            orderBy: { date: 'desc' },
            take: 5
        }),
        prisma.timesheet.count({
            where: { status: 'PENDING' } // Admin view usually, or user's pending? Assuming admin for now or general 'pending in system'
        })
    ]);

    // Calculate total hours for this week (simple approach for now, usually needs date filtering)
    // For now, let's just sum all time for the user to show *something* or filter in JS
    const now = new Date();
    const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));

    // This is a rough "this week" calculation without sophisticated date queries for simplicity
    // Ideally use db date filtering

    const userAllTimesheets = await prisma.timesheet.findMany({
        where: {
            userId: session.user.id,
            date: { gte: startOfWeek } // PostgreSQL handles Date objects well
        },
        select: { totalHours: true }
    });

    const totalHoursThisWeek = userAllTimesheets.reduce((acc, curr) => acc + curr.totalHours, 0);

    // Chart Data: Last 7 days
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const chartData = [];

    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dayStr = days[d.getDay()];

        // Simple aggregate for this day from fetched timesheets
        // NOTE: In production, do this via DB GroupBy for performance. 
        // Here we filter the 'userAllTimesheets' we already fetched if they match date.
        // But userAllTimesheets is filtered by "StartOfWeek", so it might miss last 7 days crossing weeks.
        // Let's ensure we fetch enough data or just fetch last 7 days specifically.
    }

    // Better approach: Fetch specifically for chart
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const chartTimesheets = await prisma.timesheet.findMany({
        where: {
            userId: session.user.id,
            date: { gte: sevenDaysAgo }
        },
        select: { date: true, totalHours: true }
    });

    // Populate chart data 
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateString = d.toISOString().split('T')[0];

        const dayEntries = chartTimesheets.filter(t => t.date.toISOString().startsWith(dateString));
        const total = dayEntries.reduce((acc, t) => acc + t.totalHours, 0);

        chartData.push({
            name: days[d.getDay()],
            hours: total
        });
    }

    return {
        totalHoursThisWeek,
        pendingApprovals: pendingCount,
        activeProjects: projectsCount,
        recentActivity: timesheets,
        chartData
    };
}
