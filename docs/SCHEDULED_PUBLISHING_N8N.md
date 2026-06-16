# Scheduled Publishing With n8n

## Endpoint

```text
POST https://nawasenaint.web.id/api/internal/articles/publish-scheduled
```

## Authentication

Header:

```text
Authorization: Bearer <ARTICLE_SCHEDULER_SECRET>
```

The endpoint rejects missing or invalid secrets.

## Recommended n8n Configuration

- Node: HTTP Request
- Method: POST
- URL: `https://nawasenaint.web.id/api/internal/articles/publish-scheduled`
- Authentication: None
- Headers:
  - `Authorization`: `Bearer {{$env.ARTICLE_SCHEDULER_SECRET}}`
- Body: empty
- Schedule: every 5-15 minutes depending on editorial needs

## Response Shape

```json
{
  "checked": 1,
  "published": [{ "id": 12, "slug": "article-slug" }],
  "skipped": [],
  "failed": []
}
```

## Idempotency

Repeated calls are safe. Only records still in `scheduled` status and due at or before current UTC time are published.

## Revalidation

When a scheduled article is published, the endpoint revalidates:

- `/`
- `/news`
- `/news/[slug]`
- `/news/category/[category-slug]`
- `/sitemap.xml`
