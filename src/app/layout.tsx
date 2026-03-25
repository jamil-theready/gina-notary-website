import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingPhoneCTA from "@/components/FloatingPhoneCTA";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ginagonzaleznotary.com"),
  title: {
    default: "Sacramento Notary Public Services | Gina Gonzalez Notary",
    template: "%s | Gina Gonzalez Notary",
  },
  description:
    "Certified mobile notary public and bilingual wedding officiant serving Sacramento, CA. NNA certified, insured. Same day appointments. Call (415) 948-9967.",
  keywords: [
    "mobile notary Sacramento",
    "notary public Sacramento CA",
    "Sacramento notary",
    "bilingual notary Sacramento",
    "Spanish notary Sacramento",
    "wedding officiant Sacramento",
    "apostille Sacramento",
    "loan signing agent Sacramento",
    "mobile notary near me",
    "notary services Sacramento",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ginagonzaleznotary.com",
    siteName: "Gina Gonzalez Notary",
    title: "Sacramento Notary Public Services | Gina Gonzalez Notary",
    description:
      "Certified mobile notary public and bilingual wedding officiant serving Sacramento, CA. Same day appointments available. Call (415) 948-9967.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gina Gonzalez Notary - Sacramento Mobile Notary Public",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacramento Notary Public Services | Gina Gonzalez Notary",
    description:
      "Certified mobile notary public and bilingual wedding officiant in Sacramento. Call (415) 948-9967.",
  },
  alternates: {
    canonical: "https://www.ginagonzaleznotary.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      </head>
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4CP7XECRCV"
          strategy="afterInteractive"
        />
        <Script id="ga-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4CP7XECRCV');`}
        </Script>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-brand-gold focus:text-brand-black focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="pt-[60px] md:pt-[96px]">{children}</main>
        <Footer />
        <FloatingPhoneCTA />
      </body>
    </html>
  );
}
