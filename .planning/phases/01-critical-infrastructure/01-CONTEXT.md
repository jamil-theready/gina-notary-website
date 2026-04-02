# Phase 1: Critical Infrastructure - Context

**Gathered:** 2026-04-01
**Status:** Ready for planning
**Mode:** Auto-generated (infrastructure phase — no user-facing decisions)

<domain>
## Phase Boundary

The site has a functional 404 page and a single, correctly scoped sitemap that search engines can trust. Requirements: CRIT-01 (custom 404 page), CRIT-02 (remove next-sitemap, keep App Router sitemap.ts), CRIT-03 (exclude noindex pages from sitemap).

</domain>

<decisions>
## Implementation Decisions

### Claude's Discretion
All implementation choices are at Claude's discretion — pure infrastructure phase. Use ROADMAP phase goal, success criteria, and codebase conventions to guide decisions.

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `src/app/layout.tsx` — global layout with header/footer
- `src/components/Header.tsx` — navigation component
- `src/components/Footer.tsx` — footer with CTA

### Established Patterns
- App Router with static export
- Tailwind CSS v4 for styling
- Brand colors: gold (#f9cf01), black (#0a0a0a)

### Integration Points
- `src/app/sitemap.ts` — existing App Router sitemap with per-page priorities
- `next-sitemap.config.js` — competing sitemap generator (to be removed)
- `next.config.ts` — static export config

</code_context>

<specifics>
## Specific Ideas

No specific requirements — infrastructure phase. Refer to ROADMAP phase description and success criteria.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>
