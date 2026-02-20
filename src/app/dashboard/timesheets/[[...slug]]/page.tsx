import Link from 'next/link';
import {
    fetchUserTimesheets,
    fetchEmployeesWithStats,
    fetchProjects,
    fetchUserTimesheetsById
} from '@/app/lib/timesheet-actions';
import {
    PlusIcon,
    MagnifyingGlassIcon,
    FunnelIcon as FilterIcon,
    UserCircleIcon,
    ChevronLeftIcon,
    CalendarIcon,
    BriefcaseIcon,
    MapPinIcon,
    ClockIcon,
    ArrowPathIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline';
import { auth } from '@/lib/auth';
import { redirect, notFound } from 'next/navigation';
import { TimesheetFilter } from '@/components/dashboard/timesheet-filter';
import CalendarView from '@/components/timesheet/calendar-view';
import clsx from 'clsx';
import { EmployeeCard } from '@/components/dashboard/employee-card';
import { TimesheetList } from '@/components/timesheet/timesheet-list';
import Pagination from '@/components/ui/pagination';
import { CopyEntryButton } from '@/components/timesheet/copy-entry-button';
import CreateTimesheetForm from '@/components/timesheet/create-form';
import { format } from 'date-fns';

export default async function TimesheetCatchAllPage({
    params: paramsPromise,
    searchParams: searchParamsPromise,
}: {
    params: Promise<{ slug?: string[] }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await paramsPromise;
    const searchParams = await searchParamsPromise;
    const slug = params.slug || [];
    const session = await auth();
    if (!session) redirect('/auth/login');
    const isAdmin = session.user?.role?.code === 'ADMIN';

    // Route logic
    if (slug.length === 0 || slug[0] === 'list') {
        return <TimesheetListView searchParams={searchParams} session={session} isAdmin={isAdmin} />;
    }

    if (slug[0] === 'create') {
        if (isAdmin) redirect('/dashboard/timesheets');
        return <CreateTimesheetView />;
    }

    // Assume it's a userId if it's not create/list
    const userId = slug[0];
    if (isAdmin || session.user?.id === userId) {
        return <EmployeeTimesheetDetailView userId={userId} isAdmin={isAdmin} />;
    }

    return notFound();
}

async function TimesheetListView({ searchParams, session, isAdmin }: { searchParams: any, session: any, isAdmin: boolean }) {
    if (isAdmin) {
        const now = new Date();
        const month = typeof searchParams.month === 'string' ? searchParams.month : (now.getMonth() + 1).toString();
        const year = typeof searchParams.year === 'string' ? searchParams.year : now.getFullYear().toString();
        const employees = await fetchEmployeesWithStats(month, year);

        return (
            <div className="w-full max-w-7xl mx-auto space-y-8 pb-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Employee Overview</h1>
                    <TimesheetFilter />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {employees.map((emp) => <EmployeeCard key={emp.id} employee={emp} />)}
                </div>
            </div>
        );
    }

    const page = Number(searchParams.page) || 1;
    const { timesheets, totalPages } = await fetchUserTimesheets({
        page, limit: 10,
        month: typeof searchParams.month === 'string' ? searchParams.month : undefined,
        year: typeof searchParams.year === 'string' ? searchParams.year : undefined,
    });

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">My Timesheets</h1>
                <div className="flex items-center gap-3">
                    <CopyEntryButton />
                    <Link href="/dashboard/timesheets/create" className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-indigo-700 hover:-translate-y-0.5"><PlusIcon className="h-5 w-5" />Log Time</Link>
                </div>
            </div>
            <div className="flex bg-slate-100 p-1 rounded-lg w-fit">
                <Link href={{ pathname: '/dashboard/timesheets', query: { ...searchParams, view: 'list' } }} className={clsx("px-3 py-1.5 text-xs font-bold rounded-md transition-all", !searchParams.view || searchParams.view === 'list' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700")}>List</Link>
                <Link href={{ pathname: '/dashboard/timesheets', query: { ...searchParams, view: 'calendar' } }} className={clsx("px-3 py-1.5 text-xs font-bold rounded-md transition-all", searchParams.view === 'calendar' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700")}>Calendar</Link>
            </div>
            {searchParams.view === 'calendar' ? <CalendarView timesheets={timesheets} /> : <><TimesheetList timesheets={timesheets} /><Pagination totalPages={totalPages} /></>}
        </div>
    );
}

async function CreateTimesheetView() {
    const projects = await fetchProjects();
    return (
        <main className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
                <Link href="/dashboard/timesheets" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white"><ChevronLeftIcon className="h-5 w-5" /></Link>
                <h1 className="text-2xl font-bold text-slate-900">Log Daily Activity</h1>
            </div>
            <CreateTimesheetForm projects={projects} />
        </main>
    );
}

async function EmployeeTimesheetDetailView({ userId, isAdmin }: { userId: string, isAdmin: boolean }) {
    const timesheets = await fetchUserTimesheetsById(userId);
    const userInfo = timesheets.length > 0 ? timesheets[0].user : null;

    return (
        <div className="w-full max-w-7xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/dashboard/timesheets" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200">
                    <ChevronLeftIcon className="h-5 w-5" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                        {userInfo ? `${userInfo.name || userInfo.email}'s Timesheets` : 'Employee Timesheets'}
                    </h1>
                    <p className="text-slate-500">Showing entries for the last 30 days.</p>
                </div>
            </div>

            {userInfo && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-6">
                    <div className="h-16 w-16 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <UserCircleIcon className="h-10 w-10" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-slate-900">{userInfo.name}</h2>
                        <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                            <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-0.5 rounded-full">{userInfo.role?.name || 'User'}</span>
                            <span>{userInfo.branch?.name || userInfo.branchLegacy || 'No Branch'}</span>
                            <span>{userInfo.email}</span>
                        </div>
                    </div>
                </div>
            )}

            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-100">
                        <thead className="bg-slate-50/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Project Details</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Activity</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Duration</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-50">
                            {timesheets.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-16 text-center">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="h-12 w-12 bg-slate-50 rounded-full flex items-center justify-center mb-3">
                                                <ClockIcon className="h-6 w-6 text-slate-300" />
                                            </div>
                                            <p className="text-slate-900 font-medium">No recent entries found</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                timesheets.map((ts) => ts.entries.map((entry) => (
                                    <tr key={entry.id} className="group hover:bg-slate-50/50 transition-colors">
                                        <td className="px-6 py-5 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <CalendarIcon className="h-4 w-4 text-slate-400" />
                                                <span className="text-sm font-medium text-slate-900">{format(ts.date, 'MMM dd, yyyy')}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5">
                                            <div className="flex items-start gap-3">
                                                <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600"><BriefcaseIcon className="h-5 w-5" /></div>
                                                <div><p className="text-sm font-semibold text-slate-900">{entry.project.name}</p><p className="text-xs text-slate-500 mt-0.5">{entry.project.customer?.name || 'Internal'}</p></div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 truncate max-w-xs">{entry.activity}</td>
                                        <td className="px-6 py-5 whitespace-nowrap font-mono font-bold text-slate-900">{entry.hours}h</td>
                                        <td className="px-6 py-5 text-sm text-slate-500">{entry.location}</td>
                                        <td className="px-6 py-5">
                                            <span className={clsx("px-2 py-1 rounded-full text-[10px] font-bold uppercase", {
                                                "bg-amber-100 text-amber-700": ts.status === 'PENDING',
                                                "bg-emerald-100 text-emerald-700": ts.status === 'APPROVED',
                                                "bg-rose-100 text-rose-700": ts.status === 'REJECTED',
                                            })}>{ts.status}</span>
                                        </td>
                                    </tr>
                                )))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
