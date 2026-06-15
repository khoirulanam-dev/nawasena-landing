import { AdminPlaceholder } from "@/components/site/AdminPlaceholder";

export default function AdminRedirectsPage() {
  return (
    <AdminPlaceholder
      eyebrow="SEO Operations"
      title="Redirects"
      description="Protect indexed URLs, canonical behavior, and preview migration safety with reviewed redirect rules."
      stats={[
        { label: "Permanent rules", value: "1", detail: "/index.html canonicalized" },
        { label: "Policy", value: "No chains", detail: "Avoid redirect chains" },
        { label: "SEO risk", value: "Managed", detail: "Review before production" },
      ]}
      items={[
        { title: "/index.html -> /", description: "Permanent redirect configured in Next config.", status: "Active", tone: "green" },
        { title: "Legacy URL mappings", description: "Add only after existing URL value is reviewed.", status: "Review", tone: "amber" },
        { title: "Unrelated homepage redirects", description: "Avoid redirecting unrelated pages to home.", status: "Blocked", tone: "red" },
      ]}
    />
  );
}
