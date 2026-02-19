const { PrismaClient } = require('../src/generated/client')
const prisma = new PrismaClient()

async function main() {
    // 1. Create a Branch (Example: "Head Office" at some coordinates)
    // Using coordinates for a generic location, e.g., a known place or just 0,0 for testing if mocking
    // Let's use coordinates for "Bangalore" as an example or the user's current location if we knew it.
    // For now, I'll put a placeholder. The user might need to update this to their real location to test.
    // Latitude: 12.9716, Longitude: 77.5946 (Bangalore)
    const branch = await prisma.branch.upsert({
        where: { name: 'Head Office' },
        update: {},
        create: {
            name: 'Head Office',
            address: 'Bangalore, India',
            latitude: 12.9716,
            longitude: 77.5946,
            radius: 1000,
        },
    })
    console.log('Branch created:', branch)

    // 2. Assign this branch to the first user found (or specific email if known)
    const user = await prisma.user.findFirst()
    if (user) {
        await prisma.user.update({
            where: { id: user.id },
            data: { branchId: branch.id },
        })
        console.log(`Assigned '${branch.name}' to user '${user.email}'`)
    } else {
        console.log('No user found to assign branch.')
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
