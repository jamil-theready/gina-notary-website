# Deferred Items — Phase 01: Critical Infrastructure

## Pre-existing Issues (Out of Scope)

### Lint Error: Confetti.tsx setState in effect
- **File:** `src/components/Confetti.tsx:32`
- **Error:** `react-hooks/set-state-in-effect` — Calling setState() directly within an effect
- **Discovered during:** Task 1 (01-02)
- **Status:** Pre-existing before this plan. Not introduced by any changes in this phase.
- **Recommendation:** Fix in a future maintenance pass. Call setState inside an initializer or wrap with `startTransition`.

### Lint Warnings: `<img>` instead of `<Image />`
- **Files:** `blog/[slug]/page.tsx`, `thank-you/page.tsx`, `BlogCategoryFilter.tsx`, `TableOfContents.tsx`
- **Discovered during:** Task 1 (01-02)
- **Status:** Pre-existing. Will be addressed in Phase 02 (High SEO issues / image optimization).

### Lint Warning: Unused import in timeline.tsx
- **File:** `src/components/ui/timeline.tsx:3`
- **Warning:** `useMotionValueEvent` is defined but never used
- **Status:** Pre-existing. Not in scope for SEO remediation.
