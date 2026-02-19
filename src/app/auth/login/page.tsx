import { Suspense } from 'react';
import LoginForm from '@/components/login-form';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Login | VST Timesheet',
};

export default function LoginPage() {
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
                    <h2 className="text-3xl font-bold text-white mb-6">Efficiency Redefined</h2>
                    <p className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed">
                        &quot;VST Timesheet matches our workflow perfectly. It&apos;s clean, fast, and gives us the insights we need.&quot;
                    </p>
                </div>
                {/* Decorative Circle */}
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-500 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-slate-600 rounded-full blur-3xl opacity-20"></div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
                <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Welcome back</h2>
                        <p className="mt-2 text-sm text-slate-600">
                            Please enter your details to sign in
                        </p>
                    </div>

                    <Suspense fallback={<div className="text-slate-500 text-center py-4">Loading login form...</div>}>
                        <LoginForm />
                    </Suspense>
                </div>
            </div>
        </main>
    );
}
