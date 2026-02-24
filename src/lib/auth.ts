import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from '@/lib/schemas';
import { authConfig } from '@/auth.config';
import prisma from "@/lib/db"
import bcrypt from "bcryptjs"

async function getUser(email: string) {
    try {
        const user = await prisma.user.findUnique({
            where: { email },
            include: { role: true, branch: true },
        })
        return user
    } catch (error) {
        console.error("Failed to fetch user:", error)
        throw new Error("Failed to fetch user.")
    }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    callbacks: {
        ...authConfig.callbacks,
        async jwt({ token, trigger }) {
            if (!token.sub) return token

            // Always refresh role/branch from DB on sign-in or token rotation,
            // so role changes in the DB take effect without requiring a full logout.
            if (token.email && (trigger === 'signIn' || trigger === 'update' || !token.role)) {
                const dbUser = await getUser(token.email);
                if (dbUser) {
                    token.id = dbUser.id
                    token.role = dbUser.role
                    token.branch = dbUser.branch?.name || dbUser.branchLegacy
                    token.branchId = dbUser.branchId
                    token.image = dbUser.image
                }
            }

            return token
        },
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = LoginSchema.safeParse(credentials)

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data
                    const user = await getUser(email)
                    if (!user) return null
                    const passwordsMatch = await bcrypt.compare(password, user.password)

                    if (passwordsMatch) {
                        return {
                            ...user,
                            branch: user.branch?.name || user.branchLegacy || null,
                            branchId: user.branchId,
                        }
                    }
                }

                console.log("Invalid credentials")
                return null
            },
        }),
    ],
})
