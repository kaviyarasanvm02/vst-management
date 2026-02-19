'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createProject } from '@/app/lib/master-actions';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const inputClass = "block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500";
const labelClass = "block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide";

interface Customer { id: string; name: string; }
interface User { id: string; name: string | null; }

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending}
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-50 transition-colors">
            {pending ? <><span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" /> Saving...</> : 'Save Project'}
        </button>
    );
}

export default function ProjectForm({ customers, users }: { customers: Customer[]; users: User[] }) {
    const [state, formAction] = useActionState(createProject, null);
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-base font-semibold text-slate-900 mb-4">Add New Project</h2>
            <form action={formAction} className="space-y-4">
                {state?.message && (
                    <div className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${state.success ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                        {state.success ? <CheckCircleIcon className="w-4 h-4 shrink-0" /> : <ExclamationCircleIcon className="w-4 h-4 shrink-0" />}
                        {state.message}
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className={labelClass}>Project Code *</label><input name="code" required className={inputClass} placeholder="e.g., PROJ001" /></div>
                    <div><label className={labelClass}>Name *</label><input name="name" required className={inputClass} placeholder="Project name" /></div>
                    <div>
                        <label className={labelClass}>Customer</label>
                        <select name="customerId" className={inputClass}>
                            <option value="">Select Customer</option>
                            {customers.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className={labelClass}>Manager</label>
                        <select name="managerId" className={inputClass}>
                            <option value="">Select Manager</option>
                            {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                        </select>
                    </div>
                    <div><label className={labelClass}>Start Date</label><input name="startDate" type="date" className={inputClass} /></div>
                    <div><label className={labelClass}>End Date</label><input name="endDate" type="date" className={inputClass} /></div>
                    <div className="md:col-span-2">
                        <label className={labelClass}>Team Members</label>
                        <select name="teamMembers" multiple className={`${inputClass} h-32`}>
                            {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                        </select>
                        <p className="text-xs text-slate-400 mt-1">Hold Ctrl/Cmd to select multiple members</p>
                    </div>
                    <div className="md:col-span-2"><label className={labelClass}>Remarks</label><textarea name="remarks" rows={2} className={inputClass} placeholder="Optional notes" /></div>
                </div>
                <div className="flex justify-end pt-2 border-t border-slate-100"><SubmitButton /></div>
            </form>
        </div>
    );
}
