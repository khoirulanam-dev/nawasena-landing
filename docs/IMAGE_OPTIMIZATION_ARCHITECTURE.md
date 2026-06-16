# Image Optimization Architecture

## Upload Flow

1. Admin uploads JPEG, PNG, WebP, or AVIF from the article Media tab.
2. `/api/admin/media/upload` verifies admin session.
3. Server validates file size, MIME type, basic signature, dimensions, and pixel count.
4. SVG and GIF uploads are rejected.
5. `sharp` auto-orients, converts to sRGB, strips metadata, resizes without upscaling, and outputs WebP.
6. The optimized file is uploaded to Vercel Blob under an immutable content-hashed path.
7. Metadata and the public Blob URL are saved in the `media` table.
8. The article form receives the selected image URL, dimensions, alt text, and blur placeholder.

## Format Policy

- Stored master: WebP.
- Delivery: Next.js Image Optimization with `image/avif` and `image/webp` formats enabled.
- AVIF is handled by Next.js optimizer at request time rather than generating AVIF variants during upload.
- Runtime production uploads require `BLOB_READ_WRITE_TOKEN`; there is no silent local fallback.

## Cache Policy

- Generated filenames include a content hash.
- Files should be treated as immutable once deployed.
- Do not overwrite a generated file while keeping the same URL.

## Production Note

Runtime uploads now target Vercel Blob for durable storage across redeploys. Existing files under `public/uploads/articles` are legacy read-only assets and should remain in place until every reference has been audited or migrated.

Set `BLOB_PUBLIC_HOSTNAME` to the exact hostname from Blob URLs so `next/image` can optimize remote media safely.
