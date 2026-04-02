import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const serviceAreas = [
  { name: "Sacramento", slug: "sacramento-notary" },
  { name: "West Sacramento", slug: "west-sacramento-notary" },
  { name: "Elk Grove", slug: "elk-grove-notary" },
  { name: "Roseville", slug: "roseville-notary" },
  { name: "Folsom", slug: "folsom-notary" },
  { name: "Rancho Cordova", slug: "rancho-cordova-notary" },
  { name: "Citrus Heights", slug: "citrus-heights-notary" },
  { name: "Davis", slug: "davis-notary" },
  { name: "Woodland", slug: "woodland-notary" },
  { name: "Lincoln", slug: "lincoln-notary" },
  { name: "Auburn", slug: "auburn-notary" },
  { name: "Carmichael", slug: "carmichael-notary" },
  { name: "Fair Oaks", slug: "fair-oaks-notary" },
  { name: "Orangevale", slug: "orangevale-notary" },
  { name: "Natomas", slug: "natomas-notary" },
];

export const metadata: Metadata = {
  title: "Contact Gina Gonzalez Notary | Sacramento, CA",
  description:
    "Schedule a mobile notary appointment in Sacramento. Call (415) 948-9967 or book online. Same day service available. Bilingual English/Spanish.",
  alternates: {
    canonical: "https://www.ginagonzaleznotary.com/contact/",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-gray-50 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gray-600 font-sans font-semibold text-sm tracking-wider uppercase mb-3">
            Get in Touch
          </p>
          <h1 className="font-sans text-3xl sm:text-5xl font-bold text-brand-black mb-4">
            Contact Gina Gonzalez Notary
          </h1>
          <p className="text-brand-gray-600 text-lg max-w-2xl">
            Same day appointments available. Gina travels to your location anywhere in Sacramento, Placer, Yuba, and Yolo counties.
          </p>
        </div>
      </section>

      {/* Main two-column: sticky info LEFT + dominant form RIGHT */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

            {/* LEFT — sticky info sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-6">

                {/* Call */}
                <a
                  href="tel:+14159489967"
                  className="flex items-center gap-4 p-5 bg-brand-white shadow-md shadow-black/[0.04] hover:shadow-lg hover:shadow-black/[0.08] rounded-2xl transition-all group"
                >
                  <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-brand-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-brand-black group-hover:text-brand-gold-dark transition-colors">
                      (415) 948-9967
                    </div>
                    <div className="text-brand-gray-600 text-sm">Call or text anytime</div>
                  </div>
                </a>

                {/* Hours */}
                <div className="p-5 bg-brand-white shadow-md shadow-black/[0.04] rounded-2xl">
                  <h3 className="font-sans font-bold text-brand-black mb-3">Hours</h3>
                  <div className="space-y-2 text-brand-gray-600 text-sm">
                    <div className="flex justify-between">
                      <span>Monday – Friday</span>
                      <span className="font-medium text-brand-black">7:00 AM – 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday – Sunday</span>
                      <span className="font-medium text-brand-black">7:00 AM – 9:00 PM</span>
                    </div>
                  </div>
                  <p className="text-brand-gray-400 text-xs mt-2">
                    Same day and after-hours appointments available.
                  </p>
                </div>

                {/* Se Habla Español */}
                <div className="p-5 bg-brand-gold/5 rounded-2xl shadow-sm shadow-black/[0.04]">
                  <h3 className="font-sans font-bold text-brand-black mb-1">Se Habla Español</h3>
                  <p className="text-brand-gray-600 text-sm">
                    Gina habla español e inglés con fluidez. Llame para programar su cita hoy.
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT — dominant form */}
            <div className="lg:col-span-3">
              <div className="bg-brand-white shadow-lg shadow-black/[0.06] rounded-2xl p-6 sm:p-10">
                <h2 className="font-sans text-2xl font-bold text-brand-black mb-6">
                  Book Your Appointment
                </h2>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Areas — full width below */}
      <section className="py-10 sm:py-14 bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-sans font-bold text-brand-black text-lg">Service Areas</h2>
            <Link
              href="/service-areas/"
              className="text-sm font-semibold text-brand-gold-dark hover:text-brand-black transition-colors"
            >
              View all areas →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}/`}
                className="text-sm font-medium text-brand-gold-dark bg-brand-white shadow-sm shadow-black/[0.04] hover:shadow-md hover:bg-brand-gold/5 px-3.5 py-1.5 rounded-full transition-all"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
