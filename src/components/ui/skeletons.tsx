/**
 * Reusable skeleton building blocks.
 * Use these to build page-specific loading states.
 */

/** A single animated grey bar */
export function SkeletonBar({ w = 'w-full', h = 'h-4', rounded = 'rounded-md' }: { w?: string; h?: string; rounded?: string }) {
    return <div className={`${w} ${h} ${rounded} bg-slate-200 animate-pulse`} />;
}

/** Skeleton for a KPI/stat card */
export function SkeletonStatCard() {
    return (
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 animate-pulse">
            <div className="h-9 w-9 rounded-lg bg-slate-200 shrink-0" />
            <div className="space-y-2 flex-1">
                <div className="h-3 w-20 bg-slate-200 rounded" />
                <div className="h-6 w-10 bg-slate-300 rounded" />
            </div>
        </div>
    );
}

/** Skeleton for a list/table row */
export function SkeletonRow() {
    return (
        <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-center gap-4 animate-pulse">
            <div className="h-9 w-9 rounded-lg bg-slate-200 shrink-0" />
            <div className="flex-1 space-y-2">
                <div className="h-4 w-1/2 bg-slate-200 rounded" />
                <div className="h-3 w-1/3 bg-slate-100 rounded" />
            </div>
            <div className="h-7 w-20 bg-slate-200 rounded-full" />
        </div>
    );
}

/** Standard page header skeleton */
export function SkeletonPageHeader() {
    return (
        <div className="pb-4 border-b border-slate-200 space-y-1.5 animate-pulse">
            <div className="h-7 w-52 bg-slate-200 rounded-lg" />
            <div className="h-4 w-72 bg-slate-100 rounded-lg" />
        </div>
    );
}
