
'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { processAttendanceRequest } from '@/app/lib/attendance-actions';
import { toast } from 'react-hot-toast';
import clsx from 'clsx';
import { CheckIcon, XMarkIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

interface AttendanceRequestTableProps {
    initialRequests: any[];
}

export default function AttendanceRequestTable({ initialRequests }: AttendanceRequestTableProps) {
    const [requests, setRequests] = useState(initialRequests);
    const [processingId, setProcessingId] = useState<string | null>(null);

    const handleProcess = async (id: string, status: 'APPROVED' | 'REJECTED') => {
        let remarks = '';
        if (status === 'REJECTED') {
            remarks = window.prompt('Enter reason for rejection:') || '';
            if (!remarks) {
                toast.error('Rejection reason is required.');
                return;
            }
        }

        setProcessingId(id);
        try {
            const result = await processAttendanceRequest(id, status, remarks);
            if (result.success) {
                toast.success(result.success);
                // Simple state update instead of refetching
                setRequests(prev => prev.map(r =>
                    r.id === id ? { ...r, status, adminRemarks: remarks } : r
                ));
            } else {
                toast.error(result.error || 'Failed to process request.');
            }
        } catch (error) {
            toast.error('Failed to process request.');
        } finally {
            setProcessingId(null);
        }
    };

    if (requests.length === 0) {
        return (
            <div className="p-12 text-center">
                <div className="mx-auto h-12 w-12 text-slate-300">
                    <ChatBubbleBottomCenterTextIcon />
                </div>
                <h3 className="mt-2 text-sm font-semibold text-slate-900">No requests found</h3>
                <p className="mt-1 text-sm text-slate-500">All caught up!</p>
            </div>
        );
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wider">
                    <tr>
                        <th className="px-6 py-4 font-semibold">User</th>
                        <th className="px-6 py-4 font-semibold">Date</th>
                        <th className="px-6 py-4 font-semibold">Type</th>
                        <th className="px-6 py-4 font-semibold">Suggested Time</th>
                        <th className="px-6 py-4 font-semibold">Reason</th>
                        <th className="px-6 py-4 font-semibold">Status</th>
                        <th className="px-6 py-4 font-semibold text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {requests.map((req) => (
                        <tr key={req.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">
                                        {req.user.name?.charAt(0) || 'U'}
                                    </div>
                                    <div className="font-medium text-slate-900">{req.user.name}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-slate-600">
                                {format(new Date(req.date), 'MMM d, yyyy')}
                            </td>
                            <td className="px-6 py-4">
                                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                                    {req.requestType.replace('_', ' ')}
                                </span>
                            </td>
                            <td className="px-6 py-4 font-medium text-slate-900">
                                {format(new Date(req.newTime), 'h:mm a')}
                            </td>
                            <td className="px-6 py-4 text-slate-500 max-w-[200px] truncate" title={req.reason}>
                                {req.reason}
                            </td>
                            <td className="px-6 py-4">
                                <span className={clsx(
                                    "inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ring-1 ring-inset",
                                    {
                                        "bg-amber-50 text-amber-700 ring-amber-600/20": req.status === 'PENDING',
                                        "bg-emerald-50 text-emerald-700 ring-emerald-600/20": req.status === 'APPROVED',
                                        "bg-rose-50 text-rose-700 ring-rose-600/20": req.status === 'REJECTED',
                                    }
                                )}>
                                    {req.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                {req.status === 'PENDING' ? (
                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => handleProcess(req.id, 'APPROVED')}
                                            disabled={processingId === req.id}
                                            className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors disabled:opacity-50"
                                            title="Approve"
                                        >
                                            <CheckIcon className="h-5 w-5" />
                                        </button>
                                        <button
                                            onClick={() => handleProcess(req.id, 'REJECTED')}
                                            disabled={processingId === req.id}
                                            className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors disabled:opacity-50"
                                            title="Reject"
                                        >
                                            <XMarkIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                ) : (
                                    <span className="text-xs text-slate-400 font-medium">Processed</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
