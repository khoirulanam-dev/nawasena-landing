import { desc } from "drizzle-orm";
import { getDb } from "@/lib/db/client";
import { media } from "@/lib/db/schema";

export async function getMediaLibrary() {
  const db = getDb();

  if (!db) {
    return [];
  }

  try {
    return await db.select().from(media).orderBy(desc(media.createdAt)).limit(100);
  } catch {
    return [];
  }
}
