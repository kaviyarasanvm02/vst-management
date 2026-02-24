'use client';

import { useOffline } from '@/hooks/use-offline';
import { WifiIcon, NoSymbolIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export function OfflineIndicator() {
    const isOffline = useOffline();
    const [shouldRender, setShouldRender] = useState(false);
    const [isRestored, setIsRestored] = useState(false);

    useEffect(() => {
        if (isOffline) {
            setShouldRender(true);
            setIsRestored(false);
        } else if (shouldRender) {
            // Show 'restored' state briefly
            setIsRestored(true);
            const timer = setTimeout(() => {
                setShouldRender(false);
                setIsRestored(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isOffline]);

    if (!shouldRender) return null;

    return (
        <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4">
            <div className={clsx(
                "flex items-center gap-2.5 px-4 py-2.5 rounded-2xl shadow-2xl border transition-all duration-500 ease-out backdrop-blur-md",
                isRestored
                    ? "bg-emerald-600 border-emerald-500 text-white translate-y-0 opacity-100"
                    : isOffline
                        ? "bg-slate-950/90 border-slate-800 text-slate-200 translate-y-0 opacity-100"
                        : "-translate-y-8 opacity-0"
            )}>
                {isRestored ? (
                    <>
                        <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                        <span className="text-xs font-bold tracking-tight uppercase">Connection Restored</span>
                    </>
                ) : (
                    <>
                        <NoSymbolIcon className="h-4 w-4 text-slate-400" />
                        <span className="text-xs font-bold tracking-tight uppercase tracking-wider">Working Offline</span>
                        <div className="flex gap-0.5 ml-1">
                            <div className="h-1 w-1 rounded-full bg-slate-600 animate-bounce [animation-delay:-0.3s]" />
                            <div className="h-1 w-1 rounded-full bg-slate-600 animate-bounce [animation-delay:-0.15s]" />
                            <div className="h-1 w-1 rounded-full bg-slate-600 animate-bounce" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
