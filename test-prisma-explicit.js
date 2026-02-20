const { PrismaClient } = require('./src/generated/client');
const prisma = new PrismaClient();
const models = ['payroll', 'attendance', 'leave', 'branch', 'user', 'payrollItem'];
models.forEach(m => {
    console.log(`${m}: ${typeof prisma[m]}`);
});
prisma.$disconnect();
