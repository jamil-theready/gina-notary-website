#!/usr/bin/env python3
"""Daily blog generator for Gina Gonzalez Notary.

Reads .seo/context.json to pick a high-priority keyword, calls Gemini
with the full brand-voice system prompt, validates the output frontmatter,
and writes a new markdown file to content/blog/. GitHub Actions handles
the commit + push.

Ported from n8n 'Gina — Flow 1 — Daily Blog' (2026-05-18).
"""

import json
import os
import random
import re
import sys
import time
import urllib.request
import urllib.error
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BLOG_DIR = ROOT / "content" / "blog"
CONTEXT_PATH = ROOT / ".seo" / "context.json"
LINKS_PATH = ROOT / ".seo" / "internal-links.json"

GEMINI_MODEL = "gemini-2.5-flash"
GEMINI_URL = f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent"

SHEET_ID = "1RWKxu8k-NGEP48oZpjo0eLFRrGStMh5HINuxNCetDRs"
SHEET_TAB = "posted_content_log"
SITE_BASE = "https://ginagonzaleznotary.com"
GSC_SITE = "sc-domain:ginagonzaleznotary.com"
GSC_WINDOW_DAYS = 28


CLUSTER_KEYWORDS = {
    "apostille": [
        "apostille mexico sacramento",
        "apostille peru sacramento",
        "apostille colombia sacramento",
        "apostille academic transcripts sacramento",
        "apostille fbi background check sacramento",
        "apostille turnaround time california",
        "apostilla traducir sacramento",
    ],
    "weddingOfficiant": [
        "wedding officiant elk grove",
        "bilingual wedding officiant sacramento",
        "civil ceremony sacramento officiant",
        "last minute wedding officiant sacramento",
        "small wedding officiant sacramento",
    ],
    "realEstate": [
        "real estate notary roseville",
        "real estate notary folsom",
        "fsbo notary sacramento",
        "refinance notary sacramento",
        "reverse mortgage notary sacramento",
    ],
    "immigration": [
        "immigration documents notary sacramento",
        "uscis notary sacramento",
        "consulate documents notary sacramento",
        "i 9 notary sacramento",
    ],
    "poa": [
        "durable power of attorney california notary",
        "medical power of attorney sacramento",
        "springing poa california",
        "limited power of attorney notary sacramento",
    ],
    "estate": [
        "living trust notary sacramento",
        "pour over will notary sacramento",
        "probate documents notary sacramento",
    ],
    "emergency": [
        "emergency notary sacramento weekend",
        "after hours notary sacramento",
        "sunday notary sacramento",
        "late night notary sacramento",
    ],
    "family": [
        "custody letter notary sacramento",
        "parental travel consent sacramento",
        "name change notary sacramento minor",
    ],
}

SEASONAL = {
    1: ["new year estate planning sacramento", "tax prep documents notary sacramento"],
    2: ["prenuptial agreement sacramento", "wedding officiant california", "marriage license sacramento ca"],
    3: ["apostille services sacramento", "tax documents notary sacramento", "certified translation sacramento"],
    4: ["first time homebuyer sacramento notary", "real estate closing notary sacramento", "tax deadline documents notary"],
    5: ["wedding season sacramento officiant", "travel consent form california", "summer travel notary sacramento"],
    6: ["wedding officiant sacramento", "summer travel consent california", "child travel authorization california"],
    7: ["llc formation california notary", "business contracts notary sacramento"],
    8: ["travel consent back to school sacramento", "school enrollment notary sacramento"],
    9: ["school enrollment notary sacramento", "international student apostille california"],
    10: ["year end estate planning sacramento", "trust documents california notary"],
    11: ["year end financial documents notary", "holiday travel consent sacramento"],
    12: ["year end real estate sacramento notary", "estate planning deadline california"],
}


def slugify(s: str) -> str:
    s = re.sub(r"[^a-z0-9\s-]", "", s.lower())
    s = re.sub(r"\s+", "-", s).strip("-")
    return "-".join(s.split("-")[:6])


