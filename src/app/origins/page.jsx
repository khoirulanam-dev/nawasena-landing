import { OriginCard } from "@/components/site/OriginCard";
import { PageHero } from "@/components/site/PageHero";
import { origins } from "@/data/site";

export const metadata = {
  title: "Origins",
  description: "Explore Arabica Java Ijen as Nawasena's flagship green coffee origin, with selected Aceh Gayo availability by crop and lot.",
};

export default function OriginsPage() {
  return (
    <main>
      <PageHero eyebrow="Indonesian origins" title="Java Ijen as our flagship Arabica origin" description="Nawasena focuses on traceable Arabica Java Ijen from East Java, with selected Aceh Gayo availability based on crop, lot, and seasonal conditions." image="/images/about-main.webp" primaryHref="/origins/java-ijen" primaryLabel="Explore Java Ijen" secondaryHref="/sample-request" secondaryLabel="Request Samples" />
      <section className="py-16">
        <div className="section-shell grid gap-6 md:grid-cols-2">
          {origins.map((origin) => <OriginCard key={origin.slug} origin={origin} />)}
        </div>
      </section>
    </main>
  );
}
