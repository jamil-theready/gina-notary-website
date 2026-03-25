"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-brand-gray-100 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-brand-gray-50 transition-colors"
            aria-expanded={openIndex === i}
          >
            <span className="font-sans font-semibold text-brand-black pr-4">
              {faq.question}
            </span>
            <svg
              className={`w-5 h-5 text-brand-gray-400 shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: openIndex === i ? "300px" : "0px",
              opacity: openIndex === i ? 1 : 0,
            }}
          >
            <div className="px-6 pb-5 text-brand-gray-600 text-base leading-relaxed">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
