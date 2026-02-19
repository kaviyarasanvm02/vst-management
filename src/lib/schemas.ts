import { z } from 'zod';

export const LoginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const RegisterSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export const CreateTimesheetSchema = z.object({
    date: z.string(),
    projectName: z.string().min(1, "Project name is required"),
    description: z.string().min(1, "Description is required"),
    activity: z.string().optional(),
    location: z.string().optional(),
    hours: z.coerce.number().min(0.1, "Hours must be at least 0.1")
});

export const TimesheetEntrySchema = z.object({
    projectId: z.string(),
    description: z.string(),
    hours: z.coerce.number().min(0.1),
});

export const CreateTaskSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    description: z.string().optional(),
    projectId: z.string().min(1, "Project is required"),
    assignedToId: z.string().min(1, "Assignee is required"),
    dueDate: z.string().optional(),
    priority: z.enum(['LOW', 'MEDIUM', 'HIGH']).default('MEDIUM'),
});

export const LeaveSchema = z.object({
    date: z.string().min(1, "Date is required"),
    type: z.enum(['LEAVE', 'HOLIDAY', 'SICK']),
    reason: z.string().optional(),
});

export const UpdateProfileSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    currentPassword: z.string().optional(),
    newPassword: z.string().min(6, "Password must be at least 6 characters").optional(),
}).refine(
    data => !data.newPassword || !!data.currentPassword,
    { message: "Current password is required to set a new password", path: ["currentPassword"] }
);
