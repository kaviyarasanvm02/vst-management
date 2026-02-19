'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createTask } from '@/app/lib/task-actions';
import {
    PlusIcon,
    CheckCircleIcon,
    ExclamationCircleIcon,
    DocumentTextIcon,
    UserIcon,
    FolderOpenIcon,
    CalendarDaysIcon,
    FlagIcon,
} from '@heroicons/react/24/outline';

interface Employee { id: string; name: string | null; }
interface Project { id: string; name: string; }
interface CreateTaskFormProps { employees: Employee[]; projects: Project[]; }

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-3 text-sm font-semibold text-white hover:bg-indigo-500 active:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-60 transition-all duration-200 shadow-md shadow-indigo-500/20"
        >
            {pending ? (
                <>
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                    Creating Task...
                </>
            ) : (
                <>
                    <PlusIcon className="w-4 h-4" />
                    Assign Task
                </>
            )}
        </button>
    );
}

const inputClass = "block w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 shadow-sm placeholder-slate-400 focus:bg-white focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30 transition-all duration-150";
const labelClass = "flex items-center gap-1.5 text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide";

export default function CreateTaskForm({ employees, projects }: CreateTaskFormProps) {
    const [state, formAction] = useActionState(createTask, null);

    return (
        <form action={formAction} className="space-y-5">
            {/* Feedback banner */}
            {state?.message && (
                <div className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-medium border ${state.message.includes('Successfully')
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-red-50 text-red-700 border-red-200'
                    }`}>
                    {state.message.includes('Successfully')
                        ? <CheckCircleIcon className="w-5 h-5 shrink-0" />
                        : <ExclamationCircleIcon className="w-5 h-5 shrink-0" />
                    }
                    {state.message}
                </div>
            )}

            {/* Row 1: Title (full) + Description (full) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Title */}
                <div>
                    <label htmlFor="title" className={labelClass}>
                        <DocumentTextIcon className="w-3.5 h-3.5" />
                        Task Title <span className="text-red-400 normal-case tracking-normal font-bold ml-0.5">*</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        required
                        className={inputClass}
                        placeholder="e.g., Implement Login Page"
                    />
                </div>

                {/* Project */}
                <div>
                    <label htmlFor="projectId" className={labelClass}>
                        <FolderOpenIcon className="w-3.5 h-3.5" />
                        Project <span className="text-red-400 normal-case tracking-normal font-bold ml-0.5">*</span>
                    </label>
                    <select name="projectId" id="projectId" required className={inputClass}>
                        <option value="">— Select Project —</option>
                        {projects.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Row 2: Description */}
            <div>
                <label htmlFor="description" className={labelClass}>
                    <DocumentTextIcon className="w-3.5 h-3.5" />
                    Description
                </label>
                <textarea
                    name="description"
                    id="description"
                    rows={3}
                    className={inputClass}
                    placeholder="Describe what needs to be done..."
                />
            </div>

            {/* Row 3: Assignee + Due Date + Priority */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Assignee */}
                <div>
                    <label htmlFor="assignedToId" className={labelClass}>
                        <UserIcon className="w-3.5 h-3.5" />
                        Assign To <span className="text-red-400 normal-case tracking-normal font-bold ml-0.5">*</span>
                    </label>
                    <select name="assignedToId" id="assignedToId" required className={inputClass}>
                        <option value="">— Select Employee —</option>
                        {employees.map(emp => (
                            <option key={emp.id} value={emp.id}>{emp.name ?? emp.id}</option>
                        ))}
                    </select>
                </div>

                {/* Due Date */}
                <div>
                    <label htmlFor="dueDate" className={labelClass}>
                        <CalendarDaysIcon className="w-3.5 h-3.5" />
                        Due Date
                    </label>
                    <input type="date" name="dueDate" id="dueDate" className={inputClass} />
                </div>

                {/* Priority */}
                <div>
                    <label htmlFor="priority" className={labelClass}>
                        <FlagIcon className="w-3.5 h-3.5" />
                        Priority
                    </label>
                    <select name="priority" id="priority" defaultValue="MEDIUM" className={inputClass}>
                        <option value="HIGH">🔴 High</option>
                        <option value="MEDIUM">🟡 Medium</option>
                        <option value="LOW">🟢 Low</option>
                    </select>
                </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-2 border-t border-slate-100">
                <SubmitButton />
            </div>
        </form>
    );
}
