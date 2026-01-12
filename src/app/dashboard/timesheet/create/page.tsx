import CreateTimesheetForm from '@/components/timesheet/create-form';
import { fetchProjects } from '@/app/lib/timesheet-actions';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

export const dynamic = 'force-dynamic';

export default async function Page() {
    const projects = await fetchProjects();

    return (
        <main className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Link
                    href="/dashboard/timesheet"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-900"
                >
                    <ChevronLeftIcon className="h-5 w-5" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Log New Time</h1>
                    <p className="text-sm text-slate-500">Create a new daily work entry.</p>
                </div>
            </div>

            <CreateTimesheetForm projects={projects} />
        </main>
    );
}
