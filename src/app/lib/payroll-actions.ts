'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { getCurrentUser } from './session';
import { startOfMonth, endOfMonth, getDaysInMonth, startOfDay } from 'date-fns';
import { PayrollService } from '@/services/payroll-service';

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

    const monthStr = `${year}-${month.padStart(2, '0')}`;
    const startDate = startOfMonth(new Date(year, parseInt(month) - 1));
    const endDate = endOfMonth(startDate);
    const totalDays = getDaysInMonth(startDate);

    try {
        const employees = await prisma.user.findMany({
            include: { salaryStructure: true }
        });

        let processedCount = 0;

        for (const emp of employees) {
            if (!emp.salaryStructure) continue;

            const { presentDays, absentDays } = await PayrollService.calculateAttendanceStats(
                emp.id, startDate, endDate, totalDays
            );

            const components = PayrollService.calculateSalaryComponents(
                emp.salaryStructure, totalDays, absentDays
            );

            await prisma.payroll.upsert({
                where: { userId_month: { userId: emp.id, month: monthStr } },
                create: {
                    userId: emp.id,
                    month: monthStr,
                    year,
                    monthNumber: parseInt(month),
                    basic: emp.salaryStructure.basic,
                    hra: emp.salaryStructure.hra,
                    allowances: emp.salaryStructure.allowances,
                    grossEarnings: components.grossEarnings,
                    pf: emp.salaryStructure.pf,
                    pt: emp.salaryStructure.pt,
                    deductions: emp.salaryStructure.deductions,
                    totalDeductions: components.totalDeductions,
                    netSalary: components.netSalary,
                    totalDays,
                    presentDays,
                    absentDays,
                    lopDays: components.lopDays,
                    lopAmount: components.lopAmount,
                    status: 'DRAFT'
                },
                update: {
                    ...components,
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
