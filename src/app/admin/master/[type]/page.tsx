import { notFound } from 'next/navigation';
import {
    fetchCustomers,
    fetchProjectsWithDetails,
    fetchRoles,
    fetchAllUsers,
    fetchBranches
} from '@/app/lib/master-actions';
import CustomerForm from '@/components/master/customer-form';
import ProjectForm from '@/components/master/project-form';
import RoleForm from '@/components/master/role-form';
import TeamUserForm from '@/components/master/team-user-form';

export default async function MasterTypePage({
    params,
}: {
    params: Promise<{ type: string }>;
}) {
    const { type } = await params;

    if (!['customer', 'project', 'role', 'team-user'].includes(type)) {
        notFound();
    }

    return (
        <div className="w-full max-w-4xl mx-auto space-y-6 pb-8">
            {type === 'customer' && <CustomerMaster />}
            {type === 'project' && <ProjectMaster />}
            {type === 'role' && <RoleMaster />}
            {type === 'team-user' && <TeamUserMaster />}
        </div>
    );
}

async function CustomerMaster() {
    const customers = await fetchCustomers();
    return (
        <>
            <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Customer Master</h1>
                <p className="text-slate-500">Add and manage customers.</p>
            </div>
            <CustomerForm />
            {customers.length > 0 && (
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-base font-semibold text-slate-900">Existing Customers</h2>
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{customers.length}</span>
                    </div>
                    <table className="w-full text-sm">
                        <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wide">
                            <tr>
                                <th className="px-6 py-3 text-left">Code</th>
                                <th className="px-6 py-3 text-left">Name</th>
                                <th className="px-6 py-3 text-left">Contact</th>
                                <th className="px-6 py-3 text-left">Phone</th>
                                <th className="px-6 py-3 text-left">Email</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {customers.map(c => (
                                <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-3 font-mono text-xs text-slate-600">{c.code}</td>
                                    <td className="px-6 py-3 font-medium text-slate-900">{c.name}</td>
                                    <td className="px-6 py-3 text-slate-600">{c.contactPerson || '—'}</td>
                                    <td className="px-6 py-3 text-slate-600">{c.phone || '—'}</td>
                                    <td className="px-6 py-3 text-slate-600">{c.email || '—'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

async function ProjectMaster() {
    const [projects, customers, users] = await Promise.all([
        fetchProjectsWithDetails(),
        fetchCustomers(),
        fetchAllUsers(),
    ]);

    return (
        <>
            <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Project Master</h1>
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
        </>
    );
}

async function RoleMaster() {
    const roles = await fetchRoles();
    return (
        <>
            <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Role Master</h1>
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
        </>
    );
}

async function TeamUserMaster() {
    const [users, roles, branches] = await Promise.all([
        fetchAllUsers(),
        fetchRoles(),
        fetchBranches()
    ]);

    return (
        <>
            <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Team User Master</h1>
                <p className="text-slate-500">Add and manage team members.</p>
            </div>
            <TeamUserForm roles={roles} branches={branches} />
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
                                    <td className="px-6 py-3 text-slate-600">{u.branch?.name || u.branchLegacy || '—'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}
