import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { and, eq } from "drizzle-orm";
import { getDb } from "@/lib/db/client";
import { contentRecords } from "@/lib/db/schema";
import { normalizeArticleRecord } from "@/lib/articles";
import { writeAuditLog } from "@/lib/admin/audit";

export async function POST(request) {
  const expected = process.env.ARTICLE_SCHEDULER_SECRET;
  const token = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

  if (!expected || token !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = getDb();

  if (!db) {
    return NextResponse.json({ error: "DATABASE_URL is required." }, { status: 500 });
  }

  const now = new Date();
  const records = await db.select().from(contentRecords).where(and(eq(contentRecords.type, "article"), eq(contentRecords.status, "scheduled")));
  const summary = { checked: records.length, published: [], skipped: [], failed: [] };

  for (const record of records) {
    const article = normalizeArticleRecord(record);
    const scheduledAt = record.payload?.scheduledAt ? new Date(record.payload.scheduledAt) : null;

    if (!scheduledAt || Number.isNaN(scheduledAt.valueOf()) || scheduledAt > now) {
      summary.skipped.push({ id: record.id, reason: "not_due" });
      continue;
    }

    try {
      const payload = {
        ...record.payload,
        publishedAt: record.payload?.publishedAt || now.toISOString().slice(0, 10),
        isIndexable: true,
      };

      await db.update(contentRecords).set({ status: "published", payload, updatedAt: now }).where(eq(contentRecords.id, record.id));
      await writeAuditLog(db, {
        actor: "scheduler",
        action: "scheduled_publish.executed",
        entityType: "article",
        entityId: record.id,
        metadata: { slug: article.slug, scheduledAt: record.payload?.scheduledAt },
        request,
      });

      revalidatePath("/");
      revalidatePath("/news");
      revalidatePath(`/news/${article.slug}`);
      revalidatePath(`/news/category/${article.category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`);
      revalidatePath("/sitemap.xml");
      summary.published.push({ id: record.id, slug: article.slug });
    } catch (error) {
      summary.failed.push({ id: record.id, error: error instanceof Error ? error.message : "Unknown error" });
    }
  }

  return NextResponse.json(summary);
}
