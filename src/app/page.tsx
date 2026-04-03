import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { Timeline } from "@/components/ui/timeline";
import { CredentialScrollCards } from "@/components/ui/scroll-cards";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import { faqSchema } from "@/lib/schema";

/* ───────────────────────── METADATA ───────────────────── */

export const metadata: Metadata = {
  title: "Sacramento Notary Public Services | Gina Gonzalez Notary",
  description:
    "Certified mobile notary public and bilingual wedding officiant serving Sacramento, CA. NNA certified, insured. Same day appointments. Call (415) 948-9967.",
  alternates: {
    canonical: "https://www.ginagonzaleznotary.com/",
  },
};

/* ───────────────────────── DATA ───────────────────────── */

const services = [
  {
    title: "Legal & Personal",
    description:
      "Our Sacramento notary public notarizes powers of attorney, prenuptial agreements, and other personal legal documents with precision and confidentiality.",
    icon: "document",
    href: "/notary-services/legal-personal/",
  },
  {
    title: "Court & Proceedings",
    description:
      "From affidavits to restraining orders, we provide fast, compliant notarization for court-related documents.",
    icon: "scale",
    href: "/notary-services/court-legal-proceedings/",
  },
  {
    title: "Real Estate & Loans",
    description:
      "Reliable Sacramento notary service for deeds, refinancing forms, and property transfers. Close with complete peace of mind.",
    icon: "home",
    href: "/notary-services/real-estate-notary-sacramento/",
  },
  {
    title: "Wedding Officiant",
    description:
      "As a certified wedding officiant, Gina creates warm, customized ceremonies tailored to your unique love story.",
    icon: "heart",
    href: "/notary-services/wedding-officiant-services-in-sacramento-ca/",
  },
  {
    title: "Misc. Docs",
    description:
      "Travel consent forms, lease notarization, DMV paperwork. We handle various document types with accuracy.",
    icon: "box",
    href: "/notary-services/business-misc-documents/",
  },
  {
    title: "Apostille",
    description:
      "Apostille processing for powers of attorney, marriage certificates, and vital records for international use.",
    icon: "globe",
    href: "/notary-services/apostille-services-in-sacramento-ca/",
  },
];

