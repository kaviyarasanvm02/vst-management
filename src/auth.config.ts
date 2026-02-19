
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/auth/login',
    },
    callbacks: {
        async session({ session, token }) {
            if (token.sub && session.user) {
                session.user.id = token.sub
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                session.user.role = token.role as any
                session.user.branch = token.branch as string | null
                session.user.image = token.image as string | null // Pass image to session
            }
            return session
        },
        async jwt({ token }) {
            return token
        },
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            const isOnAdmin = nextUrl.pathname.startsWith('/admin');

            if (isOnAdmin) {
                if (!isLoggedIn) return false;
                // Strict Admin Check
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const userRole = auth?.user?.role?.code;
                if (userRole !== 'ADMIN') {
                    // Redirect to dashboard if not admin
                    return Response.redirect(new URL('/dashboard', nextUrl));
                }
                return true;
            }

            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                // Redirect logged-in users away from login/signup to dashboard
                if (nextUrl.pathname.startsWith('/auth')) {
                    return Response.redirect(new URL('/dashboard', nextUrl));
                }
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
