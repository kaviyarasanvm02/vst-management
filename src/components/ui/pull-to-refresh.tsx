'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

interface PullToRefreshProps {
    onRefresh: () => Promise<void>;
    children: React.ReactNode;
}

export function PullToRefresh({ onRefresh, children }: PullToRefreshProps) {
    const [pullDistance, setPullDistance] = useState(0);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const startY = useRef(0);
    const isPulling = useRef(false);

    const PULL_THRESHOLD = 80;
    const MAX_PULL = 120;

    const handleTouchStart = (e: React.TouchEvent) => {
        if (window.scrollY === 0) {
            startY.current = e.touches[0].pageY;
            isPulling.current = true;
        }
    };

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!isPulling.current || isRefreshing) return;

        const currentY = e.touches[0].pageY;
        const diff = currentY - startY.current;

        if (diff > 0) {
            // Add resistance
            const distance = Math.min(diff * 0.4, MAX_PULL);
            setPullDistance(distance);

            // Prevent scrolling when pulling
            if (distance > 10 && e.cancelable) {
                e.preventDefault();
            }
        } else {
            isPulling.current = false;
            setPullDistance(0);
        }
    }, [isRefreshing]);

    const handleTouchEnd = useCallback(async () => {
        if (!isPulling.current) return;
        isPulling.current = false;

        if (pullDistance >= PULL_THRESHOLD && !isRefreshing) {
            setIsRefreshing(true);
            setPullDistance(PULL_THRESHOLD / 2);

            try {
                await onRefresh();
                // Success vibration
                if (navigator.vibrate) navigator.vibrate(10);
            } catch (error) {
                console.error('Refresh failed:', error);
            } finally {
                setIsRefreshing(false);
                setPullDistance(0);
            }
        } else {
            setPullDistance(0);
        }
    }, [pullDistance, isRefreshing, onRefresh]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        el.addEventListener('touchmove', handleTouchMove, { passive: false });
        el.addEventListener('touchend', handleTouchEnd);

        return () => {
            el.removeEventListener('touchmove', handleTouchMove);
            el.removeEventListener('touchend', handleTouchEnd);
        };
    }, [handleTouchMove, handleTouchEnd]);

    const rotation = (pullDistance / PULL_THRESHOLD) * 360;

    return (
        <div ref={containerRef} className="relative overflow-hidden min-h-screen">
            {/* Refresh Indicator */}
            <div
                className={clsx(
                    "absolute top-0 left-0 right-0 flex justify-center h-10 transition-transform duration-200 z-40",
                    isRefreshing && "translate-y-4"
                )}
                style={{
                    transform: !isRefreshing ? `translateY(${pullDistance - 40}px)` : undefined,
                    opacity: pullDistance > 10 || isRefreshing ? 1 : 0
                }}
            >
                <div className="bg-white rounded-full p-2 shadow-lg border border-slate-100">
                    <ArrowPathIcon
                        className={clsx(
                            "h-5 w-5 text-indigo-600 transition-transform",
                            isRefreshing && "animate-spin"
                        )}
                        style={{ transform: !isRefreshing ? `rotate(${rotation}deg)` : undefined }}
                    />
                </div>
            </div>

            <div
                className="transition-transform duration-200"
                style={{ transform: pullDistance > 0 ? `translateY(${pullDistance}px)` : undefined }}
            >
                {children}
            </div>
        </div>
    );
}
