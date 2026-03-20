"use client";

import { useState } from "react";

interface FAQAccordionProps {
  faqs: { question: string; answer: string }[];
  title?: string;
}

export default function FAQAccordion({ faqs, title = "Frequently Asked Questions" }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mt-12">
      <h2 className="font-sans text-2xl font-bold text-brand-black mb-6">{title}</h2>
      <div className="space-y-3">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="rounded-2xl bg-brand-gray-50 overflow-hidden shadow-sm shadow-black/[0.04] hover:shadow-md hover:shadow-black/[0.06] transition-shadow"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-sans font-semibold text-brand-black text-[15px] pr-4">{item.question}</span>
                <svg
                  className={`w-5 h-5 shrink-0 text-brand-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div className="px-6 pb-5">
                  <p className="text-brand-gray-600 text-sm leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
