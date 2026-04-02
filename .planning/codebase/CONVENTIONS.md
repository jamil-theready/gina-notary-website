# Coding Conventions

**Analysis Date:** 2026-04-01

## Naming Patterns

**Files:**
- Components: PascalCase (e.g., `ContactForm.tsx`, `Header.tsx`, `FAQ.tsx`)
- Pages: lowercase (e.g., `page.tsx` for Next.js app router pages)
- Utilities and libraries: lowercase with hyphens (e.g., `content.ts`, `schema.ts`)
- Data files: lowercase (e.g., `service-areas.ts`)

**Functions:**
- Async functions: camelCase (e.g., `markdownToHtml()`, `getAllBlogPosts()`)
- React components: PascalCase, exported as default (e.g., `export default function ContactForm()`)
- Event handlers: camelCase with `handle` prefix (e.g., `handleSubmit()`, `handleKeyDown()`)
- Utility functions: camelCase (e.g., `slugifyHeading()`, `calcReadTime()`, `copyLink()`)

**Variables:**
- State variables: camelCase with descriptive names (e.g., `mobileOpen`, `hcaptchaToken`, `openIndex`, `particles`)
- Constants: camelCase at module level (e.g., `contentDirectory`, `serviceGroups`, `navLinks`)
- Type/array data: camelCase (e.g., `serviceAreas`, `colors`, `newParticles`)
- CSS class: kebab-case for Tailwind utilities (e.g., `bg-brand-gold`, `text-brand-black`)

**Types:**
- Interfaces: PascalCase with suffix `Props` or `Item` (e.g., `BlogCategoryFilterProps`, `FAQItem`, `ServiceArea`, `BlogFrontmatter`, `ServiceFrontmatter`, `TimelineEntry`, `Particle`)
- Type aliases: PascalCase (e.g., `BlogFrontmatter`, `ServiceFrontmatter`)
- Enum-like constants: PascalCase as `const` (e.g., `BLOG_CATEGORIES`, `serviceIcons`)

## Code Style

**Formatting:**
- Indentation: 2 spaces (enforced by ESLint)
- Max line length: ~100 characters (soft limit observed in codebase)
- Semicolons: Always present (enforced by ESLint)
- Quotes: Double quotes for JSX attributes and strings
- Arrow functions: Preferred for inline functions and callbacks

**Linting:**
- Tool: ESLint 9 with flat config (`eslint.config.mjs`)
- Config extends: `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`
- Rules applied: Next.js core web vitals and TypeScript best practices
- Run command: `npm run lint` (full project linting)
- No Prettier config detected; formatting relies on ESLint

**TypeScript:**
- Strict mode: Enabled (`"strict": true`)
- Target: ES2017
- Module: esnext
- Path aliases: `@/*` maps to `./src/*`

## Import Organization

**Order:**
1. Next.js/React imports (e.g., `import type { Metadata } from "next"`)
2. Next.js built-ins (e.g., `import Script from "next/script"`, `import Link from "next/link"`)
3. Third-party libraries (e.g., `import { useState } from "react"`, `import HCaptcha from "@hcaptcha/react-hcaptcha"`)
4. Local utilities (e.g., `import { getAllBlogPosts } from "@/lib/content"`)
5. Local components (e.g., `import ContactForm from "@/components/ContactForm"`)

**Examples:**
```typescript
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { getBlogPostBySlug, markdownToHtml } from "@/lib/content";
import ShareButtons from "@/components/ShareButtons";
```

**Path Aliases:**
- Use `@/` prefix for all internal imports: `@/components/`, `@/lib/`, `@/data/`
- Never use relative imports like `../../../`

## Error Handling

**Patterns:**
- Try-catch blocks used in async operations (e.g., `ContactForm.tsx` form submission)
- Fallback UI returned when data not found (e.g., "Article Not Found" page in `blog/[slug]/page.tsx`)
- Alert dialogs for user feedback on errors (e.g., captcha verification, form submission)
- Null/undefined checks before rendering conditional content (e.g., `if (!faqs || faqs.length === 0) return null`)
- Early returns in functions to simplify control flow (e.g., `if (!post) return {}`)

