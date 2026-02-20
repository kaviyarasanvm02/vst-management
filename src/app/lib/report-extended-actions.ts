'use server';

import prisma from '@/lib/db';
import { auth } from '@/lib/auth';

export interface EmployeeMonthlyReport {
    employee: { id: string; name: string; email: string; branch: string; role: string };
    month: string;
    year: string;
    totalHours: number;
    daysWorked: number;
    byProject: { project: string; customer: string; hours: number }[];
    entries: {
        date: string;
        project: string;
        description: string;
        activity: string;
        location: string;
        hours: number;
    }[];
}

export async function fetchEmployeeMonthlyReport(
    userId: string,
    month: string,
    year: string
): Promise<EmployeeMonthlyReport | null> {
    const session = await auth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((session?.user as any)?.role?.code !== 'ADMIN') return null;

    const monthNum = parseInt(month);
    const yearNum = parseInt(year);
    const startDate = new Date(yearNum, monthNum - 1, 1);
    const endDate = new Date(yearNum, monthNum, 0, 23, 59, 59);

    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            role: true,
            branch: true,
            timesheets: {
                where: { date: { gte: startDate, lte: endDate } },
                include: {
                    entries: {
                        include: { project: { include: { customer: true } } }
                    }
                },
                orderBy: { date: 'asc' }
            }
        }
    });

    if (!user) return null;

    // Aggregate by project
    const projectMap = new Map<string, { customer: string; hours: number }>();
    const entries: EmployeeMonthlyReport['entries'] = [];

    for (const ts of user.timesheets) {
        for (const entry of ts.entries) {
            const pName = entry.project.name;
            const existing = projectMap.get(pName) || { customer: entry.project.customer?.name || '—', hours: 0 };
            projectMap.set(pName, { ...existing, hours: existing.hours + entry.hours });

            entries.push({
                date: ts.date.toISOString().split('T')[0],
                project: pName,
                description: entry.description,
                activity: entry.activity || '—',
                location: entry.location || '—',
                hours: entry.hours,
            });
        }
    }

    const totalHours = entries.reduce((acc, e) => acc + e.hours, 0);
    const daysWorked = new Set(entries.map(e => e.date)).size;

    return {
        employee: {
            id: user.id,
            name: user.name || user.email,
            email: user.email,
            branch: (user as any).branch?.name || (user as any).branchLegacy || '—',
            role: user.role?.name || '—',
        },
        month,
        year,
        totalHours: Math.round(totalHours * 10) / 10,
        daysWorked,
        byProject: Array.from(projectMap.entries()).map(([project, { customer, hours }]) => ({
            project, customer, hours: Math.round(hours * 10) / 10
        })).sort((a, b) => b.hours - a.hours),
        entries,
    };
}

export async function fetchAllEmployeesForReport() {
    const session = await auth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((session?.user as any)?.role?.code !== 'ADMIN') return [];

    return prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            branch: { select: { name: true } },
            branchLegacy: true
        },
        orderBy: { name: 'asc' }
    });
}

export async function fetchProjectsForFilter() {
    const session = await auth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((session?.user as any)?.role?.code !== 'ADMIN') return [];

    return prisma.project.findMany({
        where: { isActive: true },
        select: { id: true, name: true, customer: { select: { name: true } } },
        orderBy: { name: 'asc' }
    });
}

export interface ProjectTimesheetEntry {
    date: string;
    employeeName: string;
    description: string;
    activity: string;
    location: string;
    hours: number;
}

export async function fetchTimesheetsByProject(
    projectId: string,
    month?: string,
    year?: string
): Promise<ProjectTimesheetEntry[]> {
    const session = await auth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((session?.user as any)?.role?.code !== 'ADMIN') return [];

    let dateFilter = {};
    if (month && year && month !== '0') {
        const monthNum = parseInt(month);
        const yearNum = parseInt(year);
        dateFilter = {
            timesheet: {
                date: {
                    gte: new Date(yearNum, monthNum - 1, 1),
                    lte: new Date(yearNum, monthNum, 0, 23, 59, 59),
                }
            }
        };
    }

    const entries = await prisma.timesheetEntry.findMany({
        where: { projectId, ...dateFilter },
        include: {
            timesheet: { include: { user: true } }
        },
        orderBy: { timesheet: { date: 'desc' } }
    });

    return entries.map(e => ({
        date: e.timesheet.date.toISOString().split('T')[0],
        employeeName: e.timesheet.user.name || e.timesheet.user.email,
        description: e.description,
        activity: e.activity || '—',
        location: e.location || '—',
        hours: e.hours,
    }));
}
