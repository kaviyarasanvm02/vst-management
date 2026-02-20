const { PrismaClient } = require('./src/generated/client');
const path = require('path');
console.log('Client commonjs path:', require.resolve('./src/generated/client'));
const prisma = new PrismaClient();
console.log('Available models:', Object.keys(prisma).filter(k => !k.startsWith('_') && !k.startsWith('$')));
prisma.$disconnect();
