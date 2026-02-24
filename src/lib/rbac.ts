import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

/**
 * Checks if the current user has the ADMIN role.
 * Can be used in Server Components or Server Actions.
 */
export async function isAdmin() {
    const session = await auth();
    return session?.user?.role?.code === "ADMIN";
}

/**
 * Helper to ensure the user is an admin, otherwise redirects or throws.
 * Good for the top of Server Actions or Server Components.
 */
export async function ensureAdmin() {
    const session = await auth();
    if (session?.user?.role?.code !== "ADMIN") {
        redirect("/dashboard");
    }
    return session.user;
}

/**
 * Checks if a user has a specific role by code.
 */
export function hasRole(session: any, roleCode: string) {
    return session?.user?.role?.code === roleCode;
}
