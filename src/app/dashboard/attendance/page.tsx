import { getCurrentUser } from '@/app/lib/session';
import { getAttendanceHistory, getMyAttendanceRequests } from '@/app/lib/attendance-actions';
import { redirect } from 'next/navigation';
import { format } from 'date-fns';
import clsx from 'clsx';
import {
    CalendarIcon,
    ClockIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
    XCircleIcon,
} from '@heroicons/react/24/outline';
import AttendanceHistoryTable from './attendance-history-table';

function StatusBadge({ status }: { status: string }) {
    const styles: Record<string, string> = {
        PRESENT: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
        LATE: 'bg-amber-50 text-amber-700 ring-amber-600/20',
        ABSENT: 'bg-rose-50 text-rose-700 ring-rose-600/20',
        HALF_DAY: 'bg-blue-50 text-blue-700 ring-blue-600/20',
        LEFT_EARLY: 'bg-orange-50 text-orange-700 ring-orange-600/20',
        AUTO_OUT: 'bg-slate-50 text-slate-700 ring-slate-600/20',
    };

    // Default to slate if status unknown
    const className = styles[status] || styles['AUTO_OUT'];

    return (
        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${className}`}>
            {status.replace('_', ' ')}
        </span>
    );
}

export default async function MyAttendancePage() {
    const user = await getCurrentUser();
    if (!user) redirect('/auth/login');

    const history = await getAttendanceHistory();
    const requests = await getMyAttendanceRequests();

    const pendingRequests = requests.filter(r => r.status === 'PENDING');

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 pb-10">
            {/* Header */}
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">My Attendance</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        View your daily attendance logs and status.
                    </p>
                </div>
            </div>

            {/* Pending Requests Alert */}
            {pendingRequests.length > 0 && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
                    <ExclamationTriangleIcon className="h-5 w-5 text-amber-600 shrink-0" />
                    <div>
                        <h3 className="text-sm font-semibold text-amber-900">Pending Correction Requests</h3>
                        <p className="text-sm text-amber-700 mt-0.5">
                            You have {pendingRequests.length} request(s) waiting for admin approval.
                        </p>
                    </div>
                </div>
            )}

            {/* Requests History (Optional / Simplified) */}
            {requests.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                        <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                            <ExclamationTriangleIcon className="h-5 w-5 text-indigo-600" />
                            Request History
                        </h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wide">
                                <tr>
                                    <th className="px-6 py-3 font-medium">Date</th>
                                    <th className="px-6 py-3 font-medium">Type</th>
                                    <th className="px-6 py-3 font-medium">New Time</th>
                                    <th className="px-6 py-3 font-medium">Status</th>
                                    <th className="px-6 py-3 font-medium">Admin Remarks</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {requests.map((req) => (
                                    <tr key={req.id}>
                                        <td className="px-6 py-4">{format(new Date(req.date), 'MMM d, yyyy')}</td>
                                        <td className="px-6 py-4 text-xs font-medium">{req.requestType.replace('_', ' ')}</td>
                                        <td className="px-6 py-4">{format(new Date(req.newTime), 'h:mm a')}</td>
                                        <td className="px-6 py-4">
                                            <span className={clsx(
                                                "px-2 py-1 rounded-full text-[10px] font-bold uppercase",
                                                {
                                                    "bg-amber-100 text-amber-700": req.status === 'PENDING',
                                                    "bg-emerald-100 text-emerald-700": req.status === 'APPROVED',
                                                    "bg-rose-100 text-rose-700": req.status === 'REJECTED',
                                                }
                                            )}>
                                                {req.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-500 text-xs">{req.adminRemarks || '—'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Attendance History */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <h2 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                        <ClockIcon className="h-5 w-5 text-indigo-600" />
                        Recent Activity
                    </h2>
                    <span className="text-xs text-slate-500">Last 30 entries</span>
                </div>

                {history.length === 0 ? (
                    <div className="p-12 text-center">
                        <div className="mx-auto h-12 w-12 text-slate-300">
                            <CalendarIcon />
                        </div>
                        <h3 className="mt-2 text-sm font-semibold text-slate-900">No attendance records</h3>
                        <p className="mt-1 text-sm text-slate-500">You haven't punched in yet.</p>
                    </div>
                ) : (
                    <AttendanceHistoryTable history={history} />
                )}
            </div>
        </div>
    );
}
