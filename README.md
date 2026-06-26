# Jack Williamson — Personal CV

A single-page digital CV, built with [Astro](https://astro.build) and plain CSS, deployed to GitHub Pages at **https://jw-2002.github.io**.

The design is a clean, professional business-card aesthetic: eggshell background, near-black text, EB Garamond headings and Arial body copy. Sections are collapsible accordions, with subtle scroll-reveal and hover animations (all gated behind `prefers-reduced-motion`).

## Project structure

```
src/
  components/   # BaseLayout, DefaultTemplate, CVHeader, CVSection, Footer
  pages/        # index.astro — the CV (all content lives here)
  styles/       # global.css (resets/typography) + variables.css (design tokens)
public/         # favicon
```

See [`CLAUDE.md`](./CLAUDE.md) for conventions (component structure, CSS tokens, do's and don'ts).

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the build locally before deploying  |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
