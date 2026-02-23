'use client';

import { useState, useEffect } from 'react';
import { getDailyAttendanceLocations } from '@/app/lib/location-actions';
import { format } from 'date-fns';
import { MapPinIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function LocationReportClient() {
    const [date, setDate] = useState<Date>(new Date());
    const [records, setRecords] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const data = await getDailyAttendanceLocations(date);
                setRecords(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [date]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Live Location Tracking</h1>
                    <p className="text-sm text-slate-500 mt-1">View employee punch-in locations for the selected date.</p>
                </div>
                <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-slate-600">Date:</label>
                    <input
                        type="date"
                        value={format(date, 'yyyy-MM-dd')}
                        onChange={(e) => setDate(new Date(e.target.value))}
                        className="rounded-lg border-slate-300 text-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* List View */}
                <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col h-[600px]">
                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                        <h2 className="font-semibold text-slate-900">Punch Log</h2>
                        <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                            {records.length} Records
                        </span>
                    </div>
                    <div className="overflow-y-auto flex-1 p-0 divide-y divide-slate-100">
                        {loading ? (
                            <div className="p-8 text-center text-slate-500">Loading locations...</div>
                        ) : records.length === 0 ? (
                            <div className="p-8 text-center text-slate-500">No location data found for this date.</div>
                        ) : (
                            records.map((record) => (
                                <div key={record.id} className="p-4 hover:bg-slate-50 transition-colors flex items-start gap-4">
                                    <div className="h-10 w-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                        {record.user.image ? (
                                            <img src={record.user.image} alt={record.user.name} className="h-full w-full object-cover" />
                                        ) : (
                                            <UserCircleIcon className="h-6 w-6 text-slate-400" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                            <p className="text-sm font-bold text-slate-900 truncate">{record.user.name}</p>
                                            <span className="text-xs text-slate-500">{format(new Date(record.clockIn), 'h:mm a')}</span>
                                        </div>
                                        <p className="text-xs text-slate-500 truncate">{record.user.role?.name || 'Employee'}</p>
                                        <div className="mt-2 flex items-center gap-1.5 text-xs text-indigo-600">
                                            <MapPinIcon className="h-3.5 w-3.5" />
                                            <a
                                                href={`https://www.google.com/maps/search/?api=1&query=${record.clockInLat},${record.clockInLng}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline font-medium"
                                            >
                                                View on Map ({record.clockInLat.toFixed(4)}, {record.clockInLng.toFixed(4)})
                                            </a>
                                        </div>
                                        {record.punchInNote && (
                                            <p className="mt-1 text-xs text-slate-500 italic">"{record.punchInNote}"</p>
                                        )}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-[600px]">
                    <div className="h-16 w-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4">
                        <MapPinIcon className="h-8 w-8 text-indigo-500" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Map View</h3>
                    <p className="text-sm text-slate-500 mt-2 max-w-xs">
                        Click on "View on Map" for any user to see their exact location on Google Maps.
                    </p>
                    <div className="mt-8 p-4 bg-white rounded-xl shadow-sm border border-slate-200 text-left w-full max-w-sm">
                        <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Why this matters?</h4>
                        <p className="text-xs text-slate-600">
                            Verify if employees are punching in from the office, client location, or home as reported.
                            Helps in validating "Field Work" claims.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
