'use server';

import prisma from '@/lib/db';
import { auth } from '@/lib/auth';

export async function fetchAllUsers() {
    const session = await auth();
    if (session?.user?.role?.code !== 'ADMIN') {
        return [];
    }

    try {
        const users = await prisma.user.findMany({
            orderBy: {
                name: 'asc'
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                branch: true,
                createdAt: true
            }
        });
        return users;
    } catch (error) {
        console.error('Failed to fetch users:', error);
        return [];
    }
}
