import { fetchPendingTimesheets, updateTimesheetStatus } from '@/app/lib/timesheet-actions';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { revalidatePath } from 'next/cache';

export default async function Page() {
    const pendingTimesheets = await fetchPendingTimesheets();

    return (
        <div className="w-full">
            <h1 className="mb-8 text-2xl font-bold">Pending Approvals</h1>

            {pendingTimesheets.length === 0 ? (
                <p className="text-gray-500">No pending timesheets to review.</p>
            ) : (
                <div className="flow-root">
                    <div className="inline-block min-w-full align-middle">
                        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                            <table className="hidden min-w-full text-gray-900 md:table">
                                <thead className="rounded-lg text-left text-sm font-normal">
                                    <tr>
                                        <th scope="col" className="px-4 py-5 font-medium sm:pl-6">Employee</th>
                                        <th scope="col" className="px-3 py-5 font-medium">Date</th>
                                        <th scope="col" className="px-3 py-5 font-medium">Total Hours</th>
                                        <th scope="col" className="px-3 py-5 font-medium">Details</th>
                                        <th scope="col" className="px-3 py-5 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">
                                    {pendingTimesheets.map((ts) => (
                                        <tr key={ts.id} className="w-full border-b py-3 text-sm last-of-type:border-none hover:bg-gray-50">
                                            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                                <span className="font-semibold">{ts.user.name}</span>
                                                <br />
                                                <span className="text-xs text-gray-500">{ts.user.email}</span>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3">
                                                {format(ts.date, 'MMM d, yyyy')}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3 font-bold">
                                                {ts.totalHours}
                                            </td>
                                            <td className="px-3 py-3">
                                                <div className="flex flex-col gap-1">
                                                    {ts.entries.map(e => (
                                                        <div key={e.id} className="text-xs">
                                                            <span className="font-medium text-gray-700">{e.project.name}:</span> {e.description} ({e.hours}h)
                                                        </div>
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-3">
                                                <div className="flex gap-2">
                                                    <form action={async () => {
                                                        'use server';
                                                        await updateTimesheetStatus(ts.id, 'APPROVED');
                                                    }}>
                                                        <button className="rounded bg-green-100 p-2 text-green-600 hover:bg-green-200">
                                                            <CheckCircleIcon className="w-5 h-5" />
                                                        </button>
                                                    </form>
                                                    <form action={async () => {
                                                        'use server';
                                                        await updateTimesheetStatus(ts.id, 'REJECTED');
                                                    }}>
                                                        <button className="rounded bg-red-100 p-2 text-red-600 hover:bg-red-200">
                                                            <XCircleIcon className="w-5 h-5" />
                                                        </button>
                                                    </form>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
