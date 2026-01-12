'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
    HomeIcon,
    DocumentDuplicateIcon,
    UserGroupIcon,
    ClipboardDocumentCheckIcon,
    ChartBarIcon,
    ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

const links = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'My Timesheets', href: '/dashboard/timesheet', icon: DocumentDuplicateIcon },
    { name: 'Approvals', href: '/admin/approvals', icon: ClipboardDocumentCheckIcon },
    { name: 'Reports', href: '/dashboard/reports', icon: ChartBarIcon },
];

export default function SideNav() {
    const pathname = usePathname();

    return (
        <div className="flex h-full flex-col bg-slate-950 text-white">
            <Link
                className="flex h-20 items-center justify-center bg-white p-4"
                href="/"
            >
                <div className="relative h-12 w-full">
                    <Image
                        src="/vedhasoft_technologies_logo.jpg"
                        alt="Vedhasoft Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </Link>

            <div className="flex flex-1 flex-col gap-1 px-3 py-6 text-slate-300">
                {links.map((link) => {
                    const LinkIcon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
                                {
                                    'bg-amber-500 text-white shadow-md shadow-amber-900/20': isActive,
                                    'hover:bg-slate-800 hover:text-white': !isActive,
                                },
                            )}
                        >
                            <LinkIcon className="w-5" />
                            <p className="hidden md:block">{link.name}</p>
                        </Link>
                    );
                })}
            </div>

            <div className="p-4 border-t border-slate-800">
                <form
                    action={async () => {
                        // We need to use server action or client side signout
                        // For simplicity, using client side which is easier here
                        const { signOut } = await import('next-auth/react');
                        await signOut();
                    }}
                >
                    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-red-400 transition-colors">
                        <ArrowRightOnRectangleIcon className="w-5" />
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    );
}
