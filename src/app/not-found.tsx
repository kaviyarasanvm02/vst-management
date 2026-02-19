import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 px-4">
            <div className="text-center space-y-6 max-w-md">
                <h2 className="text-8xl font-black text-indigo-100 select-none">404</h2>

                <div className="space-y-2 relative -top-8">
                    <h3 className="text-2xl font-bold text-slate-900">Page Not Found</h3>
                    <p className="text-slate-600">
                        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
                    </p>
                </div>

                <Link
                    href="/dashboard"
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20 gap-2"
                >
                    <HomeIcon className="size-5" />
                    <span>Return Home</span>
                </Link>
            </div>
        </div>
    );
}
