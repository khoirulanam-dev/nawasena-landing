import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/site/ButtonLink";
import { products, getProduct } from "@/data/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }) {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: { title: product.name, description: product.shortDescription, images: [product.image] },
  };
}

export default function ProductDetailPage({ params }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = products.filter((item) => item.originSlug === product.originSlug && item.slug !== product.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.shortDescription,
    category: "Green coffee beans",
    brand: { "@type": "Brand", name: "PT. Nawasena International Group" },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-white py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-start">
          <Image src={product.image} alt={`${product.name} from ${product.origin}`} width={960} height={1280} priority className="h-[620px] w-full rounded-sm object-cover" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2e7d32]">{product.origin} - {product.process}</p>
            <h1 className="font-display mt-4 text-5xl font-bold leading-tight text-[#3e2723]">{product.name}</h1>
            <p className="mt-6 text-lg leading-8 text-stone-600">{product.description}</p>
            <div className="mt-8 grid gap-3 rounded-sm border border-[#eadfce] bg-[#f8f6f0] p-6 text-sm">
              <Spec label="Origin" value={product.origin} />
              <Spec label="Process" value={product.process} />
              <Spec label="Grade" value={product.grade} />
              <Spec label="Availability" value={product.status} />
              <Spec label="Sample availability" value={product.sampleAvailability} />
              {Object.entries(product.specs).map(([label, value]) => <Spec key={label} label={label} value={value} />)}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={`/request-quote?product=${product.slug}`}>Request quotation</ButtonLink>
              <ButtonLink href={`/sample-request?product=${product.slug}`} variant="secondary">Request sample</ButtonLink>
            </div>
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="bg-[#f2efe9] py-16">
          <div className="section-shell">
            <h2 className="font-display text-3xl font-bold text-[#3e2723]">Related {product.origin} coffees</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/products/${item.slug}`} className="rounded-sm bg-white p-5 font-bold text-[#3e2723] hover:text-[#2e7d32]">{item.name}</Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

function Spec({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex justify-between gap-5 border-b border-[#eadfce] pb-3 last:border-0 last:pb-0">
      <dt className="font-bold capitalize text-[#3e2723]">{label.replace(/([A-Z])/g, " $1")}</dt>
      <dd className="text-right text-stone-600">{value}</dd>
    </div>
  );
}
