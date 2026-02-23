import { auth } from '@/lib/auth';
import { getCurrentUser } from '@/app/lib/session';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';
import clsx from 'clsx';
import {
    ClockIcon,
    FolderOpenIcon,
    PlusIcon,
    ArrowRightIcon,
    ChartBarIcon,
    DocumentTextIcon,
    UsersIcon,
    ExclamationCircleIcon,
    CalendarIcon,
    ExclamationTriangleIcon,
    BuildingOffice2Icon
} from '@heroicons/react/24/outline';

// Actions & Data Fetching
import { fetchDashboardStats } from '@/app/lib/timesheet-actions';
import { getTodayAttendance, getAllBranches, getAttendanceHistory, getMyAttendanceRequests } from '@/app/lib/attendance-actions';
import { fetchMyLeaves } from '@/app/lib/leave-actions';
import { fetchCurrentUser } from '@/app/lib/profile-actions';
import { fetchReportStats } from '@/app/lib/report-actions';
import { fetchMyTasks } from '@/app/lib/task-actions';

// Components
import WeeklyActivityChart from '@/components/dashboard/weekly-chart';
import { AttendanceCard } from '@/components/dashboard/attendance-card';
import AttendanceHistoryTable from '@/components/dashboard/attendance-history-table';
import { LeaveRequestForm } from '@/components/leave/leave-request-form';
import { LeaveList } from '@/components/leave/leave-list';
import { LeaveCalendarView } from '@/components/leave/leave-calendar-view';
import { AdminLeaveTable } from '@/components/leave/admin-leave-table';
import { ProfileForm } from '@/components/profile/profile-form';
import { AvatarUpload } from '@/components/profile/avatar-upload';
import MyTaskList from '@/components/tasks/my-task-list';

