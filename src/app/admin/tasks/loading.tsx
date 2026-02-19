import { SkeletonPageHeader, SkeletonStatCard, SkeletonRow, SkeletonBar } from '@/components/ui/skeletons';

export default function Loading() {
    return (
        <div className="w-full max-w-7xl mx-auto space-y-6 pb-10">
            <SkeletonPageHeader />
            {/* Stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[...Array(4)].map((_, i) => <SkeletonStatCard key={i} />)}
            </div>
            {/* Form + List split */}
            <div className="space-y-4">
                {/* Full-width form skeleton */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 animate-pulse">
                    <SkeletonBar h="h-5" w="w-24" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <SkeletonBar h="h-11" />
                        <SkeletonBar h="h-11" />
                    </div>
                    <SkeletonBar h="h-16" />
                    <div className="grid grid-cols-3 gap-4">
                        <SkeletonBar h="h-11" />
                        <SkeletonBar h="h-11" />
                        <SkeletonBar h="h-11" />
                    </div>
                    <div className="flex justify-end">
                        <SkeletonBar h="h-11" w="w-32" rounded="rounded-xl" />
                    </div>
                </div>
                {/* Task list skeleton */}
                <div className="flex gap-2 pt-2">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-8 w-20 bg-slate-200 rounded-full animate-pulse" />
                    ))}
                </div>
                <div className="space-y-3">
                    {[...Array(5)].map((_, i) => <SkeletonRow key={i} />)}
                </div>
            </div>
        </div>
    );
}
