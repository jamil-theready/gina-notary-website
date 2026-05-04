#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CONTENT = path.join(ROOT, "content");
const OUT_DIR = path.join(ROOT, ".seo");
const OUT = path.join(OUT_DIR, "internal-links.json");

const STOPWORDS = new Set(
  "the a an of and or in on at to for with by from as is are was were be been being this that these those have has had do does did will would should could may might must can your you yours my mine our ours their theirs his her hers its also too very just only than then them us we i".split(
    " "
  )
);

function tokenize(s) {
  if (!s) return [];
  return s
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 3 && !STOPWORDS.has(w));
}

function classifyCluster(text) {
  const t = (text || "").toLowerCase();
  if (/apostille|apostilla/.test(t)) return "apostille";
  if (/wedding|officiant|marriage|prenup/.test(t)) return "weddingOfficiant";
  if (/real estate|deed|grant|quitclaim|escrow|loan signing|fsbo|homebuyer|refinance|mortgage/.test(t))
    return "realEstate";
  if (/immigration|uscis|visa|passport|consulate|i-9|notario|spanish notary/.test(t))
    return "immigration";
  if (/power of attorney|poa|durable/.test(t)) return "poa";
  if (/estate|trust|probate|will\b|inheritance/.test(t)) return "estate";
  if (/emergency|same day|urgent|hospital|after hours|weekend|sunday|holiday/.test(t))
    return "emergency";
  if (/custody|divorce|child|family|name change|restraining|prenup/.test(t))
    return "family";
  if (/dmv|vehicle|title transfer/.test(t)) return "dmv";
  if (/translation|translat|certified spanish english/.test(t)) return "translation";
  if (/business|llc|corporate|articles of incorporation/.test(t)) return "business";
  return "general";
}

function readMarkdownDir(subdir) {
  const dir = path.join(CONTENT, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data, content } = matter(raw);
      return { ...data, content, _file: f };
    });
}

const services = readMarkdownDir("services");
const blogPosts = readMarkdownDir("blog");

function buildEntry(item, type) {
  const slug = item.slug || item._file?.replace(/\.md$/, "");
  if (!slug) return null;
  const language = item.language || "en";
  const tagsFromFM = Array.isArray(item.tags) ? item.tags : [];
  const titleTokens = tokenize(item.title || "");
  const slugTokens = tokenize(slug.replace(/-/g, " "));
  const tagTokens = tagsFromFM.flatMap(tokenize);
  const keywordSet = new Set([...titleTokens, ...slugTokens, ...tagTokens]);
  const keywords = Array.from(keywordSet).slice(0, 20);

  const cluster = classifyCluster(
    `${item.title || ""} ${slug.replace(/-/g, " ")} ${(item.serviceType || "")} ${tagsFromFM.join(" ")}`
  );

  return {
    type,
    slug,
    title: item.title || slug,
    url:
      type === "service"
        ? `/notary-services/${slug}/`
        : `/blog/${slug}/`,
    language,
    serviceType: item.serviceType || null,
    cluster,
    keywords,
    date: item.date || null,
    draft: !!item.draft,
  };
}

const entries = [
  ...services.map((s) => buildEntry(s, "service")).filter(Boolean),
  ...blogPosts.map((p) => buildEntry(p, "blog")).filter(Boolean),
].filter((e) => !e.draft);

const byCluster = {};
for (const e of entries) {
  if (!byCluster[e.cluster]) byCluster[e.cluster] = [];
  byCluster[e.cluster].push({ slug: e.slug, title: e.title, url: e.url, type: e.type, language: e.language });
}

const library = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  totalEntries: entries.length,
  totalServices: entries.filter((e) => e.type === "service").length,
  totalBlogPosts: entries.filter((e) => e.type === "blog").length,
  byCluster,
  entries,
};

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(library, null, 2), "utf8");
console.log(
  `Wrote internal-links.json — ${entries.length} entries across ${Object.keys(byCluster).length} clusters`
);
