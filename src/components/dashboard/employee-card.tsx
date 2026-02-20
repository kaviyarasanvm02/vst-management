import Image from 'next/image';
import Link from 'next/link';
import { ClockIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { EmployeeWithStats } from '@/types/dashboard';

interface EmployeeCardProps {
    employee: EmployeeWithStats;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
    return (
        <Link
            href={`/dashboard/timesheets/${employee.id}`}
            className="group block glass-card rounded-2xl p-6 hover:border-indigo-200/60 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ChevronRightIcon className="h-5 w-5 text-indigo-400" />
            </div>

            <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                    {employee.image ? (
                        <Image
                            src={employee.image}
                            alt={employee.name || 'Employee'}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <span className="text-xl font-bold">{employee.name?.charAt(0) || employee.email?.charAt(0)}</span>
                    )}
                </div>
                <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-slate-900 truncate group-hover:text-indigo-600 transition-colors">{employee.name || employee.email}</h3>
                    <p className="text-sm text-slate-500 truncate">
                        {employee.currentLocation ? (
                            <span className="text-indigo-600 font-medium flex items-center gap-1">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                </span>
                                {employee.currentLocation}
                            </span>
                        ) : (
                            (employee as any).branch?.name || (employee as any).branchLegacy || 'No Branch'
                        )}
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex flex-col">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Hours</span>
                    <div className="flex items-center gap-1.5 mt-1 text-slate-700">
                        <ClockIcon className="h-4 w-4 text-indigo-500" />
                        <span className="font-bold text-lg">{employee.totalHours?.toFixed(1) || 0}</span>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Entries</span>
                    <span className="mt-1 font-bold text-lg text-slate-700">{employee._count?.timesheets || 0}</span>
                </div>
            </div>
        </Link>
    );
}