const serviceIcons: Record<string, React.ReactNode> = {
  document: (
    <svg className="w-6 h-6 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  scale: (
    <svg className="w-6 h-6 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  home: (
    <svg className="w-6 h-6 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  heart: (
    <svg className="w-6 h-6 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  box: (
    <svg className="w-6 h-6 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  globe: (
    <svg className="w-6 h-6 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const credentials = [
  {
    title: "NNA-Certified.",
    description:
      "Certified by the National Notary Association, ensuring up-to-date knowledge of Sacramento notary public laws and adherence to the highest professional standards nationwide.",
  },
  {
    title: "Real Estate Specialist.",
    description:
      "Experienced in handling complex real estate documents, closings, and loan signings with precision and thorough understanding of California property laws.",
  },
  {
    title: "English and Spanish.",
    description:
      "Fluent in both English and Spanish, providing clear communication and notary services in Sacramento, CA, with ease and accuracy.",
  },
  {
    title: "Sacramento Mobile.",
    description:
      "Fully mobile within Sacramento and nearby areas, bringing convenient, reliable notary services directly to your home, office, or preferred location anytime.",
  },
  {
    title: "Former Lawyer.",
    description:
      "Leverages legal background and expertise to ensure every notarization is accurate, compliant, and conducted with a deep understanding of legal implications.",
  },
];

const benefits = [
  {
    title: "Certified & Experienced",
    description:
      "With years of experience and NNA certification, Gina ensures every document is handled with precision and professionalism.",
  },
  {
    title: "Mobile Convenience",
    description:
      "Skip the hassle. Gina travels to your location in Sacramento, Placer, Yuba Counties, and surrounding areas.",
  },
  {
    title: "Bilingual Expertise",
    description:
      "Fluent in English and Spanish, Gina provides clear communication for all clients.",
  },
  {
    title: "Flexible & Reliable",
    description:
      "Available for last-minute signings and committed to meeting your deadlines with efficiency.",
  },
];

const metrics = [
  {
    value: "1K+",
    label: "Documents Notarized",
    description:
      "Our extensive experience handling thousands of legal documents ensures precision, attention to detail, and reliable service every single time.",
  },
  {
    value: "10+",
    label: "Years of Experience",
    description:
      "We bring deep knowledge of notary laws and real estate documents. Our experience means faster service, fewer errors, and complete legal compliance.",
  },
  {
    value: "100%",
    label: "Client Satisfaction Rate",
    description:
      "Our friendly, mobile notary services in Sacramento make it simple and stress-free, earning consistent praise from both individuals and businesses across West Sacramento.",
  },
];

const testimonials = [
  {
    name: "Jaime V.",
    quote:
      "Estoy satisfecho con el servicio brindado por la notaria publica, senora Gina Gonzalez.",
  },
  {
    name: "Cecy B.",
    quote:
      "Gina ofrece sus servicios de forma rapida y efectiva, con un nivel intachable de profesionalismo, mostro atencion a los detalles y me permitio confiar en el proceso y el resultado.",
  },
  {
    name: "Josue B.",
    quote:
      "When you decide to work with Gina she will help you not only with one thing but multiple things due to her experience. She can help you in different ways. Real state and more !!",
  },
  {
    name: "Veronica S.",
    quote:
      "Una persona muy bien preparada y profesional, que nos guio a mi esposo y a mi en nuestra ceremonia. Muy agradecida con ella.",
  },
  {
    name: "David L.",
    quote:
      "Gina nos trato bien, buena comunicacion, nos explico lo que no entendiamos con paciencia, la recomiendo.",
  },
  {
    name: "Antonio A.",
    quote:
      "Thanks Gina, your advice and service help me out a lot",
  },
  {
    name: "Enrique A.",
    quote:
      "Highly recommend Gina for wedding officiant. She married me this year and did a very well job. We needed Someone bilingual (Spanish) and she did amazing. Very professional, easy going and on time! 10/10",
  },
];

const faqs = [
  {
    question: "What is the difference between a notary acknowledgment and a jurat?",
    answer: "An acknowledgement verifies the signer\u2019s identity and confirms they signed willingly. A jurat requires the signer to swear or affirm the document\u2019s truthfulness before the notary in Sacramento, CA.",
  },
  {
    question: "Can you notarize out-of-state or international documents?",
    answer: "Yes, I can notarize documents intended for use out of state or internationally, but you may need to follow additional steps like obtaining an apostille for international use.",
  },
  {
    question: "Are remote online notarizations (RON) available?",
    answer: "California does not currently allow remote online notarizations, but I provide in-person mobile notary services for your convenience.",
  },
  {
    question: "What type of ID is acceptable for notarization?",
    answer: "Acceptable IDs include government-issued photo IDs such as a driver\u2019s license, passport, or state ID. Expired IDs may be acceptable if they meet specific state requirements.",
  },
  {
    question: "Do I need witnesses for my notarized document?",
    answer: "Some documents, such as wills or deeds, may require witnesses in addition to notarization. It\u2019s the signer\u2019s responsibility to provide witnesses, but I can guide you on the requirements.",
  },
  {
    question: "How much does mobile notary service cost in Sacramento?",
    answer: "California sets a maximum fee of $15 per signature per notarized document. Mobile notaries may charge an additional travel fee depending on distance. Call (415) 948-9967 for a quick quote.",
  },
  {
    question: "What documents are required for notary in Sacramento?",
    answer: "Common documents needing notarization include powers of attorney, affidavits, contracts, and real estate papers. I ensure every document is properly notarized under California notary laws for West Sacramento clients.",
  },
  {
    question: "Is your mobile notary service available on weekends in Sacramento?",
    answer: "Yes, I offer flexible scheduling including evenings and weekends in Sacramento, so your notarization needs can be met without disrupting your busy workweek or personal commitments.",
  },
  {
    question: "How quickly can you arrive for mobile notary services in Sacramento?",
    answer: "I strive for fast, reliable service and usually can reach West Sacramento clients within a few hours or on the same day, depending on scheduling and location.",
  },
];

/* ───────────────────── INLINE COMPONENTS ──────────────── */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex px-4 py-1.5 bg-brand-gray-50 rounded-full text-xs font-semibold uppercase tracking-wider text-brand-gray-400">
      {children}
    </span>
  );
}

