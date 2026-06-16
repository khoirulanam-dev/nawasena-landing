import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { processingMethods, products } from "@/data/site";

export const metadata = {
  title: "Products",
  description: "Browse Arabica Java Ijen green coffee products and selected Indonesian lots from PT. Nawasena International Group.",
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero eyebrow="Our Products" title="Selected Arabica Java Ijen green coffee" description="Browse available coffee variants by origin, post-harvest process, grade, and availability status. Detailed lot specifications are confirmed before quotation." image="/images/kopi-1.webp" primaryHref="/sample-request" primaryLabel="Request Samples" secondaryHref="/request-quote" secondaryLabel="Discuss Supply" />
      <section className="py-16">
        <div className="section-shell">
          <SectionHeading eyebrow="Product information" title="Origin, process, grade, and availability" description={`Flagship origin: Java Ijen. Additional selected origin: Aceh Gayo. Available post-harvest processes include ${processingMethods.map((item) => item.name).join(", ")}.`} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
