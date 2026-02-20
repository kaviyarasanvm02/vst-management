import { getAllAttendanceRequests } from '@/app/lib/attendance-actions';
import { fetchAllUsers } from '@/app/lib/user-actions';
import { fetchTasks, fetchEmployees } from '@/app/lib/task-actions';
import { fetchProjects } from '@/app/lib/timesheet-actions';
import { getCurrentUser } from '@/app/lib/session';
import { redirect, notFound } from 'next/navigation';
import { format } from 'date-fns';
import clsx from 'clsx';
import {
    InboxStackIcon,
    UserGroupIcon,
    ShieldCheckIcon,
    BriefcaseIcon,
    ClipboardDocumentListIcon,
    ClockIcon,
    ArrowPathIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline';

// Components
import AttendanceRequestTable from '@/components/admin/attendance-request-table';
import CreateTaskForm from '@/components/tasks/create-task-form';
import TaskList from '@/components/tasks/task-list';

export default async function AdminManagementPage({
    params,
}: {
    params: Promise<{ type: string }>;
}) {
    const { type } = await params;
    const user = await getCurrentUser();
    if (!user) redirect('/auth/login');
    if (user.role?.code !== 'ADMIN') redirect('/dashboard');

    if (!['attendance-requests', 'users', 'tasks'].includes(type)) {
        notFound();
    }

    if (type === 'attendance-requests') return <AttendanceRequestsView />;
    if (type === 'users') return <UsersView />;
    if (type === 'tasks') return <TasksView />;

    return notFound();
}

async function AttendanceRequestsView() {
    const requests = await getAllAttendanceRequests();
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Attendance Requests</h1>
                    <p className="text-sm text-slate-500 mt-1">Review and process employee attendance correction requests.</p>
                </div>
                <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm text-sm font-medium text-slate-600 flex items-center gap-2">
                    <InboxStackIcon className="h-5 w-5 text-indigo-500" />
                    Pending: {requests.filter(r => r.status === 'PENDING').length}
                </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <AttendanceRequestTable initialRequests={requests} />
            </div>
        </div>
    );
}

async function UsersView() {
    const users = await fetchAllUsers();
    const totalUsers = users.length;
    const adminCount = users.filter(u => u.role?.code === 'ADMIN').length;
    const employeeCount = users.filter(u => u.role?.code === 'EMPLOYEE').length;

    return (
        <div className="w-full max-w-7xl mx-auto space-y-8 pb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 font-display">User Management</h1>
                    <p className="text-slate-500 mt-2">Manage access and view user details.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <dt className="truncate text-sm font-medium text-slate-500">Total Users</dt>
                    <dd className="mt-2 text-3xl font-bold text-slate-900">{totalUsers}</dd>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <dt className="truncate text-sm font-medium text-slate-500">Admins</dt>
                    <dd className="mt-2 text-3xl font-bold text-indigo-600">{adminCount}</dd>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <dt className="truncate text-sm font-medium text-slate-500">Employees</dt>
                    <dd className="mt-2 text-3xl font-bold text-emerald-600">{employeeCount}</dd>
                </div>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-slate-100">
                    <thead className="bg-slate-50/80">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">User Details</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Branch</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-50">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-bold text-slate-900">{user.name}</div>
                                    <div className="text-sm text-slate-500">{user.email}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={clsx("px-2 py-1 rounded-full text-[10px] font-bold uppercase", user.role?.code === 'ADMIN' ? 'bg-purple-50 text-purple-700' : 'bg-emerald-50 text-emerald-700')}>
                                        {user.role?.name || 'User'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                    {user.branch?.name || user.branchLegacy || '—'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

async function TasksView() {
    const [tasks, employees, projects] = await Promise.all([
        fetchTasks(),
        fetchEmployees(),
        fetchProjects(),
    ]);

    const open = tasks.filter(t => t.status === 'OPEN').length;
    const inProgress = tasks.filter(t => t.status === 'IN_PROGRESS').length;
    const completed = tasks.filter(t => t.status === 'COMPLETED').length;

    return (
        <div className="w-full max-w-7xl mx-auto space-y-6 pb-10">
            <div className="pb-4 border-b border-slate-200">
                <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <ClipboardDocumentListIcon className="h-6 w-6 text-indigo-600" />
                    Task Assignment
                </h1>
                <p className="text-sm text-slate-500 mt-0.5">Create and assign tasks to your team members.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                    { label: 'Total Tasks', value: tasks.length, icon: ClipboardDocumentListIcon, accent: 'bg-indigo-600' },
                    { label: 'Open', value: open, icon: ClockIcon, accent: 'bg-slate-500' },
                    { label: 'In Progress', value: inProgress, icon: ArrowPathIcon, accent: 'bg-amber-500' },
                    { label: 'Completed', value: completed, icon: CheckCircleIcon, accent: 'bg-emerald-600' },
                ].map(stat => (
                    <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                        <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 ${stat.accent}`}><stat.icon className="h-4 w-4 text-white" /></div>
                        <div><p className="text-xs font-medium text-slate-500">{stat.label}</p><p className="text-xl font-bold text-slate-900 mt-0.5">{stat.value}</p></div>
                    </div>
                ))}
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-indigo-50/30 font-bold text-sm">New Task</div>
                <div className="p-6"><CreateTaskForm employees={employees} projects={projects} /></div>
            </div>
            <div className="space-y-4">
                <h2 className="text-sm font-bold text-slate-900">All Tasks</h2>
                <TaskList tasks={tasks} />
            </div>
        </div>
    );
}
