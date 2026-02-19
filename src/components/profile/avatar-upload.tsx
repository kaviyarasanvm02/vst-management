'use client';

import { useRef, useState, useTransition } from 'react';
import Image from 'next/image';
import { CameraIcon, ArrowUpTrayIcon } from '@heroicons/react/24/solid';
import { uploadAvatar } from '@/app/lib/profile-actions';
import toast from 'react-hot-toast';

interface AvatarUploadProps {
    name: string | null;
    image: string | null;
}

export function AvatarUpload({ name, image }: AvatarUploadProps) {
    const [preview, setPreview] = useState<string | null>(image);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isPending, startTransition] = useTransition();
    const inputRef = useRef<HTMLInputElement>(null);

    const initials = name?.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase() || '?';

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        // Instant local preview
        const url = URL.createObjectURL(file);
        setPreview(url);
        setSelectedFile(file);
    }

    function handleUpload() {
        if (!selectedFile) return;

        startTransition(async () => {
            const fd = new FormData();
            fd.append('image', selectedFile);
            const result = await uploadAvatar(fd);

            if (result.error) {
                toast.error(result.error);
                // Revert preview if upload failed
                setPreview(image);
                setSelectedFile(null);
            } else {
                toast.success('Profile photo updated ✓');
                setSelectedFile(null);
                // Keep preview as-is (the blob URL keeps showing until a page refresh)
            }
        });
    }

    return (
        <div className="flex items-center gap-5">
            {/* Avatar circle */}
            <div className="relative shrink-0 group">
                <div className="h-20 w-20 rounded-full overflow-hidden ring-4 ring-white shadow-md bg-indigo-100 flex items-center justify-center">
                    {preview ? (
                        <Image
                            src={preview}
                            alt={name || 'Avatar'}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                            unoptimized={preview.startsWith('blob:')}
                        />
                    ) : (
                        <span className="text-indigo-700 font-bold text-2xl select-none">{initials}</span>
                    )}
                </div>

                {/* Camera overlay — triggers file picker */}
                <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    className="absolute bottom-0 right-0 h-7 w-7 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md hover:bg-indigo-700 transition-colors ring-2 ring-white"
                    title="Change photo"
                >
                    <CameraIcon className="h-3.5 w-3.5" />
                </button>

                {/* Hidden file input */}
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </div>

            {/* Name + role + upload CTA */}
            <div className="flex flex-col gap-1 min-w-0">
                <p className="text-lg font-bold text-slate-900 truncate">{name || 'No name set'}</p>

                {selectedFile ? (
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-slate-500 truncate max-w-[140px]">{selectedFile.name}</span>
                        <button
                            type="button"
                            onClick={handleUpload}
                            disabled={isPending}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700 transition-colors disabled:opacity-60 shadow-sm shrink-0"
                        >
                            {isPending ? (
                                <>
                                    <span className="h-3 w-3 rounded-full border-2 border-white border-t-transparent animate-spin" />
                                    Uploading…
                                </>
                            ) : (
                                <>
                                    <ArrowUpTrayIcon className="h-3 w-3" />
                                    Upload
                                </>
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={() => { setPreview(image); setSelectedFile(null); }}
                            className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                ) : (
                    <button
                        type="button"
                        onClick={() => inputRef.current?.click()}
                        className="text-xs text-indigo-600 hover:text-indigo-800 font-medium mt-0.5 text-left transition-colors"
                    >
                        Change photo
                    </button>
                )}
                <p className="text-xs text-slate-400">JPEG, PNG or WebP · max 2 MB</p>
            </div>
        </div>
    );
}
