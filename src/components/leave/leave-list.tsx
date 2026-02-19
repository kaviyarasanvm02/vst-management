import { fetchMyLeaves } from '@/app/lib/leave-actions';
import clsx from 'clsx';
import { format } from 'date-fns';

export async function LeaveList() {
    const leaves = await fetchMyLeaves();

    if (leaves.length === 0) {
        return (
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-center shadow-sm">
                <p className="text-slate-500">No leave history found.</p>
            </div>
        );
    }

    return (
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-3 font-semibold text-slate-700">Date</th>
                            <th className="px-6 py-3 font-semibold text-slate-700">Type</th>
                            <th className="px-6 py-3 font-semibold text-slate-700">Reason</th>
                            <th className="px-6 py-3 font-semibold text-slate-700">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {leaves.map((leave) => (
                            <tr key={leave.id} className="hover:bg-slate-50/50">
                                <td className="px-6 py-3 text-slate-900 whitespace-nowrap">
                                    {format(new Date(leave.date), 'MMM d, yyyy')}
                                </td>
                                <td className="px-6 py-3 text-slate-600 capitalize">
                                    {leave.type.toLowerCase()}
                                </td>
                                <td className="px-6 py-3 text-slate-600 max-w-xs truncate">
                                    {leave.reason || '—'}
                                </td>
                                <td className="px-6 py-3">
                                    <span className={clsx(
                                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                                        {
                                            'bg-yellow-100 text-yellow-800': leave.status === 'PENDING',
                                            'bg-green-100 text-green-800': leave.status === 'APPROVED',
                                            'bg-red-100 text-red-800': leave.status === 'REJECTED',
                                        }
                                    )}>
                                        {leave.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
