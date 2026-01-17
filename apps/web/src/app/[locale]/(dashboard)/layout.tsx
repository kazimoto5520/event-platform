export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b px-6 py-3">
        <div className="flex items-center justify-between">
          <span className="font-bold">Dashboard</span>
          <nav className="flex gap-4">
            <a href="/events" className="hover:underline">
              Events
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
