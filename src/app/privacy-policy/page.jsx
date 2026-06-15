export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for PT. Nawasena International Group website inquiries.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="py-16">
      <div className="section-shell max-w-4xl">
        <h1 className="font-display text-5xl font-bold text-[#3e2723]">Privacy Policy</h1>
        <div className="mt-8 grid gap-6 text-lg leading-8 text-stone-700">
          <p>PT. Nawasena International Group collects inquiry information submitted through this website to respond to product, quotation, sample, export service, and contact requests.</p>
          <p>Information may include name, company, email, WhatsApp number, country, destination, product interest, volume, and message content. This information is used for buyer communication and inquiry management.</p>
          <p>Do not submit confidential documents through public forms unless requested through a confirmed communication channel.</p>
          <p>To request correction or deletion of inquiry information, contact export@nawasenaint.web.id.</p>
        </div>
      </div>
    </main>
  );
}
