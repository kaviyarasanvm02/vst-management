import prisma from '@/lib/db';
import { getCurrentUser } from '@/app/lib/session';
import { redirect, notFound } from 'next/navigation';
import { format, startOfMonth, endOfMonth } from 'date-fns';
import clsx from 'clsx';
import {
    ChartBarIcon,
    ArrowDownTrayIcon,
    UserCircleIcon,
    ClockIcon,
    CalendarDaysIcon,
    FolderOpenIcon
} from '@heroicons/react/24/outline';
import {
    fetchAllEmployeesForReport,
    fetchProjectsForFilter,
    fetchEmployeeMonthlyReport,
    fetchTimesheetsByProject
} from '@/app/lib/report-extended-actions';
import LocationReportClient from '@/components/reports/location-report-client';

const MONTHS = [
    { value: '0', label: 'All Months' },
    { value: '1', label: 'January' }, { value: '2', label: 'February' },
    { value: '3', label: 'March' }, { value: '4', label: 'April' },
    { value: '5', label: 'May' }, { value: '6', label: 'June' },
    { value: '7', label: 'July' }, { value: '8', label: 'August' },
    { value: '9', label: 'September' }, { value: '10', label: 'October' },
    { value: '11', label: 'November' }, { value: '12', label: 'December' },
];
const YEARS = Array.from({ length: 3 }, (_, i) => (new Date().getFullYear() - i).toString());

export default async function ConsolidatedReportsPage({
    params: paramsPromise,
    searchParams: searchParamsPromise,
}: {
    params: Promise<{ type?: string[] }>;
    searchParams: Promise<{ userId?: string; projectId?: string; month?: string; year?: string }>;
}) {
    const resolvedParams = await paramsPromise;
    const pathSegments = resolvedParams.type || [];
    const searchParams = await searchParamsPromise;

    // Default to /admin/reports/attendance if no type is specified
    if (pathSegments.length === 0) {
        redirect('/admin/reports/attendance');
    }

    const type = pathSegments[0];

    if (!['attendance', 'employee', 'project', 'location'].includes(type)) {
        notFound();
    }

    if (type === 'attendance') return <AttendanceReport />;
    if (type === 'employee') return <EmployeeReport searchParams={searchParams} />;
    if (type === 'project') return <ProjectReport searchParams={searchParams} />;
    if (type === 'location') return <LocationReportClient />;

    return notFound();
}

