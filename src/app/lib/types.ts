import { AttendanceRequest, User } from '@prisma/client';

export type AttendanceRequestWithUser = AttendanceRequest & {
    user: User;
};

export type ActionResult<T = void> = {
    success?: string;
    error?: string;
    data?: T;
    fieldErrors?: Record<string, string[]>;
};
