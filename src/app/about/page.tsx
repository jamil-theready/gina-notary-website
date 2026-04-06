import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Gina Gonzalez | Sacramento Notary Public",
  description:
    "Former lawyer from Peru, now Sacramento's trusted mobile notary. 10+ years experience, 6,000+ documents, NNA certified, bilingual English/Spanish. Call (415) 948-9967.",
  alternates: {
    canonical: "https://ginagonzaleznotary.com/about/",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Gina Gonzalez",
            jobTitle: "Certified Notary Public",
            description: "Former lawyer from Peru, NNA certified mobile notary serving Sacramento CA. 10+ years experience, 6,000+ documents notarized.",
            knowsLanguage: ["English", "Spanish"],
            worksFor: {
              "@type": "LocalBusiness",
              name: "Gina Gonzalez Notary",
              telephone: "+14159489967",
            },
          }),
        }}
      />
      <section className="bg-brand-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold font-sans font-semibold text-sm tracking-wider uppercase mb-3">
            About
          </p>
          <h1 className="font-sans text-3xl sm:text-5xl font-bold text-brand-black mb-4">
            Meet Gina Gonzalez
          </h1>
          <p className="text-brand-gray-600 text-lg max-w-2xl">
            I marry people, help them buy homes, and sometimes help them &ldquo;unmarry&rdquo; too.
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] bg-brand-gray-200 rounded-2xl overflow-hidden sticky top-28">
                <Image
                  src="/images/Gina-notary-website-image.jpg"
                  alt="Gina Gonzalez, NNA certified mobile notary public in Sacramento California"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h2 className="font-sans text-2xl font-bold text-brand-black mb-4">
                  From Peru to Sacramento
                </h2>
                <div className="space-y-4 text-brand-gray-600 leading-relaxed">
                  <p>
                    Before becoming Sacramento&apos;s trusted mobile notary, I served as a lawyer and Legal Advisor for the Regional Government of Cusco, Peru. I earned my law degree from Universidad Nacional de San Antonio Abad del Cusco and spent years handling legal documents, contracts, and government proceedings at the highest level.
                  </p>
                  <p>
                    I came to the United States from Peru in 2003 with a law degree and a determination to build something meaningful. That legal background shapes everything I do. Every document gets reviewed with precision before I apply my seal. Over the last decade, I have notarized more than 6,000 documents for families, businesses, and individuals across Sacramento County.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="border-l-2 border-brand-gold/30 pl-6 space-y-6">
                {[
                  { year: "Peru", title: "Law Degree & Legal Career", desc: "Earned law degree from UNSAAC. Served as Legal Advisor for the Regional Government of Cusco, handling contracts, litigation, and government proceedings." },
                  { year: "2003", title: "Moved to the United States", desc: "Immigrated to California with a legal background and a commitment to serving the community." },
                  { year: "2014", title: "Became a Certified Notary Public", desc: "Earned California notary commission and NNA certification. Started serving Sacramento County as a mobile notary." },
                  { year: "2018", title: "Licensed Real Estate Agent", desc: "Obtained California real estate license to better serve clients with property transactions, loan signings, and title transfers." },
                  { year: "2020", title: "Founded Perfecto Homes", desc: "Launched Perfecto Homes Real Estate, a bilingual brokerage serving Sacramento, Elk Grove, Roseville, Folsom, and El Dorado Hills." },
                  { year: "2024", title: "6,000+ Documents Notarized", desc: "Reached milestone of over 6,000 notarized documents. Expanded services to include wedding officiant, apostille, and translation services." },
                ].map((item) => (
                  <div key={item.year} className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-brand-gold" />
                    <p className="text-brand-gold font-bold text-sm tracking-wider uppercase">{item.year}</p>
                    <h3 className="font-sans font-bold text-brand-black mt-1">{item.title}</h3>
                    <p className="text-brand-gray-600 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="font-sans text-2xl font-bold text-brand-black mb-4">
                  Why Clients Trust Me
                </h2>
                <div className="space-y-4 text-brand-gray-600 leading-relaxed">
                  <p>
                    I am NNA certified, insured, and fully bilingual in English and Spanish. For Sacramento&apos;s Latino and immigrant community, having a notary who speaks your language and understands your experience makes a real difference. I have helped first-generation homebuyers understand their loan documents, adult children get power of attorney for aging parents, and families navigate custody agreements during difficult times.
                  </p>
                  <p>
                    I have notarized contracts in corner offices, warehouse break rooms, coffee shops, and parking lots. I have been to hospitals and hospice facilities for estate planning documents. Whatever the situation, I bring the same professionalism and care.
                  </p>
                </div>
              </div>

              {/* By the Numbers */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { stat: "6,000+", label: "Documents Notarized" },
                  { stat: "10+", label: "Years Experience" },
                  { stat: "14", label: "Cities Served" },
                  { stat: "2", label: "Languages" },
                ].map((item) => (
                  <div key={item.label} className="text-center bg-brand-gray-50 rounded-xl p-4">
                    <p className="text-2xl sm:text-3xl font-bold text-brand-gold">{item.stat}</p>
                    <p className="text-brand-gray-600 text-xs mt-1 uppercase tracking-wider">{item.label}</p>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="font-sans text-2xl font-bold text-brand-black mb-4">
                  More Than a Notary
                </h2>
                <div className="space-y-4 text-brand-gray-600 leading-relaxed">
                  <p>
                    I also lead the <a href="https://www.perfectohomesrealestate.com" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline font-semibold">Perfecto Homes</a> real estate team, a bilingual brokerage serving the greater Sacramento area. My team helps families buy and sell homes in Sacramento, Elk Grove, Roseville, Folsom, El Dorado Hills, and surrounding communities. This gives me unique insight into real estate transactions, loan signings, and property transfers that most notaries simply do not have.
                  </p>
                  <p>
                    As a certified wedding officiant, I perform bilingual ceremonies in English and Spanish throughout the Sacramento area. From courthouse marriages to garden weddings, I make the process simple and meaningful.
                  </p>
                </div>
              </div>

              {/* Services Overview */}
              <div>
                <h2 className="font-sans text-2xl font-bold text-brand-black mb-4">
                  What I Can Help You With
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: "Loan Signings & Refinances", desc: "Real estate closings, refinance packages, reverse mortgages" },
                    { title: "Legal Documents", desc: "Power of attorney, affidavits, declarations, court filings" },
                    { title: "Estate Planning", desc: "Wills, trusts, advance healthcare directives" },
                    { title: "Real Estate Transfers", desc: "Grant deeds, quitclaim deeds, title transfers" },
                    { title: "Wedding Officiant", desc: "Bilingual ceremonies in English and Spanish" },
                    { title: "Apostille & Translation", desc: "Document authentication and certified translations" },
                  ].map((svc) => (
                    <div key={svc.title} className="bg-brand-gray-50 rounded-xl p-4">
                      <h3 className="font-sans font-bold text-brand-black text-sm">{svc.title}</h3>
                      <p className="text-brand-gray-600 text-xs mt-1 leading-relaxed">{svc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credentials */}
              <div className="bg-brand-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="font-sans text-lg font-bold text-brand-black">Credentials & Certifications</h3>
                  <Image
                    src="/images/NNA.jpg"
                    alt="National Notary Association certified member badge"
                    width={56}
                    height={56}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "NNA Certified Notary Public",
                    "California Commissioned Notary",
                    "Errors & Omissions Insured",
                    "Surety Bonded ($15,000)",
                    "Bilingual: English & Spanish",
                    "Law Degree (UNSAAC, Peru)",
                    "Former Government Legal Advisor",
                    "California Real Estate License",
                    "Certified Wedding Officiant",
                    "NNA Loan Signing Agent",
                    "Background Checked & Verified",
                    "10+ Years of Experience",
                  ].map((cred) => (
                    <div key={cred} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-brand-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-brand-gray-600 text-sm">{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas Served */}
              <div>
                <h2 className="font-sans text-2xl font-bold text-brand-black mb-4">
                  Areas I Serve
                </h2>
                <p className="text-brand-gray-600 leading-relaxed mb-4">
                  I travel to you. As a mobile notary, I serve 14 cities across the greater Sacramento area, available 7 days a week from 7 AM to 9 PM.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Sacramento", "West Sacramento", "Elk Grove", "Roseville",
                    "Folsom", "Rancho Cordova", "Citrus Heights", "Davis",
                    "Woodland", "Lincoln", "Auburn", "Carmichael",
                    "Fair Oaks", "Orangevale",
                  ].map((city) => (
                    <Link
                      key={city}
                      href={`/service-areas/${city.toLowerCase().replace(/\s+/g, "-")}/`}
                      className="text-sm bg-brand-gray-50 hover:bg-brand-gold/10 text-brand-gray-600 hover:text-brand-black px-3 py-1.5 rounded-full transition-colors"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+14159489967"
                  className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-bold px-8 py-4 rounded-xl transition-colors text-lg"
                >
                  Call (415) 948-9967
                </a>
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center bg-brand-black hover:bg-brand-gray-800 text-brand-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
