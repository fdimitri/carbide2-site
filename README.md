# carbide2-site

Marketing site + devblog for [CARB/IDE2](https://github.com/carbide2/carbide2-server).
Astro 5 + MDX + Tailwind, deployed as a static site on Cloudflare Pages.

Production: <https://carbidecore.online> *(domain may change — TODO)*

## Stack

- **Astro 5** — static site generator with islands.
- **MDX** — Markdown + components for content pages and blog posts.
- **Tailwind CSS 3** — design tokens for the carbide-green / terminal aesthetic.
- **Shiki** (built into Astro) — syntax highlighting.
- **astro-icon** + Lucide — iconography.
- **@astrojs/rss** + **@astrojs/sitemap** — feed and sitemap.
- **pagefind** — static-time search index (built in `npm run build`).

## Develop

```bash
npm install
npm run dev          # → http://localhost:4321
npm run build        # static output in dist/ + pagefind index
npm run preview      # serve the built output
npm run check        # astro check (TS + content schema)
```

Node 18.17+ (or 20.3+) required.

## Content

- **Pages**: `src/pages/*.astro` for static pages (home, features, about, docs).
- **Blog**: `src/content/blog/*.mdx` (frontmatter schema in `src/content/config.ts`).
  Set `draft: true` to hide a post in production. Tags get auto-generated archive
  pages at `/blog/tags/<tag>`.
- **RSS**: `src/pages/rss.xml.ts` builds `/rss.xml` from non-draft posts.

## Design tokens

See [tailwind.config.mjs](./tailwind.config.mjs). Brand palette lives under the
`carbide-*` color namespace; JetBrains Mono is the display face, Inter is the
body. The hero terminal in [src/components/site/TerminalHero.astro](./src/components/site/TerminalHero.astro)
is a **CSS-animated fake** — exposing a real PTY to anonymous visitors is
explicitly out of scope. The component is structured so the static `<ol>` can
later be swapped for an xterm.js island connected to a sandboxed backend.

## Deploy (Cloudflare Pages)

1. Push this repo to GitHub.
2. Cloudflare → Pages → *Create a project* → connect the repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node version: `20`
4. Env vars (production only):
   - `PUBLIC_CF_ANALYTICS_TOKEN` — Cloudflare Web Analytics site token.
5. Custom domains → add `carbidecore.online` and `www.carbidecore.online`.

### DNS (nameservers stay at current registrar)

Cloudflare Pages will display the exact target values when you add each custom
domain. Create these records at your DNS host:

| Host                      | Type   | Value                                  |
| ------------------------- | ------ | -------------------------------------- |
| `carbidecore.online`      | `A`    | (apex IPs shown in Pages wizard)       |
| `www.carbidecore.online`  | `CNAME`| `carbide2-site.pages.dev`              |

TLS certificates are auto-provisioned and renewed by Cloudflare — no certbot,
no manual renewal. SSL/TLS mode should be **Full (strict)**; enable **Always
Use HTTPS**. Canonical host is the apex; `www` 301s to apex (configure via a
Cloudflare Bulk Redirect).

## License

GPLv3 — see [LICENSE](./LICENSE). Matches the rest of the CARB/IDE2 project.
