"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({
  title = "Frequently Asked Questions",
  faqs,
}: {
  title?: string;
  faqs: FAQItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans text-2xl sm:text-3xl font-bold text-brand-black text-center mb-10">
          {title}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-brand-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-brand-gray-50 transition-colors"
              >
                <span className="font-sans font-semibold text-brand-black pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-brand-gray-400 shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-brand-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
