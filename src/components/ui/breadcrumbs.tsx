'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function Breadcrumbs() {
    const pathname = usePathname();
    const paths = pathname.split('/').filter(Boolean);

    // Skip showing breadcrumbs on root pages
    if (pathname === '/dashboard' || pathname === '/admin') return null;

    return (
        <nav aria-label="Breadcrumb" className="mb-6 flex">
            <ol role="list" className="flex items-center space-x-2">
                <li>
                    <Link href="/dashboard" className="text-slate-400 hover:text-slate-500 transition-colors">
                        <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>
                {paths.map((segment, index) => {
                    // Skip 'dashboard' and 'admin' as they're the home icon
                    if (segment === 'dashboard' || segment === 'admin') return null;

                    const href = `/${paths.slice(0, index + 1).join('/')}`;
                    const isLast = index === paths.length - 1;
                    // Prettify: 'team-user' → 'Team User'
                    const title = segment
                        .split('-')
                        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                        .join(' ');

                    return (
                        <li key={segment} className="flex items-center">
                            <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-slate-300" aria-hidden="true" />
                            <Link
                                href={href}
                                className={clsx(
                                    "ml-2 text-sm font-medium hover:text-slate-700 transition-colors",
                                    isLast ? "text-slate-700 font-bold pointer-events-none" : "text-slate-500"
                                )}
                                aria-current={isLast ? 'page' : undefined}
                            >
                                {title}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
