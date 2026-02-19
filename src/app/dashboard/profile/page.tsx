import { fetchCurrentUser } from '@/app/lib/profile-actions';
import { ProfileForm } from '@/components/profile/profile-form';
import { AvatarUpload } from '@/components/profile/avatar-upload';
import { redirect } from 'next/navigation';

export default async function Page() {
    const user = await fetchCurrentUser();
    if (!user) redirect('/auth/login');

    return (
        <div className="w-full max-w-3xl mx-auto space-y-6 pb-10">
            {/* Header */}
            <div className="pb-4 border-b border-slate-200">
                <h1 className="text-2xl font-bold text-slate-900">My Profile</h1>
                <p className="text-sm text-slate-500 mt-1">Manage your personal information and password.</p>
            </div>

            {/* Avatar card */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <AvatarUpload name={user.name} image={user.image} />
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2">
                    <span className="text-xs text-slate-500">{user.email}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                        {user.role?.name || 'User'}
                    </span>
                </div>
            </div>

            <ProfileForm user={user} />
        </div>
    );
}
