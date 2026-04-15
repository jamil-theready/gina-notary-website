#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..", "..");
const isCI = process.env.CI === "true";

const report = {
  runDate: new Date().toISOString(),
  week: weekStamp(),
  fixes: [],
  skipped: [],
  errors: [],
  before: {},
  after: {},
};

run().catch((e) => {
  report.errors.push({ step: "top-level", message: e.message, stack: e.stack });
  writeReport();
  process.exit(1);
});

async function run() {
  log("SEO auto-fix starting");

  report.before = await snapshotSchemas();

  await fix_serviceAreaPages_addServiceSchema();

  report.after = await snapshotSchemas();
  writeReport();

  log(`Done. fixes=${report.fixes.length} skipped=${report.skipped.length} errors=${report.errors.length}`);
}

// ─────────────────────────────────────────────────────────
// Fix: add per-area Service schema to service area pages
// ─────────────────────────────────────────────────────────
async function fix_serviceAreaPages_addServiceSchema() {
  const libPath = path.join(root, "src/lib/schema.ts");
  const pagePath = path.join(root, "src/app/service-areas/[slug]/page.tsx");

  if (!fs.existsSync(libPath) || !fs.existsSync(pagePath)) {
    report.skipped.push({ fix: "service-area-schema", reason: "lib or page missing" });
    return;
  }

  let lib = fs.readFileSync(libPath, "utf8");
  let page = fs.readFileSync(pagePath, "utf8");

  // 1. Ensure serviceAreaSchema() exists in lib
  if (!/export function serviceAreaSchema\b/.test(lib)) {
    const helper = `
export function serviceAreaSchema(area: {
  slug: string;
  name: string;
  metaDescription?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: \`Mobile Notary in \${area.name}, CA\`,
    description:
      area.metaDescription ||
      \`Certified mobile notary public serving \${area.name}, CA. Bilingual English/Spanish. 10+ years experience.\`,
    url: \`https://ginagonzaleznotary.com/service-areas/\${area.slug}/\`,
    serviceType: "Notary Public",
    provider: {
      "@type": ["Notary", "LocalBusiness"],
      name: "Gina Gonzalez Notary",
      telephone: "+14159489967",
      url: "https://ginagonzaleznotary.com",
      image: "https://ginagonzaleznotary.com/images/gina-gonzalez-notary.jpg",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sacramento",
        addressRegion: "CA",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Sacramento County, California",
      },
    },
  };
}
`;
    lib = lib.trimEnd() + "\n" + helper;
    fs.writeFileSync(libPath, lib);
    report.fixes.push({
      fix: "service-area-schema",
      file: "src/lib/schema.ts",
      change: "Added serviceAreaSchema() helper",
    });
  }

  // 2. Import + render serviceAreaSchema on the [slug] page
  if (!/serviceAreaSchema/.test(page)) {
    // extend existing import { faqSchema, breadcrumbSchema } from "@/lib/schema";
    page = page.replace(
      /import\s*{\s*([^}]+?)\s*}\s*from\s*"@\/lib\/schema";/,
      (m, inner) => {
        const names = inner.split(",").map((s) => s.trim()).filter(Boolean);
        if (!names.includes("serviceAreaSchema")) names.push("serviceAreaSchema");
        return `import { ${names.join(", ")} } from "@/lib/schema";`;
      }
    );

    // inject schema script right after the faqSchema script block
    const injectionMarker = /(dangerouslySetInnerHTML=\{\{\s*__html:\s*JSON\.stringify\(faqSchema\(area\.faqs\)\)\s*\}\}\s*\/>)/;
    if (injectionMarker.test(page)) {
      page = page.replace(
        injectionMarker,
        `$1
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema(area)) }}
      />`
      );
      fs.writeFileSync(pagePath, page);
      report.fixes.push({
        fix: "service-area-schema",
        file: "src/app/service-areas/[slug]/page.tsx",
        change: "Wired serviceAreaSchema() into template (applies to all 14+ city pages)",
      });
    } else {
      report.errors.push({
        step: "service-area-schema-inject",
        message: "Could not find injection marker — page layout changed",
      });
    }
  } else {
    report.skipped.push({
      fix: "service-area-schema",
      reason: "Already wired",
    });
  }
}

