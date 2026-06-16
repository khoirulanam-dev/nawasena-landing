import { InquiryForm } from "@/components/site/InquiryForm";
import { PageHero } from "@/components/site/PageHero";

export const metadata = {
  title: "Sample Request",
  description: "Request Arabica Java Ijen green coffee samples for buyer evaluation from PT. Nawasena International Group.",
};

export default function SampleRequestPage() {
  return (
    <main>
      <PageHero eyebrow="Request Samples" title="Request Arabica Java Ijen green coffee samples" description="Use this form to request samples for selected coffee products. Sample availability, quantity, delivery process, and next commercial steps will be confirmed by our team." image="/images/gayo-fullwashed.webp" />
      <section className="py-16">
        <div className="section-shell max-w-4xl">
          <InquiryForm type="sample" />
        </div>
      </section>
    </main>
  );
}
