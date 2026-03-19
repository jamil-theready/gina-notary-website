import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  robots: "noindex, nofollow",
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-brand-gray-50 px-6">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-gold/20">
          <svg className="h-10 w-10 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="mb-4 font-sans text-3xl font-bold text-brand-black md:text-4xl">
          Message Received
        </h1>
        <p className="mb-8 text-lg text-brand-gray-600">
          Gina will get back to you shortly. For urgent requests, call{" "}
          <a href="tel:+14159489967" className="font-semibold text-brand-gold-dark">
            (415) 948-9967
          </a>
          .
        </p>
        <Link
          href="/"
          className="inline-block rounded-xl bg-brand-gold px-8 py-3.5 font-bold text-brand-black transition-colors hover:bg-brand-gold-dark"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
