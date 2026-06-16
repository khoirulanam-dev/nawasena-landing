import { del } from "@vercel/blob";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getAuthSecret, verifyAdminSession } from "@/lib/auth/session";
import { getDb } from "@/lib/db/client";
import { contentRecords, media } from "@/lib/db/schema";
import { writeAuditLog } from "@/lib/admin/audit";

export async function DELETE(request, { params }) {
  const cookieStore = await cookies();
  const session = await verifyAdminSession(cookieStore.get("nawasena_admin")?.value, getAuthSecret());

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = getDb();
  const { id } = await params;

  if (!db) {
    return NextResponse.json({ error: "DATABASE_URL is required." }, { status: 500 });
  }

  const [item] = await db.select().from(media).where(eq(media.id, Number(id))).limit(1);

  if (!item) {
    return NextResponse.json({ error: "Media not found." }, { status: 404 });
  }

  const articles = await db.select().from(contentRecords).where(eq(contentRecords.type, "article"));
  const referenced = articles.some((article) => article.payload?.image === item.publicUrl || article.payload?.ogImage === item.publicUrl);

  if (referenced) {
    return NextResponse.json({ error: "Media is still referenced by an article." }, { status: 409 });
  }

  if (item.publicUrl.startsWith("https://")) {
    await del(item.publicUrl);
  }

  await db.delete(media).where(eq(media.id, Number(id)));
  await writeAuditLog(db, {
    actor: session.email || "admin",
    action: "media.deleted",
    entityType: "media",
    entityId: item.id,
    metadata: { publicUrl: item.publicUrl },
    request,
  });

  return NextResponse.json({ ok: true });
}
