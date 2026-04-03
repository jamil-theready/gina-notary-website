"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.append("access_key", "5e8e1438-0329-46cf-8df5-31ef556220bf");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        router.push("/thank-you");
      } else {
        alert("Something went wrong. Please call (415) 948-9967 instead.");
        setSending(false);
      }
    } catch {
      alert("Something went wrong. Please call (415) 948-9967 instead.");
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Web3Forms config */}
      <input type="hidden" name="subject" value="Gina Notary - New Contact Form Submission" />
      <input type="hidden" name="from_name" value="Gina Gonzalez Notary Website" />
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

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
              className="w-full px-4 py-3 bg-brand-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold shadow-sm shadow-black/[0.04] text-brand-black"
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
              className="w-full px-4 py-3 bg-brand-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold shadow-sm shadow-black/[0.04] text-brand-black"
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
            className="w-full px-4 py-3 bg-brand-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold shadow-sm shadow-black/[0.04] text-brand-black"
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
            className="w-full px-4 py-3 bg-brand-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold shadow-sm shadow-black/[0.04] text-brand-black bg-white"
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
            className="w-full px-4 py-3 bg-brand-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold shadow-sm shadow-black/[0.04] text-brand-black resize-none"
            placeholder="Tell us about your notary needs, preferred date/time, and location."
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-bold py-3.5 rounded-xl transition-colors text-lg disabled:opacity-60"
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
        <p className="text-sm text-brand-gray-400 text-center">
          Or call directly:{" "}
          <a href="tel:+14159489967" className="text-brand-gold-dark font-medium">(415) 948-9967</a>
        </p>
      </div>
    </form>
  );
}
