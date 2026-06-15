# Implementation Plan

This plan follows the PRD and starts only after Phase 0 audit review is approved. The project is a progressive refactor of an existing deployed website, not a rebuild from zero.

Every implementation phase should be shipped through a separate Git branch and Vercel Preview Deployment before merge. Do not make direct unreviewed changes to the production branch.

## Current Phase 0 Status

Completed in this checkpoint:

- Repository structure audited.
- Framework, dependencies, routes, components, assets, forms, metadata, analytics, API/backend absence, environment variables, and Vercel configuration presence/absence documented.
- Existing assets inventoried with dimensions and current usage.
- Risks and assumptions documented.
- `npm run lint` passed.
- `npm run build` passed.

Not done in Phase 0:

- No homepage refactor.
- No route migration.
- No image deletion/replacement.
- No database/CMS implementation.
- No production branch migration.

## Branch and Deployment Workflow

1. Create implementation branch after review:
   ```bash
   git checkout -b refactor/corporate-b2b
   ```
2. Keep each phase small enough for one Vercel Preview Deployment.
3. For every phase:
   - Run `npm run lint`.
   - Run `npm run build`.
   - Run available tests once test scripts exist.
   - Review Vercel Preview URL on desktop and mobile.
   - Check core pages for SEO metadata, broken links, and form behavior.
4. Merge to production only after preview review.

## Phase 1: Stabilize Existing SPA Foundation

Goal: improve reliability without changing architecture or public URL structure.

Scope:

- Correct footer `mailto:` mismatch to `export@nawasenaint.web.id` if confirmed.
- Move repeated product and FAQ data into central data modules.
- Preserve current homepage sections and existing hash anchors.
- Add a lightweight content verification file for claims that require business approval.
- Add basic smoke checks if a test framework is introduced.
- Keep all existing images in place.

Preview QA:

- `/` loads and current sections still work.
- Hash anchors still scroll.
- WhatsApp CTAs still open expected messages.
- Footer contact links are correct.
- Lint and build pass.

## Phase 2: SEO and Routing Architecture Decision

Goal: decide and implement the minimum architecture needed for PRD routes without losing current production behavior.

Recommended path:

- Evaluate migration from Vite SPA to Next.js App Router because the PRD requires Next.js Image optimization, dynamic metadata, server routes, admin routes, Neon/PostgreSQL, Drizzle, and SEO-friendly pages.
- If Next.js migration is approved, preserve current visual components by porting them incrementally.
- If staying with Vite temporarily, introduce a routing and pre-render strategy that supports crawlable pages, but document limitations against PRD.

Scope:

- Create route map for all PRD public routes.
- Define redirect/canonical policy for existing hash anchors and `/index.html`.
- Add Vercel routing/headers plan.
- Keep homepage visually recognizable.

Preview QA:

- Existing `/` remains indexable and visually stable.
- Unknown paths still return a proper 404 behavior.
- No accidental indexing of admin or draft routes.
- Sitemap/robots plan reviewed before expansion.

## Phase 3: Homepage B2B Refactor

Goal: upgrade homepage messaging while preserving current brand and assets.

Scope:

- Update hero headline to PRD positioning.
- Add primary CTA: `Request Current Availability`.
- Add secondary CTA: `Explore Our Coffees`.
- Add current harvest supply metric only after internal confirmation.
- Add required crop-cycle note and last verified date for any supply figure.
- Add featured origins cards for Java Ijen and Aceh Gayo using existing relevant images.
- Upgrade product portfolio cards with only verified fields.
- Add quality-control overview.
- Add export-service buyer flow.
- Add lead CTA before footer.
- Expand footer with legal links and PRD navigation.

Preview QA:

- Mobile and desktop layout review.
- Verify no unsupported claims or unverifiable metrics appear.
- Check image rendering and alt text.
- Check CTA links.
- Lint/build pass.

## Phase 4: Static Public Pages and SEO Expansion

Goal: add crawlable non-admin pages using static or repository-managed content first.

Scope:

- `/products`
- `/products/[slug]`
- `/origins`
- `/origins/java-ijen`
- `/origins/aceh-gayo`
- `/quality`
- `/processing`
- `/processing/[slug]`
- `/export-services`
- `/about`
- `/contact`
- `/request-quote`
- `/sample-request`
- `/privacy-policy`
- `/terms-and-conditions`

