import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getOrigin } from "@/data/site";

export function buildOriginMetadata(slug) {
  const origin = getOrigin(slug);
  return origin ? { title: origin.seoTitle, description: origin.seoDescription } : {};
}

export default function OriginDetailPage({ slug }) {
  const origin = getOrigin(slug);
  if (!origin) notFound();
  const related = products.filter((product) => product.originSlug === origin.slug);

  return (
    <main>
      <section className="bg-white py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <Image src={origin.image} alt={`${origin.name} Indonesian Arabica coffee origin`} width={960} height={1280} priority className="h-[560px] w-full rounded-sm object-cover" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2e7d32]">{origin.province}, {origin.country}</p>
            <h1 className="font-display mt-4 text-5xl font-bold text-[#3e2723]">{origin.name}</h1>
            <p className="mt-6 text-lg leading-8 text-stone-600">{origin.description}</p>
            <dl className="mt-8 grid gap-4 rounded-sm border border-[#eadfce] bg-[#f8f6f0] p-6 text-sm">
              <Info label="Region" value={origin.region} />
              <Info label="Altitude" value={origin.altitude} />
              <Info label="Typical varieties" value={origin.varieties.join(", ")} />
              <Info label="Available processes" value={origin.processes.join(", ")} />
              <Info label="Harvest information" value={origin.harvest} />
            </dl>
          </div>
        </div>
      </section>
      <section className="bg-[#f2efe9] py-16">
        <div className="section-shell">
          <h2 className="font-display text-3xl font-bold text-[#3e2723]">Related products</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="rounded-sm bg-white p-5 font-bold text-[#3e2723] hover:text-[#2e7d32]">{product.name}</Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <dt className="font-bold text-[#3e2723]">{label}</dt>
      <dd className="mt-1 leading-7 text-stone-600">{value}</dd>
    </div>
  );
}
