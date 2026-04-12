import type { Metadata } from "next";
import { getAllServices } from "@/lib/content";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Notary Services in Sacramento, CA",
  description:
    "Mobile notary services in Sacramento. Legal documents, real estate, loan signings, apostille, wedding officiant, and more. Bilingual English/Spanish. Call (415) 948-9967.",
  alternates: {
    canonical: "https://ginagonzaleznotary.com/notary-services/",
  },
};

const mainServices = [
  {
    title: "Legal & Personal Documents",
    description: "Power of attorney, healthcare directives, affidavits, name changes, prenuptial agreements.",
    href: "/notary-services/legal-personal/",
  },
  {
    title: "Real Estate & Loan Signing",
    description: "Quitclaim deeds, grant deeds, transfer-on-death deeds, loan signings, refinance closings.",
    href: "/notary-services/real-estate-notary-sacramento/",
  },
  {
    title: "Court & Legal Proceedings",
    description: "Family matters, restraining orders, petitions, demand letters, mechanics liens.",
    href: "/notary-services/court-legal-proceedings/",
  },
  {
    title: "Business & Miscellaneous",
    description: "DMV documents, lease agreements, promissory notes, business contracts.",
    href: "/notary-services/business-misc-documents/",
  },
  {
    title: "Wedding Officiant",
    description: "Bilingual ceremonies in English and Spanish. Elopements, courthouse weddings, vow renewals.",
    href: "/notary-services/wedding-officiant-services-in-sacramento-ca/",
  },
  {
    title: "Apostille Services",
    description: "International document certification for legal use abroad. Birth certificates, legal records.",
    href: "/notary-services/apostille-services-in-sacramento-ca/",
  },
  {
    title: "Mobile Notary Sacramento",
    description: "Gina travels to your home, office, hospital, or any location. Same day available.",
    href: "/notary-services/mobile-notary-sacramento/",
  },
  {
    title: "Spanish Notary Sacramento",
    description: "Servicio de notario en espanol. Gina habla espanol e ingles con fluidez.",
    href: "/notary-services/spanish-notary-sacramento/",
  },
  {
    title: "Document Translation",
    description: "Certified translation with notarized certification. Birth certificates, legal documents.",
    href: "/notary-services/certified-english-spanish-translation-services-in-sacramento-ca/",
  },
];

const serviceFaqs = [
  {
    question: "How much does a mobile notary cost in Sacramento?",
    answer: "California law sets the maximum notary fee at $15 per signature. Mobile notary services may include a travel fee depending on your location. Gina serves Sacramento, Elk Grove, Roseville, Folsom, and surrounding areas.",
  },
  {
    question: "What documents can a notary notarize?",
    answer: "A California notary can notarize almost any document that requires a signature, including power of attorney, real estate deeds, loan documents, affidavits, court filings, prenuptial agreements, DMV forms, immigration documents, and medical directives.",
  },
  {
    question: "Do I need to go to a notary office?",
    answer: "No. As a mobile notary, Gina travels to your home, office, hospital, or any location in the Sacramento area. Mobile notary service is especially helpful for clients with mobility issues, tight schedules, or documents that need to be signed at a specific location.",
  },
  {
    question: "Can a notary notarize documents in Spanish?",
    answer: "Gina is fully bilingual in English and Spanish. She can explain the notarization process in Spanish and also provides certified English-Spanish translation services for documents that need to be used in another country.",
  },
  {
    question: "How fast can I get a document notarized?",
    answer: "Same-day appointments are available seven days a week, from 7:00 AM to 9:00 PM. In urgent situations, Gina can often accommodate same-day requests within a few hours. Call (415) 948-9967 to check availability.",
  },
  {
    question: "Does California allow remote online notarization?",
    answer: "No. As of 2026, California requires all notarizations to be performed in person. The signer must physically appear before the notary. Remote online notarization (RON) is legal in some other states but not yet in California.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(serviceFaqs)) }}
      />
      <section className="bg-brand-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold font-sans font-semibold text-sm tracking-wider uppercase mb-3">
            Our Services
          </p>
          <h1 className="font-sans text-3xl sm:text-5xl font-bold text-brand-black mb-4">
            Sacramento Notary Services
          </h1>
          <p className="text-brand-gray-600 text-lg max-w-2xl">
            Certified mobile notary services for legal, real estate, business, and personal documents.
            Bilingual in English and Spanish. Same day appointments available.
          </p>
          <a
            href="tel:+14159489967"
            className="inline-flex items-center gap-2 text-brand-gold font-semibold mt-4 hover:text-brand-gold-dark transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (415) 948-9967
          </a>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>

          {/* CMS-driven services */}
          {(() => {
            const cmsServices = getAllServices();
            if (cmsServices.length === 0) return null;
            const cmsFiltered = cmsServices.filter(
              (s) => !mainServices.some((m) => m.href.includes(s.slug))
            );
            if (cmsFiltered.length === 0) return null;
            return (
              <>
                <h2 className="font-sans text-2xl font-bold text-brand-black mt-16 mb-8">
                  More Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cmsFiltered.map((service) => (
                    <ServiceCard
                      key={service.slug}
                      title={service.shortTitle || service.title}
                      description={service.metaDescription}
                      href={`/notary-services/${service.slug}/`}
                    />
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      </section>

      <section className="bg-brand-gray-50 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-brand-black mb-6">
            What Does a Notary Public Do?
          </h2>
          <p className="text-brand-gray-600 text-lg mb-4">
            A notary public is a state-commissioned official who verifies the identity of document signers and witnesses signatures. In California, notaries are authorized by the Secretary of State to perform notarial acts including acknowledgments, jurats, oaths, and copy certifications. The maximum fee per signature is $15, set by California Government Code Section 8211.
          </p>
          <p className="text-brand-gray-600 text-lg mb-4">
            Gina Gonzalez is a certified mobile notary serving Sacramento and 14 surrounding cities. She travels to your home, office, hospital, or any convenient location. With over 10 years of experience and 6,000+ documents notarized, she handles everything from real estate closings and loan signings to court documents and wedding ceremonies. Bilingual service is available in English and Spanish.
          </p>
          <p className="text-brand-gray-600 text-lg">
            Same-day and evening appointments are available seven days a week. Call <a href="tel:+14159489967" className="text-brand-gold font-semibold hover:text-brand-gold-dark">(415) 948-9967</a> to schedule.
          </p>
        </div>
      </section>

      <FAQ title="Notary Services FAQ" faqs={serviceFaqs} />
    </>
  );
}
