import { AdminPlaceholder } from "@/components/site/AdminPlaceholder";
import { origins } from "@/data/site";

export default function AdminOriginsPage() {
  return (
    <AdminPlaceholder
      eyebrow="Sourcing"
      title="Origins"
      description="Maintain origin pages, geographic context, process availability, harvest notes, SEO titles, and related products."
      stats={[
        { label: "Origins", value: origins.length, detail: "Initial sourcing focus", tone: "green" },
        { label: "Country", value: "ID", detail: "Indonesia origin portfolio" },
        { label: "SEO pages", value: origins.length, detail: "Public origin pages generated" },
      ]}
      items={origins.map((origin) => ({
        title: origin.name,
        description: `${origin.province}, ${origin.country}. ${origin.description}`,
        status: "Published",
        tone: "green",
        meta: `${origin.processes.length} processes`,
      }))}
    />
  );
}
