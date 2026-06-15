import { InquiryForm } from "@/components/site/InquiryForm";
import { PageHero } from "@/components/site/PageHero";

export const metadata = {
  title: "Request a Quote",
  description: "Request current availability, lot specifications, samples, and quotation for Indonesian Arabica green coffee beans.",
};

export default function RequestQuotePage() {
  return (
    <main>
      <PageHero eyebrow="Request a Quote" title="Request current availability and quotation" description="Tell us your target origin, process, grade, volume, destination, and timeline. Nawasena will confirm current availability and next steps." image="/images/full-wash.webp" />
      <section className="py-16">
        <div className="section-shell max-w-4xl">
          <InquiryForm type="quote" />
        </div>
      </section>
    </main>
  );
}
