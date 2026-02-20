const { PrismaClient } = require('./src/generated/client');
const prisma = new PrismaClient();

async function main() {
    try {
        // Check if we can count from the new tables
        const payrolls = await prisma.payroll.count();
        const salaryStructures = await prisma.salaryStructure.count();
        console.log(`Payrolls: ${payrolls}, SalaryStructures: ${salaryStructures}`);
        console.log('Schema verification success!');
    } catch (e) {
        console.error('Schema verification failed:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
