import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black p-4">
      <main className="flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
          Event Platform
        </h1>
        <p className="text-4xl text-zinc-600 dark:text-zinc-400 max-w-lg">
          The simple way to manage your events and invitations.
        </p>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}
