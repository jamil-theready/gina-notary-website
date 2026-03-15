import Link from "next/link";

const serviceLinks = [
  { href: "/notary-services/legal-personal/", label: "Legal & Personal" },
  { href: "/notary-services/real-estate-notary-sacramento/", label: "Real Estate" },
  { href: "/notary-services/court-legal-proceedings/", label: "Court & Legal" },
  { href: "/notary-services/business-misc-documents/", label: "Business Documents" },
  { href: "/notary-services/wedding-officiant-services-in-sacramento-ca/", label: "Wedding Officiant" },
  { href: "/notary-services/apostille-services-in-sacramento-ca/", label: "Apostille Services" },
];

const quickLinks = [
  { href: "/about/", label: "About Gina" },
  { href: "/notary-resources/", label: "Blog & Resources" },
  { href: "/contact/", label: "Contact" },
  { href: "/notary-services/mobile-notary-sacramento/", label: "Mobile Notary" },
  { href: "/notary-services/spanish-notary-sacramento/", label: "Notario en Sacramento" },
];

const serviceAreas = [
  "Sacramento", "West Sacramento", "Elk Grove", "Roseville", "Folsom",
  "Rancho Cordova", "Citrus Heights", "Davis", "Woodland", "Lincoln",
  "Auburn", "Carmichael", "Fair Oaks", "Orangevale",
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-gray-200">
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
              className="inline-flex items-center gap-2 bg-brand-black hover:bg-brand-gray-800 text-brand-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (415) 948-9967
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-brand-white hover:bg-brand-gray-50 text-brand-black font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-brand-gold font-sans font-extrabold text-xl">
                Gina Gonzalez
              </span>
              <span className="text-brand-white font-sans font-medium text-base ml-1">
                Notary
              </span>
            </div>
            <p className="text-brand-gray-400 text-sm leading-relaxed mb-4">
              Certified mobile notary public and bilingual wedding officiant serving Sacramento and surrounding areas. NNA certified and insured. 10+ years of experience.
            </p>
            <p className="text-brand-gray-400 text-sm">
              <strong className="text-brand-white">Phone:</strong>{" "}
              <a href="tel:+14159489967" className="hover:text-brand-gold transition-colors">
                (415) 948-9967
              </a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans font-bold text-brand-white mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-gray-400 hover:text-brand-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-bold text-brand-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-gray-400 hover:text-brand-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-sans font-bold text-brand-white mb-4">Service Areas</h3>
            <p className="text-brand-gray-400 text-sm leading-relaxed">
              {serviceAreas.join(" · ")}
            </p>
            <p className="text-brand-gray-400 text-sm mt-3">
              Serving Sacramento, Placer, Yuba, and Yolo counties.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-brand-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Gina Gonzalez Notary. All rights reserved.
          </p>
          <p className="text-brand-gray-600 text-sm">
            Sacramento, California
          </p>
        </div>
      </div>
    </footer>
  );
}
