"use client";

import { useState } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

/* ───────────────────────── DATA ───────────────────────── */

const services = [
  {
    title: "Legal & Personal",
    description:
      "Our Sacramento notary public notarizes powers of attorney, prenuptial agreements, and other personal legal documents with precision and confidentiality, ensuring your sensitive paperwork is legally sound and properly executed every time.",
    image: "/images/service-legal.png",
    href: "/notary-services/legal-personal/",
  },
  {
    title: "Court & Proceedings",
    description:
      "From affidavits to restraining orders, we provide fast, compliant notarization for court-related documents. We help ensure your paperwork meets legal standards and is accepted without delay or complication.",
    image: "/images/service-court.png",
    href: "/notary-services/court-legal-proceedings/",
  },
  {
    title: "Real Estate & Loans",
    description:
      "We offer reliable, professional Sacramento notary service for deeds, refinancing forms, and property transfers. Whether you're buying, selling, or borrowing, our Sacramento notary public helps you close with complete peace of mind.",
    image: "/images/service-realestate.png",
    href: "/notary-services/real-estate-notary-sacramento/",
  },
  {
    title: "Wedding Officiant",
    description:
      "As a certified wedding officiant, Gina creates warm, customized ceremonies tailored to your unique love story. We handle the legal filing so you can focus on your big day.",
    image: "/images/service-wedding.png",
    href: "/notary-services/wedding-officiant-services-in-sacramento-ca/",
  },
  {
    title: "Misc. Docs",
    description:
      "Need a travel consent form, lease notarization, or DMV paperwork signed? We handle various document types with accuracy and convenience to save you time and stress.",
    image: "/images/service-misc.png",
    href: "/notary-services/business-misc-documents/",
  },
  {
    title: "Apostille",
    description:
      "We assist with apostille processing for notarized powers of attorney, marriage certificates, and other vital records, ensuring your documents meet international standards for use abroad with no legal hiccups.",
    image: "/images/service-misc.png",
    href: "/notary-services/apostille-services-in-sacramento-ca/",
  },
];

const steps = [
  {
    num: "01",
    title: "Reach Out",
    description:
      "Reach out to Gina via phone, email, or our website to schedule your appointment. She\u2019ll confirm availability, answer any questions, and help you get started right away.",
    image: "/images/step-reach-out.jpg",
  },
  {
    num: "02",
    title: "Gather Documents",
    description:
      "Gather all documents that require notarization and ensure they are complete and ready for signing. Don\u2019t forget to bring a valid government-issued ID for each signer involved.",
    image: "/images/step-gather-docs.jpg",
  },
  {
    num: "03",
    title: "Complete Notarization",
    description:
      "Gina will meet you at your home, office, or any mutually convenient public location. We prioritize your comfort, ensuring privacy, punctuality, and total peace of mind.",
    image: "/images/step-complete.jpg",
  },
];

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
    question:
      "What is the difference between a notary acknowledgment and a jurat?",
    answer:
      "An acknowledgement verifies the signer\u2019s identity and confirms they signed willingly. A jurat requires the signer to swear or affirm the document\u2019s truthfulness before the notary in Sacramento, CA.",
  },
  {
    question:
      "Can you notarize out-of-state or international documents?",
    answer:
      "Yes, I can notarize documents intended for use out of state or internationally, but you may need to follow additional steps like obtaining an apostille for international use.",
  },
  {
    question:
      "Are remote online notarizations (RON) available?",
    answer:
      "California does not currently allow remote online notarizations, but I provide in-person mobile notary services for your convenience.",
  },
  {
    question:
      "What type of ID is acceptable for notarization?",
    answer:
      "Acceptable IDs include government-issued photo IDs such as a driver\u2019s license, passport, or state ID. Expired IDs may be acceptable if they meet specific state requirements.",
  },
  {
    question:
      "Do I need witnesses for my notarized document?",
    answer:
      "Some documents, such as wills or deeds, may require witnesses in addition to notarization. It\u2019s the signer\u2019s responsibility to provide witnesses, but I can guide you on the requirements.",
  },
  {
    question:
      "How much does mobile notary service cost in Sacramento?",
    answer:
      "California sets a maximum fee of $15 per signature per notarized document. Mobile notaries may charge an additional travel fee depending on distance. Call (415) 948-9967 for a quick quote.",
  },
  {
    question:
      "What documents are required for notary in Sacramento?",
    answer:
      "Common documents needing notarization include powers of attorney, affidavits, contracts, and real estate papers. I ensure every document is properly notarized under California notary laws for West Sacramento clients.",
  },
  {
    question:
      "Is your mobile notary service available on weekends in Sacramento?",
    answer:
      "Yes, I offer flexible scheduling including evenings and weekends in Sacramento, so your notarization needs can be met without disrupting your busy workweek or personal commitments.",
  },
  {
    question:
      "How quickly can you arrive for mobile notary services in Sacramento?",
    answer:
      "I strive for fast, reliable service and usually can reach West Sacramento clients within a few hours or on the same day, depending on scheduling and location.",
  },
];

