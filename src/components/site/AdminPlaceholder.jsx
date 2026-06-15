import { AdminPageHeader, AdminPanel, AdminRows, AdminStatCard, AdminStatus } from "@/components/site/AdminUi";

export function AdminPlaceholder({ eyebrow = "CMS Module", title, description, items = [], stats = [] }) {
  const rows = items.map((item) => {
    if (typeof item === "string") {
      return {
        title: item,
        description: "Ready for database-backed editing workflow.",
        status: "Ready",
        tone: "green",
      };
    }

    return item;
  });

  return (
    <div>
      <AdminPageHeader eyebrow={eyebrow} title={title} description={description} />

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        {(stats.length ? stats : [
          { label: "Records", value: rows.length, detail: "Current module entries" },
          { label: "Workflow", value: "Ready", detail: "Prepared for Neon-backed CRUD" },
          { label: "Indexing", value: "Private", detail: "Admin routes are noindexed" },
        ]).map((stat) => (
          <AdminStatCard key={stat.label} {...stat} />
        ))}
      </div>

      <AdminPanel title={`${title} workspace`} description="The interface is prepared for production operations and database-backed editing.">
        {rows.length > 0 ? (
          <AdminRows rows={rows} />
        ) : (
          <div className="rounded-sm border border-dashed border-[#d7c7b4] bg-[#fffaf1] p-8 text-center">
            <AdminStatus tone="amber">Empty</AdminStatus>
            <p className="mt-3 font-display text-2xl font-bold text-[#3e2723]">No records yet</p>
            <p className="mt-2 text-sm text-stone-500">New records will appear here after the database workflow is enabled.</p>
          </div>
        )}
      </AdminPanel>
    </div>
  );
}
