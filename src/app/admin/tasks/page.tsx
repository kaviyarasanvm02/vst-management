import { fetchTasks, fetchEmployees } from '@/app/lib/task-actions';
import { fetchProjects } from '@/app/lib/timesheet-actions';
import CreateTaskForm from '@/components/tasks/create-task-form';
import TaskList from '@/components/tasks/task-list';
import {
    ClipboardDocumentListIcon,
    ClockIcon,
    CheckCircleIcon,
    ArrowPathIcon,
} from '@heroicons/react/24/outline';

export default async function Page() {
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

            {/* ── Header ── */}
            <div className="pb-4 border-b border-slate-200">
                <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                    <ClipboardDocumentListIcon className="h-6 w-6 text-indigo-600" />
                    Task Assignment
                </h1>
                <p className="text-sm text-slate-500 mt-0.5">Create and assign tasks to your team members.</p>
            </div>

            {/* ── Quick Stats ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                    { label: 'Total Tasks', value: tasks.length, icon: ClipboardDocumentListIcon, accent: 'bg-indigo-600' },
                    { label: 'Open', value: open, icon: ClockIcon, accent: 'bg-slate-500' },
                    { label: 'In Progress', value: inProgress, icon: ArrowPathIcon, accent: 'bg-amber-500' },
                    { label: 'Completed', value: completed, icon: CheckCircleIcon, accent: 'bg-emerald-600' },
                ].map(stat => (
                    <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
                        <div className={`h-9 w-9 rounded-lg flex items-center justify-center shrink-0 ${stat.accent}`}>
                            <stat.icon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                            <p className="text-xs font-medium text-slate-500">{stat.label}</p>
                            <p className="text-xl font-bold text-slate-900 leading-none mt-0.5">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Full-width Create Form ── */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-indigo-50 to-white">
                    <h2 className="text-sm font-bold text-slate-900">New Task</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Fill in the details and assign to a team member</p>
                </div>
                <div className="p-6">
                    <CreateTaskForm employees={employees} projects={projects} />
                </div>
            </div>

            {/* ── Task List ── */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-bold text-slate-900">All Tasks</h2>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                        {tasks.length} total
                    </span>
                </div>
                <TaskList tasks={tasks} />
            </div>
        </div>
    );
}
