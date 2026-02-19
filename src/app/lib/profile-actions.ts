'use server';

import prisma from '@/lib/db';
import { auth } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import bcrypt from 'bcryptjs';
import { writeFile, unlink, mkdir } from 'fs/promises';
import path from 'path';

export async function updateProfile(prevState: unknown, formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) return { error: 'Not authenticated' };

    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;

    if (!name?.trim()) return { error: 'Name is required' };

    await prisma.user.update({
        where: { id: session.user.id },
        data: { name: name.trim(), phone: phone?.trim() || null },
    });

    revalidatePath('/dashboard/profile');
    return { success: 'Profile updated successfully' };
}

export async function changePassword(prevState: unknown, formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) return { error: 'Not authenticated' };

    const currentPassword = formData.get('currentPassword') as string;
    const newPassword = formData.get('newPassword') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (!currentPassword || !newPassword || !confirmPassword)
        return { error: 'All fields are required' };

    if (newPassword !== confirmPassword)
        return { error: 'New passwords do not match' };

    if (newPassword.length < 6)
        return { error: 'Password must be at least 6 characters' };

    const user = await prisma.user.findUnique({ where: { id: session.user.id } });
    if (!user) return { error: 'User not found' };

    const isValid = await bcrypt.compare(currentPassword, user.password);
    if (!isValid) return { error: 'Current password is incorrect' };

    const hashed = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({ where: { id: session.user.id }, data: { password: hashed } });

    revalidatePath('/dashboard/profile');
    return { success: 'Password changed successfully' };
}

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_SIZE_BYTES = 2 * 1024 * 1024; // 2 MB
const AVATARS_DIR = path.join(process.cwd(), 'public', 'uploads', 'avatars');

export async function uploadAvatar(formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) return { error: 'Not authenticated' };

    const file = formData.get('image') as File | null;
    if (!file || file.size === 0) return { error: 'No file selected' };

    if (!ALLOWED_TYPES.includes(file.type))
        return { error: 'Only JPEG, PNG, and WebP images are allowed' };

    if (file.size > MAX_SIZE_BYTES)
        return { error: 'File too large — max 2 MB' };

    // Build a unique filename
    const ext = file.type === 'image/webp' ? 'webp' : file.type === 'image/png' ? 'png' : 'jpg';
    const filename = `${session.user.id}_${Date.now()}.${ext}`;
    const filePath = path.join(AVATARS_DIR, filename);
    const publicPath = `/uploads/avatars/${filename}`;

    try {
        // Ensure directory exists
        await mkdir(AVATARS_DIR, { recursive: true });

        // Delete old avatar if one exists
        const existing = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: { image: true },
        });
        if (existing?.image) {
            const oldPath = path.join(process.cwd(), 'public', existing.image);
            await unlink(oldPath).catch(() => { }); // ignore if already deleted
        }

        // Write new file
        const buffer = Buffer.from(await file.arrayBuffer());
        await writeFile(filePath, buffer);

        // Save path to DB
        await prisma.user.update({
            where: { id: session.user.id },
            data: { image: publicPath },
        });

        revalidatePath('/dashboard/profile');
        return { success: 'Profile photo updated', imagePath: publicPath };
    } catch (err) {
        console.error('Avatar upload error:', err);
        return { error: 'Failed to upload image. Please try again.' };
    }
}

export async function fetchCurrentUser() {
    const session = await auth();
    if (!session?.user?.id) return null;

    return prisma.user.findUnique({
        where: { id: session.user.id },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            branch: { select: { name: true } },
            image: true,
            role: { select: { name: true } },
        },
    });
}
