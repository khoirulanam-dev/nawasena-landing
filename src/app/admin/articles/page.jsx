import Link from "next/link";
import { AdminPageHeader, AdminPanel, AdminStatCard, AdminStatus } from "@/components/site/AdminUi";
import { getAdminArticles } from "@/lib/articles";

export default async function AdminArticlesPage() {
  const articles = await getAdminArticles();
  const databaseArticles = articles.filter((article) => article.source === "database");
  const seedArticles = articles.filter((article) => article.source === "static");
  const publishedCount = articles.filter((article) => article.status === "published").length;
  const draftCount = articles.filter((article) => article.status === "draft").length;

  return (
    <div>
      <AdminPageHeader
        eyebrow="Editorial"
        title="Articles"
        description="Create, edit, publish, draft, and delete database-backed articles. Static seed articles remain visible as fallback content."
        actionHref="/admin/articles/new"
        actionLabel="New Article"
      />

      <div className="mb-6 grid gap-4 md:grid-cols-4">
        <AdminStatCard label="Published" value={publishedCount} detail="Visible on public News pages" tone="green" />
        <AdminStatCard label="Drafts" value={draftCount} detail="Private until published" tone={draftCount > 0 ? "amber" : "default"} />
        <AdminStatCard label="Editable" value={databaseArticles.length} detail="Stored in Neon content_records" />
        <AdminStatCard label="Seed" value={seedArticles.length} detail="Static fallback articles" />
      </div>

      <AdminPanel title="Article Library" description="Database articles can be edited or deleted. Static seed articles can be viewed publicly but are edited in code.">
        <div className="grid gap-4">
          {articles.map((article) => (
            <article key={`${article.source}-${article.id || article.slug}`} className="rounded-sm border border-[#eadfce] bg-white p-5">
              <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-bold text-[#3e2723]">{article.title}</h2>
                    <AdminStatus tone={article.status === "published" ? "green" : "amber"}>{article.status}</AdminStatus>
                    <AdminStatus tone={article.source === "database" ? "green" : "neutral"}>{article.source}</AdminStatus>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-stone-500">{article.category} - {article.excerpt}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-stone-400">Updated {article.updatedAt || "-"}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Link href={`/news/${article.slug}`} className="rounded-sm border border-[#d7c7b4] bg-white px-4 py-2 text-sm font-bold text-[#3e2723] hover:bg-[#fffaf1]">
                    View
                  </Link>
                  {article.source === "database" ? (
                    <Link href={`/admin/articles/${article.id}`} className="rounded-sm bg-[#2e7d32] px-4 py-2 text-sm font-bold text-white hover:bg-[#245d28]">
                      Edit
                    </Link>
                  ) : (
                    <span className="rounded-sm bg-stone-100 px-4 py-2 text-sm font-bold text-stone-500">Code seed</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </AdminPanel>
    </div>
  );
}
