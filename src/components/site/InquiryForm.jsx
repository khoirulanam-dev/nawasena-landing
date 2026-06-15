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
      form.message || "Please send current availability, specifications, samples, and quotation details.",
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
      setStatus("submitted");
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
          <input required name="name" value={form.name} onChange={update} className="focus-ring rounded-sm border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
          Company
          <input name="company" value={form.company} onChange={update} className="focus-ring rounded-sm border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
          Email *
          <input required type="email" name="email" value={form.email} onChange={update} className="focus-ring rounded-sm border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
          WhatsApp
          <input name="whatsapp" value={form.whatsapp} onChange={update} className="focus-ring rounded-sm border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
          Country *
          <input required name="country" value={form.country} onChange={update} className="focus-ring rounded-sm border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
          Product
          <select name="product" value={form.product} onChange={update} className="focus-ring rounded-sm border border-stone-300 px-4 py-3 font-normal">
            <option value="">Select product</option>
            {products.map((product) => <option key={product.slug} value={product.name}>{product.name}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
          Volume or sample quantity
          <input name="volume" value={form.volume} onChange={update} placeholder={type === "sample" ? "50g, 150g, 1kg, custom" : "Example: 1 MT, 5 MT, container inquiry"} className="focus-ring rounded-sm border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#3e2723]">
          Destination
          <input name="destination" value={form.destination} onChange={update} placeholder="Destination country or port" className="focus-ring rounded-sm border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[#3e2723] md:col-span-2">
          Message
          <textarea name="message" value={form.message} onChange={update} rows="5" className="focus-ring rounded-sm border border-stone-300 px-4 py-3 font-normal" />
        </label>
        <label className="flex gap-3 text-sm leading-6 text-stone-600 md:col-span-2">
          <input required type="checkbox" name="consent" checked={form.consent} onChange={update} className="mt-1" />
          I agree that Nawasena may use this information to respond to my inquiry.
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
      {status === "submitted" && <p className="mt-4 text-sm font-semibold text-[#2e7d32]">Inquiry received. Our team will review the details and follow up.</p>}
      {status === "fallback" && <p className="mt-4 text-sm font-semibold text-amber-700">The secure form could not be completed, so WhatsApp fallback opened.</p>}
    </form>
  );
}
