ALTER TABLE "audit_logs" ADD COLUMN IF NOT EXISTS "actor_admin_id" integer;
--> statement-breakpoint
ALTER TABLE "audit_logs" ADD COLUMN IF NOT EXISTS "ip" varchar(80);
--> statement-breakpoint
ALTER TABLE "audit_logs" ADD COLUMN IF NOT EXISTS "user_agent" text;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "article_redirects" (
	"id" serial PRIMARY KEY NOT NULL,
	"article_record_id" integer NOT NULL,
	"old_path" varchar(320) NOT NULL,
	"new_path" varchar(320) NOT NULL,
	"status_code" integer DEFAULT 301 NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "article_redirects_old_path_unique" ON "article_redirects" USING btree ("old_path");
