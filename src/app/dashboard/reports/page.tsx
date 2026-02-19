import { fetchReportStats } from '@/app/lib/report-actions';
import {
    ClockIcon,
    FolderOpenIcon,
    UsersIcon,
    CheckCircleIcon,
    ChartBarIcon,
    BuildingOffice2Icon,
} from '@heroicons/react/24/outline';

// ─── Colour palette for project bars ─────────────────────────────────────────
const COLORS = [
    'bg-indigo-500', 'bg-violet-500', 'bg-sky-500',
    'bg-emerald-500', 'bg-amber-500', 'bg-rose-500',
    'bg-pink-500', 'bg-teal-500', 'bg-orange-500', 'bg-cyan-500',
];
const TEXT_COLORS = [
    'text-indigo-600', 'text-violet-600', 'text-sky-600',
    'text-emerald-600', 'text-amber-600', 'text-rose-600',
    'text-pink-600', 'text-teal-600', 'text-orange-600', 'text-cyan-600',
];

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({ label, value, sub, icon: Icon, color }: {
    label: string; value: string | number; sub?: string;
    icon: React.ElementType; color: string;
}) {
    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex items-start gap-4">
            <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
                <p className="text-3xl font-extrabold text-slate-900 mt-0.5">{value}</p>
                {sub && <p className="text-xs text-slate-400 mt-1">{sub}</p>}
            </div>
        </div>
    );
}

