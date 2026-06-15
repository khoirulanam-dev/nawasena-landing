import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";

export const metadata = {
  title: "About",
  description: "Learn about PT. Nawasena International Group as an Indonesian green coffee sourcing and export partner.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About Nawasena" title="An Indonesian green coffee sourcing and export partner" description="PT. Nawasena International Group focuses on building buyer trust through origin-focused sourcing, transparent lot discussion, sample support, and responsive export communication." image="/images/about2.webp" />
      <section className="py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <Image src="/images/about-main.webp" alt="Premium Indonesian Arabica coffee beans" width={960} height={1280} className="h-[560px] w-full rounded-sm object-cover" />
          <div>
            <SectionHeading eyebrow="Company positioning" title="Built for roasters, importers, distributors, and wholesale buyers" />
            <p className="mt-6 text-lg leading-8 text-stone-600">
              Nawasena supplies Indonesian Arabica green coffee beans from Java Ijen and Aceh Gayo. The company works to communicate availability, sample options, lot specifications, and export discussions clearly so buyers can evaluate fit before committing.
            </p>
            <div className="mt-8 grid gap-4">
              {["Origin-focused sourcing", "Transparent lot specification discussion", "Sample support", "Export communication support", "Responsive buyer handling"].map((item) => (
                <div key={item} className="border-l-4 border-[#2e7d32] bg-white p-4 font-bold text-[#3e2723]">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
