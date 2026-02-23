import { AttendanceRequest, User } from '@/generated/client';

export type AttendanceRequestWithUser = AttendanceRequest & {
    user: User;
};
