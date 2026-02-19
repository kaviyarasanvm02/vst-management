
import { getAllAttendanceRequests } from '@/app/lib/attendance-actions';
import { getCurrentUser } from '@/app/lib/session';
import { redirect } from 'next/navigation';
import { format } from 'date-fns';
import AttendanceRequestTable from './attendance-request-table';
import { InboxStackIcon } from '@heroicons/react/24/outline';

export default async function AdminAttendanceRequestsPage() {
    const user = await getCurrentUser();
    if (!user) redirect('/auth/login');

    const requests = await getAllAttendanceRequests();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Attendance Requests</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Review and process employee attendance correction requests.
                    </p>
                </div>
                <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2">
                    <InboxStackIcon className="h-5 w-5 text-indigo-500" />
                    Pending: {requests.filter(r => r.status === 'PENDING').length}
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <AttendanceRequestTable initialRequests={requests} />
            </div>
        </div>
    );
}
