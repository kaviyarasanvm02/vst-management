'use client';

import { useState } from 'react';
import { calculatePayroll } from '@/app/lib/payroll-actions';
import { format } from 'date-fns';
import { CalculatorIcon, PlayIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import clsx from 'clsx';

export default function ProcessPayrollPage() {
    const [month, setMonth] = useState(format(new Date(), 'MM'));
    const [year, setYear] = useState(parseInt(format(new Date(), 'yyyy')));
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleRunPayroll = async () => {
        setLoading(true);
        setResult(null);
        try {
            const res = await calculatePayroll(month, year);
            if (res.error) {
                toast.error(res.error);
            } else {
                toast.success(res.success || 'Payroll Processed!');
                setResult(res.success || 'Success');
            }
        } catch (error) {
            toast.error('Failed to run payroll.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8 pt-10">
            <div className="text-center space-y-2">
                <div className="mx-auto h-16 w-16 bg-indigo-50 rounded-2xl flex items-center justify-center">
                    <CalculatorIcon className="h-8 w-8 text-indigo-600" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Run Monthly Payroll</h1>
                <p className="text-slate-500">Calculate salaries based on attendance and salary structure.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Month</label>
                        <select
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                            className="w-full rounded-xl border-slate-300 py-3 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                                <option key={m} value={m.toString().padStart(2, '0')}>
                                    {format(new Date(2000, m - 1, 1), 'MMMM')}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Year</label>
                        <select
                            value={year}
                            onChange={(e) => setYear(parseInt(e.target.value))}
                            className="w-full rounded-xl border-slate-300 py-3 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            {[2024, 2025, 2026, 2027].map(y => (
                                <option key={y} value={y}>{y}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <button
                    onClick={handleRunPayroll}
                    disabled={loading}
                    className={clsx(
                        "w-full py-4 rounded-xl flex items-center justify-center gap-2 text-lg font-bold text-white transition-all transform active:scale-95",
                        loading ? "bg-slate-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-600/30"
                    )}
                >
                    {loading ? (
                        <span>Processing...</span>
                    ) : (
                        <>
                            <PlayIcon className="h-6 w-6" />
                            Calculate Payroll
                        </>
                    )}
                </button>

                {result && (
                    <div className="mt-6 p-4 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-100 flex items-center justify-center font-medium">
                        {result}
                    </div>
                )}
            </div>

            <div className="text-center text-xs text-slate-400 max-w-sm mx-auto">
                Note: This process will aggregate attendance data for the selected month, calculate Loss of Pay (LOP) based on defined salary structures, and generate draft payroll records.
            </div>
        </div>
    );
}
