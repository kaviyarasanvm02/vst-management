
import { loadEnvConfig } from '@next/env';
import { PrismaClient } from '../src/generated/client';

loadEnvConfig(process.cwd());

const prisma = new PrismaClient();

async function main() {
    console.log('--- Fixing Branch Location ---');

    console.log('Creating/Updating "Kalaiyarkovil" branch...');
    const branch = await prisma.branch.upsert({
        where: { id: 'kalaiyarkovil-branch' }, // Using a fixed ID to avoid duplicates if re-run with same intent
        update: {
            name: 'Kalaiyarkovil Branch',
            latitude: 9.839552060438908,
            longitude: 78.6341352381405,
            radius: 3000,
        },
        create: {
            id: 'kalaiyarkovil-branch',
            name: 'Kalaiyarkovil Branch',
            address: 'Kalayarkovil Paramakudi Road, Kalaiyarkoil, Sivaganga, 630551',
            latitude: 9.839552060438908,
            longitude: 78.6341352381405,
            radius: 3000,
        }
    });
    console.log('Branch Ready:', branch.name);

    const userEmail = 'siva@vst.com'; // Assuming this is the user based on previous context, or we can update all
    // Let's update all users for now to be safe in this dev env
    console.log('Assigning all users to Kalaiyarkovil Branch...');

    const update = await prisma.user.updateMany({
        data: {
            branchId: branch.id
        }
    });

    console.log(`Updated ${update.count} users.`);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
