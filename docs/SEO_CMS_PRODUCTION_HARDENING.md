# SEO CMS Production Hardening

Date: 2026-06-16

## Fully Implemented In This Phase

- Runtime article media uploads no longer write to `public/uploads/articles`.
- Article media upload now requires `BLOB_READ_WRITE_TOKEN` and uploads optimized WebP masters to Vercel Blob.
- Upload pipeline still uses `sharp` for validation, auto-orientation, sRGB conversion, metadata stripping, resize without upscaling, WebP conversion, dimensions, byte size, content hash, and blur placeholder.
- Added `article_redirects` table.
- Published article slug changes create direct 301 redirect records.
- Public `/news/[slug]` resolves old article paths through `article_redirects`.
- Added protected scheduled publishing endpoint: `POST /api/internal/articles/publish-scheduled`.
- Added seed article import command: `npm run articles:import-seed`.
- Added append-only audit log writes for article create/update/publish/schedule/archive/delete/slug change and media upload/delete.
- Added basic automated tests with `node --test`.
- Removed public tag archive route from this phase.

## Incomplete Or Requires Production Verification

- Vercel Blob persistence after redeploy must be verified on Vercel after setting `BLOB_READ_WRITE_TOKEN`.
- `BLOB_PUBLIC_HOSTNAME` must be set to the exact Blob hostname before remote optimized images render through `next/image`.
- Slug redirects are implemented but should be verified on Vercel with a published database article.
- Scheduled publishing endpoint is implemented but n8n idempotency must be verified against production/preview data.
- Full relational category, author, tag, source, revision, and article relation tables remain future normalization work.
- Full authorization roles beyond authenticated admin are not implemented.
- Test suite is foundational, not exhaustive against every PRD acceptance criterion.

## Required Environment Variables

- `DATABASE_URL`
- `AUTH_SECRET`
- `BLOB_READ_WRITE_TOKEN`
- `BLOB_PUBLIC_HOSTNAME`
- `ARTICLE_SCHEDULER_SECRET`
- Optional upload limits:
  - `ARTICLE_IMAGE_MAX_BYTES`
  - `ARTICLE_IMAGE_MAX_WIDTH`
  - `ARTICLE_IMAGE_MAX_HEIGHT`
  - `ARTICLE_IMAGE_MAX_MEGAPIXELS`
  - `ARTICLE_IMAGE_MASTER_MAX_SIZE`
  - `ARTICLE_IMAGE_WEBP_QUALITY`
- Optional migration flag:
  - `DISABLE_STATIC_ARTICLE_FALLBACK=true`

## Commands

```bash
npm run db:migrate
npm run articles:import-seed
npm run lint
npm run test
npm run build
```

## Production Verification Status

- Local lint: passed on 2026-06-16 with `npm run lint`.
- Local tests: passed on 2026-06-16 with `npm run test` (5/5).
- Local build: passed on 2026-06-16 with `npm run build`.
- Dependency audit: passed on 2026-06-16 with `npm audit --audit-level=moderate`.
- Seed article import: passed on 2026-06-16 with `npm run articles:import-seed`; three existing public articles were inserted into Neon.
- Blob persistence after redeploy: not verifiable locally.
- Automatic redirects on Vercel: not verifiable locally.
- Scheduled publish idempotency through n8n: not verifiable locally.
- Static fallback: remains active by default.