def existing_slugs() -> set[str]:
    return {f.stem for f in BLOG_DIR.glob("*.md")}


def load_context() -> dict:
    if not CONTEXT_PATH.exists():
        return {}
    return json.loads(CONTEXT_PATH.read_text())


def load_internal_links() -> str:
    """Build a markdown bullet list of internal links for the prompt."""
    if not LINKS_PATH.exists():
        return ""
    data = json.loads(LINKS_PATH.read_text())
    lines = []
    by_cluster = data.get("byCluster", {})
    for cluster, entries in sorted(by_cluster.items()):
        for e in entries[:6]:
            title = e.get("title", "")
            url = e.get("url", "")
            if title and url:
                lines.append(f"- [{title}]({url})")
    return "\n".join(lines)


def _recent_cluster_counts(n: int = 7) -> dict:
    """Inspect the last N posts (by mtime) and count which cluster each belongs to.
    Used to downweight clusters that have dominated recent output."""
    counts = {c: 0 for c in CLUSTER_KEYWORDS}
    posts = sorted(BLOG_DIR.glob("*.md"), key=lambda p: p.stat().st_mtime, reverse=True)[:n]
    for p in posts:
        slug = p.stem
        for cluster, kws in CLUSTER_KEYWORDS.items():
            for kw in kws:
                if any(token in slug for token in kw.split()[:3] if len(token) > 3):
                    counts[cluster] += 1
                    break
            else:
                continue
            break
    return counts


CLUSTER_HINTS = {
    "apostille": ["apostille", "apostilla", "secretary of state"],
    "weddingOfficiant": ["wedding", "officiant", "marriage", "prenup"],
    "realEstate": ["real estate", "mortgage", "fsbo", "refinance", "deed", "lease"],
    "immigration": ["immigration", "uscis", "i-9", "i 9", "consulate", "visa"],
    "poa": ["power of attorney", "poa"],
    "estate": ["trust", "estate plan", "will ", "probate"],
    "emergency": ["emergency", "weekend", "after hours", "same day", "same-day", "late night"],
    "family": ["custody", "travel consent", "name change", "divorce", "parental"],
}


def _cluster_of(keyword: str) -> "str | None":
    """Determine which cluster a keyword belongs to. First tries exact match,
    then falls back to substring hints (handles opportunity-query keywords
    that aren't in our hardcoded CLUSTER_KEYWORDS dict)."""
    for cluster, kws in CLUSTER_KEYWORDS.items():
        if keyword in kws:
            return cluster
    kw_lower = keyword.lower()
    for cluster, hints in CLUSTER_HINTS.items():
        if any(h in kw_lower for h in hints):
            return cluster
    return None


def fetch_gsc_queries() -> list[dict]:
    """Fetch last N days of GSC query data via the seo-bot service account.
    Returns list of {query, impressions, clicks, position}. Empty list on any error.

    Silent no-op if GCP_SA_KEY_JSON env var is missing (e.g. local dev without secrets)."""
    sa_json = os.environ.get("GCP_SA_KEY_JSON")
    if not sa_json:
        print("(GSC fetch skipped: GCP_SA_KEY_JSON not set)")
        return []
    try:
        from google.oauth2.service_account import Credentials  # type: ignore
        from googleapiclient.discovery import build  # type: ignore

        creds = Credentials.from_service_account_info(
            json.loads(sa_json),
            scopes=["https://www.googleapis.com/auth/webmasters.readonly"],
        )
        service = build("searchconsole", "v1", credentials=creds, cache_discovery=False)
        from datetime import timedelta
        end = datetime.utcnow().date()
        start = end - timedelta(days=GSC_WINDOW_DAYS)
        resp = service.searchanalytics().query(siteUrl=GSC_SITE, body={
            "startDate": str(start),
            "endDate": str(end),
            "dimensions": ["query"],
            "rowLimit": 100,
        }).execute()
        rows = resp.get("rows", [])
        result = []
        for r in rows:
            result.append({
                "query": r["keys"][0],
                "impressions": r.get("impressions", 0),
                "clicks": r.get("clicks", 0),
                "position": r.get("position", 100.0),
            })
        print(f"GSC: pulled {len(result)} queries from last {GSC_WINDOW_DAYS} days")
        return result
    except Exception as e:
        print(f"WARN: GSC fetch failed ({e}); falling back to context.json", file=sys.stderr)
        return []


