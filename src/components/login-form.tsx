'use client';

import {
    AtSymbolIcon,
    KeyIcon,
    ExclamationCircleIcon,
    ArrowRightIcon,
    CheckCircleIcon
} from '@heroicons/react/24/outline';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function LoginForm() {
    const [errorMessage, dispatch] = useActionState(authenticate, undefined);
    const searchParams = useSearchParams();
    const isRegistered = searchParams.get('registered') === 'true';

    return (
        <form action={dispatch} className="space-y-6">
            {isRegistered && (
                <div className="rounded-md bg-emerald-50 border border-emerald-200 p-3 flex items-center gap-2 text-emerald-700 text-sm">
                    <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <p>Registration successful! Please log in.</p>
                </div>
            )}

            <div>
                <label
                    className="mb-2 block text-sm font-medium text-slate-900"
                    htmlFor="email"
                >
                    Email Method
                </label>
                <div className="relative">
                    <input
                        className="peer block w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 focus:outline-none transition-all"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        required
                    />
                    <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 peer-focus:text-slate-500 transition-colors" />
                </div>
            </div>

            <div>
                <label
                    className="mb-2 block text-sm font-medium text-slate-900"
                    htmlFor="password"
                >
                    Password
                </label>
                <div className="relative">
                    <input
                        className="peer block w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 focus:outline-none transition-all"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        required
                        minLength={6}
                    />
                    <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 peer-focus:text-slate-500 transition-colors" />
                </div>
                <div className="flex justify-end mt-1">
                    <Link href="#" className="text-xs font-medium text-slate-600 hover:text-slate-500">
                        Forgot password?
                    </Link>
                </div>
            </div>

            <LoginButton />

            <div className="text-center mt-6">
                <p className="text-sm text-slate-600">
                    Don&apos;t have an account?{' '}
                    <Link href="/auth/signup" className="font-semibold text-slate-900 hover:text-slate-700 transition-colors">
                        Sign up
                    </Link>
                </p>
            </div>

            <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
            >
                {errorMessage && (
                    <>
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">{errorMessage}</p>
                    </>
                )}
            </div>
        </form>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            className="flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
            {pending ? 'Logging in...' : 'Sign in'}
            {!pending && <ArrowRightIcon className="ml-2 h-4 w-4" />}
        </button>
    );
}
