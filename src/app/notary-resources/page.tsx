import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/content";
import { localBusinessSchema } from "@/lib/schema";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema()),
        }}
      />
      <section className="bg-brand-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold font-sans font-semibold text-sm tracking-wider uppercase mb-3">
            Blog & Resources
          </p>
          <h1 className="font-sans text-3xl sm:text-5xl font-bold text-brand-black mb-4">
            Notary Resources
          </h1>
          <p className="text-brand-gray-600 text-lg max-w-2xl">
            Guides, tips, and expert information about notary services in Sacramento.
          </p>
          <a
            href="tel:+14159489967"
            className="inline-flex items-center gap-2 text-brand-gold font-semibold mt-4 hover:text-brand-gold-dark transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (415) 948-9967
          </a>
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
            <>
              {/* Featured Post */}
              <Link
                href={`/notary-resources/${posts[0].slug}/`}
                className="group block bg-brand-white border border-brand-gray-200 rounded-2xl overflow-hidden hover:border-brand-gold hover:shadow-lg transition-all mb-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {posts[0].image && (
                    <div className="aspect-video lg:aspect-auto lg:min-h-[320px] overflow-hidden">
                      <img
                        src={posts[0].image}
                        alt={posts[0].imageAlt || posts[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      {posts[0].serviceType && (
                        <span className="text-xs font-semibold text-brand-gold-dark bg-brand-gold/10 px-2.5 py-1 rounded-full">
                          {posts[0].serviceType}
                        </span>
                      )}
                      {posts[0].date && (
                        <span className="text-xs text-brand-gray-400">
                          {new Date(posts[0].date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      )}
                    </div>
                    <h2 className="font-sans text-2xl font-bold text-brand-black mb-3 group-hover:text-brand-gold-dark transition-colors">
                      {posts[0].title}
                    </h2>
                    <p className="text-brand-gray-600 text-sm mb-4">
                      {posts[0].metaDescription}
                    </p>
                    <span className="text-brand-gold-dark font-semibold text-sm">
                      Read more &rarr;
                    </span>
                  </div>
                </div>
              </Link>

              {/* Remaining Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.slice(1).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/notary-resources/${post.slug}/`}
                    className="group block bg-brand-white border border-brand-gray-200 rounded-2xl overflow-hidden hover:border-brand-gold hover:shadow-lg transition-all"
                  >
                    {post.image && (
                      <div className="aspect-video overflow-hidden bg-brand-gray-50">
                        <img
                          src={post.image}
                          alt={post.imageAlt || post.title}
                          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
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
            </>
          )}
        </div>
      </section>
    </>
  );
}
