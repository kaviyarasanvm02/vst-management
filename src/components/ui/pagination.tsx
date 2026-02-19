'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-2 mt-8">
            <Link
                href={createPageURL(currentPage - 1)}
                className={clsx(
                    "p-2 rounded-lg border border-slate-200 transition-colors",
                    currentPage <= 1 ? "pointer-events-none opacity-50 bg-slate-50 text-slate-400" : "bg-white text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                )}
                aria-disabled={currentPage <= 1}
            >
                <ChevronLeftIcon className="h-5 w-5" />
            </Link>

            <div className="flex items-center gap-1">
                {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    // Show first, last, current, and neighbors
                    if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                        return (
                            <Link
                                key={page}
                                href={createPageURL(page)}
                                className={clsx(
                                    "h-9 w-9 flex items-center justify-center rounded-lg text-sm font-medium transition-all",
                                    currentPage === page
                                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                                        : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                                )}
                            >
                                {page}
                            </Link>
                        );
                    }
                    // Dots
                    if (
                        page === currentPage - 2 ||
                        page === currentPage + 2
                    ) {
                        return <span key={page} className="text-slate-400 px-1">...</span>;
                    }
                    return null;
                })}
            </div>

            <Link
                href={createPageURL(currentPage + 1)}
                className={clsx(
                    "p-2 rounded-lg border border-slate-200 transition-colors",
                    currentPage >= totalPages ? "pointer-events-none opacity-50 bg-slate-50 text-slate-400" : "bg-white text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                )}
                aria-disabled={currentPage >= totalPages}
            >
                <ChevronRightIcon className="h-5 w-5" />
            </Link>
        </div>
    );
}
