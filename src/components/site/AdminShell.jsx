"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { label: "Dashboard", href: "/admin", section: "Overview" },
  { label: "Articles", href: "/admin/articles", section: "Content" },
  { label: "Products", href: "/admin/products", section: "Content" },
  { label: "Origins", href: "/admin/origins", section: "Content" },
  { label: "Supply", href: "/admin/supply", section: "Operations" },
  { label: "Media", href: "/admin/media", section: "Operations" },
  { label: "Inquiries", href: "/admin/inquiries", section: "Operations" },
  { label: "Redirects", href: "/admin/redirects", section: "System" },
  { label: "Settings", href: "/admin/settings", section: "System" },
  { label: "Users", href: "/admin/users", section: "System" },
  { label: "Audit Logs", href: "/admin/audit-logs", section: "System" },
];

export function AdminShell({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/admin/login") {
    return children;
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  const sections = [...new Set(navItems.map((item) => item.section))];

  return (
    <div className="min-h-screen bg-[#f4efe6] text-[#2b211d] [background-image:linear-gradient(rgba(62,39,35,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(62,39,35,0.035)_1px,transparent_1px)] [background-size:32px_32px]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-80 border-r border-[#51352d] bg-[#21110d] text-white shadow-2xl shadow-black/30 lg:flex lg:flex-col">
        <div className="relative overflow-hidden border-b border-white/10 px-6 py-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(244,211,170,0.18),transparent_38%)]" />
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f4d3aa]/30 bg-[#f4d3aa]/10 font-display text-xl font-bold text-[#f4d3aa]">
              N
            </div>
            <p className="font-display mt-4 text-3xl font-bold leading-tight">Nawasena</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-[#f4d3aa]">CMS Console</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-5">
          {sections.map((section) => (
            <div key={section} className="mb-6">
              <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/38">{section}</p>
              <div className="grid gap-1">
                {navItems.filter((item) => item.section === section).map((item) => {
                  const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(`${item.href}/`));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={clsx(
                        "rounded-sm px-3 py-2.5 text-sm font-semibold transition",
                        active
                          ? "bg-[#f4d3aa] text-[#251511] shadow-lg shadow-black/20"
                          : "text-white/72 hover:bg-white/10 hover:text-white",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="border-t border-white/10 p-4">
          <div className="mb-4 rounded-sm border border-[#f4d3aa]/20 bg-white/10 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f4d3aa]">Session</p>
            <p className="mt-2 text-sm font-semibold text-white">Signed admin access</p>
            <p className="mt-1 text-xs leading-5 text-white/50">HTTP-only session cookie active.</p>
          </div>
          <Link href="/" className="block rounded-sm border border-white/10 px-4 py-3 text-sm font-semibold text-white/74 hover:bg-white/10">
            View Website
          </Link>
          <button
            type="button"
            onClick={logout}
            className="mt-3 w-full rounded-sm bg-white/10 px-4 py-3 text-left text-sm font-semibold text-white hover:bg-white/15"
          >
            Sign Out
          </button>
        </div>
      </aside>

      <div className="lg:pl-80">
        <header className="sticky top-0 z-30 border-b border-[#e2d7c7] bg-[#fffaf1]/82 px-5 py-4 shadow-sm shadow-[#3e2723]/5 backdrop-blur-xl lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2e7d32]">Admin workspace</p>
              <p className="font-display text-2xl font-bold text-[#3e2723]">PT. Nawasena International Group</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#d9c9b7] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#3e2723] shadow-sm">
                Production-ready auth
              </span>
              <Link href="/request-quote" className="rounded-sm bg-[#2e7d32] px-4 py-2 text-sm font-bold text-white hover:bg-[#245d28]">
                Public Form
              </Link>
            </div>
          </div>
        </header>

        <main className="px-5 py-8 lg:px-8 xl:px-10">{children}</main>
      </div>
    </div>
  );
}
