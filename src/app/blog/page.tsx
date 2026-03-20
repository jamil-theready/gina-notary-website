import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/content";
import { localBusinessSchema } from "@/lib/schema";
import BlogCategoryFilter from "@/components/BlogCategoryFilter";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Notary Resources & Blog",
  description:
    "Expert notary guides, tips, and resources from Gina Gonzalez Notary in Sacramento. Learn about notarization, legal documents, and more.",
  alternates: {
    canonical: "https://www.ginagonzaleznotary.com/blog/",
  },
};

export default function ResourcesPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema()),
        }}
      />
      <section className="bg-brand-gray-50 py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gray-600 font-sans font-semibold text-sm tracking-wider uppercase mb-3">
            Blog & Resources
          </p>
          <h1 className="font-sans text-3xl sm:text-5xl font-bold text-brand-black mb-4">
            Notary Resources
          </h1>
          <p className="text-brand-gray-600 text-lg max-w-2xl">
            Guides, tips, and expert information about notary services in Sacramento.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="font-sans text-2xl font-bold text-brand-black mb-3">Coming Soon</h2>
              <p className="text-brand-gray-600 max-w-md mx-auto">
                We are working on helpful guides and resources. Check back soon or contact us with questions.
              </p>
            </div>
          ) : (
            <BlogCategoryFilter posts={posts} />
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
