"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 bg-brand-gray-50 rounded-2xl">
        <svg className="w-16 h-16 text-brand-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-sans text-2xl font-bold text-brand-black mb-2">Message Sent</h3>
        <p className="text-brand-gray-600">
          Gina will get back to you shortly. For urgent requests, call{" "}
          <a href="tel:+14159489967" className="text-brand-gold-dark font-semibold">(415) 948-9967</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
        })
          .then(() => setSubmitted(true))
          .catch(() => alert("Something went wrong. Please call (415) 948-9967 instead."));
      }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-black mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-black"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand-black mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-black"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-black mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-black"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-brand-black mb-1.5">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-black bg-white"
          >
            <option value="">Select a service</option>
            <option value="Mobile Notary">Mobile Notary</option>
            <option value="Loan Signing">Loan Signing</option>
            <option value="Real Estate Documents">Real Estate Documents</option>
            <option value="Power of Attorney">Power of Attorney</option>
            <option value="Apostille">Apostille Services</option>
            <option value="Wedding Officiant">Wedding Officiant</option>
            <option value="Document Translation">Document Translation</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brand-black mb-1.5">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-3 border border-brand-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-brand-black resize-none"
            placeholder="Tell us about your notary needs, preferred date/time, and location."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-bold py-3.5 rounded-lg transition-colors text-lg"
        >
          Send Message
        </button>
        <p className="text-sm text-brand-gray-400 text-center">
          Or call directly:{" "}
          <a href="tel:+14159489967" className="text-brand-gold-dark font-medium">(415) 948-9967</a>
        </p>
      </div>
    </form>
  );
}
