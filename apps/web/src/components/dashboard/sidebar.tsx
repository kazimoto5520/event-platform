"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import {
  LayoutDashboard,
  CalendarDays,
  Ticket,
  Settings,
  LogOut,
} from "lucide-react";

import { cn } from "@event-platform/ui/cn";

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

export function DashboardSidebar({
  locale,
  isMobileOpen,
  onCloseMobile,
}: {
  locale: string;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}) {
  const pathname = usePathname();

  const items: NavItem[] = [
    {
      label: "Overview",
      href: `/${locale}/dashboard`,
      icon: LayoutDashboard,
    },
    {
      label: "Events",
      href: `/${locale}/dashboard/events`,
      icon: CalendarDays,
    },
    {
      label: "Tickets",
      href: `/${locale}/dashboard/tickets`,
      icon: Ticket,
    },
    {
      label: "Settings",
      href: `/${locale}/dashboard/settings`,
      icon: Settings,
    },
  ];

  // Desktop sidebar (hover expand)
  const DesktopSidebar = (
    <aside
      className={cn(
        "group hidden h-screen flex-col border-r border-black/10 bg-white text-black dark:border-white/10 dark:bg-black dark:text-white",
        "md:flex",
        "sticky top-0"
      )}
    >
      {/* width changes on hover */}
      <div className="flex h-full w-[72px] flex-col transition-all duration-200 group-hover:w-[260px]">
        {/* Top logo */}
        <div className="flex h-16 items-center gap-3 px-4">
          <div className="grid size-9 place-items-center rounded-xl border border-black/10 dark:border-white/10">
            <span className="text-xs font-bold">EP</span>
          </div>

          <div className="min-w-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <p className="truncate text-sm font-semibold">Event Platform</p>
            <p className="truncate text-xs text-black/60 dark:text-white/60">
              Dashboard
            </p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-1 flex-col gap-1 px-2 py-2">
          {items.map((item) => {
            const Icon = item.icon;
            const active =
              pathname === item.href || pathname?.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition",
                  "hover:bg-black/5 dark:hover:bg-white/10",
                  active &&
                    "bg-black text-white dark:bg-white dark:text-black hover:bg-black dark:hover:bg-white"
                )}
              >
                <Icon className="size-5 shrink-0" />
                <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom actions */}
        <div className="px-2 pb-4">
          <button
            className={cn(
              "flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm transition",
              "hover:bg-black/5 dark:hover:bg-white/10"
            )}
          >
            <LogOut className="size-5 shrink-0" />
            <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Logout
            </span>
          </button>
        </div>
      </div>
    </aside>
  );

  // Mobile drawer sidebar
  const MobileSidebar = (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden",
          isMobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onCloseMobile}
      />

      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-[280px] border-r border-black/10 bg-white text-black transition-transform dark:border-white/10 dark:bg-black dark:text-white md:hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="grid size-9 place-items-center rounded-xl border border-black/10 dark:border-white/10">
              <span className="text-xs font-bold">EP</span>
            </div>
            <div>
              <p className="text-sm font-semibold">Event Platform</p>
              <p className="text-xs text-black/60 dark:text-white/60">
                Dashboard
              </p>
            </div>
          </div>

          <button
            onClick={onCloseMobile}
            className="rounded-xl border border-black/10 px-3 py-2 text-xs dark:border-white/10"
          >
            Close
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-2 py-2">
          {items.map((item) => {
            const Icon = item.icon;
            const active =
              pathname === item.href || pathname?.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onCloseMobile}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-3 py-3 text-sm transition",
                  "hover:bg-black/5 dark:hover:bg-white/10",
                  active &&
                    "bg-black text-white dark:bg-white dark:text-black hover:bg-black dark:hover:bg-white"
                )}
              >
                <Icon className="size-5 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );

  return (
    <>
      {DesktopSidebar}
      {MobileSidebar}
    </>
  );
}
