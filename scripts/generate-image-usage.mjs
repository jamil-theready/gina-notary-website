#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CONTENT = path.join(ROOT, "content");
const IMAGES_DIR = path.join(ROOT, "public", "images", "blog");
const OUT_DIR = path.join(ROOT, ".seo");
const OUT = path.join(OUT_DIR, "image-usage.json");

// Tunable: when an image hits this many uses, flag for refresh
const OVERUSE_THRESHOLD = 5;
// When a category's most-used image hits this saturation %, recommend new images
const CATEGORY_SATURATION_THRESHOLD = 0.4;

function readMarkdownDir(subdir) {
  const dir = path.join(CONTENT, subdir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data } = matter(raw);
      return { ...data, _file: f };
    });
}

const allPosts = [
  ...readMarkdownDir("blog"),
  ...readMarkdownDir("services"),
].filter((p) => !p.draft);

// Count usage per image path
const usage = {};
for (const post of allPosts) {
  const img = post.image;
  if (!img) continue;
  if (!usage[img]) usage[img] = { count: 0, posts: [] };
  usage[img].count++;
  usage[img].posts.push(post.slug || post._file?.replace(/\.md$/, ""));
}

// List available library images vs unused ones
let availableImages = [];
if (fs.existsSync(IMAGES_DIR)) {
  availableImages = fs
    .readdirSync(IMAGES_DIR)
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .map((f) => `/images/blog/${f}`);
}

// Find broken image references — frontmatter pointing to a file that doesn't exist
const availableSet = new Set(availableImages);
const brokenImages = Object.keys(usage)
  .filter((img) => img.startsWith("/images/blog/") && !availableSet.has(img))
  .map((img) => ({ image: img, posts: usage[img].posts }));

if (brokenImages.length > 0) {
  console.error(`\n❌ BROKEN IMAGE LINKS DETECTED (${brokenImages.length}):`);
  for (const b of brokenImages) {
    console.error(`   ${b.image} (referenced by: ${b.posts.join(", ")})`);
  }
  console.error("Build will continue but these posts will render with broken images.\n");
  // Exit non-zero in CI; for local dev allow build to proceed by removing the line below
  if (process.env.CI || process.env.STRICT_BUILD) process.exit(1);
}

const unusedImages = availableImages.filter((img) => !usage[img]);
const overusedImages = Object.entries(usage)
  .filter(([, v]) => v.count >= OVERUSE_THRESHOLD)
  .map(([img, v]) => ({
    image: img,
    useCount: v.count,
    posts: v.posts,
  }))
  .sort((a, b) => b.useCount - a.useCount);

const totalUses = Object.values(usage).reduce((s, v) => s + v.count, 0);
const distinctImagesUsed = Object.keys(usage).length;

// Saturation: most-used image's share of total uses
const mostUsedShare = totalUses
  ? Math.max(...Object.values(usage).map((v) => v.count)) / totalUses
  : 0;

const needsFreshImages =
  overusedImages.length > 0 ||
  mostUsedShare > CATEGORY_SATURATION_THRESHOLD ||
  unusedImages.length === 0;

const output = {
  schemaVersion: 1,
  lastUpdated: new Date().toISOString(),
  totalPostsAnalyzed: allPosts.length,
  totalImagesInLibrary: availableImages.length,
  distinctImagesUsed,
  unusedImagesCount: unusedImages.length,
  unusedImages,
  overusedImages,
  mostUsedShare: Number(mostUsedShare.toFixed(2)),
  needsFreshImages,
  reminder: needsFreshImages
    ? `${overusedImages.length} image(s) used ${OVERUSE_THRESHOLD}+ times. Consider generating fresh images. Most-used image accounts for ${(mostUsedShare * 100).toFixed(0)}% of all uses.`
    : null,
  thresholds: {
    overusePerImage: OVERUSE_THRESHOLD,
    categorySaturation: CATEGORY_SATURATION_THRESHOLD,
  },
};

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(output, null, 2), "utf8");

const flag = needsFreshImages ? " ⚠ NEEDS FRESH IMAGES" : "";
console.log(
  `Wrote image-usage.json — ${distinctImagesUsed}/${availableImages.length} images used, ${overusedImages.length} overused${flag}`
);
