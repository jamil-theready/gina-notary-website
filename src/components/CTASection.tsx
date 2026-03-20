import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-brand-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-brand-black leading-tight mb-4">
          Ready to Get Started?
          <br />
          Let&apos;s Make It{" "}
          <span className="text-brand-gold-dark">Official</span>
        </h2>
        <p className="text-brand-gray-600 mb-8 max-w-md mx-auto">
          Book your mobile notary appointment today. Same day service available throughout Sacramento.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center gap-2 bg-brand-black hover:bg-brand-gray-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors"
          >
            Get Notarized
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <a
            href="tel:+14159489967"
            className="inline-flex items-center justify-center gap-2 text-brand-gray-600 hover:text-brand-black font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (415) 948-9967
          </a>
        </div>
      </div>
    </section>
  );
}