export default async function ConsolidatedDashboardPage({
    params: paramsPromise,
    searchParams: searchParamsPromise,
}: {
    params: Promise<{ type?: string[] }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedParams = await paramsPromise;
    const pathSegments = resolvedParams.type || [];
    const searchParams = await searchParamsPromise;

    const session = await auth();
    if (!session) redirect('/auth/login');

    const user = await getCurrentUser();
    if (!user) redirect('/auth/login');

    // Default to Overview if no type specified
    if (pathSegments.length === 0) {
        return <DashboardOverview session={session} />;
    }

    const type = pathSegments[0];

    if (!['attendance', 'leave', 'profile', 'reports', 'tasks'].includes(type)) {
        notFound();
    }

    if (type === 'attendance') return <AttendanceView />;
    if (type === 'leave') return <LeaveView searchParams={searchParams} user={user} />;
    if (type === 'profile') return <ProfileView />;
    if (type === 'reports') return <ReportsView />;
    if (type === 'tasks') return <TasksView />;

    return notFound();
}

// ─── Stat Card Component ──────────────────────────────────────────────────────
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

// ─── Overview View ────────────────────────────────────────────────────────────
async function DashboardOverview({ session }: { session: any }) {
    const stats = await fetchDashboardStats();
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
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
                        {format(currentDate, 'EEEE, MMMM d, yyyy')}
                    </p>
                    <h1 className="text-2xl font-bold text-slate-900">
                        {isAdmin ? `Admin Overview` : `Welcome back, ${userName}`}
                    </h1>
                </div>
                <div className="flex items-center gap-3">
                    {!isAdmin && (
                        <Link href="/dashboard/attendance" className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
                            <ClockIcon className="h-4 w-4" />
                            History
                        </Link>
                    )}
                    <Link
                        href={isAdmin ? "/dashboard/timesheets" : "/dashboard/timesheets/create"}
                        className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors shadow-sm"
                    >
                        {isAdmin ? <DocumentTextIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                        {isAdmin ? "Review Timesheets" : "Log Time"}
                    </Link>
                </div>
            </div>

            {/* Attendance (Employee) */}
            {!isAdmin && <AttendanceCard todayAttendance={todayAttendance} branches={branches} />}

            {/* KPIs */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${isAdmin ? 'xl:grid-cols-4' : 'xl:grid-cols-3'} gap-4`}>
                <StatCard
                    label={isAdmin ? "Org Hours This Week" : "My Hours This Week"}
                    value={Math.round(isAdmin ? (stats.totalOrgHoursThisWeek ?? 0) : stats.totalHoursThisWeek)}
                    unit="hrs"
                    sub={isAdmin ? "All employees combined" : `${Math.min(Math.round((stats.totalHoursThisWeek / 40) * 100), 100)}% of 40h target`}
                    icon={ClockIcon}
                    accent="bg-indigo-600"
                />
                <StatCard
                    label={isAdmin ? "Pending Approvals" : "Active Projects"}
                    value={isAdmin ? (stats.pendingTimesheets ?? 0) : stats.activeProjects}
                    sub={isAdmin ? "Timesheets awaiting review" : "Currently running"}
                    icon={isAdmin ? ExclamationCircleIcon : FolderOpenIcon}
                    accent={isAdmin ? (stats.pendingTimesheets ? 'bg-amber-500' : 'bg-slate-400') : 'bg-emerald-600'}
                />
                {isAdmin ? (
                    <>
                        <StatCard label="Total Employees" value={stats.totalEmployees ?? 0} sub="Registered users" icon={UsersIcon} accent="bg-violet-600" />
                        <StatCard label="Active Projects" value={stats.activeProjects} sub="Currently running" icon={FolderOpenIcon} accent="bg-emerald-600" />
                    </>
                ) : (
                    <StatCard label="Recent Entries" value={stats.recentActivity.length} sub="Last submissions" icon={DocumentTextIcon} accent="bg-violet-600" />
                )}
            </div>

            {/* Chart + Activity */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-2">
                        <ChartBarIcon className="h-5 w-5 text-indigo-600" />
                        <h2 className="text-sm font-bold text-slate-900">{isAdmin ? 'Team Activity' : 'My Activity'} (This Week)</h2>
                    </div>
                    <div className="p-6">
                        <WeeklyActivityChart data={stats.chartData} />
                    </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-sm font-bold text-slate-900">{isAdmin ? 'Recent Submissions' : 'Recent Entries'}</h2>
                        <Link href="/dashboard/timesheets" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                            View all <ArrowRightIcon className="h-3.5 w-3.5" />
                        </Link>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {stats.recentActivity.length > 0 ? (
                            stats.recentActivity.slice(0, 5).flatMap(ts => ts.entries.map(entry => (
                                <div key={entry.id} className="flex items-start gap-3 px-5 py-3.5 hover:bg-slate-50 transition-colors">
                                    <div className="h-8 w-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                                        {format(new Date(ts.date), 'dd')}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-2">
                                            <p className="text-sm font-semibold text-slate-900 truncate">{entry.project.name}</p>
                                            <span className="text-xs font-bold text-slate-500 shrink-0">{entry.hours}h</span>
                                        </div>
                                        {isAdmin && <p className="text-xs font-medium text-indigo-600 truncate">{ts.user?.name || ts.user?.email}</p>}
                                        <p className="text-xs text-slate-400 mt-0.5 truncate">{entry.description}</p>
                                    </div>
                                </div>
                            )))
                        ) : (
                            <div className="py-12 text-center px-5">
                                <p className="text-sm text-slate-500">No entries yet</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

// ─── Attendance View ──────────────────────────────────────────────────────────
async function AttendanceView() {
    const history = await getAttendanceHistory();
    const requests = await getMyAttendanceRequests();
    const pendingRequests = requests.filter(r => r.status === 'PENDING');

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 pb-10">
            <h1 className="text-2xl font-bold text-slate-900">My Attendance</h1>
            {pendingRequests.length > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
                    <ExclamationTriangleIcon className="h-5 w-5 text-amber-600 shrink-0" />
                    <p className="text-sm text-amber-700">You have {pendingRequests.length} pending correction request(s).</p>
                </div>
            )}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                    <h2 className="text-base font-semibold text-slate-900">Recent Activity</h2>
                </div>
                <AttendanceHistoryTable history={history} />
            </div>
        </div>
    );
}

// ─── Leave View ───────────────────────────────────────────────────────────────
async function LeaveView({ searchParams, user }: { searchParams: any, user: any }) {
    const view = typeof searchParams.view === 'string' ? searchParams.view : 'list';
    const isAdmin = user.role?.code === 'ADMIN';
    const leaves = !isAdmin ? await fetchMyLeaves() : [];

    return (
        <div className="w-full max-w-5xl mx-auto space-y-6 pb-10">
            <h1 className="text-2xl font-bold text-slate-900">Leave Management</h1>
            {isAdmin ? <AdminLeaveTable /> : (
                <>
                    <LeaveRequestForm />
                    <div className="flex bg-slate-100 p-1 rounded-lg w-fit">
                        <Link href="/dashboard/leave?view=list" className={clsx("px-3 py-1.5 text-xs font-bold rounded-md", view === 'list' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500")}>List</Link>
                        <Link href="/dashboard/leave?view=calendar" className={clsx("px-3 py-1.5 text-xs font-bold rounded-md", view === 'calendar' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500")}>Calendar</Link>
                    </div>
                    {view === 'calendar' ? <LeaveCalendarView leaves={leaves} /> : <LeaveList />}
                </>
            )}
        </div>
    );
}

// ─── Profile View ─────────────────────────────────────────────────────────────
async function ProfileView() {
    const user = await fetchCurrentUser();
    if (!user) return null;
    return (
        <div className="w-full max-w-3xl mx-auto space-y-6 pb-10">
            <h1 className="text-2xl font-bold text-slate-900">My Profile</h1>
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <AvatarUpload name={user.name} image={user.image} />
                <p className="text-xs text-slate-500 mt-3">{user.email} · {user.role?.name || 'User'}</p>
            </div>
            <ProfileForm user={user} />
        </div>
    );
}

// ─── Reports View ─────────────────────────────────────────────────────────────
async function ReportsView() {
    const stats = await fetchReportStats();
    if (!stats) return <p className="text-center py-20 text-slate-500">No report data accessible.</p>;

    return (
        <div className="w-full max-w-7xl mx-auto space-y-8 pb-12">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Reports & Analytics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Hours</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">{stats.totalHours}h</p>
                </div>
            </div>
        </div>
    );
}

// ─── Tasks View ───────────────────────────────────────────────────────────────
async function TasksView() {
    const tasks = await fetchMyTasks();
    return (
        <div className="w-full max-w-5xl mx-auto space-y-6 pb-8">
            <h1 className="text-2xl font-bold text-slate-900">My Tasks</h1>
            <MyTaskList tasks={tasks} />
        </div>
    );
}
