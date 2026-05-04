export const dynamic = "force-static";

import { MetadataRoute } from "next";
import { getAllBlogPosts, getAllServices } from "@/lib/content";
import { serviceAreas } from "@/data/service-areas";

const BASE_URL = "https://ginagonzaleznotary.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllBlogPosts();
  const services = getAllServices();

  // Noindex pages (/thank-you/, /notary-resources/) are intentionally excluded.
  // next-sitemap has been removed; this is the sole sitemap source.
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/service-areas/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/notary-services/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Build a slug→post map for hreflang pairing
  const postBySlug = new Map(blogPosts.map((p) => [p.slug, p]));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const isSpanish = post.language === "es";
    const baseSlug = isSpanish ? post.slug.replace(/-es$/, "") : post.slug;
    const pairedSlug = isSpanish ? baseSlug : `${baseSlug}-es`;
    const pairedPost = postBySlug.get(pairedSlug);

    const alternates: { languages?: Record<string, string> } = {};
    if (pairedPost) {
      alternates.languages = {
        "en": `${BASE_URL}/blog/${isSpanish ? baseSlug : post.slug}/`,
        "es": `${BASE_URL}/blog/${isSpanish ? post.slug : pairedSlug}/`,
        "x-default": `${BASE_URL}/blog/${isSpanish ? baseSlug : post.slug}/`,
      };
    }

    return {
      url: `${BASE_URL}/blog/${post.slug}/`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      ...(alternates.languages ? { alternates } : {}),
    };
  });

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/notary-services/${service.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const serviceAreaPages: MetadataRoute.Sitemap = serviceAreas.map((area) => ({
    url: `${BASE_URL}/service-areas/${area.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...servicePages, ...serviceAreaPages];
}
