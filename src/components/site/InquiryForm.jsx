"use client";

import { useMemo, useState } from "react";
import { products, site } from "@/data/site";

const initialState = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  country: "",
  inquiryType: "quote",
  product: "",
  volume: "",
  destination: "",
  message: "",
  consent: false,
};

export function InquiryForm({ type = "quote" }) {
  const [form, setForm] = useState({ ...initialState, inquiryType: type });
  const [status, setStatus] = useState("idle");

  const whatsappMessage = useMemo(() => {
    return [
      type === "sample" ? "*REQUEST COFFEE SAMPLE*" : "*REQUEST COFFEE QUOTATION*",
      site.name,
      "",
      `Name: ${form.name}`,
      `Company: ${form.company || "-"}`,
      `Email: ${form.email}`,
      `WhatsApp: ${form.whatsapp || "-"}`,
      `Country: ${form.country}`,
      `Product: ${form.product || "-"}`,
      `Volume / Sample Quantity: ${form.volume || "-"}`,
      `Destination: ${form.destination || "-"}`,
      "",
      form.message || "Please send current Arabica Java Ijen availability, lot specifications, sample options, quotation details, and shipment coordination process.",
    ].join("\n");
  }, [form, type]);

  const update = (event) => {
    const { name, value, type: inputType, checked } = event.target;
    setForm((current) => ({ ...current, [name]: inputType === "checkbox" ? checked : value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Submission failed");
      const payload = await response.json().catch(() => ({}));
      setStatus(payload.persisted === false ? "preview" : "submitted");
    } catch {
      setStatus("fallback");
      window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
    }
  };

  return (
    <form onSubmit={submit} className="rounded-sm border border-[#eadfce] bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
          Name *
          <input required name="name" value={form.name} onChange={update} className="focus-ring w-full min-w-0 rounded-sm border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
          Company
          <input name="company" value={form.company} onChange={update} className="focus-ring w-full min-w-0 rounded-sm border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
          Email *
          <input required type="email" name="email" value={form.email} onChange={update} className="focus-ring w-full min-w-0 rounded-sm border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
          WhatsApp
          <input name="whatsapp" value={form.whatsapp} onChange={update} className="focus-ring w-full min-w-0 rounded-sm border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
          Country *
          <input required name="country" value={form.country} onChange={update} className="focus-ring w-full min-w-0 rounded-sm border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
          Product or origin
          <select name="product" value={form.product} onChange={update} className="focus-ring w-full min-w-0 rounded-sm border border-stone-300 px-4 py-3 font-normal">
            <option value="">Select product or leave open for recommendation</option>
            {products.map((product) => <option key={product.slug} value={product.name}>{product.name}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
          {type === "sample" ? "Sample quantity" : "Required volume"}
          <input name="volume" value={form.volume} onChange={update} placeholder={type === "sample" ? "Example: 50g, 150g, 1kg, or custom" : "Example: 1 MT, 5 MT, scheduled supply, or container inquiry"} className="focus-ring w-full min-w-0 rounded-sm border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
          Destination
          <input name="destination" value={form.destination} onChange={update} placeholder="Destination country, city, or port" className="focus-ring w-full min-w-0 rounded-sm border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#3e2723] md:col-span-2">
          Buyer requirements
          <textarea name="message" value={form.message} onChange={update} rows="5" placeholder="Tell us your preferred process, grade, moisture target, screen size, harvest period, delivery schedule, Incoterm, or packaging requirements." className="focus-ring w-full min-w-0 rounded-sm border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <label className="flex gap-3 text-sm leading-6 text-stone-600 md:col-span-2">
          <input required type="checkbox" name="consent" checked={form.consent} onChange={update} className="mt-1" />
          I agree that Nawasena may use this information to review my requirements and respond to this inquiry.
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === "submitting"} className="focus-ring rounded-sm bg-[#2e7d32] px-6 py-3 text-sm font-bold text-white hover:bg-[#245d28] disabled:opacity-60">
          {status === "submitting" ? "Sending..." : type === "sample" ? "Submit Sample Request" : "Submit Quote Request"}
        </button>
        <a href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noreferrer" className="text-sm font-bold text-[#2e7d32]">
          Continue on WhatsApp
        </a>
      </div>
      <p className="mt-3 text-xs leading-5 text-stone-500">
        Submit saves the request to the admin dashboard. WhatsApp opens a direct chat with the same request details.
      </p>
      {status === "submitted" && <p className="mt-4 text-sm font-semibold text-[#2e7d32]">Inquiry received and saved to the admin dashboard. Our team will review your requirements and follow up with availability, specification, and next steps.</p>}
      {status === "preview" && <p className="mt-4 text-sm font-semibold text-amber-700">Inquiry accepted, but DATABASE_URL is not configured so it was not saved to the dashboard.</p>}
      {status === "fallback" && <p className="mt-4 text-sm font-semibold text-amber-700">The secure form could not be completed, so WhatsApp fallback opened.</p>}
    </form>
  );
}
