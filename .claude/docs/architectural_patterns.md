# Architectural Patterns

Patterns that appear across multiple files in this codebase.

## Page Composition

`src/app/page.tsx` is a thin composition root — it imports and sequences section-level components (`Hero`, `Projects`, `About`, `Contact`) with no logic of its own.

## Flat Component Directory

All components live in `src/components/` with no subdirectories. Named by role: section name (`Hero`, `About`) or element name (`ProjectCard`, `Nav`). Default exports only.

## Static Data in `src/lib/`

Data is typed arrays defined in `src/lib/`. `src/lib/projects.ts` exports both the `Project` interface and the `projects` array. Components import directly — no API routes, no `fetch`, no dynamic data.

## Section Layout Contract

Every section follows the same structure:

```
<section id="<name>" className="py-24 ...bg...">
  <div className="max-w-5xl mx-auto px-6">
    ...content...
  </div>
</section>
```

Files: `Hero.tsx`, `Projects.tsx`, `About.tsx`, `Contact.tsx`

## Tailwind v4 Utility-Only Styling

No CSS Modules. All styles via Tailwind utility classes. Custom tokens (fonts, animation) defined in `src/app/globals.css` via the `@theme` directive. Color palette: Tailwind's `neutral` scale throughout.

## Staggered Entrance Animation

Custom `fadeInUp` keyframe defined in `globals.css`. Applied via `animate-fade-in-up` class with inline `animationDelay` style props for staggered timing. Pattern used in `Hero.tsx` (0 ms, 150 ms, 300 ms).

## Anchor-Based Navigation

Navigation uses `<a href="#section-id">` hash links, not Next.js `<Link>`. `scroll-behavior: smooth` on `<html>` in `globals.css` handles smooth scrolling. Section `id` values match anchor `href` fragments exactly.

## Server Components Only

No `"use client"` directives anywhere. All components are React Server Components (Next.js 16 default). No `useState`, `useEffect`, or browser event handlers — all components are purely presentational.

## External Link Safety

All external links use `target="_blank" rel="noopener noreferrer"`. Applied consistently in `ProjectCard.tsx` and `Contact.tsx`.

## Font Loading Pattern

Fonts (`Geist`, `Geist Mono`) loaded in `src/app/layout.tsx` via `next/font/google`. Exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`), registered in `globals.css` via `@theme`, and applied on `<body className={...}>`.