/* ───────────────────── INLINE COMPONENTS ──────────────── */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex px-4 py-1.5 bg-[#f5f5f5] rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-500">
      {children}
    </span>
  );
}

function CredentialsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-neutral-200">
      {credentials.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-6 sm:py-8 text-left group"
          >
            <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a0a0a] pr-4">
              {item.title}
            </h3>
            <span className="shrink-0 w-10 h-10 rounded-full border-2 border-neutral-300 flex items-center justify-center text-neutral-400 group-hover:border-[#f9cf01] group-hover:text-[#0a0a0a] transition-colors">
              {openIndex === i ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              )}
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: openIndex === i ? "200px" : "0px",
              opacity: openIndex === i ? 1 : 0,
            }}
          >
            <p className="pb-6 sm:pb-8 text-neutral-600 leading-relaxed max-w-3xl text-base sm:text-lg">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
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
            className="w-[340px] shrink-0 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <svg
                  key={j}
                  className="w-4 h-4 text-[#f9cf01]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-neutral-700 leading-relaxed mb-5 text-base">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="font-semibold text-[#0a0a0a] text-sm">{t.name}</p>
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

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-neutral-200 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#f5f5f5] transition-colors"
          >
            <span className="font-sans font-semibold text-[#0a0a0a] pr-4">
              {faq.question}
            </span>
            <svg
              className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: openIndex === i ? "300px" : "0px",
              opacity: openIndex === i ? 1 : 0,
            }}
          >
            <div className="px-6 pb-5 text-neutral-600 text-base leading-relaxed">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ────────────────────── MAIN PAGE ─────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ─── 1. HERO ─── */}
      <section className="relative bg-[#f5f5f5] overflow-hidden">
        {/* subtle bg pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "url(/images/hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text */}
            <div>
              <h1 className="font-sans text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#0a0a0a] leading-[1.1] mb-6">
                Your Trusted{" "}
                <span className="text-[#f9cf01]">Mobile Notary</span>
                <br />
                in Sacramento, CA
              </h1>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8 max-w-lg">
                Your Mobile Notary public service is here to serve you in West
                Sacramento CA and empower you with essential tools to navigate
                legal processes confidently. Your paperwork, our priority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a0a0a] hover:bg-neutral-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
                >
                  Get Notarized
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/notary-services/"
                  className="inline-flex items-center justify-center gap-2 border border-neutral-300 hover:border-neutral-400 text-[#0a0a0a] font-semibold px-7 py-3.5 rounded-xl transition-colors bg-white"
                >
                  Notary Services
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <p className="text-neutral-500 text-base mt-4">
                Or call now:{" "}
                <a href="tel:+14159489967" className="text-[#0a0a0a] font-semibold hover:text-[#d4a800] transition-colors">(415) 948-9967</a>
              </p>
            </div>

            {/* Photo + Badges */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/images/gina-hero-full.png"
                  alt="Gina Gonzalez mobile notary public Sacramento CA"
                  className="w-72 sm:w-80 lg:w-[26rem] object-contain relative z-10"
                />

                {/* Mobile badge */}
                <div className="absolute top-12 -left-6 sm:-left-10 bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-2 z-20">
                  <span className="w-8 h-8 bg-[#f9cf01]/10 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#d4a800]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-[#0a0a0a]">mobile</span>
                </div>

                {/* English & Spanish badge */}
                <div className="absolute top-1/2 -right-4 sm:-right-10 bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-2 z-20">
                  <span className="w-8 h-8 bg-[#f9cf01] rounded-full flex items-center justify-center text-xs font-bold text-[#0a0a0a]">
                    xA
                  </span>
                  <span className="text-sm font-medium text-[#0a0a0a]">English &amp; Spanish</span>
                </div>

                {/* Signature box */}
                <div className="absolute -bottom-4 -left-4 sm:-left-10 bg-white rounded-xl border-2 border-dashed border-[#f9cf01] px-6 py-4 shadow-md z-20">
                  <p className="text-xs text-neutral-400 mb-1">Signature</p>
                  <p className="text-2xl text-[#0a0a0a]" style={{ fontFamily: "cursive" }}>
                    Gina
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. SERVICES ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <Badge>SERVICES</Badge>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#0a0a0a] mt-4">
                Essential Sacramento Notary Services
              </h2>
            </div>
            <Link
              href="/notary-services/"
              className="inline-flex items-center gap-1 text-[#0a0a0a] font-semibold hover:gap-2 transition-all shrink-0"
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
                className="group block bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-sans text-lg font-bold text-[#0a0a0a] mb-2 group-hover:text-[#d4a800] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-neutral-600 text-base leading-relaxed mb-4">
                    {s.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#0a0a0a] font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. HOW IT WORKS ─── */}
      <section className="py-16 md:py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge>HOW IT WORKS</Badge>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#0a0a0a] mt-4 mb-6">
              A proven process to achieve your biggest goals
            </h2>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0a0a0a] hover:bg-neutral-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              Get Notarized
            </Link>
          </div>

          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-12">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {/* Timeline connector (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] right-[-2rem] h-px border-t-2 border-dashed border-neutral-300 z-0" />
                )}

                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  {/* Step number */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full bg-[#f9cf01] flex items-center justify-center font-sans text-sm font-bold text-[#0a0a0a]">
                      {step.num}
                    </span>
                    <span className="font-sans text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Step {step.num}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-200 mb-6">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="font-sans text-xl font-bold text-[#0a0a0a] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 text-base leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. CREDENTIALS ACCORDION ─── */}
      <section className="py-16 md:py-24" style={{ background: "linear-gradient(to bottom, #ffffff, #f9f7f2)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <CredentialsAccordion />
        </div>
      </section>

      {/* ─── 5. BENEFITS / WHY CHOOSE GINA ─── */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "url(/images/benefits-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: benefits */}
            <div>
              <Badge>BENEFITS</Badge>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#0a0a0a] mt-4 mb-10">
                Why choose Gina as your Notary in Sacramento?
              </h2>

              <div className="space-y-8">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-[#f9cf01]/20 flex items-center justify-center mt-0.5">
                      <svg className="w-5 h-5 text-[#d4a800]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-sans text-lg font-bold text-[#0a0a0a] mb-1">
                        {b.title}
                      </h3>
                      <p className="text-neutral-600 text-base leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: phone mockup */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/phone-mockup.png"
                alt="Gina Gonzalez Notary mobile experience"
                className="w-64 sm:w-72 lg:w-80 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. METRICS / RESULTS ─── */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Dark background with image overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/metrics-bg.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge>RESULTS</Badge>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
            Trusted by Hundreds, Proven by Results
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto mb-14 leading-relaxed">
            These key metrics showcase Gina&apos;s dedication to accuracy, reliability,
            and exceptional Sacramento notary service, trusted by clients across
            Sacramento and beyond.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="font-sans text-5xl sm:text-6xl font-bold text-[#f9cf01] mb-2">
                  {m.value}
                </div>
                <div className="text-white font-semibold text-lg mb-3">
                  {m.label}
                </div>
                <p className="text-neutral-400 text-base leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. TESTIMONIALS MARQUEE ─── */}
      <section className="py-16 md:py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <Badge>TESTIMONIALS</Badge>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#0a0a0a] mt-4">
            Trusted by Our Community
          </h2>
        </div>
        <TestimonialMarquee />
      </section>

      {/* ─── 8. CONTACT ─── */}
      <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "url(/images/contact-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge>CONTACT</Badge>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#0a0a0a] mt-4 max-w-2xl mx-auto">
              Get your documents notarized today by Sacramento Notary Public
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div className="bg-white/70 backdrop-blur-md border border-neutral-200 rounded-2xl p-6 sm:p-8">
              <ContactForm />
            </div>

            {/* Contact info card */}
            <div className="bg-[#0a0a0a] rounded-2xl p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="font-sans text-2xl font-bold mb-6">
                  Contact Gina
                </h3>

                <div className="space-y-5">
                  {/* Phone */}
                  <a
                    href="tel:+14159489967"
                    className="flex items-center gap-4 group"
                  >
                    <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#f9cf01]/20 transition-colors">
                      <svg className="w-5 h-5 text-[#f9cf01]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <span className="text-neutral-300 group-hover:text-white transition-colors">
                      (415) 948-9967
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:gina.gonzalez.realtor@gmail.com"
                    className="flex items-center gap-4 group"
                  >
                    <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#f9cf01]/20 transition-colors">
                      <svg className="w-5 h-5 text-[#f9cf01]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <span className="text-neutral-300 group-hover:text-white transition-colors text-sm sm:text-base break-all">
                      gina.gonzalez.realtor@gmail.com
                    </span>
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-neutral-400 text-sm mb-4">Follow Gina</p>
                <div className="flex gap-3">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/ginagonzaleznotary/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f9cf01]/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/ginagonzaleznotary/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f9cf01]/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@ginagonzaleznotary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f9cf01]/20 transition-colors"
                    aria-label="TikTok"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.1a8.16 8.16 0 005.58 2.18v-3.45a4.85 4.85 0 01-3.77-1.84 4.84 4.84 0 01-1.06-2.78h3.45V6.69h1.38z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. FAQ ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge>FAQs</Badge>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold text-[#0a0a0a] mt-4">
              FAQs
            </h2>
          </div>

          <FAQSection />

          {/* Still got questions */}
          <div className="text-center mt-12 p-8 bg-[#f5f5f5] rounded-2xl">
            <h3 className="font-sans text-xl font-bold text-[#0a0a0a] mb-2">
              Still got questions?
            </h3>
            <p className="text-neutral-600 text-sm mb-5">
              If you don&apos;t find an answer to your question here, please
              don&apos;t hesitate to contact us directly.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 bg-[#0a0a0a] hover:bg-neutral-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 10. CTA ─── */}
      <section
        className="py-16 md:py-24"
        style={{
          background:
            "radial-gradient(ellipse at bottom center, rgba(249,207,1,0.25) 0%, transparent 60%), #f5f5f5",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#0a0a0a] rounded-3xl overflow-hidden">
            {/* Subtle gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(249,207,1,0.08) 0%, transparent 50%)",
              }}
            />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-end p-8 sm:p-12 lg:p-16">
              {/* Text */}
              <div className="pb-4 lg:pb-8">
                <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                  Ready to Get Started?
                  <br />
                  Let&apos;s Make It Official!
                </h2>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#f9cf01] hover:bg-[#e0ba00] text-[#0a0a0a] font-semibold px-7 py-3.5 rounded-xl transition-colors"
                >
                  Get Notarized
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                {/* Decorative script */}
                <p
                  className="text-[#f9cf01]/30 text-5xl sm:text-6xl mt-6"
                  style={{ fontFamily: "cursive" }}
                  aria-hidden="true"
                >
                  Gina
                </p>
              </div>

              {/* Gina photo */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/images/gina-cta.png"
                  alt="Gina Gonzalez Sacramento Notary Public"
                  className="w-56 sm:w-64 lg:w-72 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
