import {
    fetchCustomers,
    fetchProjectsWithDetails,
    fetchRoles,
    fetchAllUsers,
} from '@/app/lib/master-actions';
import MasterDataClient from '@/components/master/master-data-client';

export default async function Page() {
    const [customers, projects, roles, users] = await Promise.all([
        fetchCustomers(),
        fetchProjectsWithDetails(),
        fetchRoles(),
        fetchAllUsers(),
    ]);

    return (
        <div className="w-full max-w-7xl mx-auto space-y-6 pb-8">
            <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Master Data</h1>
                <p className="text-slate-500">Manage customers, projects, roles, and team members.</p>
            </div>

            <MasterDataClient
                customers={customers}
                roles={roles}
                users={users}
            />
        </div>
    );
}
