'use client';

import { useState, useEffect } from 'react';
import { punchIn, punchOut, type PunchResult } from '@/app/lib/attendance-actions';
import { getDistanceFromLatLonInMeters } from '@/lib/geo';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import clsx from 'clsx'; // Assuming clsx is installed
import { format } from 'date-fns';

type AttendanceCardProps = {
    todayAttendance: any; // Using any for simplicity for now, ideally strictly typed
    userBranch: {
        name: string;
        latitude: number;
        longitude: number;
        radius: number;
    } | null;
};

export function AttendanceCard({ todayAttendance, branches }: { todayAttendance: any, branches: any[] }) {
    const [loading, setLoading] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
    const [nearestBranch, setNearestBranch] = useState<any | null>(null);
    const [distance, setDistance] = useState<number | null>(null);
    const [geoError, setGeoError] = useState<string | null>(null);
    const [punchMode, setPunchMode] = useState('OFFICE');
    const [note, setNote] = useState('');

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

        console.log(`Requesting location (High Accuracy: ${highAccuracy})...`);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                console.log('Location received:', lat, lng);
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
                // Log detailed error info to console
                console.error('Geolocation Error Details:', {
                    code: error.code,
                    message: error.message,
                    originalError: error
                });

                if (highAccuracy) {
                    console.log('High accuracy failed, retrying with low accuracy...');
                    getLocation(false); // Retry with low accuracy
                    return;
                }

                switch (error.code) {
                    case 1: // PERMISSION_DENIED
                        setGeoError('Location permission denied. Please enable it in your browser settings.');
                        break;
                    case 2: // POSITION_UNAVAILABLE
                        setGeoError('Location information is unavailable. Try moving to an open area.');
                        break;
                    case 3: // TIMEOUT
                        setGeoError('The request to get user location timed out.');
                        break;
                    default:
                        setGeoError(`Location Error: ${error.message || 'Unknown error'}`);
                        break;
                }
            },
            { enableHighAccuracy: highAccuracy, timeout: 10000, maximumAge: 0 }
        );
    };

    // Refresh location periodically
    useEffect(() => {
        getLocation();
        const interval = setInterval(getLocation, 30000); // Check every 30s
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [branches]);

    const handlePunchIn = async () => {
        if (!location) {
            toast.error('Getting location... please wait.');
            getLocation();
            return;
        }

        // Optional Frontend check - REMOVED strictly for "Too Far" blocking
        // We now allow punching in from anywhere.
        // if (punchMode === 'OFFICE' && nearestBranch && distance !== null && distance > nearestBranch.radius) {
        //     toast.error(`You are too far from ${nearestBranch.name} (${Math.round(distance)}m).`);
        //     return;
        // }

        if (!note.trim()) {
            toast.error('Please enter your daily goal.');
            return;
        }

        setLoading(true);
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
        } finally {
            setLoading(false);
        }
    };

    const handlePunchOut = async () => {
        if (!location) {
            toast.error('Getting location... please wait.');
            getLocation();
            return;
        }

        setLoading(true);
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
        } finally {
            setLoading(false);
        }
    };

    const isPunchedIn = !!todayAttendance && !todayAttendance.clockOut;
    const isPunchedOut = !!todayAttendance && !!todayAttendance.clockOut;

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-50 rounded-full opacity-50 blur-3xl pointer-events-none"></div>

            {/* Time & Location Info */}
            <div className="flex flex-col gap-2 z-10 w-full md:w-auto">
                <div className="flex items-center gap-2 text-indigo-600 font-medium text-sm bg-indigo-50 w-fit px-3 py-1 rounded-full">
                    <ClockIcon className="h-4 w-4" />
                    <span>{format(currentTime, 'EEEE, d MMMM')}</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
                    {format(currentTime, 'h:mm:ss a')}
                </h2>

                {/* Branch Info */}
                <div className="flex items-start gap-2 text-sm text-slate-500 mt-1">
                    <MapPinIcon className="h-4 w-4 mt-0.5 shrink-0" />
                    <div className="flex flex-col">
                        <span className="font-semibold text-slate-700">
                            {nearestBranch ? nearestBranch.name : 'Locating Branch...'}
                        </span>
                        {/* Distance / Status */}
                        {geoError ? (
                            <span className="text-red-500 text-xs">{geoError}</span>
                        ) : (
                            <span className={clsx(
                                "text-xs font-medium",
                                distance !== null && nearestBranch && distance <= nearestBranch.radius ? "text-emerald-600" : "text-amber-600"
                            )}>
                                {location ? (
                                    nearestBranch ?
                                        `${distance ? Math.round(distance) : 0}m away ${distance && distance > nearestBranch.radius ? '(Too Far)' : '(In Range)'}`
                                        : 'Locating...'
                                ) : 'Getting location...'}
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
                            In: {format(new Date(todayAttendance.clockIn), 'h:mm a')} •
                            Out: {format(new Date(todayAttendance.clockOut), 'h:mm a')}
                        </div>
                    </div>
                ) : isPunchedIn ? (
                    <div className="w-full min-w-[200px] flex flex-col gap-3">
                        <div className="text-center">
                            <p className="text-xs text-slate-500 uppercase tracking-wide font-bold mb-1">Current Session</p>
                            <p className="text-emerald-600 font-bold text-2xl animate-pulse">
                                Active ({todayAttendance.punchMode})
                            </p>
                            <p className="text-xs text-slate-400 mt-1">
                                Started at {format(new Date(todayAttendance.clockIn), 'h:mm a')}
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
                            disabled={loading || !note.trim()}
                            className={clsx(
                                "w-full rounded-xl py-3 px-6 font-bold text-white shadow-lg transition-all transform active:scale-95",
                                "bg-red-500 hover:bg-red-600 shadow-red-500/30",
                                (loading || !note.trim()) && "opacity-70 cursor-not-allowed"
                            )}
                        >
                            {loading ? 'Punching Out...' : 'Punch Out'}
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
                            disabled={loading || !!geoError || !note.trim()}
                            className={clsx(
                                "w-full rounded-xl py-4 px-8 font-bold text-white text-lg shadow-lg transition-all transform hover:-translate-y-1 active:scale-95",
                                !(loading || !!geoError || !note.trim())
                                    ? "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30"
                                    : "bg-slate-300 cursor-not-allowed transform-none hover:translate-y-0 active:scale-100 shadow-none",
                                loading && "opacity-70"
                            )}
                        >
                            {loading ? 'Punching In...' : 'Punch In'}
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
