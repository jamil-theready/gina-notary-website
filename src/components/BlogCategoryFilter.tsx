"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogFrontmatter } from "@/lib/content";

export const BLOG_CATEGORIES = [
  "All",
  "Real Estate",
  "Legal & Personal",
  "Business Documents",
  "Apostille Services",
  "Wedding Officiant",
] as const;

interface BlogCategoryFilterProps {
  posts: (BlogFrontmatter & { content: string })[];
}

export default function BlogCategoryFilter({ posts }: BlogCategoryFilterProps) {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? posts
    : posts.filter((p) => p.serviceType === active);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {BLOG_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
              active === cat
                ? "bg-brand-black text-white"
                : "bg-brand-gray-100 text-brand-gray-600 hover:bg-brand-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-brand-gray-600">No posts in this category yet. Check back soon.</p>
        </div>
      ) : (
        <>
          {/* Featured Post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}/`}
              className="group block bg-brand-white rounded-2xl overflow-hidden shadow-md shadow-black/[0.04] hover:shadow-lg hover:shadow-black/[0.08] transition-all mb-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {featured.image && (
                  <div className="aspect-video lg:aspect-auto lg:min-h-[320px] overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.imageAlt || featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    {featured.serviceType && (
                      <span className="text-xs font-semibold text-brand-gold-text bg-brand-gold/10 px-2.5 py-1 rounded-full">
                        {featured.serviceType}
                      </span>
                    )}
                    {featured.date && (
                      <span className="text-xs text-brand-gray-400">
                        {new Date(featured.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    )}
                  </div>
                  <h2 className="font-sans text-2xl font-bold text-brand-black mb-3 group-hover:text-brand-gold-text transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-brand-gray-600 text-sm mb-4">{featured.metaDescription}</p>
                  <span className="text-brand-gold-text font-semibold text-sm">Read more &rarr;</span>
                </div>
              </div>
            </Link>
          )}

          {/* Remaining Posts Grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group block bg-brand-white rounded-2xl overflow-hidden shadow-md shadow-black/[0.04] hover:shadow-lg hover:shadow-black/[0.08] transition-all"
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
                        <span className="text-xs font-semibold text-brand-gold-text bg-brand-gold/10 px-2.5 py-1 rounded-full">
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
                    <h2 className="font-sans text-lg font-bold text-brand-black mb-2 group-hover:text-brand-gold-text transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-brand-gray-600 text-sm line-clamp-3">{post.metaDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
