'use server';

import prisma from '@/lib/db';
import { startOfDay, endOfDay } from 'date-fns';
import { getCurrentUser } from './session';

export async function getDailyAttendanceLocations(date: Date) {
    const user = await getCurrentUser();
    if (!user || user.role?.code !== 'ADMIN') {
        return [];
    }

    const start = startOfDay(date);
    const end = endOfDay(date);

    try {
        const attendance = await prisma.attendance.findMany({
            where: {
                date: {
                    gte: start,
                    lte: end,
                },
                clockInLat: { not: null },
                clockInLng: { not: null },
            },
            include: {
                user: {
                    select: {
                        name: true,
                        image: true,
                        role: { select: { name: true } }
                    }
                }
            },
            orderBy: { clockIn: 'desc' }
        });

        return attendance;
    } catch (error) {
        console.error('Error fetching location data:', error);
        return [];
    }
}
