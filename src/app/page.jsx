import Image from "next/image";
import { ArticleCard } from "@/components/site/ArticleCard";
import { ButtonLink } from "@/components/site/ButtonLink";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { faqs, products, supplyRecords } from "@/data/site";
import { getPublicArticles } from "@/lib/articles";

export default async function HomePage() {
  const articles = await getPublicArticles();
  const supply = supplyRecords[0];
  const javaProducts = products.filter((product) => product.originSlug === "java-ijen");

  return (
    <main>
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#3e2723] text-white">
        <Image src="/images/hero-1.webp" alt="Arabica Java Ijen green coffee prepared for export" fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="section-shell relative z-10 flex min-h-[calc(100vh-72px)] flex-col justify-center py-20">
          <p className="mb-4 max-w-2xl text-sm font-bold uppercase tracking-[0.18em] text-[#f4d3aa]">
            Indonesian Green Coffee Supplier
          </p>
          <h1 className="font-display max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Reliable Java Ijen Arabica for Roasters and Importers
          </h1>
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-white/85">
            <p>
              PT. Nawasena International Group supplies traceable Arabica Java Ijen green coffee from East Java, supported by structured quality control, transparent product information, and export-ready coordination.
            </p>
            <p>
              Our supply capacity reaches up to 200 MT per harvest season, subject to crop and contract availability.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/origins/java-ijen">Explore Java Ijen</ButtonLink>
            <ButtonLink href="/sample-request" variant="secondary">Request Samples</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="section-shell grid gap-4 md:grid-cols-3">
          {[
            ["Founded in 2024", "Built in Jember, East Java, close to one of Indonesia's important coffee-producing regions."],
            [supply.publicCapacity, "Green coffee supply capacity per harvest season, subject to crop and lot availability."],
            ["Java Ijen", "Our flagship Arabica origin from East Java, Indonesia."],
          ].map(([value, label]) => (
            <div key={value} className="border-l-4 border-[#2e7d32] bg-[#f8f6f0] p-5">
              <p className="font-display text-3xl font-bold text-[#3e2723]">{value}</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative h-[560px] overflow-hidden rounded-sm">
            <Image src="/images/about-main.webp" alt="Selected Indonesian Arabica green coffee beans" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
          <div>
            <SectionHeading
              eyebrow="About Nawasena"
              title="Focused on Origin. Built for Reliable Supply."
              description="Founded in 2024, PT. Nawasena International Group is an Indonesian green coffee supplier based in Jember, East Java."
            />
            <div className="mt-6 space-y-5 text-base leading-8 text-stone-600">
              <p>
                We connect roasters, importers, distributors, and coffee businesses with selected Indonesian green coffee, with Arabica Java Ijen as our flagship product.
              </p>
              <p>
                Our team works closely with origin partners to manage lot selection, post-harvest information, quality control, traceability, and shipment coordination. Our goal is to provide coffee that meets buyer requirements while supporting consistent and transparent long-term supply.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/about" variant="dark">Learn More About Nawasena</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2efe9] py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Our approach"
            title="A More Reliable Way to Source Indonesian Green Coffee"
            description="Green coffee buyers need more than attractive samples. They need clear specifications, consistent lots, reliable communication, and realistic supply commitments."
            align="center"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Origin-Focused Sourcing", "We focus on selected Indonesian origins and build closer relationships with local coffee partners to improve product knowledge, traceability, and supply-chain transparency."],
              ["Quality-Controlled Green Coffee", "Each available lot is evaluated based on relevant physical and product specifications before being offered to buyers."],
              ["Transparent Product Information", "We provide available information regarding origin, variety, process, moisture, defect level, screen size, harvest period, and lot availability."],
              ["Export-Ready Coordination", "We support buyers throughout the commercial and shipment process, including product selection, quotation preparation, documentation, and Incoterm coordination."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-sm border border-[#eadfce] bg-white p-6 shadow-sm">
                <h3 className="font-display text-2xl font-bold text-[#3e2723]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why work with us"
              title="Green Coffee Sourcing with Greater Clarity and Reliability"
              description="We are more than a coffee supplier. We aim to become a reliable sourcing partner for roasters, importers, and distributors."
            />
            <p className="mt-5 text-base leading-8 text-stone-600">
              By focusing on clear specifications, realistic supply commitments, responsive communication, and export coordination, we help buyers make better purchasing decisions and reduce sourcing uncertainty.
            </p>
            <ul className="mt-8 grid gap-3 text-sm font-semibold text-[#3e2723] md:grid-cols-2">
              {[
                "Arabica Java Ijen as our flagship origin",
                "Supply capacity of up to 200 MT per harvest season",
                "Clear product and lot specifications",
                "Traceability and post-harvest information",
                "Quality control before commercial offering",
                "Sample and quotation support",
                "Flexible EXW, FOB, and CIF arrangements",
                "Responsive commercial communication",
              ].map((item) => (
                <li key={item} className="border-l-4 border-[#2e7d32] bg-white p-4 shadow-sm">{item}</li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/request-quote">Discuss Your Requirements</ButtonLink>
            </div>
          </div>
          <Image src="/images/about2.webp" alt="Nawasena origin partners and Indonesian coffee sourcing" width={780} height={1040} className="h-[620px] w-full rounded-sm object-cover" />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Image src="/images/natural-anaerob.webp" alt="Arabica Java Ijen green coffee lot" width={960} height={1280} className="h-[620px] w-full rounded-sm object-cover" />
          <div>
            <SectionHeading
              eyebrow="Our flagship origin"
              title="Arabica Java Ijen"
              description="Arabica Java Ijen is the flagship green coffee product of PT. Nawasena International Group."
            />
            <div className="mt-5 space-y-5 text-base leading-8 text-stone-600">
              <p>
                Sourced from the Ijen highlands of East Java, this origin is available in selected post-harvest processes and lot specifications, subject to crop and seasonal availability.
              </p>
              <p>Buyers can request detailed information regarding origin, growing area, altitude, variety, post-harvest process, moisture content, defect level, screen size, harvest period, available quantity, packaging options, and sample availability.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/origins/java-ijen">View Java Ijen Specifications</ButtonLink>
              <ButtonLink href="/sample-request" variant="secondary">Request a Java Ijen Sample</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f2efe9] py-20">
        <div className="section-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Our products"
              title="Selected Arabica Java Ijen green coffee"
              description="Explore Java Ijen variants by process and lot availability. Specifications are confirmed before quotation."
            />
            <ButtonLink href="/products" variant="dark">View all products</ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {javaProducts.slice(0, 6).map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-2">
          <div className="rounded-sm border border-[#eadfce] bg-white p-7 shadow-sm">
            <SectionHeading
              eyebrow="Additional Indonesian origin"
              title="Arabica Aceh Gayo"
              description="Selected Arabica green coffee from Aceh Gayo is also available based on crop, lot, and seasonal availability."
            />
            <p className="mt-5 text-sm leading-7 text-stone-600">
              Please contact our commercial team to confirm current specifications, available processes, minimum order quantity, and sample availability.
            </p>
            <div className="mt-7">
              <ButtonLink href="/request-quote" variant="dark">Check Current Availability</ButtonLink>
            </div>
          </div>
          <div className="rounded-sm border border-[#eadfce] bg-white p-7 shadow-sm">
            <SectionHeading
              eyebrow="Supply capability"
              title="Up to 200 MT per Harvest Season"
              description="Nawasena supports green coffee requirements ranging from product evaluation and sample requests to scheduled commercial supply."
            />
            <p className="mt-5 text-sm leading-7 text-stone-600">
              Available capacity depends on harvest period, required quality specifications, post-harvest process, lot availability, contract volume, delivery schedule, and packaging requirements.
            </p>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              To maintain realistic commitments, final availability will be confirmed after reviewing the buyer's required specifications and purchasing schedule.
            </p>
            <div className="mt-7">
              <ButtonLink href="/request-quote">Discuss Supply Availability</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Supply and export"
            title="Flexible Incoterms for Your Shipment"
            description="We offer several commercial arrangements based on the buyer's destination, logistics requirements, and preferred level of shipment support."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["EXW - Ex Works", "The buyer collects the goods from our designated warehouse and manages transportation, export procedures, insurance, and onward delivery."],
              ["FOB - Free on Board", "We arrange delivery and export handling until the goods are loaded on board the vessel at the agreed port of shipment. Risk transfers to the buyer once the goods are on board."],
              ["CIF - Cost, Insurance and Freight", "We arrange the cost of goods, insurance, and freight to the agreed destination port. Risk transfers to the buyer once the goods are loaded on board at the port of shipment."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-sm border border-[#eadfce] bg-[#fffaf1] p-6">
                <h3 className="font-display text-2xl font-bold text-[#3e2723]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">{description}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-stone-600">
            Final Incoterms, port details, responsibilities, and commercial conditions will be stated clearly in the quotation and sales agreement.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <SectionHeading eyebrow="Insights" title="Buyer-focused green coffee knowledge" align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#2e7d32] py-16 text-white">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-4xl font-bold">Ready to evaluate Arabica Java Ijen?</h2>
            <p className="mt-3 text-white/80">Request samples, current specifications, supply availability, and commercial quotation.</p>
          </div>
          <ButtonLink href="/sample-request" variant="secondary">Request Samples</ButtonLink>
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
