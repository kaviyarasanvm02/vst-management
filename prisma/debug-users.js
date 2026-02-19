const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('Fetching users...');
    const admin = await prisma.user.findUnique({
        where: { email: 'admin@vedhasoft.com' },
        select: { id: true, name: true, email: true, role: true }
    });
    console.log('Admin User:', admin);
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
