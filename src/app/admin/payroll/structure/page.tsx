import { fetchAllUsers } from '@/app/lib/user-actions';
import prisma from '@/lib/db'; // Direct DB access for salary structure
import SalaryStructureClient from './client'; // Client component for interactivity

export default async function SalaryStructurePage() {
    // We need users with their salary structure
    const users = await prisma.user.findMany({
        // where: { isActive: true }, // Removed as not in schema yet
        include: {
            salaryStructure: true,
            role: true,
            branch: true
        },
        orderBy: { name: 'asc' }
    });

    return (
        <SalaryStructureClient users={users} />
    );
}
