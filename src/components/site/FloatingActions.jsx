"use client";

import { site } from "@/data/site";

export function FloatingActions() {
  return (
    <a
      href={`https://wa.me/${site.whatsappNumber}`}
      className="focus-ring fixed bottom-5 right-5 z-40 rounded-full bg-[#2e7d32] px-5 py-3 text-sm font-bold text-white shadow-xl transition hover:bg-[#245d28]"
      target="_blank"
      rel="noreferrer"
    >
      WhatsApp
    </a>
  );
}
