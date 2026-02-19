'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-4">
            <div className="text-center space-y-6 max-w-md">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-red-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Something went wrong!</h2>
                <p className="text-slate-600">
                    We apologize for the inconvenience. An unexpected error occurred while processing your request.
                </p>

                <div className="flex gap-4 justify-center pt-2">
                    <button
                        onClick={() => reset()}
                        className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20"
                    >
                        Try again
                    </button>
                    <Link
                        href="/dashboard"
                        className="px-6 py-2.5 bg-white text-slate-700 font-medium rounded-xl border border-slate-200 hover:bg-slate-50 transition"
                    >
                        Go to Dashboard
                    </Link>
                </div>
                {error.digest && <p className="text-xs text-slate-400 font-mono mt-8">Error ID: {error.digest}</p>}
            </div>
        </div>
    );
}
