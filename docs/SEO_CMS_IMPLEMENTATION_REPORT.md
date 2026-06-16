# SEO CMS Implementation Report

Date: 2026-06-16

## Changed

- Reworked article admin into create, edit, publish/draft, and delete workflows.
- Redesigned article form into five tabs: Content, Media, SEO, Links & Conversion, Publication.
- Added internal SEO readiness panel.
- Added database-backed media upload API at `/api/admin/media/upload`.
- Added `media` table migration.
- Added WebP optimization through `sharp`.
- Removed public tag archive route for this phase.
- Updated public article rendering with metadata, canonical, robots, Open Graph, Twitter card, breadcrumb, article JSON-LD, author block, CTA, related product, and sources section.
- Updated `/news`, homepage Insights, and sitemap to include published database articles plus existing seed articles.

## Database Changes

- Existing tables used: `content_records`, `inquiries`, `admin_users`.
- Added table: `media`.
- Article-specific fields are stored in `content_records.payload` for this phase.

## Image Strategy

- Accepted upload formats: JPEG, PNG, WebP, AVIF.
- Rejected: SVG, GIF.
- Max default file size: 10 MB.
- Max default dimensions: 8000 x 8000 px.
- Max default pixels: 40 MP.
- Output: optimized WebP master, max 1920 px.
- Blur placeholder generated and stored.
- Width, height, byte size, alt text, content hash, and public URL are stored.
- Next.js Image Optimization is configured for AVIF and WebP delivery.

## SEO Behavior

- Published articles output index/follow metadata.
- Draft/review/scheduled/archived articles are not included in public listing.
- Canonical defaults to `https://nawasenaint.web.id/news/[slug]`.
- SEO title and meta description are separate from H1 and excerpt.
- Reading time is calculated from content at save/render time.
- Tags are stored but no public tag archive routes are generated.

## Redirect Behavior

- Static `/index.html -> /` redirect exists.
- Article slug-change redirect management is not fully implemented yet.
- Current edit flow can update slugs, but automatic 301 creation for old article slugs remains a required next phase.

## Known Limitations

- Categories, authors, tags, and sources are not yet normalized relational tables.
- Uploads are stored in repo-local `public/uploads/articles`; production should use durable object storage if editors upload after deploy.
- No automated tests are present yet.
- Audit logging for article/media actions is not wired.
- Scheduled publishing is stored but not processed by a scheduler.

## Verification Run

- `npm run lint`
- `npm run build`

## Environment Variables Added

- `ARTICLE_IMAGE_MAX_BYTES`
- `ARTICLE_IMAGE_MAX_WIDTH`
- `ARTICLE_IMAGE_MAX_HEIGHT`
- `ARTICLE_IMAGE_MAX_MEGAPIXELS`
- `ARTICLE_IMAGE_MASTER_MAX_SIZE`
- `ARTICLE_IMAGE_WEBP_QUALITY`

All have safe defaults when omitted.

## Manual Production Checklist

- Run `npm run db:migrate` against Neon.
- Confirm `DATABASE_URL` and `AUTH_SECRET` are set in Vercel.
- Create at least one admin user.
- Submit a test inquiry and confirm it appears in `/admin/inquiries`.
- Upload a test article image and confirm WebP output is generated.
- Create a draft article and confirm it does not appear publicly.
- Publish an article and confirm it appears in `/news`, homepage Insights, and `/sitemap.xml`.
- Inspect canonical, Open Graph, robots, and JSON-LD on one article detail page.
