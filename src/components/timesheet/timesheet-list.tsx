import { format, isToday, isYesterday } from 'date-fns';
import {
    ClockIcon,
    MapPinIcon,
    BriefcaseIcon,
} from '@heroicons/react/24/outline';
import { TimesheetWithDetails } from '@/types';
import { StatusBadge } from '@/components/ui/status-badge';

interface TimesheetListProps {
    timesheets: TimesheetWithDetails[];
}

export function TimesheetList({ timesheets }: TimesheetListProps) {
    if (timesheets.length === 0) {
        return (
            <div className="py-20 text-center glass-card rounded-3xl border-dashed border-slate-300">
                <div className="h-16 w-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ClockIcon className="h-8 w-8 text-indigo-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">No entries logged yet</h3>
                <p className="text-slate-500 mt-2">Start by logging your first activity for today.</p>
            </div>
        );
    }

    const getDateLabel = (date: Date) => {
        if (isToday(date)) return 'Today';
        if (isYesterday(date)) return 'Yesterday';
        return format(date, 'EEEE, MMMM do');
    };

    return (
        <div className="space-y-8">
            {timesheets.map((ts) => (
                <div key={ts.id} className="space-y-3">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider pl-1">
                        {getDateLabel(new Date(ts.date))}
                    </h3>

                    <div className="space-y-3">
                        {ts.entries.map((entry) => (
                            <div
                                key={entry.id}
                                className="group glass-card rounded-2xl p-5 hover:border-indigo-200 transition-all duration-300 hover:shadow-md bg-white/70 backdrop-blur-sm"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                                    {/* Project Icon/Avatar placeholder if needed, purely decorative for now */}

                                    {/* Content Column */}
                                    <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <BriefcaseIcon className="h-4 w-4 text-indigo-500" />
                                                <div>
                                                    <p className="text-sm font-semibold text-slate-900">{entry.project.name}</p>
                                                    <p className="text-xs text-slate-500 mt-0.5">{entry.project.customer?.name || 'Internal Project'}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2 mt-2">
                                                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-300 flex-shrink-0"></div>
                                                <p className="text-sm text-slate-600 line-clamp-2">{entry.description}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col sm:items-end justify-center gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-sm font-bold">
                                                    <ClockIcon className="h-4 w-4 text-slate-500" />
                                                    {entry.hours}h
                                                </div>
                                                <StatusBadge status={ts.status} />
                                            </div>
                                            {entry.location && (
                                                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                                                    <MapPinIcon className="h-3.5 w-3.5" />
                                                    {entry.location}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
