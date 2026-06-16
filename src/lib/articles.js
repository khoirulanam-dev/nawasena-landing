import { desc, eq } from "drizzle-orm";
import { articles as seedArticles } from "@/data/site";
import { getDb } from "@/lib/db/client";
import { contentRecords } from "@/lib/db/schema";
import { calculateReadingTimeMinutes, parseArticleContent, stringifyArticleContent } from "@/lib/article-utils";

export { calculateReadingTimeMinutes, parseArticleContent, slugify, stringifyArticleContent } from "@/lib/article-utils";

export function normalizeArticleRecord(record) {
  const payload = record.payload || {};
  const contentText = payload.contentText || "";

  return {
    id: record.id,
    source: "database",
    slug: record.slug,
    title: record.title,
    excerpt: payload.excerpt || "",
    category: payload.category || "Insights",
    tags: payload.tags || [],
    publishedAt: payload.publishedAt || record.createdAt?.toISOString?.().slice(0, 10) || "",
    updatedAt: record.updatedAt?.toISOString?.().slice(0, 10) || payload.updatedAt || "",
    readingTimeMinutes: payload.readingTimeMinutes || calculateReadingTimeMinutes(contentText),
    readingTime: `${payload.readingTimeMinutes || calculateReadingTimeMinutes(contentText)} min read`,
    image: payload.image || "/images/hero2.webp",
    imageAlt: payload.imageAlt || record.title,
    imageWidth: payload.imageWidth || 1280,
    imageHeight: payload.imageHeight || 720,
    blurDataUrl: payload.blurDataUrl || "",
    imageCaption: payload.imageCaption || "",
    imageCredit: payload.imageCredit || "",
    imageSourceUrl: payload.imageSourceUrl || "",
    seoTitle: payload.seoTitle || record.title,
    metaDescription: payload.metaDescription || payload.excerpt || "",
    focusTopic: payload.focusTopic || "",
    searchIntent: payload.searchIntent || "Informational",
    articleType: payload.articleType || "Evergreen Guide",
    schemaType: payload.schemaType || "BlogPosting",
    ogTitle: payload.ogTitle || payload.seoTitle || record.title,
    ogDescription: payload.ogDescription || payload.metaDescription || payload.excerpt || "",
    ogImage: payload.ogImage || payload.image || "/images/hero2.webp",
    isIndexable: payload.isIndexable !== false,
    authorName: payload.authorName || "PT. Nawasena International Group",
    authorRole: payload.authorRole || "Editorial Team",
    authorBio: payload.authorBio || "Editorial team of PT. Nawasena International Group.",
    reviewerName: payload.reviewerName || "",
    factCheckStatus: payload.factCheckStatus || "Not Checked",
    relatedProduct: payload.relatedProduct || "Arabica Java Ijen",
    primaryCta: payload.primaryCta || "Request Java Ijen Samples",
    primaryCtaUrl: payload.primaryCtaUrl || "/sample-request",
    ctaPlacement: payload.ctaPlacement || "Middle and End",
    sourcesText: payload.sourcesText || "",
    editorialNotes: payload.editorialNotes || "",
    content: parseArticleContent(contentText),
    contentText,
    status: record.status,
  };
}

export function normalizeSeedArticle(article) {
  return {
    ...article,
    source: "static",
    status: "published",
    isIndexable: true,
    readingTimeMinutes: calculateReadingTimeMinutes(stringifyArticleContent(article.content)),
    readingTime: `${calculateReadingTimeMinutes(stringifyArticleContent(article.content))} min read`,
    seoTitle: article.title,
    metaDescription: article.excerpt,
    focusTopic: "",
    searchIntent: "Informational",
    articleType: "Evergreen Guide",
    schemaType: "BlogPosting",
    ogTitle: article.title,
    ogDescription: article.excerpt,
    ogImage: article.image,
    imageCaption: "",
    imageCredit: "",
    imageSourceUrl: "",
    authorName: "PT. Nawasena International Group",
    authorRole: "Editorial Team",
    authorBio: "Editorial team of PT. Nawasena International Group.",
    reviewerName: "",
    factCheckStatus: "Approved",
    relatedProduct: "Arabica Java Ijen",
    primaryCta: "Request Java Ijen Samples",
    primaryCtaUrl: "/sample-request",
    ctaPlacement: "End Only",
    sourcesText: "",
    editorialNotes: "",
    contentText: stringifyArticleContent(article.content),
  };
}

export async function getDatabaseArticles({ includeDrafts = false } = {}) {
  const db = getDb();

  if (!db) {
    return [];
  }

  let records = [];

  try {
    records = await db
      .select()
      .from(contentRecords)
      .where(eq(contentRecords.type, "article"))
      .orderBy(desc(contentRecords.updatedAt));
  } catch {
    return [];
  }

  return records
    .filter((record) => includeDrafts || (record.status === "published" && record.payload?.isIndexable !== false))
    .map(normalizeArticleRecord);
}

export async function getPublicArticles() {
  const databaseArticles = await getDatabaseArticles();
  if (process.env.DISABLE_STATIC_ARTICLE_FALLBACK === "true") {
    return databaseArticles;
  }
  return mergeArticles(databaseArticles, seedArticles.map(normalizeSeedArticle));
}

export async function getAdminArticles() {
  const databaseArticles = await getDatabaseArticles({ includeDrafts: true });
  if (process.env.DISABLE_STATIC_ARTICLE_FALLBACK === "true") {
    return databaseArticles;
  }
  return mergeArticles(databaseArticles, seedArticles.map(normalizeSeedArticle));
}

export async function getPublicArticle(slug) {
  const databaseArticles = await getDatabaseArticles();
  const seedArticle = seedArticles.find((article) => article.slug === slug);
  return databaseArticles.find((article) => article.slug === slug) || (process.env.DISABLE_STATIC_ARTICLE_FALLBACK === "true" ? null : seedArticle ? normalizeSeedArticle(seedArticle) : null);
}

function mergeArticles(primary, fallback) {
  const slugs = new Set(primary.map((article) => article.slug));
  return [...primary, ...fallback.filter((article) => !slugs.has(article.slug))];
}

export async function getEditableArticle(id) {
  const db = getDb();

  if (!db) {
    return null;
  }

  const [record] = await db.select().from(contentRecords).where(eq(contentRecords.id, Number(id))).limit(1);
  return record && record.type === "article" ? normalizeArticleRecord(record) : null;
}
