# Gina Gonzalez Notary - Website Rebuild Progress

## Project Location
`/Users/admin/Desktop/Clients/Gina notary/website/`

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS v4
- Decap CMS (at /admin)
- Static export for Cloudflare Pages hosting
- GitHub for version control

## What's Done

### Infrastructure
- [x] Next.js project created with TypeScript + Tailwind
- [x] Dependencies installed: gray-matter, remark, remark-html, remark-gfm, next-sitemap
- [x] `next.config.ts` - static export mode, trailing slashes
- [x] `globals.css` - Brand colors (gold #f9cf01, black, white), Manrope headings, Inter body, prose styles

### Content System
- [x] `src/lib/content.ts` - Markdown parser for services + blog (reads from /content/services/ and /content/blog/)
- [x] `src/lib/schema.ts` - JSON-LD generators (LocalBusiness, Service, FAQPage, Article)

### Components
- [x] `src/components/Header.tsx` - Fixed header, mobile menu, phone CTA
- [x] `src/components/Footer.tsx` - CTA banner, service links, service areas, copyright
- [x] `src/components/FAQ.tsx` - Accordion FAQ component
- [x] `src/components/ContactForm.tsx` - Web3Forms integration with honeypot
- [x] `src/components/ServiceCard.tsx` - Reusable service link card

### Pages
- [x] `src/app/layout.tsx` - Root layout with fonts, header, footer, LocalBusiness schema
- [x] `src/app/page.tsx` - Homepage (hero, stats, services grid, about section, how it works, testimonials, bilingual CTA, FAQ)
- [x] `src/app/notary-services/page.tsx` - Services listing page
- [x] `src/app/notary-services/[slug]/page.tsx` - Dynamic service pages with SEO meta, schema, breadcrumbs
- [x] `src/app/notary-resources/page.tsx` - Blog listing page
- [x] `src/app/notary-resources/[slug]/page.tsx` - Dynamic blog post pages with Article schema
- [x] `src/app/about/page.tsx` - About Gina page
- [x] `src/app/contact/page.tsx` - Contact page with form + contact info

### CMS
- [x] `public/admin/index.html` - Decap CMS entry point
- [x] `public/admin/config.yml` - CMS config with services + blog collections, all fields defined

## What's Left

### Still Need To Do
- [ ] Create sample content markdown files in /content/services/ and /content/blog/ (so the build works)
- [ ] Add robots.txt to /public/
- [ ] Set up next-sitemap config (`next-sitemap.config.js`)
- [ ] Copy key images from client folders to /public/images/
- [ ] Add a `/blog` redirect page (redirect to /notary-resources/)
- [ ] Test build (`npm run build`)
- [ ] Init git repo, push to GitHub
- [ ] Deploy to Cloudflare Pages
- [ ] Point GoDaddy DNS to Cloudflare Pages

### Content Migration (After Build)
- Bulk upload service pages from CMS CSV data
- Bulk upload blog posts from CMS CSV data
- Add all images with proper alt text

## Key Files to Reference
- `/Users/admin/Desktop/Clients/Gina notary/documents/Gina-Avatar-Profile.md` - Voice/tone guide
- `/Users/admin/Desktop/Clients/Gina notary/documents/Gina-SEO-Action-Schedule.md` - SEO fixes
- `/Users/admin/Desktop/Clients/Gina notary/documents/cms/Notary Services.csv` - Service page content
- `/Users/admin/Desktop/Clients/Gina notary/documents/cms/Notary Resources.csv` - Blog content

## Brand Colors
- Gold: #f9cf01
- Gold Dark: #d4af00
- Black: #0a0a0a
- White: #ffffff
- Gray 50: #f5f5f5

## Contact Info
- Phone: (415) 948-9967
- Website: ginagonzaleznotary.com
- Service areas: Sacramento, West Sac, Elk Grove, Roseville, Folsom, Rancho Cordova, Citrus Heights, Davis, Woodland, Lincoln, Auburn, Carmichael, Fair Oaks, Orangevale
