import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";

const services = [
  {
    title: "Legal & Personal Documents",
    description:
      "Power of attorney, healthcare directives, affidavits, name changes, prenuptial agreements and more.",
    href: "/notary-services/legal-personal/",
  },
  {
    title: "Real Estate & Loan Signing",
    description:
      "Quitclaim deeds, grant deeds, transfer-on-death deeds, loan signings and refinance closings.",
    href: "/notary-services/real-estate-notary-sacramento/",
  },
  {
    title: "Court & Legal Proceedings",
    description:
      "Family matters, restraining orders, petitions, demand letters, mechanics liens and court filings.",
    href: "/notary-services/court-legal-proceedings/",
  },
  {
    title: "Business Documents",
    description:
      "DMV documents, lease agreements, promissory notes and other business or miscellaneous documents.",
    href: "/notary-services/business-misc-documents/",
  },
  {
    title: "Wedding Officiant",
    description:
      "Bilingual wedding ceremonies in English and Spanish. Personalized vows, elopements, and courthouse weddings.",
    href: "/notary-services/wedding-officiant-services-in-sacramento-ca/",
  },
  {
    title: "Apostille Services",
    description:
      "International document certification for use abroad. Birth certificates, marriage records, legal documents.",
    href: "/notary-services/apostille-services-in-sacramento-ca/",
  },
];

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "6,000+", label: "Documents Notarized" },
  { number: "4", label: "Counties Served" },
  { number: "2", label: "Languages" },
];

const testimonials = [
  {
    quote:
      "Gina was incredibly professional and made the entire process seamless. She came to our home on a Saturday and had everything notarized in under 30 minutes. Highly recommend.",
    name: "Maria R.",
    context: "Power of Attorney signing",
  },
  {
    quote:
      "We needed documents notarized for a property transfer and Gina explained everything clearly in both English and Spanish for my parents. She was patient and thorough.",
    name: "Carlos M.",
    context: "Real estate transaction",
  },
  {
    quote:
      "Gina officiated our wedding and it was beautiful. She worked with us to create a bilingual ceremony that made both families feel included. Could not have asked for a better experience.",
    name: "Jessica & Tom",
    context: "Wedding ceremony",
  },
];

