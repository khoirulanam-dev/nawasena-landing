# Blob Media Migration

## Current Target Architecture

Runtime article uploads use Vercel Blob through `@vercel/blob`. The optimized WebP master is uploaded to a content-hashed path:

```text
articles/YYYY/MM/descriptive-name-a4f13c.webp
```

The `media` table stores:

- Blob pathname
- Public Blob URL
- Original filename
- Generated filename
- MIME type and format
- Width and height
- File size
- Alt text
- Caption, credit, and source URL
- Blur data URL
- Content hash
- Uploader

## Vercel Dashboard Setup

1. Create or connect Vercel Blob storage.
2. Add `BLOB_READ_WRITE_TOKEN` to Vercel environment variables.
3. Identify the exact public Blob hostname from an uploaded Blob URL.
4. Add that hostname as `BLOB_PUBLIC_HOSTNAME`.
5. Redeploy.

## Local Legacy Uploads

Files previously written under `public/uploads/articles` are treated as legacy read-only assets. They should not be deleted until references are audited.

## Future Migration Utility

A future transfer utility should:

1. Read each local legacy upload.
2. Compute content hash.
3. Upload to Vercel Blob with immutable pathname.
4. Insert or update `media` metadata.
5. Update article payload references only after Blob URL is confirmed.
6. Keep local files until production verification passes.

## Safe Delete Policy

Media deletion checks article references before deleting a Blob. Shared or referenced media is rejected.
