/**
 * Central permissions utility.
 * All role-based checks should go through here so there is
 * exactly one place to update if role codes change.
 */

export const ROLES = {
    ADMIN: 'ADMIN',
    EMPLOYEE: 'EMPLOYEE',
} as const;

export type RoleCode = keyof typeof ROLES;

/** Returns true if the given role code belongs to an admin. */
export function isAdminRole(code?: string | null): boolean {
    return code?.toUpperCase() === ROLES.ADMIN;
}

/** Returns true if the session user is an admin.
 *  Accepts the partial user object from next-auth session. */
export function isAdminUser(user?: { role?: { code?: string | null } | null } | null): boolean {
    return isAdminRole(user?.role?.code);
}
