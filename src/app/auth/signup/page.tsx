'use client';

import { Suspense } from 'react';
import SignupForm from '@/components/signup-form';
import Image from 'next/image';

export default function SignupPage() {
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
                    <h2 className="text-3xl font-bold text-white mb-6">Join the Future of Work</h2>
                    <p className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed">
                        &quot;Start tracking your time effectively today. Join thousands of professionals optimizing their workflow with VST Timesheet.&quot;
                    </p>
                </div>
                {/* Decorative Circle */}
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-600 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-600 rounded-full blur-3xl opacity-20"></div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
                <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
                    <div className="text-center lg:text-left">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Create your account</h2>
                        <p className="mt-2 text-sm text-slate-600">
                            Get started with a free account today
                        </p>
                    </div>

                    <Suspense fallback={<div className="text-slate-500 text-center py-4">Loading signup form...</div>}>
                        <SignupForm />
                    </Suspense>
                </div>
            </div>
        </main>
    );
}
