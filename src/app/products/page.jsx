import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { origins, processingMethods, products } from "@/data/site";

export const metadata = {
  title: "Products",
  description: "Browse Indonesian Arabica green coffee beans from Java Ijen and Aceh Gayo.",
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero eyebrow="Products" title="Indonesian Arabica green coffee beans" description="Browse current coffee variants by origin, process, grade, and availability status. Lot-level specifications are confirmed before quotation." image="/images/kopi-1.webp" primaryHref="/request-quote" primaryLabel="Request Current Availability" />
      <section className="py-16">
        <div className="section-shell">
          <SectionHeading eyebrow="Filters supported" title="Origin, process, grade, and availability" description={`Initial origins: ${origins.map((origin) => origin.name).join(", ")}. Initial processes: ${processingMethods.map((item) => item.name).join(", ")}.`} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
