'use client';

import {
    UserIcon,
    AtSymbolIcon,
    KeyIcon,
    CheckCircleIcon,
    ExclamationCircleIcon,
    ArrowRightIcon,
    EyeIcon,
    EyeSlashIcon
} from '@heroicons/react/24/outline';
import { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { registerUser } from '@/app/lib/auth-actions';
import Link from 'next/link';

export default function SignupForm() {
    const initialState = { message: null, errors: {} };
    // @ts-expect-error - useActionState types can be tricky with server actions
    const [state, dispatch] = useActionState(registerUser, initialState);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <form action={dispatch} className="space-y-5">
            <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-900">
                    Full Name
                </label>
                <div className="relative">
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="peer block w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 focus:outline-none transition-all"
                        placeholder="Enter your full name"
                    />
                    <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 peer-focus:text-slate-500 transition-colors" />
                </div>
                <div aria-live="polite" aria-atomic="true">
                    {state?.errors?.name && (
                        <p className="mt-2 text-sm text-red-500">{state.errors.name}</p>
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-900">
                    Email address
                </label>
                <div className="relative">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="peer block w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 focus:outline-none transition-all"
                        placeholder="you@vedhasoft.com"
                    />
                    <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 peer-focus:text-slate-500 transition-colors" />
                </div>
                <div aria-live="polite" aria-atomic="true">
                    {state?.errors?.email && (
                        <p className="mt-2 text-sm text-red-500">{state.errors.email}</p>
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-900">
                    Password
                </label>
                <div className="relative">
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        className="peer block w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 focus:outline-none transition-all"
                        placeholder="••••••••"
                    />
                    <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 peer-focus:text-slate-500 transition-colors" />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"
                    >
                        {showPassword ? (
                            <EyeSlashIcon className="h-5 w-5" />
                        ) : (
                            <EyeIcon className="h-5 w-5" />
                        )}
                    </button>
                </div>
                <div aria-live="polite" aria-atomic="true">
                    {state?.errors?.password && (
                        <p className="mt-2 text-sm text-red-500">{state.errors.password}</p>
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-900">
                    Confirm Password
                </label>
                <div className="relative">
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        className="peer block w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20 focus:outline-none transition-all"
                        placeholder="••••••••"
                    />
                    <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 peer-focus:text-slate-500 transition-colors" />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none transition-colors"
                    >
                        {showConfirmPassword ? (
                            <EyeSlashIcon className="h-5 w-5" />
                        ) : (
                            <EyeIcon className="h-5 w-5" />
                        )}
                    </button>
                </div>
                <div aria-live="polite" aria-atomic="true">
                    {state?.errors?.confirmPassword && (
                        <p className="mt-2 text-sm text-red-500">{state.errors.confirmPassword}</p>
                    )}
                </div>
            </div>

            {state?.message && (
                <div className="rounded-md bg-red-50 p-3 text-sm text-red-500 flex items-center gap-2 border border-red-100">
                    <ExclamationCircleIcon className="h-5 w-5 flex-shrink-0" />
                    <p>{state.message}</p>
                </div>
            )}

            <SignupButton />

            <div className="text-center mt-6">
                <p className="text-sm text-slate-600">
                    Already have an account?{' '}
                    <Link href="/auth/login" className="font-semibold text-slate-900 hover:text-slate-700 transition-colors">
                        Sign in
                    </Link>
                </p>
            </div>
        </form>
    );
}

function SignupButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed mt-6"
        >
            {pending ? 'Creating account...' : 'Create Account'}
            {!pending && <ArrowRightIcon className="ml-2 h-4 w-4" />}
        </button>
    );
}
