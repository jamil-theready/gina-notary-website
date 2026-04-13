import type { Metadata } from "next";
import Link from "next/link";
import { serviceAreas } from "@/data/service-areas";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Mobile Notary Service Areas | Sacramento Region | Gina Gonzalez",
  description:
    "Mobile notary serving Sacramento, Elk Grove, Roseville, Folsom, and 70+ ZIP codes. Same day service. Call (415) 948-9967.",
  alternates: {
    canonical: "https://ginagonzaleznotary.com/service-areas/",
  },
};

const counties = [
  {
    name: "Sacramento County",
    areas: serviceAreas.filter((a) => a.county === "Sacramento County"),
  },
  {
    name: "Placer County",
    areas: serviceAreas.filter((a) => a.county === "Placer County"),
  },
  {
    name: "Yolo County",
    areas: serviceAreas.filter((a) => a.county === "Yolo County"),
  },
];

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-brand-gray-50 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gray-600 font-sans font-semibold text-sm tracking-wider uppercase mb-3">
            Coverage
          </p>
          <h1 className="font-sans text-3xl sm:text-5xl font-bold text-brand-black mb-4">
            Mobile Notary Service Areas
          </h1>
          <p className="text-brand-gray-600 text-lg max-w-2xl">
            Gina travels to you — home, office, hospital, or anywhere in Sacramento, Placer, and Yolo counties. Same-day service available throughout the region.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {counties.map((county) => (
            <div key={county.name}>
              <h2 className="font-sans text-xl font-bold text-brand-black mb-6 pb-3 border-b border-brand-gray-100">
                {county.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {county.areas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/service-areas/${area.slug}/`}
                    className="group flex items-center justify-between p-5 bg-brand-white rounded-2xl shadow-md shadow-black/[0.04] hover:shadow-lg hover:shadow-black/[0.08] transition-all"
                  >
                    <div>
                      <h3 className="font-sans font-bold text-brand-black group-hover:text-brand-gold-text transition-colors">
                        {area.name}
                      </h3>
                      <p className="text-brand-gray-400 text-xs mt-0.5">Mobile notary available</p>
                    </div>
                    <svg
                      className="w-4 h-4 text-brand-gray-400 group-hover:text-brand-gold-text group-hover:translate-x-1 transition-all shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ZIP Code Coverage */}
      <section className="bg-brand-gray-50 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-xl font-bold text-brand-black mb-3">
            ZIP Codes We Serve
          </h2>
          <p className="text-brand-gray-600 text-sm mb-8 max-w-2xl">
            Gina Gonzalez Notary provides mobile notary service to all of the following ZIP codes in the Sacramento region. Same day appointments available.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {[
              "95608","95610","95611","95615","95621","95624","95626","95628",
              "95630","95632","95638","95648","95650","95655","95660","95661",
              "95662","95670","95671","95673","95677","95678","95682","95683",
              "95691","95693","95694","95695","95742","95746","95747","95757",
              "95758","95762","95765","95811","95812","95813","95814","95815",
              "95816","95817","95818","95819","95820","95821","95822","95823",
              "95824","95825","95826","95827","95828","95829","95830","95831",
              "95832","95833","95834","95835","95836","95837","95838","95841",
              "95842","95843","95864","96140","95602","95603","95604","95631",
            ].map((zip) => (
              <div
                key={zip}
                className="bg-brand-white rounded-lg px-3 py-2 text-center text-sm font-medium text-brand-gray-600 shadow-sm shadow-black/[0.04]"
              >
                {zip}
              </div>
            ))}
          </div>
          <p className="text-brand-gray-400 text-xs mt-6">
            Do not see your ZIP code? Call (415) 948-9967 — we likely serve your area too.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
