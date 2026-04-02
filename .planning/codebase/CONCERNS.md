# Codebase Concerns

**Analysis Date:** 2026-04-01

## Security Issues

**Hardcoded API Key in ContactForm:**
- Issue: Web3Forms access key is hardcoded directly in client-side source code
- Files: `src/components/ContactForm.tsx` (line 25)
- Current code: `formData.append("access_key", "5e8e1438-0329-46cf-8df5-31ef556220bf");`
- Impact: This key is publicly exposed in production bundle and Git history. Anyone with this key can submit forms, spam the contact email, potentially rack up usage charges if Web3Forms has rate limits, and could impersonate legitimate form submissions.
- Risk level: **CRITICAL** - Financial and reputation risk
- Fix approach:
  1. Rotate the Web3Forms access key immediately
  2. Move to environment variable: `process.env.NEXT_PUBLIC_WEB3FORMS_KEY` (or similar)
  3. Never commit secrets to Git - add to .env.local and .gitignore
  4. If budget allows, consider server-side form endpoint instead of direct client submission

**HCaptcha Site Key Exposed:**
- Issue: HCaptcha public site key is hardcoded in ContactForm
- Files: `src/components/ContactForm.tsx` (line 133)
- Current code: `sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"`
- Impact: While HCaptcha site keys are meant to be public (they're frontend-facing), having them hardcoded prevents easy rotation. If the key is compromised, it requires code changes and redeploy.
- Fix approach: Move to environment variable `NEXT_PUBLIC_HCAPTCHA_SITEKEY`

## Error Handling Gaps

**ContactForm Error Handling is Silent:**
- Issue: Form submission errors use generic `alert()` messages without logging
- Files: `src/components/ContactForm.tsx` (lines 40-43)
- Current pattern:
  ```typescript
  } catch {
    alert("Something went wrong. Please call (415) 948-9967 instead.");
    setSending(false);
  }
  ```
- Impact: No visibility into what went wrong. Network errors, API failures, invalid responses are all treated identically. Makes debugging production issues impossible.
- Fix approach:
  1. Log errors to console or error tracking service
  2. Differentiate error messages based on error type (network vs API vs validation)
  3. Consider implementing error boundary for React errors

**No Error Pages Configured:**
- Issue: No `error.tsx` or `not-found.tsx` files in app directory
- Files: Missing from `src/app/`
- Impact: Generic Next.js error pages shown on 404s and crashes. No brand consistency or helpful navigation back to site.
- Fix approach: Create `src/app/not-found.tsx` for 404 handling, consider `src/app/error.tsx` for unhandled errors

**Blog Post with Missing Slug:**
- Issue: `getBlogPostBySlug()` returns null if slug not found, but some pages don't handle this
- Files: `src/app/blog/[slug]/page.tsx` handles it (lines 62-73), but pattern could be more robust
- Impact: If a blog URL is changed without redirects, users hit a generic "Article Not Found" with no clear navigation
- Fix approach: Add sitemap redirects or implement proper redirect strategy for renamed posts

## XSS & Content Security Vulnerabilities

**Extensive dangerouslySetInnerHTML Usage:**
- Issue: Multiple uses of `dangerouslySetInnerHTML` for JSON-LD schemas and HTML content
- Files:
  - `src/app/layout.tsx` (line 92-94) - localBusinessSchema
  - `src/app/page.tsx` - faqSchema
  - `src/app/blog/[slug]/page.tsx` (lines 91-100, 165, 188) - blogPostSchema and contentHtml
  - `src/app/contact/page.tsx` - faqSchema
  - `src/app/service-areas/[slug]/page.tsx` (lines 93, 98) - schemas
  - `src/app/notary-services/[slug]/page.tsx` (lines 102, 110, 140) - schemas and contentHtml
- Current approach: All uses are with JSON.stringify() or remark-generated HTML
- Risk level: **MEDIUM** - Currently safe because content is controlled (JSON schemas), but risky pattern
- Fix approach:
  1. For JSON-LD schemas: Safe as-is, but consider using Next.js structured data approach
  2. For markdown HTML (`contentHtml`): Ensure remark-html is configured to sanitize
  3. Add CSP headers to prevent inline script injection
  4. Document why each `dangerouslySetInnerHTML` is necessary

**Markdown HTML Rendering:**
- Issue: Blog content converted to HTML via remark-html without explicit sanitization
- Files: `src/lib/content.ts` (line 111) - `remark().use(gfm).use(html).process(markdown)`
- Impact: If blog markdown is user-editable or syndicated from untrusted sources, could allow XSS. Currently safe if only Gina edits content via CMS.
- Fix approach:
  1. If keeping markdown content non-user-editable: add comment documenting this assumption
  2. If user-editing added: integrate `remark-sanitize` or similar
  3. Consider using `dangerously-set-inner-html` only for trusted HTML

## Performance Issues

**Lighthouse Report Exists But Outdated:**
- Issue: `lighthouse-report.json` present (1MB file from March 20) but never referenced
- Files: `lighthouse-report.json` at project root
- Impact: No visible performance tracking. Report is stale and not integrated into CI/CD.
- Fix approach:
  1. Run Lighthouse in CI on every deployment
  2. Delete or archive old reports
  3. Set performance budgets (e.g., <90 CLS, <2.5 LCP)

**No Image Optimization Check:**
- Issue: `next.config.ts` disables Next.js image optimization: `unoptimized: true`
- Files: `next.config.ts` (line 6)
- Reason: Necessary for static export, but means images aren't optimized
- Impact: Large images slow down pages. No responsive image generation.
- Current state: Acceptable for static site, but should monitor image sizes
- Fix approach:
  1. Ensure all images are pre-optimized (run through squoosh or similar)
  2. Document image optimization process for CMS uploads
  3. Consider using responsive image sizes in Tailwind (different widths for different breakpoints)

**No Bundle Size Tracking:**
- Issue: No bundle analysis configured
- Files: No `@next/bundle-analyzer` or similar in package.json
- Impact: Can't detect when dependencies or code bloat the bundle
- Fix approach: Add `@next/bundle-analyzer` for production builds

## Testing Gaps

**Zero Test Coverage:**
- Issue: No test files found in codebase
- Files: No `*.test.ts`, `*.test.tsx`, `*.spec.ts`, `*.spec.tsx` files
- Impact: Changes to critical paths (form submission, content rendering, schema generation) have no automated coverage. Hard to refactor safely.
- Priority: **HIGH** - At minimum, test:
  - Contact form submission and error states
  - Markdown to HTML rendering and XSS prevention
  - Service area and blog content loading
  - Schema generation and JSON validity
- Fix approach:
  1. Set up test framework (Vitest recommended for Next.js)
  2. Add unit tests for content loading functions
  3. Add integration tests for form submission
  4. Target 70%+ coverage for src/lib and src/components

## Type Safety Issues

**TypeScript Config Non-Strict in Key Area:**
- Issue: `skipLibCheck: true` in tsconfig.json (line 6) skips type checking of dependencies
- Files: `tsconfig.json`
- Impact: Type errors in node_modules aren't caught. Less safe refactoring.
- Severity: **LOW** - This is standard practice, but means some type safety is traded for speed
- Fix approach: Keep as-is for build speed, but run `tsc --noEmit` in CI

**Form Data Types Loose:**
- Issue: `ContactForm.tsx` uses `React.FormEvent<HTMLFormElement>` but FormData is untyped
- Files: `src/components/ContactForm.tsx` (line 13, 23-24)
- Impact: Field names and values are strings without validation. Easy to misspell form field names without catching errors.
- Fix approach:
  1. Create typed schema for form fields
  2. Validate form data before submission (zod or similar)
  3. Type the FormData entries

## Dependency Concerns

**No Lock File in Git:**
- Issue: `package-lock.json` is tracked (285MB file) - huge Git overhead
- Files: `package-lock.json`
- Impact: Slow clones, large diffs when dependencies change
- Standard practice: Add to `.gitignore` or use `npm ci` with lock file excluded
- Fix approach: Consider whether lock file should be in .gitignore

**No Patch/Minor Update Strategy:**
- Issue: package.json uses exact versions with `"16.1.6"` (good) but no automated dependency updates
- Files: `package.json`
- Impact: Next.js, React, Tailwind updates are manual. Security patches for dependencies may be missed.
- Fix approach:
  1. Set up Dependabot or similar for automated PRs
  2. Test major updates (Next.js 17.x when released) before deploying

## Missing Critical Features

**No Environment File Validation:**
- Issue: No validation that required environment variables exist at runtime
- Files: Code references `process.env.NEXT_PUBLIC_WEB3FORMS_KEY` (not yet, but should)
- Impact: If env var is missing in production, form silently fails
- Fix approach: Create `lib/env.ts` that validates all required vars at build/runtime

**No Rate Limiting on Form:**
- Issue: Contact form has no client-side rate limiting
- Files: `src/components/ContactForm.tsx`
- Impact: Users can spam the form. Honeypot helps but doesn't prevent rapid submission.
- Fix approach: Add cooldown timer (e.g., disabled for 5sec after submit, or localStorage check)

**No Form Validation**
- Issue: Contact form has HTML5 required attributes but no JS-side validation
- Files: `src/components/ContactForm.tsx` (line 64, 76, 119)
- Impact: Can submit forms with invalid email, empty message if JS disabled or form library fails
- Fix approach: Validate with Zod schema before fetch attempt

**No Analytics for Form Success/Failure:**
- Issue: Form submissions don't track GA events
- Files: `src/components/ContactForm.tsx`
- Impact: Can't see how many leads are actually converting (form vs phone call)
- Fix approach: Add GA event on successful submit and error states

## Fragile Code Areas

**Content Loading Assumes Files Exist:**
- Issue: `getAllBlogPosts()` and `getAllServices()` read from `/content/` directory without error handling
- Files: `src/lib/content.ts` (lines 43-46, 50-54)
- Current code:
  ```typescript
  function getContentFiles(subdir: string): string[] {
    const dir = path.join(contentDirectory, subdir);
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  }
  ```
- Impact: If directory doesn't exist, returns empty array (safe). But if `/content/blog/` exists but markdown files are corrupted, `gray-matter` parsing might fail silently or throw unhandled error.
- Severity: **MEDIUM**
- Fix approach:
  1. Wrap `fs.readFileSync` in try-catch in `getAllServices()` and `getAllBlogPosts()`
  2. Log parse errors instead of silently failing
  3. Return fallback content or error message if parsing fails

**Service Area Data Not Validated:**
- Issue: `src/data/service-areas.ts` (500 lines) is hardcoded data with no schema validation
- Files: `src/data/service-areas.ts`
- Impact: If structure changes, type checking doesn't catch it. Easy to add invalid FAQs or missing required fields.
- Fix approach:
  1. Create Zod schema for ServiceArea type
  2. Validate data structure at import time
  3. Add TypeScript interfaces to ensure consistency

**Header Dropdown State Can Get Out of Sync:**
- Issue: `Header.tsx` manages dropdown open state with `useState` and click handlers
- Files: `src/components/Header.tsx` (lines 110-121)
- Impact: If multiple Escape keys pressed or click handlers race, state could mismatch UI. Mobile/desktop state can get confused if window resized while menu open.
- Severity: **LOW** - mostly UX glitch, not data loss
- Fix approach:
  1. Consider using React Hook Form or Headless UI for dropdown state management
  2. Add test cases for keyboard navigation
  3. Handle window resize events to close menu

## Accessibility Issues

**Keyboard Navigation Missing Some Interactive Elements:**
- Issue: Services dropdown in Header uses `onMouseEnter` without corresponding keyboard handling
- Files: `src/components/Header.tsx` (lines 110-121)
- Current code: Has `aria-expanded` and `aria-haspopup`, but relies on mouse events
- Impact: Keyboard-only users can't access Services dropdown without Tab to button and Space
- Fix approach:
  1. Add `onKeyDown` handlers for Enter/Space and Arrow keys
  2. Focus management: move focus into dropdown when opened
  3. Test with keyboard navigation only

**Image Alt Text:**
- Issue: Spot-check found images with alt text, but need systematic audit
- Files: Throughout components and pages
- Current: `<Image ... alt="Gina Gonzalez, Sacramento mobile notary public" .../>` - good examples exist
- Recommendation: Audit all `<Image>` and `<img>` tags to ensure alt text is descriptive and not empty

**Color Contrast on Text:**
- Issue: Not audited, but gold on white (`--brand-gold: #f9cf01`) might have contrast issues
- Files: `src/app/globals.css` color definitions
- Recommendation: Run Lighthouse accessibility audit or WAVE checker to verify WCAG AA compliance

**Form Labels Properly Associated:**
- Issue: Checked and found proper use of `htmlFor` in ContactForm
- Files: `src/components/ContactForm.tsx`
- Status: Good - all inputs have `<label htmlFor="id">` associations

## Documentation & Maintainability

**No Inline Comments for Complex Logic:**
- Issue: Schema generation, markdown rendering, and form submission lack explanatory comments
- Files: `src/lib/schema.ts`, `src/lib/content.ts`, `src/components/ContactForm.tsx`
- Impact: Future maintainers (or Gina herself) won't understand why certain patterns are used
- Fix approach:
  1. Add JSDoc comments to exported functions
  2. Explain why Web3Forms is used and how to rotate keys
  3. Document markdown sanitization approach

**No CHANGELOG:**
- Issue: Git history exists but no human-readable CHANGELOG
- Files: None
- Impact: Hard to review what changed between versions
- Fix approach: Maintain CHANGELOG.md for all updates

**Deployment Steps Unclear:**
- Issue: Build outputs to `/out/` but no documented deployment instructions
- Files: `next.config.ts` (line 4)
- Impact: Hard to know if build succeeded or how to deploy to Cloudflare Pages
- Fix approach: Document deployment process (build → upload /out/ to Cloudflare)

## Build & Deployment Concerns

**Static Export Limitations Not Documented:**
- Issue: `output: "export"` in next.config.ts means no API routes or dynamic rendering
- Files: `next.config.ts`
- Impact: If Gina needs dynamic features (e.g., real-time availability calendar), would require restructuring
- Current state: Good for static site, but should document this assumption
- Fix approach: Add comment explaining why static export is chosen

**Trailing Slashes Enforced:**
- Issue: `trailingSlash: true` in next.config.ts
- Files: `next.config.ts` (line 8)
- Impact: All URLs must have trailing slash. Inconsistency could break canonicals or links.
- Current state: Schema URLs and links appear to respect this, but worth verifying
- Fix approach: Audit all internal links and schema URLs to ensure trailing slashes

**No Environment Variable File Checked In:**
- Issue: No `.env.example` or `.env.local.example` to show what env vars are needed
- Files: Missing
- Impact: New developers or deployment pipelines won't know required variables
- Fix approach: Create `.env.example` with all required NEXT_PUBLIC_* variables

## Second-Order Risks

**CMS Integration Not Audited:**
- Issue: Decap CMS with GitHub backend is mentioned in MASTER.md but config not reviewed
- Files: Likely in `.claude/` or git-tracked but not in src/
- Impact: If CMS is compromised, attacker can modify all content
- Fix approach: Verify GitHub token scopes, consider branch protection rules for CMS updates

**Google Analytics Not Verified:**
- Issue: GA4 ID hardcoded in layout.tsx (line 99-106)
- Files: `src/app/layout.tsx`
- Code: `G-4CP7XECRCV`
- Impact: If this ID is wrong or shared publicly, analytics won't track correctly
- Fix approach: Move to environment variable, verify tracking is working

---

## Priority Triage

### Critical (Fix immediately)
1. **Hardcoded API key** - Security breach in production
2. **Form validation missing** - Invalid submissions accepted

### High (Fix this sprint)
1. **Error handling improved** - Silent failures hard to debug
2. **Error pages added** - Brand consistency and UX
3. **Test coverage for forms** - Prevent regressions

### Medium (Fix next sprint)
1. **Content type validation** - Prevent data structure mismatches
2. **Environment validation** - Catch config errors early
3. **Keyboard navigation** - Accessibility compliance

### Low (Tech debt, future)
1. **Bundle analysis** - Monitor for bloat
2. **Performance monitoring** - Track LCP/CLS over time
3. **Changelog** - Document changes

*Concerns audit: 2026-04-01*
