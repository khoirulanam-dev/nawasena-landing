import { OriginCard } from "@/components/site/OriginCard";
import { PageHero } from "@/components/site/PageHero";
import { origins } from "@/data/site";

export const metadata = {
  title: "Origins",
  description: "Explore Java Ijen and Aceh Gayo Indonesian Arabica green coffee origins.",
};

export default function OriginsPage() {
  return (
    <main>
      <PageHero eyebrow="Origins" title="Initial sourcing origins: Java Ijen and Aceh Gayo" description="Origin pages provide sourcing context, available processes, availability notes, and related products." image="/images/about-main.webp" />
      <section className="py-16">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          {origins.map((origin) => <OriginCard key={origin.slug} origin={origin} />)}
        </div>
      </section>
    </main>
  );
}
