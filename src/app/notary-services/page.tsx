import type { Metadata } from "next";
import { getAllServices } from "@/lib/content";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Notary Services in Sacramento, CA",
  description:
    "Mobile notary services in Sacramento. Legal documents, real estate, loan signings, apostille, wedding officiant, and more. Bilingual English/Spanish. Call (415) 948-9967.",
  alternates: {
    canonical: "https://www.ginagonzaleznotary.com/notary-services/",
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

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold font-sans font-semibold text-sm tracking-wider uppercase mb-3">
            Our Services
          </p>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-brand-white mb-4">
            Sacramento Notary Services
          </h1>
          <p className="text-brand-gray-200 text-lg max-w-2xl">
            Certified mobile notary services for legal, real estate, business, and personal documents.
            Bilingual in English and Spanish. Same day appointments available.
          </p>
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
    </>
  );
}
