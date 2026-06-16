# SEO CMS Test Report

Date: 2026-06-16

## Automated Tests Added

Test file:

```text
test/articles.test.mjs
```

Coverage currently includes:

- Slug normalization.
- Reading time calculation.
- Article body parser support for headings, lists, ordered lists, and callouts.
- Editor syntax stringify behavior.
- Canonical article path helper behavior.

## Manual Verification Required

The following require deployed Vercel/Neon/Blob environment verification:

- Blob upload persistence after redeployment.
- Next Image Optimizer AVIF/WebP response from Blob remote hostname.
- Published article slug redirect behavior.
- Scheduled publishing via n8n and idempotent repeated invocation.
- Draft/scheduled article public inaccessibility.
- Sitemap and canonical inspection on production domain.

## Last Local Commands

Passed on 2026-06-16:

```bash
npm run articles:import-seed
npm run test
npm run lint
npm run build
npm audit --audit-level=moderate
```

Results:

- Seed import inserted 3 existing articles into Neon.
- Unit tests: 5 passed, 0 failed.
- ESLint: passed.
- Production build: passed.
- Dependency audit: 0 vulnerabilities at moderate level or above.
