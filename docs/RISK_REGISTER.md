# Risk Register

Phase 0 risk register for the PT. Nawasena International Group corporate B2B website refactor.

Audit date: 2026-06-15

| ID | Risk | Probability | Impact | Mitigation | Owner/status |
| --- | --- | --- | --- | --- | --- |
| R-001 | Production branch is currently `main`; direct implementation on `main` could affect deployed production. | Medium | High | Create `refactor/corporate-b2b` before implementation and use Vercel Preview Deployments. | Open |
| R-002 | PRD target architecture includes Next.js Image, API routes, admin CMS, Neon, and Drizzle, but repo is currently Vite SPA. | High | High | Add architecture decision phase before major refactor; migrate progressively and preserve current UI/assets. | Open |
| R-003 | Current site has only one indexable sitemap URL; adding/removing routes could damage SEO if redirects/canonicals are rushed. | Medium | High | Create route inventory, redirect map, canonical policy, and preview QA before production merge. | Open |
| R-004 | Existing public URLs with hash anchors may be shared or indexed indirectly. | Medium | Medium | Preserve hash anchors during initial migration; only change internal links after target pages exist. | Open |
| R-005 | Unverified claims such as `250+ Partner Farmers`, sustainability wording, Incoterms, and future `200+ MT` capacity could violate PRD claim rules. | High | High | Require source-backed verification date for claims; omit unknown fields. | Open |
| R-006 | Product specifications required by PRD are mostly absent from repo. | High | High | Build product schema with optional fields; publish only verified specs; collect missing data from business owner. | Open |
| R-007 | Current WhatsApp-only form has no persistence, spam protection, consent capture, or admin tracking. | High | Medium | Add server-side inquiry flow in later phase; keep WhatsApp fallback during transition. | Open |
| R-008 | No `.env*` or Vercel config exists in repo; dashboard settings may contain hidden build, redirect, or env behavior. | Medium | High | Audit Vercel dashboard before route/backend migration. | Open |
| R-009 | No security headers are configured. | High | Medium | Add Vercel/Next headers plan during security phase; include admin noindex and auth controls. | Open |
| R-010 | Admin CMS could accidentally expose draft or private content. | Medium | High | Enforce server-side status filtering, noindex admin routes, auth middleware, tests for draft visibility. | Open |
| R-011 | Database migration could mix preview and production content. | Medium | High | Use separate Neon branches/databases and separate Vercel env vars for preview/production. | Open |
| R-012 | Image deletion or renaming could break current pages or SEO/social images. | Medium | Medium | Preserve all existing images in `/public` during first migration; rename only with redirects/references checked. | Open |
| R-013 | Some optimized AVIF/WebP filenames contain spelling/case inconsistencies such as `clasic`, `Anaerob`. | Medium | Low | Avoid renaming in early phases; normalize slugs/data labels separately from physical filenames. | Open |
| R-014 | Footer email link currently points to `info@nawasena.com` while visible text says `export@nawasenaint.web.id`. | High | Medium | Confirm correct email and fix in stabilization phase. | Open |
| R-015 | Google Maps iframe, office address, phone, and social links may be outdated. | Medium | Medium | Verify contact details with business owner before expanded Contact/About pages. | Open |
| R-016 | Static JSON-LD duplicates content manually and may become stale as content changes. | High | Medium | Generate structured data from shared data source per route after routing/data layer refactor. | Open |
| R-017 | `framer-motion` is installed but unused; dependency drift may add bundle or maintenance cost. | Medium | Low | Review dependency during stabilization; remove only after confirming no planned usage. | Open |
| R-018 | Current React NotFound only changes document title; route-specific metadata is not handled for unknown paths in SPA shell. | Medium | Medium | Implement framework-level 404 and metadata during routing phase. | Open |
| R-019 | No automated tests exist. | High | Medium | Add focused tests/smoke checks as functionality is refactored. | Open |
| R-020 | Large architecture migration and CMS scope could become too broad for one deployment. | High | High | Split into preview-sized phases as documented in `IMPLEMENTATION_PLAN.md`. | Open |
| R-021 | Sitemap currently has `lastmod` of 2026-06-13; future generated sitemap could use incorrect dates. | Medium | Low | Generate sitemap from route/content metadata with controlled updated dates. | Open |
| R-022 | Vercel Analytics is forced to `mode="production"` in all builds, which may affect preview data quality. | Medium | Low | Review analytics mode and event strategy during analytics phase. | Open |
| R-023 | Current product modal prevents product content from being independently crawled. | High | High | Add crawlable product listing and detail pages before relying on product SEO. | Open |
| R-024 | The current app uses browser globals in `App.jsx`, which can complicate SSR migration. | High | Medium | Replace browser-only routing logic during architecture migration. | Open |
| R-025 | Public 404 behavior on Vercel is unverified because there is no `vercel.json` rewrite rule in repo. | Medium | Medium | Test unknown paths in Vercel Preview before route expansion. | Open |

## Highest Priority Risks Before Implementation

1. Confirm branch and Vercel production settings before any implementation branch is merged.
2. Decide whether to migrate to Next.js to satisfy PRD backend, image, metadata, and admin requirements.
3. Verify business claims and contact details before publishing new B2B copy.
4. Preserve existing image assets and current URL behavior during early phases.
5. Add preview QA gates so each phase is reviewable before production.

