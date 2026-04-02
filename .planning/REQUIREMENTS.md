# Requirements: Gina Gonzalez Notary — SEO Remediation

**Defined:** 2026-04-01
**Core Value:** Every page technically optimized for organic search visibility in Sacramento area

## v1 Requirements

### Critical Fixes

- [ ] **CRIT-01**: Site has a custom 404/not-found page with navigation back to homepage
- [ ] **CRIT-02**: Single sitemap system (App Router sitemap.ts only, next-sitemap removed)
- [ ] **CRIT-03**: Sitemap excludes noindex pages (/thank-you/, /notary-resources/, /sitemap.xml/)
- [ ] **CRIT-04**: LocalBusiness schema includes postalCode and streetAddress

### Schema & Structured Data

- [ ] **SCHEMA-01**: Business name standardized to "Gina Gonzalez Notary" across all schema instances
- [ ] **SCHEMA-02**: priceRange consistent ("$$") across all LocalBusiness schema instances
- [ ] **SCHEMA-03**: LocalBusiness schema includes sameAs array with social profile URLs
- [ ] **SCHEMA-04**: BreadcrumbList JSON-LD schema added to blog posts, service pages, and service area pages
- [ ] **SCHEMA-05**: blogPostSchema includes dateModified field
- [ ] **SCHEMA-06**: Duplicate LocalBusiness schema removed from blog, contact, service-areas, and notary-services pages (keep only global in layout.tsx)

### Meta & OG Tags

- [ ] **META-01**: About page meta description trimmed to <=160 characters
- [ ] **META-02**: Service areas landing page meta description trimmed to <=160 characters
- [ ] **META-03**: Services landing page meta description trimmed to <=160 characters
- [ ] **META-04**: Legal/personal service meta description trimmed to <=160 characters
- [ ] **META-05**: Service area meta descriptions expanded to >=150 characters
- [ ] **META-06**: Blog list page meta description expanded to >=150 characters
- [ ] **META-07**: Contact page meta description expanded to >=150 characters
- [ ] **META-08**: Spanish notary service meta description expanded to >=150 characters
- [ ] **META-09**: Translation service meta description expanded to >=150 characters
- [ ] **META-10**: Page-specific OG tags added to About, Contact, Blog listing, Service Areas, and Services pages
- [ ] **META-11**: Twitter card image URL set in global layout metadata
- [ ] **META-12**: Blog post titles that exceed 60 chars are trimmed

### Content Fixes

- [ ] **CONT-01**: Homepage metrics updated from "1K+" to "6,000+" to match About page
- [ ] **CONT-02**: Homepage hero paragraph changed from "West Sacramento" to "Sacramento"
- [ ] **CONT-03**: Homepage FAQ answers updated from "West Sacramento clients" to "Sacramento" broadly
- [ ] **CONT-04**: Service area pages bulked up with 3-4 unique FAQs each (currently thin pages have only 1)

### Images & Performance

- [ ] **PERF-01**: Hero image gina@2x.png converted to WebP format
- [ ] **PERF-02**: Orphaned/unused images removed from public/ directory

### Accessibility

- [ ] **A11Y-01**: FAQ.tsx accordion button includes aria-expanded attribute

### Config & DNS

- [ ] **CONF-01**: robots.txt updated to reference non-www canonical (ginagonzaleznotary.com)
- [ ] **CONF-02**: Blog posts include keywords field in frontmatter (mapped from existing tags)

## v2 Requirements

### Future Enhancements

- **GBP-01**: Add Google Business Profile link/embed to site
- **PERF-03**: Convert all remaining images to WebP format
- **A11Y-02**: Full accessibility audit and WCAG 2.1 compliance
- **CONT-05**: Implement blog post update dates and "last updated" display

## Out of Scope

| Feature | Reason |
|---------|--------|
| New pages or features | Remediation only — fix existing issues |
| Design/layout changes | Visual stays the same |
| New blog content strategy | Fix existing content, don't create new |
| Server-side rendering | Static export constraint |
| Full image optimization pipeline | Only hero image and orphan cleanup for v1 |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| CRIT-01 | TBD | Pending |
| CRIT-02 | TBD | Pending |
| CRIT-03 | TBD | Pending |
| CRIT-04 | TBD | Pending |
| SCHEMA-01 | TBD | Pending |
| SCHEMA-02 | TBD | Pending |
| SCHEMA-03 | TBD | Pending |
| SCHEMA-04 | TBD | Pending |
| SCHEMA-05 | TBD | Pending |
| SCHEMA-06 | TBD | Pending |
| META-01 | TBD | Pending |
| META-02 | TBD | Pending |
| META-03 | TBD | Pending |
| META-04 | TBD | Pending |
| META-05 | TBD | Pending |
| META-06 | TBD | Pending |
| META-07 | TBD | Pending |
| META-08 | TBD | Pending |
| META-09 | TBD | Pending |
| META-10 | TBD | Pending |
| META-11 | TBD | Pending |
| META-12 | TBD | Pending |
| CONT-01 | TBD | Pending |
| CONT-02 | TBD | Pending |
| CONT-03 | TBD | Pending |
| CONT-04 | TBD | Pending |
| PERF-01 | TBD | Pending |
| PERF-02 | TBD | Pending |
| A11Y-01 | TBD | Pending |
| CONF-01 | TBD | Pending |
| CONF-02 | TBD | Pending |

**Coverage:**
- v1 requirements: 31 total
- Mapped to phases: 0
- Unmapped: 31

---
*Requirements defined: 2026-04-01*
*Last updated: 2026-04-01 after initial definition*
