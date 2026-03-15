import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Gina Gonzalez | Sacramento Notary Public",
  description:
    "Former lawyer from Peru, now Sacramento's trusted mobile notary. 10+ years experience, 6,000+ documents, NNA certified, bilingual English/Spanish. Call (415) 948-9967.",
  alternates: {
    canonical: "https://www.ginagonzaleznotary.com/about/",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold font-sans font-semibold text-sm tracking-wider uppercase mb-3">
            About
          </p>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-brand-white mb-4">
            Meet Gina Gonzalez
          </h1>
          <p className="text-brand-gray-200 text-lg max-w-2xl">
            I marry people, help them buy homes, and sometimes help them &ldquo;unmarry&rdquo; too.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="aspect-[3/4] bg-brand-gray-200 rounded-2xl overflow-hidden sticky top-28">
                <div className="w-full h-full flex items-center justify-center text-brand-gray-400">
                  <span className="text-sm">Gina&apos;s Photo</span>
                </div>
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
                    Before becoming Sacramento&apos;s trusted mobile notary, I served as a lawyer and Legal Advisor for the Regional Government of Cusco, Peru. That legal background shapes everything I do. Every document gets reviewed with precision before I apply my seal.
                  </p>
                  <p>
                    I came to the United States from Peru in 2003 with a law degree and a determination to build something meaningful. Over the last decade, I have notarized more than 6,000 documents for families, businesses, and individuals across Sacramento County.
                  </p>
                </div>
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

              <div>
                <h2 className="font-sans text-2xl font-bold text-brand-black mb-4">
                  More Than a Notary
                </h2>
                <div className="space-y-4 text-brand-gray-600 leading-relaxed">
                  <p>
                    I also lead the Perfecto Homes real estate team, which gives me unique insight into real estate transactions, loan signings, and property transfers. And as a certified wedding officiant, I perform bilingual ceremonies in English and Spanish throughout the Sacramento area.
                  </p>
                </div>
              </div>

              {/* Credentials */}
              <div className="bg-brand-gray-50 rounded-2xl p-8">
                <h3 className="font-sans text-lg font-bold text-brand-black mb-4">Credentials</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "NNA Certified Notary Public",
                    "California Commissioned",
                    "Insured and Bonded",
                    "Bilingual: English & Spanish",
                    "Former Lawyer (Peru)",
                    "Certified Wedding Officiant",
                    "Licensed Real Estate Agent",
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
    </>
  );
}
