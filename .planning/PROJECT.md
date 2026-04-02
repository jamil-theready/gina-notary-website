# Gina Gonzalez Notary — SEO Remediation

## What This Is

SEO remediation for ginagonzaleznotary.com, a mobile notary public website serving Sacramento and surrounding areas. The site is built with Next.js 16 (static export) and deployed on Cloudflare Pages. This milestone fixes all issues identified in a comprehensive SEO audit — no new features, no design changes.

## Core Value

Every page on the site must be technically optimized for search engines so that potential clients in the Sacramento area can find Gina's notary services through organic search.

## Requirements

### Validated

- ✓ Static site builds and deploys to Cloudflare Pages — existing
- ✓ JSON-LD structured data (LocalBusiness, Service, FAQ, BlogPost) — existing
- ✓ Blog system with markdown content — existing
- ✓ Service area pages for 15+ Sacramento-area cities — existing
- ✓ Contact form with Web3Forms + honeypot + hCaptcha — existing
- ✓ Bilingual content (English/Spanish) — existing
- ✓ Security headers (HSTS, X-Frame-Options, etc.) — existing
- ✓ Skip navigation and basic accessibility — existing

### Active

- [ ] Fix all Critical SEO issues (404 page, sitemap conflicts, schema gaps)
- [ ] Fix all High SEO issues (meta descriptions, OG tags, schema consistency, image optimization)
- [ ] Fix all Medium SEO issues (breadcrumb schema, thin content, data inconsistencies)
- [ ] Fix Low SEO issues (minor meta length tweaks, robots.txt alignment)

### Out of Scope

- New features or pages — this is remediation only
- Design or layout changes — visual stays the same
- Content strategy or new blog posts — fix existing content only
- Performance overhaul beyond image optimization — not in scope
- Accessibility overhaul — only fix the one FAQ aria-expanded gap

## Context

- Site is live at ginagonzaleznotary.com, deployed via Cloudflare Pages
- www subdomain DNS and redirect were just fixed (CNAME + 301 rule)
- Static export means no server-side rendering — all SEO must be baked into the build
- Two competing sitemap systems: `src/app/sitemap.ts` (App Router) and `next-sitemap.config.js`
- Business name inconsistency: "Gina Gonzalez Notary" vs "Gina Gonzalez Notary Public" across schemas
- Homepage metrics say "1K+" but About page says "6,000+" — need to align
- Service area pages vary wildly in content depth (Sacramento: 4 FAQs, Auburn: 1 FAQ)

## Constraints

- **Tech stack**: Next.js 16 static export, Tailwind CSS v4, Cloudflare Pages — no changes
- **Timeline**: Complete ASAP — this is active client work
- **Deployment**: Static export only, no server-side features
- **Content**: Fix existing content inconsistencies, don't create net-new content strategy

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Remove next-sitemap, keep App Router sitemap.ts | App Router sitemap has proper per-page priorities; next-sitemap flattens everything to 0.7 | — Pending |
| Standardize business name to "Gina Gonzalez Notary" | Shorter, used in domain and most references | — Pending |
| Align homepage metrics to "6,000+" | About page has the more impressive and likely accurate number | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd:transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-01 after initialization*