def pick_keyword(context: dict, used: set[str]) -> tuple[str, str]:
    """Pick a keyword to target. Combines strategic priorities, opportunity queries,
    and seasonal pool. Applies a cluster-diversity penalty so we don't post the same
    cluster repeatedly (apostille pile-up fix, 2026-05-19)."""
    candidates: list[tuple[str, str, "str | None", float]] = []  # (kw, source, cluster, score)

    for sp in context.get("strategicPriorities", [])[:3]:
        cluster = sp.get("cluster")
        for kw in CLUSTER_KEYWORDS.get(cluster, []):
            candidates.append((kw, f"strategic-{cluster}", cluster, 12.0))

    for q in context.get("opportunityQueries", [])[:10]:
        kw = q.get("query", "")
        if kw:
            score = 8.0 + (2.0 if q.get("nearMiss") else 0.0)
            candidates.append((kw, "opportunity-context", _cluster_of(kw), score))

    # LIVE GSC pool — last 28 days of real search performance
    gsc_rows = fetch_gsc_queries()
    if gsc_rows:
        # Score: position 5-30 is the sweet spot (winnable). Weight by impressions.
        gsc_max_imp = max((r["impressions"] for r in gsc_rows), default=1)
        for r in gsc_rows:
            pos = r["position"]
            imp = r["impressions"]
            if not (5 <= pos <= 50 and imp >= 5):
                continue
            # Score peaks at position 11-20 (just-off-page-1), tapers with distance
            position_score = 1.0 - min(abs(pos - 15) / 25.0, 1.0)
            impression_score = imp / gsc_max_imp
            score = 5.0 + 5.0 * position_score + 3.0 * impression_score
            # Bonus for queries with clicks already (validated intent)
            if r["clicks"] > 0:
                score += 2.0
            candidates.append((r["query"], f"gsc-live-pos{pos:.0f}", _cluster_of(r["query"]), score))

    month = datetime.now().month
    for kw in SEASONAL.get(month, []):
        candidates.append((kw, "seasonal", _cluster_of(kw), 4.0))

    # Filter out anything we've already posted
    fresh = [c for c in candidates if slugify(c[0]) not in used]
    if not fresh:
        fresh = [("mobile notary sacramento services", "fallback", None, 0.0)]

    # Apply cluster-diversity penalty based on recent posts
    recent = _recent_cluster_counts(n=7)
    print(f"Recent cluster counts (last 7 posts): {recent}")
    penalized = []
    for kw, src, cluster, score in fresh:
        penalty = recent.get(cluster, 0) * 3.0 if cluster else 0.0
        penalized.append((kw, src, cluster, score - penalty))

    penalized.sort(key=lambda c: c[3], reverse=True)
    # Prefer positive-score candidates; fall back to the negative pool only if nothing else is left
    positive = [c for c in penalized if c[3] > 0]
    pool = positive if positive else penalized
    top = pool[:5]
    print(f"Top {len(top)} candidates:")
    for kw, src, cluster, score in top:
        print(f"  {score:5.1f}  [{cluster or '?':>15}]  {kw}  ({src})")
    chosen = random.choice(top)
    return chosen[0], chosen[1]


def pick_category() -> str:
    weights = {
        "educational": 55,
        "service": 15,
        "personal": 10,
        "cultural": 10,
        "promo": 10,
    }
    pool = [cat for cat, w in weights.items() for _ in range(w)]
    return random.choice(pool)


