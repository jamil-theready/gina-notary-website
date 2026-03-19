import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts, getBlogPostBySlug, markdownToHtml } from "@/lib/content";
import { blogPostSchema } from "@/lib/schema";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.ginagonzaleznotary.com/notary-resources/${slug}/`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription,
      url: `https://www.ginagonzaleznotary.com/notary-resources/${slug}/`,
      type: "article",
      images: post.image ? [{ url: post.image, alt: post.imageAlt }] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-sans text-4xl font-bold text-brand-black mb-4">Article Not Found</h1>
          <Link href="/notary-resources/" className="text-brand-gold-dark font-semibold">
            View all resources
          </Link>
        </div>
      </div>
    );
  }

  const contentHtml = await markdownToHtml(post.content);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostSchema(
              post.title,
              post.metaDescription,
              `https://www.ginagonzaleznotary.com/notary-resources/${slug}/`,
              post.image || "",
              post.date
            )
          ),
        }}
      />

      <section className="bg-brand-gray-50 py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-brand-gray-400 mb-6">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/notary-resources/" className="hover:text-brand-gold transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-brand-gray-600 truncate">{post.title}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            {post.serviceType && (
              <span className="text-xs font-semibold text-brand-black bg-brand-gold px-3 py-1 rounded-full">
                {post.serviceType}
              </span>
            )}
            {post.date && (
              <span className="text-brand-gray-400 text-sm">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            )}
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.image && (
            <img
              src={post.image}
              alt={post.imageAlt || post.title}
              className="w-full rounded-2xl mb-10 aspect-video object-cover"
            />
          )}
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* CTA */}
          <div className="mt-12 p-8 bg-brand-gray-50 rounded-2xl text-center">
            <h3 className="font-sans text-xl font-bold text-brand-black mb-2">
              Need a Notary in Sacramento?
            </h3>
            <p className="text-brand-gray-600 mb-4">
              Call or book online. Same day service available.
            </p>
            <a
              href="tel:+14159489967"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-dark text-brand-black font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Call (415) 948-9967
            </a>
          </div>

          {/* Back to resources */}
          <div className="mt-10">
            <Link
              href="/notary-resources/"
              className="inline-flex items-center gap-2 text-brand-gold-dark font-semibold hover:gap-3 transition-all"
            >
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              Back to Resources
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
