import { boolean, integer, jsonb, pgTable, serial, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/pg-core";

export const adminUsers = pgTable(
  "admin_users",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 160 }).notNull(),
    email: varchar("email", { length: 220 }).notNull(),
    passwordHash: text("password_hash").notNull(),
    role: varchar("role", { length: 40 }).notNull().default("admin"),
    isActive: boolean("is_active").notNull().default(true),
    lastLoginAt: timestamp("last_login_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => [uniqueIndex("admin_users_email_unique").on(table.email)],
);

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 160 }).notNull(),
  company: varchar("company", { length: 180 }),
  email: varchar("email", { length: 220 }).notNull(),
  whatsapp: varchar("whatsapp", { length: 80 }),
  country: varchar("country", { length: 120 }).notNull(),
  inquiryType: varchar("inquiry_type", { length: 40 }).notNull(),
  product: varchar("product", { length: 260 }),
  volume: varchar("volume", { length: 120 }),
  destination: varchar("destination", { length: 180 }),
  message: text("message"),
  consent: boolean("consent").notNull().default(false),
  status: varchar("status", { length: 40 }).notNull().default("new"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const contentRecords = pgTable("content_records", {
  id: serial("id").primaryKey(),
  type: varchar("type", { length: 80 }).notNull(),
  slug: varchar("slug", { length: 220 }).notNull(),
  title: varchar("title", { length: 260 }).notNull(),
  status: varchar("status", { length: 40 }).notNull().default("draft"),
  payload: jsonb("payload").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const redirects = pgTable("redirects", {
  id: serial("id").primaryKey(),
  source: varchar("source", { length: 260 }).notNull(),
  destination: varchar("destination", { length: 260 }).notNull(),
  permanent: boolean("permanent").notNull().default(true),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const auditLogs = pgTable("audit_logs", {
  id: serial("id").primaryKey(),
  actor: varchar("actor", { length: 180 }).notNull(),
  action: varchar("action", { length: 120 }).notNull(),
  entityType: varchar("entity_type", { length: 80 }).notNull(),
  entityId: varchar("entity_id", { length: 120 }),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const supplyRecordsTable = pgTable("supply_records", {
  id: serial("id").primaryKey(),
  cropCycle: varchar("crop_cycle", { length: 40 }).notNull(),
  harvestLabel: varchar("harvest_label", { length: 120 }).notNull(),
  origin: varchar("origin", { length: 120 }),
  process: varchar("process", { length: 120 }),
  grade: varchar("grade", { length: 120 }),
  capacityMt: integer("capacity_mt"),
  capacityType: varchar("capacity_type", { length: 80 }).notNull().default("seasonal_supply"),
  validFrom: timestamp("valid_from", { withTimezone: true }),
  validUntil: timestamp("valid_until", { withTimezone: true }),
  availabilityStatus: varchar("availability_status", { length: 80 }).notNull(),
  lastVerifiedAt: timestamp("last_verified_at", { withTimezone: true }),
  internalSourceNote: text("internal_source_note"),
  publicDisclaimer: text("public_disclaimer"),
  publicationStatus: varchar("publication_status", { length: 40 }).notNull().default("draft"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
