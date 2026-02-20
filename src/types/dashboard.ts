import { Project, Timesheet, TimesheetEntry, User, Role, Customer } from '@/generated/client';
import { TimesheetWithDetails } from '@/types';

export interface EmployeeWithStats extends User {
    role: Role | null;
    totalHours: number;
    currentLocation?: string; // Dynamic location based on latest attendance
    _count: {
        timesheets: number;
    };
}

export interface DashboardStats {
    isAdmin: boolean;
    totalHoursThisWeek: number;
    activeProjects: number;
    recentActivity: TimesheetWithDetails[];
    chartData: {
        name: string;
        hours: number;
    }[];
    // Admin-only extras
    pendingTimesheets?: number;
    totalEmployees?: number;
    totalOrgHoursThisWeek?: number;
}
