# MASTER FILE: Gina Gonzalez Notary Website
> Last updated: March 16, 2026
> Drop this file into any AI conversation. It contains everything needed to continue building.

---

## 1. BUSINESS OVERVIEW

| Field | Value |
|-------|-------|
| Business | Gina Gonzalez Notary |
| Domain | ginagonzaleznotary.com |
| Phone | (415) 948-9967 |
| Email | gina.gonzalez.realtor@gmail.com |
| Location | West Sacramento / Sacramento, CA |
| Languages | English and Spanish (bilingual is KEY selling point) |
| Hours | 7 AM - 9 PM, 7 days a week |
| Certifications | NNA Certified, Insured, 10+ years experience, 6,000+ documents notarized |
| Background | Former Legal Advisor for Cusco Peru regional government, immigrated from Peru in 2003 |

### Service Areas (14 cities)
Sacramento, West Sacramento, Elk Grove, Roseville, Folsom, Rancho Cordova, Citrus Heights, Davis, Woodland, Lincoln, Auburn, Carmichael, Fair Oaks, Orangevale

### All Services (9 pages)
1. Legal & Personal Documents
2. Real Estate & Loan Signing (Loan Signing Agent)
3. Court & Legal Proceedings
4. Business & Miscellaneous Documents
5. Wedding Officiant Services
6. Apostille Services
7. Mobile Notary Sacramento
8. Spanish/Bilingual Notary (Notario en Sacramento)
9. English-Spanish Translation Services

---

## 2. TECH STACK

| Tech | Version/Details |
|------|----------------|
| Framework | Next.js 16.1.6 (App Router, TypeScript 5) |
| Styling | Tailwind CSS 4 (`@tailwindcss/postcss`, `@theme inline`) |
| Fonts | Manrope (headings), Inter (body) |
| Content | Markdown in `/content/` with gray-matter + remark + remark-gfm |
| CMS | Decap CMS (formerly Netlify CMS) with git-gateway backend |
| Forms | Netlify Forms with honeypot spam protection |
| SEO | JSON-LD schemas in `src/lib/schema.ts`, next-sitemap |
| Output | Static export (`output: "export"`, outputs to `/out/`) |
| Deploy target | Netlify (needs Identity + git-gateway for CMS) |
| Path alias | `@/*` = `./src/*` |

### Color System (globals.css)
```css
--brand-gold: #f9cf01       --brand-gold-dark: #d4af00
--brand-black: #0a0a0a      --brand-white: #ffffff
--brand-gray-50: #f5f5f5    --brand-gray-100: #e5e5e5
--brand-gray-200: #d4d4d4   --brand-gray-400: #a3a3a3
--brand-gray-600: #737373   --brand-gray-800: #262626
--brand-red: #da1819
```

### Prose Styles (for CMS markdown content)
Already defined in globals.css: `.prose h2`, `.prose h3`, `.prose h4`, `.prose p`, `.prose ul/ol`, `.prose li`, `.prose a`, `.prose strong`, `.prose blockquote` (gold left border)

---

## 3. REPO & GIT

```bash
# Clone and run
git clone https://github.com/jamil-theready/gina-notary-website.git
cd gina-notary-website
npm install
npm run dev -- --port 3001
# Runs on http://localhost:3001
```

**Local path**: `/Users/admin/Desktop/Clients/Gina notary/website/`

**Git history (3 commits):**
1. `aaa2244` - Add AI handoff document with full project context
2. `e2d76bc` - Full site build: homepage, services, blog, contact, about, CMS setup
3. `a06b584` - Initial commit from Create Next App

---

## 4. REFERENCE SITE
**CRITICAL**: The original Framer site is live at **https://ginagonzaleznotary.com**
This is the PRIMARY design reference. Match it exactly.

---

## 5. SITE MAP (What is Built)

```
/ ........................ Homepage (Hero, Stats, Services Grid, About/Trust, How It Works, Testimonials, Bilingual CTA, FAQ)
/notary-services/ ........ Services hub (lists all 9 services)
/notary-services/[slug]/ . Individual service page (from /content/services/*.md)
/notary-resources/ ....... Resources hub
/notary-resources/[slug]/ . Resource/blog pages
/about/ .................. About Gina
/contact/ ................ Contact form (Netlify Forms)
/blog/ ................... Blog index
```

