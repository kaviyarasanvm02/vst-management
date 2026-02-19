'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const MONTHS = [
    { value: '0', label: 'All Months' },
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
];

const YEARS = ['2024', '2025', '2026', '2027'];

export function TimesheetFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentMonth = searchParams.get('month') || (new Date().getMonth() + 1).toString();
    const currentYear = searchParams.get('year') || new Date().getFullYear().toString();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        router.push('?' + createQueryString('month', e.target.value));
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        router.push('?' + createQueryString('year', e.target.value));
    };

    return (
        <div className="flex gap-4">
            <div className="relative">
                <select
                    value={currentMonth}
                    onChange={handleMonthChange}
                    className="appearance-none bg-white border border-slate-200 text-slate-700 py-2 pl-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm font-medium shadow-sm"
                >
                    {MONTHS.map((month) => (
                        <option key={month.value} value={month.value}>
                            {month.label}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>

            <div className="relative">
                <select
                    value={currentYear}
                    onChange={handleYearChange}
                    className="appearance-none bg-white border border-slate-200 text-slate-700 py-2 pl-4 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-sm font-medium shadow-sm"
                >
                    {YEARS.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                    <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
