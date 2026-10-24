# Rules for Claude Code

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
