import { getCurrentUser } from '@/app/lib/session';
import { LeaveRequestForm } from '@/components/leave/leave-request-form';
import { LeaveList } from '@/components/leave/leave-list';
import { LeaveCalendarView } from '@/components/leave/leave-calendar-view';
import { AdminLeaveTable } from '@/components/leave/admin-leave-table';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { fetchMyLeaves } from '@/app/lib/leave-actions';

export default async function LeavePage(props: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const searchParams = await props.searchParams;
    const view = typeof searchParams.view === 'string' ? searchParams.view : 'list';

    const user = await getCurrentUser();
    if (!user) redirect('/auth/login');

    const isAdmin = user.role?.code === 'ADMIN';

    // Fetch leaves for calendar view (needed on server side to pass to client component)
    // List view fetches its own data, but for calendar we'll pass it in
    const leaves = !isAdmin ? await fetchMyLeaves() : [];

    return (
        <div className="w-full max-w-5xl mx-auto space-y-6 pb-10">
            {/* Header */}
            <div className="pb-4 border-b border-slate-200">
                <h1 className="text-2xl font-bold text-slate-900">Leave Management</h1>
                <p className="text-sm text-slate-500 mt-1">
                    {isAdmin ? 'Manage employee leave requests.' : 'Apply for leave and view your history.'}
                </p>
            </div>

            {isAdmin ? (
                <AdminLeaveTable />
            ) : (
                <>
                    <LeaveRequestForm />

                    <div className="pt-4 space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-slate-900">My Leave History</h3>

                            <div className="flex bg-slate-100 p-1 rounded-lg">
                                <Link
                                    href={{ pathname: '/dashboard/leave', query: { ...searchParams, view: 'list' } }}
                                    className={clsx(
                                        "px-3 py-1.5 text-xs font-bold rounded-md transition-all",
                                        view === 'list' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                                    )}
                                >
                                    List
                                </Link>
                                <Link
                                    href={{ pathname: '/dashboard/leave', query: { ...searchParams, view: 'calendar' } }}
                                    className={clsx(
                                        "px-3 py-1.5 text-xs font-bold rounded-md transition-all",
                                        view === 'calendar' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                                    )}
                                >
                                    Calendar
                                </Link>
                            </div>
                        </div>

                        {view === 'calendar' ? (
                            <LeaveCalendarView leaves={leaves} />
                        ) : (
                            <LeaveList />
                        )}
                    </div>
                </>
            )}
        </div>
    );
}
