'use client';

import { useActionState, useEffect } from 'react';
import { updateProfile, changePassword } from '@/app/lib/profile-actions';
import { UserCircleIcon, KeyIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

interface ProfileFormProps {
    user: {
        name: string | null;
        email: string;
        phone: string | null;
        branch: { name: string } | string | null;
        image: string | null;
        role: { name: string } | null;
    };
}

const inputClass = "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500";
const disabledClass = "w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 cursor-not-allowed";
const labelClass = "block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1";

export function ProfileForm({ user }: ProfileFormProps) {
    const [profileState, profileAction, profilePending] = useActionState(updateProfile, null);
    const [pwState, pwAction, pwPending] = useActionState(changePassword, null);

    // Toast feedback for profile update
    useEffect(() => {
        if (profileState?.success) toast.success(profileState.success);
        if (profileState?.error) toast.error(profileState.error);
    }, [profileState]);

    // Toast feedback for password change
    useEffect(() => {
        if (pwState?.success) toast.success(pwState.success);
        if (pwState?.error) toast.error(pwState.error);
    }, [pwState]);

    const branchName = typeof user.branch === 'object' && user.branch ? user.branch.name : user.branch;

    return (
        <div className="space-y-6">
            {/* Personal Information */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100">
                    <UserCircleIcon className="h-5 w-5 text-indigo-600" />
                    <h2 className="text-sm font-bold text-slate-900">Personal Information</h2>
                </div>
                <form action={profileAction} className="p-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className={labelClass}>Full Name</label>
                            <input name="name" type="text" defaultValue={user.name || ''} required className={inputClass} />
                        </div>
                        <div>
                            <label className={labelClass}>Email</label>
                            <input type="email" value={user.email} disabled className={disabledClass} />
                        </div>
                        <div>
                            <label className={labelClass}>Phone</label>
                            <input name="phone" type="tel" defaultValue={user.phone || ''} className={inputClass} placeholder="+91 98765 43210" />
                        </div>
                        <div>
                            <label className={labelClass}>Branch</label>
                            <input type="text" value={branchName || '—'} disabled className={disabledClass} />
                        </div>
                    </div>
                    <div className="flex justify-end pt-2">
                        <button type="submit" disabled={profilePending}
                            className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors disabled:opacity-60 shadow-sm">
                            {profilePending ? 'Saving…' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>

            {/* Change Password */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100">
                    <KeyIcon className="h-5 w-5 text-indigo-600" />
                    <h2 className="text-sm font-bold text-slate-900">Change Password</h2>
                </div>
                <form action={pwAction} className="p-6 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <label className={labelClass}>Current Password</label>
                            <input name="currentPassword" type="password" required className={inputClass} />
                        </div>
                        <div>
                            <label className={labelClass}>New Password</label>
                            <input name="newPassword" type="password" required className={inputClass} />
                        </div>
                        <div>
                            <label className={labelClass}>Confirm Password</label>
                            <input name="confirmPassword" type="password" required className={inputClass} />
                        </div>
                    </div>
                    <div className="flex justify-end pt-2">
                        <button type="submit" disabled={pwPending}
                            className="rounded-lg bg-slate-800 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-900 transition-colors disabled:opacity-60 shadow-sm">
                            {pwPending ? 'Updating…' : 'Update Password'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
