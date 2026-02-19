'use server';

import { RegisterSchema } from '@/lib/schemas';
import prisma from '@/lib/db';
import bcrypt from 'bcryptjs';
import { createError } from '@/lib/api';
import { redirect } from 'next/navigation';

// RegisterSchema moved to @/lib/schemas

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function registerUser(prevState: any, formData: FormData) {
    const rawData = Object.fromEntries(formData.entries());
    const validatedFields = RegisterSchema.safeParse(rawData);

    if (!validatedFields.success) {
        return createError('Missing Fields. Failed to Register.', validatedFields.error.flatten().fieldErrors);
    }

    const { name, email, password } = validatedFields.data;

    try {
        // Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return {
                message: 'Email already in use.',
            };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Fetch default role
        const employeeRole = await prisma.role.findUnique({
            where: { code: 'EMPLOYEE' }
        });

        if (!employeeRole) {
            return { message: 'System Error: Default role not found.' };
        }

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                roleId: employeeRole.id,
                branch: 'Bangalore', // Default branch
            }
        });

    } catch (error) {
        return createError('Database Error: Failed to Register.');
    }

    redirect('/auth/login?registered=true');
}
