import { auth } from '@/lib/auth';
import Link from 'next/link';
import { fetchDashboardStats } from '@/app/lib/timesheet-actions';
import {
    ClockIcon,
    FolderOpenIcon,
    PlusIcon,
    ArrowRightIcon,
    ChartBarIcon,
    DocumentTextIcon,
    UsersIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import WeeklyActivityChart from '@/components/dashboard/weekly-chart';

import { AttendanceCard } from '@/components/dashboard/attendance-card';
import { getTodayAttendance, getAllBranches } from '@/app/lib/attendance-actions';

// ─── Stat Card ────────────────────────────────────────────────────────────────
function StatCard({
    label, value, unit, sub, icon: Icon, accent,
}: {
    label: string;
    value: string | number;
    unit?: string;
    sub?: string;
    icon: React.ElementType;
    accent: string;
}) {
    return (
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4 shadow-sm">
            <div className={`h-11 w-11 rounded-lg flex items-center justify-center shrink-0 ${accent}`}>
                <Icon className="h-5 w-5 text-white" />
            </div>
            <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</p>
                <p className="text-2xl font-bold text-slate-900 mt-0.5 leading-none">
                    {value}
                    {unit && <span className="text-sm font-medium text-slate-400 ml-1">{unit}</span>}
                </p>
                {sub && <p className="text-xs text-slate-400 mt-1">{sub}</p>}
            </div>
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function Page() {
    const session = await auth();
    const stats = await fetchDashboardStats();

    // Fetch Attendance Data
    const [todayAttendance, branches] = await Promise.all([
        getTodayAttendance(),
        getAllBranches(),
    ]);

    if (!stats) return null;

    const currentDate = new Date();
    const userName = session?.user?.name || 'User';
    const isAdmin = stats.isAdmin;

    return (
        <main className="max-w-7xl mx-auto space-y-6 pb-10">

            {/* ── Page Header ── */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
                        {format(currentDate, 'EEEE, MMMM d, yyyy')}
                    </p>
                    <h1 className="text-2xl font-bold text-slate-900">
                        {isAdmin ? `Admin Overview` : `Welcome back, ${userName}`}
                    </h1>
                    {isAdmin && (
                        <p className="text-sm text-slate-500 mt-0.5">Organisation-wide summary</p>
                    )}
                </div>
                <div className="flex items-center gap-3">
                    {/* View Attendance History Link */}
                    {!isAdmin && (
                        <Link
                            href="/dashboard/attendance"
                            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                        >
                            <ClockIcon className="h-4 w-4" />
                            History
                        </Link>
                    )}

                    {isAdmin ? (
                        <Link
                            href="/dashboard/timesheets"
                            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors shadow-sm"
                        >
                            <DocumentTextIcon className="h-4 w-4" />
                            Review Timesheets
                        </Link>
                    ) : (
                        <Link
                            href="/dashboard/timesheets/create"
                            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors shadow-sm"
                        >
                            <PlusIcon className="h-4 w-4" />
                            Log Time
                        </Link>
                    )}
                </div>
            </div>

            {/* ── Attendance Card (Employee Only) ── */}
            {!isAdmin && (
                <AttendanceCard
                    todayAttendance={todayAttendance}
                    branches={branches}
                />
            )}

            {/* ── KPI Cards ── */}
            {isAdmin ? (
                // ── Admin KPIs ──────────────────────────────────────────────
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    <StatCard
                        label="Org Hours This Week"
                        value={Math.round(stats.totalOrgHoursThisWeek ?? 0)}
                        unit="hrs"
                        sub="All employees combined"
                        icon={ClockIcon}
                        accent="bg-indigo-600"
                    />
                    <StatCard
                        label="Pending Approvals"
                        value={stats.pendingTimesheets ?? 0}
                        sub="Timesheets awaiting review"
                        icon={ExclamationCircleIcon}
                        accent={stats.pendingTimesheets ? 'bg-amber-500' : 'bg-slate-400'}
                    />
                    <StatCard
                        label="Total Employees"
                        value={stats.totalEmployees ?? 0}
                        sub="Registered users"
                        icon={UsersIcon}
                        accent="bg-violet-600"
                    />
                    <StatCard
                        label="Active Projects"
                        value={stats.activeProjects}
                        sub="Currently running"
                        icon={FolderOpenIcon}
                        accent="bg-emerald-600"
                    />
                </div>
            ) : (
                // ── Employee KPIs ────────────────────────────────────────────
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    <StatCard
                        label="My Hours This Week"
                        value={Math.round(stats.totalHoursThisWeek)}
                        sub={`${Math.min(Math.round((stats.totalHoursThisWeek / 40) * 100), 100)}% of 40h target`}
                        icon={ClockIcon}
                        accent="bg-indigo-600"
                    />
                    <StatCard
                        label="Active Projects"
                        value={stats.activeProjects}
                        sub="Currently running"
                        icon={FolderOpenIcon}
                        accent="bg-emerald-600"
                    />
                    <StatCard
                        label="Recent Entries"
                        value={stats.recentActivity.length}
                        sub="Last submissions"
                        icon={DocumentTextIcon}
                        accent="bg-violet-600"
                    />
                </div>
            )}

            {/* ── Chart + Activity ── */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

                {/* Weekly Chart */}
                <div className="xl:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                            <ChartBarIcon className="h-5 w-5 text-indigo-600" />
                            <div>
                                <h2 className="text-sm font-bold text-slate-900">
                                    {isAdmin ? 'Team Activity (This Week)' : 'My Activity (This Week)'}
                                </h2>
                                <p className="text-xs text-slate-400">Hours logged per day</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <WeeklyActivityChart data={stats.chartData} />
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                        <h2 className="text-sm font-bold text-slate-900">
                            {isAdmin ? 'Recent Submissions' : 'Recent Entries'}
                        </h2>
                        <Link
                            href="/dashboard/timesheets"
                            className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                        >
                            View all <ArrowRightIcon className="h-3.5 w-3.5" />
                        </Link>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {stats.recentActivity.length > 0 ? (
                            stats.recentActivity.slice(0, 5).flatMap((ts) =>
                                ts.entries.map(entry => (
                                    <div key={entry.id} className="flex items-start gap-3 px-5 py-3.5 hover:bg-slate-50 transition-colors">
                                        <div className="h-8 w-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                                            {format(new Date(ts.date), 'dd')}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center justify-between gap-2">
                                                <p className="text-sm font-semibold text-slate-900 truncate">{entry.project.name}</p>
                                                <span className="text-xs font-bold text-slate-500 shrink-0">{entry.hours}h</span>
                                            </div>
                                            {/* Show employee name for admin */}
                                            {isAdmin && (
                                                <p className="text-xs font-medium text-indigo-600 truncate">
                                                    {ts.user?.name || ts.user?.email}
                                                </p>
                                            )}
                                            <p className="text-xs text-slate-400 mt-0.5 truncate">{entry.description}</p>
                                        </div>
                                    </div>
                                ))
                            )
                        ) : (
                            <div className="flex flex-col items-center justify-center py-12 text-center px-5">
                                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                                    <ClockIcon className="h-5 w-5 text-slate-400" />
                                </div>
                                <p className="text-sm font-medium text-slate-700">No entries yet</p>
                                <p className="text-xs text-slate-400 mt-1">
                                    {isAdmin ? 'No timesheets have been submitted yet.' : 'Log your first timesheet to see it here.'}
                                </p>
                                {!isAdmin && (
                                    <Link
                                        href="/dashboard/timesheets/create"
                                        className="mt-4 text-xs font-semibold text-indigo-600 hover:underline"
                                    >
                                        Log time now →
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ── Admin: Pending Approvals Banner ── */}
            {isAdmin && (stats.pendingTimesheets ?? 0) > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <ExclamationCircleIcon className="h-5 w-5 text-amber-600 shrink-0" />
                        <p className="text-sm font-medium text-amber-800">
                            <span className="font-bold">{stats.pendingTimesheets}</span> timesheet{stats.pendingTimesheets !== 1 ? 's' : ''} pending your approval.
                        </p>
                    </div>
                    <Link
                        href="/dashboard/timesheets"
                        className="text-xs font-semibold text-amber-700 hover:text-amber-900 flex items-center gap-1 shrink-0"
                    >
                        Review <ArrowRightIcon className="h-3.5 w-3.5" />
                    </Link>
                </div>
            )}
        </main>
    );
}