const homepageFaqs = [
  {
    question: "What is a mobile notary and how does it work?",
    answer:
      "A mobile notary travels to your location instead of making you visit an office. Gina Gonzalez Notary serves Sacramento, West Sacramento, Roseville, Folsom, Elk Grove, and surrounding areas. You schedule an appointment, have your valid government issued ID ready, and Gina meets you at your home, office, hospital, or any convenient spot to complete your notarization on the spot.",
  },
  {
    question: "How much does mobile notary service cost in Sacramento?",
    answer:
      "California sets a maximum fee of $15 per signature per notarized document. Mobile notaries may charge an additional travel fee depending on distance. Gina Gonzalez Notary offers competitive rates for Sacramento and surrounding cities. Call (415) 948-9967 for a quick quote based on your document type and location.",
  },
  {
    question: "What documents do I need to bring to a notary appointment?",
    answer:
      "Bring a current, valid government issued photo ID such as a California driver's license, US passport, or state ID card. The ID must not be expired. You also need the unsigned documents that require notarization. Do not sign anything before the appointment. The notary must witness your signature in person as required by California law.",
  },
  {
    question: "Can a notary provide services in Spanish?",
    answer:
      "Yes. Gina Gonzalez Notary is fully bilingual in English and Spanish. She assists Spanish speaking clients with document notarization, loan signings, and wedding officiant services throughout the Sacramento area. Having a bilingual notary ensures you understand every document you sign without needing a separate translator.",
  },
  {
    question: "Do you offer same day or emergency notary services?",
    answer:
      "Yes. Gina Gonzalez Notary offers same day appointments including evenings and weekends. Whether you need a last minute loan signing, an urgent power of attorney, or time sensitive legal documents notarized, call (415) 948-9967 to schedule. Service is available throughout Sacramento, Placer, and Yolo counties.",
  },
  {
    question: "What areas does Gina Gonzalez Notary serve?",
    answer:
      "Gina serves West Sacramento, Sacramento, Roseville, Folsom, Rancho Cordova, Citrus Heights, Elk Grove, Davis, Woodland, Lincoln, Auburn, and surrounding communities in Sacramento, Placer, Yuba, and Yolo counties. As a mobile notary, she travels to your location for maximum convenience.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left - Text */}
            <div>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-brand-black leading-[1.1] mb-6">
                Your Trusted{" "}
                <span className="text-brand-gold">Mobile Notary</span>
                <br />
                in Sacramento, CA
              </h1>
              <p className="text-brand-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                Your Mobile Notary public service is here to serve you in West Sacramento CA and empower you with essential tools to navigate legal processes confidently. Your paperwork, our priority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center gap-2 bg-brand-black hover:bg-brand-gray-800 text-brand-white font-semibold px-7 py-3.5 rounded-full transition-colors"
                >
                  Get Notarized
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/notary-services/"
                  className="inline-flex items-center justify-center gap-2 border border-brand-gray-200 hover:border-brand-gray-400 text-brand-black font-semibold px-7 py-3.5 rounded-full transition-colors"
                >
                  Notary Services
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right - Photo + Badges */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Gold wave background */}
                <div className="absolute -inset-6 sm:-inset-8 rounded-[2rem] overflow-hidden -z-10">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-gold/10 to-brand-gold/25" />
                  <svg className="absolute bottom-0 left-0 w-full h-2/3" viewBox="0 0 400 200" fill="none" preserveAspectRatio="none">
                    <path d="M0 80 C80 20, 180 140, 300 60 C350 30, 380 50, 400 40 L400 200 L0 200Z" fill="rgba(249,207,1,0.2)" />
                    <path d="M0 120 C100 60, 200 160, 350 80 L400 70 L400 200 L0 200Z" fill="rgba(249,207,1,0.15)" />
                    <path d="M0 160 C120 100, 280 180, 400 120 L400 200 L0 200Z" fill="rgba(249,207,1,0.12)" />
                  </svg>
                </div>
                {/* Gina's Photo */}
                <div className="w-72 sm:w-80 lg:w-96 aspect-[3/4] rounded-3xl overflow-hidden bg-brand-gray-200 shadow-lg">
                  <img
                    src="/images/gina-gonzalez-notary.jpg"
                    alt="Gina Gonzalez, certified mobile notary public in Sacramento CA"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Mobile badge */}
                <div className="absolute top-8 -left-12 bg-brand-white rounded-full px-4 py-2 shadow-md flex items-center gap-2">
                  <span className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-brand-black">mobile</span>
                </div>

                {/* English & Spanish badge */}
                <div className="absolute bottom-24 -right-8 sm:-right-12 bg-brand-white rounded-full px-4 py-2 shadow-md flex items-center gap-2">
                  <span className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-xs font-bold text-brand-black">
                    xA
                  </span>
                  <span className="text-sm font-medium text-brand-black">English &amp; Spanish</span>
                </div>

                {/* Signature box */}
                <div className="absolute -bottom-6 -left-8 sm:-left-12 bg-brand-white rounded-xl border-2 border-dashed border-brand-gold px-6 py-4 shadow-md">
                  <p className="text-xs text-brand-gray-400 mb-1">Signature</p>
                  <p className="font-sans text-2xl italic text-brand-black" style={{ fontFamily: "cursive" }}>Gina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-sans text-3xl sm:text-4xl font-extrabold text-brand-black">
                  {stat.number}
                </div>
                <div className="text-brand-black/70 font-medium text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-gold-dark font-sans font-semibold text-sm tracking-wider uppercase mb-2">
              What We Do
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-brand-black mb-4">
              Notary Services in Sacramento
            </h2>
            <p className="text-brand-gray-600 max-w-2xl mx-auto">
              From real estate closings to wedding ceremonies, Gina provides certified mobile notary services across Sacramento and surrounding counties.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About / Trust Section */}
      <section className="py-16 sm:py-24 bg-brand-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-brand-gold-dark font-sans font-semibold text-sm tracking-wider uppercase mb-2">
                About Gina
              </p>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold text-brand-black mb-6">
                Former Lawyer. Certified Notary. Your Neighbor.
              </h2>
              <div className="space-y-4 text-brand-gray-600 leading-relaxed">
                <p>
                  Gina Gonzalez served as a lawyer and Legal Advisor for the Regional Government of Cusco, Peru before coming to the United States in 2003. That legal background means every document gets reviewed with precision before she applies her seal.
                </p>
                <p>
                  With 10+ years as a certified notary and over 6,000 documents notarized, Gina brings experience and care to every appointment. She is NNA certified, insured, and fully bilingual in English and Spanish.
                </p>
                <p>
                  Gina also leads the Perfecto Homes real estate team, giving her unique insight into real estate transactions, loan signings, and property transfers.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                {["NNA Certified", "Insured", "Bilingual", "10+ Years", "Mobile Service"].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center px-3 py-1.5 bg-brand-gold/10 text-brand-gold-dark font-medium text-sm rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <Link
                href="/about/"
                className="inline-flex items-center gap-2 mt-8 text-brand-gold-dark font-semibold hover:gap-3 transition-all"
              >
                Read more about Gina
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-brand-gray-200 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-brand-gray-400">
                  <span className="text-sm">Gina&apos;s Photo</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-gold rounded-2xl p-6 shadow-lg">
                <div className="font-sans text-2xl font-extrabold text-brand-black">6,000+</div>
                <div className="text-brand-black/70 text-sm font-medium">Documents Notarized</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-gold-dark font-sans font-semibold text-sm tracking-wider uppercase mb-2">
              Simple Process
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-brand-black mb-4">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Call or Book Online",
                desc: "Call (415) 948-9967 or use the contact form to schedule your appointment.",
              },
              {
                step: "2",
                title: "Gina Comes to You",
                desc: "She meets you at your home, office, hospital, or any convenient location.",
              },
              {
                step: "3",
                title: "Documents Notarized",
                desc: "Your documents are reviewed, signed, sealed, and legally notarized on the spot.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-sans text-xl font-extrabold text-brand-black">{item.step}</span>
                </div>
                <h3 className="font-sans text-lg font-bold text-brand-black mb-2">{item.title}</h3>
                <p className="text-brand-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-gold font-sans font-semibold text-sm tracking-wider uppercase mb-2">
              What Clients Say
            </p>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-brand-white">
              Trusted by Sacramento Families
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-brand-gray-800 rounded-2xl p-6 sm:p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-brand-gray-200 leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="text-brand-white font-semibold text-sm">{t.name}</div>
                  <div className="text-brand-gray-400 text-xs">{t.context}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bilingual CTA */}
      <section className="py-16 sm:py-20 bg-brand-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-brand-black mb-4">
            Servicio de Notario en Sacramento
          </h2>
          <p className="text-brand-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Gina habla espanol e ingles con fluidez. Si necesita un notario que hable espanol en Sacramento, llame hoy para programar su cita. Servicio movil disponible en todo el condado de Sacramento.
          </p>
          <a
            href="tel:+14159489967"
            className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-bold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Llame Ahora: (415) 948-9967
          </a>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={homepageFaqs} />
    </>
  );
}
