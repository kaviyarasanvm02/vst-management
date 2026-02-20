"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    CurrencyRupeeIcon,
    CalculatorIcon,
    Cog6ToothIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

const tabs = [
    { name: 'Dashboard', href: '/admin/payroll', icon: CurrencyRupeeIcon },
    { name: 'Run Payroll', href: '/admin/payroll/process', icon: CalculatorIcon },
    { name: 'Salary Structure', href: '/admin/payroll/structure', icon: Cog6ToothIcon },
];

export default function PayrollLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
                <h1 className="text-2xl font-bold text-slate-900">Payroll Management</h1>
                <p className="text-sm text-slate-500 mt-1">Manage salaries, run monthly payroll, and generate payslips.</p>
            </div>

            <div className="flex space-x-1 bg-slate-100 p-1 rounded-xl w-fit">
                {tabs.map((tab) => {
                    const isActive = pathname === tab.href;
                    return (
                        <Link
                            key={tab.name}
                            href={tab.href}
                            className={clsx(
                                'flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                                isActive
                                    ? 'bg-white text-indigo-700 shadow-sm'
                                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                            )}
                        >
                            <tab.icon className={clsx('mr-2 h-4 w-4', isActive ? 'text-indigo-500' : 'text-slate-400')} />
                            {tab.name}
                        </Link>
                    );
                })}
            </div>

            <div className="min-h-[500px]">
                {children}
            </div>
        </div>
    );
}