def build_system_prompt(internal_links_md: str) -> str:
    return f"""# Gina Gonzalez Notary — Blog Post Content Engine

You write SEO-optimized blog posts for ginagonzaleznotary.com. Your ONLY output is a single blog post markdown file with YAML frontmatter. Do NOT generate LinkedIn, Facebook, or GBP posts — those are handled separately.

## About Gina

- Bilingual mobile notary (English/Spanish) in Sacramento, CA
- Former attorney from Peru, 10+ years experience, 6,000+ documents notarized
- NNA Certified, insured, also wedding officiant and apostille agent
- Phone: (415) 948-9967, Website: ginagonzaleznotary.com, Hours: 7AM-9PM, 7 days a week
- Service areas: Sacramento, Elk Grove, Roseville, Folsom, Rancho Cordova, Citrus Heights, Davis, Woodland, Carmichael, Fair Oaks, Natomas, South Sacramento, Meadowview, Arden-Arcade

## Voice Rules (MUST follow)

- First person from Gina. Professional neighbor tone. Confident, not salesy.
- Short punchy sentences. Vary length.
- NO hyphens or em dashes. Use "to" for ranges: "5 to 10 days".
- NO AI filler phrases: "in today's world", "whether you're", "let's dive in", "in conclusion", "when it comes to", "first and foremost", "at the end of the day", "navigating".
- NO emojis in the blog body.
- Max 1 exclamation mark in the entire blog.
- Active voice always. Specific beats vague.
- NEVER use "click here" or "learn more" as link anchor text.

## Output Format (REQUIRED)

Output a single markdown file. Start IMMEDIATELY with YAML frontmatter (do NOT wrap in ```markdown or ```yaml):

---
title: "..." (20-60 chars, keyword in first 5 words)
metaTitle: "... (2026)" (20-60 chars, ends with year)
metaDescription: "..." (80-155 chars, include keyword + phone (415) 948-9967)
slug: "..." (3-6 lowercase hyphenated words)
date: "YYYY-MM-DD"
image: "/images/blog/grant-deed.jpg"
imageAlt: "..." (10-125 chars, keyword + description)
serviceType: "Mobile Notary" OR "Real Estate" OR "Legal & Personal" OR "Wedding Officiant" OR "Apostille Services"
author: "Gina Gonzalez"
tags: ["tag1", "tag2", "tag3"]
language: "en"
featured: false
draft: false
quickAnswer: "..." (40-300 chars, direct answer, no Yes/No/Well start)
keyTakeaways:
  - "..." (3-5 items, 10-25 words each, at least 1 with specific number)
  - "..."
faq:
  - question: "..."
    answer: "..." (3-5 items, answers under 300 chars, self-contained)
---

[Body content below. 800-1500 words. 5-10 H2 headings as questions.]

## Body Requirements (HARD RULES — violating means rejection)

- Word count: 800 to 1500 words
- H2 headings: 5 to 10 (frame as questions, keyword in 2+)
- Internal links: minimum 3, descriptive anchors only
- Include at least 1 California statute citation (Government Code Section 1185, Civil Code Section 1632, Probate Code Section 4124, Family Code Section 1611, etc.)
- Include at least 3 specific Sacramento locations/neighborhoods
- Include a cost transparency element (specific dollar amounts)
- Include bilingual advantage mention
- End with CTA containing phone (415) 948-9967

## First-Party Authority Block (REQUIRED — include at least 2 in body)

- "I've notarized over 6,000 documents in 10+ years of practice"
- "Before becoming a California notary in 2014, I practiced law in Peru"
- "I serve Sacramento, Elk Grove, Roseville, Folsom, Rancho Cordova, Citrus Heights, and 12 other surrounding areas"
- "I'm one of the few fully bilingual (English/Spanish) certified notaries serving Sacramento County"
- "I'm available 7AM to 9PM, seven days a week, including same-day emergency appointments"
- "California sets the maximum notary fee at $15 per signature under Government Code §8211"
- Apostille: "California Secretary of State charges $20 per document; processing in person is same-day, by mail is 5 to 10 business days"
- Loan signing: "I'm an NNA-Certified Signing Agent, separate certification beyond standard notary commission"
- Wedding officiant: "I'm a certified Deputy Marriage Commissioner under California Family Code §401(a)(2)"
- Spanish: "All Spanish-language notarial acts I perform are valid identical to English under California Civil Code §1632"

## Outbound Authority Links (REQUIRED — minimum 2 outbound .gov or .org links)

- California Secretary of State Notary Page: https://www.sos.ca.gov/notary
- California Notary Handbook: https://www.sos.ca.gov/notary/handbook
- NNA: https://www.nationalnotary.org/
- California Civil Code: https://leginfo.legislature.ca.gov/faces/codes.xhtml
- USCIS: https://www.uscis.gov/
- US State Department Apostille: https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/internl-judicial-asst/authentications-and-apostilles.html
- Sacramento County Clerk-Recorder: https://ccr.saccounty.gov/
- California State Bar: https://www.calbar.ca.gov/
- IRS: https://www.irs.gov/

Format: [descriptive anchor text](URL). Specific anchors, never "click here".

## Internal Link Library (use 3-5 from this list — these are LIVE published pages)

{internal_links_md}

Format: [descriptive anchor text](URL). Anchor text must be specific.

## IMAGE OPTIONS (pick one that matches topic)

- /images/blog/grant-deed.jpg — real estate, property transfer, general notary
- /images/blog/apostille.jpg — international, apostille
- /images/blog/courthouse-wedding.jpg — wedding, officiant
- /images/blog/divorce-papers.jpg — divorce, family law
- /images/blog/dmv-documents.jpg — DMV, vehicle
- /images/blog/lease-agreement.jpg — lease, loan signing
- /images/blog/prenup.jpg — prenup
- /images/blog/quitclaim-deed.jpg — quitclaim

## Self-Check Before Outputting

Verify every rule above. If any fail, fix before returning. Your ENTIRE output is just the blog markdown file starting with --- and ending with the final CTA. Nothing else."""


