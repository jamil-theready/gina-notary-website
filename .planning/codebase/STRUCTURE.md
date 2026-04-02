# Codebase Structure

**Analysis Date:** 2026-04-01

## Directory Layout

```
/Users/admin/Desktop/Clients/Gina Notary/website/
├── src/                           # Source code
│   ├── app/                        # Next.js App Router routes
│   ├── components/                 # React components
│   ├── data/                       # Static data (service areas)
│   └── lib/                        # Utilities (content, schema)
├── content/                        # Markdown files
│   ├── blog/                       # Blog post markdown
│   └── services/                   # Service page markdown
├── public/                         # Static assets
│   ├── images/                     # Product images
│   └── admin/                      # Admin files
├── .planning/                      # Planning documents (this directory)
│   └── codebase/                   # Architecture analysis documents
├── .next/                          # Next.js build cache
├── out/                            # Static export output (build artifact)
├── node_modules/                   # Dependencies
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript config
├── next.config.ts                  # Next.js config
├── tailwind.config.ts              # Tailwind CSS config
├── postcss.config.mjs              # PostCSS config
├── eslint.config.mjs               # ESLint config
└── next-sitemap.config.js          # Sitemap generator config
```

## Directory Purposes

**src/app:**
- Purpose: Next.js App Router routes; defines all URL paths
- Contains: Page components (page.tsx), metadata, dynamic route generation, sitemap
- Key files: `layout.tsx` (root), `page.tsx` (homepage), `[slug]/page.tsx` (dynamic routes)
- Structure: `/` (home), `/about/`, `/blog/`, `/blog/[slug]/`, `/contact/`, `/notary-services/`, `/notary-services/[slug]/`, `/service-areas/`, `/service-areas/[slug]/`, `/notary-resources/`, `/thank-you/`

**src/components:**
- Purpose: Reusable React components for UI
- Contains: Layout (Header, Footer), feature components (ContactForm, FAQ, ServiceCard), utilities (FloatingPhoneCTA, ReadingProgressBar)
- Key files:
  - `Header.tsx` - Fixed top navigation with mega menu dropdown
  - `Footer.tsx` - Site footer with links and copyright
  - `ContactForm.tsx` - Contact form with HCaptcha + Web3Forms integration
  - `FAQ.tsx`, `FAQAccordion.tsx`, `FAQSection.tsx` - FAQ rendering
  - `ServiceCard.tsx` - Reusable service listing card
  - `BlogCategoryFilter.tsx` - Blog filtering by category
  - `TableOfContents.tsx`, `ReadingProgressBar.tsx` - Blog post helpers
- UI Primitives (basic Tailwind components): `ui/scroll-cards.tsx`, `ui/timeline.tsx`

**src/lib:**
- Purpose: Core utilities and helper functions
- Contains: Content loader, schema generators
- Key files:
  - `content.ts` (125 lines) - File I/O, markdown parsing, heading extraction
  - `schema.ts` (165 lines) - JSON-LD schema factories

**src/data:**
- Purpose: Static data structures not in markdown
- Contains: Service area definitions with coordinates, metadata, FAQs
- Key files: `service-areas.ts` (500 lines) - 15 service area objects (Sacramento, Elk Grove, Roseville, Folsom, etc.)

**content/blog:**
- Purpose: Blog post markdown files
- Contains: `.md` files with YAML frontmatter (title, date, category, image, slug)
- Naming: One file per blog post, named by slug (e.g., `how-to-get-notarized.md`)

**content/services:**
- Purpose: Service page markdown files
- Contains: `.md` files with YAML frontmatter (title, slug, service type, FAQs, image)
- Naming: One file per service page, named by slug (e.g., `mobile-notary-sacramento.md`)

**public/images:**
- Purpose: Static image assets (favicons, OG images, service photos)
- Contains: JPEG, PNG files organized by category
- Subdir: `companies/` - Partner logos or company images

**public/admin:**
- Purpose: Admin-specific static files (verification, webhooks)
- Contains: Files for API verification or webhook handling

**.next:**
- Purpose: Next.js build cache and type definitions
- Generated: Automatically by Next.js during `npm run build`
- Committed: No (git-ignored)

**out:**
- Purpose: Static HTML export (production build artifact)
- Generated: By `next build && next-sitemap` command
- Committed: No (git-ignored)

**.planning:**
- Purpose: Project planning and analysis documents
- Contains: Architecture analysis (this directory), guides, handoff docs
- Committed: Yes (git-tracked)

## Key File Locations

**Entry Points:**
- `src/app/layout.tsx` - Root layout, wraps all pages
- `src/app/page.tsx` - Homepage (GET /)
- `src/app/sitemap.ts` - XML sitemap generator (GET /sitemap.xml)

