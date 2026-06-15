import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { processingMethods } from "@/data/site";

export const metadata = {
  title: "Processing Methods",
  description: "Explore natural, natural anaerobic, full washed, and semi-washed Indonesian Arabica green coffee processing methods.",
};

export default function ProcessingPage() {
  return (
    <main>
      <PageHero eyebrow="Processing" title="Coffee processing methods in the Nawasena portfolio" description="Processing can influence cup character, but final profile depends on lot quality, origin, drying, storage, and roasting." image="/images/semi-wash.webp" />
      <section className="py-16">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          {processingMethods.map((method) => (
            <article key={method.slug} className="overflow-hidden rounded-sm border border-[#eadfce] bg-white">
              <div className="relative aspect-[16/10]">
                <Image src={method.image} alt={`${method.name} coffee processing`} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
              <div className="p-6">
                <h2 className="font-display text-3xl font-bold text-[#3e2723]">{method.name}</h2>
                <p className="mt-3 text-sm leading-7 text-stone-600">{method.summary}</p>
                <Link href={`/processing/${method.slug}`} className="mt-5 inline-flex text-sm font-bold text-[#2e7d32]">Learn more</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
