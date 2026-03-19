"use client";

export default function FloatingPhoneCTA() {
  return (
    <a
      href="tel:+14159489967"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-bold px-5 py-3.5 rounded-xl shadow-lg transition-colors sm:hidden"
      aria-label="Call Gina Gonzalez Notary"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      Call Now
    </a>
  );
}
