# AI BUILD INSTRUCTIONS: Gina Gonzalez Notary Website

## SETUP
```bash
cd "/Users/admin/Desktop/Clients/Gina notary/website"
npm install
npm run dev -- --port 3001
# Runs on http://localhost:3001
```

## TECH STACK
- Next.js 16.1.6 (App Router, TypeScript 5)
- Tailwind CSS 4 (`@tailwindcss/postcss`, `@theme inline`)
- Fonts: Manrope (headings), Inter (body)
- Content: Markdown in `/content/` with gray-matter + remark + remark-gfm
- CMS: Decap CMS with GitHub backend (Cloudflare Pages compatible)
- Forms: Web3Forms with honeypot
- SEO: JSON-LD schemas in `src/lib/schema.ts`
- Sitemap: next-sitemap
- Static export (`output: "export"`, outputs to `/out/`)
- GitHub repo: https://github.com/jamil-theready/gina-notary-website.git

---

## BUSINESS INFO
- **Name**: Gina Gonzalez Notary
- **Domain**: ginagonzaleznotary.com
- **Phone**: (415) 948-9967
- **Email**: gina.gonzalez.realtor@gmail.com
- **Location**: West Sacramento / Sacramento, CA
- **Languages**: English and Spanish (bilingual is a KEY selling point)
- **Hours**: 7 AM - 9 PM, 7 days a week
- **Certifications**: NNA Certified, Insured, 10+ years experience, 6,000+ documents notarized
- **Also**: Wedding Officiant, Apostille Services, Document Translation
- **Background**: Former Legal Advisor for Cusco Peru regional government, immigrated from Peru in 2003

### Service Areas (14 cities)
Sacramento, West Sacramento, Elk Grove, Roseville, Folsom, Rancho Cordova, Citrus Heights, Davis, Woodland, Lincoln, Auburn, Carmichael, Fair Oaks, Orangevale

### All Services (9 service pages)
1. Legal & Personal Documents
2. Real Estate & Loan Signing (Loan Signing Agent)
3. Court & Legal Proceedings
4. Business & Miscellaneous Documents
5. Wedding Officiant Services
6. Apostille Services
7. Mobile Notary Sacramento
8. Spanish/Bilingual Notary (Notario en Sacramento)
9. English-Spanish Translation Services

## COLOR SYSTEM
```
--brand-gold: #f9cf01       --brand-gold-dark: #d4af00
--brand-black: #0a0a0a      --brand-white: #ffffff
--brand-gray-50: #f5f5f5    --brand-gray-100: #e5e5e5
--brand-gray-200: #d4d4d4   --brand-gray-400: #a3a3a3
--brand-gray-600: #737373   --brand-gray-800: #262626
--brand-red: #da1819
```

---

## REFERENCE SITE
The original Framer site is live at: **https://ginagonzaleznotary.com**
This is the PRIMARY design reference. Match it exactly.

---

## WHAT IS ALREADY BUILT

### Pages
- `/` - Homepage (Hero, Stats, Services Grid, About/Trust, How It Works, Testimonials, Bilingual CTA, FAQ)
- `/notary-services` - Services hub page
- `/notary-services/[slug]` - 9 individual service pages from `/content/services/*.md`
- `/notary-resources` - Resources hub
- `/notary-resources/[slug]` - Resource/blog pages
- `/about` - About Gina
- `/contact` - Contact form
- `/blog` - Blog index

### Components
- Header.tsx - Fixed header, backdrop blur, nav, gold phone CTA, logo with photo
- Footer.tsx - Gold CTA banner, 4-column footer
- ServiceCard.tsx - Cards with gold border hover
- FAQ.tsx - Accordion with chevron animation
- ContactForm.tsx - Web3Forms form with success state

### Content
- 9 service markdown files in `/content/services/`
- Sample blog post in `/content/blog/`
- CMS config at `/public/admin/config.yml`

