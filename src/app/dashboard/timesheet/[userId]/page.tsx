import Link from 'next/link';
import { fetchUserTimesheetsById } from '@/app/lib/timesheet-actions';
import { format } from 'date-fns';
import {
    CalendarIcon,
    BriefcaseIcon,
    MapPinIcon,
    ClockIcon,
    ChevronLeftIcon,
    UserCircleIcon
} from '@heroicons/react/24/outline';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Page({ params }: { params: { userId: string } }) {
    const session = await auth();
    // Basic protection
    const currentUserRole = session?.user?.role?.code;

    if (currentUserRole !== 'ADMIN' && session?.user?.id !== params.userId) {
        redirect('/dashboard/timesheet');
    }

    const timesheets = await fetchUserTimesheetsById(params.userId);
    const userInfo = timesheets.length > 0 ? timesheets[0].user : null;

    // If no timesheets, we might not have user info. In a real app we'd fetch user separately.
    // For now dealing with empty state.

    return (
        <div className="w-full max-w-7xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Link
                    href="/dashboard/timesheet"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200"
                >
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
                            <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-0.5 rounded-full">
                                {userInfo.role?.name || 'User'}
                            </span>
                            <span>{userInfo.branch || 'No Branch'}</span>
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
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Project Details</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Activity</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Duration</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
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
                                            <p className="text-slate-500 text-sm mt-1">This user has not logged any time in the last 30 days.</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                timesheets.map((ts) => (
                                    ts.entries.map((entry) => (
                                        <tr key={entry.id} className="group hover:bg-slate-50/50 transition-colors">
                                            <td className="px-6 py-5 whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    <CalendarIcon className="h-4 w-4 text-slate-400" />
                                                    <span className="text-sm font-medium text-slate-900">{format(ts.date, 'MMM dd, yyyy')}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-start gap-3">
                                                    <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                                                        <BriefcaseIcon className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-slate-900">{entry.project.name}</p>
                                                        <p className="text-xs text-slate-500 mt-0.5">{entry.project.customer?.name || 'Internal Project'}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="max-w-xs">
                                                    <p className="text-sm font-medium text-slate-900">{entry.activity}</p>
                                                    <p className="text-xs text-slate-500 mt-1 line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
                                                        {entry.description}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 whitespace-nowrap">
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-sm font-semibold font-mono">
                                                    <ClockIcon className="h-3.5 w-3.5" />
                                                    {entry.hours}h
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 whitespace-nowrap">
                                                <div className="flex items-center gap-1.5 text-sm text-slate-500">
                                                    <MapPinIcon className="h-4 w-4 text-slate-400" />
                                                    {entry.location}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 whitespace-nowrap">
                                                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold
                                                    ${ts.status === 'APPROVED'
                                                        ? 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20'
                                                        : ts.status === 'PENDING'
                                                            ? 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20'
                                                            : 'bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20'
                                                    }`}>
                                                    <span className={`h-1.5 w-1.5 rounded-full ${ts.status === 'APPROVED' ? 'bg-emerald-500' :
                                                        ts.status === 'PENDING' ? 'bg-amber-500' : 'bg-red-500'
                                                        }`}></span>
                                                    {ts.status === 'APPROVED' ? 'Approved' :
                                                        ts.status === 'PENDING' ? 'Pending' : 'Rejected'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
