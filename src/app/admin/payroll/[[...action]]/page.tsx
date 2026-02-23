import { notFound } from 'next/navigation';
import { getPayrolls } from '@/app/lib/payroll-actions';
import { format } from 'date-fns';
import { CurrencyRupeeIcon, CheckBadgeIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import prisma from '@/lib/db';
import ProcessPayrollClient from '@/components/payroll/process-payroll-client';
import SalaryStructureClient from '@/components/payroll/salary-structure-client';

export default async function ConsolidatedPayrollPage({
    params,
}: {
    params: Promise<{ action?: string[] }>;
}) {
    const resolvedParams = await params;
    const pathSegments = resolvedParams.action || [];

    // Default to main dashboard if no action specified
    if (pathSegments.length === 0) {
        return <PayrollDashboard />;
    }

    const action = pathSegments[0];

    if (action === 'process') {
        return <ProcessPayrollClient />;
    }

    if (action === 'structure') {
        return <SalaryStructurePage />;
    }

    notFound();
}

async function PayrollDashboard() {
    const currentMonth = format(new Date(), 'yyyy-MM');
    const recentPayrolls = await getPayrolls(currentMonth);

    const totalPayout = recentPayrolls.reduce((sum, p) => sum + p.netSalary, 0);
    const processedCount = recentPayrolls.length;

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-indigo-600 text-white rounded-2xl p-6 shadow-lg shadow-indigo-600/20">
                    <p className="text-indigo-100 font-medium text-sm">Total Payout ({format(new Date(), 'MMMM')})</p>
                    <div className="text-3xl font-bold mt-2 flex items-center gap-1">
                        <CurrencyRupeeIcon className="h-8 w-8 opacity-80" />
                        {totalPayout.toLocaleString('en-IN')}
                    </div>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <p className="text-slate-500 font-medium text-sm">Employees Processed</p>
                    <div className="text-3xl font-bold text-slate-900 mt-2">{processedCount}</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center justify-center">
                    <button className="flex items-center gap-2 text-indigo-600 font-bold bg-indigo-50 px-4 py-2 rounded-lg hover:bg-indigo-100 transition-colors">
                        <DocumentArrowDownIcon className="h-5 w-5" />
                        Download Bank Report
                    </button>
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                    <h2 className="font-bold text-slate-900">Recent Payrolls</h2>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{currentMonth}</span>
                </div>

                {recentPayrolls.length === 0 ? (
                    <div className="p-10 text-center">
                        <p className="text-slate-500">No payroll records generated for this month yet.</p>
                        <a href="/admin/payroll/process" className="mt-4 inline-block text-indigo-600 font-bold hover:underline">Go to Process Payroll &rarr;</a>
                    </div>
                ) : (
                    <table className="min-w-full divide-y divide-slate-100">
                        <thead className="bg-slate-50/50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase">Employee</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase">Days</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase">Gross</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase">Deductions</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase">Net Salary</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {recentPayrolls.map((payroll) => (
                                <tr key={payroll.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="font-bold text-slate-900 text-sm">{payroll.user.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                                        <div className="flex flex-col">
                                            <span>P: {payroll.presentDays} / T: {payroll.totalDays}</span>
                                            <span className="text-xs text-red-500">LOP: {payroll.lopDays}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">₹{payroll.grossEarnings.toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">-₹{payroll.totalDeductions.toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-emerald-600">₹{payroll.netSalary.toLocaleString()}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase bg-slate-100 text-slate-600">
                                            {payroll.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

async function SalaryStructurePage() {
    const users = await prisma.user.findMany({
        include: {
            salaryStructure: true,
            role: true,
            branch: true
        },
        orderBy: { name: 'asc' }
    });

    return (
        <SalaryStructureClient users={users} />
    );
}
