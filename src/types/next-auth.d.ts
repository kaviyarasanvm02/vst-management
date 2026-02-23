import { DefaultSession } from "next-auth"
import { Role } from '@prisma/client';

declare module "next-auth" {
    interface Session {
        user: {
            role: Role | null
            branch?: string | null
        } & DefaultSession["user"]
    }

    interface User {
        role: Role | null
        branch?: string | null
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role: Role | null
        branch?: string | null
    }
}
