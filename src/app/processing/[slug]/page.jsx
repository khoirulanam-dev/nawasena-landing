import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProcessing, processingMethods, products } from "@/data/site";

export function generateStaticParams() {
  return processingMethods.map((method) => ({ slug: method.slug }));
}

export function generateMetadata({ params }) {
  const method = getProcessing(params.slug);
  if (!method) return {};
  return { title: `${method.name} Processing`, description: method.summary };
}

export default function ProcessingDetailPage({ params }) {
  const method = getProcessing(params.slug);
  if (!method) notFound();
  const related = products.filter((product) => product.processSlug === method.slug || product.process === method.name);

  return (
    <main>
      <section className="bg-white py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <Image src={method.image} alt={`${method.name} Indonesian coffee processing`} width={960} height={1280} priority className="h-[560px] w-full rounded-sm object-cover" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2e7d32]">Processing method</p>
            <h1 className="font-display mt-4 text-5xl font-bold text-[#3e2723]">{method.name}</h1>
            <p className="mt-6 text-lg leading-8 text-stone-600">{method.summary}</p>
            <p className="mt-4 text-lg leading-8 text-stone-600">{method.profile}</p>
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
