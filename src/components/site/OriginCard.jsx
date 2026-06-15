import Image from "next/image";
import Link from "next/link";

export function OriginCard({ origin }) {
  return (
    <article className="overflow-hidden rounded-sm border border-[#eadfce] bg-white shadow-sm">
      <div className="relative aspect-[16/10]">
        <Image src={origin.image} alt={`${origin.name} Indonesian Arabica coffee origin`} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2e7d32]">{origin.province}, {origin.country}</p>
        <h3 className="font-display mt-3 text-3xl font-bold text-[#3e2723]">{origin.name}</h3>
        <p className="mt-3 text-sm leading-7 text-stone-600">{origin.description}</p>
        <Link href={`/origins/${origin.slug}`} className="mt-5 inline-flex text-sm font-bold text-[#2e7d32] hover:text-[#245d28]">
          Explore origin
        </Link>
      </div>
    </article>
  );
}
