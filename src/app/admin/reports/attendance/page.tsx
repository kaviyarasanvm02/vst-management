import prisma from '@/lib/db';
import { getCurrentUser } from '@/app/lib/session';
import { redirect } from 'next/navigation';
import { format, startOfMonth, endOfMonth } from 'date-fns';
import clsx from 'clsx';
import { ChartBarIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default async function AdminAttendanceReportPage() {
    const user = await getCurrentUser();
    if (!user) redirect('/auth/login');

    // Fetch all attendance for the current month
    const start = startOfMonth(new Date());
    const end = endOfMonth(new Date());

    const attendance = await prisma.attendance.findMany({
        where: {
            date: {
                gte: start,
                lte: end,
            },
        },
        include: {
            user: {
                include: {
                    branch: true,
                },
            },
        },
        orderBy: {
            date: 'desc',
        },
    });

    return (
        <div className="space-y-6 pb-12">
            <div className="flex items-end justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Attendance Report</h1>
                    <p className="text-sm text-slate-500 mt-1">
                        Viewing attendance records for {format(new Date(), 'MMMM yyyy')}.
                    </p>
                </div>
                <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2.1 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-900/20">
                    <ArrowDownTrayIcon className="h-4 w-4" />
                    Export CSV
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Present</p>
                    <p className="text-2xl font-bold text-emerald-600 mt-2">{attendance.filter((a: any) => a.status === 'PRESENT' || a.status === 'LATE').length}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Late</p>
                    <p className="text-2xl font-bold text-amber-500 mt-2">{attendance.filter((a: any) => a.status === 'LATE').length}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Early Departures</p>
                    <p className="text-2xl font-bold text-orange-500 mt-2">{attendance.filter((a: any) => a.status === 'LEFT_EARLY').length}</p>
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 text-xs text-slate-500 uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-semibold">User</th>
                                <th className="px-6 py-4 font-semibold">Branch</th>
                                <th className="px-6 py-4 font-semibold">Date</th>
                                <th className="px-6 py-4 font-semibold">Clock In</th>
                                <th className="px-6 py-4 font-semibold">Clock Out</th>
                                <th className="px-6 py-4 font-semibold">Mode</th>
                                <th className="px-6 py-4 font-semibold text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {attendance.map((a: any) => (
                                <tr key={a.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">{a.user.name}</td>
                                    <td className="px-6 py-4 text-slate-600">{a.user.branch?.name || '—'}</td>
                                    <td className="px-6 py-4 text-slate-600">{format(new Date(a.date), 'MMM d, yyyy')}</td>
                                    <td className="px-6 py-4 font-medium text-slate-900">
                                        {format(new Date(a.clockIn), 'h:mm a')}
                                        {a.punchInNote && <div className="text-[10px] text-indigo-500 italic mt-0.5">{a.punchInNote}</div>}
                                    </td>
                                    <td className="px-6 py-4 text-slate-600">
                                        {a.clockOut ? format(new Date(a.clockOut), 'h:mm a') : '—'}
                                        {a.punchOutNote && <div className="text-[10px] text-emerald-500 italic mt-0.5">{a.punchOutNote}</div>}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200">
                                            {a.punchMode}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={clsx(
                                            "items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
                                            {
                                                "bg-emerald-50 text-emerald-700": a.status === 'PRESENT',
                                                "bg-amber-50 text-amber-700": a.status === 'LATE',
                                                "bg-orange-50 text-orange-700": a.status === 'LEFT_EARLY',
                                                "bg-slate-50 text-slate-700": a.status === 'AUTO_OUT',
                                            }
                                        )}>
                                            {a.status}
                                        </span>
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
