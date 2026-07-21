# Blog Engine Standard — Gina Gonzalez Notary

This file is the **complete, self-contained** spec for an automated writer (a cloud
agent with no access to local skills). Follow it exactly. Everything you need is in
this repository.

---

## 0. Client profile (write for this business)

- **Business:** Gina Gonzalez — Mobile Notary Public (and REALTOR®), Sacramento CA & surrounding.
- **Author byline (always):** `Gina Gonzalez`
- **Positioning:** Trusted, bilingual (English/Spanish) notary serving the Hispanic
  community directly. Integrated notary + real estate + document/legal help. Personal
  authority on Latin-America apostilles (Mexico, Peru, Colombia).
- **Service-area cities (use as GEO anchors — name real ones in the body):**
  Sacramento, Elk Grove, Roseville, Folsom, Rancho Cordova, Citrus Heights, Davis,
  Woodland, Lincoln, Auburn, Carmichael, Fair Oaks, Orangevale, Natomas, West Sacramento.
- **Phone (for CTA):** (415) 948-9967 · **Domain:** ginagonzaleznotary.com

## 1. Pick the topic (data-driven — do not invent)

1. Read `.seo/context.json`. Consider `opportunityQueries` (commercial gaps) first,
   then `decliningPosts` (refresh candidates ranking ~5–15).
2. **Dedup:** list existing slugs in `content/blog/`. Skip any query already covered
   by an existing post (match on the core topic, not just exact slug).
3. **Rank by BUYER INTENT, not traffic.** The point of a post is a phone call, not a
   pageview. Prefer queries that signal someone ready to hire — "near me", "same day",
   "emergency", "open now", "cost / price / how much", "how to get a [service]",
   "[service] + city". **Deprioritize** purely informational queries ("what is …",
   "history of …") unless they clearly precede a hire. Among uncovered queries, pick the
   **highest buyer-intent one**, not just the highest impressions.
4. **If everything is already covered** and there are no declining posts to refresh:
   **STOP. Do not invent a thin topic.** Instead open a PR titled
   `chore(seo): keyword queue is dry — needs refresh` with an empty commit or a note
   in `.seo/context.json`, and Slack Jamil that the queue needs refilling. Thin,
   overlapping posts hurt SEO — never pad.
5. **Refresh mode:** if the pick is a declining post, edit that existing file in place
   (update stats/dates, expand thin sections, add FAQs) rather than creating a new one.

## 2. Frontmatter (match the existing schema EXACTLY)

```yaml
---
title: "..."                      # <= 60 chars, includes the primary keyword
metaTitle: "..."                  # <= 60 chars, SEO title
metaDescription: "..."            # 150–160 chars, includes keyword + city
slug: "descriptive-kebab-keyword-city"   # lowercase kebab; must be unique
date: "YYYY-MM-DD"                # today's date (UTC)
image: "/images/blog/{slug}-featured.png"
imageAlt: "specific description of the scene, includes a real detail"
serviceType: "Mobile Notary"      # or Apostille / Loan Signing / Real Estate as fits
author: "Gina Gonzalez"
tags: ["primary keyword", "sacramento", "..."]   # 4–6 tags
language: "en"                    # "es" only if the whole post is in Spanish
featured: false
draft: false
quickAnswer: "40–60 words. Directly answers the primary query in the first breath, plainly, with a concrete fact or number."
keyTakeaways:
  - "Exactly 5 bullets. Each a standalone, quotable fact."
  - "..."
howToTitle: "..."                 # include ONLY if the topic is procedural
howToDescription: "..."
howToSteps:
  - name: "Step name"
    text: "One-sentence action."
faqs:
  - question: "..."               # 5–6 pairs. Real questions people ask.
    answer: "2–4 sentences, directly answered."
---
```

## 3. AEO rules (answer-engine optimization)

- **Quick Answer** first: 40–60 words, leads with the direct answer + a concrete fact.
- **5 Key Takeaways**, each a standalone quotable sentence.
- **5–6 FAQs** — these render as an accordion and emit FAQPage schema. Use real
  People-Also-Ask style questions.
- Include a **HowTo** block only when the topic is a process (e.g. "how to get an apostille").

## 4. GEO rules (get cited by AI answer engines) — hit at least **4 of 6**

1. **Cited statistic + date** — "As of 2026, …" with a named source.
2. **Direct definition sentence** — "An apostille is a certificate that …" (extractable).
3. **Named entities** — specific agencies/laws/forms (e.g. California Secretary of State,
   Hague Apostille Convention, FBI Identity History Summary, Grant Deed).
4. **Structured list or numbered steps** — scannable, liftable by an LLM.
5. **Standalone quotable one-liner** — one authoritative sentence an engine can quote verbatim.
6. **Recency signal** — current-year, dated facts; note "updated 2026" where relevant.

## 5. Body

- **4–6 `##` (H2) headings minimum.** (A post with fewer than 3 H2s is invalid — do not ship it.)
- ~1,000–1,500 words. Substantive, specific, genuinely useful. No filler.
- Name **2–3 real service-area cities** naturally (GEO local relevance).
- **Internal links:** link to 2–3 relevant existing pages (a service page and/or a
  related blog post — check `content/blog/` and `src/app/` for real URLs; never invent a link).
- **Voice:** professional, warm, plain. **No em dashes. No smart quotes. No AI filler**
  ("in today's fast-paced world", "look no further", "unlock", "delve"). Match the tone
  of recent posts in `content/blog/`.

## 5b. Conversion — THE POINT OF THE POST IS A LEAD

A post that ranks but gets no calls has failed. Every post must move the reader to
contact Gina. Build these in, do not bolt them on:

- **Early click-to-call.** Within the first ~150 words, a clear line to call/text
  **(415) 948-9967** (a `tel:` link). Do not make the reader scroll to find how to hire.
- **Link to the money page, not just blogs.** At least ONE of the 2–3 internal links must
  point to a **service or contact page** (the page that converts), phrased as an action
  ("book a mobile notary", "request same-day service"). Verify the URL exists.
- **Mid-post CTA.** After the main "how / what it costs" section, one sentence that names
  the reader's situation and invites the call ("Need this notarized today in Elk Grove?
  Gina comes to you — call (415) 948-9967.").
- **Trust signals** the buyer needs before calling: bonded & commissioned CA notary,
  bilingual (English/Spanish), mobile / comes to you, same-day availability, service-area
  cities. Weave 2–3 in naturally.
- **Closing CTA block** with phone + the fact that she travels to the client.
- **Reduce friction:** tell them what to have ready (valid ID, the document) so calling
  feels easy, not daunting.

If the site has a lead form component, prefer linking to the page that hosts it over a
raw email address.

## 6. Image

- The featured PNG does **not** exist yet. Set `image` to `/images/blog/{slug}-featured.png`
  and write a precise `imageAlt`. In the PR description, add a checklist line:
  `- [ ] Featured image to be generated and added before merge`.

## 7. Output & PR

1. Write the post to `content/blog/{slug}.md`.
2. Create a new branch `blog/{slug}`, commit only that file (message: `add: blog {slug}`).
3. Open a **PR to main** (do NOT merge). PR body: the target keyword, why it was picked,
   the GEO patterns used, and the image checklist item above.
4. **Slack Jamil** a one-line summary + the PR link.
5. Never commit straight to `main`. Never merge your own PR. A human approves.
