'use client';

import { useState, useEffect, useOptimistic, useTransition } from 'react';
import { punchIn, punchOut, type PunchResult } from '@/app/lib/attendance-actions';
import { getDistanceFromLatLonInMeters } from '@/lib/geo';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import clsx from 'clsx';
import { format } from 'date-fns';
import { Attendance, Branch } from '@/types';

type AttendanceCardProps = {
    todayAttendance: Attendance | null;
    branches: Branch[];
};

export function AttendanceCard({ todayAttendance, branches }: AttendanceCardProps) {
    const [isPending, startTransition] = useTransition();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
    const [nearestBranch, setNearestBranch] = useState<any | null>(null);
    const [distance, setDistance] = useState<number | null>(null);
    const [geoError, setGeoError] = useState<string | null>(null);
    const [punchMode, setPunchMode] = useState('OFFICE');
    const [note, setNote] = useState('');

    const [optimisticAttendance, addOptimisticAttendance] = useOptimistic(
        todayAttendance,
        (state, newAttendance: Attendance | null) => newAttendance
    );

    // Clock
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Geolocation
    const getLocation = (highAccuracy = true) => {
        if (typeof window !== 'undefined' && !window.isSecureContext && window.location.hostname !== 'localhost') {
            setGeoError('Geolocation requires a secure connection (HTTPS).');
            return;
        }

        if (!navigator.geolocation) {
            setGeoError('Geolocation is not supported by your browser');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                setLocation({ lat, lng });
                setGeoError(null);

                if (branches && branches.length > 0) {
                    let minDistance = Infinity;
                    let closest = null;

                    for (const branch of branches) {
                        const dist = getDistanceFromLatLonInMeters(lat, lng, branch.latitude, branch.longitude);
                        if (dist < minDistance) {
                            minDistance = dist;
                            closest = branch;
                        }
                    }

                    setNearestBranch(closest);
                    setDistance(minDistance);
                }
            },
            (error) => {
                if (highAccuracy) {
                    getLocation(false);
                    return;
                }
                setGeoError(`Location Error: ${error.message || 'Unknown error'}`);
            },
            { enableHighAccuracy: highAccuracy, timeout: 10000, maximumAge: 0 }
        );
    };

    // Refresh location periodically
    useEffect(() => {
        getLocation();
        const interval = setInterval(getLocation, 30000);
        return () => clearInterval(interval);
    }, [branches]);

    const handlePunchIn = async () => {
        if (!location) {
            toast.error('Getting location... please wait.');
            getLocation();
            return;
        }

        if (!note.trim()) {
            toast.error('Please enter your daily goal.');
            return;
        }

        // Haptic feedback
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate([50]);
        }

        startTransition(async () => {
            // Optimistic update
            const tempAttendance: Attendance = {
                id: 'temp-id',
                userId: 'temp-user',
                date: new Date(),
                clockIn: new Date(),
                clockOut: null,
                punchMode,
                status: 'PRESENT',
                createdAt: new Date(),
                updatedAt: new Date(),
                clockInLat: location.lat,
                clockInLng: location.lng,
                clockOutLat: null,
                clockOutLng: null,
                ipAddress: '0.0.0.0',
                punchInNote: note,
                punchOutNote: null,
            };

            addOptimisticAttendance(tempAttendance);

            try {
                const result: PunchResult = await punchIn(location.lat, location.lng, punchMode, note);
                if (result.error) {
                    toast.error(result.error);
                } else {
                    toast.success(result.success || 'Punched In!');
                    setNote('');
                }
            } catch (e) {
                toast.error('Something went wrong.');
            }
        });
    };

    const handlePunchOut = async () => {
        if (!location) {
            toast.error('Getting location... please wait.');
            getLocation();
            return;
        }

        // Haptic feedback
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate([50, 30, 50]);
        }

        startTransition(async () => {
            // Optimistic update
            if (optimisticAttendance) {
                addOptimisticAttendance({
                    ...optimisticAttendance,
                    clockOut: new Date(),
                    punchOutNote: note
                });
            }

            try {
                const result: PunchResult = await punchOut(location.lat, location.lng, note);
                if (result.error) {
                    toast.error(result.error);
                } else {
                    toast.success(result.success || 'Punched Out!');
                    setNote('');
                }
            } catch (e) {
                toast.error('Something went wrong.');
            }
        });
    };

    const isPunchedIn = !!optimisticAttendance && !optimisticAttendance.clockOut;
    const isPunchedOut = !!optimisticAttendance && !!optimisticAttendance.clockOut;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-50 rounded-full opacity-50 blur-3xl pointer-events-none"></div>

            {/* Time & Location Info */}
            <div className="flex flex-col gap-3 z-10 w-full md:w-auto">
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-[10px] bg-indigo-50 w-fit px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                    <ClockIcon className="h-3.5 w-3.5" />
                    <span>{format(currentTime, 'EEEE, d MMM')}</span>
                </div>
                <h2 className="text-5xl font-black text-slate-900 tracking-tighter tabular-nums drop-shadow-sm">
                    {format(currentTime, 'hh:mm:ss')}
                    <span className="text-lg font-bold text-slate-400 ml-1 uppercase">{format(currentTime, 'a')}</span>
                </h2>

                {/* Branch Info */}
                <div className="flex items-start gap-2.5 text-sm text-slate-500 bg-slate-50/50 p-3 rounded-2xl border border-slate-100">
                    <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                        <MapPinIcon className="h-5 w-5 text-indigo-500 shrink-0" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-800 leading-tight">
                            {nearestBranch ? nearestBranch.name : 'Locating Branch...'}
                        </span>
                        {/* Distance / Status */}
                        {geoError ? (
                            <span className="text-rose-500 text-[10px] font-bold mt-0.5">{geoError}</span>
                        ) : (
                            <span className={clsx(
                                "text-[10px] font-bold uppercase tracking-wider mt-0.5",
                                distance !== null && nearestBranch && distance <= nearestBranch.radius ? "text-emerald-600" : "text-amber-600"
                            )}>
                                {location ? (
                                    nearestBranch ?
                                        `${distance ? Math.round(distance) : 0}m • ${distance && distance > nearestBranch.radius ? 'Out of Range' : 'In Range'}`
                                        : 'Determining...'
                                ) : 'Accessing GPS...'}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col items-center gap-3 w-full md:w-auto z-10">
                {isPunchedOut ? (
                    <div className="bg-slate-100 rounded-xl p-4 text-center w-full min-w-[200px]">
                        <p className="text-slate-500 text-sm font-medium">Shift Completed</p>
                        <p className="text-slate-900 font-bold text-lg">See you tomorrow!</p>
                        <div className="mt-2 text-xs text-slate-400">
                            In: {optimisticAttendance?.clockIn ? format(new Date(optimisticAttendance.clockIn), 'h:mm a') : 'N/A'} •
                            Out: {optimisticAttendance?.clockOut ? format(new Date(optimisticAttendance.clockOut), 'h:mm a') : 'N/A'}
                        </div>
                    </div>
                ) : isPunchedIn ? (
                    <div className="w-full min-w-[200px] flex flex-col gap-3">
                        <div className="text-center">
                            <p className="text-xs text-slate-500 uppercase tracking-wide font-bold mb-1">Current Session</p>
                            <p className="text-emerald-600 font-bold text-2xl animate-pulse">
                                Active ({optimisticAttendance?.punchMode})
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                                Started at {optimisticAttendance?.clockIn ? format(new Date(optimisticAttendance.clockIn), 'h:mm a') : 'N/A'}
                            </p>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Progress Summary</label>
                            <textarea
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                placeholder="What did you achieve today?"
                                className="w-full rounded-xl border-slate-200 text-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 min-h-[80px]"
                            />
                        </div>

                        <button
                            onClick={handlePunchOut}
                            disabled={isPending || !note.trim()}
                            className={clsx(
                                "w-full rounded-xl py-3 px-6 font-bold text-white shadow-lg transition-all transform active:scale-95",
                                "bg-red-500 hover:bg-red-600 shadow-red-500/30",
                                (isPending || !note.trim()) && "opacity-70 cursor-not-allowed"
                            )}
                        >
                            {isPending ? 'Punching Out...' : 'Punch Out'}
                        </button>
                    </div>
                ) : (
                    <div className="w-full min-w-[240px] flex flex-col gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Punch Mode</label>
                            <div className="flex bg-slate-100 p-1 rounded-xl">
                                {['OFFICE', 'WFH', 'FIELD'].map(m => (
                                    <button
                                        key={m}
                                        onClick={() => setPunchMode(m)}
                                        className={clsx(
                                            "flex-1 py-2 text-xs font-bold rounded-lg transition-all",
                                            punchMode === m ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                                        )}
                                    >
                                        {m}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Daily Goal</label>
                            <textarea
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                placeholder="What's your plan for today?"
                                className="w-full rounded-xl border-slate-200 text-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 min-h-[80px]"
                            />
                        </div>

                        <button
                            onClick={handlePunchIn}
                            disabled={isPending || !!geoError || !note.trim()}
                            className={clsx(
                                "w-full rounded-xl py-4 px-8 font-bold text-white text-lg shadow-lg transition-all transform hover:-translate-y-1 active:scale-95",
                                !(isPending || !!geoError || !note.trim())
                                    ? "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30"
                                    : "bg-slate-300 cursor-not-allowed transform-none hover:translate-y-0 active:scale-100 shadow-none",
                                isPending && "opacity-70"
                            )}
                        >
                            {isPending ? 'Punching In...' : 'Punch In'}
                        </button>
                        {punchMode === 'OFFICE' && distance !== null && nearestBranch && distance > nearestBranch.radius && (
                            <p className="text-center text-xs text-amber-600 mt-2 font-medium">
                                Note: You are currently far from the branch, but punch-in is allowed.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