**Example from `ContactForm.tsx`:**
```typescript
if (!hcaptchaToken) {
  alert("Please complete the captcha verification.");
  return;
}

try {
  const res = await fetch(...);
  if (res.ok) {
    router.push("/thank-you");
  } else {
    alert("Something went wrong. Please call (415) 948-9967 instead.");
    setSending(false);
  }
} catch {
  alert("Something went wrong. Please call (415) 948-9967 instead.");
  setSending(false);
}
```

## Logging

**Framework:** Console (no dedicated logging library)

**Patterns:**
- Client components typically avoid logging
- Server-side processing (markdown parsing, file reading) has no logging
- Debug information would be added as needed (not currently present)

## Comments

**When to Comment:**
- Explain CSS layout quirks (e.g., in `ShareButtons.tsx`: comment about sticky positioning and container block)
- Mark sections of code with decorative dividers (e.g., `/* ───────────────────── METADATA ─────────────────── */`)
- JSDoc not used; inline comments are minimal and only for non-obvious logic

**Example:**
```typescript
// ── Desktop: sticky left sidebar ──
// sticky + top-40 = element sticks 160px from viewport top.
```

## Function Design

**Size:** Functions kept concise and focused
- Component render functions: <150 lines
- Utility functions: <50 lines
- Event handlers: <30 lines

**Parameters:**
- Destructured props typed with interfaces (e.g., `{ posts }: BlogCategoryFilterProps`)
- Async functions accept `params: Promise<{ slug: string }>` (Next.js 15 convention)
- Props always explicitly typed with TypeScript interfaces

**Return Values:**
- React components return JSX.Element
- Async functions in pages/utils return resolved values (HTML strings, objects, arrays)
- Helper functions return typed values (arrays, objects, strings, numbers)
- Null returns used for conditional rendering (e.g., `if (!faqs) return null`)

**Example:**
```typescript
export default function BlogCategoryFilter({ posts }: BlogCategoryFilterProps) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.serviceType === active);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return ( /* JSX */ );
}
```

## Module Design

**Exports:**
- Default exports for React components (e.g., `export default function ContactForm()`)
- Named exports for utilities, types, and constants (e.g., `export interface BlogFrontmatter`, `export function getAllBlogPosts()`)
- Type-only imports where needed (e.g., `import type { Metadata }`)

**Barrel Files:**
- Not used; imports target specific files directly
- Example: `import { Timeline } from "@/components/ui/timeline"` (not a barrel export)

**Module Organization:**
- Data declarations at top (constants, interfaces)
- Helper functions in middle
- Main export at bottom
- Example from `page.tsx`:
  ```typescript
  /* ───── METADATA ───── */
  export const metadata: Metadata = { ... }

  /* ───── DATA ───── */
  const services = [ ... ]
  const serviceIcons: Record<string, React.ReactNode> = { ... }

  /* ───── COMPONENT ───── */
  export default function Page() { ... }
  ```

## Client vs. Server Separation

**"use client" directive:**
- Added to components with state or event handlers (e.g., `ContactForm.tsx`, `Header.tsx`, `BlogCategoryFilter.tsx`)
- Never added to page components unless they have interactive state
- Server components used for static content and data fetching (default behavior)

**Example:**
```typescript
"use client";  // Only when using useState, useRef, event handlers, useEffect

import { useState } from "react";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  // ...
}
```

## CSS & Styling

**Framework:** Tailwind CSS 4 via `@tailwindcss/postcss`

**Patterns:**
- Utility-first approach: classes directly applied to elements
- Brand colors used throughout: `bg-brand-gold`, `text-brand-black`, `bg-brand-gray-50`
- Responsive design with `sm:`, `md:`, `lg:` breakpoints
- Shadow utilities: `shadow-sm`, `shadow-md`, `shadow-black/[0.04]`
- No CSS files outside `globals.css` (all styling via Tailwind utilities)

**Example:**
```typescript
<button
  className="w-full bg-brand-gold hover:bg-brand-gold-dark text-brand-black
    font-bold py-3.5 rounded-xl transition-colors text-lg disabled:opacity-60"
/>
```

---

*Convention analysis: 2026-04-01*
