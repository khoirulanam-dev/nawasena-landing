import { auditLogs } from "@/lib/db/schema";

export async function writeAuditLog(db, { actor = "system", actorAdminId = null, action, entityType, entityId = null, metadata = {}, request = null }) {
  if (!db || !action || !entityType) return;

  const headers = request?.headers;
  const ip = headers?.get("x-forwarded-for")?.split(",")[0]?.trim() || headers?.get("x-real-ip") || null;
  const userAgent = headers?.get("user-agent") || null;

  await db.insert(auditLogs).values({
    actorAdminId,
    actor,
    action,
    entityType,
    entityId: entityId ? String(entityId) : null,
    metadata,
    ip,
    userAgent,
  });
}
