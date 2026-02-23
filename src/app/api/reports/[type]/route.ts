import { NextRequest, NextResponse } from 'next/server';
import {
    fetchEmployeeMonthlyReport,
    fetchTimesheetsByProject,
    fetchProjectsForFilter
} from '@/app/lib/report-extended-actions';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ type: string }> }
) {
    const { type } = await params;
    const { searchParams } = new URL(request.url);

    if (type === 'employee-csv') {
        const userId = searchParams.get('userId') || '';
        const month = searchParams.get('month') || '';
        const year = searchParams.get('year') || '';

        const report = await fetchEmployeeMonthlyReport(userId, month, year);
        if (!report) return new NextResponse('Unauthorized or no data', { status: 403 });

        const rows = [
            ['Date', 'Project', 'Activity', 'Location', 'Description', 'Hours'],
            ...report.entries.map(e => [
                e.date, e.project, e.activity, e.location,
                `"${e.description.replace(/"/g, '""')}"`,
                e.hours.toString()
            ])
        ];
        const csv = rows.map(r => r.join(',')).join('\n');
        const filename = `${report.employee.name.replace(/\s+/g, '_')}_${report.month}_${report.year}.csv`;
        return new NextResponse(csv, {
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': `attachment; filename="${filename}"`,
            },
        });
    }

    if (type === 'project-csv') {
        const projectId = searchParams.get('projectId') || '';
        const month = searchParams.get('month') || undefined;
        const year = searchParams.get('year') || undefined;

        const [entries, projects] = await Promise.all([
            fetchTimesheetsByProject(projectId, month, year),
            fetchProjectsForFilter(),
        ]);
        if (!entries) return new NextResponse('Unauthorized', { status: 403 });

        const projectName = projects.find(p => p.id === projectId)?.name || 'project';
        const rows = [
            ['Date', 'Employee', 'Activity', 'Location', 'Description', 'Hours'],
            ...entries.map(e => [
                e.date, e.employeeName, e.activity, e.location,
                `"${e.description.replace(/"/g, '""')}"`,
                e.hours.toString()
            ])
        ];
        const csv = rows.map(r => r.join(',')).join('\n');
        const filename = `${projectName.replace(/\s+/g, '_')}_${month || 'all'}_${year || ''}.csv`;
        return new NextResponse(csv, {
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': `attachment; filename="${filename}"`,
            },
        });
    }

    return new NextResponse('Not Found', { status: 404 });
}
