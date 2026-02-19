'use server';

import { CreateTimesheetSchema } from '@/lib/schemas';
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { createError } from '@/lib/api';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { TimesheetWithDetails } from '@/types';



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createTimesheet(prevState: any, formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) {
        return createError('Not authenticated');
    }

    // Parse raw data. In a real dynamic form, parsing formData directly is tricky with arrays.
    // Converting FormData to object for easier handling
    const rawData = {
        date: formData.get('date'),
        projectName: formData.get('projectName'), // Changed from projectId
        description: formData.get('description'),
        activity: formData.get('activity'),
        location: formData.get('location'),
        hours: formData.get('hours'),
    };

    // Validations
    const validatedFields = CreateTimesheetSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return createError('Missing Fields. Failed to Create Timesheet.', validatedFields.error.flatten().fieldErrors);
    }

    const { date, projectName, description, activity, location, hours } = validatedFields.data;
    const dateObj = new Date(date);

    try {
        // Find or Create Project
        let project = await prisma.project.findFirst({
            where: {
                name: {
                    equals: projectName,
                    mode: 'insensitive', // Case-insensitive match
                }
            }
        });

        if (!project) {
            project = await prisma.project.create({
                data: {
                    name: projectName,
                    code: projectName.toUpperCase().replace(/[^A-Z0-9]/g, '_'), // Generate code from name
                    isActive: true,
                    // client: 'Internal' // Removed as it's not in schema
                }
            });
        }

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
                projectId: project.id, // Use the resolved Project ID
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
        console.error("Create Timesheet Error:", error);
        return createError('Database Error: Failed to Create Timesheet.');
    }

    revalidatePath('/dashboard/timesheet');
    redirect('/dashboard/timesheet');
}

export async function fetchProjects() {
    return await prisma.project.findMany({ where: { isActive: true }, include: { customer: true } });
}

export async function fetchUserTimesheets(options?: { page?: number; limit?: number; month?: string; year?: string }): Promise<{ timesheets: TimesheetWithDetails[]; totalCount: number; totalPages: number }> {
    const session = await auth();
    if (!session?.user?.id) return { timesheets: [], totalCount: 0, totalPages: 0 };

    const { page = 1, limit = 10, month, year } = options || {};
    const skip = (page - 1) * limit;

    const userRole = session.user.role?.code;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let whereClause: any = userRole === 'ADMIN' ? {} : { userId: session.user.id };

    if (month && year) {
        const startDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        const endDate = new Date(parseInt(year), parseInt(month), 0);
        whereClause = {
            ...whereClause,
            date: {
                gte: startDate,
                lte: endDate
            }
        };
    } else if (year) {
        const startDate = new Date(parseInt(year), 0, 1);
        const endDate = new Date(parseInt(year), 11, 31);
        whereClause = {
            ...whereClause,
            date: {
                gte: startDate,
                lte: endDate
            }
        };
    }

    const [timesheets, totalCount] = await Promise.all([
        prisma.timesheet.findMany({
            where: whereClause,
            include: {
                entries: { include: { project: { include: { customer: true } } } },
                user: { include: { role: true } }
            },
            orderBy: { date: 'desc' },
            skip,
            take: limit
        }),
        prisma.timesheet.count({ where: whereClause })
    ]);

    return {
        timesheets,
        totalCount,
        totalPages: Math.ceil(totalCount / limit)
    };
}

