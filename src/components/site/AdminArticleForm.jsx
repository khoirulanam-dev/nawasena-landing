"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { site } from "@/data/site";

const categories = ["Buyer Guide", "Coffee Origins", "Quality & Grading", "Market Insights", "Export Guide", "Sustainability & Traceability", "Company Updates"];
const articleTypes = ["Evergreen Guide", "Origin Profile", "Quality Education", "Market Analysis", "Industry News", "Company Update"];
const searchIntents = ["Informational", "Commercial investigation", "Transactional", "Navigational", "Mixed"];
const schemaTypes = ["BlogPosting", "Article", "NewsArticle"];
const products = ["None", "Arabica Java Ijen", "Arabica Aceh Gayo"];
const ctas = ["Request Java Ijen Samples", "Request Samples", "Request a Quotation", "View Product Specifications", "Contact Export Team", "Download Catalogue", "None"];
const ctaPlacements = ["Middle and End", "End Only", "Disabled"];
const factCheckStatuses = ["Not Checked", "Under Review", "Verified", "Approved"];
const statuses = ["draft", "review", "scheduled", "published", "archived"];
const tabs = ["Content", "Media", "SEO", "Links & Conversion", "Publication"];

const defaultArticle = {
  title: "",
  slug: "",
  excerpt: "",
  category: "Buyer Guide",
  tags: ["green coffee", "indonesian coffee"],
  articleType: "Evergreen Guide",
  schemaType: "BlogPosting",
  seoTitle: "",
  metaDescription: "",
  focusTopic: "",
  searchIntent: "Informational",
  image: "/images/hero2.webp",
  imageAlt: "",
  imageWidth: 1280,
  imageHeight: 720,
  blurDataUrl: "",
  imageCaption: "",
  imageCredit: "",
  imageSourceUrl: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
  relatedProduct: "Arabica Java Ijen",
  primaryCta: "Request Java Ijen Samples",
  primaryCtaUrl: "/sample-request",
  ctaPlacement: "Middle and End",
  relatedArticles: "",
  sourcesText: "",
  authorName: "PT. Nawasena International Group",
  authorRole: "Editorial Team",
  authorBio: "Editorial team of PT. Nawasena International Group.",
  reviewerName: "",
  factCheckStatus: "Not Checked",
  publishedAt: new Date().toISOString().slice(0, 10),
  contentModifiedAt: new Date().toISOString().slice(0, 10),
  scheduledAt: "",
  editorialNotes: "",
  contentText: "",
  status: "draft",
};

