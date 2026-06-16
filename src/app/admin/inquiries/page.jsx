import { revalidatePath } from "next/cache";
import { desc, eq } from "drizzle-orm";
import { AdminPageHeader, AdminPanel, AdminStatCard, AdminStatus } from "@/components/site/AdminUi";
import { getDb } from "@/lib/db/client";
import { inquiries } from "@/lib/db/schema";

const statuses = [
  { value: "new", label: "New" },
  { value: "qualified", label: "Qualified" },
  { value: "responded", label: "Responded" },
  { value: "archived", label: "Archived" },
];

async function updateInquiryStatus(formData) {
  "use server";

  const id = Number(formData.get("id"));
  const status = String(formData.get("status") || "");

  if (!id || !statuses.some((item) => item.value === status)) {
    return;
  }

  const db = getDb();
  if (!db) return;

  await db.update(inquiries).set({ status }).where(eq(inquiries.id, id));
  revalidatePath("/admin");
  revalidatePath("/admin/inquiries");
}

async function deleteInquiry(formData) {
  "use server";

  const id = Number(formData.get("id"));
  if (!id) return;

  const db = getDb();
  if (!db) return;

  await db.delete(inquiries).where(eq(inquiries.id, id));
  revalidatePath("/admin");
  revalidatePath("/admin/inquiries");
}

async function getInquiries() {
  const db = getDb();

  if (!db) {
    return { rows: [], error: "DATABASE_URL is not configured, so inquiries cannot be loaded." };
  }

  try {
    const rows = await db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
    return { rows, error: "" };
  } catch {
    return {
      rows: [],
      error: "The inquiries table is not available yet. Run npm run db:migrate, then submit a test form.",
    };
  }
}

export default async function AdminInquiriesPage() {
  const { rows, error } = await getInquiries();
  const countByStatus = rows.reduce((current, inquiry) => {
    current[inquiry.status] = (current[inquiry.status] || 0) + 1;
    return current;
  }, {});

  return (
    <div>
      <AdminPageHeader
        eyebrow="Buyer pipeline"
        title="Buyer Inquiries"
        description="Review sample and quotation requests submitted from the public forms. Update response status after your team follows up."
      />

      <div className="mb-6 grid gap-4 md:grid-cols-4">
        <AdminStatCard label="Total" value={rows.length} detail="All saved inquiries" tone="green" />
        <AdminStatCard label="New" value={countByStatus.new || 0} detail="Needs first response" tone={(countByStatus.new || 0) > 0 ? "amber" : "green"} />
        <AdminStatCard label="Responded" value={countByStatus.responded || 0} detail="Follow-up sent" />
        <AdminStatCard label="Archived" value={countByStatus.archived || 0} detail="Closed records" />
      </div>

      {error && (
        <AdminPanel title="Database attention needed">
          <div className="rounded-sm border border-amber-200 bg-amber-50 p-4 text-sm font-semibold leading-7 text-amber-800">
            {error}
          </div>
        </AdminPanel>
      )}

      <AdminPanel title="Inquiry Queue" description="Create happens through public forms. This page handles read, status update, and delete.">
        {rows.length > 0 ? (
          <div className="grid gap-4">
            {rows.map((inquiry) => (
              <article key={inquiry.id} className="rounded-sm border border-[#eadfce] bg-white p-5 shadow-sm">
                <div className="grid gap-5 xl:grid-cols-[1fr_320px]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-display text-2xl font-bold text-[#3e2723]">{inquiry.name}</h2>
                      <AdminStatus tone={inquiry.status === "new" ? "amber" : inquiry.status === "archived" ? "neutral" : "green"}>
                        {inquiry.status}
                      </AdminStatus>
                      <AdminStatus tone={inquiry.inquiryType === "sample" ? "green" : "neutral"}>
                        {inquiry.inquiryType}
                      </AdminStatus>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-stone-500">
                      {inquiry.company || "No company"} - {inquiry.country} - {formatDate(inquiry.createdAt)}
                    </p>

                    <dl className="mt-5 grid gap-3 text-sm md:grid-cols-2">
                      <Info label="Email" value={inquiry.email} />
                      <Info label="WhatsApp" value={inquiry.whatsapp || "-"} />
                      <Info label="Product" value={inquiry.product || "Open recommendation"} />
                      <Info label="Volume / sample" value={inquiry.volume || "-"} />
                      <Info label="Destination" value={inquiry.destination || "-"} />
                    </dl>

                    {inquiry.message && (
                      <div className="mt-5 rounded-sm bg-[#fffaf1] p-4 text-sm leading-7 text-stone-600">
                        {inquiry.message}
                      </div>
                    )}
                  </div>

                  <div className="grid content-start gap-3 rounded-sm border border-[#eadfce] bg-[#fffaf1] p-4">
                    <form action={updateInquiryStatus} className="grid gap-3">
                      <input type="hidden" name="id" value={inquiry.id} />
                      <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
                        Status
                        <select name="status" defaultValue={inquiry.status} className="rounded-sm border border-[#d7c7b4] bg-white px-3 py-2 font-normal">
                          {statuses.map((status) => <option key={status.value} value={status.value}>{status.label}</option>)}
                        </select>
                      </label>
                      <button type="submit" className="rounded-sm bg-[#2e7d32] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#245d28]">
                        Update status
                      </button>
                    </form>

                    <a
                      href={`mailto:${inquiry.email}?subject=${encodeURIComponent(`Nawasena ${inquiry.inquiryType} request follow-up`)}`}
                      className="rounded-sm border border-[#d7c7b4] bg-white px-4 py-2.5 text-center text-sm font-bold text-[#3e2723] hover:bg-[#f8f6f0]"
                    >
                      Reply by email
                    </a>

                    {inquiry.whatsapp && (
                      <a
                        href={`https://wa.me/${normalizeWhatsapp(inquiry.whatsapp)}?text=${encodeURIComponent("Hello, thank you for contacting PT. Nawasena International Group. We are reviewing your coffee inquiry and will follow up with availability and next steps.")}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-sm border border-[#d7c7b4] bg-white px-4 py-2.5 text-center text-sm font-bold text-[#3e2723] hover:bg-[#f8f6f0]"
                      >
                        Reply on WhatsApp
                      </a>
                    )}

                    <form action={deleteInquiry}>
                      <input type="hidden" name="id" value={inquiry.id} />
                      <button type="submit" className="w-full rounded-sm border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-bold text-red-700 hover:bg-red-100">
                        Delete inquiry
                      </button>
                    </form>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-sm border border-dashed border-[#d7c7b4] bg-[#fffaf1] p-8 text-center">
            <p className="font-display text-2xl font-bold text-[#3e2723]">No buyer inquiries yet</p>
            <p className="mt-2 text-sm leading-6 text-stone-500">Requests submitted through Contact, Request Quote, or Request Samples will appear here.</p>
          </div>
        )}
      </AdminPanel>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <dt className="font-bold text-[#3e2723]">{label}</dt>
      <dd className="mt-1 break-words text-stone-600">{value}</dd>
    </div>
  );
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(value);
}

function normalizeWhatsapp(value) {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("0")) return `62${digits.slice(1)}`;
  return digits;
}
