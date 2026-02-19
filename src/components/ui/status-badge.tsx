
import clsx from 'clsx';
import { TimesheetStatus } from '@/types';

interface StatusBadgeProps {
    status: string; // Using string to accommodate 'PENDING' | 'APPROVED' | 'REJECTED' coming from DB/Prisma
}

export function StatusBadge({ status }: StatusBadgeProps) {
    const serializedStatus = status.toUpperCase() as TimesheetStatus;

    return (
        <span className={clsx(
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold shadow-sm border",
            {
                'bg-emerald-50 text-emerald-700 border-emerald-100': serializedStatus === TimesheetStatus.APPROVED,
                'bg-amber-50 text-amber-700 border-amber-100': serializedStatus === TimesheetStatus.PENDING,
                'bg-red-50 text-red-700 border-red-100': serializedStatus === TimesheetStatus.REJECTED,
                // Default fallback
                'bg-slate-50 text-slate-700 border-slate-100': !Object.values(TimesheetStatus).includes(serializedStatus)
            }
        )}>
            <span className={clsx(
                "h-1.5 w-1.5 rounded-full",
                {
                    'bg-emerald-500': serializedStatus === TimesheetStatus.APPROVED,
                    'bg-amber-500': serializedStatus === TimesheetStatus.PENDING,
                    'bg-red-500': serializedStatus === TimesheetStatus.REJECTED,
                    'bg-slate-500': !Object.values(TimesheetStatus).includes(serializedStatus)
                }
            )}></span>
            {serializedStatus === TimesheetStatus.APPROVED ? 'Approved' :
                serializedStatus === TimesheetStatus.PENDING ? 'Pending' :
                    serializedStatus === TimesheetStatus.REJECTED ? 'Rejected' : status}
        </span>
    );
}
