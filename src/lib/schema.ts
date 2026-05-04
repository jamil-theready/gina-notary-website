export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Notary", "LocalBusiness"],
    "@id": "https://ginagonzaleznotary.com/#business",
    name: "Gina Gonzalez Notary",
    founder: {
      "@type": "Person",
      "@id": "https://ginagonzaleznotary.com/about/#gina",
      name: "Gina Gonzalez",
    },
    employee: {
      "@type": "Person",
      "@id": "https://ginagonzaleznotary.com/about/#gina",
      name: "Gina Gonzalez",
      jobTitle: "Owner, Certified Notary Public, Loan Signing Agent",
    },
    description:
      "Certified mobile notary public and wedding officiant serving Sacramento, CA. Bilingual English/Spanish. NNA certified, insured. 10+ years experience, 6,000+ documents notarized.",
    url: "https://ginagonzaleznotary.com",
    telephone: "+14159489967",
    image: "https://ginagonzaleznotary.com/images/gina-gonzalez-notary.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mobile Notary",
      addressLocality: "Sacramento",
      addressRegion: "CA",
      postalCode: "95814",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.5816,
      longitude: -121.4944,
    },
    areaServed: [
      "Sacramento",
      "West Sacramento",
      "Elk Grove",
      "Roseville",
      "Folsom",
      "Rancho Cordova",
      "Citrus Heights",
      "Davis",
      "Woodland",
      "Lincoln",
      "Auburn",
      "Carmichael",
      "Fair Oaks",
      "Orangevale",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "21:00",
      },
    ],
    priceRange: "$$",
    sameAs: [
      "https://www.instagram.com/ginagonzaleznotary/",
      "https://www.facebook.com/ginagonzaleznotary/",
      "https://www.tiktok.com/@ginagonzaleznotary",
      "https://www.yelp.com/biz/gina-gonzalez-notary-sacramento",
      "https://www.google.com/maps/place/Gina+Gonzalez+Notary",
    ],
    knowsAbout: [
      "Notary Public",
      "Mobile Notary Services",
      "Loan Signing Agent",
      "Wedding Officiant",
      "Apostille Services",
      "Power of Attorney",
      "Real Estate Document Notarization",
      "Spanish Translation Services",
      "California Notary Law",
    ],
    knowsLanguage: ["en", "es"],
    aggregateRating: aggregateRatingSchema(),
    review: reviewSchema(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Notary Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile Notary Services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wedding Officiant Services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Apostille Services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Document Translation",
          },
        },
      ],
    },
  };
}

export function serviceSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": ["Notary", "LocalBusiness"],
      name: "Gina Gonzalez Notary",
      telephone: "+14159489967",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sacramento",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "State",
      name: "California",
    },
    availableLanguage: ["English", "Spanish"],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function blogPostSchema(
  title: string,
  description: string,
  url: string,
  image: string,
  datePublished: string,
  dateModified?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: "Gina Gonzalez",
      jobTitle: "Certified Notary Public & Loan Signing Agent",
      description:
        "NNA Certified mobile notary public in Sacramento, CA with 10+ years experience and 6,000+ documents notarized. Bilingual English/Spanish. Former attorney.",
      url: "https://ginagonzaleznotary.com/about/",
      sameAs: [
        "https://www.instagram.com/ginagonzaleznotary/",
        "https://www.facebook.com/ginagonzaleznotary/",
        "https://www.google.com/maps/place/Gina+Gonzalez+Notary",
      ],
      knowsAbout: [
        "Notary Public",
        "Loan Signing",
        "Real Estate Closings",
        "Apostille Services",
        "California Notary Law",
      ],
      knowsLanguage: ["en", "es"],
    },
    publisher: {
      "@type": "Organization",
      name: "Gina Gonzalez Notary",
      url: "https://ginagonzaleznotary.com",
    },
  };
}

// Reviews are loaded from .seo/reviews.json if present (auto-synced from
// Google Places API by flow9). Falls back to curated set if file missing.
type ReviewsData = {
  aggregateRating: {
    ratingValue: string;
    ratingCount: string;
    reviewCount: string;
  };
  reviews: Array<{
    author: string;
    rating: string;
    reviewBody: string;
    datePublished?: string;
  }>;
};

function loadReviewsData(): ReviewsData {
  try {
    const fs = require("fs");
    const path = require("path");
    const reviewsPath = path.join(process.cwd(), ".seo", "reviews.json");
    if (fs.existsSync(reviewsPath)) {
      return JSON.parse(fs.readFileSync(reviewsPath, "utf8"));
    }
  } catch {
    // fall through to defaults
  }
  // Fallback — conservative defaults consistent with actual reviewBody count
  return {
    aggregateRating: {
      ratingValue: "5.0",
      ratingCount: "3",
      reviewCount: "3",
    },
    reviews: [
      {
        author: "Edgar A.",
        rating: "5",
        reviewBody: "Gina helped make this process very easy. We would've done it sooner if we knew how easy it would be.",
      },
      {
        author: "Marcela D.",
        rating: "5",
        reviewBody: "Gina is a wonderful Realtor, I am very happy with her expertise, I would definitely refer her to my family and friends.",
      },
      {
        author: "Ana B.",
        rating: "5",
        reviewBody: "Gina was my realtor, she sold my house and represented me in a very professional manner. She made it as smooth as possible.",
      },
    ],
  };
}

export function aggregateRatingSchema() {
  const { aggregateRating } = loadReviewsData();
  return {
    "@type": "AggregateRating",
    ratingValue: aggregateRating.ratingValue,
    bestRating: "5",
    worstRating: "1",
    ratingCount: aggregateRating.ratingCount,
    reviewCount: aggregateRating.reviewCount,
  };
}

export function reviewSchema() {
  const { reviews } = loadReviewsData();
  return reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: "5" },
    reviewBody: r.reviewBody,
    ...(r.datePublished ? { datePublished: r.datePublished } : {}),
  }));
}

export function howToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function serviceAreaSchema(area: {
  slug: string;
  name: string;
  metaDescription?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Mobile Notary in ${area.name}, CA`,
    description:
      area.metaDescription ||
      `Certified mobile notary public serving ${area.name}, CA. Bilingual English/Spanish. 10+ years experience.`,
    url: `https://ginagonzaleznotary.com/service-areas/${area.slug}/`,
    serviceType: "Notary Public",
    provider: {
      "@type": ["Notary", "LocalBusiness"],
      name: "Gina Gonzalez Notary",
      telephone: "+14159489967",
      url: "https://ginagonzaleznotary.com",
      image: "https://ginagonzaleznotary.com/images/gina-gonzalez-notary.jpg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sacramento",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Sacramento County, California",
      },
    },
  };
}
