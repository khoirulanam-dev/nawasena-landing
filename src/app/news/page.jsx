import { ArticleCard } from "@/components/site/ArticleCard";
import { PageHero } from "@/components/site/PageHero";
import { getPublicArticles } from "@/lib/articles";

export const metadata = {
  title: "News and Insights",
  description: "Buyer guides, origin notes, processing explainers, quality and grading insights, export logistics, harvest updates, and company news.",
};

export default async function NewsPage() {
  const articles = await getPublicArticles();

  return (
    <main>
      <PageHero eyebrow="News and Insights" title="Coffee sourcing insights for B2B buyers" description="Articles support buyer education, product pages, origin pages, and topical authority for Indonesian green coffee sourcing." image="/images/hero2.webp" />
      <section className="py-16">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>
    </main>
  );
}