export function AdminArticleForm({ article, action, submitLabel, mediaItems = [] }) {
  const values = { ...defaultArticle, ...article };
  const [activeTab, setActiveTab] = useState("Content");
  const [draft, setDraft] = useState({
    ...values,
    tags: Array.isArray(values.tags) ? values.tags.join(", ") : values.tags || "",
    seoTitle: values.seoTitle || values.title,
    metaDescription: values.metaDescription || values.excerpt,
    ogTitle: values.ogTitle || values.seoTitle || values.title,
    ogDescription: values.ogDescription || values.metaDescription || values.excerpt,
    ogImage: values.ogImage || values.image,
  });
  const [uploadStatus, setUploadStatus] = useState("idle");
  const canonical = `${site.domain}/news/${draft.slug || "article-slug"}`;
  const readiness = getReadiness(draft);

  function update(event) {
    const { name, value, type, checked } = event.target;
    setDraft((current) => {
      const next = { ...current, [name]: type === "checkbox" ? checked : value };

      if (name === "title" && !current.slug) {
        next.slug = slugify(value);
      }

      if (name === "title" && !current.seoTitle) {
        next.seoTitle = value;
      }

      if (name === "excerpt" && !current.metaDescription) {
        next.metaDescription = value;
      }

      return next;
    });
  }

  async function uploadImage(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setUploadStatus("uploading");

    const response = await fetch("/api/admin/media/upload", { method: "POST", body: formData });
    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      setUploadStatus(payload.error || "Upload failed.");
      return;
    }

    const uploaded = payload.media;
    setDraft((current) => ({
      ...current,
      image: uploaded.publicUrl,
      imageAlt: uploaded.altText,
      imageWidth: uploaded.width,
      imageHeight: uploaded.height,
      blurDataUrl: uploaded.blurDataUrl,
      imageCaption: uploaded.caption || "",
      imageCredit: uploaded.credit || "",
      imageSourceUrl: uploaded.sourceUrl || "",
      ogImage: current.ogImage || uploaded.publicUrl,
    }));
    form.reset();
    setUploadStatus("uploaded");
  }

  function chooseMedia(event) {
    const selected = mediaItems.find((item) => item.publicUrl === event.target.value);
    if (!selected) return;

    setDraft((current) => ({
      ...current,
      image: selected.publicUrl,
      imageAlt: selected.altText,
      imageWidth: selected.width,
      imageHeight: selected.height,
      blurDataUrl: selected.blurDataUrl,
      imageCaption: selected.caption || "",
      imageCredit: selected.credit || "",
      imageSourceUrl: selected.sourceUrl || "",
      ogImage: current.ogImage || selected.publicUrl,
    }));
  }

  return (
    <>
      <form action={action} onChange={update} className="grid gap-5">
        {values.id && <input type="hidden" name="id" value={values.id} />}
        <input type="hidden" name="image" value={draft.image || ""} />
        <input type="hidden" name="imageAlt" value={draft.imageAlt || ""} />
        <input type="hidden" name="imageWidth" value={draft.imageWidth || 1280} />
        <input type="hidden" name="imageHeight" value={draft.imageHeight || 720} />
        <input type="hidden" name="blurDataUrl" value={draft.blurDataUrl || ""} />
        <input type="hidden" name="imageCaption" value={draft.imageCaption || ""} />
        <input type="hidden" name="imageCredit" value={draft.imageCredit || ""} />
        <input type="hidden" name="imageSourceUrl" value={draft.imageSourceUrl || ""} />
        <input type="hidden" name="actor" value="admin" />

      <div className="overflow-hidden rounded-sm border border-[#e1d4c3] bg-white shadow-lg shadow-[#3e2723]/5">
        <div className="flex flex-wrap border-b border-[#eadfce] bg-[#fffaf1]">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "border-r border-[#eadfce] px-4 py-3 text-sm font-bold transition",
                activeTab === tab ? "bg-[#2e7d32] text-white" : "text-[#3e2723] hover:bg-white",
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid gap-5 p-5 xl:grid-cols-[1fr_340px]">
          <div>
            {activeTab === "Content" && (
              <div className="grid gap-5">
                <Field label="Title" name="title" value={draft.title} required />
                <Field label="Slug" name="slug" value={draft.slug} required helper={canonical} />
                {values.status === "published" && values.slug && values.slug !== draft.slug && (
                  <div className="rounded-sm border border-amber-200 bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-800">
                    This article is already published. Saving this slug change will create a permanent 301 redirect from the previous URL.
                  </div>
                )}
                <Field label="Excerpt" name="excerpt" value={draft.excerpt} required textarea rows={3} helper={`${draft.excerpt.length}/240 recommended characters`} />
                <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
                  Article body
                  <textarea
                    required
                    name="contentText"
                    value={draft.contentText}
                    onChange={update}
                    rows={20}
                    className="focus-ring w-full rounded-sm border border-[#d7c7b4] bg-white px-4 py-3 font-normal leading-7"
                    placeholder={"Paragraphs separated by blank lines.\n\n## H2 heading\n### H3 heading\n- Bullet list\n1. Ordered list\n> Callout or quote"}
                  />
                </label>
              </div>
            )}

            {activeTab === "Media" && (
              <div className="grid gap-6">
                <div className="rounded-sm border border-[#eadfce] bg-[#fffaf1] p-5">
                  <p className="font-display text-2xl font-bold text-[#3e2723]">Featured image</p>
                  <p className="mt-2 text-sm leading-6 text-stone-500">{draft.image || "No image selected"}</p>
                  {draft.image && <img src={draft.image} alt={draft.imageAlt || ""} className="mt-4 aspect-video w-full rounded-sm object-cover" />}
                </div>

                <div className="grid gap-4 rounded-sm border border-[#eadfce] p-5">
                  <h2 className="font-display text-2xl font-bold text-[#3e2723]">Choose from media library</h2>
                  <select onChange={chooseMedia} defaultValue="" className="focus-ring rounded-sm border border-[#d7c7b4] bg-white px-4 py-3 text-sm">
                    <option value="">Select uploaded media</option>
                    {mediaItems.map((item) => <option key={item.id} value={item.publicUrl}>{item.altText} - {item.generatedFilename}</option>)}
                  </select>
                </div>

                <div className="grid gap-4 rounded-sm border border-[#eadfce] p-5">
                  <h2 className="font-display text-2xl font-bold text-[#3e2723]">Upload new image</h2>
                  <div className="grid gap-4">
                    <input form="article-media-upload" type="file" name="file" accept="image/jpeg,image/png,image/webp,image/avif" required className="text-sm" />
                    <Field form="article-media-upload" label="Alt text" name="altText" value={draft.imageAlt} required />
                    <Field form="article-media-upload" label="Filename base" name="filenameBase" value={draft.title || "article-image"} />
                    <Field form="article-media-upload" label="Caption" name="caption" value={draft.imageCaption} />
                    <Field form="article-media-upload" label="Credit" name="credit" value={draft.imageCredit} />
                    <Field form="article-media-upload" label="Source URL" name="sourceUrl" value={draft.imageSourceUrl} />
                    <button form="article-media-upload" type="submit" className="rounded-sm bg-[#2e7d32] px-5 py-3 text-sm font-bold text-white hover:bg-[#245d28]">
                      Upload and optimize image
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "SEO" && (
              <div className="grid gap-5">
                <Field label="SEO title" name="seoTitle" value={draft.seoTitle} required helper={`${draft.seoTitle.length} characters. Site title is appended automatically by metadata template.`} />
                <Field label="Meta description" name="metaDescription" value={draft.metaDescription} required textarea rows={3} helper={`${draft.metaDescription.length}/160 recommended characters`} />
                <Field label="Focus topic" name="focusTopic" value={draft.focusTopic} />
                <Select label="Search intent" name="searchIntent" value={draft.searchIntent} options={searchIntents} />
                <Select label="Schema type" name="schemaType" value={draft.schemaType} options={schemaTypes} />
                <Field label="OG title" name="ogTitle" value={draft.ogTitle} />
                <Field label="OG description" name="ogDescription" value={draft.ogDescription} textarea rows={2} />
                <Field label="OG image" name="ogImage" value={draft.ogImage} />
                <div className="rounded-sm border border-[#eadfce] bg-[#fffaf1] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2e7d32]">SERP preview approximation</p>
                  <p className="mt-3 text-lg font-bold text-[#1a0dab]">{draft.seoTitle || draft.title || "Article SEO title"}</p>
                  <p className="mt-1 text-sm text-[#006621]">{canonical}</p>
                  <p className="mt-1 text-sm leading-6 text-stone-600">{draft.metaDescription || draft.excerpt || "Meta description preview."}</p>
                </div>
              </div>
            )}

            {activeTab === "Links & Conversion" && (
              <div className="grid gap-5">
                <Select label="Related product" name="relatedProduct" value={draft.relatedProduct} options={products} />
                <Select label="Primary CTA" name="primaryCta" value={draft.primaryCta} options={ctas} />
                <Field label="CTA target URL" name="primaryCtaUrl" value={draft.primaryCtaUrl} />
                <Select label="CTA placement" name="ctaPlacement" value={draft.ctaPlacement} options={ctaPlacements} />
                <Field label="Related article slugs" name="relatedArticles" value={draft.relatedArticles} helper="Optional. Separate published article slugs with commas." />
                <Field label="Sources" name="sourcesText" value={draft.sourcesText} textarea rows={6} helper="Add source title, URL, publisher, publication date, accessed date, and source type when claims require sourcing." />
              </div>
            )}

            {activeTab === "Publication" && (
              <div className="grid gap-5">
                <Select label="Status" name="status" value={draft.status} options={statuses} />
                <Select label="Article type" name="articleType" value={draft.articleType} options={articleTypes} />
                <Select label="Primary category" name="category" value={draft.category} options={categories} />
                <Field label="Tags" name="tags" value={draft.tags} helper="Comma-separated for now; normalized and de-duplicated on save. Use 3-8 tags." />
                <Field label="Published date" name="publishedAt" value={draft.publishedAt} type="date" />
                <Field label="Content modified date" name="contentModifiedAt" value={draft.contentModifiedAt} type="date" />
                <Field label="Scheduled publish date/time" name="scheduledAt" value={draft.scheduledAt} type="datetime-local" />
                <Field label="Author name" name="authorName" value={draft.authorName} required />
                <Field label="Author role" name="authorRole" value={draft.authorRole} />
                <Field label="Author bio" name="authorBio" value={draft.authorBio} textarea rows={3} />
                <Field label="Reviewer" name="reviewerName" value={draft.reviewerName} />
                <Select label="Fact-check status" name="factCheckStatus" value={draft.factCheckStatus} options={factCheckStatuses} />
                <Field label="Editorial notes" name="editorialNotes" value={draft.editorialNotes} textarea rows={5} />
              </div>
            )}
          </div>

          <aside className="grid content-start gap-5">
            <div className="rounded-sm border border-[#eadfce] bg-[#fffaf1] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2e7d32]">SEO readiness</p>
              <p className="font-display mt-2 text-4xl font-bold text-[#3e2723]">{readiness.score}%</p>
              <div className="mt-4 grid gap-2 text-sm">
                {readiness.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-3">
                    <span className="text-stone-600">{item.label}</span>
                    <span className={item.ok ? "font-bold text-green-700" : "font-bold text-amber-700"}>{item.ok ? "OK" : "Check"}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-sm border border-[#eadfce] bg-white p-5">
              <p className="font-bold text-[#3e2723]">Canonical</p>
              <p className="mt-2 break-all text-sm leading-6 text-stone-500">{canonical}</p>
              <p className="mt-4 font-bold text-[#3e2723]">Calculated reading time</p>
              <p className="mt-1 text-sm text-stone-500">{calculateReadingTime(draft.contentText)} min read</p>
              <p className="mt-4 font-bold text-[#3e2723]">Robots</p>
              <p className="mt-1 text-sm text-stone-500">{draft.status === "published" ? "Index, follow" : "Noindex until published"}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button type="submit" className="rounded-sm bg-[#2e7d32] px-5 py-3 text-sm font-bold text-white hover:bg-[#245d28]">
                {submitLabel}
              </button>
              <Link href="/admin/articles" className="rounded-sm border border-[#d7c7b4] bg-white px-5 py-3 text-sm font-bold text-[#3e2723] hover:bg-[#fffaf1]">
                Cancel
              </Link>
            </div>
          </aside>
        </div>
      </div>

      </form>

      <form id="article-media-upload" onSubmit={uploadImage} className="hidden" />
      {uploadStatus !== "idle" && (
        <p className={clsx("text-sm font-semibold", uploadStatus === "uploaded" ? "text-green-700" : uploadStatus === "uploading" ? "text-stone-600" : "text-red-700")}>
          {uploadStatus === "uploading" ? "Uploading and optimizing image..." : uploadStatus === "uploaded" ? "Image uploaded and selected." : uploadStatus}
        </p>
      )}
    </>
  );
}

function Field({ label, name, value = "", type = "text", required = false, textarea = false, rows = 2, helper, form }) {
  const props = { form, name, value, onChange: () => {}, required };

  return (
    <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
      {label}
      {textarea ? (
        <textarea {...props} rows={rows} className="focus-ring w-full rounded-sm border border-[#d7c7b4] bg-white px-4 py-3 font-normal leading-7" />
      ) : (
        <input {...props} type={type} className="focus-ring w-full rounded-sm border border-[#d7c7b4] bg-white px-4 py-3 font-normal" />
      )}
      {helper && <span className="text-xs font-normal leading-5 text-stone-500">{helper}</span>}
    </label>
  );
}

function Select({ label, name, value, options }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
      {label}
      <select name={name} value={value} onChange={() => {}} className="focus-ring rounded-sm border border-[#d7c7b4] bg-white px-4 py-3 font-normal">
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  );
}

function getReadiness(draft) {
  const items = [
    { label: "Title", ok: Boolean(draft.title) },
    { label: "Valid slug", ok: /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(draft.slug || "") },
    { label: "Excerpt", ok: Boolean(draft.excerpt) },
    { label: "Body", ok: Boolean(draft.contentText) && !hasPlaceholders(draft.contentText) },
    { label: "Meta description", ok: Boolean(draft.metaDescription) },
    { label: "Featured image", ok: Boolean(draft.image) },
    { label: "Image alt", ok: Boolean(draft.imageAlt) && !["coffee image", "image"].includes(draft.imageAlt.toLowerCase()) },
    { label: "Author", ok: Boolean(draft.authorName) },
    { label: "Category", ok: Boolean(draft.category) },
    { label: "CTA", ok: draft.primaryCta !== "None" && draft.ctaPlacement !== "Disabled" },
    { label: "Schema", ok: Boolean(draft.schemaType) },
    { label: "Fact-check", ok: draft.status !== "published" || ["Verified", "Approved"].includes(draft.factCheckStatus) },
  ];
  const score = Math.round((items.filter((item) => item.ok).length / items.length) * 100);
  return { score, items };
}

function hasPlaceholders(value) {
  return /lorem ipsum|todo|tbd|insert source|insert link|\[image\]|\[link\]|placeholder/i.test(value);
}

function calculateReadingTime(value = "") {
  return Math.max(1, Math.ceil(value.trim().split(/\s+/).filter(Boolean).length / 200));
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
