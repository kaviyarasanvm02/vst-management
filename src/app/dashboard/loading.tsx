import { SkeletonPageHeader, SkeletonStatCard, SkeletonRow } from '@/components/ui/skeletons';

export default function Loading() {
    return (
        <div className="w-full max-w-7xl mx-auto space-y-6 pb-10">
            <SkeletonPageHeader />
            {/* Stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[...Array(4)].map((_, i) => <SkeletonStatCard key={i} />)}
            </div>
            {/* Chart area */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 animate-pulse h-56" />
            {/* Activity rows */}
            <div className="space-y-3">
                {[...Array(3)].map((_, i) => <SkeletonRow key={i} />)}
            </div>
        </div>
    );
}
