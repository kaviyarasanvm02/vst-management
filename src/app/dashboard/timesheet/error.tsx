'use client';

import { useEffect } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="w-full h-[60vh] flex flex-col items-center justify-center p-6 text-center">
            <div className="h-16 w-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                <ExclamationTriangleIcon className="h-8 w-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Something went wrong!</h2>
            <p className="text-slate-500 mb-8 max-w-md">
                We couldn't load the timesheet data. Please try again or contact support if the problem persists.
            </p>
            <button
                onClick={reset}
                className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/20 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
            >
                Try again
            </button>
        </div>
    );
}
