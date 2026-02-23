
import { loadEnvConfig } from '@next/env';
import { PrismaClient } from '@prisma/client';

loadEnvConfig(process.cwd());

const prisma = new PrismaClient();

async function main() {
    console.log('--- Adding New Branches ---');

    const branches = [
        {
            id: 'bangalore-branch',
            name: 'Bangalore Branch',
            address: 'Bangalore, Karnataka, India',
            latitude: 12.9716,
            longitude: 77.5946,
            radius: 3000,
        },
        {
            id: 'hubli-branch',
            name: 'Hubli Branch',
            address: 'Hubli, Karnataka, India',
            latitude: 15.3647,
            longitude: 75.1240,
            radius: 3000,
        }
    ];

    for (const branch of branches) {
        const result = await prisma.branch.upsert({
            where: { id: branch.id },
            update: branch,
            create: branch,
        });
        console.log(`Upserted branch: ${result.name}`);
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
