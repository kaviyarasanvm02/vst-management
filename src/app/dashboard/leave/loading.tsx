import { SkeletonPageHeader, SkeletonRow, SkeletonBar } from '@/components/ui/skeletons';

export default function Loading() {
    return (
        <div className="w-full max-w-4xl mx-auto space-y-6 pb-8">
            <SkeletonPageHeader />
            {/* Form card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 animate-pulse">
                <SkeletonBar h="h-5" w="w-32" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <SkeletonBar h="h-11" />
                    <SkeletonBar h="h-11" />
                </div>
                <SkeletonBar h="h-20" />
                <div className="grid grid-cols-3 gap-4">
                    <SkeletonBar h="h-11" />
                    <SkeletonBar h="h-11" />
                    <SkeletonBar h="h-11" />
                </div>
                <div className="flex justify-end">
                    <SkeletonBar h="h-11" w="w-32" rounded="rounded-xl" />
                </div>
            </div>
            {/* Leave history rows */}
            <SkeletonBar h="h-5" w="w-36" />
            <div className="space-y-3">
                {[...Array(4)].map((_, i) => <SkeletonRow key={i} />)}
            </div>
        </div>
    );
}
