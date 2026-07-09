# aryan-vashishth.ts

Personal portfolio of **Aryan Vashishth** — full-stack engineer & agentic AI builder.

The whole site pretends to be a TypeScript project open in a code editor: five
permanently-open file tabs (`home.ts`, `skills.ts`, `experience.ts`,
`projects.ts`, `contact.ts`), a line-number gutter, and a procedurally
generated ASCII comment-block texture behind every page. Design homage to
[finethought.com.au](https://finethought.com.au), rebuilt from scratch with a
tab-first information architecture.

## Stack

- **Next.js 16** (App Router, static export) + TypeScript
- **Motion** (framer-motion) — reveals, expansions, giant-word parallax
- **next/font** — Archivo (display) + Fragment Mono (code voice), self-hosted
- Hand-rolled CSS design system (`src/app/globals.css`), dark + light themes

## Anatomy

| Path | What it is |
| --- | --- |
| `src/lib/data.ts` | **All content** — edit skills, roles, projects, links here |
| `src/lib/ascii.ts` | Seeded generator for the background comment-block art |
| `src/components/AsciiCanvas.tsx` | Measures the page, draws art + line numbers, carves out `[data-ascii-exclude]` zones |
| `src/components/ExpandTable.tsx` | Mono tables whose rows expand in place (deep-linkable via `#hash`) |
| `src/components/Mockup.tsx` | Hand-built UI vignettes shown inside project expansions |
| `src/app/globals.css` | Theme variables, editor chrome, type scale — the design system |

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy

`next.config.ts` is set to `output: "export"` — `npm run build` emits a fully
static site into `out/`.

- **GitHub Pages** (wired up): every push to `main` runs
  `.github/workflows/deploy.yml`, which builds with
  `NEXT_PUBLIC_BASE_PATH=/portfolio` and publishes to
  <https://aryanz01.github.io/portfolio/>.
- **Vercel / Netlify / custom domain**: import the repo (zero config) and the
  site builds at the root — the base path only applies when
  `NEXT_PUBLIC_BASE_PATH` is set. Update `SITE_URL` in `src/lib/data.ts` to the
  new domain.

## Content updates

Everything a recruiter reads lives in `src/lib/data.ts` (plus the hero/statement
copy in `src/app/page.tsx`). Replace `public/Aryan_Vashishth_Resume.pdf` to
update the downloadable resume.

When the final domain is known, change `SITE_URL` in `src/lib/data.ts` — it
feeds `metadataBase`, `sitemap.xml` and `robots.txt`. The OG link-preview image
is generated at build time from `src/app/opengraph-image.tsx`; a styled 404
ships as `src/app/not-found.tsx`.
