import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { articles } from "@/data/site";
import { getPublicArticle, getPublicArticles } from "@/lib/articles";
import { site } from "@/data/site";
import { findArticleRedirect } from "@/lib/article-redirects";
import { getDb } from "@/lib/db/client";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getPublicArticle(slug);
  if (!article) return {};
  return {
    title: article.seoTitle || article.title,
    description: article.metaDescription || article.excerpt,
    authors: [{ name: article.authorName }],
    alternates: { canonical: `/news/${article.slug}` },
    robots: {
      index: article.status === "published",
      follow: article.status === "published",
      googleBot: {
        index: article.status === "published",
        follow: article.status === "published",
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "article",
      title: article.ogTitle || article.seoTitle || article.title,
      description: article.ogDescription || article.metaDescription || article.excerpt,
      url: `/news/${article.slug}`,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.authorName],
      images: [{ url: article.ogImage || article.image, width: 1200, height: 630, alt: article.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.ogTitle || article.seoTitle || article.title,
      description: article.ogDescription || article.metaDescription || article.excerpt,
      images: [article.ogImage || article.image],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = await getPublicArticle(slug);
  if (!article) {
    const redirect = await findArticleRedirect(getDb(), `/news/${slug}`);
    if (redirect?.newPath) {
      permanentRedirect(redirect.newPath);
    }
    notFound();
  }
  const allArticles = await getPublicArticles();
  const related = allArticles.filter((item) => item.slug !== article.slug).slice(0, 2);
  const canonical = `${site.domain}/news/${article.slug}`;
  const headings = article.content.filter((block) => typeof block !== "string" && block.type === "heading");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": article.schemaType || "BlogPosting",
    headline: article.title,
    description: article.metaDescription || article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    image: article.image,
    mainEntityOfPage: canonical,
    articleSection: article.category,
    author: { "@type": "Organization", name: article.authorName },
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      logo: { "@type": "ImageObject", url: `${site.domain}/icon.png` },
    },
    articleBody: article.content.map(getContentText).filter(Boolean).join("\n"),
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${site.domain}/news` },
      { "@type": "ListItem", position: 3, name: article.category, item: canonical },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <article className="bg-white py-16">
        <div className="section-shell max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm font-semibold text-stone-500">
            <Link href="/" className="hover:text-[#2e7d32]">Home</Link>
            <span className="px-2">/</span>
            <Link href="/news" className="hover:text-[#2e7d32]">Insights</Link>
            <span className="px-2">/</span>
            <span>{article.category}</span>
          </nav>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2e7d32]">{article.category} - {article.readingTime}</p>
          <h1 className="font-display mt-4 text-5xl font-bold leading-tight text-[#3e2723]">{article.title}</h1>
          <p className="mt-5 text-xl leading-9 text-stone-600">{article.excerpt}</p>
          <div className="mt-5 grid gap-2 text-sm text-stone-500 sm:grid-cols-2">
            <p>By <span className="font-semibold text-[#3e2723]">{article.authorName}</span>{article.authorRole ? `, ${article.authorRole}` : ""}</p>
            <p>Published <time dateTime={article.publishedAt}>{article.publishedAt}</time>. Updated <time dateTime={article.updatedAt}>{article.updatedAt}</time>.</p>
            {article.reviewerName && <p>Reviewed by <span className="font-semibold text-[#3e2723]">{article.reviewerName}</span></p>}
            <p>{article.readingTimeMinutes || 1} min read</p>
          </div>
          <figure className="mt-8">
            <Image
              src={article.image}
              alt={article.imageAlt}
              width={article.imageWidth || 1280}
              height={article.imageHeight || 720}
              priority
              sizes="(max-width: 768px) 100vw, 900px"
              placeholder={article.blurDataUrl ? "blur" : "empty"}
              blurDataURL={article.blurDataUrl || undefined}
              className="max-h-[520px] w-full rounded-sm object-cover"
            />
            {(article.imageCaption || article.imageCredit) && (
              <figcaption className="mt-3 text-sm leading-6 text-stone-500">
                {article.imageCaption}{article.imageCaption && article.imageCredit ? " - " : ""}{article.imageCredit}
              </figcaption>
            )}
          </figure>
          {headings.length > 2 && (
            <nav aria-label="Table of contents" className="mt-8 rounded-sm border border-[#eadfce] bg-[#fffaf1] p-5">
              <h2 className="font-display text-2xl font-bold text-[#3e2723]">Table of contents</h2>
              <ol className="mt-3 grid gap-2 text-sm font-semibold text-[#2e7d32]">
                {headings.map((heading) => <li key={heading.text}>{heading.text}</li>)}
              </ol>
            </nav>
          )}
          <div className="mt-10 grid gap-6 text-lg leading-9 text-stone-700">
            {article.content.map((block, index) => <ArticleBlock key={`${article.slug}-${index}`} block={block} />)}
          </div>
          {article.primaryCta !== "None" && article.ctaPlacement !== "Disabled" && (
            <section className="mt-10 rounded-sm bg-[#2e7d32] p-7 text-white">
              <h2 className="font-display text-3xl font-bold">{article.primaryCta}</h2>
              <p className="mt-3 text-sm leading-7 text-white/80">Discuss current availability, samples, specifications, and commercial next steps with Nawasena.</p>
              <Link href={article.primaryCtaUrl || "/sample-request"} className="mt-5 inline-flex rounded-sm bg-white px-5 py-3 text-sm font-bold text-[#2e7d32]">
                Continue
              </Link>
            </section>
          )}
          {article.relatedProduct && article.relatedProduct !== "None" && (
            <section className="mt-8 rounded-sm border border-[#eadfce] bg-[#fffaf1] p-6">
              <h2 className="font-display text-2xl font-bold text-[#3e2723]">Related product</h2>
              <p className="mt-2 text-sm leading-6 text-stone-600">{article.relatedProduct}</p>
            </section>
          )}
          {article.sourcesText && (
            <section className="mt-8 rounded-sm border border-[#eadfce] p-6">
              <h2 className="font-display text-2xl font-bold text-[#3e2723]">Sources</h2>
              <p className="mt-3 whitespace-pre-line text-sm leading-7 text-stone-600">{article.sourcesText}</p>
            </section>
          )}
          <section className="mt-8 rounded-sm border border-[#eadfce] bg-white p-6">
            <h2 className="font-display text-2xl font-bold text-[#3e2723]">About the author</h2>
            <p className="mt-2 font-bold text-[#3e2723]">{article.authorName}</p>
            <p className="mt-2 text-sm leading-7 text-stone-600">{article.authorBio}</p>
          </section>
          <div className="mt-10 rounded-sm bg-[#f8f6f0] p-6">
            <h2 className="font-display text-2xl font-bold text-[#3e2723]">Related insights</h2>
            <div className="mt-4 grid gap-3">
              {related.map((item) => <Link key={item.slug} href={`/news/${item.slug}`} className="font-bold text-[#2e7d32]">{item.title}</Link>)}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

function ArticleBlock({ block }) {
  if (typeof block === "string") {
    return <p>{block}</p>;
  }

  if (block.type === "heading") {
    return <h2 className="font-display pt-4 text-3xl font-bold leading-tight text-[#3e2723]">{block.text}</h2>;
  }

  if (block.type === "subheading") {
    return <h3 className="font-display pt-2 text-2xl font-bold leading-tight text-[#3e2723]">{block.text}</h3>;
  }

  if (block.type === "list") {
    return (
      <ul className="grid gap-3 pl-5 text-base leading-8">
        {block.items.map((item) => <li key={item} className="list-disc">{item}</li>)}
      </ul>
    );
  }

  if (block.type === "ordered-list") {
    return (
      <ol className="grid gap-3 pl-5 text-base leading-8">
        {block.items.map((item) => <li key={item} className="list-decimal">{item}</li>)}
      </ol>
    );
  }

  if (block.type === "callout") {
    return <p className="border-l-4 border-[#2e7d32] bg-[#f8f6f0] p-5 text-base font-semibold leading-8 text-[#3e2723]">{block.text}</p>;
  }

  return <p>{block.text}</p>;
}

function getContentText(block) {
  if (typeof block === "string") return block;
  if (block.type === "list" || block.type === "ordered-list") return block.items.join("\n");
  return block.text;
}
