import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import SideNav from '@/components/dashboard/sidenav';
import Breadcrumbs from '@/components/ui/breadcrumbs';

export default async function Layout({ children }: { children: React.ReactNode }) {
    const session = await auth();

    // Guard: only admins may access /admin routes
    const roleCode = (session?.user as any)?.role?.code?.toUpperCase();
    if (!session || roleCode !== 'ADMIN') {
        redirect('/dashboard');
    }

    const userName = session.user?.name ?? 'Admin';
    const roleName = (session.user as any)?.role?.name ?? 'Admin';
    const userImage = session.user?.image;

    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav isAdmin={true} userName={userName} roleName={roleName} userImage={userImage} />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                <Breadcrumbs />
                {children}
            </div>
        </div>
    );
}
