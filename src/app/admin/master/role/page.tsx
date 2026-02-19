import { fetchRoles } from '@/app/lib/master-actions';
import RoleForm from '@/components/master/role-form';

export default async function Page() {
    const roles = await fetchRoles();

    return (
        <div className="w-full max-w-4xl mx-auto space-y-6 pb-8">
            <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Roles</h1>
                <p className="text-slate-500">Add and manage user roles.</p>
            </div>
            <RoleForm />
            {roles.length > 0 && (
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-base font-semibold text-slate-900">Existing Roles</h2>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{roles.length}</span>
                    </div>
                    <table className="w-full text-sm">
                        <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wide">
                            <tr>
                                <th className="px-6 py-3 text-left">Code</th>
                                <th className="px-6 py-3 text-left">Name</th>
                                <th className="px-6 py-3 text-left">Remarks</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {roles.map(r => (
                                <tr key={r.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-3 font-mono text-xs text-slate-600">{r.code}</td>
                                    <td className="px-6 py-3 font-medium text-slate-900">{r.name}</td>
                                    <td className="px-6 py-3 text-slate-600">{r.remarks || '—'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
