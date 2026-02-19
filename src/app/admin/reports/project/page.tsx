import { fetchProjectsForFilter, fetchTimesheetsByProject } from '@/app/lib/report-extended-actions';
import { FolderOpenIcon } from '@heroicons/react/24/outline';

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

export default async function Page({
    searchParams,
}: {
    searchParams: { projectId?: string; month?: string; year?: string };
}) {
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
            {/* Header */}
            <div className="pb-4 border-b border-slate-200">
                <h1 className="text-2xl font-bold text-slate-900">Project-wise Timesheets</h1>
                <p className="text-sm text-slate-500 mt-1">View all timesheet entries logged against a specific project.</p>
            </div>

            {/* Filters */}
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

            {/* Empty state */}
            {!selectedProject && (
                <div className="bg-white border border-slate-200 rounded-xl p-16 text-center shadow-sm">
                    <FolderOpenIcon className="h-10 w-10 text-slate-300 mx-auto mb-3" />
                    <p className="text-sm font-medium text-slate-600">Select a project to view its timesheet entries.</p>
                </div>
            )}

            {/* Results */}
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
