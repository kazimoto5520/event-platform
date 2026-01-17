import Link from "next/link";
import LandingControls from "@/components/landing-controls";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      {/* top bar */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-black/15 dark:border-white/15">
            <span className="font-mono text-xs">EP</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">Event Platform</p>
            <p className="text-xs text-black/60 dark:text-white/60">QR Access Control</p>
          </div>
        </div>

        <LandingControls />
      </header>

      {/* single screen hero */}
      <main className="mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-6xl items-center px-4 sm:px-6">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2">
          {/* Left */}
          <section className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/15 px-3 py-1 text-xs dark:border-white/15">
              <span className="font-mono">DRAFT → LIVE → COMPLETED</span>
              <span className="text-black/50 dark:text-white/50">•</span>
              <span className="text-black/70 dark:text-white/70">transaction-safe scans</span>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Secure event entry
              <br />
              with QR validation.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-black/70 dark:text-white/70">
              Create events, issue invitations, and validate entry with duplicate scan detection,
              strict state rules, and full audit logs.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/login"
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-90 dark:bg-white dark:text-black"
              >
                Get started
              </Link>

              <Link
                href="/login"
                className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
              >
                Login
              </Link>
            </div>

            <div className="grid gap-2 pt-2 text-sm text-black/60 dark:text-white/60">
              <p>• Roles: Admin, Organizer, Scanner</p>
              <p>• Invitations: VIP / Regular / Staff / Free</p>
              <p>• Scans: atomic validation + audit trail</p>
            </div>
          </section>

          {/* Right (simple preview card) */}
          <section className="w-full">
            <div className="rounded-3xl border border-black/15 p-6 dark:border-white/15">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Live Event</p>
                <span className="rounded-full border border-black/15 px-3 py-1 text-xs font-medium dark:border-white/15">
                  LIVE
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-black/10 p-4 dark:border-white/10">
                  <p className="text-xs text-black/60 dark:text-white/60">Invitation</p>
                  <p className="mt-1 text-sm font-semibold">Jane Doe — VIP</p>
                  <p className="mt-1 font-mono text-xs text-black/60 dark:text-white/60">
                    QR: 6d7aa4e0052c92a3...
                  </p>
                </div>

                <div className="rounded-2xl border border-black/10 p-4 dark:border-white/10">
                  <p className="text-xs text-black/60 dark:text-white/60">Scan Result</p>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm font-semibold">SUCCESS</p>
                    <p className="text-xs text-black/60 dark:text-white/60">checked in</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-black/10 p-4 dark:border-white/10">
                  <p className="text-xs text-black/60 dark:text-white/60">Audit</p>
                  <p className="mt-1 text-sm">
                    Logged with scanner identity, time, and result.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-xs text-black/50 dark:text-white/50">
                No gradients. Black & white only. Built for real operations.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
