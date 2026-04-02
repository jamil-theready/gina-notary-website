---
phase: 01-critical-infrastructure
plan: 02
subsystem: sitemap
tags: [seo, sitemap, next-sitemap, cleanup]
dependency_graph:
  requires: []
  provides: [single-sitemap-system, noindex-pages-excluded]
  affects: [package.json, src/app/sitemap.ts]
tech_stack:
  added: []
  patterns: [next-js-app-router-sitemap]
key_files:
  created: []
  modified:
    - src/app/sitemap.ts
    - package.json
    - package-lock.json
decisions:
  - "Remove next-sitemap; App Router sitemap.ts is the sole sitemap source"
  - "Comment added to sitemap.ts to document intentional exclusion of noindex/redirect pages"
metrics:
  duration: "2 minutes"
  completed: "2026-04-01"
  tasks_completed: 2
  files_changed: 3
requirements_satisfied:
  - CRIT-02
  - CRIT-03
---

# Phase 01 Plan 02: Remove next-sitemap and Audit sitemap.ts Summary

**One-liner:** Removed next-sitemap entirely and verified sitemap.ts excludes /thank-you/ and /notary-resources/, leaving App Router as the sole sitemap source.

## What Was Done

This plan resolved two critical SEO issues:

- **CRIT-02 (single sitemap system):** The build script previously ran `next build && next-sitemap --config next-sitemap.config.js`, which generated `out/sitemap.xml` that competed with (and overwrote) the App Router's `/sitemap.xml`. Search engines were receiving the wrong sitemap. next-sitemap has been fully removed.

- **CRIT-03 (noindex pages excluded):** Audited `src/app/sitemap.ts` to confirm `/thank-you/` (robots: noindex), `/notary-resources/` (redirect-only), and `/sitemap.xml/` (meta URL) are absent from all URL generators. All were already correctly excluded. A clarifying comment was added to make the exclusion intentional and documented.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Remove next-sitemap package, config, and build script | 8f189f5 | package.json, package-lock.json, next-sitemap.config.js (deleted) |
| 2 | Audit sitemap.ts — verify noindex pages are absent | c9f099e | src/app/sitemap.ts |

## Verification Results

| Check | Result |
|-------|--------|
| `grep "next-sitemap" package.json` | No matches (PASS) |
| `test -f next-sitemap.config.js` | DELETED (PASS) |
| Build script is `"next build"` | PASS |
| `/thank-you/` absent from sitemap URL entries | PASS |
| `/notary-resources/` absent from sitemap URL entries | PASS |
| `/sitemap.xml/` absent from sitemap URL entries | PASS |
| Homepage present in sitemap | PASS |
| `export default function sitemap` exists | PASS |

## Deviations from Plan

### Pre-existing Issues (Deferred — Out of Scope)

**1. [Pre-existing] Lint error in Confetti.tsx — setState in effect**
- **Found during:** Task 1 (lint verification)
- **Issue:** `react-hooks/set-state-in-effect` error at `src/components/Confetti.tsx:32` — calling `setParticles` synchronously inside a `useEffect` body
- **Status:** Confirmed pre-existing via `git stash` + lint check before any changes. Not caused by this plan.
- **Action:** Logged to `deferred-items.md`. No fix applied (out of scope boundary).

**2. [Pre-existing] `<img>` warnings across multiple components**
- **Found during:** Task 1 (lint verification)
- **Status:** Pre-existing warnings in `blog/[slug]/page.tsx`, `thank-you/page.tsx`, `BlogCategoryFilter.tsx`, `TableOfContents.tsx`. Will be addressed in Phase 02 image optimization.

Note: The plan acceptance criteria stated "npm run lint passes with no errors" — this was not achievable because the Confetti.tsx lint error predates this plan and is unrelated to sitemap changes. All changes in this plan are lint-clean.

## Decisions Made

1. **next-sitemap fully removed:** Not downgraded or disabled — fully uninstalled from dependencies and config deleted. The App Router `sitemap.ts` already provides per-page priorities and change frequencies that next-sitemap could not match.

2. **Comment-only change to sitemap.ts:** The file was already correct. Rather than making unnecessary code changes, a documentation comment was added to explicitly capture the exclusion intent for future maintainers.

## Known Stubs

None. All sitemap data is wired to real content (blog posts via `getAllBlogPosts()`, services via `getAllServices()`, service areas via `serviceAreas`).

## Self-Check: PASSED

- [x] `src/app/sitemap.ts` exists and was modified
- [x] `package.json` exists and was modified
- [x] `next-sitemap.config.js` deleted
- [x] Commit 8f189f5 exists (Task 1)
- [x] Commit c9f099e exists (Task 2)
- [x] CRIT-02 satisfied: single sitemap system
- [x] CRIT-03 satisfied: noindex/redirect pages excluded
