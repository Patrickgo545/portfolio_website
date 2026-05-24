@AGENTS.md

# Portfolio Website

Personal portfolio for Patrick Go — backend & AI engineer. Single-page static site showcasing projects and contact info.

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 16.2.6 (App Router) |
| React | 19.2.4 |
| TypeScript | ^5 (strict mode) |
| Tailwind CSS | ^4 (`@tailwindcss/postcss`) |
| Lucide React | ^1.16.0 |

## Project Structure

```
src/
├── app/          # App Router root: layout.tsx, page.tsx, globals.css
├── components/   # All UI components — flat, no subdirectories
└── lib/          # Static data + TypeScript interfaces
public/           # Static SVG assets
```

## Key Files

| File | Purpose |
|------|---------|
| `src/lib/projects.ts` | Project data array + `Project` interface |
| `src/app/globals.css` | Tailwind import, `fadeInUp` keyframe, font theme vars |
| `src/app/layout.tsx` | Root layout: font loading, metadata, `<Nav>` |
| `src/app/page.tsx` | Page composition: Hero → Projects → About → Contact |
| `eslint.config.mjs` | ESLint 9 flat config |

## Commands

```bash
npm run dev      # Dev server → localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
# No test runner configured
```

## Path Aliases

`@/*` → `./src/*` (tsconfig.json `paths`)

## Additional Documentation

- [`.claude/docs/architectural_patterns.md`](.claude/docs/architectural_patterns.md) — Component patterns, data flow, animation, layout conventions
