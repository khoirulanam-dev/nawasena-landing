# Article Redirects

## Behavior

When a published database article changes slug, the CMS creates a permanent redirect:

```text
/news/old-slug -> /news/new-slug
```

Redirects are stored in `article_redirects`.

## Safeguards

- Draft slug changes do not create redirects.
- Published slug changes create or update a 301 redirect.
- Existing redirect chains for the same article are collapsed to the latest canonical path.
- Basic redirect-loop detection prevents saving an immediate loop.
- Old redirect source paths are excluded from the sitemap.

## Public Resolution

If `/news/[slug]` cannot find a published article, it checks `article_redirects`. If a matching active redirect exists, the route returns a permanent redirect to the stored destination.

## Remaining Verification

Direct redirect behavior should be tested on Vercel after a published database article is edited.
