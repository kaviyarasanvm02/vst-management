
import { Prisma } from '@/generated/client';

// Re-export Prisma types for convenience
export * from '@/generated/client';

// Define the shape of a Timesheet with its relations included
export type TimesheetWithDetails = Prisma.TimesheetGetPayload<{
    include: {
        entries: {
            include: {
                project: {
                    include: {
                        customer: true;
                    };
                };
            };
        };
        user: {
            include: {
                role: true;
            };
        };
    };
}>;

export type TimesheetEntryWithProject = Prisma.TimesheetEntryGetPayload<{
    include: {
        project: {
            include: {
                customer: true;
            };
        };
    };
}>;

export enum TimesheetStatus {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}

/** Shared type for a Task with its project and assignee relations. */
export interface TaskWithDetails {
    id: string;
    title: string;
    description: string | null;
    status: string;
    priority: string;
    dueDate: Date | null;
    createdAt: Date;
    assignedTo: { id: string; name: string | null };
    project: {
        id: string;
        name: string;
        customer: { name: string } | null;
    };
}

/** Generic server action response type — replaces `any` for prevState params. */
export type ActionState = {
    message?: string;
    error?: string;
    errors?: Record<string, string[]>;
} | null;