// ─────────────────────────────────────────────────────────
// Measurement
// ─────────────────────────────────────────────────────────
async function snapshotSchemas() {
  const pages = [
    "src/app/page.tsx",
    "src/app/layout.tsx",
    "src/app/service-areas/[slug]/page.tsx",
    "src/app/blog/[slug]/page.tsx",
    "src/app/notary-services/[slug]/page.tsx",
    "src/app/notary-services/page.tsx",
    "src/app/about/page.tsx",
  ];
  const counts = {};
  for (const p of pages) {
    const full = path.join(root, p);
    if (!fs.existsSync(full)) { counts[p] = 0; continue; }
    const src = fs.readFileSync(full, "utf8");
    counts[p] = (src.match(/application\/ld\+json/g) || []).length;
  }
  return counts;
}

// ─────────────────────────────────────────────────────────
// Report writer
// ─────────────────────────────────────────────────────────
function writeReport() {
  const dir = path.join(root, "reports/seo-fixes");
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${report.week}.md`);

  const lines = [];
  lines.push(`# SEO Auto-Fix Report — ${report.week}`);
  lines.push(``);
  lines.push(`Run: ${report.runDate}`);
  lines.push(``);
  lines.push(`## Summary`);
  lines.push(`- Fixes applied: **${report.fixes.length}**`);
  lines.push(`- Skipped (already done): ${report.skipped.length}`);
  lines.push(`- Errors: ${report.errors.length}`);
  lines.push(``);

  if (report.fixes.length) {
    lines.push(`## Fixes`);
    for (const f of report.fixes) {
      lines.push(`- **${f.fix}** — \`${f.file}\``);
      lines.push(`  - ${f.change}`);
    }
    lines.push(``);
  }

  lines.push(`## Schema Count — Before → After`);
  lines.push(`| Page | Before | After | Δ |`);
  lines.push(`|------|--------|-------|---|`);
  for (const key of Object.keys(report.after)) {
    const b = report.before[key] ?? 0;
    const a = report.after[key] ?? 0;
    const d = a - b;
    const darrow = d > 0 ? `+${d} ✓` : d < 0 ? `${d} ⚠️` : "—";
    lines.push(`| \`${key}\` | ${b} | ${a} | ${darrow} |`);
  }
  lines.push(``);

  if (report.skipped.length) {
    lines.push(`## Skipped`);
    for (const s of report.skipped) lines.push(`- ${s.fix}: ${s.reason}`);
    lines.push(``);
  }

  if (report.errors.length) {
    lines.push(`## Errors`);
    for (const e of report.errors) lines.push(`- **${e.step}**: ${e.message}`);
    lines.push(``);
  }

  lines.push(`## Evidence`);
  lines.push(`- Verify schema on any city page: https://search.google.com/test/rich-results?url=https://ginagonzaleznotary.com/service-areas/elk-grove-notary/`);
  lines.push(`- GSC impressions impact: measurable 7-14 days after deploy in Search Console`);
  lines.push(``);

  fs.writeFileSync(file, lines.join("\n"));
  log(`Report written: ${path.relative(root, file)}`);

  // Also write a JSON log for trending
  const histPath = path.join(root, "reports/seo-fixes/history.json");
  let history = [];
  if (fs.existsSync(histPath)) {
    try { history = JSON.parse(fs.readFileSync(histPath, "utf8")); } catch {}
  }
  history.push({
    week: report.week,
    runDate: report.runDate,
    fixesCount: report.fixes.length,
    schemaBefore: report.before,
    schemaAfter: report.after,
  });
  fs.writeFileSync(histPath, JSON.stringify(history, null, 2));
}

function weekStamp() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function log(msg) {
  const prefix = isCI ? "" : "[seo-auto-fix] ";
  console.log(prefix + msg);
}
