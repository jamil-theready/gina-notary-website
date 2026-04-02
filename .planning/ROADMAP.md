# Roadmap: Gina Gonzalez Notary — SEO Remediation

## Overview

This roadmap executes a comprehensive SEO remediation for ginagonzaleznotary.com. The site has a solid foundation but carries a backlog of technical issues from a prior audit: broken infrastructure (404, competing sitemaps), inconsistent schema, bloated and undersized meta descriptions, stale copy, an unoptimized hero image, and minor config gaps. Phases are ordered from highest-risk/highest-impact to lowest, so each phase ships independently verifiable improvements.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Critical Infrastructure** - Fix 404 page, eliminate competing sitemaps, exclude noindex pages
- [ ] **Phase 2: Schema & Structured Data** - Standardize all JSON-LD, add breadcrumbs, remove duplicates
- [ ] **Phase 3: Meta Descriptions** - Trim overlength and expand underlength meta descriptions sitewide
- [ ] **Phase 4: OG Tags, Twitter Cards & Titles** - Add page-specific OG tags, Twitter card image, trim long titles
- [ ] **Phase 5: Homepage Copy Fixes** - Align metrics, fix geo references from "West Sacramento" to "Sacramento"
- [ ] **Phase 6: Service Area Content Depth** - Bulk up thin service area pages with 3-4 unique FAQs each
- [ ] **Phase 7: Images & Assets** - Convert hero to WebP, remove orphaned images
- [ ] **Phase 8: Accessibility & Config** - Fix FAQ aria-expanded, update robots.txt, add blog keywords frontmatter

## Phase Details

### Phase 1: Critical Infrastructure
**Goal**: The site has a functional 404 page and a single, correctly scoped sitemap that search engines can trust
**Depends on**: Nothing (first phase)
**Requirements**: CRIT-01, CRIT-02, CRIT-03
**Success Criteria** (what must be TRUE):
  1. Visiting a non-existent URL (e.g., /does-not-exist) shows a branded 404 page with a link back to the homepage
  2. Only one sitemap system exists — next-sitemap config and package are removed, App Router sitemap.ts is the sole source
  3. The sitemap does not contain /thank-you/, /notary-resources/, or /sitemap.xml/ URLs
**Plans**: TBD

### Phase 2: Schema & Structured Data
**Goal**: All JSON-LD schema is consistent, complete, deduplicated, and includes breadcrumbs across all page types
**Depends on**: Phase 1
**Requirements**: CRIT-04, SCHEMA-01, SCHEMA-02, SCHEMA-03, SCHEMA-04, SCHEMA-05, SCHEMA-06
**Success Criteria** (what must be TRUE):
  1. LocalBusiness schema in layout.tsx includes postalCode, streetAddress, and a sameAs array with social URLs
  2. Every LocalBusiness schema instance uses name "Gina Gonzalez Notary" and priceRange "$$" — no variation
  3. Blog posts, service pages, and service area pages each render a BreadcrumbList JSON-LD block
  4. blogPostSchema includes a dateModified field
  5. Blog, contact, service-areas, and notary-services pages contain no standalone LocalBusiness schema (global layout handles it)
**Plans**: TBD

### Phase 3: Meta Descriptions
**Goal**: Every page has a meta description between 150-160 characters — no overlength or stub descriptions
**Depends on**: Phase 2
**Requirements**: META-01, META-02, META-03, META-04, META-05, META-06, META-07, META-08, META-09
**Success Criteria** (what must be TRUE):
  1. About, service-areas landing, services landing, and legal/personal service pages each have a meta description of <=160 characters
  2. Each service area page, blog list page, contact page, Spanish notary page, and translation service page has a meta description of >=150 characters
  3. No meta description across the site exceeds 160 characters or falls below 150 characters
**Plans**: TBD
**UI hint**: yes

### Phase 4: OG Tags, Twitter Cards & Titles
**Goal**: Every major page has page-specific Open Graph tags, the Twitter card has a real image URL, and no title exceeds 60 characters
**Depends on**: Phase 3
**Requirements**: META-10, META-11, META-12
**Success Criteria** (what must be TRUE):
  1. About, Contact, Blog listing, Service Areas, and Services pages each have unique og:title, og:description, and og:url tags
  2. The global layout metadata includes a populated twitterImages URL (not placeholder)
  3. All blog post titles rendered in <title> tags are 60 characters or fewer
**Plans**: TBD
**UI hint**: yes

### Phase 5: Homepage Copy Fixes
**Goal**: Homepage copy is geographically accurate and metrics are consistent with the rest of the site
**Depends on**: Phase 4
**Requirements**: CONT-01, CONT-02, CONT-03
**Success Criteria** (what must be TRUE):
  1. Homepage displays "6,000+" (not "1K+") in the metrics/stats section
  2. The hero paragraph and FAQ answers reference "Sacramento" broadly — "West Sacramento" no longer appears in public-facing homepage copy
**Plans**: TBD
**UI hint**: yes

### Phase 6: Service Area Content Depth
**Goal**: Every service area page has at least 3 unique, city-specific FAQs so thin pages are no longer flagged as low-quality content
**Depends on**: Phase 5
**Requirements**: CONT-04
**Success Criteria** (what must be TRUE):
  1. Every service area page (all 15+ cities) renders at least 3 FAQ items
  2. FAQ content for thin pages (e.g., Auburn) is city-specific — not copy-pasted generic text from Sacramento
**Plans**: TBD
**UI hint**: yes

### Phase 7: Images & Assets
**Goal**: The hero image is served in WebP format and the public/ directory contains no orphaned/unused image files
**Depends on**: Phase 6
**Requirements**: PERF-01, PERF-02
**Success Criteria** (what must be TRUE):
  1. The homepage hero image is served as a .webp file (not .png), confirmed in browser DevTools network tab
  2. Running a file-listing of public/ shows no image files that are not referenced by any source file
**Plans**: TBD

### Phase 8: Accessibility & Config
**Goal**: The FAQ accordion is screen-reader accessible, robots.txt points to the canonical non-www domain, and blog posts carry keywords in frontmatter
**Depends on**: Phase 7
**Requirements**: A11Y-01, CONF-01, CONF-02
**Success Criteria** (what must be TRUE):
  1. Inspecting an open FAQ accordion button in DevTools shows aria-expanded="true"; a closed button shows aria-expanded="false"
  2. robots.txt Sitemap directive references https://ginagonzaleznotary.com (non-www canonical)
  3. Every blog post .md file includes a keywords field in frontmatter populated from its existing tags
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Critical Infrastructure | 0/TBD | Not started | - |
| 2. Schema & Structured Data | 0/TBD | Not started | - |
| 3. Meta Descriptions | 0/TBD | Not started | - |
| 4. OG Tags, Twitter Cards & Titles | 0/TBD | Not started | - |
| 5. Homepage Copy Fixes | 0/TBD | Not started | - |
| 6. Service Area Content Depth | 0/TBD | Not started | - |
| 7. Images & Assets | 0/TBD | Not started | - |
| 8. Accessibility & Config | 0/TBD | Not started | - |
