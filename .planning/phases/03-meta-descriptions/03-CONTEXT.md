# Phase 3: Meta Descriptions - Context

**Gathered:** 2026-04-01
**Status:** Ready for planning
**Mode:** Auto-generated (infrastructure phase — no user-facing decisions)

<domain>
## Phase Boundary

Every page has a meta description between 150-160 characters — no overlength or stub descriptions. Requirements: META-01 through META-09.

Specific fixes needed:
- META-01: About page desc too long (167 chars) → trim to <=160
- META-02: Service areas landing desc too long (179 chars) → trim to <=160
- META-03: Services landing desc too long (170 chars) → trim to <=160
- META-04: Legal/personal service desc too long (174 chars) → trim to <=160
- META-05: Service area meta descriptions too short (94-139 chars) → expand to >=150
- META-06: Blog list page desc too short (135 chars) → expand to >=150
- META-07: Contact page desc too short (142 chars) → expand to >=150
- META-08: Spanish notary service desc too short (124 chars) → expand to >=150
- META-09: Translation service desc too short (140 chars) → expand to >=150

</domain>

<decisions>
## Implementation Decisions

### Claude's Discretion
All implementation choices are at Claude's discretion — pure infrastructure phase. Maintain keyword-rich, compelling descriptions while hitting the 150-160 char sweet spot.

</decisions>

<code_context>
## Existing Code Insights

### Key Files
- `src/app/about/page.tsx` — About page metadata
- `src/app/service-areas/page.tsx` — Service areas landing metadata
- `src/app/notary-services/page.tsx` — Services landing metadata
- `content/services/legal-personal.md` — Legal/personal service frontmatter
- `src/data/service-areas.ts` — Service area metaDescription fields
- `src/app/blog/page.tsx` — Blog listing metadata
- `src/app/contact/page.tsx` — Contact page metadata
- `content/services/spanish-notary-sacramento.md` — Spanish notary frontmatter
- `content/services/certified-english-spanish-translation-services-in-sacramento-ca.md` — Translation frontmatter

</code_context>

<specifics>
## Specific Ideas

No specific requirements — infrastructure phase.

</specifics>

<deferred>
## Deferred Ideas

None.

</deferred>
