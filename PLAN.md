# Abdenour Benkorich — Portfolio Build Plan (Master Prompt for Claude Code)

> **How to use this file:** Put it in the repo root as `PLAN.md` and copy Section 17 ("Rules for Claude Code") into `CLAUDE.md`. Then start Claude Code with:
> *"Read PLAN.md fully. Work phase by phase (Section 15). After each phase, run build + lint, show me what changed, and stop for my review before the next phase. Never invent facts: anything marked `TODO(abdenour)` stays a visible placeholder."*

---

## 1. Project brief

Build a **professional personal portfolio website** for **Abdenour Benkorich** (brand: **BenCoder**).

- **Who he is:** AI instructor, full-stack engineer, data science student, and tech content creator (102K+ followers) based in Mostaganem, Algeria. Works with Tassili AI on an Algerian LLM.
- **Goal of the site:** Get him (a) AI-teaching / workshop / course invitations, (b) freelance full-stack and web clients, (c) internships/junior roles and AI-team opportunities, (d) brand credibility for BenCoder.
- **Audience:** Recruiters and engineering managers, clients (Algerian and international SMEs/startups), academies and event organisers, students who follow BenCoder.
- **Tone:** Confident, clean, modern, minimal. Practical, not hype. English primary.
- **Visual identity:** **Strictly black and white**, matching the AB monogram logo. Dark theme by default, light theme available.

### What makes this portfolio different from the reference
The reference (khalilbnd.site) is a pure full-stack engineer story. Abdenour has a **three-part identity** that most developer portfolios don't have:

1. **AI instructor** (Everest Academy "Build with AI", programming instructor, Tlemcen session)
2. **Creator** (BenCoder, 102K+ followers)
3. **Builder** (full-stack freelance + Sonatrach/Sefrone internships + Tassili AI)

The site must make these three feel like one coherent story: *"I build with AI, I teach it, and I ship real products."* Give the **Teaching & Content** section as much weight as **Work**. This is the differentiator.

---

## 2. Research summary: the reference site (khalilbnd.site)

Fetched and analysed. Built with **Astro 5**, theme-aware (light/dark, `color-scheme: light dark`), with proper OG tags, canonical URL, `theme-color`, and a skip-to-content link.

