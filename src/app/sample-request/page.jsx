import { InquiryForm } from "@/components/site/InquiryForm";
import { PageHero } from "@/components/site/PageHero";

export const metadata = {
  title: "Sample Request",
  description: "Request green coffee samples from Java Ijen and Aceh Gayo for buyer evaluation.",
};

export default function SampleRequestPage() {
  return (
    <main>
      <PageHero eyebrow="Sample Request" title="Request Indonesian green coffee samples" description="Use this form to request samples for selected coffee products. Sample availability and delivery process are confirmed before dispatch." image="/images/gayo-fullwashed.webp" />
      <section className="py-16">
        <div className="section-shell max-w-4xl">
          <InquiryForm type="sample" />
        </div>
      </section>
    </main>
  );
}
