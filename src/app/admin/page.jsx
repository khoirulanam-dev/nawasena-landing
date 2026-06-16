import Link from "next/link";
import { desc } from "drizzle-orm";
import { AdminPanel, AdminRows, AdminStatCard, AdminStatus } from "@/components/site/AdminUi";
import { getAdminArticles } from "@/lib/articles";
import { getDb } from "@/lib/db/client";
import { inquiries } from "@/lib/db/schema";

async function getInquirySummary() {
  const db = getDb();

  if (!db) {
    return { rows: [], counts: {}, error: "DATABASE_URL is not configured." };
  }

  try {
    const rows = await db.select().from(inquiries).orderBy(desc(inquiries.createdAt)).limit(5);
    const counts = rows.reduce((current, inquiry) => {
      current[inquiry.status] = (current[inquiry.status] || 0) + 1;
      return current;
    }, {});

    return { rows, counts, error: "" };
  } catch {
    return {
      rows: [],
      counts: {},
      error: "Inquiry table is not ready. Run npm run db:migrate, then submit a test inquiry.",
    };
  }
}

export default async function AdminPage() {
  const inquirySummary = await getInquirySummary();
  const articles = await getAdminArticles();
  const newInquiries = inquirySummary.counts.new || 0;
  const publishedArticles = articles.filter((article) => article.status === "published");
  const draftArticles = articles.filter((article) => article.status === "draft");

  return (
    <div className="grid gap-7">
      <section className="rounded-sm border border-[#e1d4c3] bg-white p-6 shadow-lg shadow-[#3e2723]/5">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2e7d32]">Admin dashboard</p>
            <h1 className="font-display mt-2 text-4xl font-bold leading-tight text-[#3e2723] md:text-5xl">
              Manage buyer requests and public content.
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-600">
              This workspace only shows modules that currently have a usable purpose. Buyer inquiries are stored in Neon, and database-backed articles can now be created, edited, drafted, published, and deleted.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/admin/inquiries" className="rounded-sm bg-[#2e7d32] px-5 py-3 text-sm font-bold text-white hover:bg-[#245d28]">
              Open Inquiries
            </Link>
            <Link href="/news" className="rounded-sm border border-[#d7c7b4] bg-[#fffaf1] px-5 py-3 text-sm font-bold text-[#3e2723] hover:bg-white">
              View Articles
            </Link>
            <Link href="/admin/articles/new" className="rounded-sm border border-[#d7c7b4] bg-[#fffaf1] px-5 py-3 text-sm font-bold text-[#3e2723] hover:bg-white">
              New Article
            </Link>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-4">
        <AdminStatCard label="New inquiries" value={newInquiries} detail="Needs first response" tone={newInquiries > 0 ? "amber" : "green"} />
        <AdminStatCard label="Recent inquiries" value={inquirySummary.rows.length} detail="Latest records loaded from Neon" />
        <AdminStatCard label="Published articles" value={publishedArticles.length} detail="Visible on /news" tone="green" />
        <AdminStatCard label="Draft articles" value={draftArticles.length} detail="Private until published" tone={draftArticles.length > 0 ? "amber" : "default"} />
      </div>

      {inquirySummary.error && (
        <AdminPanel title="Database attention needed">
          <div className="rounded-sm border border-amber-200 bg-amber-50 p-4 text-sm font-semibold leading-7 text-amber-800">
            {inquirySummary.error}
          </div>
        </AdminPanel>
      )}

      <div className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
        <AdminPanel title="Latest buyer inquiries" description="Review new sample and quote requests from the public forms.">
          {inquirySummary.rows.length > 0 ? (
            <AdminRows
              rows={inquirySummary.rows.map((inquiry) => ({
                title: `${inquiry.name} - ${inquiry.country}`,
                description: `${inquiry.inquiryType.toUpperCase()} request for ${inquiry.product || "unspecified product"}${inquiry.volume ? `, ${inquiry.volume}` : ""}.`,
                status: inquiry.status,
                tone: inquiry.status === "new" ? "amber" : "green",
                meta: new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(inquiry.createdAt),
              }))}
            />
          ) : (
            <EmptyState title="No inquiries yet" description="Submit the sample or quote form once to confirm database persistence." />
          )}
          <div className="mt-5 flex justify-end">
            <Link href="/admin/inquiries" className="text-sm font-bold text-[#2e7d32] hover:text-[#245d28]">
              Manage inquiries
            </Link>
          </div>
        </AdminPanel>

        <AdminPanel title="Recent articles" description="Database articles are editable. Static seed articles are retained as fallback content.">
          <div className="grid gap-3">
            {articles.slice(0, 5).map((article) => (
              <Link key={article.slug} href={`/news/${article.slug}`} className="rounded-sm border border-[#eadfce] bg-white p-4 hover:border-[#2e7d32]">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-bold text-[#3e2723]">{article.title}</h3>
                  <AdminStatus tone={article.status === "published" ? "green" : "amber"}>{article.status}</AdminStatus>
                  <AdminStatus tone={article.source === "database" ? "green" : "neutral"}>{article.source}</AdminStatus>
                </div>
                <p className="mt-2 text-sm leading-6 text-stone-500">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </AdminPanel>
      </div>
    </div>
  );
}

function EmptyState({ title, description }) {
  return (
    <div className="rounded-sm border border-dashed border-[#d7c7b4] bg-[#fffaf1] p-8 text-center">
      <p className="font-display text-2xl font-bold text-[#3e2723]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-stone-500">{description}</p>
    </div>
  );
}