Data approach:

- Start from versioned static data modules for products, origins, processing, and supply records.
- Include verification dates and source notes for business claims.
- Omit unknown product fields rather than inventing values.

Preview QA:

- Each route has unique title and description.
- Internal links work.
- Sitemap includes intended indexable pages.
- Robots excludes only non-public routes.
- Structured data validates for pages where factual fields exist.
- Forms still have a functional fallback.

## Phase 5: Database and CMS Foundation

Goal: introduce dynamic content safely after public route structure is stable.

Scope:

- Add Neon PostgreSQL.
- Add Drizzle ORM.
- Define schema for products, origins, processing methods, supply records, articles, media, inquiries, redirects, settings, users, roles, and audit logs.
- Add migrations.
- Add seed data from reviewed static content.
- Add environment variable documentation.

Preview QA:

- Preview DB is separate from production DB.
- Migrations run in preview environment.
- Public pages can read seeded content.
- Build does not leak server-only environment variables.

## Phase 6: Secure Admin CMS

Goal: build protected content management routes.

Scope:

- `/admin/login`
- `/admin`
- `/admin/articles`
- `/admin/articles/new`
- `/admin/articles/[id]`
- `/admin/products`
- `/admin/origins`
- `/admin/supply`
- `/admin/media`
- `/admin/inquiries`
- `/admin/redirects`
- `/admin/settings`
- `/admin/users`
- `/admin/audit-logs`

Requirements:

- Protect all `/admin` routes.
- Add `noindex` for all admin routes.
- Implement role-aware access.
- Implement audit trail for content changes.
- Prevent draft exposure.

Preview QA:

- Unauthenticated admin access redirects to login.
- Admin routes are noindexed.
- Draft articles are not public.
- Audit events are recorded.
- Preview users and data are isolated.

## Phase 7: News and Insights

Goal: launch SEO content system with review workflow.

Scope:

- `/news`
- `/news/[slug]`
- `/news/category/[slug]`
- `/news/tag/[slug]`
- Article statuses: draft, in review, approved, scheduled, published, archived.
- Article metadata, featured image alt text, categories, tags, related products/origins/articles.
- RSS feed.
- Article structured data.

Preview QA:

- Only published articles appear publicly.
- Draft and scheduled articles are hidden.
- Article pages have unique metadata and canonical URLs.
- Related links work.
- RSS validates.

## Phase 8: Inquiry, Quote, and Sample Workflows

Goal: replace WhatsApp-only lead capture with qualified persisted inquiries while keeping WhatsApp as a conversion fallback.

Scope:

- Request quote form.
- Sample request form.
- Server-side validation.
- Anti-spam controls.
- Inquiry storage in database.
- Admin inquiry view.
- Optional notification hooks for email, WhatsApp, CRM, or n8n after approval.
- Consent and privacy copy.

Preview QA:

- Valid submissions persist.
- Invalid submissions fail safely.
- No sensitive data is logged in client console.
- Admin can view inquiry records.
- WhatsApp fallback still works.

## Phase 9: Redirects, Performance, Security, and Production Migration

Goal: prepare safe production rollout.

Scope:

- Final redirect map.
- Vercel headers and security controls.
- Sitemap and robots finalization.
- Canonical review.
- Lighthouse checks for primary pages.
- Broken link scan.
- Structured data validation.
- Production migration checklist.

Preview QA:

- Lighthouse targets: mobile performance at least 85, SEO at least 95, accessibility at least 90.
- No broken internal links.
- No major structured-data errors.
- No duplicate primary metadata.
- No admin/draft indexing.

## Assumptions Pending Verification

- Business owner will confirm harvest supply capacity, crop cycle, and last verified date before metrics go live.
- Business owner will confirm all certifications, partner counts, countries served, capacity, origin details, and Incoterms.
- Vercel project settings can be reviewed before routing/migration phases.
- Existing production site is deployed from this repository.
- Next.js migration is acceptable if approved after Phase 2 architecture review.
- Preview deployment data can be isolated from production data.

## Phase Exit Criteria

No phase should be considered complete unless:

- Scope for that phase is implemented.
- Lint passes.
- Build passes.
- Type checking passes once introduced.
- Tests pass once introduced.
- Preview deployment is reviewed.
- New risks or unverifiable assumptions are documented.

