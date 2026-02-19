'use client';

import { useActionState, useEffect } from 'react';
import { submitLeave } from '@/app/lib/leave-actions';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

export function LeaveRequestForm() {
    const [state, action, pending] = useActionState(submitLeave, null);

    // Fire toast when server action responds — no more inline banners
    useEffect(() => {
        if (state?.success) toast.success(state.success);
        if (state?.error) toast.error(state.error);
    }, [state]);

    return (
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100">
                <CalendarDaysIcon className="h-5 w-5 text-indigo-600" />
                <h2 className="text-sm font-bold text-slate-900">Request Leave</h2>
            </div>

            <form action={action} className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="date" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Date</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            required
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="type" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Type</label>
                        <select
                            name="type"
                            id="type"
                            required
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        >
                            <option value="LEAVE">Leave</option>
                            <option value="SICK">Sick Leave</option>
                            <option value="HOLIDAY">Holiday</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="reason" className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Reason (Optional)</label>
                    <textarea
                        name="reason"
                        id="reason"
                        rows={3}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        placeholder="Briefly describe the reason for your leave..."
                    />
                </div>

                <div className="flex justify-end pt-2">
                    <button
                        type="submit"
                        disabled={pending}
                        className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors disabled:opacity-60 shadow-sm"
                    >
                        {pending ? 'Submitting...' : 'Submit Request'}
                    </button>
                </div>
            </form>
        </div>
    );
}
