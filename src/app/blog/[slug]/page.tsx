import type { Metadata } from "next";
import Link from "next/link";
import {
  getAllBlogPosts,
  getBlogPostBySlug,
  markdownToHtml,
  extractHeadings,
} from "@/lib/content";
import { blogPostSchema, faqSchema } from "@/lib/schema";
import ShareButtons from "@/components/ShareButtons";
import FAQAccordion from "@/components/FAQAccordion";
import TableOfContents from "@/components/TableOfContents";
import CTASection from "@/components/CTASection";

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
      canonical: `https://www.ginagonzaleznotary.com/blog/${slug}/`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription,
      url: `https://www.ginagonzaleznotary.com/blog/${slug}/`,
      type: "article",
      images: post.image ? [{ url: post.image, alt: post.imageAlt }] : [],
    },
  };
}

function calcReadTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
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
          <Link href="/blog/" className="text-brand-gold-dark font-semibold">
            View all posts
          </Link>
        </div>
      </div>
    );
  }

  const contentHtml = await markdownToHtml(post.content);
  const headings = extractHeadings(post.content);
  const readTime = calcReadTime(post.content);
  const canonicalUrl = `https://www.ginagonzaleznotary.com/blog/${slug}/`;

  // Related: same category, exclude current, most recent
  const allPosts = getAllBlogPosts();
  const relatedPost = allPosts.find(
    (p) => p.slug !== slug && p.serviceType === post.serviceType
  ) || null;

  return (
    <>
      {/* BlogPosting schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogPostSchema(
              post.title,
              post.metaDescription,
              canonicalUrl,
              post.image || "",
              post.date
            )
          ),
        }}
      />
      {post.faq && post.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema(post.faq)),
          }}
        />
      )}

      {/* Hero */}
      <section className="bg-brand-gray-50 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-brand-gray-400 mb-6">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog/" className="hover:text-brand-gold transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-brand-gray-600 truncate">{post.title}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-4">
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
            <span className="text-brand-gray-400 text-sm">{readTime} min read</span>
            {post.author && (
              <span className="text-brand-gray-400 text-sm">by {post.author}</span>
            )}
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        {/*
          3-column layout (xl screens):
          [Share sidebar LEFT] [Article CENTER] [TOC RIGHT]

          lg screens: share sidebar + article (no right TOC)
          mobile: no sidebars, share bar inline

          IMPORTANT: parent flex must NOT use items-start. The default
          items-stretch makes the asides match the article height, giving
          the sticky children room to scroll within their containing block.
        */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6 lg:gap-10">

          {/* LEFT: sticky share sidebar */}
          <ShareButtons url={canonicalUrl} title={post.title} />

          {/* CENTER: Article */}
          <div className="flex-1 min-w-0">

            {/* Quick Answer */}
            {post.quickAnswer && (
              <div className="mb-6 p-5 rounded-2xl border-l-4 border-brand-gold bg-brand-gold/5">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-gold-dark mb-1">Quick Answer</p>
                <p className="text-brand-black font-medium leading-relaxed text-[15px]">{post.quickAnswer}</p>
              </div>
            )}

            {/* Key Takeaways */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div className="mb-6 p-6 rounded-2xl bg-brand-gray-50 shadow-sm shadow-black/[0.04]">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-gray-400 mb-3">Key Takeaways</p>
                <ol className="space-y-2">
                  {post.keyTakeaways.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-gold text-brand-black text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-brand-black text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Mobile TOC (only shown when no right column) */}
            {headings.length >= 2 && (
              <div className="xl:hidden mb-6 p-5 rounded-2xl bg-brand-gray-50 shadow-sm shadow-black/[0.04]">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-gray-400 mb-3">Jump to Section</p>
                <ol className="space-y-1.5">
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className="text-sm text-brand-gold-dark hover:text-brand-black hover:underline transition-colors"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* Article body */}
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* FAQ accordion */}
            {post.faq && post.faq.length > 0 && (
              <FAQAccordion faqs={post.faq} title={post.faqTitle || "Frequently Asked Questions"} />
            )}

            {/* spacer before global CTA (rendered outside the flex row) */}

            {/* Related post — shown inline on < xl (right sidebar handles xl) */}
            {relatedPost && (
              <div className="xl:hidden mt-10">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-gray-400 mb-3">Related Article</p>
                <Link
                  href={`/blog/${relatedPost.slug}/`}
                  className="group flex gap-4 items-center p-4 rounded-2xl bg-brand-white shadow-md shadow-black/[0.04] hover:shadow-lg hover:shadow-black/[0.08] transition-all"
                >
                  {relatedPost.image && (
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-brand-gray-50">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.imageAlt || relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    {relatedPost.serviceType && (
                      <span className="text-xs font-semibold text-brand-gold-dark">{relatedPost.serviceType}</span>
                    )}
                    <h4 className="font-sans font-bold text-brand-black text-sm mt-0.5 group-hover:text-brand-gold-dark transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h4>
                  </div>
                </Link>
              </div>
            )}

            {/* Back to blog */}
            <div className="mt-8">
              <Link
                href="/blog/"
                className="inline-flex items-center gap-2 text-brand-gold-dark font-semibold hover:gap-3 transition-all"
              >
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>

          {/* RIGHT: sticky TOC + related article (xl screens only) */}
          <TableOfContents headings={headings} relatedPost={relatedPost} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
