'use client';

import { useState, useEffect } from 'react';
import { DevicePhoneMobileIcon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handler = (e: any) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e);

            // Check if already installed
            const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
            if (!isStandalone) {
                // Show prompt after a short delay
                setTimeout(() => setIsVisible(true), 3000);
            }
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        // Show the prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);

        // We've used the prompt, and can't use it again, throw it away
        setDeferredPrompt(null);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-24 left-4 right-4 z-50 animate-float-in">
            <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-slate-700/50 flex items-center justify-between gap-4 backdrop-blur-md bg-opacity-95">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
                        <DevicePhoneMobileIcon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold">Install VST App</span>
                        <span className="text-[10px] text-slate-400">Add to your home screen for the best experience</span>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handleInstallClick}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all active:scale-95"
                    >
                        Install
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <XMarkIcon className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
