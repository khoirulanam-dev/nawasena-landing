import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { createAdminSession, getAuthSecret } from "@/lib/auth/session";
import { verifyPassword } from "@/lib/auth/password";
import { getDb } from "@/lib/db/client";
import { adminUsers } from "@/lib/db/schema";

export const runtime = "nodejs";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request) {
  const authSecret = getAuthSecret();
  const db = getDb();

  if (!process.env.DATABASE_URL || !db) {
    return NextResponse.json({ error: "DATABASE_URL is not configured." }, { status: 500 });
  }

  if (!authSecret || authSecret.length < 32) {
    return NextResponse.json({ error: "AUTH_SECRET must be configured with at least 32 characters." }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Enter a valid email and password." }, { status: 400 });
  }

  const email = parsed.data.email.toLowerCase().trim();
  let user;

  try {
    [user] = await db.select().from(adminUsers).where(eq(adminUsers.email, email)).limit(1);
  } catch (error) {
    if (error?.code === "42P01") {
      return NextResponse.json(
        { error: "Admin database table is not ready. Run `npm run db:migrate` first." },
        { status: 500 },
      );
    }

    throw error;
  }

  if (!user || !user.isActive || !verifyPassword(parsed.data.password, user.passwordHash)) {
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }

  await db.update(adminUsers).set({ lastLoginAt: new Date(), updatedAt: new Date() }).where(eq(adminUsers.id, user.id));

  const maxAge = 60 * 60 * 8;
  const session = await createAdminSession(
    {
      sub: String(user.id),
      email: user.email,
      name: user.name,
      role: user.role,
      expiresAt: Date.now() + maxAge * 1000,
    },
    authSecret,
  );

  const response = NextResponse.json({ ok: true });
  response.cookies.set("nawasena_admin", session, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge,
  });

  return response;
}
