'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { getCurrentUser } from './session';
import { startOfMonth, endOfMonth, getDaysInMonth } from 'date-fns';

// --- Types ---
export type SalaryStructureData = {
    basic: number;
    hra: number;
    allowances: number;
    pf: number;
    pt: number;
    deductions: number;
};

// --- Salary Structure Actions ---

export async function getSalaryStructure(userId: string) {
    const user = await getCurrentUser();
    if (!user || user.role?.code !== 'ADMIN') return null;

    return await prisma.salaryStructure.findUnique({
        where: { userId },
    });
}

export async function updateSalaryStructure(userId: string, data: SalaryStructureData) {
    const user = await getCurrentUser();
    if (!user || user.role?.code !== 'ADMIN') return { error: 'Unauthorized' };

    try {
        const netSalary = data.basic + data.hra + data.allowances - data.pf - data.pt - data.deductions;

        await prisma.salaryStructure.upsert({
            where: { userId },
            create: {
                userId,
                ...data,
                netSalary,
            },
            update: {
                ...data,
                netSalary,
            },
        });

        revalidatePath('/admin/payroll/structure');
        return { success: 'Salary structure updated successfully.' };
    } catch (error) {
        console.error('Update Salary Structure Error:', error);
        return { error: 'Failed to update salary structure.' };
    }
}

// --- Payroll Generation Actions ---

export async function calculatePayroll(month: string, year: number) {
    const user = await getCurrentUser();
    if (!user || user.role?.code !== 'ADMIN') return { error: 'Unauthorized' };

    // Format month for DB: "YYYY-MM"
    const monthStr = `${year}-${month.padStart(2, '0')}`;
    const startDate = startOfMonth(new Date(year, parseInt(month) - 1));
    const endDate = endOfMonth(startDate);
    const totalDays = getDaysInMonth(startDate);

    try {
        // 1. Get all employees (excluding Admins maybe? No, paying Admins is fine too)
        const employees = await prisma.user.findMany({
            // where: { isActive: true }, 
            include: { salaryStructure: true }
        });

        let processedCount = 0;

        for (const emp of employees) {
            if (!emp.salaryStructure) continue; // Skip if no salary structure defined

            // 2. Get Attendance Stats
            const attendance = await prisma.attendance.findMany({
                where: {
                    userId: emp.id,
                    date: {
                        gte: startDate,
                        lte: endDate
                    }
                }
            });

            // Count days (Simplified Logic)
            // Present, Half Day, etc.
            let presentDays = 0;
            attendance.forEach(a => {
                if (a.status === 'PRESENT') presentDays += 1;
                else if (a.status === 'HALF_DAY') presentDays += 0.5;
                // Add logic for LEAVE/HOLIDAY if integrated
            });

            // Calculate LOP (Loss of Pay)
            // Assuming default working days = totalDays - Weekends? 
            // For simplicity: Absent = TotalDays - PresentDays. 
            // Better: We should check Leaves.
            const absentDays = Math.max(0, totalDays - presentDays); // Very crude. 
            // In a real system, we'd check holidays + weekends.
            // Let's assume standard month is 30 days for calculation or use actual totalDays.

            if (!emp.salaryStructure) continue;
            const structure = emp.salaryStructure;
            const gross = structure.basic + structure.hra + structure.allowances;
            const perDaySalary = gross / totalDays;

            const lopAmount = absentDays * perDaySalary;

            const grossEarnings = gross - lopAmount;
            const totalDeductions = structure.pf + structure.pt + structure.deductions;
            const netSalary = grossEarnings - totalDeductions;

            // 3. Create Payroll Record
            await prisma.payroll.upsert({
                where: {
                    userId_month: {
                        userId: emp.id,
                        month: monthStr
                    }
                },
                create: {
                    userId: emp.id,
                    month: monthStr,
                    year,
                    monthNumber: parseInt(month),
                    basic: structure.basic,
                    hra: structure.hra,
                    allowances: structure.allowances,
                    grossEarnings,
                    pf: structure.pf,
                    pt: structure.pt,
                    deductions: structure.deductions,
                    totalDeductions,
                    netSalary,
                    totalDays,
                    presentDays,
                    absentDays,
                    lopDays: absentDays,
                    lopAmount,
                    status: 'DRAFT'
                },
                update: {
                    basic: structure.basic,
                    hra: structure.hra,
                    allowances: structure.allowances,
                    grossEarnings,
                    pf: structure.pf,
                    pt: structure.pt,
                    deductions: structure.deductions,
                    totalDeductions,
                    netSalary,
                    totalDays,
                    presentDays,
                    absentDays,
                    lopDays: absentDays,
                    lopAmount,
                    status: 'DRAFT',
                    generatedAt: new Date()
                }
            });
            processedCount++;
        }

        revalidatePath('/admin/payroll');
        return { success: `Payroll calculated for ${processedCount} employees.` };

    } catch (error) {
        console.error('Calculate Payroll Error:', error);
        return { error: 'Failed to calculate payroll.' };
    }
}

export async function getPayrolls(month: string) {
    const user = await getCurrentUser();
    if (!user || user.role?.code !== 'ADMIN') return [];

    return await prisma.payroll.findMany({
        where: { month },
        include: { user: true },
        orderBy: { user: { name: 'asc' } }
    });
}
