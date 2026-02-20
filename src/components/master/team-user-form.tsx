'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { createUser } from '@/app/lib/master-actions';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const inputClass = "block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500";
const labelClass = "block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide";

interface Role { id: string; name: string; }
interface Branch { id: string; name: string; }

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending}
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-50 transition-colors">
            {pending ? <><span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" /> Saving...</> : 'Create User'}
        </button>
    );
}

export default function TeamUserForm({ roles, branches }: { roles: Role[], branches: Branch[] }) {
    const [state, formAction] = useActionState(createUser, null);
    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-base font-semibold text-slate-900 mb-4">Add New Team Member</h2>
            <form action={formAction} className="space-y-4">
                {state?.message && (
                    <div className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${state.success ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                        {state.success ? <CheckCircleIcon className="w-4 h-4 shrink-0" /> : <ExclamationCircleIcon className="w-4 h-4 shrink-0" />}
                        {state.message}
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div><label className={labelClass}>Employee Code</label><input name="code" className={inputClass} placeholder="e.g., EMP001" /></div>
                    <div><label className={labelClass}>Full Name *</label><input name="name" required className={inputClass} placeholder="Full name" /></div>
                    <div><label className={labelClass}>Email *</label><input name="email" type="email" required className={inputClass} placeholder="user@company.com" /></div>
                    <div>
                        <label className={labelClass}>Role</label>
                        <select name="roleId" className={inputClass}>
                            <option value="">Select Role</option>
                            {roles.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className={labelClass}>Branch</label>
                        <select name="branchId" className={inputClass}>
                            <option value="">Select Branch</option>
                            {branches.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                        </select>
                    </div>
                </div>
                <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                    ⚠️ Default password: <strong>Password@123</strong>. User should change it on first login.
                </p>
                <div className="flex justify-end pt-2 border-t border-slate-100"><SubmitButton /></div>
            </form>
        </div>
    );
}