def build_user_prompt(keyword: str, category: str, source: str) -> str:
    today = datetime.now().strftime("%Y-%m-%d")
    return f"""Today's date is {today}.

TARGETED KEYWORD: {keyword}
CONTENT CATEGORY: {category}
KEYWORD SOURCE: {source}

Write a comprehensive blog post targeting this keyword for Gina Gonzalez Notary in Sacramento. Apply all voice rules, schema requirements, internal link library, and first-party authority block from the system prompt.

Output only the blog post markdown file starting with --- YAML frontmatter. No other deliverables."""


def call_gemini(system_prompt: str, user_prompt: str, api_key: str) -> str:
    body = {
        "contents": [{"role": "user", "parts": [{"text": user_prompt}]}],
        "systemInstruction": {"parts": [{"text": system_prompt}]},
        "generationConfig": {"temperature": 0.7, "maxOutputTokens": 8192},
    }
    url = f"{GEMINI_URL}?key={api_key}"
    data = json.dumps(body).encode()
    last_err = None
    for attempt in range(3):
        try:
            req = urllib.request.Request(
                url, data=data, headers={"Content-Type": "application/json"}, method="POST"
            )
            with urllib.request.urlopen(req, timeout=120) as resp:
                payload = json.loads(resp.read())
                return payload["candidates"][0]["content"]["parts"][0]["text"]
        except (urllib.error.URLError, urllib.error.HTTPError, KeyError, IndexError) as e:
            last_err = e
            print(f"Gemini attempt {attempt + 1} failed: {e}", file=sys.stderr)
            if attempt < 2:
                time.sleep(30)
    raise RuntimeError(f"Gemini failed after 3 attempts: {last_err}")


def extract_frontmatter_field(fm: str, name: str) -> str:
    m = re.search(rf'^{name}:\s*"([^"]+)"', fm, re.MULTILINE)
    return m.group(1) if m else ""


