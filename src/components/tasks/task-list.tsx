'use client';

import { useState } from 'react';
import { updateTaskStatus, deleteTask } from '@/app/lib/task-actions';
import { format } from 'date-fns';
import { TrashIcon, CalendarDaysIcon, FolderOpenIcon, UserIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { TaskWithDetails } from '@/types';
import toast from 'react-hot-toast';

const PRIORITY_STYLES: Record<string, string> = {
    HIGH: 'text-red-700 bg-red-50 border-red-200',
    MEDIUM: 'text-amber-700 bg-amber-50 border-amber-200',
    LOW: 'text-emerald-700 bg-emerald-50 border-emerald-200',
};

const STATUS_RING: Record<string, string> = {
    OPEN: 'text-slate-600 bg-slate-50 ring-slate-400/40',
    IN_PROGRESS: 'text-indigo-600 bg-indigo-50 ring-indigo-500/40',
    COMPLETED: 'text-emerald-600 bg-emerald-50 ring-emerald-500/40',
};

const STATUS_DOT: Record<string, string> = {
    OPEN: 'bg-slate-400',
    IN_PROGRESS: 'bg-indigo-500',
    COMPLETED: 'bg-emerald-500',
};

const FILTER_TABS = [
    { label: 'All', value: 'ALL' },
    { label: 'Open', value: 'OPEN' },
    { label: 'In Progress', value: 'IN_PROGRESS' },
    { label: 'Completed', value: 'COMPLETED' },
];

export default function TaskList({ tasks }: { tasks: TaskWithDetails[] }) {
    const [filterStatus, setFilterStatus] = useState('ALL');
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const counts = {
        ALL: tasks.length,
        OPEN: tasks.filter(t => t.status === 'OPEN').length,
        IN_PROGRESS: tasks.filter(t => t.status === 'IN_PROGRESS').length,
        COMPLETED: tasks.filter(t => t.status === 'COMPLETED').length,
    };

    const filtered = tasks.filter(t =>
        filterStatus === 'ALL' ? true : t.status === filterStatus
    );

    const handleDelete = async (id: string) => {
        if (!confirm('Delete this task? This action cannot be undone.')) return;
        setDeletingId(id);
        const result = await deleteTask(id);
        setDeletingId(null);
        if (result?.message && result.message !== 'Deleted') {
            toast.error(result.message);
        } else {
            toast.success('Task deleted');
        }
    };

    const handleStatusChange = async (id: string, status: string) => {
        const result = await updateTaskStatus(id, status);
        if (result?.message && result.message !== 'Status Updated') {
            toast.error(result.message);
        } else {
            toast.success('Status updated');
        }
    };

    if (tasks.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-64 bg-white rounded-2xl border-2 border-dashed border-slate-200 text-center">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                    <FolderOpenIcon className="h-6 w-6 text-slate-400" />
                </div>
                <p className="text-sm font-semibold text-slate-600">No tasks yet</p>
                <p className="text-xs text-slate-400 mt-1">Create a task using the form on the left.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
                {FILTER_TABS.map(tab => {
                    const count = counts[tab.value as keyof typeof counts];
                    const active = filterStatus === tab.value;
                    return (
                        <button
                            key={tab.value}
                            onClick={() => setFilterStatus(tab.value)}
                            className={clsx(
                                'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200',
                                active
                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-200'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
                            )}
                        >
                            {tab.label}
                            <span className={clsx(
                                'inline-flex items-center justify-center h-4 min-w-[1rem] px-1 rounded-full text-[10px] font-bold',
                                active ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'
                            )}>
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Task cards */}
            {filtered.length === 0 ? (
                <div className="text-center py-10 bg-white rounded-2xl border border-slate-200 text-sm text-slate-400">
                    No tasks match this filter.
                </div>
            ) : (
                <div className="grid gap-3">
                    {filtered.map(task => {
                        const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && task.status !== 'COMPLETED';
                        return (
                            <div
                                key={task.id}
                                className={clsx(
                                    'group bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden',
                                    task.status === 'COMPLETED' ? 'border-emerald-100 opacity-75' : 'border-slate-200',
                                    deletingId === task.id && 'opacity-40 pointer-events-none scale-95'
                                )}
                            >
                                {/* Priority stripe */}
                                <div className={clsx(
                                    'h-1 w-full',
                                    task.priority === 'HIGH' ? 'bg-red-400' :
                                        task.priority === 'MEDIUM' ? 'bg-amber-400' : 'bg-emerald-400'
                                )} />

                                <div className="p-4 sm:p-5">
                                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                                        {/* Left */}
                                        <div className="space-y-2 flex-1 min-w-0">
                                            <div className="flex items-start gap-2 flex-wrap">
                                                <h3 className={clsx(
                                                    'text-sm font-semibold text-slate-900 leading-snug',
                                                    task.status === 'COMPLETED' && 'line-through text-slate-400'
                                                )}>
                                                    {task.title}
                                                </h3>
                                                <span className={clsx(
                                                    'text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0',
                                                    PRIORITY_STYLES[task.priority] ?? PRIORITY_STYLES.MEDIUM
                                                )}>
                                                    {task.priority}
                                                </span>
                                            </div>

                                            {task.description && (
                                                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                                                    {task.description}
                                                </p>
                                            )}

                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                                                <span className="flex items-center gap-1">
                                                    <FolderOpenIcon className="h-3.5 w-3.5" />
                                                    <span className="font-medium text-slate-700">{task.project.name}</span>
                                                    {task.project.customer && (
                                                        <span className="text-slate-400">· {task.project.customer.name}</span>
                                                    )}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <UserIcon className="h-3.5 w-3.5" />
                                                    {task.assignedTo.name ?? 'Unassigned'}
                                                </span>
                                                {task.dueDate && (
                                                    <span className={clsx(
                                                        'flex items-center gap-1',
                                                        isOverdue ? 'text-red-500 font-semibold' : ''
                                                    )}>
                                                        <CalendarDaysIcon className="h-3.5 w-3.5" />
                                                        {isOverdue ? 'Overdue · ' : ''}
                                                        {format(new Date(task.dueDate), 'MMM d, yyyy')}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Right: status + delete */}
                                        <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
                                            {/* Status indicator + select */}
                                            <div className="flex items-center gap-1.5">
                                                <span className={clsx('h-2 w-2 rounded-full', STATUS_DOT[task.status] ?? 'bg-slate-400')} />
                                                <select
                                                    value={task.status}
                                                    onChange={e => handleStatusChange(task.id, e.target.value)}
                                                    className={clsx(
                                                        'text-xs font-semibold rounded-full px-3 py-1.5 border-0 ring-1 ring-inset pr-7 cursor-pointer focus:ring-2 focus:ring-indigo-500 transition-colors',
                                                        STATUS_RING[task.status] ?? STATUS_RING.OPEN
                                                    )}
                                                >
                                                    <option value="OPEN">Open</option>
                                                    <option value="IN_PROGRESS">In Progress</option>
                                                    <option value="COMPLETED">Completed</option>
                                                </select>
                                            </div>

                                            <button
                                                onClick={() => handleDelete(task.id)}
                                                className="p-1.5 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"
                                                title="Delete"
                                            >
                                                <TrashIcon className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
