'use client';

import { useState } from 'react';
import { updateMyTaskStatus } from '@/app/lib/task-actions';
import { format } from 'date-fns';
import clsx from 'clsx';
import {
    ClipboardDocumentListIcon,
    CalendarDaysIcon,
    FolderOpenIcon,
} from '@heroicons/react/24/outline';
import { TaskWithDetails } from '@/types';
import toast from 'react-hot-toast';

const PRIORITY_STYLES: Record<string, string> = {
    HIGH: 'text-red-700 bg-red-50 border-red-200',
    MEDIUM: 'text-amber-700 bg-amber-50 border-amber-200',
    LOW: 'text-emerald-700 bg-emerald-50 border-emerald-200',
};

const STATUS_STYLES: Record<string, string> = {
    OPEN: 'text-slate-600 bg-slate-50 ring-slate-400/30',
    IN_PROGRESS: 'text-indigo-600 bg-indigo-50 ring-indigo-500/30',
    COMPLETED: 'text-emerald-600 bg-emerald-50 ring-emerald-500/30',
};

export default function MyTaskList({ tasks }: { tasks: TaskWithDetails[] }) {
    const [filterStatus, setFilterStatus] = useState('ALL');
    const [updating, setUpdating] = useState<string | null>(null);

    const filtered = tasks.filter(t =>
        filterStatus === 'ALL' ? true : t.status === filterStatus
    );

    const handleStatusChange = async (id: string, newStatus: string) => {
        setUpdating(id);
        const result = await updateMyTaskStatus(id, newStatus);
        setUpdating(null);
        if (result?.message && result.message !== 'Status Updated') {
            toast.error(result.message);
        } else {
            toast.success('Status updated');
        }
    };

    if (tasks.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-center bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                    <ClipboardDocumentListIcon className="h-6 w-6 text-slate-400" />
                </div>
                <p className="text-sm font-medium text-slate-700">No tasks assigned yet</p>
                <p className="text-xs text-slate-400 mt-1">Tasks assigned to you by your admin will appear here.</p>
            </div>
        );
    }

    const counts = {
        OPEN: tasks.filter(t => t.status === 'OPEN').length,
        IN_PROGRESS: tasks.filter(t => t.status === 'IN_PROGRESS').length,
        COMPLETED: tasks.filter(t => t.status === 'COMPLETED').length,
    };

    return (
        <div className="space-y-5">
            {/* Summary pills */}
            <div className="flex flex-wrap gap-3">
                {[
                    { label: 'All', value: 'ALL', count: tasks.length },
                    { label: 'Open', value: 'OPEN', count: counts.OPEN },
                    { label: 'In Progress', value: 'IN_PROGRESS', count: counts.IN_PROGRESS },
                    { label: 'Completed', value: 'COMPLETED', count: counts.COMPLETED },
                ].map(tab => (
                    <button
                        key={tab.value}
                        onClick={() => setFilterStatus(tab.value)}
                        className={clsx(
                            'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors',
                            filterStatus === tab.value
                                ? 'bg-indigo-600 text-white border-indigo-600'
                                : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
                        )}
                    >
                        {tab.label}
                        <span className={clsx(
                            'inline-flex items-center justify-center h-4 w-4 rounded-full text-[10px] font-bold',
                            filterStatus === tab.value ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                        )}>
                            {tab.count}
                        </span>
                    </button>
                ))}
            </div>

            {/* Task cards */}
            <div className="grid gap-4">
                {filtered.length === 0 ? (
                    <div className="text-center py-8 text-slate-400 text-sm bg-white border border-slate-200 rounded-xl">
                        No tasks in this category.
                    </div>
                ) : (
                    filtered.map(task => (
                        <div
                            key={task.id}
                            className={clsx(
                                'bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition-all',
                                task.status === 'COMPLETED' ? 'border-emerald-200 opacity-80' : 'border-slate-200'
                            )}
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                {/* Left: info */}
                                <div className="space-y-2 flex-1">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className={clsx(
                                            'text-sm font-semibold text-slate-900',
                                            task.status === 'COMPLETED' && 'line-through text-slate-400'
                                        )}>
                                            {task.title}
                                        </h3>
                                        <span className={clsx(
                                            'text-[10px] font-bold px-2 py-0.5 rounded-full border',
                                            PRIORITY_STYLES[task.priority] ?? PRIORITY_STYLES.MEDIUM
                                        )}>
                                            {task.priority}
                                        </span>
                                    </div>

                                    {task.description && (
                                        <p className="text-xs text-slate-500 line-clamp-2">{task.description}</p>
                                    )}

                                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <FolderOpenIcon className="h-3.5 w-3.5" />
                                            {task.project.name}
                                            {task.project.customer && (
                                                <span className="text-slate-400">· {task.project.customer.name}</span>
                                            )}
                                        </span>
                                        {task.dueDate && (
                                            <span className={clsx(
                                                'flex items-center gap-1',
                                                new Date(task.dueDate) < new Date() && task.status !== 'COMPLETED'
                                                    ? 'text-red-500 font-medium'
                                                    : ''
                                            )}>
                                                <CalendarDaysIcon className="h-3.5 w-3.5" />
                                                Due {format(new Date(task.dueDate), 'MMM d, yyyy')}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Right: status updater */}
                                <div className="shrink-0">
                                    <select
                                        value={task.status}
                                        onChange={e => handleStatusChange(task.id, e.target.value)}
                                        disabled={updating === task.id}
                                        className={clsx(
                                            'text-xs font-semibold rounded-full px-3 py-1.5 border-0 ring-1 ring-inset pr-8 cursor-pointer focus:ring-2 focus:ring-indigo-600 disabled:opacity-60',
                                            STATUS_STYLES[task.status] ?? STATUS_STYLES.OPEN
                                        )}
                                    >
                                        <option value="OPEN">Open</option>
                                        <option value="IN_PROGRESS">In Progress</option>
                                        <option value="COMPLETED">Completed</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
