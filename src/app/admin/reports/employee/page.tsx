import { fetchAllEmployeesForReport, fetchProjectsForFilter } from '@/app/lib/report-extended-actions';
import { fetchEmployeeMonthlyReport } from '@/app/lib/report-extended-actions';
import {
    UserCircleIcon,
    ClockIcon,
    CalendarDaysIcon,
    FolderOpenIcon,
    ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';

const MONTHS = [
    { value: '1', label: 'January' }, { value: '2', label: 'February' },
    { value: '3', label: 'March' }, { value: '4', label: 'April' },
    { value: '5', label: 'May' }, { value: '6', label: 'June' },
    { value: '7', label: 'July' }, { value: '8', label: 'August' },
    { value: '9', label: 'September' }, { value: '10', label: 'October' },
    { value: '11', label: 'November' }, { value: '12', label: 'December' },
];

const YEARS = Array.from({ length: 3 }, (_, i) => (new Date().getFullYear() - i).toString());

export default async function Page({
    searchParams,
}: {
    searchParams: { userId?: string; month?: string; year?: string };
}) {
    const now = new Date();
    const selectedMonth = searchParams.month || String(now.getMonth() + 1);
    const selectedYear = searchParams.year || String(now.getFullYear());
    const selectedUserId = searchParams.userId || '';

    const [employees] = await Promise.all([fetchAllEmployeesForReport()]);

    const report = selectedUserId
        ? await fetchEmployeeMonthlyReport(selectedUserId, selectedMonth, selectedYear)
        : null;

    const monthLabel = MONTHS.find(m => m.value === selectedMonth)?.label || '';

    return (
        <div className="w-full max-w-6xl mx-auto space-y-6 pb-10">
            {/* Header */}
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

            {/* Filters */}
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
                    Generate
                </button>
            </form>

            {/* No selection */}
            {!selectedUserId && (
                <div className="bg-white border border-slate-200 rounded-xl p-16 text-center shadow-sm">
                    <UserCircleIcon className="h-10 w-10 text-slate-300 mx-auto mb-3" />
                    <p className="text-sm font-medium text-slate-600">Select an employee and month to generate the report.</p>
                </div>
            )}

            {/* No data */}
            {selectedUserId && !report && (
                <div className="bg-white border border-slate-200 rounded-xl p-16 text-center shadow-sm">
                    <p className="text-sm text-slate-500">No data found for the selected period.</p>
                </div>
            )}

            {/* Report */}
            {report && (
                <div className="space-y-5">
                    {/* Employee Info + KPIs */}
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

                    {/* Project Breakdown */}
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
                                {report.byProject.map(p => {
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

                    {/* Detailed Entries */}
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
