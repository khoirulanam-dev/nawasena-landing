import { createHash } from "node:crypto";
import { put } from "@vercel/blob";
import sharp from "sharp";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getAuthSecret, verifyAdminSession } from "@/lib/auth/session";
import { getDb } from "@/lib/db/client";
import { media } from "@/lib/db/schema";
import { slugify } from "@/lib/articles";
import { writeAuditLog } from "@/lib/admin/audit";

const MAX_FILE_BYTES = Number(process.env.ARTICLE_IMAGE_MAX_BYTES || 10 * 1024 * 1024);
const MAX_INPUT_WIDTH = Number(process.env.ARTICLE_IMAGE_MAX_WIDTH || 8000);
const MAX_INPUT_HEIGHT = Number(process.env.ARTICLE_IMAGE_MAX_HEIGHT || 8000);
const MAX_INPUT_MEGAPIXELS = Number(process.env.ARTICLE_IMAGE_MAX_MEGAPIXELS || 40);
const MASTER_MAX_SIZE = Number(process.env.ARTICLE_IMAGE_MASTER_MAX_SIZE || 1920);
const WEBP_QUALITY = Number(process.env.ARTICLE_IMAGE_WEBP_QUALITY || 82);
const allowedMimeTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/avif"]);

export async function POST(request) {
  const cookieStore = await cookies();
  const session = await verifyAdminSession(cookieStore.get("nawasena_admin")?.value, getAuthSecret());

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = getDb();

  if (!db) {
    return NextResponse.json({ error: "DATABASE_URL is required for media uploads." }, { status: 500 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return NextResponse.json({ error: "BLOB_READ_WRITE_TOKEN is required. Production uploads do not fall back to local storage." }, { status: 500 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const altText = String(formData.get("altText") || "").trim();
  const caption = String(formData.get("caption") || "").trim();
  const credit = String(formData.get("credit") || "").trim();
  const sourceUrl = String(formData.get("sourceUrl") || "").trim();

  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "Image file is required." }, { status: 400 });
  }

  if (!altText) {
    return NextResponse.json({ error: "Alt text is required." }, { status: 400 });
  }

  if (!allowedMimeTypes.has(file.type)) {
    return NextResponse.json({ error: "Upload JPEG, PNG, WebP, or AVIF only. SVG and GIF are not allowed." }, { status: 400 });
  }

  if (file.size > MAX_FILE_BYTES) {
    return NextResponse.json({ error: "Image exceeds the configured file size limit." }, { status: 400 });
  }

  const sourceBuffer = Buffer.from(await file.arrayBuffer());
  const signature = sourceBuffer.subarray(0, 12).toString("hex");
  const looksLikeSvg = sourceBuffer.subarray(0, 256).toString("utf8").toLowerCase().includes("<svg");
  const looksLikeGif = sourceBuffer.subarray(0, 6).toString("ascii").startsWith("GIF");
  const actualMime = detectImageMime(sourceBuffer);

  if (looksLikeSvg || looksLikeGif) {
    return NextResponse.json({ error: "SVG and animated GIF uploads are not supported for articles." }, { status: 400 });
  }

  if (!actualMime || !allowedMimeTypes.has(actualMime)) {
    return NextResponse.json({ error: "The file signature does not match a supported image format." }, { status: 400 });
  }

  const image = sharp(sourceBuffer, { limitInputPixels: MAX_INPUT_MEGAPIXELS * 1_000_000, animated: false });
  const metadata = await image.metadata();

  if (!metadata.width || !metadata.height || metadata.width > MAX_INPUT_WIDTH || metadata.height > MAX_INPUT_HEIGHT) {
    return NextResponse.json({ error: "Image dimensions exceed safe upload limits." }, { status: 400 });
  }

  const contentHash = createHash("sha256").update(sourceBuffer).digest("hex");
  const baseName = slugify(String(formData.get("filenameBase") || altText || file.name.replace(/\.[^.]+$/, ""))) || "article-image";
  const generatedFilename = `${baseName}-${contentHash.slice(0, 8)}.webp`;
  const now = new Date();
  const blobPath = `articles/${now.getUTCFullYear()}/${String(now.getUTCMonth() + 1).padStart(2, "0")}/${generatedFilename}`;

  const outputBuffer = await sharp(sourceBuffer, { limitInputPixels: MAX_INPUT_MEGAPIXELS * 1_000_000, animated: false })
    .rotate()
    .resize({ width: MASTER_MAX_SIZE, height: MASTER_MAX_SIZE, fit: "inside", withoutEnlargement: true })
    .toColorspace("srgb")
    .webp({ quality: WEBP_QUALITY })
    .toBuffer();

  const outputMeta = await sharp(outputBuffer).metadata();
  const blurBuffer = await sharp(outputBuffer).resize({ width: 16, withoutEnlargement: true }).webp({ quality: 35 }).toBuffer();
  const blurDataUrl = `data:image/webp;base64,${blurBuffer.toString("base64")}`;
  const blob = await put(blobPath, outputBuffer, {
    access: "public",
    contentType: "image/webp",
    addRandomSuffix: false,
  });

  const [record] = await db
    .insert(media)
    .values({
      storageKey: blob.pathname || blobPath,
      publicUrl: blob.url,
      originalFilename: file.name || "uploaded-image",
      generatedFilename,
      mimeType: "image/webp",
      format: "webp",
      width: outputMeta.width || metadata.width,
      height: outputMeta.height || metadata.height,
      fileSizeBytes: outputBuffer.length,
      altText,
      caption: caption || null,
      credit: credit || null,
      sourceUrl: sourceUrl || null,
      blurDataUrl,
      contentHash,
      variants: { sourceSignature: signature, master: blob.url, blobPath: blob.pathname || blobPath },
      createdBy: session.email || "admin",
    })
    .returning();

  await writeAuditLog(db, {
    actor: session.email || "admin",
    action: "media.uploaded",
    entityType: "media",
    entityId: record.id,
    metadata: { publicUrl: record.publicUrl, width: record.width, height: record.height, fileSizeBytes: record.fileSizeBytes },
    request,
  });

  return NextResponse.json({ media: record });
}

function detectImageMime(buffer) {
  if (buffer.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]))) return "image/jpeg";
  if (buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "image/png";
  if (buffer.subarray(0, 4).toString("ascii") === "RIFF" && buffer.subarray(8, 12).toString("ascii") === "WEBP") return "image/webp";
  if (buffer.subarray(4, 12).toString("ascii").includes("ftypavif")) return "image/avif";
  return "";
}
