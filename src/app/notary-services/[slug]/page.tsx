import type { Metadata } from "next";
import { getAllServices, getServiceBySlug, markdownToHtml } from "@/lib/content";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export const dynamicParams = false;

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle ? { absolute: service.metaTitle } : service.title,
    description: service.metaDescription,
    alternates: {
      canonical: `https://www.ginagonzaleznotary.com/notary-services/${slug}/`,
    },
    openGraph: {
      title: service.metaTitle || service.title,
      description: service.metaDescription,
      url: `https://www.ginagonzaleznotary.com/notary-services/${slug}/`,
      images: service.image ? [{ url: service.image, alt: service.imageAlt }] : [],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-sans text-4xl font-bold text-brand-black mb-4">Service Not Found</h1>
          <Link href="/notary-services/" className="text-brand-gold-dark font-semibold">
            View all services
          </Link>
        </div>
      </div>
    );
  }

  const contentHtml = await markdownToHtml(service.content);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://www.ginagonzaleznotary.com/" },
              { name: "Services", url: "https://www.ginagonzaleznotary.com/notary-services/" },
              { name: service.shortTitle || service.title, url: `https://www.ginagonzaleznotary.com/notary-services/${slug}/` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              service.title,
              service.metaDescription,
              `https://www.ginagonzaleznotary.com/notary-services/${slug}/`
            )
          ),
        }}
      />
      {service.faqs && service.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(service.faqs)),
          }}
        />
      )}

      {/* Hero */}
      <section className="bg-brand-gray-50 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-brand-gray-400 mb-6">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/notary-services/" className="hover:text-brand-gold transition-colors">Services</Link>
            <span>/</span>
            <span className="text-brand-gray-600">{service.shortTitle || service.title}</span>
          </nav>
          <h1 className="font-sans text-3xl sm:text-5xl font-bold text-brand-black mb-4">
            {service.title}
          </h1>
          <p className="text-brand-gray-600 text-lg max-w-2xl">
            {service.metaDescription}
          </p>
          <a
            href="tel:+14159489967"
            className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-bold px-6 py-3 rounded-xl transition-colors mt-6"
          >
            Call (415) 948-9967
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Mid-article CTA */}
            <div className="my-12 p-8 bg-brand-gray-50 rounded-2xl text-center">
              <h3 className="font-sans text-xl font-bold text-brand-black mb-2">
                Ready to Get Started? Let&apos;s Make It Official.
              </h3>
              <p className="text-brand-gray-600 mb-4">
                Call or book online. Same day service available throughout Sacramento.
              </p>
              <a
                href="tel:+14159489967"
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-bold px-8 py-3 rounded-xl transition-colors"
              >
                Call (415) 948-9967
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="bg-brand-gray-50">
          <FAQ title={service.faqTitle || "Frequently Asked Questions"} faqs={service.faqs} />
        </section>
      )}

      <CTASection />
    </>
  );
}
