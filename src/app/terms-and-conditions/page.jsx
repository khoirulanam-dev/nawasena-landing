export const metadata = {
  title: "Terms and Conditions",
  description: "Website terms and conditions for PT. Nawasena International Group.",
};

export default function TermsPage() {
  return (
    <main className="py-16">
      <div className="section-shell max-w-4xl">
        <h1 className="font-display text-5xl font-bold text-[#3e2723]">Terms and Conditions</h1>
        <div className="mt-8 grid gap-6 text-lg leading-8 text-stone-700">
          <p>Website content is provided for general B2B information and does not constitute a final offer, contract, or guarantee of availability.</p>
          <p>Product availability, specifications, samples, prices, Incoterms, payment terms, packaging, documents, and shipment timelines must be confirmed in writing for each transaction.</p>
          <p>Nawasena avoids unsupported claims and reserves the right to update product, origin, quality, and service information as verified data changes.</p>
          <p>Use of this website does not create a buyer account, agency relationship, or binding purchase obligation.</p>
        </div>
      </div>
    </main>
  );
}
