'use client';

import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            {children}
            <Toaster
                position="bottom-right"
                toastOptions={{
                    duration: 3500,
                    style: {
                        background: '#1e293b',
                        color: '#f8fafc',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: '500',
                        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
                    },
                    success: {
                        iconTheme: { primary: '#34d399', secondary: '#1e293b' },
                    },
                    error: {
                        iconTheme: { primary: '#f87171', secondary: '#1e293b' },
                    },
                }}
            />
        </SessionProvider>
    );
}
