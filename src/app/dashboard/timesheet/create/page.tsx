import CreateTimesheetForm from '@/components/timesheet/create-form';
import { fetchProjects } from '@/app/lib/timesheet-actions';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Page() {
    const session = await auth();
    if (session?.user?.role?.code === 'ADMIN') {
        redirect('/dashboard/timesheet');
    }

    const projects = await fetchProjects();

    return (
        <main className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
                <Link
                    href="/dashboard/timesheet"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200"
                >
                    <ChevronLeftIcon className="h-5 w-5" />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">Log Daily Activity</h1>
                    <p className="text-sm text-slate-500 mt-1">Record your work hours and project details.</p>
                </div>
            </div>

            <CreateTimesheetForm projects={projects} />
        </main>
    );
}
