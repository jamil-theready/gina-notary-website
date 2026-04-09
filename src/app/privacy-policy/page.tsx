import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Gina Gonzalez Notary. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold text-brand-black">
        Privacy Policy
      </h1>
      <p className="mb-6 text-sm text-gray-500">
        Effective Date: April 9, 2026
      </p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-brand-black">
            Information We Collect
          </h2>
          <p>
            Gina Gonzalez Notary (&quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) collects information you voluntarily provide when
            you contact us, schedule an appointment, or use our website at
            ginagonzaleznotary.com. This may include your name, email address,
            phone number, and details about the notary services you need.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-brand-black">
            How We Use Your Information
          </h2>
          <ul className="ml-6 list-disc space-y-2">
            <li>To respond to your inquiries and schedule appointments</li>
            <li>To provide mobile notary and related services</li>
            <li>To send appointment confirmations and reminders</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-brand-black">
            Information Sharing
          </h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information only when required by law, to
            protect our rights, or with service providers who assist in
            operating our website (such as hosting and analytics), subject to
            confidentiality agreements.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-brand-black">
            Cookies and Analytics
          </h2>
          <p>
            Our website may use cookies and third-party analytics services
            (such as Google Analytics) to understand how visitors use our site.
            These tools collect anonymous usage data including pages visited,
            time on site, and referring sources. You can control cookie
            preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-brand-black">
            Data Security
          </h2>
          <p>
            We implement reasonable security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-brand-black">
            Your Rights
          </h2>
          <p>
            Under California law, you have the right to request access to,
            correction of, or deletion of your personal information. To
            exercise these rights, contact us at (415) 948-9967 or
            gina.gonzalez.realtor@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-brand-black">
            Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of these external sites and
            encourage you to review their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-brand-black">
            Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. Changes will
            be posted on this page with an updated effective date.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-brand-black">
            Contact Us
          </h2>
          <p>
            If you have questions about this privacy policy, contact Gina
            Gonzalez Notary:
          </p>
          <ul className="mt-3 ml-6 list-disc space-y-1">
            <li>Phone: (415) 948-9967</li>
            <li>Email: gina.gonzalez.realtor@gmail.com</li>
            <li>Website: ginagonzaleznotary.com</li>
            <li>Location: Sacramento, CA</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
