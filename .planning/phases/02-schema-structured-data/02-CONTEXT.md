# Phase 2: Schema & Structured Data - Context

**Gathered:** 2026-04-01
**Status:** Ready for planning
**Mode:** Auto-generated (infrastructure phase — no user-facing decisions)

<domain>
## Phase Boundary

All JSON-LD schema is consistent, complete, deduplicated, and includes breadcrumbs across all page types. Requirements: CRIT-04, SCHEMA-01 through SCHEMA-06.

</domain>

<decisions>
## Implementation Decisions

### Claude's Discretion
All implementation choices are at Claude's discretion — pure infrastructure phase. Use ROADMAP phase goal, success criteria, and codebase conventions to guide decisions.

Key specifics from audit:
- LocalBusiness schema in `src/lib/schema.ts` needs postalCode and streetAddress added
- Business name must be standardized to "Gina Gonzalez Notary" everywhere
- priceRange must be "$$" consistently (service area pages use "$", global uses "$$")
- sameAs array should include social URLs from footer (Instagram, Facebook, TikTok)
- BreadcrumbList JSON-LD needs to be added to blog posts, service pages, service area pages
- blogPostSchema needs dateModified field
- Remove duplicate localBusinessSchema() calls from blog/page.tsx, contact/page.tsx, service-areas/page.tsx, notary-services/page.tsx

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/lib/schema.ts` — all JSON-LD schema generators
- `src/components/Footer.tsx` — has social media URLs

### Established Patterns
- Schema functions return objects, injected via `<script type="application/ld+json">`
- Each page imports schema functions and renders them in the page component

### Integration Points
- `src/app/layout.tsx` — global LocalBusiness schema injection
- `src/app/blog/[slug]/page.tsx` — blog post schema
- `src/app/notary-services/[slug]/page.tsx` — service page schema
- `src/app/service-areas/[slug]/page.tsx` — service area schema

</code_context>

<specifics>
## Specific Ideas

No specific requirements — infrastructure phase.

</specifics>

<deferred>
## Deferred Ideas

None.

</deferred>
