<h1 align="center">Vikas Dangi — Portfolio</h1>

<p align="center">
  A dark-first, motion-rich personal portfolio for a backend / distributed-systems engineer.<br/>
  Built with React, Tailwind CSS and Framer Motion.
</p>

---

## Overview

A single-page portfolio covering hero, about, experience, skills, projects,
education/certifications, contact and footer — with a sticky scroll-aware
navigation bar and reduced-motion support throughout.

**Design system:** cinematic deep-green charcoal canvas, warm ivory type, a
restrained brass accent with muted foliage green, hairline glass borders,
editorial serif headings and original SVG concept artwork (no stock
photography, no fabricated product UI). The one photograph on the site is the
owner's own portrait in the hero, with its background cut out so the canvas
shows through the alpha channel and only the bottom of the torso dissolves into
the page.

**Typography:** Fraunces (display serif) + Inter (body), with system fallbacks.

**Motion:** each page band is a *curtain* — it swipes upward against the scroll
direction on a stiff spring, so the page reads as sheets of film sliding over
one another. All of it is transform-only and collapsed for reduced-motion users.

## Tech stack

| Layer      | Choice                                   |
| ---------- | ---------------------------------------- |
| Framework  | React 18 (Create React App / `react-scripts` 5) |
| Styling    | Tailwind CSS 3                           |
| Motion     | Framer Motion 11                         |
| Icons      | Local inline SVG components              |
| Hosting    | Netlify (`netlify.toml` at repo root)    |

## Getting started

```bash
npm install --ignore-scripts   # see note below
npm start                      # http://localhost:3000
npm run build                  # production build in ./build
npm test                       # jest + React Testing Library
```

> **Note on `--ignore-scripts`:** `netlify-cli` is present as a dependency for
> optional local deploys, and its post-install step is incompatible with Node 24.
> Skipping lifecycle scripts does not affect the app, the build or the tests.
> If you use Node 18/20, a plain `npm install` also works.

## Editing content

All copy lives in **`src/data/site.js`** — profile details, nav items, hero,
about, experience, skills, projects, education, certifications and contact.
Components read from this file, so content changes never require touching
layout or animation code.

## Resume download

All **Download Resume** buttons read a single value, `profile.resumeUrl` in
`src/data/site.js`, which points at an asset on the repository's latest GitHub
release:

```
https://github.com/dangi-vikas/my-portfolio/releases/latest/download/Vikas-Dangi-Resume.pdf
```

The PDF is deliberately not committed, so it stays out of the repository's file
tree, and GitHub's `Content-Disposition: attachment` header makes the browser
download it rather than open a preview. To update the resume, replace the asset
on that release — same name — and the next click serves the new file, with no
rebuild and no redeploy. One-time setup and the full workflow:
[`public/resume/README.md`](public/resume/README.md).

## Project structure

```
public/
  index.html          # SEO, Open Graph, fonts, JSON-LD, no-JS fallback
  favicon.svg         # monogram mark
  og-image.png        # 1200x630 social card
  resume/README.md    # how the resume is published as a GitHub release asset
src/
  App.js
  index.css           # Tailwind layers + design-system primitives
  data/site.js        # single source of truth for content
  assets/portrait-cutout.webp  # hero portrait, background removed (880x1100)
  hooks/useScroll.js  # active-section observer + scrolled flag
  Components/
    Navbar/ Hero/ About/ Experience/ Skills/ Projects/ Education/ Contact/ Footer/
    ui/               # Reveal, SectionHeading, CurtainSection, Background,
                      # ScrollProgress, IntroCurtain, Icons
```

## Accessibility & performance

- Semantic landmarks, a skip link, visible focus rings and labelled controls.
- `prefers-reduced-motion` is honoured globally **and** per-component
  (`MotionConfig reducedMotion="user"` + `useReducedMotion`); decorative loops
  and the scroll-progress bar are removed entirely for those users.
- Animations use transform/opacity only; the background uses gradient washes
  instead of expensive blur filters.
- Fonts load with `display=swap`, so text never blocks on the network.
- Images/SVGs carry explicit dimensions, so nothing can shift layout as it
  loads; the hero portrait ships as an 880x1100 cut-out WebP (151 KB) rather
  than the 1.8 MB original PNG.

## Deployment

Netlify builds with `npm run build` and publishes `build/`, with an SPA
redirect and long-lived caching for hashed assets (see `netlify.toml`).
`NODE_VERSION` is pinned to 20 for reproducible builds.
