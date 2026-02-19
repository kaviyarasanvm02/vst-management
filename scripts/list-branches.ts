
import { loadEnvConfig } from '@next/env';
import { PrismaClient } from '../src/generated/client';

loadEnvConfig(process.cwd());

const prisma = new PrismaClient();

async function main() {
    console.log('--- Active Branches ---');
    const branches = await prisma.branch.findMany({
        where: { isActive: true },
    });

    if (branches.length === 0) {
        console.log('No active branches found.');
    } else {
        console.table(branches.map(b => ({
            Name: b.name,
            Latitude: b.latitude,
            Longitude: b.longitude,
            Radius: b.radius + 'm',
            Address: b.address ? b.address.substring(0, 50) + '...' : 'N/A'
        })));
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
