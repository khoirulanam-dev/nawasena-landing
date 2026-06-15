CREATE TABLE "admin_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(160) NOT NULL,
	"email" varchar(220) NOT NULL,
	"password_hash" text NOT NULL,
	"role" varchar(40) DEFAULT 'admin' NOT NULL,
	"is_active" boolean DEFAULT true NOT NULL,
	"last_login_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "admin_users_email_unique" ON "admin_users" USING btree ("email");