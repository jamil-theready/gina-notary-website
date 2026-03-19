"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/notary-services/", label: "Services" },
  { href: "/notary-resources/", label: "Resources" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-white/95 backdrop-blur-sm border-b border-brand-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/images/gina-gonzalez-notary.jpg"
              alt="Gina Gonzalez, Sacramento mobile notary public"
              className="w-8 h-8 rounded-full object-cover hidden sm:block"
            />
            <span className="text-brand-black font-sans font-bold text-lg tracking-tight">
              Notary Public
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-gray-600 hover:text-brand-black transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+14159489967"
              className="hidden sm:inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (415) 948-9967
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-brand-black p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-white border-t border-brand-gray-100">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-brand-gray-600 hover:text-brand-black hover:bg-brand-gray-50 rounded-lg transition-colors text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+14159489967"
              className="block mt-3 text-center bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-semibold py-3 rounded-xl transition-colors"
            >
              Call (415) 948-9967
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
