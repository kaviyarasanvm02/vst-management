import { PrismaClient } from '../generated/client'

const prismaClientSingleton = () => {
    console.log('Initializing Prisma Client...', new Date().toISOString())
    return new PrismaClient()
}

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
