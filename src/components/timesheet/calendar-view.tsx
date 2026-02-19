'use client';

import { useState, useMemo } from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, format, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { TimesheetWithDetails } from '@/types';

interface CalendarViewProps {
    timesheets: TimesheetWithDetails[];
}

export default function CalendarView({ timesheets }: CalendarViewProps) {
    const [currentDate, setCurrentDate] = useState(new Date());

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const calendarDays = useMemo(() => eachDayOfInterval({ start: startDate, end: endDate }), [startDate, endDate]);

    // O(n) - Create a Map for O(1) lookup
    const timesheetMap = useMemo(() => {
        const map = new Map<string, TimesheetWithDetails>();
        timesheets.forEach(t => {
            const dateKey = format(new Date(t.date), 'yyyy-MM-dd');
            // If multiple timesheets per day were possible, we'd array them. 
            // Assuming one per user per day for now based on schema logic.
            map.set(dateKey, t);
        });
        return map;
    }, [timesheets]);

    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

    const handleDayClick = (day: Date) => {
        // Todo: Navigate to create timesheet for this date or open modal
        console.log('Clicked date:', day);
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    {format(currentDate, 'MMMM yyyy')}
                </h2>
                <div className="flex gap-1">
                    <button onClick={prevMonth} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors">
                        <ChevronLeftIcon className="w-5 h-5" />
                    </button>
                    <button onClick={nextMonth} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors">
                        <ChevronRightIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 text-center text-xs font-semibold text-slate-500 border-b border-slate-100 bg-slate-50">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="py-3 uppercase tracking-wider">{day}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 bg-slate-200 gap-px">
                {calendarDays.map((day, dayIdx) => {
                    const dateKey = format(day, 'yyyy-MM-dd');
                    const timesheet = timesheetMap.get(dateKey);
                    const totalHours = timesheet?.totalHours || 0;
                    const hasEntry = totalHours > 0;

                    const isToday = isSameDay(day, new Date());
                    const isCurrentMonth = isSameMonth(day, monthStart);

                    return (
                        <div
                            key={day.toString()}
                            onClick={() => handleDayClick(day)}
                            className={clsx(
                                'min-h-[100px] bg-white p-2 relative hover:bg-slate-50 transition-colors cursor-pointer group',
                                !isCurrentMonth && 'bg-slate-50/50 text-slate-400'
                            )}
                        >
                            <span
                                className={clsx(
                                    'text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full mb-1 transition-all',
                                    isToday ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200' : 'text-slate-700 group-hover:bg-slate-200'
                                )}
                            >
                                {format(day, 'd')}
                            </span>

                            {hasEntry && (
                                <div className="mt-1 animate-in fade-in duration-300">
                                    <div className={clsx(
                                        "flex items-center gap-1.5 px-2 py-1 rounded-md border",
                                        timesheet?.status === 'APPROVED' ? "bg-emerald-50 text-emerald-700 border-emerald-100" :
                                            timesheet?.status === 'REJECTED' ? "bg-red-50 text-red-700 border-red-100" :
                                                "bg-indigo-50 text-indigo-700 border-indigo-100"
                                    )}>
                                        <span className="text-xs font-bold">{totalHours}h</span>
                                        <span className="text-[10px] hidden sm:inline opacity-80">logged</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
