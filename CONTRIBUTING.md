# Contributing Guide

Thank you for your interest in contributing to the **bencoder.site** portfolio repository! Whether reporting a bug, suggesting a performance enhancement, or submitting a pull request, your help is appreciated.

---

## 🛠️ Development Workflow

### 1. Prerequisites

- **Node.js**: `20.x` or `22.x` (LTS)
- **pnpm**: `9.x` or higher (`corepack enable pnpm`)

### 2. Setup

```bash
git clone https://github.com/Ben-coderr/danour-protfolio.git
cd danour-protfolio
pnpm install
```

### 3. Local Development

```bash
pnpm dev
```

Open `http://localhost:4321` in your browser.

---

## 📏 Code Quality & Standards

Before committing any changes, run the validation pipeline:

```bash
# 1. Astro & TypeScript Diagnostics (must be 0 errors, 0 warnings)
pnpm check

# 2. ESLint
pnpm lint

# 3. Code formatting
pnpm format

# 4. Production static build verification
pnpm build
```

---

## 🎨 Design Principles & Constraints

All contributions must strictly respect the rules outlined in `CLAUDE.md`:

1. **Monochrome Palette:** Do not introduce saturated color accents, gradients, or colored links. The only permitted colored token is the green availability status dot (`#10B981`).
2. **Islands Architecture:** Prefer static Astro components (`.astro`). Use React islands (`.tsx`) only where client-side interactivity or state management is genuinely required.
3. **No External CDNs at Runtime:** Fonts must be self-hosted via `@fontsource-variable` packages; icons must be bundled via `astro-icon`.
4. **Authentic Data:** Never fabricate numbers, metrics, or client credentials. Keep content grounded in real-world engineering impact.
5. **Accessibility:** Ensure semantic HTML elements, high-contrast ratios, and complete `:focus-visible` keyboard accessibility.

---

## 📝 Commit Conventions

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

- `feat:` A new feature or section (e.g. `feat(i18n): add localized case study`)
- `fix:` A bug fix (e.g. `fix(seo): correct canonical URL tags`)
- `perf:` Performance optimization (e.g. `perf: optimize hero image WebP decoding`)
- `docs:` Documentation improvements (e.g. `docs: update deployment instructions`)
- `style:` Formatting or aesthetic touch-ups that do not alter code logic
- `refactor:` Code restructuring without behavioral change
- `chore:` Maintenance tasks, dependency bumps, or tooling configuration

---

## 🔀 Pull Request Process

1. Fork the repo and create your branch from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. Keep changes focused and commits granular.
3. Verify all checks pass: `pnpm check && pnpm lint && pnpm build`.
4. Submit a Pull Request targeting `main` with a clear explanation of what changed and how to test it.
