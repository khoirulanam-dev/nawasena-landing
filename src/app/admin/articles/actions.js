"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { getDb } from "@/lib/db/client";
import { contentRecords } from "@/lib/db/schema";
import { calculateReadingTimeMinutes, slugify } from "@/lib/articles";
import { articlePath, createArticleRedirect } from "@/lib/article-redirects";
import { writeAuditLog } from "@/lib/admin/audit";

function readArticleForm(formData) {
  const title = String(formData.get("title") || "").trim();
  const slug = slugify(String(formData.get("slug") || title));
  const tags = String(formData.get("tags") || "")
    .split(",")
    .map((tag) => tag.trim().replace(/\s+/g, " ").toLowerCase())
    .filter(Boolean);
  const uniqueTags = [...new Set(tags)].slice(0, 8);
  const contentText = String(formData.get("contentText") || "").trim();
  const status = String(formData.get("status") || "draft");
  const image = String(formData.get("image") || "").trim();
  const imageAlt = String(formData.get("imageAlt") || "").trim();
  const seoTitle = String(formData.get("seoTitle") || title).trim();
  const metaDescription = String(formData.get("metaDescription") || formData.get("excerpt") || "").trim();

  if (status === "published") {
    const required = [
      ["excerpt", String(formData.get("excerpt") || "").trim()],
      ["content", contentText],
      ["seo title", seoTitle],
      ["meta description", metaDescription],
      ["featured image", image],
      ["image alt text", imageAlt],
      ["author", String(formData.get("authorName") || "").trim()],
      ["schema type", String(formData.get("schemaType") || "").trim()],
    ];

    const missing = required.filter(([, value]) => !value).map(([label]) => label);

    if (missing.length > 0) {
      throw new Error(`Cannot publish. Missing: ${missing.join(", ")}.`);
    }
  }

  if (!title || !slug) {
    throw new Error("Article title and slug are required.");
  }

  return {
    type: "article",
    slug,
    title,
    status: ["published", "scheduled", "review", "archived"].includes(status) ? status : "draft",
    payload: {
      excerpt: String(formData.get("excerpt") || "").trim(),
      category: String(formData.get("category") || "Insights").trim(),
      tags: uniqueTags,
      articleType: String(formData.get("articleType") || "Evergreen Guide").trim(),
      schemaType: String(formData.get("schemaType") || "BlogPosting").trim(),
      seoTitle,
      metaDescription,
      focusTopic: String(formData.get("focusTopic") || "").trim(),
      searchIntent: String(formData.get("searchIntent") || "Informational").trim(),
      canonicalOverride: String(formData.get("canonicalOverride") || "").trim(),
      isIndexable: String(formData.get("isIndexable") || "") === "on",
      ogTitle: String(formData.get("ogTitle") || seoTitle).trim(),
      ogDescription: String(formData.get("ogDescription") || metaDescription).trim(),
      ogImage: String(formData.get("ogImage") || image).trim(),
      image,
      imageAlt,
      imageWidth: Number(formData.get("imageWidth") || 1280),
      imageHeight: Number(formData.get("imageHeight") || 720),
      blurDataUrl: String(formData.get("blurDataUrl") || "").trim(),
      imageCaption: String(formData.get("imageCaption") || "").trim(),
      imageCredit: String(formData.get("imageCredit") || "").trim(),
      imageSourceUrl: String(formData.get("imageSourceUrl") || "").trim(),
      publishedAt: String(formData.get("publishedAt") || new Date().toISOString().slice(0, 10)).trim(),
      contentModifiedAt: String(formData.get("contentModifiedAt") || new Date().toISOString().slice(0, 10)).trim(),
      scheduledAt: String(formData.get("scheduledAt") || "").trim(),
      authorName: String(formData.get("authorName") || "PT. Nawasena International Group").trim(),
      authorRole: String(formData.get("authorRole") || "Editorial Team").trim(),
      authorBio: String(formData.get("authorBio") || "").trim(),
      reviewerName: String(formData.get("reviewerName") || "").trim(),
      factCheckStatus: String(formData.get("factCheckStatus") || "Not Checked").trim(),
      relatedProduct: String(formData.get("relatedProduct") || "Arabica Java Ijen").trim(),
      primaryCta: String(formData.get("primaryCta") || "Request Java Ijen Samples").trim(),
      primaryCtaUrl: String(formData.get("primaryCtaUrl") || "/sample-request").trim(),
      ctaPlacement: String(formData.get("ctaPlacement") || "Middle and End").trim(),
      relatedArticles: String(formData.get("relatedArticles") || "").trim(),
      sourcesText: String(formData.get("sourcesText") || "").trim(),
      editorialNotes: String(formData.get("editorialNotes") || "").trim(),
      readingTimeMinutes: calculateReadingTimeMinutes(contentText),
      contentText,
    },
  };
}

