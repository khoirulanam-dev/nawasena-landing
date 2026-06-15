import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/site";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }) {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, images: [article.image] },
  };
}

export default function ArticlePage({ params }) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 2);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    image: article.image,
    author: { "@type": "Organization", name: "PT. Nawasena International Group" },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="bg-white py-16">
        <div className="section-shell max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2e7d32]">{article.category} - {article.readingTime}</p>
          <h1 className="font-display mt-4 text-5xl font-bold leading-tight text-[#3e2723]">{article.title}</h1>
          <p className="mt-4 text-sm text-stone-500">Published {article.publishedAt}. Updated {article.updatedAt}.</p>
          <Image src={article.image} alt={article.imageAlt} width={1280} height={900} priority className="mt-8 max-h-[520px] w-full rounded-sm object-cover" />
          <div className="mt-10 grid gap-6 text-lg leading-9 text-stone-700">
            {article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
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
