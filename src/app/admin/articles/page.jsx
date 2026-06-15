import Link from "next/link";
import { AdminPageHeader, AdminPanel, AdminRows, AdminStatCard } from "@/components/site/AdminUi";
import { articles } from "@/data/site";

export default function AdminArticlesPage() {
  const rows = articles.map((article) => ({
    title: article.title,
    description: `${article.category} - ${article.excerpt}`,
    status: "Published",
    tone: "green",
    meta: article.updatedAt,
  }));

  return (
    <div>
      <AdminPageHeader
        eyebrow="Editorial"
        title="Articles"
        description="Plan, review, schedule, and publish buyer guides, origin notes, quality explainers, and company updates."
        actionHref="/admin/articles/new"
        actionLabel="New Article"
      />

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <AdminStatCard label="Published" value={articles.length} detail="Visible on public News pages" tone="green" />
        <AdminStatCard label="Drafts" value="0" detail="Draft workflow ready for database records" />
        <AdminStatCard label="Categories" value={new Set(articles.map((article) => article.category)).size} detail="Initial topical clusters" />
      </div>

      <AdminPanel title="Article Library" description="Public seed articles are listed here until database editing is enabled.">
        <AdminRows rows={rows} />
        <div className="mt-5 flex justify-end">
          <Link href="/news" className="text-sm font-bold text-[#2e7d32] hover:text-[#245d28]">
            View public news
          </Link>
        </div>
      </AdminPanel>
    </div>
  );
}
