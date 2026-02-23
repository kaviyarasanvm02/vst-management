import { Suspense } from 'react';
import { notFound, redirect } from 'next/navigation';
import LoginForm from '@/components/login-form';
import SignupForm from '@/components/signup-form';
import Image from 'next/image';
import { auth } from '@/lib/auth';

export default async function ConsolidatedAuthPage({
    params: paramsPromise,
}: {
    params: Promise<{ action?: string[] }>;
}) {
    const resolvedParams = await paramsPromise;
    const pathSegments = resolvedParams.action || [];

    // Redirect /auth to /auth/login
    if (pathSegments.length === 0) {
        redirect('/auth/login');
    }

    const action = pathSegments[0];

    if (!['login', 'signup'].includes(action)) {
        notFound();
    }

    // If already logged in, redirect away from auth pages
    const session = await auth();
    if (session) {
        redirect('/dashboard');
    }

    const isLogin = action === 'login';

    return (
        <main className="min-h-screen flex bg-slate-50">
            {/* Left Side - Branding & Visuals */}
            <div className="hidden lg:flex w-1/2 bg-slate-900 relative items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="z-10 text-center px-12">
                    <div className="mb-8 flex justify-center">
                        <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100">
                            <Image
                                src="/vedhasoft_technologies_logo.jpg"
                                alt="Vedhasoft Logo"
                                width={200}
                                height={80}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-6">
                        {isLogin ? 'Efficiency Redefined' : 'Join the Future of Work'}
                    </h2>
                    <p className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed">
                        {isLogin
                            ? '"VST Timesheet matches our workflow perfectly. It\'s clean, fast, and gives us the insights we need."'
                            : '"Start tracking your time effectively today. Join thousands of professionals optimizing their workflow with VST Timesheet."'
                        }
                    </p>
                </div>
                {/* Decorative Circles */}
                <div className={isLogin ? "absolute -bottom-24 -left-24 w-64 h-64 bg-slate-500 rounded-full blur-3xl opacity-20" : "absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-600 rounded-full blur-3xl opacity-20"}></div>
                <div className={isLogin ? "absolute -top-24 -right-24 w-64 h-64 bg-slate-600 rounded-full blur-3xl opacity-20" : "absolute -top-24 -right-24 w-64 h-64 bg-teal-600 rounded-full blur-3xl opacity-20"}></div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
                <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                            {isLogin ? 'Welcome back' : 'Create your account'}
                        </h2>
                        <p className="mt-2 text-sm text-slate-600">
                            {isLogin ? 'Please enter your details to sign in' : 'Get started with a free account today'}
                        </p>
                    </div>

                    <Suspense fallback={<div className="text-slate-500 text-center py-4">Loading form...</div>}>
                        {isLogin ? <LoginForm /> : <SignupForm />}
                    </Suspense>
                </div>
            </div>
        </main>
    );
}
