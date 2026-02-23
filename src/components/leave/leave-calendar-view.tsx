'use client';

import { useState, useMemo } from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, format, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Leave } from '@prisma/client';

interface LeaveCalendarViewProps {
    leaves: Leave[];
}

export function LeaveCalendarView({ leaves }: LeaveCalendarViewProps) {
    const [currentDate, setCurrentDate] = useState(new Date());

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const calendarDays = useMemo(() => eachDayOfInterval({ start: startDate, end: endDate }), [startDate, endDate]);

    const leaveMap = useMemo(() => {
        const map = new Map<string, Leave[]>();
        leaves.forEach(leave => {
            const dateKey = format(new Date(leave.date), 'yyyy-MM-dd');
            const existing = map.get(dateKey) || [];
            map.set(dateKey, [...existing, leave]);
        });
        return map;
    }, [leaves]);

    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

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
                {calendarDays.map((day) => {
                    const dateKey = format(day, 'yyyy-MM-dd');
                    const dayLeaves = leaveMap.get(dateKey);
                    const isToday = isSameDay(day, new Date());
                    const isCurrentMonth = isSameMonth(day, monthStart);

                    return (
                        <div
                            key={day.toString()}
                            className={clsx(
                                'min-h-[100px] bg-white p-2 relative hover:bg-slate-50 transition-colors group',
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

                            <div className="space-y-1">
                                {dayLeaves?.map((leave) => (
                                    <div
                                        key={leave.id}
                                        className={clsx(
                                            "px-2 py-1 rounded-md border text-xs font-medium truncate",
                                            leave.status === 'APPROVED' ? "bg-green-50 text-green-700 border-green-100" :
                                                leave.status === 'REJECTED' ? "bg-red-50 text-red-700 border-red-100" :
                                                    "bg-yellow-50 text-yellow-700 border-yellow-100"
                                        )}
                                        title={`${leave.type}: ${leave.reason || 'No reason'}`}
                                    >
                                        {leave.type.toLowerCase()}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
