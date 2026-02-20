'use server';

import prisma from '@/lib/db';
import { auth } from '@/lib/auth';

export interface ReportStats {
    totalHours: number;
    totalProjects: number;
    totalEmployees: number;
    totalTasks: number;
    tasksByStatus: { status: string; count: number }[];
    hoursByProject: { project: string; hours: number; customer: string }[];
    hoursByEmployee: { name: string; hours: number; branch: string }[];
    hoursByMonth: { month: string; hours: number }[];
    topProjects: { name: string; hours: number; percentage: number }[];
}

export async function fetchReportStats(
    fromDate?: string,
    toDate?: string
): Promise<ReportStats | null> {
    const session = await auth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((session?.user as any)?.role?.code !== 'ADMIN') return null;

    const dateFilter = fromDate && toDate
        ? { date: { gte: new Date(fromDate), lte: new Date(toDate) } }
        : {};

    // ── Parallel queries ──────────────────────────────────────────────────────
    const [
        timesheets,
        projectsCount,
        employeesCount,
        tasksByStatus,
        hoursByEmployee,
    ] = await Promise.all([
        prisma.timesheet.findMany({
            where: dateFilter,
            include: {
                entries: { include: { project: { include: { customer: true } } } },
                user: { include: { branch: true } },
            },
        }),
        prisma.project.count({ where: { isActive: true } }),
        prisma.user.count(),
        prisma.task.groupBy({
            by: ['status'],
            _count: { status: true },
        }),
        prisma.user.findMany({
            include: {
                timesheets: {
                    where: dateFilter,
                    include: { entries: true },
                },
                branch: true,
            },
        }),
    ]);

    // ── Total Hours ───────────────────────────────────────────────────────────
    const totalHours = timesheets.reduce((acc, ts) => acc + (ts.totalHours || 0), 0);

    // ── Hours by Project ──────────────────────────────────────────────────────
    const projectHoursMap = new Map<string, { hours: number; customer: string }>();
    for (const ts of timesheets) {
        for (const entry of ts.entries) {
            const key = entry.project.name;
            const existing = projectHoursMap.get(key) || { hours: 0, customer: entry.project.customer?.name || '—' };
            projectHoursMap.set(key, { hours: existing.hours + entry.hours, customer: existing.customer });
        }
    }
    const hoursByProject = Array.from(projectHoursMap.entries())
        .map(([project, { hours, customer }]) => ({ project, hours: Math.round(hours * 10) / 10, customer }))
        .sort((a, b) => b.hours - a.hours)
        .slice(0, 10);

    // ── Top Projects (for donut chart) ────────────────────────────────────────
    const totalProjectHours = hoursByProject.reduce((acc, p) => acc + p.hours, 0);
    const topProjects = hoursByProject.slice(0, 5).map(p => ({
        name: p.project,
        hours: p.hours,
        percentage: totalProjectHours > 0 ? Math.round((p.hours / totalProjectHours) * 100) : 0,
    }));

    // ── Hours by Employee ─────────────────────────────────────────────────────
    const empHours = hoursByEmployee
        .map(u => ({
            name: u.name || u.email,
            branch: (u as any).branch?.name || (u as any).branchLegacy || '—',
            hours: u.timesheets.reduce((acc, ts) =>
                acc + ts.entries.reduce((a, e) => a + e.hours, 0), 0),
        }))
        .filter(u => u.hours > 0)
        .sort((a, b) => b.hours - a.hours)
        .slice(0, 10);

    // ── Hours by Month (last 6 months) ────────────────────────────────────────
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthMap = new Map<string, number>();
    for (const ts of timesheets) {
        const key = `${ts.date.getFullYear()}-${ts.date.getMonth()}`;
        monthMap.set(key, (monthMap.get(key) || 0) + (ts.totalHours || 0));
    }
    // Build last 6 months
    const now = new Date();
    const hoursByMonth = [];
    for (let i = 5; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const key = `${d.getFullYear()}-${d.getMonth()}`;
        hoursByMonth.push({
            month: `${monthNames[d.getMonth()]} ${d.getFullYear()}`,
            hours: Math.round((monthMap.get(key) || 0) * 10) / 10,
        });
    }

    return {
        totalHours: Math.round(totalHours * 10) / 10,
        totalProjects: projectsCount,
        totalEmployees: employeesCount,
        totalTasks: tasksByStatus.reduce((acc, t) => acc + t._count.status, 0),
        tasksByStatus: tasksByStatus.map(t => ({ status: t.status, count: t._count.status })),
        hoursByProject,
        hoursByEmployee: empHours,
        hoursByMonth,
        topProjects,
    };
}
