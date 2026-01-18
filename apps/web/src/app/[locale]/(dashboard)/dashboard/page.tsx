"use client";

import { useQuery } from "@tanstack/react-query";
import { dashboard } from "@/lib/api";
import Link from "next/link";
import { Loader2 } from "lucide-react";

type StatCard = {
  title: string;
  value: string;
  hint: string;
  action?: { label: string; href: string };
};

export default function DashboardPage() {
  const { data: summary, isLoading } = useQuery({
    queryKey: ["dashboard", "summary"],
    queryFn: () => dashboard.getSummary(),
  });

  if (isLoading) {
    return (
      <div className="flex h-[50vh] w-full items-center justify-center">
        <Loader2 className="size-8 animate-spin text-black/20 dark:text-white/20" />
      </div>
    );
  }

  const events = summary?.events;
  const invitations = summary?.invitations;
  const scans = summary?.scans;

  const stats: StatCard[] = [
    {
      title: "Live Events",
      value: events?.byStatus.LIVE.toString() ?? "0",
      hint: "Events currently open for scanning",
      action: { label: "View events", href: "/dashboard/events" },
    },
    {
      title: "Draft Events",
      value: events?.byStatus.DRAFT.toString() ?? "0",
      hint: "Not published yet (scanning disabled)",
      action: { label: "Create event", href: "/dashboard/events/new" },
    },
    {
      title: "Invitations Issued",
      value: invitations?.byStatus.CREATED.toString() ?? "0",
      hint: "Total invitations created across events",
      action: { label: "Manage invitations", href: "/dashboard/events" },
    },
    {
      title: "Checked In",
      value: scans?.byResult.SUCCESS.toString() ?? "0",
      hint: "Guests successfully validated via QR scan",
      action: { label: "View scans", href: "/dashboard/scans" },
    },
  ];

  const quickActions = [
    {
      title: "Create Event",
      desc: "Start in DRAFT, then publish when ready.",
      href: "/dashboard/events/new",
    },
    {
      title: "Generate Invitations",
      desc: "Create guest invitations and QR tokens.",
      href: "/dashboard/events",
    },
    {
      title: "Scanner Access",
      desc: "Use SCANNER role for QR validation at entry.",
      href: "/dashboard/settings",
    },
    {
      title: "Audit Logs",
      desc: "Track scan attempts and actions securely.",
      href: "/dashboard/audit",
    },
  ];

  const statusBreakdown = [
    { label: "DRAFT", value: events?.byStatus.DRAFT ?? 0 },
    { label: "LIVE", value: events?.byStatus.LIVE ?? 0 },
    { label: "COMPLETED", value: events?.byStatus.COMPLETED ?? 0 },
    { label: "CANCELLED", value: events?.byStatus.CANCELLED ?? 0 },
  ];

  const scanBreakdown = [
    { label: "SUCCESS", value: scans?.byResult.SUCCESS ?? 0 },
    { label: "DUPLICATE", value: scans?.byResult.DUPLICATE ?? 0 },
    { label: "INVALID", value: scans?.byResult.INVALID ?? 0 },
    { label: "EXPIRED", value: scans?.byResult.EXPIRED ?? 0 },
  ];

  return (
    <div className="space-y-6">
      {/* Top summary cards */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((c) => (
          <div
            key={c.title}
            className="rounded-3xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black"
          >
            <p className="text-xs text-black/60 dark:text-white/60">
              {c.title}
            </p>

            <p className="mt-3 text-3xl font-semibold tracking-tight">
              {c.value}
            </p>

            <p className="mt-1 text-xs text-black/50 dark:text-white/50">
              {c.hint}
            </p>

            {c.action && (
              <div className="mt-4">
                <Link
                  href={c.action.href}
                  className="text-xs underline underline-offset-4 opacity-80 hover:opacity-100"
                >
                  {c.action.label}
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Middle section */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Event lifecycle */}
        <div className="rounded-3xl border border-black/10 p-4 dark:border-white/10">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">Event lifecycle</p>
              <p className="mt-1 text-xs text-black/60 dark:text-white/60">
                DRAFT → LIVE → COMPLETED (or CANCELLED)
              </p>
            </div>

            <Link
              href="/dashboard/events"
              className="text-xs underline underline-offset-4 opacity-80 hover:opacity-100"
            >
              Manage
            </Link>
          </div>

          <div className="mt-4 space-y-2">
            {statusBreakdown.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between rounded-2xl border border-black/10 px-3 py-2 text-sm dark:border-white/10"
              >
                <span className="text-xs font-medium">{s.label}</span>
                <span className="text-xs text-black/60 dark:text-white/60">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scan results */}
        <div className="rounded-3xl border border-black/10 p-4 dark:border-white/10">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold">Scan validation</p>
              <p className="mt-1 text-xs text-black/60 dark:text-white/60">
                Transaction-safe QR check-ins with audit trail
              </p>
            </div>

            <Link
              href="/dashboard/scans"
              className="text-xs underline underline-offset-4 opacity-80 hover:opacity-100"
            >
              View
            </Link>
          </div>

          <div className="mt-4 space-y-2">
            {scanBreakdown.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between rounded-2xl border border-black/10 px-3 py-2 text-sm dark:border-white/10"
              >
                <span className="text-xs font-medium">{s.label}</span>
                <span className="text-xs text-black/60 dark:text-white/60">
                  {s.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-black/10 p-3 text-xs text-black/60 dark:border-white/10 dark:text-white/60">
            Scanning is enabled only when an event is <b>LIVE</b>. Duplicate
            scans are blocked automatically.
          </div>
        </div>

        {/* Roles */}
        <div className="rounded-3xl border border-black/10 p-4 dark:border-white/10">
          <p className="text-sm font-semibold">Roles & access</p>
          <p className="mt-1 text-xs text-black/60 dark:text-white/60">
            Built-in authorization model for real operations
          </p>

          <div className="mt-4 space-y-2">
            <div className="rounded-2xl border border-black/10 p-3 dark:border-white/10">
              <p className="text-xs font-semibold">ADMIN</p>
              <p className="mt-1 text-xs text-black/60 dark:text-white/60">
                Full control: users, events, and system audits.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 p-3 dark:border-white/10">
              <p className="text-xs font-semibold">ORGANIZER</p>
              <p className="mt-1 text-xs text-black/60 dark:text-white/60">
                Create events, issue invitations, and publish LIVE.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 p-3 dark:border-white/10">
              <p className="text-xs font-semibold">SCANNER</p>
              <p className="mt-1 text-xs text-black/60 dark:text-white/60">
                Validate QR codes at entry points (check-in).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="rounded-3xl border border-black/10 p-4 dark:border-white/10">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold">Quick actions</p>
            <p className="mt-1 text-xs text-black/60 dark:text-white/60">
              Most common tasks for event operations
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className="rounded-3xl border border-black/10 p-4 transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
            >
              <p className="text-sm font-semibold">{a.title}</p>
              <p className="mt-1 text-xs text-black/60 dark:text-white/60">
                {a.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <div className="rounded-3xl border border-black/10 p-4 text-xs text-black/60 dark:border-white/10 dark:text-white/60">
        Tip: For secure entry control, always publish events to <b>LIVE</b>{" "}
        before allowing scanners to validate QR codes.
      </div>
    </div>
  );
}
