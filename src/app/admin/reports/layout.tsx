'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ChartBarIcon, UserGroupIcon, FolderIcon } from '@heroicons/react/24/outline';

const tabs = [
    { name: 'Attendance Report', href: '/admin/reports/attendance', icon: ChartBarIcon },
    { name: 'Employee Report', href: '/admin/reports/employee', icon: UserGroupIcon },
    { name: 'Project Report', href: '/admin/reports/project', icon: FolderIcon },
];

export default function ReportsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Reports</h1>
                <p className="text-sm text-slate-500 mt-1">View and export detailed reports.</p>
            </div>

            <div className="border-b border-slate-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map((tab) => {
                        const isActive = pathname === tab.href;
                        return (
                            <Link
                                key={tab.name}
                                href={tab.href}
                                className={clsx(
                                    isActive
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700',
                                    'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium transition-colors'
                                )}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                <tab.icon
                                    className={clsx(
                                        isActive ? 'text-indigo-500' : 'text-slate-400 group-hover:text-slate-500',
                                        '-ml-0.5 mr-2 h-5 w-5'
                                    )}
                                    aria-hidden="true"
                                />
                                {tab.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="min-h-[400px]">
                {children}
            </div>
        </div>
    );
}
