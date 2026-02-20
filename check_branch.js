
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.findFirst({
        where: {
            OR: [
                { name: { contains: 'kaviyarasan', mode: 'insensitive' } },
                { email: { contains: 'kaviyarasan', mode: 'insensitive' } }
            ]
        },
        include: { branch: true }
    });

    if (!user) {
        console.log('User not found');
        return;
    }

    console.log('User:', user.name);
    console.log('Assigned Branch:', user.branch ? user.branch.name : user.branchLegacy);

    const attendance = await prisma.attendance.findFirst({
        where: { userId: user.id },
        orderBy: { date: 'desc' }
    });

    console.log('Latest Attendance:', attendance);
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
