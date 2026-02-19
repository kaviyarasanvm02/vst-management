import { fetchMyTasks } from '@/app/lib/task-actions';
import MyTaskList from '@/components/tasks/my-task-list';
import { ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

export default async function MyTasksPage() {
    const tasks = await fetchMyTasks();

    const open = tasks.filter(t => t.status === 'OPEN').length;
    const inProgress = tasks.filter(t => t.status === 'IN_PROGRESS').length;
    const completed = tasks.filter(t => t.status === 'COMPLETED').length;

    return (
        <div className="w-full max-w-5xl mx-auto space-y-6 pb-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-200">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <ClipboardDocumentListIcon className="h-6 w-6 text-indigo-600" />
                        My Tasks
                    </h1>
                    <p className="text-sm text-slate-500 mt-0.5">Tasks assigned to you by your admin</p>
                </div>

                <div className="flex items-center gap-3 text-xs font-semibold">
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">{open} Open</span>
                    <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600">{inProgress} In Progress</span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600">{completed} Completed</span>
                </div>
            </div>

            {/* Task List */}
            <MyTaskList tasks={tasks} />
        </div>
    );
}
