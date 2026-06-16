import { InquiryForm } from "@/components/site/InquiryForm";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Contact PT. Nawasena International Group to discuss Arabica Java Ijen samples, specifications, supply availability, and export coordination.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="Contact" title="Discuss Arabica Java Ijen availability" description="Share your preferred process, required volume, destination, sample needs, and purchasing schedule so our team can respond with relevant specifications and next steps." image="/images/hero2.webp" />
      <section className="py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-sm bg-white p-6 shadow-sm">
            <h2 className="font-display text-3xl font-bold text-[#3e2723]">Contact details</h2>
            <div className="mt-6 grid gap-4 text-sm leading-7 text-stone-700">
              <a href={`mailto:${site.email}`} className="font-bold text-[#2e7d32]">{site.email}</a>
              <a href={`https://wa.me/${site.whatsappNumber}`} className="font-bold text-[#2e7d32]">{site.whatsapp}</a>
              <p>{site.address}</p>
            </div>
          </aside>
          <InquiryForm type="quote" />
        </div>
      </section>
    </main>
  );
}
