import { SkeletonPageHeader, SkeletonStatCard, SkeletonRow } from '@/components/ui/skeletons';

export default function Loading() {
    return (
        <div className="w-full max-w-7xl mx-auto space-y-6 pb-10">
            <SkeletonPageHeader />
            {/* Filters */}
            <div className="flex items-center gap-3">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-9 w-28 bg-slate-200 rounded-lg animate-pulse" />
                ))}
            </div>
            {/* Stat grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[...Array(4)].map((_, i) => <SkeletonStatCard key={i} />)}
            </div>
            {/* Report rows */}
            <div className="space-y-3">
                {[...Array(6)].map((_, i) => <SkeletonRow key={i} />)}
            </div>
        </div>
    );
}