### Images in `/public/images/`
- gina-gonzalez-notary.jpg, Gina-notary-website-image.jpg
- background.jpg, og-image.png, NNA.jpg
- Service icons: legal.png, misc.png, personal.png, real-estate.png, wedding.png

---

## CRITICAL ISSUES FROM SEO AUDIT

The SEO audit (in `/Users/admin/Desktop/Clients/Gina notary/documents/Gina-SEO-Action-Schedule.md`) found these problems:

### 1. WRONG FAQ CONTENT (HIGH PRIORITY)
ALL service pages have FAQ content from Alexa's Cleaning Services (wrong client). Every FAQ on every service page needs to be replaced with notary-specific FAQs. The correct FAQ content is in the SEO doc.

### 2. CMS Meta Titles Not Rendering
Meta titles from CMS frontmatter are not being picked up by the page templates. Verify that `metaTitle` from service markdown frontmatter is used in the page's `generateMetadata()`.

### 3. Missing Schema on Pages
4 pages are missing JSON-LD schema. Ensure every service page has `serviceSchema()` + `faqSchema()` from `src/lib/schema.ts`.

### 4. Images Missing Alt Text
13 images lack proper alt text. Add descriptive alt text including "Sacramento notary" naturally.

### 5. /blog Returning 404
The blog index page may have routing issues. Verify it renders correctly.

---

## WHAT NEEDS TO BE DONE

### 1. MATCH FRAMER SITE DESIGN (TOP PRIORITY)
Visit https://ginagonzaleznotary.com and compare EVERY section. Fix:
- Spacing, padding, margins, gaps
- Font sizes: h1, h2, h3, body, captions
- Background colors per section
- Layout: column widths, grid gaps, card sizes
- Images: use real photos, not placeholders
- Hover states, transitions, animations
- Mobile responsive (Framer site is mobile-friendly)

Specific known issues:
- About section still has placeholder "Gina's Photo" instead of actual image. Use `gina-gonzalez-notary.jpg`
- NNA badge (NNA.jpg) should be displayed in About section or footer
- Service cards need appropriate SVG icons
- Hero badges need proper positioning around the photo

### 2. FIX ALL FAQ CONTENT
Replace wrong FAQs on all 9 service pages with correct notary-specific questions. Examples:
- "Do I need to bring my own witness?" (Answer: No, we can provide one if needed)
- "Can you notarize documents in Spanish?" (Answer: Yes, bilingual services available)
- Service-specific FAQs for each page

### 3. WRITE BLOG POSTS (SEO-Targeted)
Create at least 8 blog posts targeting these keywords:

**Week 2 Green Keywords (from SEO plan):**
1. "Do You Need a Notary for a Prenup in California?" - prenup CA (1,900/mo)
2. "Getting Married at the Courthouse in Sacramento: Complete Guide" - courthouse wedding sacramento (590/mo)
3. "Do You Need a Notary for Divorce Papers in California?" - divorce notary
4. "California Lease Agreement: What Tenants and Landlords Must Know" - CA lease agreement (2,900/mo)
5. "What DMV Documents Need to Be Notarized?" - DMV notary

**Week 3 Keywords:**
6. "Apostilla en Sacramento: Guia Completa" (SPANISH) - apostilla sacramento
7. "California Quitclaim Deed: When and How to Use One" - quitclaim deed (2,900/mo)
8. "California Grant Deed vs Quitclaim Deed Explained" - grant deed (1,900/mo)

Blog frontmatter format:
```yaml
---
title: "Post Title"
metaTitle: "SEO Title | Gina Gonzalez Notary"
metaDescription: "SEO meta description"
slug: "url-slug"
date: "2026-03-16"
image: "/images/background.jpg"
imageAlt: "Description of image"
serviceType: "Mobile Notary"
---
```

### 4. PAGE-LEVEL SEO METADATA
Every page needs optimized metadata:

| Page | Title | Target Keyword |
|------|-------|---------------|
| Homepage | Sacramento Notary Public Services \| Gina Gonzalez | mobile notary sacramento |
| Services Hub | Notary Services in Sacramento CA \| Mobile Notary | notary services sacramento |
| Legal & Personal | Legal Document Notarization Sacramento | notary legal documents |
| Real Estate | Loan Signing Agent Sacramento \| Real Estate Notary | loan signing agent sacramento |
| Wedding | Wedding Officiant Sacramento CA \| Bilingual | wedding officiant sacramento |
| Apostille | Apostille Services Sacramento \| Document Certification | apostille services sacramento |
| Mobile Notary | Mobile Notary Sacramento \| Same Day Service | mobile notary near me |
| Spanish Notary | Notario Publico en Sacramento \| Servicio Bilingue | notario sacramento |
| Translation | English Spanish Translation Sacramento | document translation sacramento |
| About | About Gina Gonzalez \| Certified Notary Sacramento | notary public sacramento ca |
| Contact | Contact Sacramento Notary \| Book Appointment | notary appointment sacramento |

### 5. SCHEMA MARKUP
Schemas already exist in `src/lib/schema.ts`. Make sure they are injected on every page:
- Homepage: `localBusinessSchema()`
- Each service page: `serviceSchema()` + `faqSchema()`
- Blog posts: `blogPostSchema()`
- Via `<script type="application/ld+json">`

### 6. CMS VERIFICATION
- Decap CMS at `/public/admin/config.yml`
- Verify config matches frontmatter structure in .md files
- Test admin panel at `/admin/index.html`

### 7. IMAGE OPTIMIZATION
55 notary service photos available at: `/Users/admin/Desktop/Clients/Gina notary/notary images/`
37 design assets at: `/Users/admin/Desktop/Clients/Gina notary/Notary Graphics/`
Alt text guide at: `/Users/admin/Desktop/Clients/Gina notary/documents/cms/CMS-Image-Alt-Text-Guide.md`

---

## VOICE & TONE (from Avatar Profile)
- Professional neighbor, first-person POV from Gina
- Short punchy sentences, no AI filler
- Trust signals: former lawyer (Peru), 10+ years, 6,000+ docs, NNA certified, bilingual
- Sacramento Latino/Hispanic community focus
- Guardrails: no legal advice, no remote notarization, no competitor mentions
- CTA rotation: "Call or text me at (415) 948-9967"
- Service area mentions: Sacramento metro + surrounding cities

---

## CONTENT RULES
- Professional, trustworthy tone
- No hyphens or em dashes
- No AI filler ("In today's digital age...")
- Short punchy sentences
- Bilingual capability is KEY differentiator
- Every page: CTA to call (415) 948-9967 or book online
- Sacramento-focused: mention specific cities
- Legal accuracy: correct terminology (acknowledgment, jurat, etc.)

---

## SEO REFERENCE FILES
- `/Users/admin/Desktop/Clients/Gina notary/documents/Gina-SEO-Action-Schedule.md` - Full 4-week plan
- `/Users/admin/Desktop/Clients/Gina notary/documents/Gina-Avatar-Profile.md` - Voice/tone guide
- `/Users/admin/Desktop/Clients/Gina notary/documents/cms/Notary Services.csv` - Service page content
- `/Users/admin/Desktop/Clients/Gina notary/documents/cms/Notary Resources.csv` - Blog content

---

## WHAT "DONE" LOOKS LIKE
1. Site matches ginagonzaleznotary.com (or better)
2. Every page renders without errors, `npm run build` passes
3. All 9 service pages have correct FAQs (not cleaning service FAQs)
4. About page has real photo, full bio, NNA credential
5. At least 8 SEO blog posts written
6. Every page has proper metadata and schema
7. Mobile responsive matches Framer
8. No placeholder content remains
9. All images have proper alt text
10. Contact form works with Web3Forms