### Components
- `Header.tsx` - Fixed header, backdrop blur, nav (Home, Services, Resources, About, Contact), mobile hamburger, gold phone CTA button, logo with Gina's photo
- `Footer.tsx` - Gold CTA banner ("Need a Notary in Sacramento?"), 4-column footer (Brand, Services, Quick Links, Service Areas), copyright
- `ServiceCard.tsx` - Card with title, description, hover gold border + shadow, "Learn more" arrow
- `FAQ.tsx` - Accordion with open/close state, chevron rotation animation
- `ContactForm.tsx` - Netlify form: name, phone (required), email, service dropdown, message (required). Success state.

### Content System
**Services** (9 markdown files in `/content/services/`):
- Frontmatter: title, shortTitle, metaTitle, metaDescription, slug, serviceType, image, imageAlt, faqTitle, faqs[], order, parentService?, schemaType?
- Body: markdown content rendered via remark

**Blog** (sample in `/content/blog/sample-post.md`):
- Frontmatter: title, slug, date, metaTitle, metaDescription, serviceType, linkedService?, image, imageAlt, body

### Schema Functions (`src/lib/schema.ts`)
- `localBusinessSchema()` - Notary + LocalBusiness with full address, hours, services, languages
- `serviceSchema(name, description, url)` - Individual service schema
- `faqSchema(faqs)` - FAQPage schema from Q&A array
- `blogPostSchema(title, description, url, image, date)` - Article schema

### CMS Setup (`public/admin/config.yml`)
- Backend: git-gateway (needs Netlify Identity)
- Collections: services, blog
- Media folder: `public/images/uploads`
- Admin panel: `/admin/index.html`

### Images in Repo (`/public/images/`)
- `gina-gonzalez-notary.jpg` (50 KB) - Hero image
- `Gina-notary-website-image.jpg` (127 KB) - Alt photo
- `background.jpg` (37 KB) - Background
- `og-image.png` (2.7 MB) - Open Graph image
- `NNA.jpg` (62 KB) - NNA certification badge
- `legal.png`, `misc.png`, `personal.png`, `real-estate.png`, `wedding.png` (service icons)

---

## 6. DESIGN RULES

