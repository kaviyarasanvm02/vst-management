'use client';

import { createTimesheet } from '@/app/lib/timesheet-actions';
import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { useActionState } from 'react';
import { ActionResult } from '@/types';
import { BriefcaseIcon, MapPinIcon, ClockIcon, PencilSquareIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CreateTimesheetForm({ projects }: { projects: any[] }) {
    const initialState: ActionResult = {};
    const [state, dispatch] = useActionState(createTimesheet, initialState);

    // Controlled state
    const [date, setDate] = useState<string>(dayjs().format('YYYY-MM-DD'));
    const [startTime, setStartTime] = useState<string>('');
    const [endTime, setEndTime] = useState<string>('');
    const [hours, setHours] = useState<string>('');

    // Project state
    const [projectId, setProjectId] = useState<string>('');
    const [location, setLocation] = useState<string>('KalayarKoil office');

    // Calculate hours helper
    const calculateHours = (startStr: string, endStr: string) => {
        if (startStr && endStr) {
            const start = dayjs(`2000-01-01 ${startStr}`);
            const end = dayjs(`2000-01-01 ${endStr}`);

            if (end.isValid() && start.isValid()) {
                const diffInMinutes = end.diff(start, 'minute');
                const diffInHours = diffInMinutes / 60;
                if (diffInHours > 0) {
                    setHours(diffInHours.toFixed(2));
                } else {
                    setHours('');
                }
            }
        }
    };

    return (
        <form action={dispatch} className="max-w-xl mx-auto">
            {/* Hidden Inputs for Server Action 'FormData' */}
            <input type="hidden" name="date" value={date} />
            <input type="hidden" name="hours" value={hours} />
            <input type="hidden" name="projectId" value={projectId} />

            <div className="glass-card rounded-2xl overflow-hidden p-1 bg-white shadow-xl border border-slate-100">
                <div className="bg-gradient-to-r from-indigo-50 to-violet-50 px-8 py-6 border-b border-indigo-100/50">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                            <PencilSquareIcon className="h-6 w-6" />
                        </div>
                        New Entry
                    </h2>
                    <p className="text-sm text-slate-500 mt-2 pl-[3.25rem]">Log your daily activity for accurate tracking.</p>
                </div>

                <div className="p-8 space-y-8 bg-white/50 backdrop-blur-sm">
                    {/* Section 1: When & What */}
                    <div className="space-y-5">
                        <h3 className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <CalendarIcon className="h-4 w-4" />
                            <span>Project & Date</span>
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Date */}
                            <div className="md:col-span-1">
                                <label htmlFor="date-input" className="block text-sm font-bold text-slate-700 mb-2">Date</label>
                                <input
                                    id="date-input"
                                    type="date"
                                    required
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="block w-full rounded-xl border-slate-200 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5"
                                />
                                {state?.fieldErrors?.date && (
                                    <p className="mt-1 text-sm text-red-600">{state.fieldErrors.date[0]}</p>
                                )}
                            </div>

                            {/* Project */}
                            <label htmlFor="projectId" className="block text-sm font-bold text-slate-700 mb-2">Project</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <BriefcaseIcon className="h-5 w-5 text-slate-400" />
                                </div>
                                <select
                                    id="projectId"
                                    name="projectId"
                                    required
                                    value={projectId}
                                    onChange={(e) => setProjectId(e.target.value)}
                                    className="block w-full pl-10 rounded-xl border-slate-200 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 appearance-none"
                                >
                                    <option value="">Select a project...</option>
                                    {projects.map((p) => (
                                        <option key={p.id} value={p.id}>
                                            {p.name} ({p.code})
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            {state?.fieldErrors?.projectId && (
                                <p className="mt-1 text-sm text-red-600">{state.fieldErrors.projectId[0]}</p>
                            )}
                        </div>
                    </div>

                    {/* Section 2: Time & Location */}
                    <div className="space-y-5">
                        <h3 className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 flex items-center gap-2 pt-4 border-t border-slate-100">
                            <ClockIcon className="h-4 w-4" />
                            <span>Time & Context</span>
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Start Time</label>
                                <input
                                    type="time"
                                    value={startTime}
                                    onChange={(e) => {
                                        setStartTime(e.target.value);
                                        calculateHours(e.target.value, endTime);
                                    }}
                                    className="block w-full rounded-xl border-slate-200 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">End Time</label>
                                <input
                                    type="time"
                                    value={endTime}
                                    onChange={(e) => {
                                        setEndTime(e.target.value);
                                        calculateHours(startTime, e.target.value);
                                    }}
                                    className="block w-full rounded-xl border-slate-200 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5"
                                />
                            </div>
                        </div>

                        {/* Calculated Duration */}
                        <div>
                            <label htmlFor="hours-display" className="block text-sm font-bold text-slate-700 mb-2 flex justify-between items-center">
                                <span>Duration</span>
                                {hours && <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-lg border border-indigo-100">{hours} HRS</span>}
                            </label>
                            <div className="relative">
                                <input
                                    id="hours-display"
                                    value={hours}
                                    onChange={(e) => setHours(e.target.value)}
                                    type="number"
                                    placeholder="0.0"
                                    required
                                    min="0"
                                    step="0.1"
                                    className="block w-full rounded-xl border-slate-200 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5 pr-12"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <span className="text-slate-400 font-medium text-xs">HRS</span>
                                </div>
                            </div>
                            {!hours && <p className="text-xs text-slate-500 mt-1">Enter manually or use time pickers</p>}
                        </div>

                        {/* Location */}
                        <div>
                            <label htmlFor="location" className="block text-sm font-bold text-slate-700 mb-2">Location</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MapPinIcon className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    list="locations-list"
                                    required
                                    placeholder="Select or type location..."
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="block w-full pl-10 rounded-xl border-slate-200 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5"
                                />
                                <datalist id="locations-list">
                                    {['KalayarKoil office', 'Bangalore', 'Hubli', 'Chennai', 'Home', 'Client Site'].map((loc) => (
                                        <option key={loc} value={loc} />
                                    ))}
                                </datalist>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Description */}
                    <div className="space-y-5">
                        <h3 className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-4 flex items-center gap-2 pt-4 border-t border-slate-100">
                            <PencilSquareIcon className="h-4 w-4" />
                            <span>Description</span>
                        </h3>

                        <div>
                            <label htmlFor="activity" className="block text-sm font-bold text-slate-700 mb-2">Activity Name</label>
                            <input
                                id="activity"
                                name="activity"
                                type="text"
                                placeholder="e.g. Frontend Development"
                                required
                                className="block w-full rounded-xl border-slate-200 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2.5"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-bold text-slate-700 mb-2">Details</label>
                            <textarea
                                id="description"
                                name="description"
                                placeholder="Briefly describe your work..."
                                rows={3}
                                required
                                className="block w-full rounded-xl border-slate-200 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3"
                            />
                        </div>
                    </div>

                    {/* Errors & Actions */}
                    <div id="status-error" aria-live="polite" aria-atomic="true">
                        {state.error && (
                            <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 animate-pulse">
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
                                </div>
                                <p className="text-sm font-medium text-red-800">{state.error}</p>
                            </div>
                        )}
                        {state.success && (
                            <div className="p-4 bg-green-50 border border-green-100 rounded-xl flex items-center gap-3">
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                                </div>
                                <p className="text-sm font-medium text-green-800">{state.success}</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="border-t border-slate-100 bg-slate-50/50 px-8 py-6 flex justify-end">
                    <SubmitButton />
                </div>
            </div>
        </form>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-6 px-10 rounded-xl shadow-xl shadow-indigo-500/20 transition-all hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:translate-y-0"
        >
            {pending ? 'Saving...' : 'Save Entry'}
        </Button>
    );
}
