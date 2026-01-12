import { auth } from '@/lib/auth';
import Link from 'next/link';
import { fetchDashboardStats } from '@/app/lib/timesheet-actions';
import {
    ClockIcon,
    BriefcaseIcon,
    ClipboardDocumentCheckIcon,
    PlusIcon,
    ArrowRightIcon,
    CalendarIcon
} from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import WeeklyActivityChart from '@/components/dashboard/weekly-chart';

export default async function Page() {
    const session = await auth();
    const stats = await fetchDashboardStats();

    if (!stats) return null;

    return (
        <main className="space-y-8 pb-10">
            {/* Header Section */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                        Dashboard
                    </h1>
                    <p className="text-slate-500 mt-1">
                        Welcome back, <span className="font-semibold text-slate-900 bg-amber-100 px-1 rounded">{session?.user?.name || 'User'}</span>. Here's what's happening today.
                    </p>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto shadow-sm border border-slate-200 rounded-full px-4 py-1.5 bg-white">
                    <CalendarIcon className="h-4 w-4 text-slate-400" />
                    <span className="text-sm font-medium text-slate-600">
                        {format(new Date(), 'EEEE, dd MMMM yyyy')}
                    </span>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {/* Left Column: Stats & Chart */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Unique Stats Cards with Gradients */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        {/* Card 1: Hours */}
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white shadow-lg transition-transform hover:scale-[1.01]">
                            <div className="relative z-10 flex items-start justify-between">
                                <div>
                                    <p className="text-blue-100 text-sm font-medium">Weekly Hours</p>
                                    <h3 className="mt-2 text-4xl font-bold">{stats.totalHoursThisWeek}</h3>
                                    <p className="mt-4 text-xs font-medium text-blue-200 bg-blue-500/30 inline-block px-2 py-1 rounded-md">
                                        Tracked this week
                                    </p>
                                </div>
                                <div className="rounded-xl bg-white/20 p-3 backdrop-blur-sm">
                                    <ClockIcon className="h-6 w-6 text-white" />
                                </div>
                            </div>
                            {/* Decorative background circle */}
                            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                        </div>

                        {/* Card 2: Approvals */}
                        <div className="relative overflow-hidden rounded-2xl bg-white p-6 border border-slate-100 shadow-sm transition-all hover:shadow-md">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-slate-500 text-sm font-medium">Pending Approvals</p>
                                    <h3 className="mt-2 text-4xl font-bold text-slate-900">{stats.pendingApprovals}</h3>
                                    <p className="mt-4 text-xs font-medium text-amber-600 bg-amber-50 inline-block px-2 py-1 rounded-md">
                                        Action required
                                    </p>
                                </div>
                                <div className="rounded-xl bg-amber-50 p-3 text-amber-500">
                                    <ClipboardDocumentCheckIcon className="h-6 w-6" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Chart Container */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold text-slate-900">Activity Overview</h2>
                            <select className="text-sm border-none bg-slate-50 rounded-lg px-3 py-1 text-slate-600 focus:ring-0 cursor-pointer hover:bg-slate-100 transition-colors">
                                <option>Last 7 Days</option>
                            </select>
                        </div>
                        <WeeklyActivityChart data={stats.chartData} />
                    </div>
                </div>

                {/* Right Column: Quick Actions & Recent Activity List */}
                <div className="space-y-6">
                    {/* Hero Action Card */}
                    <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-xl shadow-slate-200">
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <div className="h-10 w-10 bg-amber-500 rounded-lg flex items-center justify-center mb-4 text-white shadow-lg shadow-amber-500/20">
                                    <PlusIcon className="h-6 w-6" />
                                </div>
                                <h2 className="text-xl font-bold mb-1">Log Time</h2>
                                <p className="text-slate-400 text-sm mb-6">Create a new timesheet entry for today.</p>
                            </div>
                            <Link
                                href="/dashboard/timesheet/create"
                                className="w-full flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 py-3 font-semibold hover:bg-slate-50 transition-colors active:scale-[0.98]"
                            >
                                Log New Entry
                            </Link>
                        </div>
                    </div>

                    {/* Recent Activity List (Simplified) */}
                    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                            <h2 className="font-semibold text-slate-900">Recent Entries</h2>
                            <Link href="/dashboard/timesheet" className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
                                View All <ArrowRightIcon className="h-3 w-3" />
                            </Link>
                        </div>
                        <div className="divide-y divide-slate-50">
                            {stats.recentActivity.length > 0 ? (
                                stats.recentActivity.slice(0, 4).map((ts) => (
                                    ts.entries.map(entry => (
                                        <div key={entry.id} className="p-4 hover:bg-slate-50 transition-colors group">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="font-medium text-slate-900 text-sm">{entry.project.name}</span>
                                                <span className="text-xs text-slate-400">{format(new Date(ts.date), 'MMM dd')}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-xs text-slate-500 line-clamp-1">{entry.description}</p>
                                                <span className={`text-xs ml-2 font-medium px-1.5 py-0.5 rounded
                                                    ${ts.status === 'APPROVED' ? 'bg-emerald-50 text-emerald-600' :
                                                        ts.status === 'PENDING' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'}`}>
                                                    {entry.hours}h
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                ))
                            ) : (
                                <div className="p-6 text-center text-sm text-slate-500">No recent activity</div>
                            )}
                        </div>
                        <div className="p-3 bg-slate-50 text-center">
                            <p className="text-xs text-slate-400">Total Active Projects: <span className="text-slate-900 font-medium">{stats.activeProjects}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
