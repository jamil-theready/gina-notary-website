"use client";

import Link from "next/link";
import { useState } from "react";

const serviceGroups = [
  {
    category: "Legal & Personal",
    links: [
      { name: "Power of Attorney", href: "/notary-services/legal-personal/" },
      { name: "Prenuptial Agreements", href: "/notary-services/legal-personal/" },
      { name: "Name Changes", href: "/notary-services/legal-personal/" },
      { name: "Spanish Notary", href: "/notary-services/spanish-notary-sacramento/" },
      { name: "Mobile Notary", href: "/notary-services/mobile-notary-sacramento/" },
    ],
  },
  {
    category: "Real Estate & Court",
    links: [
      { name: "Real Estate Notary", href: "/notary-services/real-estate-notary-sacramento/" },
      { name: "Loan Signing", href: "/notary-services/real-estate-notary-sacramento/" },
      { name: "Court Documents", href: "/notary-services/court-legal-proceedings/" },
      { name: "Restraining Orders", href: "/notary-services/court-legal-proceedings/" },
    ],
  },
  {
    category: "Specialty",
    links: [
      { name: "Wedding Officiant", href: "/notary-services/wedding-officiant-services-in-sacramento-ca/" },
      { name: "Apostille Services", href: "/notary-services/apostille-services-in-sacramento-ca/" },
      { name: "DMV Documents", href: "/notary-services/business-misc-documents/" },
      { name: "Translation Services", href: "/notary-services/certified-english-spanish-translation-services-in-sacramento-ca/" },
    ],
  },
];

const navLinks = [
  { href: "/about/", label: "About" },
  { href: "/service-areas/", label: "Areas" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Top Bar - Email & Phone centered */}
        <div className="hidden bg-brand-gray-50 md:block">
          <div className="mx-auto flex max-w-5xl items-center justify-center gap-6 px-4 sm:px-6 lg:px-8 py-1.5">
            <a
              href="mailto:gina.gonzalez.realtor@gmail.com"
              className="flex items-center gap-2 text-[14px] font-medium text-brand-gray-600 transition-colors hover:text-brand-gold-dark"
            >
              <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              gina.gonzalez.realtor@gmail.com
            </a>
            <a
              href="tel:+14159489967"
              className="flex items-center gap-2 text-[14px] font-medium text-brand-gray-600 transition-colors hover:text-brand-gold-dark"
            >
              <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (415) 948-9967
            </a>
          </div>
        </div>

        {/* Main Nav Bar */}
        <div className="bg-brand-white" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
          <div className="mx-auto flex max-w-5xl items-center px-4 sm:px-6 lg:px-8 py-3">
            {/* Logo - pill shape */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 bg-brand-gray-50 rounded-full pl-1.5 pr-4 py-1.5 transition-all hover:bg-brand-gray-100 hover:shadow-sm"
            >
              <img
                src="/images/gina-avatar.png"
                alt="Gina Gonzalez, Sacramento mobile notary public"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-brand-black font-sans font-semibold text-[15px] tracking-tight">
                Notary Public
              </span>
            </Link>

            {/* Desktop Nav - left aligned */}
            <nav className="hidden items-center gap-7 md:flex ml-8">
              <button
                className="text-[15px] font-medium text-brand-gray-600 transition-colors hover:text-brand-black"
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
              >
                Services
                <svg className={`ml-1 inline h-3 w-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium text-brand-gray-600 transition-colors hover:text-brand-black"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side: CTA (desktop) + Hamburger (mobile) - pushed to far right */}
            <div className="flex items-center ml-auto">
              <Link
                href="/contact/"
                className="hidden md:inline-flex items-center justify-center gap-2 bg-brand-black hover:bg-brand-gray-800 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-[14px]"
              >
                Get Notarized
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <button
                className="flex flex-col gap-1.5 md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block h-0.5 w-6 bg-brand-black transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`block h-0.5 w-6 bg-brand-black transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-brand-black transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              </button>
            </div>
          </div>

          {/* Services Mega Dropdown - Desktop */}
          {servicesOpen && (
            <div
              className="hidden border-t border-brand-gray-100 bg-brand-white md:block"
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div className="mx-auto grid max-w-5xl grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 py-8">
                {serviceGroups.map((group) => (
                  <div key={group.category}>
                    <h4 className="mb-3 text-[12px] font-bold tracking-widest text-brand-gold-dark/60 uppercase">
                      {group.category}
                    </h4>
                    <ul className="flex flex-col gap-1.5">
                      {group.links.map((s) => (
                        <li key={s.name}>
                          <Link
                            href={s.href}
                            className="text-[14px] text-brand-gray-600 transition-colors hover:text-brand-black"
                            onClick={() => setServicesOpen(false)}
                          >
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden border-t border-brand-gray-100 bg-brand-white transition-all duration-300 md:hidden ${
              mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-t-0"
            }`}
          >
            <nav className="flex flex-col items-center gap-1 px-6 py-4">
              <Link
                href="/notary-services/"
                className="w-full rounded-xl py-3 text-center text-[17px] font-medium text-brand-gray-600 transition-colors hover:bg-brand-gray-50 hover:text-brand-black"
                onClick={() => setMobileOpen(false)}
              >
                Services
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="w-full rounded-xl py-3 text-center text-[17px] font-medium text-brand-gray-600 transition-colors hover:bg-brand-gray-50 hover:text-brand-black"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+14159489967"
                className="mt-3 flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-gold px-6 py-3.5 text-[15px] font-semibold text-brand-black transition-colors hover:bg-brand-gold-dark"
              >
                <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (415) 948-9967
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {(mobileOpen || servicesOpen) && (
        <div
          className={`fixed inset-0 z-40 ${mobileOpen ? "bg-black/50 md:hidden" : "hidden bg-black/20 md:block"}`}
          onClick={() => { setMobileOpen(false); setServicesOpen(false); }}
        />
      )}
    </>
  );
}
