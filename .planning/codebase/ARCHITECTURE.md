# Architecture

**Analysis Date:** 2026-04-01

## Pattern Overview

**Overall:** Static Site Generation with Next.js App Router

**Key Characteristics:**
- Server-side rendered static pages with dynamic route generation
- Markdown-based content management for blog posts and services
- In-memory data structures (JavaScript arrays) for service areas
- Schema.org structured data injection on every page
- Client-side interactivity limited to forms and navigation state

## Layers

**Content Layer:**
- Purpose: Manage and serialize markdown content (blog posts and services)
- Location: `src/lib/content.ts`
- Contains: File system access, gray-matter parsing, remark markdown processing, heading extraction
- Depends on: Node.js fs, path, gray-matter, remark libraries
- Used by: Page components for fetching and rendering markdown

**Data Layer:**
- Purpose: Provide structured data for service areas and metadata
- Location: `src/data/service-areas.ts`, `src/lib/schema.ts`
- Contains: Service area definitions (15 cities/regions), schema factory functions for SEO
- Depends on: TypeScript interfaces
- Used by: Page components, sitemap generation, dynamic route params

**Schema Layer:**
- Purpose: Generate JSON-LD structured data for search engines
- Location: `src/lib/schema.ts`
- Contains: Factory functions for LocalBusiness, Service, FAQ, and Article schemas
- Depends on: Static data from content and service areas
- Used by: Root layout and page components (embedded in `<script type="application/ld+json">`)

**Component Layer:**
- Purpose: Render UI elements and orchestrate page composition
- Location: `src/components/`
- Contains: 15 feature components (Header, Footer, ContactForm, BlogCategoryFilter, etc.) + 2 UI primitives
- Depends on: Next.js (Image, Link, Script), React hooks, framer-motion for animations
- Used by: Page routes

**Page Layer (App Router):**
- Purpose: Define routes and handle data fetching for static/dynamic pages
- Location: `src/app/`
- Contains: 9 routes (home, about, blog, services, service areas, contact, thank-you, notary-resources, dynamic slugs)
- Depends on: Content layer, data layer, components, schema layer
- Used by: Next.js routing system

## Data Flow

**Static Page Generation (Build Time):**

1. Build process calls `generateStaticParams()` in `src/app/notary-services/[slug]/page.tsx` and `src/app/blog/[slug]/page.tsx`
2. `getAllServices()` and `getAllBlogPosts()` read all markdown files from `content/services/` and `content/blog/`
3. Gray-matter extracts frontmatter (metadata) and markdown body from each file
4. Next.js generates static HTML pages for each slug at build time

**Dynamic Blog/Service Page Render:**

1. Page component receives slug from URL params
2. `getBlogPostBySlug(slug)` or `getServiceBySlug(slug)` searches in-memory array
3. If found, `markdownToHtml(content)` converts markdown to HTML with ID anchors on headings
4. Service/blog metadata (metaTitle, metaDescription, image, faqs) passed to `generateMetadata()`
5. Schema factory functions generate JSON-LD for that page
6. Layout components (header, footer, CTA sections) wrap page content

**Service Area Routes:**

1. Page component receives area slug from URL params
2. `getServiceAreaBySlug(slug)` returns area from hardcoded `serviceAreas` array
3. Area data includes SEO metadata, FAQs, key facts, coordinates for potential maps
4. No markdown processing—structured data stored directly in TypeScript

**State Management:**

- Navigation state: Stored in component state (Header, ContactForm, BlogCategoryFilter)
- Form state: Stored locally with useState, submitted to Web3Forms API
- No global state manager (Redux, Zustand, etc.)
- No persistent client-side state

## Key Abstractions

**Content Loader (content.ts):**
- Purpose: Abstract file system and markdown parsing complexity
- Examples: `getAllBlogPosts()`, `getServiceBySlug()`, `markdownToHtml()`
- Pattern: Pure functions that read files at build time, no runtime caching

**Schema Factories (schema.ts):**
- Purpose: Generate SEO-compliant JSON-LD without repetition
- Examples: `localBusinessSchema()`, `serviceSchema()`, `blogPostSchema()`, `faqSchema()`
- Pattern: Functions return structured objects, called at page render time and embedded in HTML

**Component Props Interface:**
- Purpose: Enforce type safety for reusable components
- Examples: `ServiceCardProps`, `ServiceFrontmatter`, `BlogFrontmatter`
- Pattern: TypeScript interfaces define shape, components destructure props

## Entry Points

**Root Layout:**
- Location: `src/app/layout.tsx`
- Triggers: Every page request (wraps all routes)
- Responsibilities:
  - Load Google Fonts (Manrope, Inter)
  - Inject global metadata, Google Analytics script, JSON-LD
  - Render Header, Footer, FloatingPhoneCTA
  - Apply global Tailwind styles

**Home Page:**
- Location: `src/app/page.tsx`
- Triggers: GET / (homepage route)
- Responsibilities: Display hero, features, testimonials, CTAs

**Dynamic Service Pages:**
- Location: `src/app/notary-services/[slug]/page.tsx`
- Triggers: GET /notary-services/{slug}/
- Responsibilities:
  - Fetch service by slug
  - Parse markdown content to HTML
  - Generate service-specific schema and metadata
  - Render service details with FAQs

**Dynamic Blog Posts:**
- Location: `src/app/blog/[slug]/page.tsx`
- Triggers: GET /blog/{slug}/
- Responsibilities: Similar to service pages but with different layout and components (table of contents, reading progress, author bio)

**Sitemap Generator:**
- Location: `src/app/sitemap.ts`
- Triggers: GET /sitemap.xml (Next.js automatic)
- Responsibilities: Generate sitemap for all static, blog, service, and service area pages with priority and change frequency

## Error Handling

**Strategy:** Minimal—relies on Next.js defaults

**Patterns:**
- No custom error boundary components
- Dynamic pages return 404-like UI if slug not found (graceful fallback)
- Contact form shows alert() on Web3Forms API failure
- No logging or error tracking integration

## Cross-Cutting Concerns

**Logging:** console.log not used; no error tracking (Sentry, etc.)

**Validation:**
- HTML5 form validation (required, type="email", type="tel")
- HCaptcha verification before Web3Forms submission
- No runtime schema validation

**Authentication:** None—public site, no auth required

**SEO:**
- All pages have metadata (title, description, og:image)
- Structured data (JSON-LD) on every page
- Trailing slashes enforced in next.config
- Static export for fast CDN delivery

---

*Architecture analysis: 2026-04-01*
