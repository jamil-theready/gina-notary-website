import Image from "next/image";
import Link from "next/link";

export default function AuthorBio() {
  return (
    <div className="mt-10 mb-2 p-6 sm:p-8 rounded-2xl bg-brand-gray-50 border border-brand-gray-100">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        {/* Photo */}
        <div className="shrink-0">
          <Image
            src="/images/gina-gonzalez-notary.jpg"
            alt="Gina Gonzalez, Certified Mobile Notary Public in Sacramento CA"
            width={96}
            height={96}
            className="w-24 h-24 rounded-full object-cover ring-3 ring-brand-gold/40"
          />
        </div>

        {/* Text */}
        <div className="text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-brand-gray-400 mb-1">
            About the Author
          </p>
          <h3 className="font-sans text-lg font-bold text-brand-black">
            Gina Gonzalez
          </h3>
          <p className="text-sm font-semibold text-brand-gold-dark mb-2">
            Certified Mobile Notary Public, Sacramento CA
          </p>
          <p className="text-sm text-brand-gray-600 leading-relaxed mb-3">
            NNA certified notary with over 10 years of experience and 6,000+
            documents notarized. Bilingual in English and Spanish, serving 14
            cities across Sacramento County.
          </p>
          <Link
            href="/about/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold-dark hover:text-brand-black transition-colors"
          >
            Learn more about Gina
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
