import { Role, User, Branch, Customer, Project, Timesheet, TimesheetEntry, Attendance, Leave, Payroll } from "@prisma/client";

export type {
    Role,
    User,
    Branch,
    Customer,
    Project,
    Timesheet,
    TimesheetEntry,
    Attendance,
    Leave,
    Payroll
};

export enum TimesheetStatus {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED'
}

export type ActionResult = {
    success?: string;
    error?: string;
    fieldErrors?: Record<string, string[]>;
};

export type UserWithRoleAndBranch = User & {
    role: Role | null;
    branch: Branch | null;
};

export type AttendanceWithUser = Attendance & {
    user: User & {
        branch: Branch | null;
    };
};

export type TimesheetWithDetails = Timesheet & {
    user?: User | null;
    entries: (TimesheetEntry & {
        project: Project & {
            customer: Customer | null;
        };
    })[];
};

export type ProjectWithCustomerAndManager = Project & {
    customer: Customer | null;
    manager: User | null;
};

export interface EmployeeWithStats extends User {
    role: Role | null;
    totalHours: number;
    currentLocation?: string;
    _count: {
        timesheets: number;
    };
}

export interface DashboardStats {
    isAdmin: boolean;
    totalHoursThisWeek: number;
    totalOrgHoursThisWeek?: number;
    activeProjects: number;
    pendingTimesheets?: number;
    totalEmployees?: number;
    recentActivity: TimesheetWithDetails[];
    chartData: {
        name: string;
        hours: number;
    }[];
}
