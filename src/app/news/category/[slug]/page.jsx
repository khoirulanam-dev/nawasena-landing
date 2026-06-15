import Link from "next/link";
import { articles } from "@/data/site";

export function generateStaticParams() {
  return [...new Set(articles.map((article) => article.category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")))].map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  return { title: `News Category: ${params.slug}`, description: `Articles in ${params.slug}.` };
}

export default function CategoryPage({ params }) {
  const items = articles.filter((article) => article.category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and") === params.slug);
  return (
    <main className="py-16">
      <div className="section-shell">
        <h1 className="font-display text-5xl font-bold text-[#3e2723]">Category: {params.slug}</h1>
        <div className="mt-8 grid gap-4">
          {items.map((article) => <Link key={article.slug} href={`/news/${article.slug}`} className="rounded-sm bg-white p-5 font-bold text-[#3e2723]">{article.title}</Link>)}
        </div>
      </div>
    </main>
  );
}
