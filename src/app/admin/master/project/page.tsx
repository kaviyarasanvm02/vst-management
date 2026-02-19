import { fetchProjectsWithDetails, fetchCustomers, fetchAllUsers } from '@/app/lib/master-actions';
import ProjectForm from '@/components/master/project-form';

export default async function Page() {
    const [projects, customers, users] = await Promise.all([
        fetchProjectsWithDetails(),
        fetchCustomers(),
        fetchAllUsers(),
    ]);

    return (
        <div className="w-full max-w-4xl mx-auto space-y-6 pb-8">
            <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Project</h1>
                <p className="text-slate-500">Add and manage projects.</p>
            </div>
            <ProjectForm customers={customers} users={users} />
            {projects.length > 0 && (
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-base font-semibold text-slate-900">Existing Projects</h2>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{projects.length}</span>
                    </div>
                    <table className="w-full text-sm">
                        <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wide">
                            <tr>
                                <th className="px-6 py-3 text-left">Code</th>
                                <th className="px-6 py-3 text-left">Name</th>
                                <th className="px-6 py-3 text-left">Customer</th>
                                <th className="px-6 py-3 text-left">Manager</th>
                                <th className="px-6 py-3 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {projects.map(p => (
                                <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-3 font-mono text-xs text-slate-600">{p.code}</td>
                                    <td className="px-6 py-3 font-medium text-slate-900">{p.name}</td>
                                    <td className="px-6 py-3 text-slate-600">{p.customer?.name || '—'}</td>
                                    <td className="px-6 py-3 text-slate-600">{p.manager?.name || '—'}</td>
                                    <td className="px-6 py-3">
                                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.isActive ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                                            {p.isActive ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
