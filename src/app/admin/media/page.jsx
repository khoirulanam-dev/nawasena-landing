import { AdminPlaceholder } from "@/components/site/AdminPlaceholder";

export default function AdminMediaPage() {
  return (
    <AdminPlaceholder
      eyebrow="Assets"
      title="Media"
      description="Review media assets, alt text, image usage, and future upload metadata without deleting existing production images."
      stats={[
        { label: "Policy", value: "Preserve", detail: "Existing public images retained", tone: "green" },
        { label: "Alt text", value: "Required", detail: "For all public media" },
        { label: "Uploads", value: "Planned", detail: "Database metadata ready" },
      ]}
      items={[
        { title: "Existing public images preserved", description: "No production image should be deleted without a technical reason.", status: "Protected", tone: "green" },
        { title: "Alt text required", description: "Every public image should carry buyer-focused descriptive alt text.", status: "Required", tone: "amber" },
        { title: "Future upload metadata", description: "Media database records should include title, alt text, usage, and verification owner.", status: "Planned", tone: "neutral" },
      ]}
    />
  );
}
