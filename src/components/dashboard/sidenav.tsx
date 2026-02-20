'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';
import {
    HomeIcon,
    DocumentDuplicateIcon,
    ChartBarIcon,
    ArrowRightOnRectangleIcon,
    Bars3Icon,
    XMarkIcon,
    BuildingOffice2Icon,
    FolderOpenIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    UserCircleIcon,
    CalendarDaysIcon,
    ClipboardDocumentListIcon,
    ClockIcon,
    CurrencyRupeeIcon,
    MapPinIcon
} from '@heroicons/react/24/outline';


const ADMIN_ONLY = ['Assign Tasks', 'Customer', 'Project', 'Team User', 'Roles', 'Attendance Requests', 'Reports', 'Payroll', 'Location Reports'];
const EMPLOYEE_ONLY = ['My Tasks'];

const links = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Timesheets', href: '/dashboard/timesheets', icon: DocumentDuplicateIcon },
    // Admin-only (Master Data)
    { name: 'Customer', href: '/admin/master/customer', icon: BuildingOffice2Icon },
    { name: 'Project', href: '/admin/master/project', icon: FolderOpenIcon },
    { name: 'Team User', href: '/admin/master/team-user', icon: UserGroupIcon },
    { name: 'Roles', href: '/admin/master/role', icon: ShieldCheckIcon },
    { name: 'Attendance Requests', href: '/admin/management/attendance-requests', icon: ClockIcon },
    // Admin Reports
    { name: 'Reports', href: '/admin/reports/attendance', icon: ChartBarIcon },
    { name: 'Payroll', href: '/admin/payroll', icon: CurrencyRupeeIcon },
    { name: 'Location Reports', href: '/admin/reports/location', icon: MapPinIcon },
    // Employee-only
    { name: 'Assign Tasks', href: '/admin/management/tasks', icon: ArrowRightOnRectangleIcon },
    { name: 'My Tasks', href: '/dashboard/tasks', icon: ClipboardDocumentListIcon },
    // Common
    { name: 'Leave', href: '/dashboard/leave', icon: CalendarDaysIcon },
    { name: 'My Attendance', href: '/dashboard/attendance', icon: ClockIcon },
    { name: 'Profile', href: '/dashboard/profile', icon: UserCircleIcon },
];

type SideNavProps = {
    isAdmin: boolean;
    userName?: string;
    roleName?: string;
    userImage?: string | null;
};

export default function SideNav({ isAdmin, userName, roleName, userImage }: SideNavProps) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const filteredLinks = links.filter(link => {
        if (ADMIN_ONLY.includes(link.name)) return isAdmin;
        if (EMPLOYEE_ONLY.includes(link.name)) return !isAdmin;
        return true; // Common links: Dashboard, Timesheets, Leave, Profile
    });


    return (
        <div className="flex h-full flex-col bg-[#0f172a] text-white border-r border-slate-800 shadow-2xl relative z-20 transition-all duration-300">
            {/* Logo Section & Mobile Toggle */}
            <div className="flex items-center justify-between p-4 md:p-0 md:block border-b border-slate-800/60 bg-[#0f172a]">
                <Link
                    className="relative flex items-center gap-3 md:h-24 md:px-6 group transition-colors hover:bg-slate-900/50"
                    href="/"
                >
                    {/* Brand Icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                        <Image
                            src="/vedhasoft_technologies_logo.jpg"
                            alt="Vedhasoft Logo"
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    {/* Brand Text */}
                    <div className="flex flex-col">
                        <span className="font-display text-lg font-bold text-white tracking-tight leading-none group-hover:text-indigo-100 transition-colors">
                            Vedhasoft
                        </span>
                        <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest group-hover:text-slate-400 transition-colors">
                            Technologies
                        </span>
                    </div>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors"
                >
                    {isMobileMenuOpen ? (
                        <XMarkIcon className="w-6 h-6" />
                    ) : (
                        <Bars3Icon className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Navigation Links - Hidden on mobile unless open, always visible on desktop */}
            <div className={clsx(
                "flex-1 flex-col overflow-y-auto transition-all duration-300 ease-in-out md:flex",
                {
                    "flex": isMobileMenuOpen,
                    "hidden": !isMobileMenuOpen
                }
            )}>
                <div className="flex flex-1 flex-col gap-2 px-3 py-8">
                    <p className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 font-display">
                        Main Menu
                    </p>
                    {filteredLinks.map((link) => {
                        const LinkIcon = link.icon;
                        const isActive = link.href === '/dashboard'
                            ? pathname === link.href
                            : pathname.startsWith(link.href);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                                className={clsx(
                                    'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 group',
                                    {
                                        'bg-indigo-600 text-white shadow-lg shadow-indigo-900/30 translate-x-1': isActive,
                                        'text-slate-400 hover:bg-white/5 hover:text-white hover:translate-x-1': !isActive,
                                    },
                                )}
                            >
                                <LinkIcon className={clsx("w-5 h-5 transition-colors duration-300", {
                                    'text-white': isActive,
                                    'text-slate-500 group-hover:text-white': !isActive
                                })} />
                                <span className="tracking-wide">{link.name}</span>
                                {isActive && (
                                    <div className="ml-auto h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* User Profile & Logout */}
                <div className="p-4 border-t border-slate-800/50 bg-[#0b1120]">
                    <div className="flex items-center gap-3 mb-4 px-2">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold ring-2 ring-indigo-500/30 overflow-hidden relative">
                            {userImage ? (
                                <Image
                                    src={userImage}
                                    alt={userName || 'User'}
                                    fill
                                    className="object-cover"
                                    sizes="36px"
                                />
                            ) : (
                                userName?.charAt(0) || 'U'
                            )}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">{userName}</p>
                            <p className="text-xs text-slate-500 truncate capitalize">{roleName}</p>
                        </div>
                    </div>

                    <form
                        action={async () => {
                            const { signOut } = await import('next-auth/react');
                            await signOut();
                        }}
                    >
                        <button className="flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 border border-slate-800 hover:border-red-500/20">
                            <ArrowRightOnRectangleIcon className="w-4 h-4" />
                            Sign Out
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