function TestimonialMarquee() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-6"
        style={{
          animation: "marquee-scroll 40s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((t, i) => (
          <div
            key={i}
            className="w-[340px] shrink-0 bg-white rounded-2xl shadow-md shadow-black/[0.04] p-6 sm:p-8"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <svg
                  key={j}
                  className="w-4 h-4 text-brand-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-brand-gray-600 leading-relaxed mb-5 text-base">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="font-semibold text-brand-black text-sm">{t.name}</p>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ────────────────────── TIMELINE DATA ─────────────────── */

function HowItWorksTimeline() {
  const data = [
    {
      title: "Reach Out",
      content: (
        <div>
          <h4 className="text-sm font-medium text-brand-gray-400 uppercase tracking-wider mb-3">Step 01</h4>
          <p className="text-brand-gray-600 text-base leading-relaxed mb-6 max-w-md">
            Reach out to Gina via phone, email, or our website to schedule your appointment. She will confirm availability, answer any questions, and help you get started right away.
          </p>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/step-reach-out.jpg"
              alt="Schedule mobile notary appointment in Sacramento CA"
              width={600}
              height={256}
              className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Gather Documents",
      content: (
        <div>
          <h4 className="text-sm font-medium text-brand-gray-400 uppercase tracking-wider mb-3">Step 02</h4>
          <p className="text-brand-gray-600 text-base leading-relaxed mb-6 max-w-md">
            Gather all documents that require notarization and ensure they are complete and ready for signing. Bring a valid government-issued ID for each signer involved.
          </p>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/step-gather-docs.jpg"
              alt="Prepare documents and ID for Sacramento notary visit"
              width={600}
              height={256}
              className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Complete Notarization",
      content: (
        <div>
          <h4 className="text-sm font-medium text-brand-gray-400 uppercase tracking-wider mb-3">Step 03</h4>
          <p className="text-brand-gray-600 text-base leading-relaxed mb-6 max-w-md">
            Gina will meet you at your home, office, or any mutually convenient public location. We prioritize your comfort, ensuring privacy, punctuality, and total peace of mind.
          </p>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/images/step-complete.jpg"
              alt="Gina Gonzalez completing notarization at client location"
              width={600}
              height={256}
              className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}

/* ────────────────────── MAIN PAGE ─────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqs.map(f => ({ question: f.question, answer: f.answer })))),
        }}
      />

      {/* ─── 1. HERO ─── */}
      <section className="relative overflow-hidden bg-white">
        {/* Silk flow background */}
        <div className="absolute inset-0 animate-silk" />
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hero-particle w-2 h-2" style={{ left: "10%", animationDuration: "28s", animationDelay: "-5s" }} />
          <div className="hero-particle w-3 h-3" style={{ left: "25%", animationDuration: "32s", animationDelay: "-12s" }} />
          <div className="hero-particle w-2.5 h-2.5" style={{ left: "40%", animationDuration: "26s", animationDelay: "-18s" }} />
          <div className="hero-particle w-4 h-4" style={{ left: "55%", animationDuration: "35s", animationDelay: "-8s" }} />
          <div className="hero-particle w-2 h-2" style={{ left: "70%", animationDuration: "30s", animationDelay: "-22s" }} />
          <div className="hero-particle w-3 h-3" style={{ left: "85%", animationDuration: "27s", animationDelay: "-15s" }} />
          <div className="hero-particle w-2.5 h-2.5" style={{ left: "15%", animationDuration: "33s", animationDelay: "-25s" }} />
          <div className="hero-particle w-3 h-3" style={{ left: "60%", animationDuration: "29s", animationDelay: "-3s" }} />
          <div className="hero-particle w-2 h-2" style={{ left: "90%", animationDuration: "31s", animationDelay: "-20s" }} />
          <div className="hero-particle w-3.5 h-3.5" style={{ left: "35%", animationDuration: "34s", animationDelay: "-10s" }} />
        </div>
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gold/3 rounded-full blur-3xl animate-float-delayed" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-8 items-center">
            {/* Text */}
            <div>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold text-brand-black leading-[1.1] mb-6">
                Your Trusted{" "}
                <span className="text-brand-gold-dark whitespace-nowrap">Mobile Notary</span>
                <br />
                in Sacramento, CA
              </h1>
              <p className="text-brand-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                Your Mobile Notary public service is here to serve you in West
                Sacramento CA and empower you with essential tools to navigate
                legal processes confidently. Your paperwork, our priority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-black hover:bg-brand-gray-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
                >
                  Get Notarized
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/notary-services/"
                  className="inline-flex items-center justify-center gap-2 border border-brand-gray-200 hover:border-brand-gray-400 text-brand-black font-semibold px-7 py-3.5 rounded-xl transition-colors bg-white"
                >
                  Notary Services
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Photo + Badges */}
            <div className="relative flex justify-center lg:justify-end self-end mb-[-1px]">
              <div className="relative">
                {/* Gina photo */}
                <Image
                  src="/images/gina@2x.png"
                  alt="Gina Gonzalez mobile notary public Sacramento CA"
                  width={546}
                  height={728}
                  priority
                  className="relative w-[26rem] sm:w-[30rem] lg:w-[40rem] object-cover z-10"
                />

                {/* Mobile badge */}
                <div className="absolute top-12 -left-6 sm:-left-10 bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-2 z-20 animate-badge-orbit-1">
                  <span className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-brand-black">mobile</span>
                </div>

                {/* English & Spanish badge */}
                <div className="absolute top-1/2 -right-4 sm:-right-10 bg-white rounded-full px-4 py-2.5 shadow-md flex items-center gap-2.5 z-20 animate-badge-orbit-2">
                  <span className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-brand-black">English &amp; Spanish</span>
                </div>

                {/* Signature box */}
                <div className="absolute bottom-8 -left-6 sm:-left-12 bg-white/90 backdrop-blur-sm rounded-xl border-2 border-dashed border-brand-gold px-6 py-4 shadow-lg z-20 animate-badge-orbit-3">
                  <p className="text-xs text-brand-gray-400 mb-1.5">Signature</p>
                  <Image
                    src="/images/signature@2x.png"
                    alt="Gina Gonzalez certified notary public signature"
                    width={160}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOGO CAROUSEL ─── */}
      <section className="py-8 md:py-10 bg-brand-gray-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-brand-gray-600 font-medium text-base mb-6">
            Teaming up with the best companies in Sacramento
          </p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll gap-16 items-center">
            {[
              { src: "/images/companies/anniemac.jpg", alt: "AnnieMac Home Mortgage" },
              { src: "/images/companies/america-first.png", alt: "America First Credit Union" },
              { src: "/images/companies/waterstone.png", alt: "Waterstone Mortgage" },
              { src: "/images/companies/fairway.jpg", alt: "Fairway Independent Mortgage" },
              { src: "/images/companies/federal-savings.png", alt: "The Federal Savings Bank" },
              { src: "/images/companies/snapdocs.png", alt: "Snapdocs" },
              { src: "/images/companies/pmi.png", alt: "PMI" },
              { src: "/images/companies/preferred-rate.png", alt: "Preferred Rate" },
            ].concat([
              { src: "/images/companies/anniemac.jpg", alt: "AnnieMac Home Mortgage" },
              { src: "/images/companies/america-first.png", alt: "America First Credit Union" },
              { src: "/images/companies/waterstone.png", alt: "Waterstone Mortgage" },
              { src: "/images/companies/fairway.jpg", alt: "Fairway Independent Mortgage" },
              { src: "/images/companies/federal-savings.png", alt: "The Federal Savings Bank" },
              { src: "/images/companies/snapdocs.png", alt: "Snapdocs" },
              { src: "/images/companies/pmi.png", alt: "PMI" },
              { src: "/images/companies/preferred-rate.png", alt: "Preferred Rate" },
            ]).map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={40}
                className="h-8 md:h-10 w-auto max-w-[120px] md:max-w-[140px] object-contain shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2. SERVICES ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <Badge>SERVICES</Badge>
              <h2 className="font-sans text-3xl sm:text-5xl font-semibold text-brand-black mt-4 max-w-xl">
                Essential Sacramento{" "}
                <span className="text-brand-gold-dark">Notary Services</span>
              </h2>
            </div>
            <Link
              href="/notary-services/"
              className="inline-flex items-center gap-1 text-brand-black font-semibold hover:gap-2 transition-all shrink-0"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col bg-white rounded-2xl p-6 shadow-md shadow-black/[0.04] hover:shadow-lg hover:shadow-black/[0.08] transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-4">
                  {serviceIcons[s.icon]}
                </div>
                <h3 className="font-sans text-lg font-semibold text-brand-black mb-2 group-hover:text-brand-gold-dark transition-colors">
                  {s.title}
                </h3>
                <p className="text-brand-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-1 text-brand-black font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. HOW IT WORKS (Timeline) ─── */}
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: "linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%)" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(249,207,1,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Badge>HOW IT WORKS</Badge>
            <h2 className="font-sans text-3xl sm:text-5xl font-semibold text-brand-black mt-4 max-w-xl mx-auto">
              A proven process to{" "}
              <span className="text-brand-gold-dark">achieve your goals</span>
            </h2>
          </div>

          <HowItWorksTimeline />
        </div>
      </section>

      {/* ─── 4. CREDENTIALS (Stacking Scroll Cards) ─── */}
      <section className="relative" style={{ background: "linear-gradient(180deg, #ffffff 0%, #fdfaf0 40%, #faf5e4 100%)" }}>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
          <div className="sticky top-[60px] z-40 text-center pb-8 pt-6">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200vw]" style={{ top: "-60px", background: "linear-gradient(to bottom, #fdfaf0 0%, #fdfaf0 30%, rgba(253,250,240,0.95) 70%, transparent 100%)" }} />
            <div className="relative">
              <Badge>CREDENTIALS</Badge>
            </div>
            <h2 className="relative font-sans text-3xl sm:text-5xl font-semibold text-brand-black mt-4 max-w-xl mx-auto">
              Why Gina is{" "}
              <span className="text-brand-gold-dark">Qualified</span>
            </h2>
          </div>
          <CredentialScrollCards data={credentials} />
        </div>
        <div className="relative h-16 md:h-24" />
      </section>

      {/* ─── 5. BENEFITS / WHY CHOOSE GINA ─── */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Badge>BENEFITS</Badge>
              <h2 className="font-sans text-3xl sm:text-5xl font-semibold text-brand-black mt-4 mb-10 max-w-lg">
                Why choose Gina as your{" "}
                <span className="text-brand-gold-dark">Notary</span> in Sacramento?
              </h2>

              <div className="space-y-8">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center mt-0.5">
                      <svg className="w-6 h-6 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-sans text-lg font-semibold text-brand-black mb-1">
                        {b.title}
                      </h3>
                      <p className="text-brand-gray-600 text-base leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/phone-mockup.png"
                alt="Sacramento mobile notary service booking on smartphone"
                width={320}
                height={640}
                className="w-64 sm:w-72 lg:w-80 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. METRICS / RESULTS ─── */}
      <section className="py-16 md:py-24 bg-brand-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge>RESULTS</Badge>
          <h2 className="font-sans text-3xl sm:text-5xl font-semibold text-brand-black mt-4 mb-4 max-w-xl mx-auto">
            Trusted by Hundreds,{" "}
            <span className="text-brand-gold-dark">Proven by Results</span>
          </h2>
          <p className="text-brand-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed">
            These key metrics showcase Gina&apos;s dedication to accuracy, reliability,
            and exceptional Sacramento notary service.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 md:p-8 flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-0 text-center"
              >
                <div
                  className="font-sans text-5xl md:text-6xl font-bold shrink-0 md:mb-3"
                  style={{
                    background: "linear-gradient(180deg, #d4af00 0%, #b8960a 50%, #9a7d0a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {m.value}
                </div>
                <div>
                  <div className="text-brand-black font-semibold text-base md:text-lg md:mb-3">
                    {m.label}
                  </div>
                  <p className="text-brand-gray-600 text-sm leading-relaxed hidden md:block">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. TESTIMONIALS MARQUEE ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <Badge>TESTIMONIALS</Badge>
          <h2 className="font-sans text-3xl sm:text-5xl font-semibold text-brand-black mt-4 max-w-xl mx-auto">
            Trusted by Our{" "}
            <span className="text-brand-gold-dark">Community</span>
          </h2>
        </div>
        <TestimonialMarquee />
      </section>

      {/* ─── 8. CONTACT ─── */}
      <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
        {/* Curved gold gradient background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              bottom: "-60%",
              width: "180%",
              height: "100%",
              borderRadius: "50%",
              background: "radial-gradient(ellipse at 50% 30%, rgba(249,207,1,0.18) 0%, rgba(249,207,1,0.1) 30%, rgba(249,207,1,0.04) 60%, transparent 80%)",
            }}
          />
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              bottom: "-40%",
              width: "200%",
              height: "80%",
              borderRadius: "50%",
              background: "radial-gradient(ellipse at 50% 40%, rgba(249,207,1,0.08) 0%, rgba(249,207,1,0.03) 50%, transparent 80%)",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-full"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(253,248,230,0.3) 70%, rgba(253,248,230,0.5) 100%)",
            }}
          />
        </div>

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge>CONTACT</Badge>
            <h2 className="font-sans text-3xl sm:text-5xl font-semibold text-brand-black mt-4 max-w-xl mx-auto">
              Get your documents{" "}
              <span className="text-brand-gold-dark">notarized today</span>
            </h2>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-10" style={{ boxShadow: "0 25px 60px rgba(0,0,0,0.1), 0 10px 25px rgba(0,0,0,0.06), 0 4px 10px rgba(0,0,0,0.04)" }}>
            <ContactForm />

            <div className="mt-8 pt-6 border-t border-brand-gray-100 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a href="tel:+14159489967" className="flex items-center gap-2 text-sm text-brand-gray-600 hover:text-brand-gold-dark transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (415) 948-9967
              </a>
              <a href="mailto:gina.gonzalez.realtor@gmail.com" className="flex items-center gap-2 text-sm text-brand-gray-600 hover:text-brand-gold-dark transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                gina.gonzalez.realtor@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. FAQ ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge>FAQs</Badge>
            <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-brand-black mt-4 max-w-md mx-auto">
              Frequently Asked Questions
            </h2>
          </div>

          <FAQSection faqs={faqs} />

        </div>
      </section>

      {/* ─── 10. CTA ─── */}
      <CTASection />

    </>
  );
}
