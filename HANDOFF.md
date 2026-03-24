# Gina Gonzalez Notary Website - AI Handoff Prompt

## Quick Start
```bash
git clone https://github.com/jamil-theready/gina-notary-website.git
cd gina-notary-website
npm install
npm run dev -- --port 3001
# Site runs on http://localhost:3001
```

## Project Overview
Mobile notary public website for Gina Gonzalez, serving Sacramento and surrounding areas. Bilingual (English/Spanish). Built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4. Static export for Cloudflare Pages deployment.

**Live domain**: ginagonzaleznotary.com (currently on Framer, being migrated to this Next.js build)
**Reference site**: The current Framer site at ginagonzaleznotary.com is the design reference. We are rebuilding it section-by-section in code.

---

## Tech Stack
- **Framework**: Next.js 16.1.6 (App Router, TypeScript 5)
- **Output**: Static export (`output: "export"` in next.config.ts)
- **Styling**: Tailwind CSS 4 via `@tailwindcss/postcss`
- **Fonts**: Manrope (headings), Inter (body)
- **Content**: Markdown in `/content/` with gray-matter + remark
- **CMS**: Decap CMS with GitHub backend (Cloudflare Pages compatible)
- **Forms**: Web3Forms with honeypot
- **SEO**: JSON-LD schemas (LocalBusiness, Service, FAQ, BlogPost), next-sitemap
- **Images**: Unoptimized (static export mode)
- **Path alias**: `@/*` maps to `./src/*`

---

## Color System (CSS variables in globals.css)
```
--brand-gold: #f9cf01     --brand-gold-dark: #d4af00
--brand-black: #0a0a0a
--brand-white: #ffffff
--gray-50 through --gray-800
--brand-red: #da1819
```

---

## Site Architecture

### Pages
| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Homepage: hero with gold wave SVG behind Gina's photo, services grid, how it works, about preview, testimonials, FAQ accordion, bilingual CTA |
| `/notary-services` | `app/notary-services/page.tsx` | Services hub listing all services |
| `/notary-services/[slug]` | `app/notary-services/[slug]/page.tsx` | Individual service pages from `/content/services/*.md` |
| `/notary-resources` | `app/notary-resources/page.tsx` | Resources hub |
| `/notary-resources/[slug]` | `app/notary-resources/[slug]/page.tsx` | Individual resource pages |
| `/about` | `app/about/page.tsx` | About Gina page |
| `/contact` | `app/contact/page.tsx` | Contact form with hours and service areas |
| `/blog` | `app/blog/page.tsx` | Blog index (content system ready, posts in `/content/blog/`) |

### Components
| Component | File | Description |
|-----------|------|-------------|
| Header | `components/Header.tsx` | Fixed header, backdrop blur, desktop nav (Home, Services, Resources, About, Contact), mobile hamburger, phone CTA button, logo with Gina's photo |
| Footer | `components/Footer.tsx` | Gold CTA banner, 4-column layout (Brand, Services, Quick Links, Service Areas), copyright |
| ServiceCard | `components/ServiceCard.tsx` | Reusable service card with hover gold border + shadow |
| FAQ | `components/FAQ.tsx` | Accordion FAQ with open/close state |
| ContactForm | `components/ContactForm.tsx` | Web3Forms form: name, phone, email, service dropdown, message. Success state after submit |

### Key Data
Hardcoded in components and schema:
- **Phone**: (415) 948-9967
- **Email**: gina.gonzalez.realtor@gmail.com
- **Service area**: Sacramento, West Sacramento, Elk Grove, Roseville, Folsom, Rancho Cordova, Citrus Heights, Davis, Woodland, Lincoln, Auburn, Carmichael, Fair Oaks, Orangevale
- **Hours**: 7 AM - 9 PM, 7 days a week
- **Languages**: English, Spanish

---

## Content System
Markdown files in `/content/` with YAML frontmatter, processed by `src/lib/content.ts`.

### Service Frontmatter
```yaml
title, shortTitle, metaTitle, metaDescription, slug, serviceType,
image, imageAlt, faqTitle, faqs[], order, parentService?, schemaType?
```

### 9 Service Pages Already Created
1. Legal & Personal Documents
2. Real Estate & Loan Signing
3. Court & Legal Proceedings
4. Business & Miscellaneous
5. Wedding Officiant Services
6. Apostille Services
7. Mobile Notary Sacramento
8. Spanish/Bilingual Notary
9. English-Spanish Translation Services

---

## Schema / Structured Data (`src/lib/schema.ts`)
- `localBusinessSchema()` - Notary + LocalBusiness with hours, service areas, offers
- `serviceSchema()` - Per-service schema with provider and area served
- `faqSchema()` - FAQPage schema for accordion sections
- `blogPostSchema()` - Article schema for blog posts

---

## CMS Setup (Decap CMS)
- Admin panel at `/admin/` (public/admin/index.html + config.yml)
- GitHub backend (Cloudflare Pages compatible, no Identity widget needed)
- Collections: services, blog posts
- Media folder: `public/images/`

---

## Homepage Design Details
The homepage is being rebuilt section-by-section to match the OG Framer site at ginagonzaleznotary.com.

**Hero section** (current state):
- Left side: h1 "Your Trusted Mobile Notary in Sacramento, CA" with "Mobile Notary" in gold
- Subtitle text about services
- Two CTA buttons: "Get Notarized" (black) and "Notary Services" (outlined)
- Right side: Gina's photo with gold wave SVG background behind it
- Two floating badges: "mobile" chip and "English & Spanish" chip

**Sections completed**: Hero
**Sections remaining**: Services grid, How It Works, About preview, Testimonials, FAQ, Footer CTA

---

## Tasks for Overnight Work

### Homepage Section Review (compare to ginagonzaleznotary.com)
- [ ] Services grid section - match layout and content from Framer site
- [ ] How It Works section - step-by-step process
- [ ] Testimonials section - client quotes
- [ ] FAQ accordion section
- [ ] Footer CTA banner

### Functionality
- [ ] Verify all 9 service detail pages render correctly
- [ ] Test contact form submission (Web3Forms)
- [ ] Test mobile navigation on all pages
- [ ] Ensure all images load (check `/public/images/`)

### SEO
- [ ] Verify JSON-LD renders on all pages
- [ ] Check meta titles/descriptions on service pages
- [ ] Test sitemap generation (`npm run build`)

### Deployment Prep
- [ ] Ensure `npm run build` completes without errors
- [ ] Verify static export works (all pages in `/out/`)
- [ ] Ready for Cloudflare Pages deploy with GitHub backend for CMS

---

## Style Rules
- Brand gold (#f9cf01) for accents, CTAs, hover states
- Clean, professional look matching existing Framer site
- Bilingual emphasis (English/Spanish) is a key differentiator
- Mobile-first responsive design
- No hyphens or em dashes, no AI filler, short punchy sentences

---

## File Locations (outside repo)
These files exist on the local machine but are NOT in the repo:
- `/Users/admin/Desktop/Clients/Gina notary/` - Client folder root
- Original Framer site at ginagonzaleznotary.com for design reference

---

## Deployment
- **Target host**: Cloudflare Pages
- **Build command**: `npm run build` (outputs to `/out/`)
- **DNS**: GoDaddy (will need A record or CNAME change after Cloudflare Pages deploy)
- **CMS**: Decap CMS with GitHub backend (no Identity widget needed)
