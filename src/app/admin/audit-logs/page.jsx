import { AdminPlaceholder } from "@/components/site/AdminPlaceholder";

export default function AdminAuditLogsPage() {
  return (
    <AdminPlaceholder
      eyebrow="Governance"
      title="Audit Logs"
      description="Track important CMS changes for content, user access, redirects, inquiries, settings, and publication workflow."
      stats={[
        { label: "Table", value: "Ready", detail: "audit_logs migration exists", tone: "green" },
        { label: "Coverage", value: "Planned", detail: "Wire events to edit actions" },
        { label: "Retention", value: "TBD", detail: "Define policy before launch", tone: "amber" },
      ]}
      items={[
        { title: "Content created", description: "Record actor, entity type, entity ID, and timestamp.", status: "Ready", tone: "green" },
        { title: "Content reviewed", description: "Prepared for review workflow events.", status: "Planned", tone: "neutral" },
        { title: "Content published", description: "Required before article publishing workflow is fully enabled.", status: "Planned", tone: "neutral" },
        { title: "Redirect changed", description: "Important for SEO migration accountability.", status: "Ready", tone: "green" },
        { title: "Inquiry status updated", description: "Track buyer pipeline actions.", status: "Planned", tone: "neutral" },
      ]}
    />
  );
}
