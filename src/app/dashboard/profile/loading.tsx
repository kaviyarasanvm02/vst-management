import { SkeletonPageHeader, SkeletonBar } from '@/components/ui/skeletons';

export default function Loading() {
    return (
        <div className="w-full max-w-2xl mx-auto space-y-6 pb-8">
            <SkeletonPageHeader />
            {/* Profile card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5 animate-pulse">
                {/* Avatar */}
                <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-slate-200" />
                    <div className="space-y-2">
                        <SkeletonBar h="h-5" w="w-36" />
                        <SkeletonBar h="h-3" w="w-48" />
                    </div>
                </div>
                {/* Fields */}
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="space-y-1.5">
                        <SkeletonBar h="h-3" w="w-20" />
                        <SkeletonBar h="h-10" />
                    </div>
                ))}
                <div className="flex justify-end">
                    <SkeletonBar h="h-10" w="w-28" rounded="rounded-xl" />
                </div>
            </div>
        </div>
    );
}
