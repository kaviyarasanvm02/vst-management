
'use client';

import { useState } from 'react';
import { createAttendanceRequest } from '@/app/lib/attendance-actions';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface AttendanceCorrectionModalProps {
    isOpen: boolean;
    onClose: () => void;
    record?: {
        id?: string;
        date: Date;
        clockIn?: Date;
        clockOut?: Date;
    };
}

export default function AttendanceCorrectionModal({
    isOpen,
    onClose,
    record,
}: AttendanceCorrectionModalProps) {
    const [loading, setLoading] = useState(false);
    const [requestType, setRequestType] = useState('CORRECTION');
    const [newTime, setNewTime] = useState('');
    const [reason, setReason] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTime || !reason) {
            toast.error('Please fill in all fields.');
            return;
        }

        setLoading(true);
        try {
            const baseDate = record?.date ? new Date(record.date) : new Date();
            const [hours, minutes] = newTime.split(':').map(Number);
            const timeDate = new Date(baseDate);
            timeDate.setHours(hours, minutes, 0, 0);

            const result = await createAttendanceRequest({
                attendanceId: record?.id,
                date: baseDate,
                requestType,
                newTime: timeDate,
                reason,
            });

            if (result.success) {
                toast.success(result.success);
                onClose();
            } else {
                toast.error(result.error || 'Failed to submit request.');
            }
        } catch (error) {
            toast.error('Failed to submit request.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div>
                        <h2 className="text-lg font-bold text-slate-900">Request Correction</h2>
                        <p className="text-xs text-slate-500 mt-0.5">Submit changes to your attendance</p>
                    </div>
                    <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <XMarkIcon className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                        <input
                            type="text"
                            value={record?.date ? new Date(record.date).toLocaleDateString() : ''}
                            disabled
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Request Type</label>
                        <select
                            value={requestType}
                            onChange={(e) => setRequestType(e.target.value)}
                            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium"
                        >
                            <SelectItem value="PUNCH_IN">Punch In Correction</SelectItem>
                            <SelectItem value="PUNCH_OUT">Punch Out Correction</SelectItem>
                            <SelectItem value="CORRECTION">General Correction</SelectItem>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">New Time (24h)</label>
                        <input
                            type="time"
                            value={newTime}
                            onChange={(e) => setNewTime(e.target.value)}
                            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Reason for Correction</label>
                        <textarea
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            placeholder="Explain why you need this correction..."
                            className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                            required
                        />
                    </div>

                    <div className="pt-2 flex gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                            disabled={loading}
                        >
                            Cancel
                        </button>
                        <Button
                            type="submit"
                            className="flex-1 py-2.5 h-auto text-sm font-bold shadow-lg shadow-amber-500/20"
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit Request'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function SelectItem({ value, children }: { value: string; children: React.ReactNode }) {
    return <option value={value}>{children}</option>;
}
