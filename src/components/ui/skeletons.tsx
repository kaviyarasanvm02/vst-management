/**
 * Reusable skeleton building blocks.
 * Use these to build page-specific loading states.
 */

/** A single animated grey bar */
export function SkeletonBar({ w = 'w-full', h = 'h-4', rounded = 'rounded-md' }: { w?: string; h?: string; rounded?: string }) {
    return <div className={`${w} ${h} ${rounded} bg-slate-200 animate-pulse`} />;
}

/** Skeleton for a circular element (e.g., Avatar) */
export function SkeletonCircle({ size = 'h-10 w-10' }: { size?: string }) {
    return <div className={`${size} rounded-full bg-slate-200 animate-pulse`} />;
}

/** Skeleton for a KPI/stat card */
export function SkeletonStatCard() {
    return (
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4 animate-pulse">
            <div className="h-11 w-11 rounded-lg bg-slate-200 shrink-0" />
            <div className="space-y-2 flex-1">
                <div className="h-2.5 w-16 bg-slate-100 rounded" />
                <div className="h-6 w-12 bg-slate-200 rounded" />
                <div className="h-2 w-24 bg-slate-50 rounded" />
            </div>
        </div>
    );
}

/** Skeleton for the activity chart */
export function SkeletonChart() {
    return (
        <div className="bg-white border border-slate-200 rounded-xl animate-pulse overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 h-14" />
            <div className="p-6 h-[300px] flex items-end gap-2">
                {[...Array(7)].map((_, i) => (
                    <div
                        key={i}
                        className="flex-1 bg-slate-100 rounded-t-lg"
                        style={{ height: `${Math.random() * 60 + 20}%` }}
                    />
                ))}
            </div>
        </div>
    );
}

/** Skeleton for recent activity list */
export function SkeletonRecentActivity() {
    return (
        <div className="bg-white border border-slate-200 rounded-xl animate-pulse overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 h-14" />
            <div className="divide-y divide-slate-100">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-start gap-3 px-5 py-4">
                        <div className="h-8 w-8 rounded-lg bg-slate-100 shrink-0" />
                        <div className="flex-1 space-y-2">
                            <div className="flex justify-between">
                                <div className="h-3 w-24 bg-slate-200 rounded" />
                                <div className="h-2 w-8 bg-slate-100 rounded" />
                            </div>
                            <div className="h-2 w-full bg-slate-50 rounded" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/** Skeleton for Attendance Card */
export function SkeletonAttendanceCard() {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 animate-pulse">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-4 flex-1">
                    <div className="h-6 w-32 bg-slate-200 rounded-full" />
                    <div className="h-12 w-48 bg-slate-300 rounded-lg" />
                    <div className="h-16 w-full max-w-sm bg-slate-100 rounded-2xl" />
                </div>
                <div className="h-12 w-full md:w-48 bg-slate-200 rounded-xl" />
            </div>
        </div>
    );
}

/** Skeleton for a list/table row */
export function SkeletonRow() {
    return (
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 animate-pulse">
            <div className="h-10 w-10 rounded-xl bg-slate-200 shrink-0" />
            <div className="flex-1 space-y-1.5">
                <div className="h-4 w-2/3 bg-slate-200 rounded" />
                <div className="h-3 w-1/3 bg-slate-100 rounded" />
            </div>
            <div className="h-6 w-16 bg-slate-200 rounded-full" />
        </div>
    );
}

/** Standard page header skeleton */
export function SkeletonPageHeader() {
    return (
        <div className="pb-4 space-y-2 animate-pulse">
            <div className="h-8 w-40 bg-slate-200 rounded-xl" />
            <div className="h-4 w-60 bg-slate-100 rounded-lg" />
        </div>
    );
}
/** Skeleton for the KPI grid */
export function SkeletonKPIs({ count = 3 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[...Array(count)].map((_, i) => <SkeletonStatCard key={i} />)}
        </div>
    );
}
