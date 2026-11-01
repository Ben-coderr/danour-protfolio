<div align="center">

# Abdenour Benkorich — BenCoder Portfolio

**AI Instructor · Full-Stack Software Engineer · Data Science · Tech Content Creator**

[![Live Site](https://img.shields.io/badge/Live_Site-bencoder.site-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bencoder.site)
[![Astro 5](https://img.shields.io/badge/Astro-5.3+-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-gray?style=for-the-badge)](LICENSE)

[🌐 Live Production Website](https://bencoder.site) · [📖 Technical Architecture](ARCHITECTURE.md) · [🤝 Contributing](CONTRIBUTING.md)

</div>

---

## 📌 Overview

This repository hosts the official source code for **[bencoder.site](https://bencoder.site)**, the personal engineering portfolio and pedagogical platform of **Abdenour Benkorich (BenCoder)**.

Engineered with **Astro 5**, **React 19 Islands**, and **Tailwind CSS v4**, the site showcases production software architectures, Algerian enterprise systems, academic AI research, and bilingual technical education reaching a developer community of over **102,000+ engineers**.

### ✨ Highlights

- **⚡ Sub-50ms Global Edge Latency:** Pure static generation (SSG) with Astro 5 deployed across Vercel's global edge network.
- **🌍 Bi-directional i18n & Authentic Arabic RTL:** First-class dual-language support (`/` English LTR, `/ar` Arabic RTL) with typographic rhythm powered by `@fontsource/ibm-plex-sans-arabic`.
- **🎨 Editorial Brutalist Monochrome Design:** Meticulously engineered high-contrast palette adhering strictly to WCAG 2.1 AA accessibility standards with zero saturated color distractions.
- **🌓 Instant Zero-FOUC Theme Engine:** Inline blocking script with local storage persistence and system preference synchronization across light and dark modes.
- **🧩 Selective Island Hydration:** Zero-JS baseline pages where JavaScript is hydrated only for rich interactive components (Interactive Terminal Console, Skills Matrix, Local World Clock, Contact Form).
- **🔍 Comprehensive SEO & Rich Structured Data:** Automated sitemap generation, dynamic OpenGraph image cards, canonical `hreflang` alternation, and complete Schema.org `Person` & `WebSite` JSON-LD graphs.

---

## 🏗️ Architecture & Technology Stack

| Layer                   | Technology                                  | Purpose                                                                                |
| :---------------------- | :------------------------------------------ | :------------------------------------------------------------------------------------- |
| **Framework**           | [Astro 5](https://astro.build/)             | High-performance Static Site Generation (SSG) & Content Layer                          |
| **Interactive Islands** | [React 19](https://react.dev/)              | Isolated client interactivity with partial hydration (`client:visible`, `client:load`) |
| **Styling**             | [Tailwind CSS v4](https://tailwindcss.com/) | Modern CSS `@theme` tokens, dynamic variables, and fluid typography                    |
| **Typography**          | Fontsource Variable Fonts                   | Self-hosted _Geist_, _Geist Mono_, _Instrument Serif_, and _IBM Plex Sans Arabic_      |
| **Icons**               | `astro-icon`, Lucide, Simple Icons          | Scalable inline SVGs bundled with zero external CDN runtime calls                      |
| **Type Safety**         | TypeScript 5.7 (Strict)                     | End-to-end typed content schemas, components, and i18n dictionaries                    |
| **Deployment & Edge**   | [Vercel](https://vercel.com/)               | Automated CI/CD from `main`, Custom Domain SSL (`bencoder.site`), and edge caching     |

---

## 📂 Repository Structure

```text
.
├── .github/                 # GitHub Actions workflows & issue/PR templates
│   ├── workflows/ci.yml     # Automated lint, type-check, and build pipeline
│   ├── ISSUE_TEMPLATE/      # Bug report & feature request templates
│   └── pull_request_template.md
├── assets/                  # High-res compiled assets & CV documents
├── public/                  # Static assets served at root
│   ├── brand/               # Project screenshots, logos, and OpenGraph cards
│   ├── favicon.svg          # Modern SVG favicon
│   ├── robots.txt           # Search engine indexing directives
│   └── site.webmanifest     # Progressive web application manifest
├── src/
│   ├── assets/              # Optimized images processed by Astro Sharp
│   ├── components/
│   │   ├── islands/         # React 19 interactive client components
│   │   ├── sections/        # Modular page sections (Hero, Work, Experience, etc.)
│   │   └── ui/              # Reusable UI primitives (Button, Card, Tag, Seo, etc.)
│   ├── data/                # Strongly-typed data models (projects, skills, site)
│   ├── i18n/                # Bi-lingual translation strings & Arabic content dictionaries
│   ├── layouts/             # Base HTML boilerplate with theme initialization
│   ├── pages/               # File-based routing engine
│   │   ├── index.astro      # English root homepage
│   │   ├── work/            # English work directory & dynamic `[slug]` case studies
│   │   ├── teaching/        # AI instruction & course curriculums
│   │   ├── about/           # Detailed professional biography & timeline
│   │   └── ar/              # Full Arabic localized mirror routes
│   └── styles/              # Global Tailwind v4 styles and font definitions
├── astro.config.mjs         # Astro integrations, i18n routing, and Vite plugins
├── CLAUDE.md                # Project design principles and engineering constraints
├── CV.md                    # Canonical markdown resume of Abdenour Benkorich
├── package.json             # Dependencies, scripts, and package metadata
└── tsconfig.json            # Strict TypeScript configuration
```

---

## 🚀 Quick Start & Development

### Prerequisites

- **Node.js**: `20.x` or `22.x` (LTS recommended)
- **Package Manager**: [pnpm](https://pnpm.io/) (`>= 9.0`)

### 1. Clone the repository

```bash
git clone https://github.com/Ben-coderr/danour-protfolio.git
cd danour-protfolio
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start local development server

```bash
pnpm dev
```

Navigate to `http://localhost:4321` in your browser.

---

## 🛠️ Available Scripts

| Command        | Action                                                                          |
| :------------- | :------------------------------------------------------------------------------ |
| `pnpm dev`     | Starts the local Astro development server with hot-module reloading             |
| `pnpm check`   | Runs `@astrojs/check` and TypeScript strict type diagnostics across all files   |
| `pnpm lint`    | Runs ESLint 9 to ensure code style consistency                                  |
| `pnpm format`  | Formats the codebase using Prettier with Astro plugin                           |
| `pnpm build`   | Executes type validation (`astro check`) and generates static output to `dist/` |
| `pnpm preview` | Serves the production build locally to test edge routing and assets             |

---

## 🌐 Custom Domain & Deployment

The production deployment is hosted on **Vercel** with continuous deployment connected to the `main` branch.

- **Primary Domain:** `https://bencoder.site`
- **Subdomain Redirect:** `https://www.bencoder.site` ➔ `https://bencoder.site`
- **DNS Records (Namecheap):**
  - `@` (Apex) ➔ `A Record` pointing to `216.198.79.1` (Vercel Anycast IP)
  - `www` ➔ `CNAME Record` pointing to `cname.vercel-dns.com.`

---

## 👨‍💻 Author & Contact

**Abdenour Benkorich (BenCoder)**  
_AI Instructor · Software Engineer · Data Science Student_

- 🌐 **Website:** [bencoder.site](https://bencoder.site)
- 💼 **LinkedIn:** [/in/danour](https://linkedin.com/in/danour)
- 🐙 **GitHub:** [@Ben-coderr](https://github.com/Ben-coderr)
- 📸 **Instagram:** [@ben.coderr](https://instagram.com/ben.coderr) _(102K+ community)_
- ✉️ **Email:** [benkorich.abdenour@gmail.com](mailto:benkorich.abdenour@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to explore the code for reference and learning. Content, logos, and personal case studies remain the copyright of Abdenour Benkorich.
