import { AdminPageHeader, AdminPanel, AdminStatus } from "@/components/site/AdminUi";

export default function AdminNewArticlePage() {
  return (
    <div>
      <AdminPageHeader
        eyebrow="Editorial Workflow"
        title="New Article"
        description="Create buyer-focused content with draft, review, approval, scheduling, SEO, and related product/origin fields."
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <AdminPanel title="Article Draft" description="Database-backed saving is prepared for the content_records workflow.">
          <div className="grid gap-5">
            <Field label="Title" value="Untitled buyer guide" />
            <Field label="Slug" value="auto-generated-from-title" />
            <Field label="Excerpt" value="Short buyer-focused summary for search results and article cards." />
            <Field label="Primary keyword" value="Indonesian green coffee beans" />
            <div className="rounded-sm border border-dashed border-[#d7c7b4] bg-[#fffaf1] p-8 text-center">
              <p className="font-display text-2xl font-bold text-[#3e2723]">Editor canvas</p>
              <p className="mt-2 text-sm leading-6 text-stone-500">Rich text editing will connect to content_records with draft status before production publishing is enabled.</p>
            </div>
          </div>
        </AdminPanel>

        <AdminPanel title="Publishing Guardrails">
          <div className="grid gap-4 text-sm">
            <Guard label="Status" value="Draft" tone="amber" />
            <Guard label="Draft visibility" value="Private" tone="green" />
            <Guard label="Human review" value="Required" tone="amber" />
            <Guard label="Structured data" value="Generated after publish" />
            <Guard label="Related links" value="Products, origins, articles" />
          </div>
        </AdminPanel>
      </div>
    </div>
  );
}

function Field({ label, value }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
      {label}
      <input disabled value={value} className="rounded-sm border border-[#d7c7b4] bg-stone-50 px-4 py-3 font-normal text-stone-500" readOnly />
    </label>
  );
}

function Guard({ label, value, tone = "neutral" }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#eadfce] pb-3 last:border-0 last:pb-0">
      <span className="font-semibold text-stone-600">{label}</span>
      <AdminStatus tone={tone}>{value}</AdminStatus>
    </div>
  );
}
