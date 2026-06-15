import { AdminPlaceholder } from "@/components/site/AdminPlaceholder";

export default function AdminUsersPage() {
  return (
    <AdminPlaceholder
      eyebrow="Access Control"
      title="Users"
      description="Manage admin users, roles, activation status, password rotation, and future reviewer/editor access."
      stats={[
        { label: "Auth", value: "Email", detail: "Credentials stored in Neon", tone: "green" },
        { label: "Password", value: "Hashed", detail: "scrypt password hashing", tone: "green" },
        { label: "Session", value: "Signed", detail: "HTTP-only cookie", tone: "green" },
      ]}
      items={[
        { title: "Admin", description: "Full access to settings, users, publishing, redirects, and data.", status: "Active", tone: "green" },
        { title: "Editor", description: "Prepared role for creating and editing content.", status: "Planned", tone: "neutral" },
        { title: "Reviewer", description: "Prepared role for article review and approval workflow.", status: "Planned", tone: "neutral" },
      ]}
    />
  );
}
