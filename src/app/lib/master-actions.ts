'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { auth } from '@/lib/auth';
import { createError } from '@/lib/api';

// ─── Auth Guard ───────────────────────────────────────────────────────────────
async function requireAdmin() {
    const session = await auth();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((session?.user as any)?.role?.code !== 'ADMIN') {
        throw new Error('Unauthorized');
    }
}

// ─── CUSTOMERS ────────────────────────────────────────────────────────────────
export async function fetchCustomers() {
    try {
        return await prisma.customer.findMany({ orderBy: { name: 'asc' } });
    } catch { return []; }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createCustomer(prevState: any, formData: FormData) {
    try { await requireAdmin(); } catch { return createError('Unauthorized'); }

    const code = formData.get('code') as string;
    const name = formData.get('name') as string;
    if (!code || !name) return createError('Code and Name are required.');

    try {
        await prisma.customer.create({
            data: {
                code: code.trim().toUpperCase(),
                name: name.trim(),
                address: formData.get('address') as string || undefined,
                remarks: formData.get('remarks') as string || undefined,
                contactPerson: formData.get('contactPerson') as string || undefined,
                phone: formData.get('phone') as string || undefined,
                email: formData.get('email') as string || undefined,
            }
        });
        revalidatePath('/admin/master');
        return { message: 'Customer created successfully', success: true };
    } catch (e: unknown) {
        const msg = (e as { code?: string })?.code === 'P2002' ? 'Customer code already exists.' : 'Database error.';
        return createError(msg);
    }
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export async function fetchProjectsWithDetails() {
    try {
        return await prisma.project.findMany({
            include: { customer: true, manager: true, teamMembers: true },
            orderBy: { name: 'asc' }
        });
    } catch { return []; }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createProject(prevState: any, formData: FormData) {
    try { await requireAdmin(); } catch { return createError('Unauthorized'); }

    const code = formData.get('code') as string;
    const name = formData.get('name') as string;
    if (!code || !name) return createError('Code and Name are required.');

    const teamMembersRaw = formData.getAll('teamMembers') as string[];

    try {
        await prisma.project.create({
            data: {
                code: code.trim().toUpperCase(),
                name: name.trim(),
                customerId: formData.get('customerId') as string || undefined,
                managerId: formData.get('managerId') as string || undefined,
                remarks: formData.get('remarks') as string || undefined,
                startDate: formData.get('startDate') ? new Date(formData.get('startDate') as string) : undefined,
                endDate: formData.get('endDate') ? new Date(formData.get('endDate') as string) : undefined,
                teamMembers: teamMembersRaw.length > 0
                    ? { connect: teamMembersRaw.map(id => ({ id })) }
                    : undefined,
            }
        });
        revalidatePath('/admin/master');
        return { message: 'Project created successfully', success: true };
    } catch (e: unknown) {
        const msg = (e as { code?: string })?.code === 'P2002' ? 'Project code already exists.' : 'Database error.';
        return createError(msg);
    }
}

// ─── ROLES ────────────────────────────────────────────────────────────────────
export async function fetchRoles() {
    try {
        return await prisma.role.findMany({ orderBy: { name: 'asc' } });
    } catch { return []; }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createRole(prevState: any, formData: FormData) {
    try { await requireAdmin(); } catch { return createError('Unauthorized'); }

    const code = formData.get('code') as string;
    const name = formData.get('name') as string;
    if (!code || !name) return createError('Code and Name are required.');

    try {
        await prisma.role.create({
            data: {
                code: code.trim().toUpperCase(),
                name: name.trim(),
                remarks: formData.get('remarks') as string || undefined,
            }
        });
        revalidatePath('/admin/master');
        return { message: 'Role created successfully', success: true };
    } catch (e: unknown) {
        const msg = (e as { code?: string })?.code === 'P2002' ? 'Role code already exists.' : 'Database error.';
        return createError(msg);
    }
}

// ─── TEAM USERS ───────────────────────────────────────────────────────────────
export async function fetchAllUsers() {
    try {
        return await prisma.user.findMany({
            include: { role: true },
            orderBy: { name: 'asc' }
        });
    } catch { return []; }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createUser(prevState: any, formData: FormData) {
    try { await requireAdmin(); } catch { return createError('Unauthorized'); }

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    if (!name || !email) return createError('Name and Email are required.');

    const bcrypt = await import('bcryptjs');
    const defaultPassword = await bcrypt.hash('Password@123', 10);

    try {
        await prisma.user.create({
            data: {
                code: formData.get('code') as string || undefined,
                name: name.trim(),
                email: email.trim().toLowerCase(),
                password: defaultPassword,
                roleId: formData.get('roleId') as string || undefined,
                branch: formData.get('branch') as string || undefined,
            }
        });
        revalidatePath('/admin/master');
        return { message: 'User created successfully (default password: Password@123)', success: true };
    } catch (e: unknown) {
        const msg = (e as { code?: string })?.code === 'P2002' ? 'Email or code already exists.' : 'Database error.';
        return createError(msg);
    }
}
