import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <Image
          src="/vedhasoft_technologies_logo.jpg"
          alt="Vedhasoft Logo"
          width={300}
          height={100}
          className="mb-8"
          priority
        />
        <p className="text-lg text-gray-600 max-w-md">
          A simple and efficient way to manage your work hours and timesheets.
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            href="/auth/login"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Log In / Get Started
          </Link>
        </div>
      </div>
    </main>
  );
}
