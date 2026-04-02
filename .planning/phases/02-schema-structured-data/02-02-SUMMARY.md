---
phase: 02-schema-structured-data
plan: 02
subsystem: api
tags: [schema, json-ld, structured-data, seo, breadcrumbs, schema.org]

# Dependency graph
requires:
  - phase: 02-01
    provides: breadcrumbSchema() factory function in src/lib/schema.ts
provides:
  - All 4 landing pages (blog, contact, service-areas, notary-services) clean of duplicate LocalBusiness schema
  - service-areas/[slug]/page.tsx inline localBusinessSchema const removed; BreadcrumbList added
  - blog/[slug]/page.tsx BreadcrumbList JSON-LD (Home > Blog > Post)
  - notary-services/[slug]/page.tsx BreadcrumbList JSON-LD (Home > Services > Service)
  - service-areas/[slug]/page.tsx BreadcrumbList JSON-LD (Home > Service Areas > City)
affects:
  - Phase 3 (meta descriptions) — no schema changes needed going forward
  - layout.tsx remains sole LocalBusiness schema source for all pages

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "BreadcrumbList injected as first JSON-LD script block in detail page return fragments"
    - "Landing pages carry zero standalone LocalBusiness schema — global layout.tsx is sole source"

key-files:
  created: []
  modified:
    - src/app/blog/page.tsx
    - src/app/contact/page.tsx
    - src/app/service-areas/page.tsx
    - src/app/notary-services/page.tsx
    - src/app/service-areas/[slug]/page.tsx
    - src/app/blog/[slug]/page.tsx
    - src/app/notary-services/[slug]/page.tsx

key-decisions:
  - "Inline localBusinessSchema const in service-areas/[slug] fully removed — global layout.tsx handles it"
  - "BreadcrumbList placed before other schema scripts in return fragment for consistent ordering"

patterns-established:
  - "Detail pages: BreadcrumbList first, then entity-specific schema (blogPostSchema / serviceSchema / faqSchema)"
  - "Landing/listing pages: no standalone LocalBusiness — global layout handles it"

requirements-completed: [SCHEMA-04, SCHEMA-06]

# Metrics
duration: 10min
completed: 2026-04-02
---

# Phase 2 Plan 02: Duplicate Schema Removal and BreadcrumbList Addition Summary

**Removed duplicate LocalBusiness script blocks from 4 landing pages and service-area slug; added BreadcrumbList JSON-LD (3-item Home > parent > current) to all 3 detail page types using the breadcrumbSchema factory from plan 02-01**

## Performance

- **Duration:** ~10 min
- **Started:** 2026-04-02T03:50:00Z
- **Completed:** 2026-04-02T04:00:00Z
- **Tasks:** 3
- **Files modified:** 7

## Accomplishments

- Removed `localBusinessSchema` import and script block from `blog/page.tsx`, `contact/page.tsx`, `service-areas/page.tsx`, and `notary-services/page.tsx` — layout.tsx is now the only source of global LocalBusiness schema
- Removed the inline `const localBusinessSchema = { ... }` object (lines ~52-75) from `service-areas/[slug]/page.tsx` — this block had the wrong business name ("Gina Gonzalez Notary Public") and wrong priceRange ("$"); added BreadcrumbList in its place
- Added BreadcrumbList script block to `blog/[slug]/page.tsx` with Home > Blog > post.title hierarchy using canonicalUrl
- Added BreadcrumbList script block to `notary-services/[slug]/page.tsx` with Home > Services > service.shortTitle||service.title hierarchy
- All 7 files verified clean via grep — `localBusinessSchema` appears only in layout.tsx; `breadcrumbSchema` appears in all 3 detail page types

## Task Commits

Note: This project is not a git repository — no commits were made. File changes are tracked here.

1. **Task 1: Remove duplicate localBusinessSchema from 4 landing pages** — 4 files edited
2. **Task 2: Remove inline LocalBusiness and add BreadcrumbList to service-areas/[slug]/page.tsx** — 1 file edited
3. **Task 3: Add BreadcrumbList to blog/[slug]/page.tsx and notary-services/[slug]/page.tsx** — 2 files edited

## Files Created/Modified

- `src/app/blog/page.tsx` — Removed localBusinessSchema import (line 3) and script block (lines 21-26)
- `src/app/contact/page.tsx` — Removed localBusinessSchema import (line 4) and script block (lines 36-41)
- `src/app/service-areas/page.tsx` — Removed localBusinessSchema import (line 4) and script block (lines 34-39)
- `src/app/notary-services/page.tsx` — Removed localBusinessSchema import (line 4) and script block (lines 66-71)
- `src/app/service-areas/[slug]/page.tsx` — Removed inline localBusinessSchema const (~24 lines) and its script block; added breadcrumbSchema script (Home > Service Areas > area.name)
- `src/app/blog/[slug]/page.tsx` — Added breadcrumbSchema import to schema import line; added BreadcrumbList script block before blogPostSchema block (Home > Blog > post.title using canonicalUrl)
- `src/app/notary-services/[slug]/page.tsx` — Added breadcrumbSchema import to schema import line; added BreadcrumbList script block before serviceSchema block (Home > Services > service.shortTitle||service.title)

## Decisions Made

- The inline `localBusinessSchema` const in `service-areas/[slug]` used wrong business name ("Gina Gonzalez Notary Public" vs correct "Gina Gonzalez Notary") and wrong priceRange ("$" vs "$$") — removal was higher priority than correcting it, since layout.tsx already injects the correct schema globally
- BreadcrumbList positioned as the first JSON-LD script in each detail page return fragment for consistent ordering across page types

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None — all edits matched the exact patterns described in the plan context. Grep verifications passed for all acceptance criteria.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Schema deduplication is complete — layout.tsx is the sole LocalBusiness source for all pages
- All 3 detail page types now emit BreadcrumbList JSON-LD for rich result eligibility
- Phase 3 (Meta Descriptions) can begin immediately — no schema dependencies remain
- No blockers

---
*Phase: 02-schema-structured-data*
*Completed: 2026-04-02*

## Self-Check: PASSED

- FOUND: src/app/blog/page.tsx (no localBusinessSchema)
- FOUND: src/app/contact/page.tsx (no localBusinessSchema)
- FOUND: src/app/service-areas/page.tsx (no localBusinessSchema)
- FOUND: src/app/notary-services/page.tsx (no localBusinessSchema)
- FOUND: src/app/service-areas/[slug]/page.tsx (breadcrumbSchema present, localBusinessSchema absent)
- FOUND: src/app/blog/[slug]/page.tsx (breadcrumbSchema present)
- FOUND: src/app/notary-services/[slug]/page.tsx (breadcrumbSchema present)
- FOUND: .planning/phases/02-schema-structured-data/02-02-SUMMARY.md
