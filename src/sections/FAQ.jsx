import React from "react";
import { faqs } from "../data/faqs";

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-[#f8f6f0]">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-10 h-[2px] bg-green-700"></span>
            <p className="text-green-700 font-bold tracking-widest uppercase text-xs">
              FAQ
            </p>
            <span className="w-10 h-[2px] bg-green-700"></span>
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-[#3e2723]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Helpful information for buyers requesting Indonesian Arabica green
            coffee bean samples and export details.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-[#efe4d2] bg-white p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-[#3e2723]">
                <span>{item.question}</span>
                <span className="shrink-0 text-2xl leading-none text-green-700 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
