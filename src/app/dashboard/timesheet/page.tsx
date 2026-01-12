import Link from 'next/link';
import { fetchUserTimesheets } from '@/app/lib/timesheet-actions';
import { format } from 'date-fns';

export default async function Page() {
    const timesheets = await fetchUserTimesheets();

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="flex w-full items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">My Timesheets</h1>
                    <p className="text-sm text-slate-500 mt-1">Manage and track your daily work entries.</p>
                </div>
                <Link
                    href="/dashboard/timesheet/create"
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98]"
                >
                    <span className="hidden md:block">Log Time</span>
                    <span className="md:hidden">+</span>
                </Link>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Client</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Project</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Activity</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Description</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Duration</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</th>
                                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-slate-200">
                            {timesheets.length === 0 ? (
                                <tr>
                                    <td colSpan={8} className="px-6 py-12 text-center text-slate-400">
                                        No timesheet entries found. Start by logging your time!
                                    </td>
                                </tr>
                            ) : (
                                timesheets.map((ts) => (
                                    ts.entries.map((entry) => (
                                        <tr key={entry.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                                                {format(ts.date, 'dd-MMM-yy')}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                                {entry.project.client || <span className="text-slate-400 italic">Internal</span>}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-medium">
                                                {entry.project.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                                {entry.activity}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-600 max-w-xs truncate">
                                                {entry.description}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-medium text-slate-700">
                                                {entry.hours} Hrs
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                                                {entry.location}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium 
                                    ${ts.status === 'APPROVED'
                                                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                                        : ts.status === 'PENDING'
                                                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                                                            : 'bg-red-100 text-red-800 border border-red-200'
                                                    }`}>
                                                    {ts.status === 'APPROVED' ? 'Completed' : 'Pending'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
