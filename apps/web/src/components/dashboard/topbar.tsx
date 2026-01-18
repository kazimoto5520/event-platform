"use client";

import * as React from "react";
import { Menu } from "lucide-react";

export function DashboardTopbar({
  title = "Overview",
  onOpenSidebar,
}: {
  title?: string;
  onOpenSidebar: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/80">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          {/* Mobile toggle */}
          <button
            onClick={onOpenSidebar}
            className="grid size-10 place-items-center rounded-2xl border border-black/10 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10 md:hidden"
            aria-label="Open sidebar"
          >
            <Menu className="size-5" />
          </button>

          <div className="leading-tight">
            <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
            <p className="text-xs text-black/60 dark:text-white/60">
              Here’s a quick look at how things are going.
            </p>
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <button className="rounded-full border border-black/10 px-3 py-2 text-xs hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10">
            1 year
          </button>

          <button className="rounded-full bg-black px-3 py-2 text-xs font-semibold text-white dark:bg-white dark:text-black">
            Overview
          </button>
        </div>
      </div>
    </header>
  );
}
