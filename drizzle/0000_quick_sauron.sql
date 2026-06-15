CREATE TABLE "audit_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"actor" varchar(180) NOT NULL,
	"action" varchar(120) NOT NULL,
	"entity_type" varchar(80) NOT NULL,
	"entity_id" varchar(120),
	"metadata" jsonb,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "content_records" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" varchar(80) NOT NULL,
	"slug" varchar(220) NOT NULL,
	"title" varchar(260) NOT NULL,
	"status" varchar(40) DEFAULT 'draft' NOT NULL,
	"payload" jsonb NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "inquiries" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(160) NOT NULL,
	"company" varchar(180),
	"email" varchar(220) NOT NULL,
	"whatsapp" varchar(80),
	"country" varchar(120) NOT NULL,
	"inquiry_type" varchar(40) NOT NULL,
	"product" varchar(260),
	"volume" varchar(120),
	"destination" varchar(180),
	"message" text,
	"consent" boolean DEFAULT false NOT NULL,
	"status" varchar(40) DEFAULT 'new' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "redirects" (
	"id" serial PRIMARY KEY NOT NULL,
	"source" varchar(260) NOT NULL,
	"destination" varchar(260) NOT NULL,
	"permanent" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "supply_records" (
	"id" serial PRIMARY KEY NOT NULL,
	"crop_cycle" varchar(40) NOT NULL,
	"harvest_label" varchar(120) NOT NULL,
	"origin" varchar(120),
	"process" varchar(120),
	"grade" varchar(120),
	"capacity_mt" integer,
	"capacity_type" varchar(80) DEFAULT 'seasonal_supply' NOT NULL,
	"valid_from" timestamp with time zone,
	"valid_until" timestamp with time zone,
	"availability_status" varchar(80) NOT NULL,
	"last_verified_at" timestamp with time zone,
	"internal_source_note" text,
	"public_disclaimer" text,
	"publication_status" varchar(40) DEFAULT 'draft' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
