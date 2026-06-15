import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/db/client";
import { inquiries } from "@/lib/db/schema";

const inquirySchema = z.object({
  name: z.string().min(2).max(160),
  company: z.string().max(180).optional().or(z.literal("")),
  email: z.string().email().max(220),
  whatsapp: z.string().max(80).optional().or(z.literal("")),
  country: z.string().min(2).max(120),
  inquiryType: z.enum(["quote", "sample"]),
  product: z.string().max(260).optional().or(z.literal("")),
  volume: z.string().max(120).optional().or(z.literal("")),
  destination: z.string().max(180).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
  consent: z.literal(true),
});

export async function POST(request) {
  const body = await request.json().catch(() => null);
  const parsed = inquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid inquiry payload" }, { status: 400 });
  }

  const db = getDb();

  if (db) {
    await db.insert(inquiries).values(parsed.data);
    return NextResponse.json({ ok: true, persisted: true });
  }

  return NextResponse.json({
    ok: true,
    persisted: false,
    message: "Inquiry accepted in preview mode. Configure DATABASE_URL to persist inquiries.",
  });
}
