import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { neon } from "@neondatabase/serverless";
import { hashPassword } from "../src/lib/auth/password.js";

function loadDotEnvLocal() {
  const filePath = path.join(process.cwd(), ".env.local");

  if (!fs.existsSync(filePath)) {
    return;
  }

  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separator = trimmed.indexOf("=");

    if (separator === -1) {
      continue;
    }

    const key = trimmed.slice(0, separator).trim();
    const rawValue = trimmed.slice(separator + 1).trim();
    const value = rawValue.replace(/^["']|["']$/g, "");

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function getArg(name) {
  const prefix = `--${name}=`;
  const found = process.argv.find((arg) => arg.startsWith(prefix));
  return found?.slice(prefix.length);
}

loadDotEnvLocal();

const databaseUrl = process.env.DATABASE_URL;
const name = getArg("name") || process.env.ADMIN_NAME || "Nawasena Admin";
const email = (getArg("email") || process.env.ADMIN_EMAIL || "").toLowerCase().trim();
const password = getArg("password") || process.env.ADMIN_PASSWORD || "";
const role = getArg("role") || process.env.ADMIN_ROLE || "admin";

if (!databaseUrl) {
  console.error("DATABASE_URL is required.");
  process.exit(1);
}

if (!email) {
  console.error("Admin email is required. Use --email=admin@example.com or ADMIN_EMAIL.");
  process.exit(1);
}

if (password.length < 12) {
  console.error("Admin password must be at least 12 characters.");
  process.exit(1);
}

const sql = neon(databaseUrl);
const passwordHash = hashPassword(password);

try {
  await sql`
    insert into admin_users (name, email, password_hash, role, is_active, updated_at)
    values (${name}, ${email}, ${passwordHash}, ${role}, true, now())
    on conflict (email)
    do update set
      name = excluded.name,
      password_hash = excluded.password_hash,
      role = excluded.role,
      is_active = true,
      updated_at = now()
  `;
} catch (error) {
  if (error?.code === "42P01") {
    console.error("The admin_users table does not exist yet.");
    console.error("Run `npm run db:migrate` first, then run this command again.");
    process.exit(1);
  }

  throw error;
}

console.log(`Admin user ready: ${email}`);
