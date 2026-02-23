
import { loadEnvConfig } from '@next/env';
import { PrismaClient } from '@prisma/client';

loadEnvConfig(process.cwd());

const prisma = new PrismaClient();

const SHIFT_START = "09:00";
const SHIFT_END = "18:00";

async function main() {
    console.log(`--- Setting Shift Times (${SHIFT_START} - ${SHIFT_END}) ---`);

    const result = await prisma.branch.updateMany({
        where: { isActive: true },
        data: {
            shiftStart: SHIFT_START,
            shiftEnd: SHIFT_END,
        },
    });

    console.log(`Updated ${result.count} branches with default shift times.`);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
