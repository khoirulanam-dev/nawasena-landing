import Link from "next/link";
import { articles } from "@/data/site";
import { getPublicArticles } from "@/lib/articles";

export function generateStaticParams() {
  return [...new Set(articles.map((article) => article.category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")))].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: `News Category: ${slug}`, description: `Articles in ${slug}.` };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const allArticles = await getPublicArticles();
  const items = allArticles.filter((article) => article.category.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and") === slug);
  return (
    <main className="py-16">
      <div className="section-shell">
        <h1 className="font-display text-5xl font-bold text-[#3e2723]">Category: {slug}</h1>
        <div className="mt-8 grid gap-4">
          {items.map((article) => <Link key={article.slug} href={`/news/${article.slug}`} className="rounded-sm bg-white p-5 font-bold text-[#3e2723]">{article.title}</Link>)}
        </div>
      </div>
    </main>
  );
}
