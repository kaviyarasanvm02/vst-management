'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    HomeIcon,
    ClockIcon,
    ClipboardDocumentListIcon,
    UserCircleIcon,
    DocumentDuplicateIcon
} from '@heroicons/react/24/outline';
import {
    HomeIcon as HomeSolid,
    ClockIcon as ClockSolid,
    ClipboardDocumentListIcon as ClipboardSolid,
    UserCircleIcon as UserSolid,
    DocumentDuplicateIcon as DocumentSolid
} from '@heroicons/react/24/solid';
import clsx from 'clsx';

const navLinks = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon, activeIcon: HomeSolid },
    { name: 'Attendance', href: '/dashboard/attendance', icon: ClockIcon, activeIcon: ClockSolid },
    { name: 'Timesheets', href: '/dashboard/timesheets', icon: DocumentDuplicateIcon, activeIcon: DocumentSolid },
    { name: 'Tasks', href: '/dashboard/tasks', icon: ClipboardDocumentListIcon, activeIcon: ClipboardSolid },
    { name: 'Profile', href: '/dashboard/profile', icon: UserCircleIcon, activeIcon: UserSolid },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-t border-slate-200 pb-safe md:hidden">
            <div className="flex h-16 items-center justify-around">
                {navLinks.map((link) => {
                    const isActive = link.href === '/dashboard'
                        ? pathname === link.href
                        : pathname.startsWith(link.href);
                    const Icon = isActive ? link.activeIcon : link.icon;

                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'flex flex-col items-center justify-center gap-1 w-full h-full transition-all active:scale-90',
                                isActive ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-700'
                            )}
                        >
                            <Icon className={clsx("h-6 w-6 transition-transform", isActive && "scale-110")} />
                            <span className="text-[10px] font-bold uppercase tracking-tight">{link.name}</span>
                            {isActive && (
                                <div className="absolute top-0 h-1 w-8 bg-indigo-600 rounded-b-full shadow-[0_0_8px_rgba(79,70,229,0.4)]" />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
