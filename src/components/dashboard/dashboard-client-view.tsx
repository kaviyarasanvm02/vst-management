'use client';

import { useRouter } from 'next/navigation';
import { PullToRefresh } from '@/components/ui/pull-to-refresh';
import { DashboardErrorBoundary } from '@/components/dashboard/error-boundary';

interface DashboardClientViewProps {
    children: React.ReactNode;
}

export function DashboardClientView({ children }: DashboardClientViewProps) {
    const router = useRouter();

    const handleRefresh = async () => {
        router.refresh();
        // Small delay to ensure the spinner is visible and smooth
        await new Promise(resolve => setTimeout(resolve, 800));
    };

    return (
        <PullToRefresh onRefresh={handleRefresh}>
            <DashboardErrorBoundary>
                {children}
            </DashboardErrorBoundary>
        </PullToRefresh>
    );
}