def validate_and_extract(text: str) -> tuple[str, str]:
    """Strip code fences, validate basic frontmatter rules, return (slug, text)."""
    text = re.sub(r"^```(?:yaml|markdown|md)?\n", "", text.strip())
    text = re.sub(r"\n```\s*$", "", text)

    fm_match = re.match(r"^---\n([\s\S]*?)\n---", text)
    if not fm_match:
        raise ValueError("Output missing YAML frontmatter")

    fm = fm_match.group(1)
    body = text[len(fm_match.group(0)):].strip()

    required = ["title", "slug", "date", "language", "quickAnswer"]
    missing = [r for r in required if not extract_frontmatter_field(fm, r)]
    if missing:
        raise ValueError(f"Missing required frontmatter fields: {missing}")

    word_count = len(re.findall(r"\S+", body))
    if word_count < 500:
        raise ValueError(f"Body has only {word_count} words (need 500+)")

    h2_count = len(re.findall(r"^## ", body, re.MULTILINE))
    if h2_count < 3:
        raise ValueError(f"Only {h2_count} H2 headings (need 3+)")

    slug = extract_frontmatter_field(fm, "slug")
    if not slug:
        raise ValueError("No slug in frontmatter")

    print(f"Validation OK: {word_count} words, {h2_count} H2s, slug={slug}")
    return slug, text


def log_to_sheet(slug: str, title: str, category: str, source: str, status: str) -> None:
    """Append a row to the Gina Content Tracker → posted_content_log tab.

    Silent no-op if GCP_SA_KEY_JSON env var is missing. We do NOT want a sheet
    failure to mark the run as failed — the blog post itself already committed.
    """
    sa_json = os.environ.get("GCP_SA_KEY_JSON")
    if not sa_json:
        print("(sheet log skipped: GCP_SA_KEY_JSON not set)")
        return
    try:
        import json as _json
        import gspread  # type: ignore
        from google.oauth2.service_account import Credentials  # type: ignore

        creds_info = _json.loads(sa_json)
        creds = Credentials.from_service_account_info(
            creds_info,
            scopes=["https://www.googleapis.com/auth/spreadsheets"],
        )
        gc = gspread.authorize(creds)
        ws = gc.open_by_key(SHEET_ID).worksheet(SHEET_TAB)
        row = [
            datetime.now().strftime("%Y-%m-%d %H:%M"),
            "blog",
            "blog",
            title,
            f"{SITE_BASE}/blog/{slug}/",
            category,
            slug,
            status,
        ]
        ws.append_row(row, value_input_option="USER_ENTERED")
        print(f"Logged to sheet: {slug}")
    except Exception as e:
        print(f"WARN: sheet log failed: {e}", file=sys.stderr)


def extract_title(content: str) -> str:
    m = re.search(r'^title:\s*"([^"]+)"', content, re.MULTILINE)
    return m.group(1) if m else ""


def already_posted_today() -> bool:
    today = datetime.now().strftime("%Y-%m-%d")
    for f in BLOG_DIR.glob("*.md"):
        if f'date: "{today}"' in f.read_text():
            print(f"Already posted today ({today}): {f.name}. Exiting cleanly.")
            return True
    return False


def main() -> int:
    if already_posted_today():
        return 0

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("ERROR: GEMINI_API_KEY not set", file=sys.stderr)
        return 2

    context = load_context()
    internal_links = load_internal_links()
    used = existing_slugs()

    keyword, source = pick_keyword(context, used)
    category = pick_category()
    print(f"Topic: {keyword!r} | source={source} | category={category}")

    system_prompt = build_system_prompt(internal_links)
    user_prompt = build_user_prompt(keyword, category, source)

    raw = call_gemini(system_prompt, user_prompt, api_key)
    slug, content = validate_and_extract(raw)

    date_str = datetime.now().strftime("%Y-%m-%d")
    final_slug = slug if slug not in used else f"{slug}-{date_str}"
    content = re.sub(r'slug:\s*"[^"]+"', f'slug: "{final_slug}"', content, count=1)
    content = re.sub(r'date:\s*"[^"]+"', f'date: "{date_str}"', content, count=1)

    out_path = BLOG_DIR / f"{final_slug}.md"
    out_path.write_text(content)
    print(f"WROTE: {out_path}")

    log_to_sheet(final_slug, extract_title(content), category, source, "published")
    return 0


if __name__ == "__main__":
    sys.exit(main())
