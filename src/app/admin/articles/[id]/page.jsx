import { AdminPageHeader, AdminPanel, AdminStatus } from "@/components/site/AdminUi";

export default async function AdminArticleEditPage({ params }) {
  const { id } = await params;

  return (
    <div>
      <AdminPageHeader
        eyebrow="Editorial Workflow"
        title={`Edit Article ${id}`}
        description="Review content fields, SEO metadata, status, references, and related entities before publishing."
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <AdminPanel title="Article Details" description="This production UI shell is ready for database-backed article editing.">
          <div className="grid gap-4">
            <div className="rounded-sm border border-[#eadfce] bg-[#fffaf1] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2e7d32]">Content</p>
              <h2 className="font-display mt-2 text-3xl font-bold text-[#3e2723]">Article editor pending database record</h2>
              <p className="mt-3 text-sm leading-7 text-stone-600">When an article record exists in Neon, this page can load title, slug, body, SEO fields, featured image, references, and relation fields.</p>
            </div>
          </div>
        </AdminPanel>

        <AdminPanel title="Publication Controls">
          <div className="grid gap-4 text-sm">
            <Control label="Status" value="Draft" tone="amber" />
            <Control label="Review" value="Required" tone="amber" />
            <Control label="Public visibility" value="Blocked until published" tone="green" />
            <Control label="Audit log" value="Prepared" tone="green" />
          </div>
        </AdminPanel>
      </div>
    </div>
  );
}

function Control({ label, value, tone = "neutral" }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#eadfce] pb-3 last:border-0 last:pb-0">
      <span className="font-semibold text-stone-600">{label}</span>
      <AdminStatus tone={tone}>{value}</AdminStatus>
    </div>
  );
}
