import Link from "next/link";
import Image from "next/image";

const footerColumns = [
  {
    title: "Legal & Personal Services",
    links: [
      { label: "Authorization to Travel with a Minor", href: "/notary-services/legal-personal/" },
      { label: "Name Changes and Corrections", href: "/notary-services/legal-personal/" },
      { label: "Prenuptial Agreements", href: "/notary-services/legal-personal/" },
      { label: "Promissory Notes", href: "/notary-services/business-misc-documents/" },
      { label: "Power of Attorney", href: "/notary-services/legal-personal/" },
      { label: "Spanish Notary", href: "/notary-services/spanish-notary-sacramento/" },
      { label: "Mobile Notary", href: "/notary-services/mobile-notary-sacramento/" },
    ],
  },
  {
    title: "Court & Proceedings",
    links: [
      { label: "Restraining Orders", href: "/notary-services/court-legal-proceedings/" },
      { label: "Mechanic's Liens", href: "/notary-services/court-legal-proceedings/" },
      { label: "Demand Letters", href: "/notary-services/court-legal-proceedings/" },
      { label: "Family Matters", href: "/notary-services/court-legal-proceedings/" },
      { label: "Petitions", href: "/notary-services/court-legal-proceedings/" },
    ],
  },
  {
    title: "Real Estate & Loans",
    links: [
      { label: "Transfer of Death Deed", href: "/notary-services/real-estate-notary-sacramento/" },
      { label: "Real Estate Notary", href: "/notary-services/real-estate-notary-sacramento/" },
      { label: "Quitclaim Deeds", href: "/notary-services/real-estate-notary-sacramento/" },
      { label: "Grant Deed", href: "/notary-services/real-estate-notary-sacramento/" },
      { label: "Loan Signing", href: "/notary-services/real-estate-notary-sacramento/" },
    ],
  },
  {
    title: "Business & Misc.",
    links: [
      { label: "DMV Documents", href: "/notary-services/business-misc-documents/" },
      { label: "Lease Agreements", href: "/notary-services/business-misc-documents/" },
    ],
  },
  {
    title: "Wedding Officiant",
    links: [
      { label: "Full Ceremony Officiant", href: "/notary-services/wedding-officiant-services-in-sacramento-ca/" },
    ],
  },
  {
    title: "Apostille",
    links: [
      { label: "Apostille Services", href: "/notary-services/apostille-services-in-sacramento-ca/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      {/* CTA Banner */}
      <div className="bg-brand-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-brand-black mb-3">
            Need a Notary in Sacramento?
          </h2>
          <p className="text-brand-black/80 mb-6 max-w-xl mx-auto">
            Same day appointments available. Gina comes to you. Bilingual service in English and Spanish.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+14159489967"
              className="inline-flex items-center gap-2 bg-brand-black hover:bg-brand-gray-800 text-brand-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (415) 948-9967
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-brand-white hover:bg-brand-gray-50 text-brand-black font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-gradient-to-b from-[#fffaed] to-[#f7edd0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Logo Area */}
          <div className="flex items-center gap-4 mb-10">
            <Image
              src="/images/gina-avatar.png"
              alt="Gina Gonzalez"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div>
              <span className="font-sans font-extrabold text-xl text-brand-black">
                Notary Public
              </span>
            </div>
            <Image
              src="/images/NNA.jpg"
              alt="National Notary Association certified member badge"
              width={56}
              height={56}
              className="rounded object-contain ml-2"
            />
          </div>

          {/* Footer Nav Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-sans font-bold text-brand-black text-sm mb-3">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-brand-gray-600 hover:text-brand-black transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Copyright Bar */}
          <div className="mt-12 pt-8 border-t border-brand-black/10">
            <p className="text-brand-gray-600 text-sm">
              &copy; 2025 Gina Notary Public
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
