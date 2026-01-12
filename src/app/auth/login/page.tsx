import LoginForm from '@/components/login-form';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Login',
};

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex w-full items-center justify-center rounded-lg bg-white p-3 border border-gray-200 mb-4 h-32">
                    <Image
                        src="/vedhasoft_technologies_logo.jpg"
                        alt="Vedhasoft Logo"
                        width={200}
                        height={80}
                        className="object-contain"
                        priority
                    />
                </div>
                <LoginForm />
            </div>
        </main>
    );
}
