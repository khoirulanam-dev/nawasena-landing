import Link from "next/link";
import { AdminPanel, AdminRows, AdminStatCard, AdminStatus } from "@/components/site/AdminUi";
import { articles, origins, products, supplyRecords } from "@/data/site";

const modules = [
  {
    label: "Articles",
    href: "/admin/articles",
    description: "Draft, review, schedule, and publish buyer-focused insights.",
    count: articles.length,
  },
  {
    label: "Products",
    href: "/admin/products",
    description: "Manage coffee names, origin links, process, specs, images, and availability.",
    count: products.length,
  },
  {
    label: "Origins",
    href: "/admin/origins",
    description: "Maintain Java Ijen, Aceh Gayo, and future sourcing regions.",
    count: origins.length,
  },
  {
    label: "Supply",
    href: "/admin/supply",
    description: "Publish crop-cycle supply records with verification dates.",
    count: supplyRecords.length,
  },
  {
    label: "Inquiries",
    href: "/admin/inquiries",
    description: "Review quote and sample requests from B2B buyers.",
    count: "DB",
  },
  {
    label: "Redirects",
    href: "/admin/redirects",
    description: "Protect SEO when old URLs change.",
    count: "301",
  },
];

export default function AdminPage() {
  return (
    <div>
      <section className="relative mb-8 overflow-hidden rounded-sm border border-[#4c2f27] bg-[#2a1712] p-7 text-white shadow-2xl shadow-[#3e2723]/20 md:p-9">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(244,211,170,0.18),transparent_32%),radial-gradient(circle_at_85%_25%,rgba(46,125,50,0.16),transparent_28%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#f4d3aa]/70 to-transparent" />
        <div className="relative grid gap-8 xl:grid-cols-[1.2fr_0.8fr] xl:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f4d3aa]">Executive Dashboard</p>
            <h1 className="font-display mt-4 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
              Corporate coffee CMS
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72">
              A private command center for product intelligence, harvest availability, buyer inquiries, editorial authority, and SEO-controlled migration.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/admin/articles/new" className="rounded-sm bg-[#f4d3aa] px-5 py-3 text-sm font-bold text-[#251511] shadow-lg shadow-black/20 hover:bg-[#ffdcae]">
                Create Article
              </Link>
              <Link href="/admin/inquiries" className="rounded-sm border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/15">
                Review Inquiries
              </Link>
              <Link href="/admin/supply" className="rounded-sm border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/15">
                Verify Supply
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            <div className="rounded-sm border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f4d3aa]">Auth</p>
              <p className="mt-2 font-display text-2xl font-bold">Email + Password</p>
            </div>
            <div className="rounded-sm border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f4d3aa]">Database</p>
              <p className="mt-2 font-display text-2xl font-bold">Neon PostgreSQL</p>
            </div>
            <div className="rounded-sm border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f4d3aa]">Visibility</p>
              <p className="mt-2 font-display text-2xl font-bold">Noindex Admin</p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard label="Published articles" value={articles.length} detail="Initial SEO content cluster" tone="green" />
        <AdminStatCard label="Products" value={products.length} detail="Java Ijen and Aceh Gayo variants" />
        <AdminStatCard label="Origins" value={origins.length} detail="Primary Indonesian sourcing areas" />
        <AdminStatCard label="Supply status" value="Pending" detail="No unverified MT claim is public" />
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <AdminPanel title="CMS Modules" description="Manage operational sections from one workspace.">
          <div className="grid gap-4 md:grid-cols-2">
            {modules.map((module, index) => (
              <Link
                key={module.href}
                href={module.href}
                className="group relative overflow-hidden rounded-sm border border-[#eadfce] bg-[#fffaf1] p-5 transition hover:border-[#2e7d32] hover:bg-white hover:shadow-lg hover:shadow-[#3e2723]/10"
              >
                <div className="absolute right-4 top-4 font-display text-6xl font-bold text-[#3e2723]/5">{String(index + 1).padStart(2, "0")}</div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-[#3e2723] group-hover:text-[#2e7d32]">{module.label}</h2>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{module.description}</p>
                  </div>
                  <span className="rounded-full bg-[#3e2723] px-3 py-1 text-xs font-bold text-[#f4d3aa]">{module.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </AdminPanel>

        <div className="grid gap-6">
          <AdminPanel title="Production Readiness" description="Current admin foundation status.">
            <div className="grid gap-3">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-stone-600">Authentication</span>
                <AdminStatus tone="green">Email Password</AdminStatus>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-stone-600">Admin indexing</span>
                <AdminStatus tone="green">Noindex</AdminStatus>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-stone-600">Database</span>
                <AdminStatus tone="green">Neon Ready</AdminStatus>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-stone-600">Harvest capacity</span>
                <AdminStatus tone="amber">Needs Verification</AdminStatus>
              </div>
            </div>
          </AdminPanel>

          <AdminPanel title="Recent Editorial Items">
            <AdminRows
              rows={articles.slice(0, 3).map((article) => ({
                title: article.title,
                description: article.excerpt,
                status: "Published",
                tone: "green",
                meta: article.updatedAt,
              }))}
            />
          </AdminPanel>
        </div>
      </div>
    </div>
  );
}
