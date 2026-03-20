import type { Metadata } from "next";
import Link from "next/link";
import { serviceAreas, getServiceAreaBySlug } from "@/data/service-areas";
import { faqSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: `https://www.ginagonzaleznotary.com/service-areas/${slug}/`,
    },
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-sans text-4xl font-bold text-brand-black mb-4">Page Not Found</h1>
          <Link href="/service-areas/" className="text-brand-gold-dark font-semibold">
            View all service areas
          </Link>
        </div>
      </div>
    );
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Gina Gonzalez Notary Public",
    description: `Mobile notary services in ${area.name}, ${area.county}`,
    url: `https://www.ginagonzaleznotary.com/service-areas/${slug}/`,
    telephone: "+14159489967",
    email: "gina.gonzalez.realtor@gmail.com",
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: area.county,
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: area.lat,
      longitude: area.lng,
    },
    openingHours: "Mo-Su 07:00-21:00",
    priceRange: "$",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(area.faqs)) }}
      />

      {/* Hero */}
      <section className="bg-brand-gray-50 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-brand-gray-400 mb-6">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/service-areas/" className="hover:text-brand-gold transition-colors">Service Areas</Link>
            <span>/</span>
            <span className="text-brand-gray-600">{area.name}</span>
          </nav>
          <p className="text-brand-gray-600 font-sans font-semibold text-sm tracking-wider uppercase mb-3">
            {area.county}
          </p>
          <h1 className="font-sans text-3xl sm:text-5xl font-bold text-brand-black mb-4">
            Mobile Notary in {area.name}, CA
          </h1>
          <p className="text-brand-gray-600 text-lg max-w-2xl mb-6">
            {area.quickAnswer}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+14159489967"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-bold px-6 py-3 rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (415) 948-9967
            </a>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-brand-white hover:bg-brand-gray-50 text-brand-black font-bold px-6 py-3 rounded-xl transition-colors shadow-md shadow-black/[0.06]"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">

              {/* About this area */}
              <div>
                <h2 className="font-sans text-2xl font-bold text-brand-black mb-4">
                  Notary Services in {area.name}
                </h2>
                <p className="text-brand-gray-600 leading-relaxed">{area.description}</p>
              </div>

              {/* Key facts */}
              <div className="p-6 rounded-2xl bg-brand-gray-50 shadow-sm shadow-black/[0.04]">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-gray-400 mb-4">Key Facts</p>
                <ul className="space-y-3">
                  {area.keyFacts.map((fact, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-gold flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-brand-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-brand-black text-sm leading-relaxed">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services offered */}
              <div>
                <h2 className="font-sans text-2xl font-bold text-brand-black mb-4">
                  Services Available in {area.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: "Mobile Notary", href: "/notary-services/mobile-notary-sacramento/" },
                    { label: "Loan Signing", href: "/notary-services/real-estate-notary-sacramento/" },
                    { label: "Real Estate Documents", href: "/notary-services/real-estate-notary-sacramento/" },
                    { label: "Power of Attorney", href: "/notary-services/legal-personal/" },
                    { label: "Apostille Services", href: "/notary-services/apostille-services-in-sacramento-ca/" },
                    { label: "Wedding Officiant", href: "/notary-services/wedding-officiant-services-in-sacramento-ca/" },
                    { label: "Spanish Notary", href: "/notary-services/spanish-notary-sacramento/" },
                    { label: "DMV Documents", href: "/notary-services/business-misc-documents/" },
                  ].map((svc) => (
                    <Link
                      key={svc.label}
                      href={svc.href}
                      className="flex items-center gap-3 p-3 rounded-xl bg-brand-white shadow-sm shadow-black/[0.04] hover:shadow-md hover:shadow-black/[0.06] transition-all group"
                    >
                      <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                      <span className="text-sm font-medium text-brand-black group-hover:text-brand-gold-dark transition-colors">
                        {svc.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="font-sans text-2xl font-bold text-brand-black mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {area.faqs.map((faq, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-brand-gray-50 shadow-sm shadow-black/[0.04]">
                      <p className="font-sans font-bold text-brand-black mb-2 text-[15px]">{faq.question}</p>
                      <p className="text-brand-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact card */}
              <div className="bg-brand-white shadow-lg shadow-black/[0.06] rounded-2xl p-6">
                <h3 className="font-sans font-bold text-brand-black mb-4">Book in {area.name}</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+14159489967"
                    className="flex items-center gap-3 p-3 bg-brand-gold rounded-xl font-bold text-brand-black hover:bg-brand-gold-dark transition-colors"
                  >
                    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (415) 948-9967
                  </a>
                  <Link
                    href="/contact/"
                    className="flex items-center justify-center gap-2 p-3 bg-brand-gray-50 rounded-xl font-semibold text-brand-black hover:bg-brand-gray-100 transition-colors text-sm"
                  >
                    Book Online
                  </Link>
                </div>
                <div className="mt-4 pt-4 border-t border-brand-gray-100 space-y-2 text-sm text-brand-gray-600">
                  <div className="flex justify-between">
                    <span>Mon – Sun</span>
                    <span className="font-medium text-brand-black">7 AM – 9 PM</span>
                  </div>
                  <p className="text-xs text-brand-gray-400">Same-day and after-hours available</p>
                </div>
              </div>

              {/* Other areas */}
              <div className="bg-brand-gray-50 rounded-2xl p-6 shadow-sm shadow-black/[0.04]">
                <h3 className="font-sans font-bold text-brand-black mb-3 text-sm">Other Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas
                    .filter((a) => a.slug !== slug)
                    .slice(0, 8)
                    .map((a) => (
                      <Link
                        key={a.slug}
                        href={`/service-areas/${a.slug}/`}
                        className="text-xs font-medium text-brand-gold-dark hover:text-brand-black transition-colors"
                      >
                        {a.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
