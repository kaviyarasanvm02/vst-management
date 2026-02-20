'use client';

import { AttendanceRequestWithUser } from '@/app/lib/types';
import { processAttendanceRequest } from '@/app/lib/attendance-actions';
import { format } from 'date-fns';
import { useState } from 'react';
import clsx from 'clsx';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function AttendanceRequestTable({ initialRequests }: { initialRequests: AttendanceRequestWithUser[] }) {
    const [requests, setRequests] = useState(initialRequests);
    const [loadingId, setLoadingId] = useState<string | null>(null);

    const handleAction = async (id: string, status: 'APPROVED' | 'REJECTED') => {
        setLoadingId(id);
        const result = await processAttendanceRequest(id, status);
        setLoadingId(null);

        if (result.success) {
            setRequests(prev => prev.map(r => r.id === id ? { ...r, status } : r));
        } else {
            alert(result.error || 'Failed to update request');
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100">
                <thead className="bg-slate-50/80">
                    <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Employee</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Details</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Reason</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Status</th>
                        <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-50 text-sm">
                    {requests.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="px-6 py-12 text-center text-slate-500">No attendance requests found.</td>
                        </tr>
                    ) : (
                        requests.map((req) => (
                            <tr key={req.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="font-bold text-slate-900">{req.user.name}</div>
                                    <div className="text-xs text-slate-500">{req.user.email}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-slate-700">{format(new Date(req.date), 'MMM d, yyyy')}</div>
                                    <div className="text-xs text-slate-500">{req.requestType} → {format(new Date(req.newTime), 'h:mm a')}</div>
                                </td>
                                <td className="px-6 py-4 max-w-xs truncate" title={req.reason}>
                                    {req.reason}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className={clsx("px-2.5 py-1 rounded-full text-[10px] font-bold uppercase", {
                                        "bg-amber-100 text-amber-700": req.status === 'PENDING',
                                        "bg-emerald-100 text-emerald-700": req.status === 'APPROVED',
                                        "bg-rose-100 text-rose-700": req.status === 'REJECTED',
                                    })}>
                                        {req.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right whitespace-nowrap">
                                    {req.status === 'PENDING' && (
                                        <div className="flex justify-end gap-2">
                                            <button
                                                disabled={loadingId === req.id}
                                                onClick={() => handleAction(req.id, 'APPROVED')}
                                                className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors"
                                                title="Approve"
                                            >
                                                <CheckIcon className="h-4 w-4" />
                                            </button>
                                            <button
                                                disabled={loadingId === req.id}
                                                onClick={() => handleAction(req.id, 'REJECTED')}
                                                className="p-1.5 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-100 transition-colors"
                                                title="Reject"
                                            >
                                                <XMarkIcon className="h-4 w-4" />
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
