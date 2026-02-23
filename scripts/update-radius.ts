
import { loadEnvConfig } from '@next/env';
import { PrismaClient } from '@prisma/client';

loadEnvConfig(process.cwd());

const prisma = new PrismaClient();

const NEW_RADIUS_METERS = 10000; // 10km

async function main() {
    console.log(`--- Updating Branch Radius to ${NEW_RADIUS_METERS}m ---`);

    const result = await prisma.branch.updateMany({
        where: { isActive: true },
        data: {
            radius: NEW_RADIUS_METERS,
        },
    });

    console.log(`Updated ${result.count} branches to ${NEW_RADIUS_METERS}m radius.`);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
