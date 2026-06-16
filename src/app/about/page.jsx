import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";

export const metadata = {
  title: "About",
  description: "Founded in 2024 in Jember, East Java, PT. Nawasena International Group supplies traceable Arabica Java Ijen green coffee for roasters and importers.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="About Nawasena" title="Focused on Origin. Built for Reliable Supply." description="Founded in 2024, PT. Nawasena International Group is an Indonesian green coffee supplier based in Jember, East Java, with Arabica Java Ijen as our flagship origin." image="/images/about2.webp" />
      <section className="py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <Image src="/images/about-main.webp" alt="Premium Indonesian Arabica coffee beans" width={960} height={1280} className="h-[560px] w-full rounded-sm object-cover" />
          <div>
            <SectionHeading eyebrow="Company positioning" title="Clearer sourcing for roasters, importers, distributors, and coffee businesses" />
            <p className="mt-6 text-lg leading-8 text-stone-600">
              We connect buyers with selected Indonesian green coffee through closer origin relationships, structured quality control, transparent product information, and practical shipment coordination.
            </p>
            <p className="mt-4 text-lg leading-8 text-stone-600">
              Our team works with origin partners to manage lot selection, post-harvest information, traceability, specifications, sample support, and commercial communication, helping buyers evaluate coffee with greater confidence before committing.
            </p>
            <div className="mt-8 grid gap-4">
              {["Arabica Java Ijen as flagship origin", "Clear product and lot specifications", "Traceability and post-harvest information", "Quality control before commercial offering", "Sample, quotation, and export coordination"].map((item) => (
                <div key={item} className="border-l-4 border-[#2e7d32] bg-white p-4 font-bold text-[#3e2723]">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
