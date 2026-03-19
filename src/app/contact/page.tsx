import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { localBusinessSchema } from "@/lib/schema";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema()),
        }}
      />
      <section className="bg-brand-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold font-sans font-semibold text-sm tracking-wider uppercase mb-3">
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

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-sans text-xl font-bold text-brand-black mb-4">
                  Quick Contact
                </h2>
                <div className="space-y-4">
                  <a
                    href="tel:+14159489967"
                    className="flex items-center gap-4 p-4 bg-brand-gray-50 rounded-xl hover:bg-brand-gold/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-brand-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-black group-hover:text-brand-gold-dark transition-colors">
                        (415) 948-9967
                      </div>
                      <div className="text-brand-gray-600 text-sm">Call or text anytime</div>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-sans font-bold text-brand-black mb-3">Hours</h3>
                <div className="space-y-2 text-brand-gray-600 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-brand-black">7:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span className="font-medium text-brand-black">7:00 AM - 9:00 PM</span>
                  </div>
                </div>
                <p className="text-brand-gray-400 text-xs mt-2">
                  Same day and after-hours appointments available.
                </p>
              </div>

              <div>
                <h3 className="font-sans font-bold text-brand-black mb-3">Service Areas</h3>
                <p className="text-brand-gray-600 text-sm leading-relaxed">
                  Sacramento, West Sacramento, Elk Grove, Roseville, Folsom, Rancho Cordova, Citrus Heights, Davis, Woodland, Lincoln, Auburn, Carmichael, Fair Oaks, Orangevale, Natomas, and surrounding communities.
                </p>
              </div>

              <div className="bg-brand-gray-50 rounded-2xl p-6">
                <h3 className="font-sans font-bold text-brand-black mb-2">
                  Se Habla Espanol
                </h3>
                <p className="text-brand-gray-600 text-sm">
                  Gina habla espanol e ingles con fluidez. Llame para programar su cita hoy.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-brand-white border border-brand-gray-200 rounded-2xl p-6 sm:p-8">
                <h2 className="font-sans text-xl font-bold text-brand-black mb-6">
                  Book Your Appointment
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