// ─── Horizontal Bar Chart ─────────────────────────────────────────────────────
function HBarChart({ data, maxVal, colorClass }: {
    data: { label: string; value: number; sub?: string }[];
    maxVal: number;
    colorClass?: string;
}) {
    return (
        <div className="space-y-3">
            {data.map((item, i) => (
                <div key={item.label}>
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-slate-700 truncate max-w-[60%]">{item.label}</span>
                        <span className="text-sm font-bold text-slate-900">{item.value}h</span>
                    </div>
                    {item.sub && <p className="text-xs text-slate-400 -mt-1 mb-1">{item.sub}</p>}
                    <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                        <div
                            className={`h-full rounded-full transition-all duration-700 ${colorClass || COLORS[i % COLORS.length]}`}
                            style={{ width: maxVal > 0 ? `${(item.value / maxVal) * 100}%` : '0%' }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

// ─── Monthly Bar Chart ────────────────────────────────────────────────────────
function MonthlyChart({ data }: { data: { month: string; hours: number }[] }) {
    const max = Math.max(...data.map(d => d.hours), 1);
    return (
        <div className="flex items-end gap-2 h-40 mt-4">
            {data.map((d, i) => (
                <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-xs font-bold text-slate-600">{d.hours > 0 ? `${d.hours}h` : ''}</span>
                    <div className="w-full flex items-end" style={{ height: '100px' }}>
                        <div
                            className={`w-full rounded-t-lg transition-all duration-700 ${COLORS[i % COLORS.length]}`}
                            style={{ height: `${Math.max((d.hours / max) * 100, d.hours > 0 ? 4 : 0)}%` }}
                        />
                    </div>
                    <span className="text-[10px] text-slate-400 text-center leading-tight">
                        {d.month.split(' ')[0]}
                    </span>
                </div>
            ))}
        </div>
    );
}

// ─── Task Status Badges ───────────────────────────────────────────────────────
const taskStatusStyles: Record<string, string> = {
    OPEN: 'bg-slate-100 text-slate-700',
    IN_PROGRESS: 'bg-blue-50 text-blue-700',
    COMPLETED: 'bg-emerald-50 text-emerald-700',
};

// ─── Main Page ────────────────────────────────────────────────────────────────
export default async function Page() {
    const stats = await fetchReportStats();

    if (!stats) {
        return (
            <div className="flex items-center justify-center h-64 text-slate-500">
                <p>You do not have permission to view reports.</p>
            </div>
        );
    }

    const maxProjectHours = Math.max(...stats.hoursByProject.map(p => p.hours), 1);
    const maxEmployeeHours = Math.max(...stats.hoursByEmployee.map(e => e.hours), 1);

    return (
        <div className="w-full max-w-7xl mx-auto space-y-8 pb-12">

            {/* ── Header ── */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Reports & Analytics</h1>
                    <p className="text-slate-500 mt-1">Organisation-wide performance overview.</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full">
                    <ChartBarIcon className="h-4 w-4" />
                    All Time
                </div>
            </div>

            {/* ── Summary Stats ── */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                <StatCard label="Total Hours Logged" value={`${stats.totalHours}h`} sub="Across all timesheets" icon={ClockIcon} color="bg-indigo-600" />
                <StatCard label="Active Projects" value={stats.totalProjects} sub="Currently active" icon={FolderOpenIcon} color="bg-violet-600" />
                <StatCard label="Team Members" value={stats.totalEmployees} sub="Registered users" icon={UsersIcon} color="bg-sky-600" />
                <StatCard label="Total Tasks" value={stats.totalTasks} sub="Across all projects" icon={CheckCircleIcon} color="bg-emerald-600" />
            </div>

            {/* ── Monthly Trend + Task Status ── */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* Monthly Hours Bar Chart */}
                <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <h2 className="text-base font-bold text-slate-900">Monthly Hours Trend</h2>
                            <p className="text-xs text-slate-400">Last 6 months</p>
                        </div>
                    </div>
                    <MonthlyChart data={stats.hoursByMonth} />
                </div>

                {/* Task Status Breakdown */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                    <h2 className="text-base font-bold text-slate-900 mb-4">Task Status</h2>
                    {stats.tasksByStatus.length === 0 ? (
                        <p className="text-sm text-slate-400 text-center py-8">No tasks yet</p>
                    ) : (
                        <div className="space-y-3">
                            {stats.tasksByStatus.map(t => {
                                const pct = stats.totalTasks > 0 ? Math.round((t.count / stats.totalTasks) * 100) : 0;
                                return (
                                    <div key={t.status}>
                                        <div className="flex justify-between items-center mb-1">
                                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${taskStatusStyles[t.status] || 'bg-slate-100 text-slate-600'}`}>
                                                {t.status.replace('_', ' ')}
                                            </span>
                                            <span className="text-sm font-bold text-slate-900">{t.count} <span className="text-slate-400 font-normal text-xs">({pct}%)</span></span>
                                        </div>
                                        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${t.status === 'COMPLETED' ? 'bg-emerald-500' : t.status === 'IN_PROGRESS' ? 'bg-blue-500' : 'bg-slate-400'}`}
                                                style={{ width: `${pct}%` }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* ── Hours by Project + Hours by Employee ── */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                {/* Hours by Project */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-5">
                        <FolderOpenIcon className="h-5 w-5 text-indigo-600" />
                        <h2 className="text-base font-bold text-slate-900">Hours by Project</h2>
                    </div>
                    {stats.hoursByProject.length === 0 ? (
                        <p className="text-sm text-slate-400 text-center py-8">No timesheet data yet</p>
                    ) : (
                        <HBarChart
                            data={stats.hoursByProject.map(p => ({ label: p.project, value: p.hours, sub: p.customer }))}
                            maxVal={maxProjectHours}
                        />
                    )}
                </div>

                {/* Hours by Employee */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-5">
                        <UsersIcon className="h-5 w-5 text-violet-600" />
                        <h2 className="text-base font-bold text-slate-900">Hours by Employee</h2>
                    </div>
                    {stats.hoursByEmployee.length === 0 ? (
                        <p className="text-sm text-slate-400 text-center py-8">No timesheet data yet</p>
                    ) : (
                        <HBarChart
                            data={stats.hoursByEmployee.map(e => ({ label: e.name, value: e.hours, sub: e.branch }))}
                            maxVal={maxEmployeeHours}
                            colorClass="bg-violet-500"
                        />
                    )}
                </div>
            </div>

            {/* ── Top Projects Table ── */}
            {stats.topProjects.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
                        <BuildingOffice2Icon className="h-5 w-5 text-slate-500" />
                        <h2 className="text-base font-bold text-slate-900">Top Projects by Hours</h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wide">
                                <tr>
                                    <th className="px-6 py-3 text-left">#</th>
                                    <th className="px-6 py-3 text-left">Project</th>
                                    <th className="px-6 py-3 text-left">Customer</th>
                                    <th className="px-6 py-3 text-right">Hours</th>
                                    <th className="px-6 py-3 text-left w-40">Share</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {stats.hoursByProject.map((p, i) => {
                                    const pct = stats.totalHours > 0 ? Math.round((p.hours / stats.totalHours) * 100) : 0;
                                    return (
                                        <tr key={p.project} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-3">
                                                <span className={`text-xs font-bold ${TEXT_COLORS[i % TEXT_COLORS.length]}`}>#{i + 1}</span>
                                            </td>
                                            <td className="px-6 py-3 font-semibold text-slate-900">{p.project}</td>
                                            <td className="px-6 py-3 text-slate-500">{p.customer}</td>
                                            <td className="px-6 py-3 text-right font-bold text-slate-900">{p.hours}h</td>
                                            <td className="px-6 py-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                                                        <div
                                                            className={`h-full rounded-full ${COLORS[i % COLORS.length]}`}
                                                            style={{ width: `${pct}%` }}
                                                        />
                                                    </div>
                                                    <span className="text-xs text-slate-500 w-8 text-right">{pct}%</span>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
