import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";

export const metadata = {
  title: "Export Services",
  description: "Coffee buyer inquiry, sample, quotation, Incoterm, packaging, shipment coordination, and documentation discussion for Indonesian green coffee export.",
};

const steps = [
  "Buyer inquiry",
  "Product and specification matching",
  "Sample procedure",
  "Quotation procedure",
  "Incoterm discussion",
  "Payment-term discussion",
  "Packaging options",
  "Quality preparation",
  "Shipping coordination",
  "Export documentation support discussion",
];

export default function ExportServicesPage() {
  return (
    <main>
      <PageHero eyebrow="Export services" title="Coffee export communication and shipment preparation support" description="Nawasena supports qualified buyers through inquiry, sample evaluation, quotation, Incoterm discussion, quality preparation, and shipment coordination. Final services depend on buyer requirements, destination, and legal/logistics constraints." image="/images/port.webp" primaryHref="/request-quote" primaryLabel="Start Buyer Inquiry" />
      <section className="py-16">
        <div className="section-shell">
          <SectionHeading eyebrow="Buyer flow" title="From inquiry to documentation discussion" align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <article key={step} className="rounded-sm border border-[#eadfce] bg-white p-5">
                <p className="font-display text-4xl font-bold text-[#2e7d32]">{index + 1}</p>
                <h2 className="mt-4 font-bold text-[#3e2723]">{step}</h2>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-stone-600">
            Destination documents, logistics requirements, insurance, freight, and customs processes vary by buyer, country, Incoterm, and service provider. Nawasena does not promise documents or services that cannot be legally provided.
          </p>
        </div>
      </section>
    </main>
  );
}
