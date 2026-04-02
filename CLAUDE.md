<!-- GSD:project-start source:PROJECT.md -->
## Project

**Gina Gonzalez Notary — SEO Remediation**

SEO remediation for ginagonzaleznotary.com, a mobile notary public website serving Sacramento and surrounding areas. The site is built with Next.js 16 (static export) and deployed on Cloudflare Pages. This milestone fixes all issues identified in a comprehensive SEO audit — no new features, no design changes.

**Core Value:** Every page on the site must be technically optimized for search engines so that potential clients in the Sacramento area can find Gina's notary services through organic search.

### Constraints

- **Tech stack**: Next.js 16 static export, Tailwind CSS v4, Cloudflare Pages — no changes
- **Timeline**: Complete ASAP — this is active client work
- **Deployment**: Static export only, no server-side features
- **Content**: Fix existing content inconsistencies, don't create net-new content strategy
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Languages
- TypeScript 5 - Used throughout codebase (React components, Next.js pages, utilities)
- JavaScript (ESM) - Configuration files and utilities
- Markdown - Content files for blog posts and service descriptions (front-end + body)
## Runtime
- Node.js 24.13.1 (project currently using)
- ES2017 target compilation
- npm 11.8.0
- Lockfile: `package-lock.json` present
## Frameworks
- Next.js 16.1.6 - Full-stack React framework with static export
- React 19.2.3 - UI components and state management
- React DOM 19.2.3 - DOM rendering
- Tailwind CSS 4 - Utility-first CSS framework
- PostCSS 4 - CSS processing via `@tailwindcss/postcss`
- remark 15.0.1 - Markdown parser
- remark-gfm 4.0.1 - GitHub Flavored Markdown support
- remark-html 16.0.1 - Convert remark AST to HTML
- gray-matter 4.0.3 - YAML frontmatter parsing for markdown files
- framer-motion 12.38.0 - Animation library (used in components like `Confetti.tsx`, `scroll-cards.tsx`)
- @hcaptcha/react-hcaptcha 2.0.2 - hCaptcha integration for contact form
- next-sitemap 4.2.3 - Automatic sitemap generation at build time
## Key Dependencies
- @hcaptcha/react-hcaptcha 2.0.2 - CAPTCHA verification (contact form security)
- gray-matter 4.0.3 - Parses frontmatter from markdown content files in `content/` directory
- @img/sharp-darwin-x64, @img/colour - Image optimization (Next.js built-in)
- @tailwindcss/oxide-darwin-x64, lightningcss-darwin-x64 - CSS compilation acceleration
## Configuration
- No environment variables required for production (Web3Forms API key is hardcoded in component)
- No `.env.local` file needed for deployment
- Deployment targets: Static export (no server needed)
- `next.config.ts` - Exports static HTML/CSS/JS (`output: "export"`)
- `tsconfig.json` - TypeScript configuration with path alias `@/*` → `./src/*`
- `postcss.config.mjs` - PostCSS config with Tailwind CSS
- `eslint.config.mjs` - ESLint 9 configuration with Next.js rules
- `.prettierrc` - Not configured (using ESLint defaults)
- `next-sitemap.config.js` - Sitemap generation config
## Platform Requirements
- Node.js 24.x or compatible
- npm 11.x or compatible
- macOS/Linux/Windows with shell support
- Static hosting (Netlify, Vercel, GitHub Pages, or similar)
- No database required
- No runtime server required
- Generated output: `./out/` directory (committed to git currently)
- Static HTML files with embedded CSS and JS
- Sitemap: `./out/sitemap.xml` (generated on build)
- Image optimization disabled (`images.unoptimized: true`)
## Build & Deployment
- Pages build to `.next/` during development
- Static export to `./out/` directory on production build
- All routes use trailing slashes (configured in `next.config.ts`)
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## Naming Patterns
- Components: PascalCase (e.g., `ContactForm.tsx`, `Header.tsx`, `FAQ.tsx`)
- Pages: lowercase (e.g., `page.tsx` for Next.js app router pages)
- Utilities and libraries: lowercase with hyphens (e.g., `content.ts`, `schema.ts`)
- Data files: lowercase (e.g., `service-areas.ts`)
- Async functions: camelCase (e.g., `markdownToHtml()`, `getAllBlogPosts()`)
- React components: PascalCase, exported as default (e.g., `export default function ContactForm()`)
- Event handlers: camelCase with `handle` prefix (e.g., `handleSubmit()`, `handleKeyDown()`)
- Utility functions: camelCase (e.g., `slugifyHeading()`, `calcReadTime()`, `copyLink()`)
- State variables: camelCase with descriptive names (e.g., `mobileOpen`, `hcaptchaToken`, `openIndex`, `particles`)
- Constants: camelCase at module level (e.g., `contentDirectory`, `serviceGroups`, `navLinks`)
- Type/array data: camelCase (e.g., `serviceAreas`, `colors`, `newParticles`)
- CSS class: kebab-case for Tailwind utilities (e.g., `bg-brand-gold`, `text-brand-black`)
- Interfaces: PascalCase with suffix `Props` or `Item` (e.g., `BlogCategoryFilterProps`, `FAQItem`, `ServiceArea`, `BlogFrontmatter`, `ServiceFrontmatter`, `TimelineEntry`, `Particle`)
- Type aliases: PascalCase (e.g., `BlogFrontmatter`, `ServiceFrontmatter`)
- Enum-like constants: PascalCase as `const` (e.g., `BLOG_CATEGORIES`, `serviceIcons`)
## Code Style
- Indentation: 2 spaces (enforced by ESLint)
- Max line length: ~100 characters (soft limit observed in codebase)
- Semicolons: Always present (enforced by ESLint)
- Quotes: Double quotes for JSX attributes and strings
- Arrow functions: Preferred for inline functions and callbacks
- Tool: ESLint 9 with flat config (`eslint.config.mjs`)
- Config extends: `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Rules applied: Next.js core web vitals and TypeScript best practices
- Run command: `npm run lint` (full project linting)
- No Prettier config detected; formatting relies on ESLint
- Strict mode: Enabled (`"strict": true`)
- Target: ES2017
- Module: esnext
- Path aliases: `@/*` maps to `./src/*`
## Import Organization
- Use `@/` prefix for all internal imports: `@/components/`, `@/lib/`, `@/data/`
- Never use relative imports like `../../../`
## Error Handling
- Try-catch blocks used in async operations (e.g., `ContactForm.tsx` form submission)
- Fallback UI returned when data not found (e.g., "Article Not Found" page in `blog/[slug]/page.tsx`)
- Alert dialogs for user feedback on errors (e.g., captcha verification, form submission)
- Null/undefined checks before rendering conditional content (e.g., `if (!faqs || faqs.length === 0) return null`)
- Early returns in functions to simplify control flow (e.g., `if (!post) return {}`)
## Logging
- Client components typically avoid logging
- Server-side processing (markdown parsing, file reading) has no logging
- Debug information would be added as needed (not currently present)
## Comments
- Explain CSS layout quirks (e.g., in `ShareButtons.tsx`: comment about sticky positioning and container block)
- Mark sections of code with decorative dividers (e.g., `/* ───────────────────── METADATA ─────────────────── */`)
- JSDoc not used; inline comments are minimal and only for non-obvious logic
## Function Design
- Component render functions: <150 lines
- Utility functions: <50 lines
- Event handlers: <30 lines
- Destructured props typed with interfaces (e.g., `{ posts }: BlogCategoryFilterProps`)
- Async functions accept `params: Promise<{ slug: string }>` (Next.js 15 convention)
- Props always explicitly typed with TypeScript interfaces
- React components return JSX.Element
- Async functions in pages/utils return resolved values (HTML strings, objects, arrays)
- Helper functions return typed values (arrays, objects, strings, numbers)
- Null returns used for conditional rendering (e.g., `if (!faqs) return null`)
## Module Design
- Default exports for React components (e.g., `export default function ContactForm()`)
- Named exports for utilities, types, and constants (e.g., `export interface BlogFrontmatter`, `export function getAllBlogPosts()`)
- Type-only imports where needed (e.g., `import type { Metadata }`)
- Not used; imports target specific files directly
- Example: `import { Timeline } from "@/components/ui/timeline"` (not a barrel export)
- Data declarations at top (constants, interfaces)
- Helper functions in middle
- Main export at bottom
- Example from `page.tsx`:
## Client vs. Server Separation
- Added to components with state or event handlers (e.g., `ContactForm.tsx`, `Header.tsx`, `BlogCategoryFilter.tsx`)
- Never added to page components unless they have interactive state
- Server components used for static content and data fetching (default behavior)
## CSS & Styling
- Utility-first approach: classes directly applied to elements
- Brand colors used throughout: `bg-brand-gold`, `text-brand-black`, `bg-brand-gray-50`
- Responsive design with `sm:`, `md:`, `lg:` breakpoints
- Shadow utilities: `shadow-sm`, `shadow-md`, `shadow-black/[0.04]`
- No CSS files outside `globals.css` (all styling via Tailwind utilities)
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

## Pattern Overview
- Server-side rendered static pages with dynamic route generation
- Markdown-based content management for blog posts and services
- In-memory data structures (JavaScript arrays) for service areas
- Schema.org structured data injection on every page
- Client-side interactivity limited to forms and navigation state
## Layers
- Purpose: Manage and serialize markdown content (blog posts and services)
- Location: `src/lib/content.ts`
- Contains: File system access, gray-matter parsing, remark markdown processing, heading extraction
- Depends on: Node.js fs, path, gray-matter, remark libraries
- Used by: Page components for fetching and rendering markdown
- Purpose: Provide structured data for service areas and metadata
- Location: `src/data/service-areas.ts`, `src/lib/schema.ts`
- Contains: Service area definitions (15 cities/regions), schema factory functions for SEO
- Depends on: TypeScript interfaces
- Used by: Page components, sitemap generation, dynamic route params
- Purpose: Generate JSON-LD structured data for search engines
- Location: `src/lib/schema.ts`
- Contains: Factory functions for LocalBusiness, Service, FAQ, and Article schemas
- Depends on: Static data from content and service areas
- Used by: Root layout and page components (embedded in `<script type="application/ld+json">`)
- Purpose: Render UI elements and orchestrate page composition
- Location: `src/components/`
- Contains: 15 feature components (Header, Footer, ContactForm, BlogCategoryFilter, etc.) + 2 UI primitives
- Depends on: Next.js (Image, Link, Script), React hooks, framer-motion for animations
- Used by: Page routes
- Purpose: Define routes and handle data fetching for static/dynamic pages
- Location: `src/app/`
- Contains: 9 routes (home, about, blog, services, service areas, contact, thank-you, notary-resources, dynamic slugs)
- Depends on: Content layer, data layer, components, schema layer
- Used by: Next.js routing system
## Data Flow
- Navigation state: Stored in component state (Header, ContactForm, BlogCategoryFilter)
- Form state: Stored locally with useState, submitted to Web3Forms API
- No global state manager (Redux, Zustand, etc.)
- No persistent client-side state
## Key Abstractions
- Purpose: Abstract file system and markdown parsing complexity
- Examples: `getAllBlogPosts()`, `getServiceBySlug()`, `markdownToHtml()`
- Pattern: Pure functions that read files at build time, no runtime caching
- Purpose: Generate SEO-compliant JSON-LD without repetition
- Examples: `localBusinessSchema()`, `serviceSchema()`, `blogPostSchema()`, `faqSchema()`
- Pattern: Functions return structured objects, called at page render time and embedded in HTML
- Purpose: Enforce type safety for reusable components
- Examples: `ServiceCardProps`, `ServiceFrontmatter`, `BlogFrontmatter`
- Pattern: TypeScript interfaces define shape, components destructure props
## Entry Points
- Location: `src/app/layout.tsx`
- Triggers: Every page request (wraps all routes)
- Responsibilities:
- Location: `src/app/page.tsx`
- Triggers: GET / (homepage route)
- Responsibilities: Display hero, features, testimonials, CTAs
- Location: `src/app/notary-services/[slug]/page.tsx`
- Triggers: GET /notary-services/{slug}/
- Responsibilities:
- Location: `src/app/blog/[slug]/page.tsx`
- Triggers: GET /blog/{slug}/
- Responsibilities: Similar to service pages but with different layout and components (table of contents, reading progress, author bio)
- Location: `src/app/sitemap.ts`
- Triggers: GET /sitemap.xml (Next.js automatic)
- Responsibilities: Generate sitemap for all static, blog, service, and service area pages with priority and change frequency
## Error Handling
- No custom error boundary components
- Dynamic pages return 404-like UI if slug not found (graceful fallback)
- Contact form shows alert() on Web3Forms API failure
- No logging or error tracking integration
## Cross-Cutting Concerns
- HTML5 form validation (required, type="email", type="tel")
- HCaptcha verification before Web3Forms submission
- No runtime schema validation
- All pages have metadata (title, description, og:image)
- Structured data (JSON-LD) on every page
- Trailing slashes enforced in next.config
- Static export for fast CDN delivery
<!-- GSD:architecture-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd:quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd:debug` for investigation and bug fixing
- `/gsd:execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd:profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
