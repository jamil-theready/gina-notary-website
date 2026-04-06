export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Notary", "LocalBusiness"],
    name: "Gina Gonzalez Notary",
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
    ],
    knowsLanguage: ["en", "es"],
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
      jobTitle: "Certified Notary Public",
    },
    publisher: {
      "@type": "Organization",
      name: "Gina Gonzalez Notary",
      url: "https://ginagonzaleznotary.com",
    },
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
