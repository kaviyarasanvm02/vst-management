import { AttendanceRequest, User } from '@prisma/client';

export type AttendanceRequestWithUser = AttendanceRequest & {
    user: User;
};
