"use client";

import * as React from "react";
import { useParams } from "next/navigation";

import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardTopbar } from "@/components/dashboard/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const locale = (params?.locale as string) ?? "en";

  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="flex">
        <DashboardSidebar
          locale={locale}
          isMobileOpen={mobileOpen}
          onCloseMobile={() => setMobileOpen(false)}
        />

        <div className="flex min-h-screen flex-1 flex-col">
          <DashboardTopbar
            title="Afternoon Meshack,"
            onOpenSidebar={() => setMobileOpen(true)}
          />

          <main className="flex-1 p-4 md:p-6">
            {/* Container */}
            <div className="mx-auto w-full max-w-6xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
