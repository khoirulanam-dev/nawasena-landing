import Link from "next/link";
import { articles } from "@/data/site";

export function generateStaticParams() {
  return [...new Set(articles.flatMap((article) => article.tags.map((tag) => tag.toLowerCase().replaceAll(" ", "-"))))].map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  return { title: `News Tag: ${params.slug}`, description: `Articles tagged ${params.slug}.` };
}

export default function TagPage({ params }) {
  const items = articles.filter((article) => article.tags.some((tag) => tag.toLowerCase().replaceAll(" ", "-") === params.slug));
  return (
    <main className="py-16">
      <div className="section-shell">
        <h1 className="font-display text-5xl font-bold text-[#3e2723]">Tag: {params.slug}</h1>
        <div className="mt-8 grid gap-4">
          {items.map((article) => <Link key={article.slug} href={`/news/${article.slug}`} className="rounded-sm bg-white p-5 font-bold text-[#3e2723]">{article.title}</Link>)}
        </div>
      </div>
    </main>
  );
}
