import { createTimesheet, fetchDashboardStats } from './timesheet-actions';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import prisma from '@/lib/db';
import { auth } from '@/lib/auth';

// Mock dependencies
vi.mock('@/lib/db', () => ({
    default: {
        project: {
            findFirst: vi.fn(),
            create: vi.fn(),
            count: vi.fn(),
        },
        timesheet: {
            findFirst: vi.fn(),
            create: vi.fn(),
            update: vi.fn(),
            findMany: vi.fn(),
            count: vi.fn(),
            aggregate: vi.fn(),
        },
        timesheetEntry: {
            create: vi.fn(),
            findMany: vi.fn(),
        },
    },
}));

vi.mock('@/lib/auth', () => ({
    auth: vi.fn(),
}));

vi.mock('next/cache', () => ({
    revalidatePath: vi.fn(),
}));

vi.mock('next/navigation', () => ({
    redirect: vi.fn(),
}));

describe('Timesheet Actions', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('createTimesheet', () => {
        it('should return error if not authenticated', async () => {
            (auth as any).mockResolvedValue(null);
            const formData = new FormData();
            const result = await createTimesheet(null, formData);
            expect(result.message).toContain('Not authenticated');
        });

        it('should return validation error for missing fields', async () => {
            (auth as any).mockResolvedValue({ user: { id: 'user1' } });
            const formData = new FormData();
            // Missing required fields
            const result = await createTimesheet(null, formData);
            expect(result.message).toContain('Missing Fields');
        });
    });

    describe('fetchDashboardStats', () => {
        it('should return null if not authenticated', async () => {
            (auth as any).mockResolvedValue(null);
            const result = await fetchDashboardStats();
            expect(result).toBeNull();
        });

        it('should return stats for authenticated user', async () => {
            (auth as any).mockResolvedValue({ user: { id: 'user1', role: { code: 'USER' } } });

            // Mock Prisma responses
            (prisma.project.count as any).mockResolvedValue(5);
            (prisma.timesheet.findMany as any).mockResolvedValue([]); // Recent activity
            (prisma.timesheet.aggregate as any).mockResolvedValue({ _sum: { totalHours: 20 } });

            const result = await fetchDashboardStats();

            expect(result).not.toBeNull();
            expect(result?.activeProjects).toBe(5);
            expect(result?.totalHoursThisWeek).toBe(20);
        });
    });
});
