import SideNav from '@/components/dashboard/sidenav';
import Breadcrumbs from '@/components/ui/breadcrumbs';
import { auth } from '@/lib/auth';

export default async function Layout({ children }: { children: React.ReactNode }) {
    const session = await auth();
    const isAdmin = session?.user?.role?.code?.toUpperCase() === 'ADMIN';
    const userName = session?.user?.name ?? 'User';
    const roleName = session?.user?.role?.name ?? 'User';
    const userImage = session?.user?.image;

    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-slate-50">
            <div className="w-full flex-none md:w-64">
                <SideNav isAdmin={isAdmin} userName={userName} roleName={roleName} userImage={userImage} />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                <div className="flex items-center justify-between mb-6">
                    <Breadcrumbs />
                </div>
                {children}
            </div>
        </div>
    );
}
