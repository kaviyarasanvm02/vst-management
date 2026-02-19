import { NextRequest, NextResponse } from 'next/server';
import { fetchEmployeeMonthlyReport } from '@/app/lib/report-extended-actions';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId') || '';
    const month = searchParams.get('month') || '';
    const year = searchParams.get('year') || '';

    const report = await fetchEmployeeMonthlyReport(userId, month, year);
    if (!report) {
        return new NextResponse('Unauthorized or no data', { status: 403 });
    }

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
