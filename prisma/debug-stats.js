const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function fetchStats(userId, role) {
    console.log(`\n--- Fetching Stats for ${role} (${userId}) ---`);
    const isAdmin = role === 'ADMIN';
    const userFilter = isAdmin ? {} : { userId };

    const totalHours = await prisma.timesheet.findMany({
        where: userFilter,
        select: { totalHours: true }
    });
    const total = totalHours.reduce((acc, curr) => acc + curr.totalHours, 0);
    console.log(`Total Hours: ${total}`);

    const recent = await prisma.timesheet.findMany({
        where: userFilter,
        include: { user: true },
        orderBy: { date: 'desc' },
        take: 3
    });
    console.log('Recent Activity:');
    recent.forEach(t => console.log(`- ${t.date.toISOString().split('T')[0]}: ${t.totalHours}h by ${t.user.name}`));
}

async function main() {
    // 1. Get Admin User
    const admin = await prisma.user.findUnique({ where: { email: 'admin@vedhasoft.com' } });

    // 2. Get Employee User (if any)
    const employee = await prisma.user.findFirst({ where: { role: 'EMPLOYEE' } });

    if (admin) await fetchStats(admin.id, admin.role);
    if (employee) await fetchStats(employee.id, employee.role);
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
