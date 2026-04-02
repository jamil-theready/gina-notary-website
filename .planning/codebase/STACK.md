# Technology Stack

**Analysis Date:** 2026-04-01

## Languages

**Primary:**
- TypeScript 5 - Used throughout codebase (React components, Next.js pages, utilities)
- JavaScript (ESM) - Configuration files and utilities

**Secondary:**
- Markdown - Content files for blog posts and service descriptions (front-end + body)

## Runtime

**Environment:**
- Node.js 24.13.1 (project currently using)
- ES2017 target compilation

**Package Manager:**
- npm 11.8.0
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- Next.js 16.1.6 - Full-stack React framework with static export
- React 19.2.3 - UI components and state management
- React DOM 19.2.3 - DOM rendering

**Styling:**
- Tailwind CSS 4 - Utility-first CSS framework
- PostCSS 4 - CSS processing via `@tailwindcss/postcss`

**Content Processing:**
- remark 15.0.1 - Markdown parser
- remark-gfm 4.0.1 - GitHub Flavored Markdown support
- remark-html 16.0.1 - Convert remark AST to HTML
- gray-matter 4.0.3 - YAML frontmatter parsing for markdown files

**Utilities:**
- framer-motion 12.38.0 - Animation library (used in components like `Confetti.tsx`, `scroll-cards.tsx`)
- @hcaptcha/react-hcaptcha 2.0.2 - hCaptcha integration for contact form

**SEO & Sitemap:**
- next-sitemap 4.2.3 - Automatic sitemap generation at build time

## Key Dependencies

**Critical:**
- @hcaptcha/react-hcaptcha 2.0.2 - CAPTCHA verification (contact form security)
  - Requires hCaptcha site key: `50b2fe65-b00b-4b9e-ad62-3ba471098be2`
- gray-matter 4.0.3 - Parses frontmatter from markdown content files in `content/` directory

**Infrastructure:**
- @img/sharp-darwin-x64, @img/colour - Image optimization (Next.js built-in)
- @tailwindcss/oxide-darwin-x64, lightningcss-darwin-x64 - CSS compilation acceleration

## Configuration

**Environment:**
- No environment variables required for production (Web3Forms API key is hardcoded in component)
- No `.env.local` file needed for deployment
- Deployment targets: Static export (no server needed)

**Build:**
- `next.config.ts` - Exports static HTML/CSS/JS (`output: "export"`)
- `tsconfig.json` - TypeScript configuration with path alias `@/*` → `./src/*`
- `postcss.config.mjs` - PostCSS config with Tailwind CSS
- `eslint.config.mjs` - ESLint 9 configuration with Next.js rules
- `.prettierrc` - Not configured (using ESLint defaults)
- `next-sitemap.config.js` - Sitemap generation config

**Scripts:**
```json
{
  "dev": "next dev",
  "build": "next build && next-sitemap --config next-sitemap.config.js",
  "start": "next start",
  "lint": "eslint"
}
```

## Platform Requirements

**Development:**
- Node.js 24.x or compatible
- npm 11.x or compatible
- macOS/Linux/Windows with shell support

**Production:**
- Static hosting (Netlify, Vercel, GitHub Pages, or similar)
- No database required
- No runtime server required
- Generated output: `./out/` directory (committed to git currently)

**Build Output:**
- Static HTML files with embedded CSS and JS
- Sitemap: `./out/sitemap.xml` (generated on build)
- Image optimization disabled (`images.unoptimized: true`)

## Build & Deployment

**Build Process:**
1. TypeScript compilation to JavaScript
2. React component bundling
3. Static HTML/CSS/JS generation
4. Sitemap generation with `next-sitemap`

**Output Structure:**
- Pages build to `.next/` during development
- Static export to `./out/` directory on production build
- All routes use trailing slashes (configured in `next.config.ts`)

---

*Stack analysis: 2026-04-01*
