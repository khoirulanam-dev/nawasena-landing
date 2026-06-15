import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/site/ArticleCard";
import { ButtonLink } from "@/components/site/ButtonLink";
import { OriginCard } from "@/components/site/OriginCard";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { articles, faqs, origins, processingMethods, products, supplyRecords } from "@/data/site";

export default function HomePage() {
  const supply = supplyRecords[0];

  return (
    <main>
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#3e2723] text-white">
        <Image src="/images/hero-1.webp" alt="Indonesian Arabica green coffee beans prepared for export" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="section-shell relative z-10 flex min-h-[calc(100vh-72px)] flex-col justify-center py-20">
          <p className="mb-4 max-w-2xl text-sm font-bold uppercase tracking-[0.18em] text-[#f4d3aa]">Indonesian green coffee sourcing partner</p>
          <h1 className="font-display max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Indonesian Green Coffee Beans for Global Roasters and Importers
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
            PT. Nawasena International Group supplies Indonesian Arabica green coffee beans from Java Ijen and Aceh Gayo for roasters, importers, distributors, and wholesale buyers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/request-quote">Request Current Availability</ButtonLink>
            <ButtonLink href="/products" variant="secondary">Explore Our Coffees</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="section-shell grid gap-4 md:grid-cols-4">
          {[
            ["Pending", "Current Harvest Supply Capacity"],
            [origins.length, "Primary Indonesian Origins"],
            [products.length, "Available Coffee Variants"],
            [processingMethods.length, "Processing Methods"],
          ].map(([value, label]) => (
            <div key={label} className="border-l-4 border-[#2e7d32] bg-[#f8f6f0] p-5">
              <p className="font-display text-3xl font-bold text-[#3e2723]">{value}</p>
              <p className="mt-2 text-sm font-semibold text-stone-600">{label}</p>
            </div>
          ))}
        </div>
        <p className="section-shell mt-4 text-xs leading-6 text-stone-500">
          Crop Cycle {supply.cropCycle}. Last verified: {supply.lastVerified}. {supply.disclaimer}
        </p>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Featured origins"
            title="Java Ijen and Aceh Gayo sourcing focus"
            description="Nawasena starts with two Indonesian Arabica origins where current availability can be discussed by lot, process, and buyer specification."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {origins.map((origin) => <OriginCard key={origin.slug} origin={origin} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#f2efe9] py-20">
        <div className="section-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Product portfolio" title="Indonesian Arabica green coffee beans" description="Product information is shown only where fields are available or confirmable per lot." />
            <ButtonLink href="/products" variant="dark">View all products</ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Current harvest availability"
              title="Availability is confirmed by crop cycle, lot, and allocation"
              description="The PRD requires supply figures to be current, source-backed, and tied to crop cycle. Until internal confirmation is available, this site does not publish a numeric capacity claim."
            />
            <div className="mt-8 rounded-sm border border-[#eadfce] bg-white p-6">
              <dl className="grid gap-4 text-sm">
                <div><dt className="font-bold text-[#3e2723]">Crop cycle</dt><dd className="text-stone-600">{supply.cropCycle}</dd></div>
                <div><dt className="font-bold text-[#3e2723]">Capacity type</dt><dd className="text-stone-600">{supply.capacityType}</dd></div>
                <div><dt className="font-bold text-[#3e2723]">Status</dt><dd className="text-stone-600">{supply.status}</dd></div>
                <div><dt className="font-bold text-[#3e2723]">Last verified</dt><dd className="text-stone-600">{supply.lastVerified}</dd></div>
              </dl>
            </div>
          </div>
          <Image src="/images/about3.webp" alt="Green coffee processing and quality control" width={960} height={1280} className="h-[520px] w-full rounded-sm object-cover" />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Quality control" title="Lot-based specifications and pre-shipment checks" />
            <ul className="mt-8 grid gap-4 text-sm leading-7 text-stone-700">
              {["Moisture target confirmed per lot", "Defect count and grade discussed per offer", "Screen size shared when available", "Samples available by request", "Pre-shipment inspection support discussed before contract"].map((item) => (
                <li key={item} className="border-l-4 border-[#2e7d32] bg-[#f8f6f0] p-4 font-semibold">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Export service flow" title="Buyer process from inquiry to shipment coordination" />
            <ol className="mt-8 grid gap-3 text-sm text-stone-700">
              {["Inquiry", "Specification confirmation", "Sample evaluation", "Quotation", "Contract and payment", "Quality preparation", "Shipment", "Documentation discussion"].map((step, index) => (
                <li key={step} className="flex gap-4 rounded-sm border border-[#eadfce] bg-white p-4">
                  <span className="font-display text-2xl font-bold text-[#2e7d32]">{index + 1}</span>
                  <span className="pt-1 font-semibold">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Latest news and insights" title="Buyer-focused coffee sourcing knowledge" align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#2e7d32] py-16 text-white">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-4xl font-bold">Looking for Indonesian green coffee beans?</h2>
            <p className="mt-3 text-white/80">Request current availability, specifications, samples, and quotation.</p>
          </div>
          <ButtonLink href="/request-quote" variant="secondary">Request a Quote</ButtonLink>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="FAQ" title="Common buyer questions" align="center" />
          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            {faqs.map((item) => (
              <details key={item.question} className="rounded-sm border border-[#eadfce] bg-[#f8f6f0] p-5">
                <summary className="cursor-pointer font-bold text-[#3e2723]">{item.question}</summary>
                <p className="mt-3 text-sm leading-7 text-stone-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
