const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();
async function main() {
    const password = await bcrypt.hash('password123', 10);
    // 0. Create Roles
    const adminRole = await prisma.role.upsert({
        where: { code: 'ADMIN' },
        update: {},
        create: { code: 'ADMIN', name: 'Administrator', remarks: 'System Admin' }
    });
    const employeeRole = await prisma.role.upsert({
        where: { code: 'EMPLOYEE' },
        update: {},
        create: { code: 'EMPLOYEE', name: 'Employee', remarks: 'Standard Employee' }
    });
    const userRole = await prisma.role.upsert({
        where: { code: 'USER' },
        update: {},
        create: { code: 'USER', name: 'User', remarks: 'Basic User' }
    });
    // 1. Create Projects
    const projects = await Promise.all([
        prisma.project.upsert({
            where: { code: 'PROJ-001' },
            update: {},
            create: {
                id: 'proj-1',
                code: 'PROJ-001',
                name: 'Internal Operations',
                isActive: true
            }
        }),
        prisma.project.upsert({
            where: { code: 'PROJ-002' },
            update: {},
            create: {
                id: 'proj-2',
                code: 'PROJ-002',
                name: 'Client X Website',
                isActive: true
            }
        }),
        prisma.project.upsert({
            where: { code: 'PROJ-003' },
            update: {},
            create: {
                id: 'proj-3',
                code: 'PROJ-003',
                name: 'Mobile App Dev',
                isActive: true
            }
        })
    ]);
    console.log('Projects created:', projects.length);
    // 2. Create Users
    const admin = await prisma.user.upsert({
        where: { email: 'admin@vedhasoft.com' },
        update: {},
        create: {
            email: 'admin@vedhasoft.com',
            name: 'Admin User',
            password,
            roleId: adminRole.id, // Connect to role
            branch: 'Bangalore',
        },
    });
    const employeesData = [
        { email: 'employee@vedhasoft.com', name: 'Employee User', branch: 'Kalaiyarkovil' },
        { email: 'alice@vedhasoft.com', name: 'Alice Smith', branch: 'Chennai' },
        { email: 'bob@vedhasoft.com', name: 'Bob Jones', branch: 'Bangalore' },
        { email: 'charlie@vedhasoft.com', name: 'Charlie Brown', branch: 'Mumbai' },
        { email: 'david@vedhasoft.com', name: 'David Lee', branch: 'Delhi' },
    ];
    const employees = [];
    for (const emp of employeesData) {
        const user = await prisma.user.upsert({
            where: { email: emp.email },
            update: {},
            create: {
                email: emp.email,
                name: emp.name,
                password,
                roleId: employeeRole.id, // Connect to role
                branch: emp.branch,
            },
        });
        employees.push(user);
    }
    console.log('Employees created:', employees.length);
    // 3. Create Timesheets
    // Helper to create timesheet
    const createTimesheetsForUser = async (user, month, year, count) => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let i = 1; i <= count; i++) {
            // Random day
            const day = Math.floor(Math.random() * daysInMonth) + 1;
            const date = new Date(year, month, day);
            // Random hours
            const hours = 4 + Math.random() * 5; // 4 to 9 hours
            // Check if exists
            const existing = await prisma.timesheet.findFirst({
                where: { userId: user.id, date: date }
            });
            if (existing)
                continue;
            const timesheet = await prisma.timesheet.create({
                data: {
                    userId: user.id,
                    date: date,
                    status: Math.random() > 0.7 ? 'APPROVED' : (Math.random() > 0.4 ? 'PENDING' : 'REJECTED'),
                    totalHours: hours
                }
            });
            await prisma.timesheetEntry.create({
                data: {
                    timesheetId: timesheet.id,
                    projectId: projects[Math.floor(Math.random() * projects.length)].id,
                    description: 'Worked on feature implementation',
                    activity: 'Development',
                    location: 'Office',
                    hours: hours
                }
            });
        }
    };
    // Generate data
    // Jan 2026
    for (const emp of employees) {
        await createTimesheetsForUser(emp, 0, 2026, 15); // 15 entries in Jan
    }
    // Feb 2026 (Current)
    for (const emp of employees) {
        await createTimesheetsForUser(emp, 1, 2026, 8); // 8 entries in Feb
    }
    // Dec 2025
    for (const emp of employees) {
        await createTimesheetsForUser(emp, 11, 2025, 10); // 10 entries in Dec 25
    }
    console.log('Seeding completed!');
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        // await prisma.$disconnect()
        // process.exit(1)
    });
