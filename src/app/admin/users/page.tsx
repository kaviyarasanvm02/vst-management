import { fetchAllUsers } from '@/app/lib/user-actions';
import { format } from 'date-fns';
import {
    UserCircleIcon,
    ShieldCheckIcon,
    BriefcaseIcon,
    MagnifyingGlassIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline';

export default async function UsersPage() {
    const users = await fetchAllUsers();

    // Calculate stats
    const totalUsers = users.length;
    const adminCount = users.filter(u => u.role?.code === 'ADMIN').length;
    const employeeCount = users.filter(u => u.role?.code === 'EMPLOYEE').length;

    return (
        <div className="w-full max-w-7xl mx-auto space-y-8 pb-10 p-4 md:p-0">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 font-display">User Management</h1>
                    <p className="text-slate-500 mt-2">Manage access and view user details.</p>
                </div>
                {/* Visual Search Bar */}
                <div className="relative w-full md:w-72">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon className="h-5 w-5 text-slate-400" aria-hidden="true" />
                    </div>
                    <input
                        type="text"
                        className="block w-full rounded-xl border-slate-200 py-2.5 pl-10 pr-3 text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-600 focus:border-transparent shadow-sm sm:text-sm transition-shadow"
                        placeholder="Search users..."
                    />
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="glass-card relative overflow-hidden rounded-2xl p-6">
                    <dt className="truncate text-sm font-medium text-slate-500">Total Users</dt>
                    <dd className="mt-2 flex items-baseline text-3xl font-bold text-slate-900">
                        {totalUsers}
                    </dd>
                    <div className="absolute right-4 top-4 rounded-full bg-slate-50 p-3 ring-1 ring-slate-900/5">
                        <UserGroupIcon className="h-6 w-6 text-slate-400" />
                    </div>
                </div>
                <div className="glass-card relative overflow-hidden rounded-2xl p-6">
                    <dt className="truncate text-sm font-medium text-slate-500">Admins</dt>
                    <dd className="mt-2 flex items-baseline text-3xl font-bold text-indigo-600">
                        {adminCount}
                    </dd>
                    <div className="absolute right-4 top-4 rounded-full bg-indigo-50 p-3 ring-1 ring-indigo-500/10">
                        <ShieldCheckIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                </div>
                <div className="glass-card relative overflow-hidden rounded-2xl p-6">
                    <dt className="truncate text-sm font-medium text-slate-500">Employees</dt>
                    <dd className="mt-2 flex items-baseline text-3xl font-bold text-emerald-600">
                        {employeeCount}
                    </dd>
                    <div className="absolute right-4 top-4 rounded-full bg-emerald-50 p-3 ring-1 ring-emerald-500/10">
                        <BriefcaseIcon className="h-6 w-6 text-emerald-600" />
                    </div>
                </div>
            </div>

            {/* Users Table */}
            <div className="glass-card rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-100">
                        <thead className="bg-slate-50/80 backdrop-blur-sm">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">User Details</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Branch Location</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Joined On</th>
                                <th scope="col" className="relative px-6 py-4">
                                    <span className="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-50">
                            {users.map((user) => (
                                <tr key={user.id} className="group hover:bg-slate-50/60 transition-colors duration-200">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-4">
                                            <div className="h-11 w-11 flex-shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md ring-2 ring-white">
                                                <span className="font-bold text-sm tracking-tight">{user.name?.charAt(0).toUpperCase() || 'U'}</span>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900">{user.name}</div>
                                                <div className="text-sm text-slate-500">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ring-1 ring-inset ${user.role?.code === 'ADMIN'
                                            ? 'bg-purple-50 text-purple-700 ring-purple-500/20'
                                            : 'bg-emerald-50 text-emerald-700 ring-emerald-500/20'
                                            }`}>
                                            {user.role?.code === 'ADMIN' && <ShieldCheckIcon className="h-3.5 w-3.5" />}
                                            {user.role?.name || 'User'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                                            <div className={`h-2 w-2 rounded-full ${user.branch ? 'bg-indigo-500' : 'bg-slate-300'}`}></div>
                                            {user.branch || <span className="text-slate-400 italic">Not Assigned</span>}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">
                                        {format(user.createdAt, 'MMM dd, yyyy')}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button className="text-indigo-600 hover:text-indigo-900 transition-colors font-semibold opacity-0 group-hover:opacity-100">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
