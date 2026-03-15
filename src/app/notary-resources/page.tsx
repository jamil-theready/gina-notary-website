import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notary Resources & Blog",
  description:
    "Expert notary guides, tips, and resources from Gina Gonzalez Notary in Sacramento. Learn about notarization, legal documents, and more.",
  alternates: {
    canonical: "https://www.ginagonzaleznotary.com/notary-resources/",
  },
};

export default function ResourcesPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <section className="bg-brand-black py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold font-sans font-semibold text-sm tracking-wider uppercase mb-3">
            Blog & Resources
          </p>
          <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-brand-white mb-4">
            Notary Resources
          </h1>
          <p className="text-brand-gray-200 text-lg max-w-2xl">
            Guides, tips, and expert information about notary services in Sacramento.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="font-sans text-2xl font-bold text-brand-black mb-3">Coming Soon</h2>
              <p className="text-brand-gray-600 max-w-md mx-auto">
                We are working on helpful guides and resources. Check back soon or contact us with questions.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-bold px-6 py-3 rounded-xl transition-colors mt-6"
              >
                Contact Gina
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/notary-resources/${post.slug}/`}
                  className="group block bg-brand-white border border-brand-gray-200 rounded-2xl overflow-hidden hover:border-brand-gold hover:shadow-lg transition-all"
                >
                  {post.image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      {post.serviceType && (
                        <span className="text-xs font-semibold text-brand-gold-dark bg-brand-gold/10 px-2.5 py-1 rounded-full">
                          {post.serviceType}
                        </span>
                      )}
                      {post.date && (
                        <span className="text-xs text-brand-gray-400">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      )}
                    </div>
                    <h2 className="font-sans text-lg font-bold text-brand-black mb-2 group-hover:text-brand-gold-dark transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-brand-gray-600 text-sm line-clamp-3">
                      {post.metaDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
