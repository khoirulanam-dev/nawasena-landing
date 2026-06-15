"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eadfce] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <Link href="/" className="font-display text-lg font-bold leading-tight text-[#3e2723] md:text-2xl">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-[#3e2723] hover:text-[#2e7d32]">
              {item.label}
            </Link>
          ))}
          <Link
            href="/request-quote"
            className="focus-ring rounded-sm bg-[#2e7d32] px-4 py-2 text-sm font-bold text-white hover:bg-[#245d28]"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#3e2723]/20 text-[#3e2723] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "X" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-[#eadfce] bg-white px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="grid gap-4">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-lg font-semibold text-[#3e2723]" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link
              href="/request-quote"
              className="focus-ring inline-flex justify-center rounded-sm bg-[#2e7d32] px-5 py-3 font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
