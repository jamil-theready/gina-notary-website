---
phase: 02-schema-structured-data
plan: 01
subsystem: api
tags: [schema, json-ld, structured-data, seo, schema.org]

# Dependency graph
requires: []
provides:
  - localBusinessSchema with postalCode "95814", streetAddress "Mobile Notary", and sameAs social URLs
  - blogPostSchema with optional dateModified parameter
  - breadcrumbSchema() factory returning BreadcrumbList JSON-LD
affects:
  - 02-02 (depends on breadcrumbSchema existing)
  - src/app/layout.tsx (consumes localBusinessSchema)
  - src/app/blog/[slug]/page.tsx (consumes blogPostSchema)

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Schema factory functions return plain objects — no runtime validation, embedded at build time"
    - "breadcrumbSchema uses index+1 for position (1-based ListItem positions)"

key-files:
  created: []
  modified:
    - src/lib/schema.ts

key-decisions:
  - "streetAddress set to 'Mobile Notary' (not a physical storefront — captures nature of business accurately)"
  - "postalCode set to '95814' (Sacramento downtown ZIP used as geo center for mobile business)"
  - "dateModified falls back to datePublished when not provided (backwards-compatible signature change)"

patterns-established:
  - "Schema factories: pure functions, no side effects, return JSON-LD objects"
  - "Optional schema params use TypeScript optional param with fallback in return object"

requirements-completed: [CRIT-04, SCHEMA-01, SCHEMA-02, SCHEMA-03, SCHEMA-05]

# Metrics
duration: 8min
completed: 2026-04-02
---

# Phase 2 Plan 01: Schema.ts Foundation Updates Summary

**localBusinessSchema updated with postalCode/streetAddress/sameAs social URLs; blogPostSchema gains dateModified; breadcrumbSchema() factory added — all 5 exports TypeScript-clean with passing build**

## Performance

- **Duration:** ~8 min
- **Started:** 2026-04-02T03:40:00Z
- **Completed:** 2026-04-02T03:48:00Z
- **Tasks:** 1
- **Files modified:** 1

## Accomplishments

- Added `postalCode: "95814"` and `streetAddress: "Mobile Notary"` to `localBusinessSchema()` address block
- Added `sameAs` array with Instagram, Facebook, and TikTok URLs to `localBusinessSchema()`
- Extended `blogPostSchema()` with optional `dateModified` parameter (falls back to `datePublished`)
- Added new `breadcrumbSchema()` factory function returning valid `BreadcrumbList` JSON-LD
- All changes TypeScript-clean — build passes with 44 pages generated

## Task Commits

Each task was committed atomically:

1. **Task 1: Update localBusinessSchema and blogPostSchema in schema.ts** - `ca1f06e` (feat)

**Plan metadata:** _(pending docs commit)_

## Files Created/Modified

- `src/lib/schema.ts` - All JSON-LD schema factory functions — added address fields, sameAs, dateModified, breadcrumbSchema

## Decisions Made

- `streetAddress` set to `"Mobile Notary"` rather than a physical address — accurately reflects the mobile-only business model
- `postalCode: "95814"` chosen as the Sacramento downtown geo center for structured data locality signals
- `dateModified` parameter is optional with fallback to `datePublished` to preserve backward compatibility — existing callers need no changes

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None — build showed temporary retry warnings for slow page generation but all 44 pages completed successfully with exit 0.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- `breadcrumbSchema()` is now exported and ready for plan 02-02 to consume
- All downstream pages importing `localBusinessSchema()` and `blogPostSchema()` will automatically get the corrected schema on next build
- No blockers

---
*Phase: 02-schema-structured-data*
*Completed: 2026-04-02*

## Self-Check: PASSED

- FOUND: src/lib/schema.ts
- FOUND: 02-01-SUMMARY.md
- FOUND: ca1f06e (feat(02-01): update schema.ts with address fields, sameAs, dateModified, breadcrumbSchema)