**Configuration:**
- `package.json` - Dependencies (Next.js, React, Tailwind, remark, HCaptcha)
- `tsconfig.json` - TypeScript compiler options (target ES2017, path aliases `@/*` = `src/*`)
- `next.config.ts` - Trailing slashes, static export, image optimization disabled
- `tailwind.config.ts` - Tailwind CSS customization (brand colors)
- `postcss.config.mjs` - PostCSS plugins (Tailwind)
- `eslint.config.mjs` - ESLint rules (Next.js config)

**Core Logic:**
- `src/lib/content.ts` - Markdown loader, parser, and HTML converter
- `src/lib/schema.ts` - JSON-LD schema builders
- `src/data/service-areas.ts` - Service area metadata (15 cities)
- `src/components/ContactForm.tsx` - Web3Forms integration with HCaptcha

**Testing:**
- No test files found (no Jest, Vitest, or similar)
- No test/ or __tests__/ directory

## Naming Conventions

**Files:**
- Page components: `page.tsx` (Next.js convention)
- Dynamic routes: `[slug]/page.tsx` (Next.js convention)
- Feature components: PascalCase without directory (e.g., `ContactForm.tsx`, `BlogCategoryFilter.tsx`)
- Utilities: camelCase (e.g., `content.ts`, `schema.ts`)
- Content: kebab-case (e.g., `mobile-notary-sacramento.md`, `legal-personal.md`)

**Directories:**
- Route directories: lowercase (e.g., `/app/blog/`, `/app/notary-services/`)
- Dynamic segment directories: `[param]` syntax (e.g., `[slug]`)
- Feature directories: lowercase (e.g., `components/`, `lib/`, `data/`)

**Functions & Variables:**
- Exported functions: camelCase (e.g., `getAllServices()`, `getServiceBySlug()`, `markdownToHtml()`)
- Components: PascalCase (e.g., `Header`, `ContactForm`, `ServiceCard`)
- Constants: UPPER_CASE or camelCase (e.g., `serviceAreas`, `navLinks`)

**Types & Interfaces:**
- Interfaces: PascalCase ending in Frontmatter or Props (e.g., `ServiceFrontmatter`, `BlogFrontmatter`, `ServiceCardProps`)

## Where to Add New Code

**New Blog Post:**
1. Create `.md` file in `content/blog/` with YAML frontmatter (title, date, slug, category, image, etc.)
2. No component changes needed—`getAllBlogPosts()` auto-discovers
3. Blog page will auto-generate at `/blog/{slug}/` during build

**New Service Page:**
1. Create `.md` file in `content/services/` with YAML frontmatter (title, slug, service type, faqs, image, etc.)
2. No component changes needed—`getAllServices()` auto-discovers
3. Service page will auto-generate at `/notary-services/{slug}/` during build

**New Service Area:**
1. Add object to `serviceAreas` array in `src/data/service-areas.ts`
2. Include: slug, name, county, coordinates (lat/lng), description, metaTitle, metaDescription, quickAnswer, keyFacts, faqs
3. Service area page will auto-generate at `/service-areas/{slug}/` during build

**New Feature Component:**
1. Create new file in `src/components/` (PascalCase name, e.g., `ReviewCarousel.tsx`)
2. If simple UI primitive, create in `src/components/ui/`
3. Export as default or named export
4. Import and use in page components

**New Page/Route:**
1. Create directory in `src/app/` matching route path (e.g., `faq/`, `resources/`)
2. Create `page.tsx` with React component
3. Add metadata export for SEO
4. Import components as needed
5. Add to sitemap.ts if static page

**Utilities/Helpers:**
1. Add camelCase .ts file to `src/lib/` if reusable
2. Export functions
3. Import in components/pages that need them

## Special Directories

**out/ (Static Export):**
- Purpose: Build output containing pre-rendered HTML
- Generated: `npm run build` command
- Committed: No (git-ignored by .gitignore)
- Used for: CDN deployment

**.next/ (Build Cache):**
- Purpose: Next.js incremental build cache and TypeScript types
- Generated: Automatically during dev and build
- Committed: No (git-ignored)
- When to clear: Run `rm -rf .next` to force clean rebuild

**public/ (Static Assets):**
- Purpose: Served as-is by Next.js at root path (e.g., /images/logo.png maps to public/images/logo.png)
- Committed: Yes (git-tracked)
- Security: Only store non-sensitive files (images, fonts, icons)

**content/ (Markdown Source):**
- Purpose: Single source of truth for blog and service page content
- Committed: Yes (git-tracked)
- Format: Markdown with YAML frontmatter
- When building: Markdown is parsed into HTML at build time

---

*Structure analysis: 2026-04-01*
