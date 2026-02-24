import prisma from '@/lib/db';
import { startOfMonth, endOfMonth, getDaysInMonth, startOfDay } from 'date-fns';

export class PayrollService {
    /**
     * Calculates detailed attendance stats for an employee for a specific month.
     */
    static async calculateAttendanceStats(userId: string, startDate: Date, endDate: Date, totalDays: number) {
        const attendance = await prisma.attendance.findMany({
            where: { userId, date: { gte: startDate, lte: endDate } }
        });

        const leaves = await prisma.leave.findMany({
            where: { userId, status: 'APPROVED', date: { gte: startDate, lte: endDate } }
        });

        let presentDays = 0;
        let paidDays = 0;

        for (let d = 1; d <= totalDays; d++) {
            const year = startDate.getFullYear();
            const month = startDate.getMonth();
            const currentDate = new Date(year, month, d);
            const dayOfWeek = currentDate.getDay();

            // 1. Weekend Check (Paid non-working days)
            if (dayOfWeek === 0 || dayOfWeek === 6) {
                paidDays += 1;
                continue;
            }

            // 2. Holiday/Approved Leave Check
            const leaveToday = leaves.find((l: any) => startOfDay(l.date).getTime() === startOfDay(currentDate).getTime());
            if (leaveToday) {
                paidDays += 1;
                continue;
            }

            // 3. Attendance Check
            const attendanceToday = attendance.find((a: any) => startOfDay(a.date).getTime() === startOfDay(currentDate).getTime());
            if (attendanceToday) {
                if (['PRESENT', 'LATE', 'AUTO_OUT', 'LEFT_EARLY'].includes(attendanceToday.status)) {
                    presentDays += 1;
                    paidDays += 1;
                } else if (attendanceToday.status === 'HALF_DAY') {
                    presentDays += 0.5;
                    paidDays += 0.5;
                }
            }
        }

        const absentDays = Math.max(0, totalDays - paidDays);
        return { presentDays, paidDays, absentDays };
    }

    /**
     * Calculates payroll components for an employee.
     */
    static calculateSalaryComponents(structure: any, totalDays: number, absentDays: number) {
        const gross = structure.basic + structure.hra + structure.allowances;
        const perDaySalary = gross / totalDays;
        const lopAmount = absentDays * perDaySalary;
        const grossEarnings = gross - lopAmount;
        const totalDeductions = structure.pf + structure.pt + structure.deductions;
        const netSalary = grossEarnings - totalDeductions;

        return {
            grossEarnings,
            totalDeductions,
            netSalary,
            lopAmount,
            lopDays: absentDays
        };
    }
}
