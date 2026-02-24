import SideNav from '@/components/dashboard/sidenav';
import BottomNav from '@/components/dashboard/bottom-nav';
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
            <div className="flex-grow p-4 md:p-12 pb-24 md:pb-0 overflow-y-auto">
                <div className="hidden md:flex items-center justify-between mb-6">
                    <Breadcrumbs />
                </div>
                {children}
            </div>
            <BottomNav />
        </div>
    );
}