async function AttendanceReport() {
    const user = await getCurrentUser();
    if (!user) redirect('/auth/login');

    const start = startOfMonth(new Date());
    const end = endOfMonth(new Date());

    const attendance = await prisma.attendance.findMany({
        where: { date: { gte: start, lte: end } },
        include: { user: { include: { branch: true } } },
        orderBy: { date: 'desc' },
    });

    return (
        <div className="space-y-6 pb-12">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Attendance Report</h1>
                    <p className="text-sm text-slate-500 mt-1">Viewing attendance records for {format(new Date(), 'MMMM yyyy')}.</p>
                </div>
                <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2.1 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-900/20">
                    <ArrowDownTrayIcon className="h-4 w-4" />
                    Export CSV
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Present</p>
                    <p className="text-2xl font-bold text-emerald-600 mt-2">{attendance.filter((a: any) => a.status === 'PRESENT' || a.status === 'LATE').length}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Late</p>
                    <p className="text-2xl font-bold text-amber-500 mt-2">{attendance.filter((a: any) => a.status === 'LATE').length}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Early Departures</p>
                    <p className="text-2xl font-bold text-orange-500 mt-2">{attendance.filter((a: any) => a.status === 'LEFT_EARLY').length}</p>
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-semibold">User</th>
                                <th className="px-6 py-4 font-semibold">Branch</th>
                                <th className="px-6 py-4 font-semibold">Date</th>
                                <th className="px-6 py-4 font-semibold">Clock In</th>
                                <th className="px-6 py-4 font-semibold">Clock Out</th>
                                <th className="px-6 py-4 font-semibold">Mode</th>
                                <th className="px-6 py-4 font-semibold text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {attendance.map((a: any) => (
                                <tr key={a.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">{a.user.name}</td>
                                    <td className="px-6 py-4 text-slate-600">{a.user.branch?.name || '—'}</td>
                                    <td className="px-6 py-4 text-slate-600">{format(new Date(a.date), 'MMM d, yyyy')}</td>
                                    <td className="px-6 py-4 font-medium text-slate-900">
                                        {format(new Date(a.clockIn), 'h:mm a')}
                                        {a.punchInNote && <div className="text-[10px] text-indigo-500 italic mt-0.5">{a.punchInNote}</div>}
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">
                                        {a.clockOut ? format(new Date(a.clockOut), 'h:mm a') : '—'}
                                        {a.punchOutNote && <div className="text-[10px] text-emerald-500 italic mt-0.5">{a.punchOutNote}</div>}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200">
                                            {a.punchMode}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={clsx(
                                            "items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
                                            {
                                                "bg-emerald-50 text-emerald-700": a.status === 'PRESENT',
                                                "bg-amber-50 text-amber-700": a.status === 'LATE',
                                                "bg-orange-50 text-orange-700": a.status === 'LEFT_EARLY',
                                                "bg-slate-50 text-slate-700": a.status === 'AUTO_OUT',
                                            }
                                        )}>
                                            {a.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

async function EmployeeReport({ searchParams }: { searchParams: any }) {
    const now = new Date();
    const selectedMonth = searchParams.month || String(now.getMonth() + 1);
    const selectedYear = searchParams.year || String(now.getFullYear());
    const selectedUserId = searchParams.userId || '';

    const employees = await fetchAllEmployeesForReport();
    const report = selectedUserId
        ? await fetchEmployeeMonthlyReport(selectedUserId, selectedMonth, selectedYear)
        : null;

    const monthLabel = MONTHS.find(m => m.value === selectedMonth)?.label || '';

    return (
        <div className="w-full max-w-6xl mx-auto space-y-6 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Employee Monthly Report</h1>
                    <p className="text-sm text-slate-500 mt-1">View detailed timesheet breakdown per employee per month.</p>
                </div>
                {report && (
                    <a
                        href={`/api/reports/employee-csv?userId=${selectedUserId}&month=${selectedMonth}&year=${selectedYear}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
                    >
                        <ArrowDownTrayIcon className="h-4 w-4" />
                        Export CSV
                    </a>
                )}
            </div>

            <form method="GET" className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-wrap gap-4 items-end">
                <div className="flex-1 min-w-[180px]">
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Employee</label>
                    <select name="userId" defaultValue={selectedUserId}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                        <option value="">Select Employee</option>
                        {employees.map(e => (
                            <option key={e.id} value={e.id}>{e.name || e.email}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Month</label>
                    <select name="month" defaultValue={selectedMonth}
                        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                        {MONTHS.slice(1).map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Year</label>
                    <select name="year" defaultValue={selectedYear}
                        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                        {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                </div>
                <button type="submit"
                    className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors shadow-sm">
                    Generate
                </button>
            </form>

            {!selectedUserId && (
                <div className="bg-white border border-slate-200 rounded-xl p-16 text-center shadow-sm">
                    <UserCircleIcon className="h-10 w-10 text-slate-300 mx-auto mb-3" />
                    <p className="text-sm font-medium text-slate-600">Select an employee and month to generate the report.</p>
                </div>
            )}

            {selectedUserId && !report && (
                <div className="bg-white border border-slate-200 rounded-xl p-16 text-center shadow-sm">
                    <p className="text-sm text-slate-500">No data found for the selected period.</p>
                </div>
            )}

            {report && (
                <div className="space-y-5">
                    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg">
                                    {report.employee.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">{report.employee.name}</p>
                                    <p className="text-xs text-slate-500">{report.employee.email} · {report.employee.role} · {report.employee.branch}</p>
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-slate-500">{monthLabel} {report.year}</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5 pt-5 border-t border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-indigo-50 flex items-center justify-center">
                                    <ClockIcon className="h-5 w-5 text-indigo-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">Total Hours</p>
                                    <p className="text-lg font-bold text-slate-900">{report.totalHours}h</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                                    <CalendarDaysIcon className="h-5 w-5 text-emerald-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">Days Worked</p>
                                    <p className="text-lg font-bold text-slate-900">{report.daysWorked}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-lg bg-violet-50 flex items-center justify-center">
                                    <FolderOpenIcon className="h-5 w-5 text-violet-600" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">Projects</p>
                                    <p className="text-lg font-bold text-slate-900">{report.byProject.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                        <div className="px-5 py-4 border-b border-slate-100">
                            <h2 className="text-sm font-bold text-slate-900">Hours by Project</h2>
                        </div>
                        <table className="w-full text-sm">
                            <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wide">
                                <tr>
                                    <th className="px-5 py-3 text-left">Project</th>
                                    <th className="px-5 py-3 text-left">Customer</th>
                                    <th className="px-5 py-3 text-right">Hours</th>
                                    <th className="px-5 py-3 text-left w-36">Share</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {report.byProject.map((p) => {
                                    const pct = report.totalHours > 0 ? Math.round((p.hours / report.totalHours) * 100) : 0;
                                    return (
                                        <tr key={p.project} className="hover:bg-slate-50">
                                            <td className="px-5 py-3 font-medium text-slate-900">{p.project}</td>
                                            <td className="px-5 py-3 text-slate-500">{p.customer}</td>
                                            <td className="px-5 py-3 text-right font-bold text-slate-900">{p.hours}h</td>
                                            <td className="px-5 py-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                                        <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${pct}%` }} />
                                                    </div>
                                                    <span className="text-xs text-slate-400 w-8 text-right">{pct}%</span>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                        <div className="px-5 py-4 border-b border-slate-100">
                            <h2 className="text-sm font-bold text-slate-900">Daily Entries ({report.entries.length})</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wide">
                                    <tr>
                                        <th className="px-5 py-3 text-left">Date</th>
                                        <th className="px-5 py-3 text-left">Project</th>
                                        <th className="px-5 py-3 text-left">Activity</th>
                                        <th className="px-5 py-3 text-left">Location</th>
                                        <th className="px-5 py-3 text-left">Description</th>
                                        <th className="px-5 py-3 text-right">Hours</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {report.entries.map((e, i) => (
                                        <tr key={i} className="hover:bg-slate-50">
                                            <td className="px-5 py-3 font-mono text-xs text-slate-600">{e.date}</td>
                                            <td className="px-5 py-3 font-medium text-slate-900">{e.project}</td>
                                            <td className="px-5 py-3 text-slate-500">{e.activity}</td>
                                            <td className="px-5 py-3 text-slate-500">{e.location}</td>
                                            <td className="px-5 py-3 text-slate-600 max-w-xs truncate">{e.description}</td>
                                            <td className="px-5 py-3 text-right font-bold text-slate-900">{e.hours}h</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot className="bg-slate-50 border-t border-slate-200">
                                    <tr>
                                        <td colSpan={5} className="px-5 py-3 text-sm font-bold text-slate-700 text-right">Total</td>
                                        <td className="px-5 py-3 text-right font-extrabold text-indigo-700">{report.totalHours}h</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

async function ProjectReport({ searchParams }: { searchParams: any }) {
    const now = new Date();
    const selectedProject = searchParams.projectId || '';
    const selectedMonth = searchParams.month || String(now.getMonth() + 1);
    const selectedYear = searchParams.year || String(now.getFullYear());

    const projects = await fetchProjectsForFilter();
    const entries = selectedProject
        ? await fetchTimesheetsByProject(selectedProject, selectedMonth, selectedYear)
        : [];

    const totalHours = entries.reduce((acc, e) => acc + e.hours, 0);
    const projectName = projects.find(p => p.id === selectedProject)?.name || '';

    return (
        <div className="w-full max-w-6xl mx-auto space-y-6 pb-10">
            <div className="pb-4 border-b border-slate-200">
                <h1 className="text-2xl font-bold text-slate-900">Project-wise Timesheets</h1>
                <p className="text-sm text-slate-500 mt-1">View all timesheet entries logged against a specific project.</p>
            </div>

            <form method="GET" className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-wrap gap-4 items-end">
                <div className="flex-1 min-w-[200px]">
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Project</label>
                    <select name="projectId" defaultValue={selectedProject}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                        <option value="">Select Project</option>
                        {projects.map(p => (
                            <option key={p.id} value={p.id}>
                                {p.name}{p.customer ? ` — ${p.customer.name}` : ''}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Month</label>
                    <select name="month" defaultValue={selectedMonth}
                        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                        {MONTHS.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Year</label>
                    <select name="year" defaultValue={selectedYear}
                        className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                        {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                </div>
                <button type="submit"
                    className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors shadow-sm">
                    Filter
                </button>
            </form>

            {!selectedProject && (
                <div className="bg-white border border-slate-200 rounded-xl p-16 text-center shadow-sm">
                    <FolderOpenIcon className="h-10 w-10 text-slate-300 mx-auto mb-3" />
                    <p className="text-sm font-medium text-slate-600">Select a project to view its timesheet entries.</p>
                </div>
            )}

            {selectedProject && (
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                        <div>
                            <h2 className="text-sm font-bold text-slate-900">{projectName}</h2>
                            <p className="text-xs text-slate-400 mt-0.5">{entries.length} entries · {Math.round(totalHours * 10) / 10}h total</p>
                        </div>
                        <a
                            href={`/api/reports/project-csv?projectId=${selectedProject}&month=${selectedMonth}&year=${selectedYear}`}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 border border-indigo-200 rounded-lg px-3 py-1.5 hover:bg-indigo-50 transition-colors"
                        >
                            Export CSV
                        </a>
                    </div>

                    {entries.length === 0 ? (
                        <div className="py-12 text-center text-sm text-slate-400">No entries found for this period.</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wide">
                                    <tr>
                                        <th className="px-5 py-3 text-left">Date</th>
                                        <th className="px-5 py-3 text-left">Employee</th>
                                        <th className="px-5 py-3 text-left">Activity</th>
                                        <th className="px-5 py-3 text-left">Location</th>
                                        <th className="px-5 py-3 text-left">Description</th>
                                        <th className="px-5 py-3 text-right">Hours</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {entries.map((e, i) => (
                                        <tr key={i} className="hover:bg-slate-50">
                                            <td className="px-5 py-3 font-mono text-xs text-slate-600">{e.date}</td>
                                            <td className="px-5 py-3 font-medium text-slate-900">{e.employeeName}</td>
                                            <td className="px-5 py-3 text-slate-500">{e.activity}</td>
                                            <td className="px-5 py-3 text-slate-500">{e.location}</td>
                                            <td className="px-5 py-3 text-slate-600 max-w-xs truncate">{e.description}</td>
                                            <td className="px-5 py-3 text-right font-bold text-slate-900">{e.hours}h</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot className="bg-slate-50 border-t border-slate-200">
                                    <tr>
                                        <td colSpan={5} className="px-5 py-3 text-sm font-bold text-slate-700 text-right">Total</td>
                                        <td className="px-5 py-3 text-right font-extrabold text-indigo-700">{Math.round(totalHours * 10) / 10}h</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
