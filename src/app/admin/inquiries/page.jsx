import { AdminPlaceholder } from "@/components/site/AdminPlaceholder";

export default function AdminInquiriesPage() {
  return (
    <AdminPlaceholder
      eyebrow="Buyer Pipeline"
      title="Inquiries"
      description="Track quote requests, sample requests, buyer country, target product, requested volume, destination, and response status."
      stats={[
        { label: "Persistence", value: "Active", detail: "Submissions write to Neon when DATABASE_URL is set", tone: "green" },
        { label: "Statuses", value: "4", detail: "New, qualified, responded, archived" },
        { label: "Privacy", value: "Consent", detail: "Form requires buyer consent" },
      ]}
      items={[
        { title: "New", description: "Fresh request waiting for review.", status: "Queue", tone: "amber" },
        { title: "Qualified", description: "Buyer profile and requested product are relevant.", status: "Active", tone: "green" },
        { title: "Responded", description: "Team has replied with next steps.", status: "Done", tone: "green" },
        { title: "Archived", description: "Closed or inactive inquiry.", status: "Archive", tone: "neutral" },
      ]}
    />
  );
}
