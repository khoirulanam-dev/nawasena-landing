import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";

export const metadata = {
  title: "Quality Control",
  description: "Lot-based quality control for Indonesian green coffee beans, including moisture, defect count, screen size, samples, and pre-shipment checks.",
};

const qualityItems = [
  ["Lot specification", "Each offer should confirm origin, process, grade, crop cycle, and lot-specific availability."],
  ["Moisture", "Moisture target or measured range must be confirmed per lot before shipment."],
  ["Screen size", "Screen size is shared when available and should not be assumed across all products."],
  ["Defect count", "Defect count and grade are reviewed per lot and per buyer requirement."],
  ["Sampling", "Samples support buyer evaluation before contract and shipment planning."],
  ["Pre-shipment check", "Pre-shipment inspection support is discussed based on transaction terms and destination requirements."],
  ["Packaging", "Packaging options are confirmed during quotation and contract discussion."],
  ["Traceability", "Traceability level is confirmed per origin partner, lot, and documentation available."],
];

export default function QualityPage() {
  return (
    <main>
      <PageHero eyebrow="Quality" title="Lot-based quality control for green coffee buyers" description="Nawasena communicates quality through verified lot specifications, samples, and pre-shipment preparation rather than unsupported generic claims." image="/images/about3.webp" primaryHref="/request-quote" primaryLabel="Discuss Specifications" />
      <section className="py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Image src="/images/about-main.webp" alt="Indonesian green coffee beans for quality review" width={960} height={1280} className="h-[620px] w-full rounded-sm object-cover" />
          <div>
            <SectionHeading eyebrow="Quality attributes" title="Specification fields buyers should confirm" />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {qualityItems.map(([title, description]) => (
                <article key={title} className="rounded-sm border border-[#eadfce] bg-white p-5">
                  <h2 className="font-display text-xl font-bold text-[#3e2723]">{title}</h2>
                  <p className="mt-2 text-sm leading-7 text-stone-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