export async function fetchPendingTimesheets(): Promise<TimesheetWithDetails[]> {
    const session = await auth();
    // In a real app, verify strict admin role here too
    if (!session?.user?.id) return [];

    return await prisma.timesheet.findMany({
        where: { status: 'PENDING' },
        include: {
            user: { include: { role: true } },
            entries: { include: { project: { include: { customer: true } } } }
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

import { DashboardStats } from '@/types/dashboard';
import { unstable_cache } from 'next/cache';

export async function fetchDashboardStats(): Promise<DashboardStats | null> {
    const session = await auth();
    if (!session?.user?.id) return null;

    const isAdmin = (session.user as any)?.role?.code === 'ADMIN';
    const userId = session.user.id;

    // Cache the expensive DB work per user per role, revalidating every 60 s.
    const cacheKey = `dashboard-${userId}-${isAdmin}`;
    const cachedFetch = unstable_cache(
        async () => _fetchDashboardData(userId, isAdmin),
        [cacheKey],
        { revalidate: 60, tags: [`dashboard-${userId}`] }
    );

    return cachedFetch();
}

async function _fetchDashboardData(userId: string, isAdmin: boolean): Promise<DashboardStats> {
    const userFilter = isAdmin ? {} : { userId };

    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay() + 1);
    startOfWeek.setHours(0, 0, 0, 0);

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);
    sevenDaysAgo.setHours(0, 0, 0, 0);

    // Run all queries in parallel
    const [projectsCount, timesheets, periodStats, chartTimesheets, adminExtras] = await Promise.all([
        prisma.project.count({ where: { isActive: true } }),
        prisma.timesheet.findMany({
            where: userFilter,
            include: {
                entries: { include: { project: { include: { customer: true } } } },
                user: { include: { role: true } }
            },
            orderBy: { date: 'desc' },
            take: 5,
        }),
        prisma.timesheet.aggregate({
            where: { ...userFilter, date: { gte: startOfWeek } },
            _sum: { totalHours: true },
        }),
        prisma.timesheet.findMany({
            where: { ...userFilter, date: { gte: sevenDaysAgo } },
            select: { date: true, totalHours: true },
        }),
        isAdmin
            ? Promise.all([
                prisma.timesheet.count({ where: { status: 'PENDING' } }),
                prisma.user.count(),
                prisma.timesheet.aggregate({
                    where: { date: { gte: startOfWeek } },
                    _sum: { totalHours: true },
                }),
            ])
            : Promise.resolve(null),
    ]);

    const totalHoursThisWeek = periodStats._sum.totalHours || 0;

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const chartData = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateString = d.toISOString().split('T')[0];
        const dayEntries = chartTimesheets.filter(t => t.date.toISOString().startsWith(dateString));
        const total = dayEntries.reduce((acc, t) => acc + (t.totalHours || 0), 0);
        chartData.push({ name: days[d.getDay()], hours: total });
    }

    return {
        isAdmin,
        totalHoursThisWeek,
        activeProjects: projectsCount,
        recentActivity: timesheets,
        chartData,
        pendingTimesheets: adminExtras ? adminExtras[0] : undefined,
        totalEmployees: adminExtras ? adminExtras[1] : undefined,
        totalOrgHoursThisWeek: adminExtras ? adminExtras[2]._sum.totalHours || 0 : undefined,
    };
}

import { EmployeeWithStats } from '@/types/dashboard';

export async function fetchEmployeesWithStats(month?: string, year?: string): Promise<EmployeeWithStats[]> {
    const session = await auth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((session?.user as any)?.role?.code !== 'ADMIN') return [];

    let dateFilter = {};
    if (month && year && month !== '0') {
        const startDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        const endDate = new Date(parseInt(year), parseInt(month), 0); // Last day of month
        dateFilter = {
            date: {
                gte: startDate,
                lte: endDate
            }
        };
    } else if (year) {
        const startDate = new Date(parseInt(year), 0, 1);
        const endDate = new Date(parseInt(year), 11, 31);
        dateFilter = {
            date: {
                gte: startDate,
                lte: endDate
            }
        };
    }

    const users = await prisma.user.findMany({
        where: {},
        include: {
            role: true,
            timesheets: {
                where: dateFilter,
                select: {
                    totalHours: true
                }
            }
        },
        orderBy: { name: 'asc' }
    });

    // Calculate stats
    return users.map(user => {
        const totalHours = user.timesheets.reduce((acc, ts) => acc + ts.totalHours, 0);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { timesheets, ...userWithoutTimesheets } = user;

        return {
            ...userWithoutTimesheets,
            totalHours,
            _count: {
                timesheets: user.timesheets.length // existing logic used length of filtered timesheets
            }
        };
    });
}

export async function fetchUserTimesheetsById(userId: string) {
    const session = await auth();
    // Allow Admin to fetch any, or User to fetch their own
    if (session?.user?.role?.code !== 'ADMIN' && session?.user?.id !== userId) {
        return [];
    }

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    return await prisma.timesheet.findMany({
        where: {
            userId: userId,
            date: {
                gte: thirtyDaysAgo
            }
        },
        include: {
            entries: { include: { project: { include: { customer: true } } } },
            user: { include: { role: true } }
        },
        orderBy: { date: 'desc' },
    });
}

// ─── Copy Yesterday's Entries ─────────────────────────────────────────────────
export async function copyYesterdayEntries(): Promise<{ success?: string; error?: string }> {
    const session = await auth();
    if (!session?.user?.id) return { error: 'Not authenticated' };

    const userId = session.user.id;

    // Find the most recent timesheet with entries
    const lastTimesheet = await prisma.timesheet.findFirst({
        where: { userId },
        include: { entries: { include: { project: true } } },
        orderBy: { date: 'desc' },
    });

    if (!lastTimesheet || lastTimesheet.entries.length === 0) {
        return { error: 'No previous entries found to copy' };
    }

    // Check if today already has a timesheet
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const existing = await prisma.timesheet.findFirst({
        where: { userId, date: today },
    });

    if (existing) {
        return { error: 'You already have a timesheet entry for today' };
    }

    const totalHours = lastTimesheet.entries.reduce((acc, e) => acc + e.hours, 0);

    const newTimesheet = await prisma.timesheet.create({
        data: {
            userId,
            date: today,
            totalHours,
            entries: {
                create: lastTimesheet.entries.map(e => ({
                    projectId: e.projectId,
                    description: e.description,
                    activity: e.activity,
                    location: e.location,
                    hours: e.hours,
                }))
            }
        }
    });

    revalidatePath('/dashboard/timesheet');
    return { success: `Copied ${lastTimesheet.entries.length} entries from ${lastTimesheet.date.toDateString()} (${newTimesheet.id})` };
}
