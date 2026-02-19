import { NextRequest, NextResponse } from 'next/server';
import { fetchTimesheetsByProject, fetchProjectsForFilter } from '@/app/lib/report-extended-actions';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get('projectId') || '';
    const month = searchParams.get('month') || undefined;
    const year = searchParams.get('year') || undefined;

    const [entries, projects] = await Promise.all([
        fetchTimesheetsByProject(projectId, month, year),
        fetchProjectsForFilter(),
    ]);

    if (!entries) {
        return new NextResponse('Unauthorized', { status: 403 });
    }

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