**Structure (single long home page + dedicated sub-pages):**
Nav (Work, About, Experience, Blog, Let's talk, theme toggle) → Hero (status pill "Open to remote roles", H1 with one italic accent phrase, 2 CTAs, a "What I build" stack card with 4 layers) → 4 stat tiles (years, current role, shipped apps, location/timezone) → **01 Selected work** (4 featured case studies, big banner image + 3 bullets + tech tags + "Read case study") + compact "More projects" list (numbered rows) → **02 About** (portrait, 2 paragraphs, 4 numbered principles, education/community/speaking/mentoring facts) → **03 Expertise** (tools grouped by *where they sit in a product*, not a flat skill cloud) → **04 Experience** (timeline split into "Now" and "Previously", logo, dates, duration, status badge, expandable "Highlights & stack") → **05 Contact** (big CTA block, copy-email button, GitHub, LinkedIn) → footer.

**What to borrow (patterns):**
- Numbered section labels (`01 Selected work`) in small mono caps.
- Hero H1 with a single italic serif accent phrase.
- Status pill ("Open to…") with a pulsing dot.
- Stat tiles right under the hero (instant credibility).
- Skills grouped by role in a product, each group with a one-line description.
- Case-study cards: big visual, 3 outcome bullets, tag row, link.
- "Copy email" button with toast feedback.
- Expandable experience entries; "Now" vs "Previously" split.
- Real SEO: canonical, OG image 1200×630, `theme-color`, skip link.

**What NOT to copy:**
- Don't copy text, layout pixel-for-pixel, project names, or imagery. Same *ideas*, original execution.
- Don't use a flat skill list; don't fake years of experience; don't pad with empty sections.
- Abdenour has fewer large shipped products than the reference. **Lead with strengths (teaching, creator reach, AI work)** rather than imitating a "5 years / 3 store apps" stat strip.

---

## 3. Positioning and copy direction

**Headline options (pick A by default, keep B/C in `content/copy-alternatives.md`):**
- **A (default):** "I build with AI, teach it, and ship the products around it."
- B: "AI instructor and full-stack engineer making AI practical."
- C: "From first prompt to production. I build, teach and share AI."

Italic serif accent word(s) in the H1: *teach it*.

**Hero sub-copy (draft, user to approve):**
"I'm **Abdenour Benkorich**: AI instructor, full-stack engineer and creator behind **BenCoder** (102K+ followers). I work with **Tassili AI** on an Algerian large language model and study Computer Engineering & Data Science in Mostaganem."

**Status pill:** `Open to AI teaching, freelance & internships` (green-ish dot is the *only* non-monochrome element allowed, see Design).

**CTAs:** Primary `View selected work`, Secondary `Get in touch`. Tertiary text link `Download CV`.

**Stat tiles (use only verified numbers from CV):**
| Tile | Value | Sub |
|---|---|---|
| Audience | 102K+ | BenCoder followers |
| Teaching | 1 course + workshops | "Build with AI" at Everest Academy · Tlemcen session 2026 |
| Building | AI team @ Tassili AI | Algerian LLM |
| Based in | Mostaganem, DZ | UTC+1 · remote-friendly |

> `TODO(abdenour)`: confirm platforms for the 102K+ (Instagram? TikTok? YouTube?) and add per-platform handles + numbers if he wants.

---

## 4. Information architecture (sitemap)

```
/                      Home (all key sections, anchored)
/work                  All projects grid
/work/[slug]           Case study pages (one per featured project)
/teaching              AI courses, workshops, talks, curriculum (differentiator)
/content               BenCoder: platforms, top posts, embeds, press kit
/about                 Full story, timeline, values, fun facts
/experience            Full experience + education (printable)
/blog                  (Phase 2) MDX posts: AI tutorials, dev notes
/contact               Contact page + form
/cv                    Redirects to /Abdenour_Benkorich_CV.pdf
/404
```

Home sections in order: **Hero → Stats → 01 Selected work → 02 Teaching & Content → 03 About → 04 Expertise → 05 Experience → 06 Contact → Footer.**

Nav: `Work · Teaching · About · Experience · Blog (phase 2) · Let's talk` + theme toggle + logo (left).

---

## 5. Tech stack (decision + reasons)

| Concern | Choice | Why |
|---|---|---|
| Framework | **Astro (latest stable; run `npm create astro@latest`, verify version)** | Static-first, near-zero JS, best Lighthouse for a content site. Reference site uses it. |
| Interactive bits | **React islands** (`@astrojs/react`) only where needed (theme toggle, project filter, copy-email, form) | He already knows React/Next; keeps JS minimal. |
| Styling | **Tailwind CSS v4** via `@tailwindcss/vite` (no `tailwind.config`; tokens in CSS with `@theme`) | Current approach for Astro. |
| Content | **Astro Content Collections** (Markdown/MDX + Zod schemas) for `projects`, `experience`, `posts`, `teaching` | Edit content without touching components. |
| Motion | **CSS + View Transitions** first; **Motion (framer-motion successor, `motion`)** only for 2–3 hero/reveal effects | Keep it classy, not heavy. |
| Fonts | **Self-hosted via `@fontsource-variable/*`** | No Google request, better privacy/perf. |
| Icons | `astro-icon` + Lucide / Simple Icons for tech logos | Monochrome icons fit the palette. |
| Forms | **Formspree or Web3Forms** (or Netlify Forms since he hosts on Netlify) + honeypot + Turnstile optional | No backend needed. |
| Analytics | **Plausible or Umami** (cookie-less) | No cookie banner needed. |
| OG images | `satori` + `@resvg/resvg-js` at build time (or `astro-og-canvas`) | Auto branded OG per page. |
| SEO | `@astrojs/sitemap`, JSON-LD (`Person`, `WebSite`, `Course`), RSS for blog | Discoverability. |
| Hosting | **Netlify** (already used) or Vercel/Cloudflare Pages; custom domain later | Free, CI from GitHub. |
| Quality | TypeScript strict, ESLint, Prettier, `astro check`, Lighthouse CI, `axe` a11y check | Professional baseline. |
| Package manager | pnpm | Fast, deterministic. |

> Alternative if he prefers staying 100% in his comfort zone: **Next.js 15 (App Router) + Tailwind v4 + MDX + `next/image`**. Same design/spec applies. Default to Astro unless told otherwise.

---

## 6. Design system

### 6.1 Principles
1. **Monochrome only.** Black, white, and neutral greys. No brand colour. The logo is the only "graphic" element.
2. **One exception:** a tiny green status dot for "available" (`#3DDC84`), nowhere else.
3. **Big type, generous whitespace, thin borders.** Premium editorial feel, not "template".
4. **Contrast through scale and weight**, not colour.
5. Dark is default; light theme must be equally polished (not an afterthought).

### 6.2 Colour tokens (define as CSS variables, switch on `[data-theme]`; respect `prefers-color-scheme` on first visit)

| Token | Dark | Light |
|---|---|---|
| `--bg` | `#0A0A0A` | `#FAFAFA` |
| `--surface` | `#111111` | `#FFFFFF` |
| `--surface-2` | `#171717` | `#F2F2F2` |
| `--border` | `#262626` | `#E5E5E5` |
| `--border-strong` | `#3A3A3A` | `#CFCFCF` |
| `--text` | `#F5F5F5` | `#0A0A0A` |
| `--text-muted` | `#A3A3A3` | `#525252` |
| `--text-faint` | `#737373` | `#8A8A8A` |
| `--invert-bg` (buttons, highlights) | `#F5F5F5` | `#0A0A0A` |
| `--invert-text` | `#0A0A0A` | `#F5F5F5` |
| `--status` | `#3DDC84` | `#16A34A` |

All text must meet **WCAG AA** (4.5:1; 3:1 for large). Verify muted text on both themes.

### 6.3 Typography
- **Display + body:** `Geist` Variable (clean, modern, geometric: fits the logo). Fallback: `Inter Variable`.
- **Accent (italic phrases in H1/H2):** `Instrument Serif` Italic.
- **Mono (section labels, tags, dates, numbers):** `Geist Mono`.
- Scale (fluid with `clamp`): H1 `clamp(2.5rem, 6vw, 5rem)` tight leading `1.02`, tracking `-0.03em`; H2 `clamp(2rem, 4vw, 3.25rem)`; body `1rem/1.7`; mono label `0.75rem`, uppercase, tracking `0.12em`.
- Max line length ~65ch for paragraphs.

### 6.4 Logo usage
- Files provided: `Asset_3.png` (black AB monogram) and `Asset_376.png` (white version). **Copy them to `public/brand/` and rename:** `logo-black.png`, `logo-white.png`.
- **Step 1:** Vectorise to a single-colour **SVG** (e.g. `potrace`, or ask Claude to trace) → `public/brand/logo.svg` using `fill="currentColor"` so it flips automatically with the theme. Keep PNGs as fallback.
- Nav: logo mark at 28–32px height + wordmark text "Abdenour" (or just the mark). Footer: larger mark.
- Hero: optional **oversized, low-contrast AB mark** as a background element (opacity 4–6%), parallax very subtle.
- Favicon set: `favicon.svg` (mark; use `prefers-color-scheme` media query inside SVG), `favicon.ico`, `apple-touch-icon.png` (180), `icon-192/512.png`, `site.webmanifest`.
- Clear space = height of the "A" crossbar. Never recolour, stretch, or add effects.
- Loading/transition idea: the AB mark draws/fades in once on first load (≤ 600ms, skippable, respects `prefers-reduced-motion`).

### 6.5 Layout
- Container `max-width: 1200px`, side padding `clamp(1rem, 4vw, 2rem)`. 12-col grid on desktop, single column on mobile.
- Section spacing `clamp(5rem, 10vw, 9rem)`.
- Corners: `radius 14px` for cards, `999px` for pills. Borders 1px. Almost no shadows; use border + subtle surface shift. In dark mode a very faint top-highlight gradient on cards is OK.
- Optional subtle grain/noise overlay (2–3% opacity) and a faint dotted/grid background in hero only.

### 6.6 Components to build
`Header` (sticky, blurred backdrop, mobile drawer) · `ThemeToggle` · `StatusPill` · `Button` (primary/secondary/ghost) · `SectionLabel` · `StatTile` · `ProjectCard` (featured) · `ProjectRow` (compact list) · `TagList` · `TeachingCard` · `PlatformCard` (social stats) · `Timeline` / `ExperienceItem` (expandable) · `SkillGroup` · `PrincipleCard` · `CopyEmailButton` (with toast) · `ContactForm` · `Footer` · `Prose` (MDX styling) · `Seo` (head) · `Reveal` (scroll-in wrapper) · `Marquee` (optional tech/logos strip).

### 6.7 Motion rules
- Reveal-on-scroll: fade + 12px translate, 400–500ms, `ease-out`, staggered children, once only.
- Hover: cards lift 2px + border brightens; buttons invert; links get animated underline.
- Page transitions: Astro View Transitions (`<ClientRouter />`) with a fast crossfade.
- **Always** honour `prefers-reduced-motion: reduce` (disable everything non-essential).
- No autoplay video, no heavy 3D, no cursor-follow gimmicks. Max 1 "wow" effect (the hero).

---

## 7. Page specs

### 7.1 Home

**Hero**
- Status pill, H1 (see §3), sub-copy, CTAs, "Download CV" link.
- Right/bottom: a **"What I do" card** (mirrors the reference's idea, original content):
  1. **Teach**: Generative AI, programming, workshops
  2. **Create**: BenCoder tutorials & tech content
  3. **Build**: React, Next.js, Node, Python/Django
  4. **Apply AI**: LLMs, ML, data analysis
  Each with 3 mono tags.
- Background: huge faint AB mark + subtle grid. Keep it elegant.

**Stats strip** (see §3).

**01 Selected work**: 3–4 featured projects (cards with banner, 3 bullets, tags). Then "More projects" compact rows. See §9 for content.

**02 Teaching & Content** (differentiator):
- Left: *Everest Academy: "Build with AI"* card (1-month hands-on generative AI course: fundamentals → real AI-powered projects). Below: *Programming Instructor* (multiple institutions, Tlemcen session May 2026).
- Right: *BenCoder* card with platforms + "102K+" big number + latest 3 embeds/links.
- CTA: "Invite me to teach or speak" → `/contact?topic=teaching`.

**03 About**: portrait (B&W treatment: grayscale + slight contrast, fits palette), 2 short paragraphs, 4 numbered principles, facts list (Education, Community, Teaching, Currently).
Principles (draft): 01 *Practical over theoretical* · 02 *Teach what I build* · 03 *Local relevance*: AI that works for Algerian users, language and data · 04 *Ship small, ship often*.

**04 Expertise**: groups (each with a one-line description), monochrome tech chips with icon:
- **AI & Data**: Generative AI, LLMs, Machine Learning, Data Analysis & Reporting, Data Security Fundamentals, Python
- **Frontend**: React, Next.js, Tailwind CSS, UI/UX Design (Figma)
- **Backend & APIs**: Node.js, Django, REST APIs, Python
- **Data layer**: PostgreSQL, MongoDB
- **Tools & infra**: Git/GitHub, Linux, Windows Server, VS Code, Computer Networks, IT Support
- **Teaching & Communication**: Public speaking, curriculum design, content creation, Robotics & Automation (basics)
> Do **not** add skills not in the CV (e.g. Docker/AWS) unless Abdenour confirms.

**05 Experience** (Now / Previously, expandable, mono dates):
- **Now:** AI Team Member @ Tassili AI · AI Instructor @ Everest Academy (1 month) · Tech Content Creator @ BenCoder · Programming Instructor (ongoing)
- **Previously:** Software Engineer Intern @ Sonatrach GP1Z (Jun 3–30, 2026) · Backend Developer Intern @ Sefrone (Dec 2024–Mar 2025)
- **Education:** State Engineering Degree (Ingénieur d'État) — Computer Engineering & Data Science, Université Abdelhamid Ibn Badis (5-Year Program)

**06 Contact**: big dark block, headline "Have a course to teach, a product to build, or a team that needs AI skills?", copy-email button, LinkedIn, GitHub, form link.

**Footer**: mark, 1-line bio, nav, social, "© 2026 Abdenour Benkorich", back-to-top. **Do not publish the phone number** in plain text (scraper/spam risk). Offer it on request or behind the contact form.

### 7.2 `/work` and `/work/[slug]`
Grid with filter chips (All · Web · AI · Client work). Case study template (see §9): hero image, one-line summary, meta row (Role · Year · Type · Stack · Link), Problem → Approach → What I built → Result/what I learned, gallery, next project link.

### 7.3 `/teaching`
- Intro, philosophy ("make AI practical, accessible and affordable").
- Course card: **Build with AI** (Everest Academy): audience, duration (1 month), format (hands-on), outline by week (`TODO(abdenour)` real syllabus), outcomes, student projects (`TODO`).
- Workshops/talks list (Tlemcen training, May 2026; add more).
- Testimonials slot (empty-state hidden until filled).
- CTA: book/invite form with fields: org, event type, date, audience size.

### 7.4 `/content`
BenCoder story, platforms grid (handle, followers, link), best-performing content (3–6 embeds or screenshots), topics covered, audience (`TODO` demographics), **collaboration/press kit** (downloadable one-pager PDF later).

### 7.5 `/about`, `/experience`, `/contact`, `/blog`
- About: long-form story (origin → university → teaching → content → AI work), photo, timeline.
- Experience: full print-friendly list + `@media print` CSS.
- Contact: form (name, email, topic select: Teaching / Freelance / Job / Collab / Other, message), email, socials, response-time note, availability.
- Blog (Phase 2): MDX, tags, reading time, RSS, syntax highlighting (Shiki), OG per post.

---

## 8. Content model (Astro Content Collections, Zod schemas)

```ts
// src/content.config.ts (sketch)
projects: {
  title, slug, summary, year, role, type: 'web'|'ai'|'client'|'platform',
  featured: boolean, order: number, cover: image, gallery?: image[],
  liveUrl?: url, repoUrl?: url, stack: string[], bullets: string[3],
  status: 'live'|'archived'|'confidential'
}
experience: { company, role, start, end|'present', location, type, summary, highlights: string[], stack: string[], logo? }
teaching: { title, org, date|range, format, audience, summary, outcomes: string[], link? }
posts (phase 2): { title, date, description, tags, cover?, draft }
site.ts: name, tagline, email, socials, availability, nav, stats
```

---

## 9. Content inventory (from the CV; **only use verified facts**)

### Identity
- Name: **Abdenour Benkorich** · Brand: **BenCoder** · Title: *AI Instructor | Full-Stack Engineer | Data Science | Tech Content Creator*
- Location: Mostaganem, Algeria
- Email: benkorich.abdenour@gmail.com (public, via copy button)
- LinkedIn: linkedin.com/in/danour · GitHub: github.com/Ben-coderr · Old site: bencoder.netlify.app (client-rendered, nothing to migrate)
- Languages: Arabic (Native) · English (Fluent) · French (Intermediate)

### Projects (featured candidates)
| Slug | Title | Type | Notes |
|---|---|---|---|
| `virexa` | Virexa (healthcare startup platform) | Platform | Live: virexa-eta.vercel.app. "Full digital platform aimed at improving patients' lives through tech-driven healthcare solutions." |
| `fiikra-studio` | Fiikra Studio (marketing agency site) | Client | Live: fiikra-studio.vercel.app. Professional agency platform built and deployed for a client. |
| `jg-supply-net` | JG Supply Net | Client | jgsupplynet.com. Professional business website. |
| `perfecto-brew-crew` | Perfecto Gastro & Brew Crew | Client | Restaurant + coffee-shop websites. |
| `tassili-ai` (not a repo, a "role card") | Tassili AI: Algerian LLM | AI | Contribution to an Algerian LLM; no confidential details. |
| `build-with-ai` | "Build with AI" course | Teaching | Shown in Teaching, not Work. |

**Image strategy:** Claude Code should write a **Playwright script** (`scripts/capture.ts`) that screenshots each live URL at 1440×900 and 390×844 (full-page + viewport) into `src/assets/projects/<slug>/`, then wrap them in a laptop/phone **mockup frame in CSS** (monochrome bezels). Convert to AVIF/WebP via Astro `<Image>`. `TODO(abdenour)`: for each project supply role, 3 concrete outcome bullets, stack, and any client quote. Until supplied, render a clean "details coming soon" state, never fabricate metrics.

### Facts to flag/confirm with Abdenour (put this list in `TODO.md`)
1. CV says **"4th-year"** student but education dates are **2024–2028** (that's 3rd year in Oct 2026). Which is correct?
2. Which platforms make up the **102K+** followers, with handles and per-platform numbers?
3. Sonatrach dates read "June 3 – June 30, 2026": confirm it's complete and can be named publicly.
4. Is it OK to publicly name **Tassili AI** and describe his role? Exact title?
5. Real **syllabus, student count, outcomes** for "Build with AI".
6. A good **portrait** photo (B&W-friendly, neutral background) + 2–3 action shots teaching.
7. Preferred contact for the public (email only? WhatsApp link?). Phone number stays off the site by default.
8. Custom **domain** (e.g. `bencoder.dev`, `abdenour.dev`, `benkorich.com`).
9. Does he want **Arabic/French** versions? (Default: English only at launch, architecture ready for i18n.)
10. Any **testimonials** from students/clients.

---

## 10. SEO, performance, accessibility

**SEO**
- Unique `<title>` and meta description per page; canonical URLs; `robots.txt`; `@astrojs/sitemap`.
- Open Graph + Twitter cards with generated 1200×630 images (black bg, white AB mark, title).
- JSON-LD: `Person` (name, jobTitle, alumniOf, sameAs, knowsAbout, url), `WebSite`, `Course` for Build with AI, `BreadcrumbList`.
- Semantic HTML: one `h1` per page, landmarks, descriptive link text, `alt` text on all images.
- Target keywords naturally: *AI instructor Algeria*, *generative AI course*, *full-stack developer Mostaganem*, *BenCoder*.
- `theme-color` for both schemes; `color-scheme: dark light`.

**Performance (budgets)**
- Lighthouse ≥ **95** on all four categories (mobile).
- LCP < 2.0s, CLS < 0.05, INP < 150ms. JS shipped on home < 60KB gz.
- Responsive images with `srcset`/AVIF, `loading="lazy"` below fold, preload hero font, `font-display: swap`, subset fonts.
- No third-party scripts except cookie-less analytics (deferred).

**Accessibility**
- WCAG 2.2 AA: visible focus rings (2px white/black offset), skip link, keyboard-navigable drawer and accordions (`aria-expanded`), `aria-live` for copy toast, reduced-motion support, minimum 44px tap targets, form labels + error messages.
- Run `axe` (via `@axe-core/playwright`) in CI against all routes.

**Privacy/security**
- No cookies, no trackers. Email obfuscation (copy button + `mailto` built client-side). Honeypot on form. Security headers via `netlify.toml` (`CSP`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).

---

## 11. Repo structure

```
/
├─ PLAN.md  CLAUDE.md  TODO.md  README.md
├─ astro.config.mjs  tsconfig.json  package.json  netlify.toml
├─ public/
│  ├─ brand/ (logo.svg, logo-black.png, logo-white.png)
│  ├─ favicon.svg  favicon.ico  apple-touch-icon.png  site.webmanifest  robots.txt
│  └─ Abdenour_Benkorich_CV.pdf
├─ scripts/ capture.ts  generate-og.ts
├─ src/
│  ├─ assets/ (projects/, portrait/, teaching/)
│  ├─ components/ (ui/, sections/, islands/)
│  ├─ content/ (projects/, experience/, teaching/, posts/)
│  ├─ content.config.ts
│  ├─ data/ site.ts  skills.ts
│  ├─ layouts/ Base.astro  Prose.astro
│  ├─ pages/ index.astro work/ teaching.astro content.astro about.astro experience.astro contact.astro blog/ 404.astro
│  ├─ styles/ global.css  (Tailwind v4 @theme tokens, themes, prose)
│  └─ lib/ seo.ts  utils.ts
└─ tests/ a11y.spec.ts  links.spec.ts
```

---

## 12. Theme switching implementation notes
- Inline a tiny blocking script in `<head>` that reads `localStorage.theme` (try/catch), falls back to `prefers-color-scheme`, and sets `data-theme` **before paint** (no flash). Default for first-time visitors with no system preference: **dark**.
- Toggle icon swaps sun/moon with a short rotate transition. Update `meta[name=theme-color]` on toggle.
- Logo SVG uses `currentColor` so it follows the theme automatically.

---

## 13. Contact form behaviour
- Fields: name, email, topic (Teaching/Workshop · Freelance project · Job/Internship · Collaboration · Other), message, hidden honeypot.
- Client validation + server response states (idle/sending/success/error) with accessible announcements.
- Success: friendly message + "I usually reply within 48 hours" (`TODO` confirm).
- Query param `?topic=teaching` preselects the topic.
- Copy-email button: copies to clipboard, shows "Copied" toast (aria-live), falls back to selecting text.

---

## 14. Deployment & CI
- GitHub repo → Netlify auto-deploy on `main`; PR previews on.
- GitHub Action: install → `astro check` → lint → build → Lighthouse CI + axe + broken-link check.
- `netlify.toml`: build command, publish dir, headers (CSP etc.), cache headers for `/_astro/*` (immutable).
- Connect custom domain, force HTTPS, add `www` → apex redirect.
- Post-launch: submit sitemap to Google Search Console and Bing, add to LinkedIn/GitHub/bio links of every BenCoder platform.

---

## 15. Build phases (stop for review after each)

**Phase 0: Setup (≈ 30 min)**
Scaffold Astro + TS strict + Tailwind v4 + React integration + fonts + ESLint/Prettier + pnpm. Add brand assets, vectorise logo to SVG, generate favicon set. Create `TODO.md` from §9.
*Accept:* `pnpm dev` and `pnpm build` pass; logo renders in both themes.

**Phase 1: Design system**
Tokens, themes + no-flash toggle, typography, `Button`, `SectionLabel`, `StatusPill`, `Tag`, `Card`, `Reveal`, `Header` (+ mobile drawer), `Footer`, `Base` layout + `Seo`. Create a hidden `/styleguide` page showing everything in both themes.
*Accept:* styleguide looks polished in dark + light; AA contrast verified; keyboard nav works.

**Phase 2: Home page**
All sections with real CV content and clearly marked placeholders. Hero background with AB mark. Stats, work, teaching & content, about, expertise, experience, contact.
*Accept:* matches §7.1; responsive at 360 / 768 / 1024 / 1440; Lighthouse ≥ 95.

**Phase 3: Content collections + inner pages**
Schemas, `/work`, `/work/[slug]` template, `/teaching`, `/content`, `/about`, `/experience` (print CSS), `/contact`, `/404`. Playwright screenshot script + mockup frames.
*Accept:* every featured project has a case study page (even if partially "coming soon").

**Phase 4: Polish**
Motion pass, View Transitions, reduced-motion QA, OG image generator, JSON-LD, sitemap, robots, analytics, security headers, form wired to provider, copy-email toast.
*Accept:* OG previews verified (use a validator), zero console errors, axe clean.

**Phase 5: Launch**
Deploy to Netlify, custom domain, Lighthouse CI in GitHub Actions, README with "how to add a project/post".
*Accept:* live URL, all links checked, Search Console submitted.

**Phase 6 (optional, after launch)**
Blog (MDX + RSS), Arabic/French i18n (Astro i18n routing, `hreflang`, RTL support for Arabic), testimonials, newsletter signup, press kit PDF, "uses" page.

---

## 16. Definition of done
- Black/white identity consistent everywhere; logo correct in both themes.
- No invented facts, metrics or testimonials. Every placeholder is visible and tracked in `TODO.md`.
- Lighthouse ≥ 95 ×4 (mobile), axe: 0 violations, no layout shift from theme/fonts.
- Works without JS for all content (islands enhance only).
- Fully responsive, keyboard accessible, `prefers-reduced-motion` honoured.
- Clean, typed, commented-where-needed code; README explains content editing.

---

## 17. Rules for Claude Code (copy into `CLAUDE.md`)

1. Read `PLAN.md` first. Follow phases in order; **stop after each phase** and summarise what changed + how to review it.
2. **Never fabricate** facts, numbers, quotes, logos, client names, or dates. Use `TODO(abdenour)` placeholders and log them in `TODO.md`.
3. **Monochrome palette only** (tokens in §6.2). The single exception is the availability dot. No gradients with colour, no blue links.
4. Prefer Astro components; use React islands only for real interactivity. Keep JS minimal.
5. TypeScript strict. No `any` unless justified in a comment. Run `pnpm astro check && pnpm lint && pnpm build` before declaring a phase done.
6. Accessibility is a requirement, not a bonus (see §10).
7. Use `@fontsource-variable` self-hosted fonts; no external CDNs at runtime.
8. Do not copy text, layout, or assets from khalilbnd.site or any other site. Take inspiration from patterns only.
9. Before adding any dependency, check it is actively maintained and small; justify it in the PR/summary.
10. If a spec is ambiguous, pick the simplest sensible option, note the assumption, and continue. Only stop to ask when blocked by missing content that cannot be placeholdered.
11. Commit in small, conventional commits (`feat:`, `fix:`, `chore:`), one logical change each.
12. Never commit secrets; form provider keys go in env vars (`.env.example` provided).

---

## 18. Starter prompt to paste in Claude Code (after placing PLAN.md + assets)

```
Read PLAN.md completely, then start Phase 0.
Assets are in ./assets-incoming/: Asset_3.png (black AB logo), Asset_376.png (white AB logo), Abdenour_Benkorich_CV.pdf, and a reference screenshot.
Set up the project exactly as specified (Astro + TypeScript strict + Tailwind v4 + React islands + pnpm), vectorise the logo into a currentColor SVG, generate the favicon set, create TODO.md from Section 9, and show me the result.
Do not start Phase 1 until I say "continue".
```
