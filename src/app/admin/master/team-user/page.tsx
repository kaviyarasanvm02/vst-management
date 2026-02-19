import { fetchAllUsers, fetchRoles } from '@/app/lib/master-actions';
import TeamUserForm from '@/components/master/team-user-form';

export default async function Page() {
    const [users, roles] = await Promise.all([fetchAllUsers(), fetchRoles()]);

    return (
        <div className="w-full max-w-4xl mx-auto space-y-6 pb-8">
            <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Team User</h1>
                <p className="text-slate-500">Add and manage team members.</p>
            </div>
            <TeamUserForm roles={roles} />
            {users.length > 0 && (
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-base font-semibold text-slate-900">Team Members</h2>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{users.length}</span>
                    </div>
                    <table className="w-full text-sm">
                        <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wide">
                            <tr>
                                <th className="px-6 py-3 text-left">Code</th>
                                <th className="px-6 py-3 text-left">Name</th>
                                <th className="px-6 py-3 text-left">Email</th>
                                <th className="px-6 py-3 text-left">Role</th>
                                <th className="px-6 py-3 text-left">Branch</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {users.map(u => (
                                <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-3 font-mono text-xs text-slate-600">{u.code || '—'}</td>
                                    <td className="px-6 py-3 font-medium text-slate-900">{u.name}</td>
                                    <td className="px-6 py-3 text-slate-600">{u.email}</td>
                                    <td className="px-6 py-3 text-slate-600">{u.role?.name || '—'}</td>
                                    <td className="px-6 py-3 text-slate-600">{u.branch || '—'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
