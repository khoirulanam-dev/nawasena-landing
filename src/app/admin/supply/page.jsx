import { AdminPlaceholder } from "@/components/site/AdminPlaceholder";
import { supplyRecords } from "@/data/site";

export default function AdminSupplyPage() {
  return (
    <AdminPlaceholder
      eyebrow="Harvest"
      title="Supply and Harvest Availability"
      description="Manage crop-cycle supply information with source notes, verification dates, capacity types, and public disclaimers."
      stats={[
        { label: "Records", value: supplyRecords.length, detail: "Current supply entries" },
        { label: "Capacity claim", value: "Hidden", detail: "No MT number published before verification" },
        { label: "Status", value: "Review", detail: "Requires business confirmation", tone: "amber" },
      ]}
      items={supplyRecords.map((record) => ({
        title: `${record.cropCycle} - ${record.harvestLabel}`,
        description: record.disclaimer,
        status: record.status,
        tone: "amber",
        meta: record.lastVerified,
      }))}
    />
  );
}
