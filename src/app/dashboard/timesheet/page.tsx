import Link from 'next/link';
import { fetchUserTimesheets, fetchEmployeesWithStats } from '@/app/lib/timesheet-actions';
import {
    PlusIcon,
    MagnifyingGlassIcon,
    FunnelIcon as FilterIcon
} from '@heroicons/react/24/outline'; // Removed unused icons

import { auth } from '@/lib/auth';
import { TimesheetFilter } from '@/components/dashboard/timesheet-filter';
import CalendarView from '@/components/timesheet/calendar-view';
import clsx from 'clsx';
import { EmployeeCard } from '@/components/dashboard/employee-card';
import { TimesheetList } from '@/components/timesheet/timesheet-list';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Pagination from '@/components/ui/pagination';
import { CopyEntryButton } from '@/components/timesheet/copy-entry-button';

export default async function Page(props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const searchParams = await props.searchParams;
    const session = await auth();
    const isAdmin = session?.user?.role?.code === 'ADMIN';

    // Admin View: Employee Cards
    if (isAdmin) {
        const now = new Date();
        const month = typeof searchParams.month === 'string' ? searchParams.month : (now.getMonth() + 1).toString();
        const year = typeof searchParams.year === 'string' ? searchParams.year : now.getFullYear().toString();

        const employees = await fetchEmployeesWithStats(month, year);

        return (
            <div className="w-full max-w-7xl mx-auto space-y-8 pb-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 font-display">Employee Overview</h1>
                        <p className="text-slate-500 mt-2">Select an employee to view their detailed timesheets.</p>
                    </div>
                    <TimesheetFilter />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {employees.map((emp) => (
                        <EmployeeCard key={emp.id} employee={emp} />
                    ))}

                    {employees.length === 0 && (
                        <div className="col-span-full py-16 text-center bg-white/50 rounded-3xl border border-dashed border-slate-200 backdrop-blur-sm">
                            <div className="h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <UserCircleIcon className="h-8 w-8 text-slate-400" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">No Employees Found</h3>
                            <p className="text-slate-500 mt-2 max-w-sm mx-auto">Try adjusting the filters to see more results or add new users to the system.</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Employee View: My Timesheets (Redesigned)
    const page = Number(searchParams.page) || 1;
    const { timesheets, totalPages } = await fetchUserTimesheets({
        page,
        limit: 10,
        month: typeof searchParams.month === 'string' ? searchParams.month : undefined,
        year: typeof searchParams.year === 'string' ? searchParams.year : undefined,
    });

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 pb-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 font-display">My Timesheets</h1>
                    <p className="text-slate-500 mt-2">Track specific projects and tasks.</p>
                </div>
                {!isAdmin && (
                    <div className="flex items-center gap-3">
                        <CopyEntryButton />
                        <Link
                            href="/dashboard/timesheet/create"
                            className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <PlusIcon className="h-5 w-5" />
                            <span>Log Time</span>
                        </Link>
                    </div>
                )}
            </div>

            {/* Filter Bar */}
            <div className="glass-card p-1.5 rounded-2xl flex items-center justify-between gap-2">
                <div className="hidden sm:block">
                    <TimesheetFilter />
                </div>

                <div className="flex bg-slate-100 p-1 rounded-lg">
                    <Link
                        href={{ pathname: '/dashboard/timesheet', query: { ...searchParams, view: 'list' } }}
                        className={clsx(
                            "px-3 py-1.5 text-xs font-bold rounded-md transition-all",
                            !searchParams.view || searchParams.view === 'list' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                        )}
                    >
                        List
                    </Link>
                    <Link
                        href={{ pathname: '/dashboard/timesheet', query: { ...searchParams, view: 'calendar' } }}
                        className={clsx(
                            "px-3 py-1.5 text-xs font-bold rounded-md transition-all",
                            searchParams.view === 'calendar' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                        )}
                    >
                        Calendar
                    </Link>
                </div>
            </div>

            {/* Timesheet List or Calendar */}
            {
                searchParams.view === 'calendar' ? (
                    <CalendarView timesheets={timesheets} />
                ) : (
                    <>
                        <TimesheetList timesheets={timesheets} />
                        <Pagination totalPages={totalPages} />
                    </>
                )
            }
        </div >
    );
}
