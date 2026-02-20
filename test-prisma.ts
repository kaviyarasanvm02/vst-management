import prisma from './src/lib/db';

async function main() {
    console.log('Prisma models:', Object.keys(prisma).filter(k => !k.startsWith('_') && !k.startsWith('$')));
    try {
        console.log('Testing prisma.payroll...');
        const count = await prisma.payroll.count();
        console.log('Payroll count:', count);
    } catch (e) {
        console.error('Error accessing prisma.payroll:', e.message);
    }
}

main().catch(console.error);
