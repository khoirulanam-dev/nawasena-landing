import { and, eq, ne } from "drizzle-orm";
import { articleRedirects } from "@/lib/db/schema";

export function articlePath(slug) {
  return `/news/${slug}`;
}

export async function findArticleRedirect(db, oldPath) {
  if (!db || !oldPath) return null;

  let redirect;

  try {
    [redirect] = await db
      .select()
      .from(articleRedirects)
      .where(and(eq(articleRedirects.oldPath, oldPath), eq(articleRedirects.isActive, true)))
      .limit(1);
  } catch {
    return null;
  }

  return redirect || null;
}

export async function createArticleRedirect(db, { articleRecordId, oldSlug, newSlug }) {
  const oldPath = articlePath(oldSlug);
  const newPath = articlePath(newSlug);

  if (!db || !articleRecordId || !oldSlug || !newSlug || oldPath === newPath) {
    return null;
  }

  const existingLoop = await findArticleRedirect(db, newPath);

  if (existingLoop?.newPath === oldPath) {
    throw new Error("Redirect loop detected. Slug change was not saved.");
  }

  await db
    .update(articleRedirects)
    .set({ newPath, updatedAt: new Date() })
    .where(and(eq(articleRedirects.articleRecordId, articleRecordId), ne(articleRedirects.oldPath, newPath)));

  const existing = await findArticleRedirect(db, oldPath);

  if (existing) {
    await db
      .update(articleRedirects)
      .set({ newPath, statusCode: 301, isActive: true, updatedAt: new Date() })
      .where(eq(articleRedirects.id, existing.id));
    return { ...existing, newPath };
  }

  const [created] = await db
    .insert(articleRedirects)
    .values({ articleRecordId, oldPath, newPath, statusCode: 301, isActive: true })
    .returning();

  return created;
}

export async function getActiveArticleRedirectPaths(db) {
  if (!db) return new Set();

  try {
    const rows = await db.select().from(articleRedirects).where(eq(articleRedirects.isActive, true));
    return new Set(rows.map((row) => row.oldPath));
  } catch {
    return new Set();
  }
}
