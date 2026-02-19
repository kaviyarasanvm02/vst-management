'use client';

import { useState, useEffect } from 'react';
import { fetchAllLeaves, updateLeaveStatus } from '@/app/lib/leave-actions';
import { format } from 'date-fns';
import clsx from 'clsx';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

type LeaveRequest = {
    id: string;
    date: Date;
    type: string;
    reason: string | null;
    status: string;
    user: {
        name: string | null;
        email: string;
        role: { name: string } | null;
    };
};

export function AdminLeaveTable() {
    const [leaves, setLeaves] = useState<LeaveRequest[]>([]);
    const [loading, setLoading] = useState(true);

    const loadLeaves = async () => {
        setLoading(true);
        const data = await fetchAllLeaves();
        // @ts-ignore - simplistic type matching for now, actual data shape matches
        setLeaves(data);
        setLoading(false);
    };

    useEffect(() => {
        loadLeaves();
    }, []);

    const handleStatusUpdate = async (id: string, status: 'APPROVED' | 'REJECTED') => {
        await updateLeaveStatus(id, status);
        loadLeaves(); // Reload to reflect changes
    };

    if (loading) {
        return <div className="text-center py-10 text-slate-500">Loading leave requests...</div>;
    }

    if (leaves.length === 0) {
        return (
            <div className="bg-white border border-slate-200 rounded-xl p-8 text-center shadow-sm">
                <p className="text-slate-500">No leave requests found.</p>
            </div>
        );
    }

    return (
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-3 font-semibold text-slate-700">Employee</th>
                            <th className="px-6 py-3 font-semibold text-slate-700">Date</th>
                            <th className="px-6 py-3 font-semibold text-slate-700">Type</th>
                            <th className="px-6 py-3 font-semibold text-slate-700">Reason</th>
                            <th className="px-6 py-3 font-semibold text-slate-700">Status</th>
                            <th className="px-6 py-3 font-semibold text-slate-700 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {leaves.map((leave) => (
                            <tr key={leave.id} className="hover:bg-slate-50/50">
                                <td className="px-6 py-3">
                                    <div className="font-medium text-slate-900">{leave.user.name || 'Unknown'}</div>
                                    <div className="text-xs text-slate-500">{leave.user.email}</div>
                                </td>
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
                                <td className="px-6 py-3 text-right">
                                    {leave.status === 'PENDING' && (
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleStatusUpdate(leave.id, 'APPROVED')}
                                                className="p-1 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                                                title="Approve"
                                            >
                                                <CheckIcon className="h-5 w-5" />
                                            </button>
                                            <button
                                                onClick={() => handleStatusUpdate(leave.id, 'REJECTED')}
                                                className="p-1 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                                                title="Reject"
                                            >
                                                <XMarkIcon className="h-5 w-5" />
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