### Style Direction
Professional Gold — black/white base with gold (#F9CF01) accents. Clean, authoritative, trustworthy.

### Landing Page Pattern
Hero with credential badges > Services grid > How It Works (3 steps) > Testimonials > Bilingual CTA > FAQ accordion > Contact

### Key UX Rules
- Sticky header: backdrop-filter blur, gold phone CTA button always visible
- Phone number visible EVERYWHERE: header, hero, floating mobile CTA, footer
- FAQ accordion with open/close animation + chevron rotation (schema markup for rich snippets)
- Section padding: py-16 md:py-24 consistent
- Max content width: max-w-7xl mx-auto px-6
- Gold hover states: border-color transition + subtle gold box-shadow glow
- Service cards: consistent sizing, gold border on hover, "Learn more" arrow link
- Touch targets: minimum 44x44px on mobile
- Breakpoints: 375px > 768px > 1024px > 1280px
- Body text: 16px minimum, line-height 1.75, max-width 65ch for readability
- All images: descriptive alt text including "Sacramento notary" naturally
- Schema on every page: localBusiness, service, faq, blogPost
- Labels above form inputs (not placeholder-only)
- Success feedback after form submit (green checkmark + message)

### Anti-Patterns to AVOID
- Cluttered service pages with walls of text — HIGH severity
- Missing schema markup (losing rich snippets) — MEDIUM
- No phone number above fold on mobile — HIGH
- Placeholder content remaining ("Gina's Photo" text) — HIGH
- Wrong FAQ content from another client — CRITICAL
- Informal tone undermining credibility — HIGH
- No hover feedback on cards and buttons — MEDIUM

---

## 6b. CRITICAL ISSUES (Fix First)

### Issue 1: WRONG FAQ CONTENT ON ALL SERVICE PAGES
ALL service page FAQs contain content from Alexa's Cleaning Services (a different client). Questions reference "post-pandemic cleaning standards," "green cleaning products," "Placerville families." This is on EVERY service page.

**Fix**: Replace all FAQ content in each `/content/services/*.md` file with correct notary-specific FAQs. Example replacement FAQs:

**General notary FAQs:**
- Q: "Do I need to bring my own witness?" A: "No, I can serve as a witness or arrange one if needed for your document signing."
- Q: "Can you notarize documents in Spanish?" A: "Yes. I am fully bilingual in English and Spanish and can notarize Spanish language documents."
- Q: "What do I need to bring?" A: "A valid, unexpired government-issued photo ID (driver's license, passport, or state ID). The document to be notarized. All signers must be present."
- Q: "How much does mobile notary service cost?" A: "Standard notarization is $15 per signature per California law. Mobile travel fees vary by location. Call (415) 948-9967 for an exact quote."
- Q: "Do you offer same day notary service?" A: "Yes. I am available 7 AM to 9 PM, 7 days a week. Same day appointments are available in most cases."
- Q: "What areas do you serve?" A: "I serve Sacramento, West Sacramento, Elk Grove, Roseville, Folsom, Rancho Cordova, Citrus Heights, Davis, Woodland, and surrounding areas."

**Write service-specific FAQs for each page** (wedding, apostille, loan signing, translation, etc.)

### Issue 2: CMS Meta Titles Not Rendering
The `metaTitle` field from service markdown frontmatter is not being used in `generateMetadata()`. Fix the service page template to read and use `metaTitle`.

### Issue 3: About Section Placeholder
The About/Trust section on the homepage still shows "Gina's Photo" placeholder text instead of actual image. Replace with `gina-gonzalez-notary.jpg` or `Gina-notary-website-image.jpg`.

### Issue 4: Missing Schema on 4 Pages
4 service pages are missing JSON-LD schema injection. Ensure every service page has `serviceSchema()` + `faqSchema()` via `<script type="application/ld+json">`.

### Issue 5: 13 Images Missing Alt Text
Add descriptive alt text including "Sacramento notary" naturally to all images.

---

## 7. SEO STRATEGY

### Page-Level Metadata

| Page | Title | Target Keyword |
|------|-------|---------------|
| Homepage | Sacramento Notary Public Services \| Gina Gonzalez Notary | mobile notary sacramento |
| Services Hub | Notary Services in Sacramento CA \| Mobile Notary | notary services sacramento |
| Legal & Personal | Legal Document Notarization Sacramento \| Gina Gonzalez | notary legal documents sacramento |
| Real Estate | Loan Signing Agent Sacramento \| Real Estate Notary | loan signing agent sacramento |
| Court & Legal | Court Document Notary Sacramento \| Gina Gonzalez | court document notary |
| Business & Misc | Business Document Notary Sacramento \| Gina Gonzalez | business notary sacramento |
| Wedding | Wedding Officiant Sacramento CA \| Bilingual Ceremonies | wedding officiant sacramento |
| Apostille | Apostille Services Sacramento \| Document Certification | apostille services sacramento |
| Mobile Notary | Mobile Notary Sacramento \| Same Day Service | mobile notary near me sacramento |
| Spanish Notary | Notario Publico en Sacramento \| Servicio Bilingue | notario sacramento |
| Translation | English Spanish Translation Sacramento \| Certified | document translation sacramento |
| About | About Gina Gonzalez \| Certified Notary Sacramento | notary public sacramento ca |
| Contact | Contact Sacramento Notary \| Book Appointment | notary appointment sacramento |

### Blog Posts to Write (Priority Order)

**Week 2 Green Keywords:**
1. "Do You Need a Notary for a Prenup in California?" - prenup CA (1,900/mo)
2. "Getting Married at the Courthouse in Sacramento: Complete Guide" - courthouse wedding sacramento (590/mo)
3. "Do You Need a Notary for Divorce Papers in California?" - divorce notary
4. "California Lease Agreement: What Tenants and Landlords Must Know" - CA lease agreement (2,900/mo)
5. "What DMV Documents Need to Be Notarized?" - DMV notary

**Week 3 Keywords:**
6. "Apostilla en Sacramento: Guia Completa" (SPANISH) - apostilla sacramento
7. "California Quitclaim Deed: When and How to Use One" - quitclaim deed (2,900/mo)
8. "California Grant Deed vs Quitclaim Deed Explained" - grant deed (1,900/mo)

Blog frontmatter:
```yaml
---
title: "Post Title"
metaTitle: "SEO Title | Gina Gonzalez Notary"
metaDescription: "SEO meta description"
slug: "url-slug"
date: "2026-03-16"
image: "/images/background.jpg"
imageAlt: "Description including sacramento notary"
serviceType: "Mobile Notary"
---
```

### Audit Baseline (March 13, 2026)
- PageSpeed Mobile: Performance 52 / Accessibility 85 / Best Practices 100 / SEO 100
- PageSpeed Desktop: Performance 82 / Accessibility 85 / Best Practices 96 / SEO 100
- Core Web Vitals: FCP 0.8s / LCP 1.4s / TBT 290ms / CLS 0.005
- 36 indexed pages, 12 blog articles, 100 GBP posts scheduled

### City Landing Page Expansion (Future)
Plan to build `/notary-services/[city]` pages for: Elk Grove, Roseville, Folsom, Rancho Cordova, Citrus Heights, Davis, Woodland, West Sacramento, Lincoln

---

## 8. VOICE & TONE

### Persona
- Professional neighbor. First-person POV from Gina.
- Short punchy sentences. No AI filler.
- Warm but authoritative. Former lawyer background gives legal credibility.

### Trust Signals (weave in naturally)
- Former Legal Advisor for Cusco Peru regional government
- Immigrated from Peru in 2003
- 10+ years notary experience
- 6,000+ documents notarized
- NNA certified
- Bilingual English/Spanish
- Also leads Perfecto Homes real estate team

### Guardrails
- NO legal advice (say "consult an attorney" when needed)
- NO remote notarization offers (CA requires physical presence)
- NO competitor mentions
- NO income guarantees
- CTA rotation: "Call or text me at (415) 948-9967"

### Sacramento Focus
- Mention specific cities and neighborhoods
- Latino/Hispanic community connection
- First-gen homebuyers (for real estate crossover content)

---

## 9. EXTERNAL ASSETS (not in repo)

All docs at `/Users/admin/Desktop/Clients/Gina notary/`

| Folder | Contents |
|--------|----------|
| `documents/seo/Gina-SEO-Action-Schedule.md` | 4-week SEO plan with keyword targets |
| `documents/seo/Gina-Avatar-Profile.md` | Voice, tone, persona guide |
| `documents/seo/CMS-Image-Alt-Text-Guide.md` | Alt text standards for all images |
| `documents/seo/site-audit.pdf` | PageSpeed/site audit snapshot |
| `documents/keywords/keyword-research.pdf` | Google Ads keyword data |
| `documents/blog-content/Notary Services.csv` | 9 service pages content for CMS import |
| `documents/blog-content/Notary Resources.csv` | Blog posts content for CMS import |
| `documents/social/Metricool_GBP_Posts_Gina.csv` | Google Business Profile posts |
| `notary images/` | 49 raw notary service photos |
| `Notary Graphics/` | 35 design assets, logos, social images |

---

## 10. CONTENT RULES
- Professional, trustworthy tone
- No hyphens or em dashes
- No AI filler ("In today's digital age...", "It goes without saying...")
- Short punchy sentences
- Bilingual capability is KEY differentiator
- Every page has CTA: call (415) 948-9967 or book online
- Sacramento-focused: mention specific cities and neighborhoods
- Legal accuracy: correct terminology (notary public, acknowledgment, jurat, oath, affirmation)
- NEVER give legal advice

---

## 11. DEFINITION OF DONE

- [ ] `npm run build` passes (static export to `/out/`)
- [ ] Site matches ginagonzaleznotary.com design (or better)
- [ ] ALL 9 service pages have CORRECT notary FAQs (not cleaning FAQs)
- [ ] metaTitle from frontmatter renders in page `<title>` tags
- [ ] About section uses real photo (not placeholder text)
- [ ] NNA badge displayed (About section or footer)
- [ ] Schema on every page (localBusiness, service, faq, blogPost)
- [ ] All 13 images have proper alt text
- [ ] 8+ SEO blog posts written and rendering
- [ ] Every page has optimized meta title + description
- [ ] Contact form works with Netlify Forms
- [ ] Mobile responsive matches Framer site
- [ ] No placeholder content remains anywhere
- [ ] All links work, phone/email links correct
- [ ] Committed and pushed to GitHub
