export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  lat: number;
  lng: number;
  description: string;
  metaTitle: string;
  metaDescription: string;
  quickAnswer: string;
  keyFacts: string[];
  faqs: { question: string; answer: string }[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "sacramento-notary",
    name: "Sacramento",
    county: "Sacramento County",
    lat: 38.5816,
    lng: -121.4944,
    description:
      "Sacramento is the state capital and the heart of Gina's mobile notary service area. From Midtown to Natomas, Land Park to South Sacramento, Gina travels anywhere in the city for same-day notarization.",
    metaTitle: "Mobile Notary Sacramento CA | Gina Gonzalez Notary",
    metaDescription:
      "Mobile notary in Sacramento CA. Same-day appointments, bilingual service, home or office visits. Call Gina Gonzalez at (415) 948-9967.",
    quickAnswer:
      "Gina Gonzalez is a mobile notary serving all of Sacramento, CA. She travels to your home, office, hospital, or any location for same-day notarization of legal documents, loan signings, and more.",
    keyFacts: [
      "Same-day and after-hours appointments available across Sacramento",
      "Bilingual service in English and Spanish",
      "Available 7 days a week, 7 AM to 9 PM",
      "California notary fees are $15 per signature by state law",
      "Gina travels to homes, offices, hospitals, and care facilities",
    ],
    faqs: [
      {
        question: "How do I find a mobile notary in Sacramento?",
        answer:
          "Call or text Gina Gonzalez at (415) 948-9967. She is a certified mobile notary serving all of Sacramento and can come to your location the same day in most cases.",
      },
      {
        question: "What does a notary cost in Sacramento?",
        answer:
          "California caps notary fees at $15 per signature. Mobile notaries may charge an additional travel fee depending on your location. Gina keeps travel fees transparent and affordable.",
      },
      {
        question: "What documents can a Sacramento notary help with?",
        answer:
          "Power of attorney, real estate deeds, loan signings, affidavits, prenuptial agreements, apostille preparation, DMV documents, divorce papers, and more.",
      },
      {
        question: "Does Gina offer bilingual notary services in Sacramento?",
        answer:
          "Yes. Gina is fluent in both English and Spanish and serves Sacramento's large Spanish-speaking community throughout the city.",
      },
    ],
  },
  {
    slug: "elk-grove-notary",
    name: "Elk Grove",
    county: "Sacramento County",
    lat: 38.4088,
    lng: -121.3716,
    description:
      "Elk Grove is one of the fastest-growing cities in California. Gina provides mobile notary services throughout Elk Grove including Laguna, Stonelake, and surrounding neighborhoods.",
    metaTitle: "Mobile Notary Elk Grove CA | Gina Gonzalez Notary",
    metaDescription:
      "Mobile notary in Elk Grove CA. Same-day service, bilingual notary, home or office visits. Call Gina Gonzalez at (415) 948-9967 to schedule.",
    quickAnswer:
      "Gina Gonzalez is a certified mobile notary serving Elk Grove, CA. She provides same-day notary services at your home, office, or any convenient location throughout Elk Grove and surrounding areas.",
    keyFacts: [
      "Serving all Elk Grove neighborhoods including Laguna and Stonelake",
      "Same-day appointments available 7 days a week",
      "Bilingual service in English and Spanish",
      "Loan signings, power of attorney, real estate deeds, and more",
      "California state notary fee: $15 per signature",
    ],
    faqs: [
      {
        question: "Is there a mobile notary in Elk Grove CA?",
        answer:
          "Yes. Gina Gonzalez is a certified mobile notary serving Elk Grove. She comes to your home, office, or any location. Call (415) 948-9967 for same-day service.",
      },
      {
        question: "What notary services does Gina offer in Elk Grove?",
        answer:
          "Loan signings, real estate deeds, power of attorney, prenuptial agreements, apostille preparation, DMV documents, and all general notarization needs.",
      },
      {
        question: "How far in advance do I need to book a notary in Elk Grove?",
        answer:
          "Same-day appointments are often available. Call or text Gina at (415) 948-9967 and she will confirm availability for your preferred time.",
      },
    ],
  },
  {
    slug: "roseville-notary",
    name: "Roseville",
    county: "Placer County",
    lat: 38.7521,
    lng: -121.2880,
    description:
      "Roseville is a thriving community in Placer County. Gina provides mobile notary services across Roseville including Westpark, Diamond Oaks, and the Galleria area.",
    metaTitle: "Mobile Notary Roseville CA | Gina Gonzalez Notary",
    metaDescription:
      "Mobile notary in Roseville CA (Placer County). Same-day appointments, bilingual notary. Call Gina Gonzalez at (415) 948-9967.",
    quickAnswer:
      "Gina Gonzalez provides certified mobile notary services throughout Roseville, CA in Placer County. She travels to your home, office, or any location for same-day notarization.",
    keyFacts: [
      "Serving all of Roseville including Westpark, Diamond Oaks, and surrounding areas",
      "Placer County mobile notary with same-day availability",
      "Bilingual English and Spanish notary services",
      "Loan signings, real estate, legal documents, and more",
      "7 days a week, 7 AM to 9 PM",
    ],
    faqs: [
      {
        question: "Does Gina serve Roseville CA for notary services?",
        answer:
          "Yes. Gina covers Roseville and all of Placer County. Call (415) 948-9967 for same-day mobile notary service.",
      },
      {
        question: "What is the notary fee in Roseville CA?",
        answer:
          "California state law caps notary fees at $15 per signature. A mobile travel fee may apply depending on your location in Roseville.",
      },
      {
        question: "Can a notary come to my home in Roseville?",
        answer:
          "Yes. Gina is a mobile notary who comes to you. She serves homes, offices, hospitals, and care facilities throughout Roseville.",
      },
    ],
  },
  {
    slug: "folsom-notary",
    name: "Folsom",
    county: "Sacramento County",
    lat: 38.6780,
    lng: -121.1761,
    description:
      "Folsom is a vibrant city in Sacramento County known for its historic downtown and growing communities. Gina provides mobile notary services throughout Folsom.",
    metaTitle: "Mobile Notary Folsom CA | Gina Gonzalez Notary",
    metaDescription:
      "Mobile notary in Folsom CA. Same-day appointments, loan signings, bilingual service. Call Gina Gonzalez at (415) 948-9967.",
    quickAnswer:
      "Gina Gonzalez is a certified mobile notary serving Folsom, CA. She comes to your home, office, or any location in Folsom for same-day notary services.",
    keyFacts: [
      "Serving all of Folsom including Empire Ranch and Broadstone",
      "Same-day and weekend appointments available",
      "Loan signings, real estate documents, and personal legal documents",
      "Bilingual English and Spanish notary",
      "California notary fee: $15 per signature",
    ],
    faqs: [
      {
        question: "Is there a mobile notary that serves Folsom CA?",
        answer:
          "Yes. Gina Gonzalez is a certified mobile notary who serves Folsom and surrounding areas. Call (415) 948-9967 to book.",
      },
      {
        question: "Can a notary help with a loan signing in Folsom?",
        answer:
          "Yes. Gina is a certified loan signing agent who handles all types of real estate loan signings throughout Folsom.",
      },
      {
        question: "Do you offer weekend notary appointments in Folsom?",
        answer:
          "Yes. Gina is available 7 days a week including weekends from 7 AM to 9 PM for all notary services in Folsom.",
      },
    ],
  },
  {
    slug: "rancho-cordova-notary",
    name: "Rancho Cordova",
    county: "Sacramento County",
    lat: 38.5891,
    lng: -121.3025,
    description:
      "Rancho Cordova is a dynamic city in Sacramento County with a growing business community. Gina provides mobile notary services throughout Rancho Cordova.",
    metaTitle: "Mobile Notary Rancho Cordova CA | Gina Gonzalez Notary",
    metaDescription:
      "Mobile notary in Rancho Cordova CA. Same-day service, bilingual notary. Call Gina Gonzalez at (415) 948-9967.",
    quickAnswer:
      "Gina Gonzalez is a certified mobile notary serving Rancho Cordova, CA. She provides same-day notarization at your home, office, or any location.",
    keyFacts: [
      "Serving all of Rancho Cordova and surrounding business districts",
      "Same-day appointments available 7 days a week",
      "Bilingual English and Spanish notary services",
      "Loan signings, business documents, legal documents",
      "California notary fee: $15 per signature",
    ],
    faqs: [
      {
        question: "Can I get a notary in Rancho Cordova same day?",
        answer:
          "Yes. Gina offers same-day mobile notary service throughout Rancho Cordova. Call (415) 948-9967 to check availability.",
      },
      {
        question: "Does Gina notarize business documents in Rancho Cordova?",
        answer:
          "Yes. Gina handles business contracts, lease agreements, power of attorney, promissory notes, and all general business notarization needs.",
      },
    ],
  },
  {
    slug: "citrus-heights-notary",
    name: "Citrus Heights",
    county: "Sacramento County",
    lat: 38.7071,
    lng: -121.2810,
    description:
      "Citrus Heights is a suburban community in northeastern Sacramento County. Gina provides mobile notary services throughout Citrus Heights and surrounding areas.",
    metaTitle: "Mobile Notary Citrus Heights CA | Gina Gonzalez Notary",
    metaDescription:
      "Mobile notary in Citrus Heights CA. Same-day appointments, bilingual service. Call Gina Gonzalez Notary at (415) 948-9967.",
    quickAnswer:
      "Gina Gonzalez is a mobile notary serving Citrus Heights, CA. She travels to your location for same-day notarization of legal documents and more.",
    keyFacts: [
      "Serving all of Citrus Heights and Fair Oaks adjacent communities",
      "Same-day mobile notary available 7 days a week",
      "Bilingual English and Spanish",
      "Power of attorney, real estate, loan signings, and more",
      "California notary fee: $15 per signature",
    ],
    faqs: [
      {
        question: "Is there a mobile notary in Citrus Heights?",
        answer:
          "Yes. Gina Gonzalez provides mobile notary services throughout Citrus Heights. Call (415) 948-9967 for same-day service.",
      },
      {
        question: "What documents can be notarized in Citrus Heights?",
        answer:
          "Power of attorney, real estate deeds, loan signings, affidavits, DMV documents, prenuptial agreements, divorce papers, and more.",
      },
    ],
  },
  {
    slug: "davis-notary",
    name: "Davis",
    county: "Yolo County",
    lat: 38.5449,
    lng: -121.7405,
    description:
      "Davis is a university city in Yolo County known for UC Davis. Gina provides mobile notary services throughout Davis for students, faculty, and residents.",
    metaTitle: "Mobile Notary Davis CA | Gina Gonzalez Notary",
    metaDescription:
      "Mobile notary in Davis CA (Yolo County). Same-day appointments. Call Gina Gonzalez Notary at (415) 948-9967.",
    quickAnswer:
      "Gina Gonzalez provides mobile notary services in Davis, CA (Yolo County). She comes to your home, office, or campus for same-day notarization.",
    keyFacts: [
      "Serving Davis, UC Davis area, and surrounding Yolo County communities",
      "Same-day and scheduled appointments available",
      "Bilingual English and Spanish notary services",
      "Student documents, academic, legal, and real estate notarization",
      "California notary fee: $15 per signature",
    ],
    faqs: [
      {
        question: "Can I get a notary near UC Davis?",
        answer:
          "Yes. Gina serves the Davis and UC Davis area. She can come to campus, your home, or any convenient location. Call (415) 948-9967.",
      },
      {
        question: "Does Gina serve Yolo County for notary services?",
        answer:
          "Yes. Gina serves all of Yolo County including Davis, Woodland, and West Sacramento.",
      },
    ],
  },
  {
    slug: "woodland-notary",
    name: "Woodland",
    county: "Yolo County",
    lat: 38.6785,
    lng: -121.7733,
    description:
      "Woodland is the county seat of Yolo County. Gina provides mobile notary services throughout Woodland for residents and businesses.",
    metaTitle: "Mobile Notary Woodland CA | Gina Gonzalez Notary",
    metaDescription:
      "Mobile notary in Woodland CA (Yolo County). Same-day service, bilingual notary. Call Gina Gonzalez at (415) 948-9967.",
    quickAnswer:
      "Gina Gonzalez is a certified mobile notary serving Woodland, CA in Yolo County. She provides same-day notarization at your home or office.",
    keyFacts: [
      "Serving all of Woodland and Yolo County",
      "Same-day appointments available",
      "Bilingual English and Spanish",
      "Legal documents, real estate, power of attorney, and more",
      "California notary fee: $15 per signature",
    ],
    faqs: [
      {
        question: "Is there a mobile notary in Woodland CA?",
        answer:
          "Yes. Gina serves Woodland and all of Yolo County. Call (415) 948-9967 for same-day service.",
      },
    ],
  },
  {
    slug: "lincoln-notary",
    name: "Lincoln",
    county: "Placer County",
    lat: 38.8916,
    lng: -121.2930,
    description:
      "Lincoln is a growing city in Placer County. Gina provides mobile notary services throughout Lincoln and surrounding communities.",
    metaTitle: "Mobile Notary Lincoln CA | Gina Gonzalez Notary",
    metaDescription:
      "Mobile notary in Lincoln CA (Placer County). Same-day appointments. Call Gina Gonzalez Notary at (415) 948-9967.",
    quickAnswer:
      "Gina Gonzalez provides mobile notary services in Lincoln, CA. She travels to your location for same-day notarization throughout Lincoln and Placer County.",
    keyFacts: [
      "Serving Lincoln and surrounding Placer County areas",
      "Same-day appointments available",
      "Bilingual English and Spanish notary",
      "Legal documents, real estate, and personal notarization",
      "California notary fee: $15 per signature",
    ],
    faqs: [
      {
        question: "Does Gina serve Lincoln CA for notary services?",
        answer:
          "Yes. Gina covers Lincoln and Placer County. Call (415) 948-9967 for mobile notary service.",
      },
    ],
  },
  {
    slug: "auburn-notary",
    name: "Auburn",
    county: "Placer County",
    lat: 38.8966,
    lng: -121.0769,
    description:
      "Auburn is a historic Gold Rush city in Placer County. Gina provides mobile notary services throughout Auburn and the surrounding foothills.",
    metaTitle: "Mobile Notary Auburn CA | Gina Gonzalez Notary",
    metaDescription:
      "Mobile notary in Auburn CA (Placer County). Same-day service. Call Gina Gonzalez Notary at (415) 948-9967.",
    quickAnswer:
      "Gina Gonzalez is a certified mobile notary serving Auburn, CA in Placer County. She comes to your home or office for same-day notarization.",
    keyFacts: [
      "Serving Auburn and surrounding Placer County foothills",
      "Same-day and scheduled appointments",
      "Bilingual English and Spanish",
      "Legal documents, real estate, and personal notarization",
      "California notary fee: $15 per signature",
    ],
    faqs: [
      {
        question: "Is there a mobile notary in Auburn CA?",
        answer:
          "Yes. Gina serves Auburn and Placer County. Call (415) 948-9967 to schedule.",
      },
    ],
  },
  {
    slug: "carmichael-notary",
    name: "Carmichael",
    county: "Sacramento County",
    lat: 38.6299,
    lng: -121.3288,
    description:
      "Carmichael is an unincorporated community in Sacramento County. Gina provides mobile notary services throughout Carmichael for all types of documents.",
    metaTitle: "Mobile Notary Carmichael CA | Gina Gonzalez Notary",
    metaDescription:
      "Mobile notary in Carmichael CA. Same-day service, bilingual notary. Call Gina Gonzalez at (415) 948-9967.",
    quickAnswer:
      "Gina Gonzalez is a mobile notary serving Carmichael, CA. She provides same-day notarization at your home or office for all types of legal documents.",
    keyFacts: [
      "Serving Carmichael and surrounding Sacramento County communities",
      "Same-day appointments 7 days a week",
      "Bilingual English and Spanish",
      "All types of legal and personal documents notarized",
      "California notary fee: $15 per signature",
    ],
    faqs: [
      {
        question: "Can I get a same-day notary in Carmichael?",
        answer:
          "Yes. Gina offers same-day mobile notary service in Carmichael. Call (415) 948-9967 to schedule.",
      },
    ],
  },
  {
    slug: "fair-oaks-notary",
    name: "Fair Oaks",
    county: "Sacramento County",
    lat: 38.6513,
    lng: -121.2716,
    description:
      "Fair Oaks is a community in Sacramento County known for its village atmosphere. Gina provides mobile notary services throughout Fair Oaks.",
    metaTitle: "Mobile Notary Fair Oaks CA | Gina Gonzalez Notary",
    metaDescription:
      "Mobile notary in Fair Oaks CA. Same-day appointments. Call Gina Gonzalez Notary at (415) 948-9967.",
    quickAnswer:
      "Gina Gonzalez provides mobile notary services in Fair Oaks, CA. She comes to your home or office for same-day notarization of legal documents.",
    keyFacts: [
      "Serving Fair Oaks and nearby Sacramento County communities",
      "Same-day mobile notary available",
      "Bilingual English and Spanish",
      "Legal, personal, and real estate documents",
      "California notary fee: $15 per signature",
    ],
    faqs: [
      {
        question: "Is there a mobile notary in Fair Oaks CA?",
        answer:
          "Yes. Gina serves Fair Oaks and surrounding areas. Call (415) 948-9967 for same-day service.",
      },
    ],
  },
  {
    slug: "orangevale-notary",
    name: "Orangevale",
    county: "Sacramento County",
    lat: 38.6785,
    lng: -121.2260,
    description:
      "Orangevale is a community in eastern Sacramento County. Gina provides mobile notary services throughout Orangevale and nearby areas.",
    metaTitle: "Mobile Notary Orangevale CA | Gina Gonzalez Notary",
    metaDescription:
      "Mobile notary in Orangevale CA. Same-day service. Call Gina Gonzalez Notary at (415) 948-9967.",
    quickAnswer:
      "Gina Gonzalez is a mobile notary serving Orangevale, CA. She travels to your location for same-day notarization throughout Orangevale.",
    keyFacts: [
      "Serving Orangevale and eastern Sacramento County",
      "Same-day and weekend appointments",
      "Bilingual English and Spanish notary",
      "All notary document types covered",
      "California notary fee: $15 per signature",
    ],
    faqs: [
      {
        question: "Can I get a mobile notary in Orangevale CA?",
        answer:
          "Yes. Gina serves Orangevale and eastern Sacramento County. Call (415) 948-9967 to schedule.",
      },
    ],
  },
  {
    slug: "natomas-notary",
    name: "Natomas",
    county: "Sacramento County",
    lat: 38.6380,
    lng: -121.5191,
    description:
      "Natomas is a rapidly growing district in northern Sacramento. Gina provides mobile notary services throughout Natomas for all types of documents.",
    metaTitle: "Mobile Notary Natomas Sacramento CA | Gina Gonzalez Notary",
    metaDescription:
      "Mobile notary in Natomas Sacramento CA. Same-day service, bilingual notary. Call Gina Gonzalez at (415) 948-9967.",
    quickAnswer:
      "Gina Gonzalez is a certified mobile notary serving Natomas, Sacramento CA. She provides same-day notarization at your home, office, or any location in Natomas.",
    keyFacts: [
      "Serving North Natomas, South Natomas, and surrounding areas",
      "Same-day appointments available 7 days a week",
      "Bilingual English and Spanish notary services",
      "Loan signings, real estate, legal documents, and more",
      "California notary fee: $15 per signature",
    ],
    faqs: [
      {
        question: "Does Gina offer notary services in Natomas Sacramento?",
        answer:
          "Yes. Gina serves all of Natomas including North and South Natomas. Call (415) 948-9967 for same-day service.",
      },
    ],
  },
  {
    slug: "west-sacramento-notary",
    name: "West Sacramento",
    county: "Yolo County",
    lat: 38.5805,
    lng: -121.5319,
    description:
      "West Sacramento is a growing city in Yolo County across the river from downtown Sacramento. Gina provides mobile notary services throughout West Sacramento.",
    metaTitle: "Mobile Notary West Sacramento CA | Gina Gonzalez Notary",
    metaDescription:
      "Mobile notary in West Sacramento CA. Same-day service, bilingual notary. Call Gina Gonzalez at (415) 948-9967.",
    quickAnswer:
      "Gina Gonzalez is a mobile notary serving West Sacramento, CA. She provides same-day notarization for legal documents, real estate, and more.",
    keyFacts: [
      "Serving all of West Sacramento and Yolo County",
      "Same-day appointments available",
      "Bilingual English and Spanish",
      "Legal documents, real estate, and personal notarization",
      "California notary fee: $15 per signature",
    ],
    faqs: [
      {
        question: "Is there a mobile notary in West Sacramento?",
        answer:
          "Yes. Gina serves West Sacramento and Yolo County. Call (415) 948-9967 for same-day mobile notary service.",
      },
    ],
  },
];

export function getServiceAreaBySlug(slug: string): ServiceArea | null {
  return serviceAreas.find((a) => a.slug === slug) || null;
}