function revalidateArticlePaths(slug) {
  revalidatePath("/admin");
  revalidatePath("/admin/articles");
  revalidatePath("/news");
  revalidatePath("/sitemap.xml");

  if (slug) {
    revalidatePath(`/news/${slug}`);
  }
}

function getActorFromForm(formData) {
  return String(formData.get("actor") || "admin");
}

export async function createArticle(formData) {
  const db = getDb();

  if (!db) {
    throw new Error("DATABASE_URL is not configured.");
  }

  const values = readArticleForm(formData);
  const [record] = await db.insert(contentRecords).values(values).returning({ id: contentRecords.id });

  await writeAuditLog(db, {
    actor: getActorFromForm(formData),
    action: values.status === "published" ? "article.published" : "article.created",
    entityType: "article",
    entityId: record.id,
    metadata: { slug: values.slug, status: values.status },
  });

  revalidateArticlePaths(values.slug);
  redirect(`/admin/articles/${record.id}`);
}

export async function updateArticle(formData) {
  const db = getDb();
  const id = Number(formData.get("id"));

  if (!db || !id) {
    throw new Error("Article cannot be updated.");
  }

  const [previous] = await db.select().from(contentRecords).where(eq(contentRecords.id, id)).limit(1);

  if (!previous) {
    throw new Error("Article not found.");
  }

  const values = readArticleForm(formData);
  const previousStatus = previous.status;
  const previousSlug = previous.slug;
  const publishedSlugChanged = previousStatus === "published" && previousSlug !== values.slug;

  if (publishedSlugChanged) {
    await createArticleRedirect(db, { articleRecordId: id, oldSlug: previousSlug, newSlug: values.slug });
  }

  await db
    .update(contentRecords)
    .set({ ...values, updatedAt: new Date() })
    .where(eq(contentRecords.id, id));

  await writeAuditLog(db, {
    actor: getActorFromForm(formData),
    action: publishedSlugChanged ? "article.slug_changed" : values.status === "published" && previousStatus !== "published" ? "article.published" : values.status === "scheduled" ? "article.scheduled" : values.status === "archived" ? "article.archived" : "article.updated",
    entityType: "article",
    entityId: id,
    metadata: { oldPath: publishedSlugChanged ? articlePath(previousSlug) : undefined, newPath: articlePath(values.slug), status: values.status },
  });

  revalidateArticlePaths(values.slug);
  if (publishedSlugChanged) {
    revalidateArticlePaths(previousSlug);
  }
  redirect("/admin/articles");
}

export async function deleteArticle(formData) {
  const db = getDb();
  const id = Number(formData.get("id"));
  const slug = String(formData.get("slug") || "");

  if (!db || !id) {
    throw new Error("Article cannot be deleted.");
  }

  await db.delete(contentRecords).where(eq(contentRecords.id, id));
  await writeAuditLog(db, {
    actor: getActorFromForm(formData),
    action: "article.deleted",
    entityType: "article",
    entityId: id,
    metadata: { slug },
  });
  revalidateArticlePaths(slug);
  redirect("/admin/articles");
}
