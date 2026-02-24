import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'VST Timesheet',
        short_name: 'VST',
        description: 'Premium Timesheet Management System',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0f172a',
        orientation: 'portrait',
        icons: [
            {
                src: '/icons/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/icons/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'
            },
        ],
        shortcuts: [
            {
                name: 'Log Time',
                short_name: 'Log',
                url: '/dashboard/timesheets/create',
                icons: [{ src: '/icons/icon-192x192.png', sizes: '192x192' }]
            },
            {
                name: 'Attendance',
                short_name: 'Attendance',
                url: '/dashboard/attendance',
                icons: [{ src: '/icons/icon-192x192.png', sizes: '192x192' }]
            },
            {
                name: 'Profile',
                short_name: 'Profile',
                url: '/dashboard/profile',
                icons: [{ src: '/icons/icon-192x192.png', sizes: '192x192' }]
            }
        ]
    };
}
