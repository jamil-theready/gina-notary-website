import Link from "next/link";

interface Heading {
  text: string;
  id: string;
}

interface RelatedPost {
  slug: string;
  title: string;
  image?: string;
  imageAlt?: string;
  serviceType?: string;
  date: string;
}

interface TableOfContentsProps {
  headings: Heading[];
  relatedPost?: RelatedPost | null;
}

export default function TableOfContents({ headings, relatedPost }: TableOfContentsProps) {
  const hasContent = headings.length >= 2 || relatedPost;
  if (!hasContent) return null;

  return (
    /*
      The aside is a plain shrink-0 block — NOT sticky itself.
      The inner div is sticky with a fixed top value (px, not %).
      The parent flex container must use items-stretch (default) so the
      aside stretches to the article column height — this gives the
      sticky child room to scroll within its containing block.
    */
    <aside className="hidden xl:block w-56 shrink-0">
      <div className="sticky top-28 space-y-8">

        {/* Jump to Section */}
        {headings.length >= 2 && (
          <div>
            <p className="text-[10px] font-bold tracking-widest text-brand-gray-400 uppercase mb-3">
              Jump to Section
            </p>
            <ol className="space-y-2">
              {headings.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className="text-[13px] text-brand-gray-600 hover:text-brand-gold-text hover:underline transition-colors leading-snug block"
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Related Article */}
        {relatedPost && (
          <div>
            <p className="text-[10px] font-bold tracking-widest text-brand-gray-400 uppercase mb-3">
              Related Article
            </p>
            <Link
              href={`/blog/${relatedPost.slug}/`}
              className="group block bg-brand-white rounded-2xl overflow-hidden shadow-md shadow-black/[0.04] hover:shadow-lg hover:shadow-black/[0.08] transition-all"
            >
              {relatedPost.image && (
                <div className="aspect-video overflow-hidden bg-brand-gray-50">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.imageAlt || relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-3">
                {relatedPost.serviceType && (
                  <span className="text-[10px] font-bold text-brand-gold-text uppercase tracking-wider">
                    {relatedPost.serviceType}
                  </span>
                )}
                <h4 className="font-sans font-bold text-brand-black text-[13px] leading-snug mt-0.5 group-hover:text-brand-gold-text transition-colors">
                  {relatedPost.title}
                </h4>
                <span className="text-[11px] text-brand-gray-400 mt-1 block">
                  {new Date(relatedPost.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </Link>
          </div>
        )}

      </div>
    </aside>
  );
}
