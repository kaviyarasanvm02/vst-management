'use client';

import { useEffect } from 'react';

interface BadgeManagerProps {
    count: number;
}

export function BadgeManager({ count }: BadgeManagerProps) {
    useEffect(() => {
        if ('setAppBadge' in navigator) {
            if (count > 0) {
                (navigator as any).setAppBadge(count).catch((err: any) => {
                    console.error('Error setting app badge:', err);
                });
            } else {
                (navigator as any).clearAppBadge().catch((err: any) => {
                    console.error('Error clearing app badge:', err);
                });
            }
        }
    }, [count]);

    return null;
}
