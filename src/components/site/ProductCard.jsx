import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-sm border border-[#eadfce] bg-white shadow-sm">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] bg-stone-200">
          <Image src={product.image} alt={`${product.name} from ${product.origin}`} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide text-[#2e7d32]">
          <span>{product.origin}</span>
          <span>{product.process}</span>
          <span>{product.status}</span>
        </div>
        <h3 className="font-display mt-3 text-2xl font-bold text-[#3e2723]">
          <Link href={`/products/${product.slug}`} className="hover:text-[#2e7d32]">{product.name}</Link>
        </h3>
        <p className="mt-3 text-sm leading-7 text-stone-600">{product.shortDescription}</p>
        <Link href={`/products/${product.slug}`} className="mt-5 inline-flex text-sm font-bold text-[#2e7d32] hover:text-[#245d28]">
          View product details
        </Link>
      </div>
    </article>
  );
}
