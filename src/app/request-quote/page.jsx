import { InquiryForm } from "@/components/site/InquiryForm";
import { PageHero } from "@/components/site/PageHero";

export const metadata = {
  title: "Request a Quote",
  description: "Request current availability, lot specifications, samples, and quotation for Indonesian Arabica green coffee beans.",
};

export default function RequestQuotePage() {
  return (
    <main>
      <PageHero eyebrow="Discuss Your Requirements" title="Request current Java Ijen availability and quotation" description="Share your required origin, post-harvest process, quality specification, quantity, destination, and purchasing schedule. Our team will confirm availability and commercial next steps." image="/images/full-wash.webp" />
      <section className="py-16">
        <div className="section-shell max-w-4xl">
          <InquiryForm type="quote" />
        </div>
      </section>
    </main>
  );
}
