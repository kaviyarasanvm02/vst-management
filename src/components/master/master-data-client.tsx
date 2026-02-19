'use client';

import { useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import {
    createCustomer, createProject, createRole, createUser
} from '@/app/lib/master-actions';
import {
    BuildingOffice2Icon,
    FolderOpenIcon,
    UsersIcon,
    ShieldCheckIcon,
    CheckCircleIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Customer { id: string; name: string; }
interface Project { id: string; name: string; }
interface Role { id: string; name: string; }
interface User { id: string; name: string | null; }

interface MasterDataClientProps {
    customers: Customer[];
    roles: Role[];
    users: User[];
}

// ─── Shared Styles ────────────────────────────────────────────────────────────
const inputClass = "block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500";
const labelClass = "block text-xs font-semibold text-slate-600 mb-1 uppercase tracking-wide";

function SubmitButton({ label }: { label: string }) {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            disabled={pending}
            className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 disabled:opacity-50 transition-colors"
        >
            {pending ? (
                <><span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" /> Saving...</>
            ) : label}
        </button>
    );
}

function FormFeedback({ state }: { state: { message?: string; success?: boolean } | null }) {
    if (!state?.message) return null;
    return (
        <div className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${state.success ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
            {state.success ? <CheckCircleIcon className="w-4 h-4 shrink-0" /> : <ExclamationCircleIcon className="w-4 h-4 shrink-0" />}
            {state.message}
        </div>
    );
}

// ─── Customer Form ────────────────────────────────────────────────────────────
function CustomerForm() {
    const [state, formAction] = useActionState(createCustomer, null);
    return (
        <form action={formAction} className="space-y-4">
            <FormFeedback state={state} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className={labelClass}>Code *</label>
                    <input name="code" required className={inputClass} placeholder="e.g., CUST001" />
                </div>
                <div>
                    <label className={labelClass}>Name *</label>
                    <input name="name" required className={inputClass} placeholder="Customer name" />
                </div>
                <div className="md:col-span-2">
                    <label className={labelClass}>Address</label>
                    <textarea name="address" rows={2} className={inputClass} placeholder="Full address" />
                </div>
                <div>
                    <label className={labelClass}>Contact Person</label>
                    <input name="contactPerson" className={inputClass} placeholder="Contact name" />
                </div>
                <div>
                    <label className={labelClass}>Phone</label>
                    <input name="phone" type="tel" className={inputClass} placeholder="+91 00000 00000" />
                </div>
                <div>
                    <label className={labelClass}>Email</label>
                    <input name="email" type="email" className={inputClass} placeholder="contact@company.com" />
                </div>
                <div>
                    <label className={labelClass}>Remarks</label>
                    <input name="remarks" className={inputClass} placeholder="Optional notes" />
                </div>
            </div>
            <div className="flex justify-end pt-2 border-t border-slate-100">
                <SubmitButton label="Save Customer" />
            </div>
        </form>
    );
}

// ─── Project Form ─────────────────────────────────────────────────────────────
function ProjectForm({ customers, users }: { customers: Customer[]; users: User[] }) {
    const [state, formAction] = useActionState(createProject, null);
    return (
        <form action={formAction} className="space-y-4">
            <FormFeedback state={state} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className={labelClass}>Project Code *</label>
                    <input name="code" required className={inputClass} placeholder="e.g., PROJ001" />
                </div>
                <div>
                    <label className={labelClass}>Name *</label>
                    <input name="name" required className={inputClass} placeholder="Project name" />
                </div>
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
                <div>
                    <label className={labelClass}>Start Date</label>
                    <input name="startDate" type="date" className={inputClass} />
                </div>
                <div>
                    <label className={labelClass}>End Date</label>
                    <input name="endDate" type="date" className={inputClass} />
                </div>
                <div className="md:col-span-2">
                    <label className={labelClass}>Team Members</label>
                    <select name="teamMembers" multiple className={`${inputClass} h-32`}>
                        {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                    </select>
                    <p className="text-xs text-slate-400 mt-1">Hold Ctrl/Cmd to select multiple members</p>
                </div>
                <div className="md:col-span-2">
                    <label className={labelClass}>Remarks</label>
                    <textarea name="remarks" rows={2} className={inputClass} placeholder="Optional notes" />
                </div>
            </div>
            <div className="flex justify-end pt-2 border-t border-slate-100">
                <SubmitButton label="Save Project" />
            </div>
        </form>
    );
}

// ─── Role Form ────────────────────────────────────────────────────────────────
function RoleForm() {
    const [state, formAction] = useActionState(createRole, null);
    return (
        <form action={formAction} className="space-y-4">
            <FormFeedback state={state} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className={labelClass}>Code *</label>
                    <input name="code" required className={inputClass} placeholder="e.g., DEV" />
                </div>
                <div>
                    <label className={labelClass}>Name *</label>
                    <input name="name" required className={inputClass} placeholder="e.g., Developer" />
                </div>
                <div className="md:col-span-2">
                    <label className={labelClass}>Remarks</label>
                    <input name="remarks" className={inputClass} placeholder="Optional notes" />
                </div>
            </div>
            <div className="flex justify-end pt-2 border-t border-slate-100">
                <SubmitButton label="Save Role" />
            </div>
        </form>
    );
}

// ─── Team User Form ───────────────────────────────────────────────────────────
function TeamUserForm({ roles }: { roles: Role[] }) {
    const [state, formAction] = useActionState(createUser, null);
    return (
        <form action={formAction} className="space-y-4">
            <FormFeedback state={state} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className={labelClass}>Employee Code</label>
                    <input name="code" className={inputClass} placeholder="e.g., EMP001" />
                </div>
                <div>
                    <label className={labelClass}>Full Name *</label>
                    <input name="name" required className={inputClass} placeholder="Full name" />
                </div>
                <div>
                    <label className={labelClass}>Email *</label>
                    <input name="email" type="email" required className={inputClass} placeholder="user@company.com" />
                </div>
                <div>
                    <label className={labelClass}>Role</label>
                    <select name="roleId" className={inputClass}>
                        <option value="">Select Role</option>
                        {roles.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
                    </select>
                </div>
                <div>
                    <label className={labelClass}>Branch</label>
                    <input name="branch" className={inputClass} placeholder="e.g., Chennai" />
                </div>
            </div>
            <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                ⚠️ Default password will be set to <strong>Password@123</strong>. User should change it on first login.
            </p>
            <div className="flex justify-end pt-2 border-t border-slate-100">
                <SubmitButton label="Create User" />
            </div>
        </form>
    );
}

// ─── Sidebar Nav Items ────────────────────────────────────────────────────────
const tabs = [
    { key: 'customer', label: 'Customer Master', icon: BuildingOffice2Icon },
    { key: 'project', label: 'Project', icon: FolderOpenIcon },
    { key: 'user', label: 'Team User', icon: UsersIcon },
    { key: 'role', label: 'Role', icon: ShieldCheckIcon },
] as const;

type TabKey = typeof tabs[number]['key'];

// ─── Main Client Component ────────────────────────────────────────────────────
export default function MasterDataClient({ customers, roles, users }: MasterDataClientProps) {
    const [activeTab, setActiveTab] = useState<TabKey>('customer');

    const tabTitles: Record<TabKey, string> = {
        customer: 'Customer Master',
        project: 'Project',
        user: 'Team User',
        role: 'Role',
    };

    return (
        <div className="flex gap-6 h-full">
            {/* Left Sidebar */}
            <aside className="w-56 shrink-0">
                <nav className="flex flex-col gap-1 bg-white rounded-xl border border-slate-200 shadow-sm p-2">
                    {tabs.map(({ key, label, icon: Icon }) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={clsx(
                                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-left transition-all duration-200',
                                activeTab === key
                                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-900/20'
                                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                            )}
                        >
                            <Icon className="w-4 h-4 shrink-0" />
                            {label}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Right Content Panel */}
            <div className="flex-1 min-w-0">
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
                        {tabTitles[activeTab]}
                    </h2>

                    {activeTab === 'customer' && <CustomerForm />}
                    {activeTab === 'project' && <ProjectForm customers={customers} users={users} />}
                    {activeTab === 'role' && <RoleForm />}
                    {activeTab === 'user' && <TeamUserForm roles={roles} />}
                </div>
            </div>
        </div>
    );
}
