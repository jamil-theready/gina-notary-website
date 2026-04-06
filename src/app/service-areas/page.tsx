import type { Metadata } from "next";
import Link from "next/link";
import { serviceAreas } from "@/data/service-areas";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Mobile Notary Service Areas | Sacramento Region | Gina Gonzalez",
  description:
    "Gina Gonzalez is a mobile notary serving Sacramento, Elk Grove, Roseville, Folsom, Rancho Cordova, Davis, and all surrounding communities in Sacramento, Placer, and Yolo counties.",
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
                      <h3 className="font-sans font-bold text-brand-black group-hover:text-brand-gold-dark transition-colors">
                        {area.name}
                      </h3>
                      <p className="text-brand-gray-400 text-xs mt-0.5">Mobile notary available</p>
                    </div>
                    <svg
                      className="w-4 h-4 text-brand-gray-400 group-hover:text-brand-gold-dark group-hover:translate-x-1 transition-all shrink-0"
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

      <CTASection />
    </>
  );
}
