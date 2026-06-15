import Image from "next/image";
import Link from "next/link";

export function ArticleCard({ article }) {
  return (
    <article className="overflow-hidden rounded-sm border border-[#eadfce] bg-white shadow-sm">
      <Link href={`/news/${article.slug}`} className="block">
        <div className="relative aspect-[16/10]">
          <Image src={article.image} alt={article.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
        </div>
      </Link>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2e7d32]">{article.category} - {article.readingTime}</p>
        <h3 className="font-display mt-3 text-2xl font-bold text-[#3e2723]">
          <Link href={`/news/${article.slug}`} className="hover:text-[#2e7d32]">{article.title}</Link>
        </h3>
        <p className="mt-3 text-sm leading-7 text-stone-600">{article.excerpt}</p>
      </div>
    </article>
  );
}
