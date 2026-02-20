
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const users = await prisma.user.findMany({
        include: { role: true }
    });
    console.log('Users and Roles:');
    users.forEach(u => {
        console.log(`${u.name} (${u.email}) - Role: ${u.role ? u.role.code : 'NULL'} (${u.role ? u.role.name : 'NULL'})`);
    });
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());
