export default function Loading() {
    return (
        <div className="w-full max-w-7xl mx-auto space-y-8 pb-10">
            {/* Header Skeleton */}
            <div className="space-y-2">
                <div className="h-8 w-48 bg-slate-200 rounded-lg animate-pulse"></div>
                <div className="h-4 w-64 bg-slate-100 rounded-lg animate-pulse"></div>
            </div>

            {/* Content Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="glass-card rounded-2xl p-6 h-40 animate-pulse bg-white/40">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-14 w-14 rounded-2xl bg-slate-200"></div>
                            <div className="space-y-2 flex-1">
                                <div className="h-5 w-3/4 bg-slate-200 rounded"></div>
                                <div className="h-3 w-1/2 bg-slate-100 rounded"></div>
                            </div>
                        </div>
                        <div className="flex justify-between pt-4 border-t border-slate-100/50">
                            <div className="space-y-1">
                                <div className="h-3 w-16 bg-slate-100 rounded"></div>
                                <div className="h-5 w-12 bg-slate-200 rounded"></div>
                            </div>
                            <div className="space-y-1 flex flex-col items-end">
                                <div className="h-3 w-16 bg-slate-100 rounded"></div>
                                <div className="h-5 w-8 bg-slate-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
