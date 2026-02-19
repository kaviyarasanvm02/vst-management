
'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { MapPinIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import AttendanceCorrectionModal from '@/components/dashboard/attendance-correction-modal';

interface AttendanceHistoryTableProps {
    history: any[];
}

function StatusBadge({ status }: { status: string }) {
    const styles: Record<string, string> = {
        PRESENT: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
        LATE: 'bg-amber-50 text-amber-700 ring-amber-600/20',
        ABSENT: 'bg-rose-50 text-rose-700 ring-rose-600/20',
        HALF_DAY: 'bg-blue-50 text-blue-700 ring-blue-600/20',
        LEFT_EARLY: 'bg-orange-50 text-orange-700 ring-orange-600/20',
        AUTO_OUT: 'bg-slate-50 text-slate-700 ring-slate-600/20',
    };

    const className = styles[status] || styles['AUTO_OUT'];

    return (
        <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${className}`}>
            {status.replace('_', ' ')}
        </span>
    );
}

export default function AttendanceHistoryTable({ history }: AttendanceHistoryTableProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState<any>(null);

    const handleRequestCorrection = (record: any) => {
        setSelectedRecord(record);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wide">
                        <tr>
                            <th className="px-6 py-3 font-medium">Date</th>
                            <th className="px-6 py-3 font-medium">Status</th>
                            <th className="px-6 py-3 font-medium">Clock In</th>
                            <th className="px-6 py-3 font-medium">Clock Out</th>
                            <th className="px-6 py-3 font-medium">Duration</th>
                            <th className="px-6 py-3 font-medium">Location</th>
                            <th className="px-6 py-3 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {history.map((record) => {
                            const date = format(new Date(record.date), 'EEE, MMM d, yyyy');
                            const inTime = format(new Date(record.clockIn), 'h:mm a');
                            const outTime = record.clockOut ? format(new Date(record.clockOut), 'h:mm a') : '—';

                            let duration = '—';
                            if (record.clockOut) {
                                const diff = new Date(record.clockOut).getTime() - new Date(record.clockIn).getTime();
                                const hrs = Math.floor(diff / 3600000);
                                const mins = Math.floor((diff % 3600000) / 60000);
                                duration = `${hrs}h ${mins}m`;
                            }

                            return (
                                <tr key={record.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">
                                        {date}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-1">
                                            <StatusBadge status={record.status} />
                                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                                                {record.punchMode}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">
                                        {inTime}
                                        {record.punchInNote && (
                                            <div className="text-[11px] text-indigo-600 italic mt-1 leading-tight max-w-[150px]" title={`Goal: ${record.punchInNote}`}>
                                                {record.punchInNote}
                                            </div>
                                        )}
                                        {record.ipAddress && (
                                            <div className="text-[10px] text-slate-400 mt-1" title="IP Address">
                                                IP: {record.ipAddress}
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">
                                        {outTime}
                                        {record.punchOutNote && (
                                            <div className="text-[11px] text-emerald-600 italic mt-1 leading-tight max-w-[150px]" title={`Summary: ${record.punchOutNote}`}>
                                                {record.punchOutNote}
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-slate-600 font-medium">
                                        {duration}
                                    </td>
                                    <td className="px-6 py-4">
                                        {(record.clockInLat && record.clockInLng) ? (
                                            <a
                                                href={`https://www.google.com/maps?q=${record.clockInLat},${record.clockInLng}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800"
                                            >
                                                <MapPinIcon className="h-3 w-3" />
                                                View Map
                                            </a>
                                        ) : (
                                            <span className="text-slate-400 text-xs">—</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => handleRequestCorrection(record)}
                                            className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                                        >
                                            <PencilSquareIcon className="h-4 w-4" />
                                            Request Correction
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <AttendanceCorrectionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                record={selectedRecord}
            />
        </>
    );
}
