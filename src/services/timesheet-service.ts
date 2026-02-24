import prisma from '@/lib/db';
import { revalidatePath, unstable_cache } from 'next/cache';
import { DashboardStats, TimesheetWithDetails } from '@/types';

export class TimesheetService {
    /**
     * Fetches projects for timesheet selection.
     */
    static async getActiveProjects() {
        return await prisma.project.findMany({
            where: { isActive: true },
            include: { customer: true }
        });
    }

    /**
     * Validates if a user can create a timesheet for a specific date.
     */
    static async getOrCreateTimesheet(userId: string, date: Date) {
        let timesheet = await prisma.timesheet.findFirst({
            where: { userId, date }
        });

        if (!timesheet) {
            timesheet = await prisma.timesheet.create({
                data: {
                    userId,
                    date,
                    status: 'PENDING',
                    totalHours: 0
                }
            });
        }

        return timesheet;
    }

    /**
     * Calculates and updates total hours for a timesheet.
     */
    static async updateTimesheetTotal(timesheetId: string) {
        const allEntries = await prisma.timesheetEntry.findMany({
            where: { timesheetId }
        });

        const total = allEntries.reduce((acc: number, curr: any) => acc + curr.hours, 0);

        await prisma.timesheet.update({
            where: { id: timesheetId },
            data: { totalHours: total }
        });

        return total;
    }

    /**
     * Fetches dashboard statistics.
     */
    static async fetchDashboardStats(userId: string, isAdmin: boolean): Promise<DashboardStats | null> {
        // Cache the expensive DB work per user per role, revalidating every 60 s.
        const cacheKey = `dashboard-${userId}-${isAdmin}`;
        const cachedFetch = unstable_cache(
            async () => this._fetchDashboardData(userId, isAdmin),
            [cacheKey],
            { revalidate: 60, tags: [`dashboard-${userId}`] }
        );

        return cachedFetch();
    }

    private static async _fetchDashboardData(userId: string, isAdmin: boolean): Promise<DashboardStats> {
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

        const daysArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const chartData = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateString = d.toISOString().split('T')[0];
            const dayEntries = chartTimesheets.filter((t: any) => t.date.toISOString().startsWith(dateString));
            const total = dayEntries.reduce((acc: number, t: any) => acc + (t.totalHours || 0), 0);
            chartData.push({ name: daysArr[d.getDay()], hours: total });
        }

        return {
            isAdmin,
            totalHoursThisWeek,
            activeProjects: projectsCount,
            recentActivity: timesheets as TimesheetWithDetails[],
            chartData,
            pendingTimesheets: adminExtras ? adminExtras[0] : undefined,
            totalEmployees: adminExtras ? adminExtras[1] : undefined,
            totalOrgHoursThisWeek: adminExtras ? adminExtras[2]._sum.totalHours || 0 : undefined,
        };
    }
}
