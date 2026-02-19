import { SkeletonPageHeader, SkeletonStatCard, SkeletonRow } from '@/components/ui/skeletons';

export default function Loading() {
    return (
        <div className="w-full max-w-5xl mx-auto space-y-6 pb-8">
            <SkeletonPageHeader />
            {/* Status count pills */}
            <div className="flex gap-3">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-7 w-24 bg-slate-200 rounded-full animate-pulse" />
                ))}
            </div>
            {/* Filter tabs */}
            <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-8 w-20 bg-slate-200 rounded-full animate-pulse" />
                ))}
            </div>
            {/* Task cards */}
            <div className="space-y-3">
                {[...Array(5)].map((_, i) => <SkeletonRow key={i} />)}
            </div>
        </div>
    );
}
