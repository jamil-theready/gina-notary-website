# External Integrations

**Analysis Date:** 2026-04-01

## APIs & External Services

**Form Submission:**
- Web3Forms (https://api.web3forms.com/submit)
  - Purpose: Handles contact form submissions via POST request
  - Implementation: `src/components/ContactForm.tsx` - Direct fetch to Web3Forms API
  - Auth: Access key hardcoded: `5e8e1438-0329-46cf-8df5-31ef556220bf`
  - Fields sent: name, phone, email, service, message, hCaptcha token

**CAPTCHA:**
- hCaptcha (https://hcaptcha.com)
  - Purpose: Bot prevention for contact form
  - SDK: `@hcaptcha/react-hcaptcha` 2.0.2
  - Site key: `50b2fe65-b00b-4b9e-ad62-3ba471098be2`
  - Implementation: `src/components/ContactForm.tsx` - Required before form submission
  - Error handling: Token expiration resets state (`onExpire` handler)

**Analytics:**
- Google Analytics (Google Tag Manager)
  - Measurement ID: `G-4CP7XECRCV`
  - Tracking code: `https://www.googletagmanager.com/gtag/js?id=G-4CP7XECRCV`
  - Implementation: `src/app/layout.tsx` - Injected via Next.js `<Script>` component with `afterInteractive` strategy
  - Configuration: gtag config initialized with standard Google Analytics tracking

**Social Media (No API Integration):**
- Instagram, Facebook, TikTok - Links only, no API calls
  - Instagram: `https://www.instagram.com/ginagonzaleznotary/`
  - Facebook: `https://www.facebook.com/ginagonzaleznotary/`
  - TikTok: `https://www.tiktok.com/@ginagonzaleznotary`

**Share Buttons (Browser Native):**
- Social share URLs constructed in `src/components/ShareButtons.tsx`
  - Facebook Share: `https://www.facebook.com/sharer/sharer.php?u=`
  - Twitter/X Intent: `https://twitter.com/intent/tweet?url=&text=`
  - LinkedIn Share: `https://www.linkedin.com/shareArticle?mini=true&url=&title=`

## Data Storage

**Databases:**
- None - Static content only

**File Storage:**
- Local filesystem only
  - Blog markdown content: `content/blog/` (checked into git)
  - Service markdown content: `content/services/` (checked into git)
  - Images: `public/images/` (checked into git)

**Content Processing:**
- Markdown-to-HTML conversion at build time using `remark`, `remark-gfm`, `remark-html`
- frontmatter parsing using `gray-matter` 4.0.3
- Build-time processing in `src/lib/content.ts`

**Caching:**
- Browser caching via security headers in `public/_headers` (Netlify/Vercel compatible)
- No server-side caching required

## Authentication & Identity

**Auth Provider:**
- Custom/None - No user authentication system
- Form submissions validated client-side (required fields) + hCaptcha
- Web3Forms API key embedded in code (form access control only, no user identity)

## Monitoring & Observability

**Error Tracking:**
- None configured - Fallback alerts via phone number display

**Logs:**
- No centralized logging
- Client-side errors handled with `alert()` and console (browser dev tools)

**Analytics:**
- Google Analytics only (page views, user engagement)

## CI/CD & Deployment

**Hosting:**
- Static hosting platform (currently appears to be Netlify based on `_headers` and `_redirects` files)
- Deployment files: `public/_headers`, `public/_redirects`

**Deployment Features:**
- Trailing slash enforcement configured in Next.js
- Sitemap auto-generated on build
- Image optimization disabled for static export
- Security headers configured: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`

**CI Pipeline:**
- Not detected - Manual deployment likely via git push or build platform trigger

**Build Automation:**
- `build` script runs: `next build && next-sitemap --config next-sitemap.config.js`

## Environment Configuration

**Required env vars:**
- None - All API keys/IDs are hardcoded or embedded

**Hardcoded Credentials:**
- Web3Forms access key: `5e8e1438-0329-46cf-8df5-31ef556220bf` (in `src/components/ContactForm.tsx`)
- hCaptcha site key: `50b2fe65-b00b-4b9e-ad62-3ba471098be2` (in `src/components/ContactForm.tsx`)
- Google Analytics ID: `G-4CP7XECRCV` (in `src/app/layout.tsx`)

**Secrets location:**
- Embedded in source code (not ideal for production)
- No `.env` file configured

**Additional Config:**
- Domain: `https://www.ginagonzaleznotary.com` (hardcoded in multiple places)

## Webhooks & Callbacks

**Incoming:**
- Contact form submission endpoint: Web3Forms processes POST requests from `src/components/ContactForm.tsx`
- No other webhooks

**Outgoing:**
- Redirect after successful contact form: `/thank-you` page (client-side navigation)
- Possible Web3Forms email notification (configured with subject and from_name fields)

## Robots & Indexing

**Robots.txt:**
- `public/robots.txt` present (standard allow-all)

**Redirects:**
- `/notary-resources` → `/blog/` (301 permanent redirects)
- Configured in `public/_redirects`

**Indexing Control:**
- `/admin/*` paths marked `X-Robots-Tag: noindex`
- `/thank-you` marked `X-Robots-Tag: noindex`
- Standard metadata index/follow enabled for public pages

---

*Integration audit: 2026-04-01*
