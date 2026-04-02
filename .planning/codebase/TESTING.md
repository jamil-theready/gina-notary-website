# Testing Patterns

**Analysis Date:** 2026-04-01

## Test Framework

**Status:** Not detected

**Runner:** Not configured
- No Jest config (`jest.config.*` files)
- No Vitest config (`vitest.config.*` files)
- No test scripts in `package.json` (only `dev`, `build`, `start`, `lint`)

**Assertion Library:** Not detected

**Run Commands:**
- No test commands available
- Linting only: `npm run lint`

## Test File Organization

**Status:** No test files found

**Search Results:**
- Zero `.test.ts`, `.test.tsx`, `.spec.ts`, `.spec.tsx` files in `src/` directory
- No `__tests__/` directories
- No test fixtures or factories

## Test Structure

**Pattern:** Not applicable (no tests)

## Mocking

**Status:** Not implemented

**Framework:** Not configured

## Fixtures and Factories

**Status:** Not used

**Test Data:** No dedicated test data files

## Coverage

**Requirements:** Not enforced
- No coverage configuration
- No coverage thresholds

## Test Types

**Unit Tests:** Not implemented

**Integration Tests:** Not implemented

**E2E Tests:** Not implemented

## Known Testing Gaps

**Frontend Components with State:**
- `src/components/ContactForm.tsx` - Form submission with captcha verification
  - Needs unit tests for form state management
  - Needs tests for captcha token handling
  - Needs error handling verification

- `src/components/Header.tsx` - Navigation with dropdown menus
  - Needs tests for mobile menu state
  - Needs tests for dropdown toggle and keyboard navigation (Escape key)

- `src/components/BlogCategoryFilter.tsx` - Category filtering and post filtering
  - Needs tests for category button state
  - Needs tests for post filtering logic

- `src/components/Confetti.tsx` - Animated particles with useEffect
  - Needs tests for particle generation
  - Needs tests for cleanup and state updates

**Markdown & Content Processing:**
- `src/lib/content.ts` - File reading, markdown parsing, HTML generation
  - Needs unit tests for `getAllBlogPosts()`, `getServiceBySlug()`, `getAllServices()`
  - Needs tests for markdown to HTML conversion with ID generation
  - Needs tests for heading extraction and slug generation

**Schema Generation:**
- `src/lib/schema.ts` - JSON-LD schema generation
  - Needs unit tests to verify schema structure for LocalBusiness, Service, FAQ, and Article types

**Utility Functions:**
- `src/app/blog/[slug]/page.tsx` - `calcReadTime()` function
  - Simple calculation function that could be unit tested
  - Currently untested

**Data Fetching:**
- Dynamic slug-based pages (`blog/[slug]/page.tsx`, `notary-services/[slug]/page.tsx`)
  - Needs error boundary tests for missing content
  - `generateStaticParams()` should be verified to generate all expected routes

## Recommended Testing Strategy

**Priority Order:**

1. **High Priority (Content & Schema):**
   - `src/lib/content.ts` - Critical for site functionality, many functions, complex logic
   - `src/lib/schema.ts` - Verifies JSON-LD correctness for SEO

2. **Medium Priority (Form & State):**
   - `src/components/ContactForm.tsx` - User-facing form with external API
   - `src/components/BlogCategoryFilter.tsx` - Filtering logic affects UX

3. **Low Priority (Display & Animation):**
   - `src/components/Confetti.tsx` - Visual effect only
   - `src/components/ShareButtons.tsx` - Share functionality (external links)

**Suggested Framework:**
- **Vitest** + **React Testing Library** for component testing
- **Vitest** for utility/library testing
- Rationale: Fast, modern, excellent TypeScript support, aligns with Next.js ecosystem

**Configuration Skeleton:**
```typescript
// vitest.config.ts (suggested)
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [],
  }
})
```

## Current Code Patterns to Test

**Form Submission (ContactForm.tsx):**
```typescript
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  if (!hcaptchaToken) {
    alert("Please complete the captcha verification.");
    return;
  }

  setSending(true);
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      router.push("/thank-you");
    } else {
      alert("Something went wrong...");
      setSending(false);
    }
  } catch {
    alert("Something went wrong...");
    setSending(false);
  }
}
```

Test would verify:
- Captcha token requirement
- Loading state changes
- Fetch call with correct payload
- Redirect on success
- Error alerts on failure
- Error state reset

**Content Loading (content.ts):**
```typescript
export function getAllBlogPosts(): (BlogFrontmatter & { content: string })[] {
  const files = getContentFiles("blog");
  return files
    .map((filename) => {
      const filePath = path.join(contentDirectory, "blog", filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      return { ...(data as BlogFrontmatter), content };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
```

Test would verify:
- Files are read correctly
- YAML frontmatter is parsed
- Posts are sorted by date (newest first)
- Return type matches interface

**Heading Extraction (content.ts):**
```typescript
export function extractHeadings(markdown: string): { text: string; id: string }[] {
  const lines = markdown.split("\n");
  const headings: { text: string; id: string }[] = [];
  for (const line of lines) {
    const match = line.match(/^## (.+)/);
    if (match) {
      const text = match[1].trim();
      headings.push({ text, id: slugifyHeading(text) });
    }
  }
  return headings;
}
```

Test would verify:
- Extracts only `##` (h2) headings
- Generates correct slug IDs from heading text
- Handles special characters in headings

---

*Testing analysis: 2026-04-01*
