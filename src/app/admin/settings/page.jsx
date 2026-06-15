import { AdminPlaceholder } from "@/components/site/AdminPlaceholder";
import { site } from "@/data/site";

export default function AdminSettingsPage() {
  return (
    <AdminPlaceholder
      eyebrow="Configuration"
      title="Settings"
      description="Control company profile, contact channels, SEO defaults, social links, analytics, and verification metadata."
      stats={[
        { label: "Email", value: "Set", detail: site.email, tone: "green" },
        { label: "WhatsApp", value: "Set", detail: site.whatsapp, tone: "green" },
        { label: "Location", value: "Review", detail: "Confirm before production updates", tone: "amber" },
      ]}
      items={[
        { title: "Public email", description: site.email, status: "Active", tone: "green" },
        { title: "WhatsApp", description: site.whatsapp, status: "Active", tone: "green" },
        { title: "Office location", description: site.address, status: "Verify", tone: "amber" },
      ]}
    />
  );
}
