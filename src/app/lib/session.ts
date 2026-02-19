import { cache } from 'react';
import { auth } from '@/lib/auth';
import prisma from '@/lib/db';

/**
 * Returns the full DB user for the current request.
 * Wrapped in React.cache() so multiple server actions in the same
 * request share a single Prisma lookup instead of each firing their own.
 */
export const getCurrentUser = cache(async () => {
    const session = await auth();
    if (!session?.user?.email) return null;

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        include: { role: true },
    });

    return user;
});
