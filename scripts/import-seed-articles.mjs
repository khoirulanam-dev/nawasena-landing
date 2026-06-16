import fs from "node:fs";
import path from "node:path";
import { eq } from "drizzle-orm";
import { getDb } from "../src/lib/db/client.js";
import { contentRecords } from "../src/lib/db/schema.js";
import { articles } from "../src/data/site.js";
import { calculateReadingTimeMinutes, stringifyArticleContent } from "../src/lib/article-utils.js";

const envPath = path.join(process.cwd(), ".env.local");

if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator === -1) continue;
    const key = trimmed.slice(0, separator).trim();
    const value = trimmed.slice(separator + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
}

const db = getDb();

if (!db) {
  console.error("DATABASE_URL is required.");
  process.exit(1);
}

const report = { imported: [], skipped: [], warnings: [] };

for (const article of articles) {
  const [existing] = await db.select().from(contentRecords).where(eq(contentRecords.slug, article.slug)).limit(1);

  if (existing) {
    report.skipped.push({ slug: article.slug, reason: "already_exists" });
    continue;
  }

  const contentText = stringifyArticleContent(article.content);

  const [record] = await db
    .insert(contentRecords)
    .values({
      type: "article",
      slug: article.slug,
      title: article.title,
      status: "published",
      payload: {
        excerpt: article.excerpt,
        category: article.category,
        tags: article.tags,
        articleType: "Evergreen Guide",
        schemaType: "BlogPosting",
        seoTitle: article.title,
        metaDescription: article.excerpt,
        image: article.image,
        imageAlt: article.imageAlt,
        imageWidth: 1280,
        imageHeight: 720,
        publishedAt: article.publishedAt,
        contentModifiedAt: article.updatedAt,
        updatedAt: article.updatedAt,
        authorName: "PT. Nawasena International Group",
        authorRole: "Editorial Team",
        authorBio: "Editorial team of PT. Nawasena International Group.",
        factCheckStatus: "Approved",
        relatedProduct: "Arabica Java Ijen",
        primaryCta: "Request Java Ijen Samples",
        primaryCtaUrl: "/sample-request",
        ctaPlacement: "End Only",
        readingTimeMinutes: calculateReadingTimeMinutes(contentText),
        contentText,
      },
    })
    .returning({ id: contentRecords.id });

  report.imported.push({ id: record.id, slug: article.slug });

  if (!article.imageAlt) report.warnings.push({ slug: article.slug, field: "imageAlt" });
  report.warnings.push({ slug: article.slug, field: "reviewer", note: "Manual reviewer still recommended." });
  report.warnings.push({ slug: article.slug, field: "sources", note: "Add sources before expanding technical or market claims." });
}

console.log(JSON.stringify(report, null, 2));
