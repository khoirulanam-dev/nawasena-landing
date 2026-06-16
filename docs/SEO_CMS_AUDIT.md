# SEO CMS Audit

Date: 2026-06-16

## Repository Findings

- Framework: Next.js App Router, Next.js 16.2.9.
- Rendering: public pages use server components and static/server rendering where possible.
- Database: Neon PostgreSQL through `@neondatabase/serverless`.
- ORM: Drizzle ORM with migrations in `drizzle/`.
- Auth: custom email/password admin auth using `admin_users`, scrypt password hashing, signed HTTP-only cookie.
- Article public URLs: `/news` and `/news/[slug]` are preserved.
- Admin article form: `/admin/articles/new` and `/admin/articles/[id]`.
- Existing seed articles: stored in `src/data/site.js` and preserved as static fallback content.
- Database article records: stored in `content_records` with `type = article`.
- Image optimization: Next.js image formats already configured for AVIF and WebP in `next.config.js`.
- Static export: no `output: "export"` detected.
- Robots: `src/app/robots.js` disallows `/admin` and `/api`.
- Admin noindex: `next.config.js` sets `X-Robots-Tag` for `/admin/:path*`.
- Sitemap: `src/app/sitemap.js` exists and now includes published public articles.

## Current Implementation Constraints

- Categories, authors, tags, sources, and article relations are stored in article payload for this phase, not normalized relational tables.
- Full role-based authorization beyond admin access is not yet implemented.
- Existing static seed articles remain editable only in code.
- Media upload currently stores optimized generated files under `public/uploads/articles`.
- Remote object storage is not configured.
- Automated test suite is not yet present in project scripts.

## Production Compatibility Decisions

- Keep `/news` and `/news/[slug]` to preserve URL structure.
- Keep static seed articles as fallback so existing public content remains accessible.
- Use `content_records` for article CRUD to avoid destructive schema replacement.
- Use `sharp` for upload-time WebP master generation.
- Use Next.js Image Optimization for AVIF/WebP negotiation instead of generating every AVIF variant at upload time.
