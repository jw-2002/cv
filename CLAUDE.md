# CLAUDE.md — Jack Williamson Personal CV

## Project overview

A single-page digital CV for Jack Williamson, hosted on GitHub Pages at `jw-2002.github.io`. The design is clean and professional — business-card aesthetic with an eggshell background, near-black text, EB Garamond headings, and Arial body copy.

## Tech stack

- **Framework**: Astro 5.x (static output)
- **Styling**: Plain CSS (no preprocessors, no Tailwind)
- **Fonts**: EB Garamond (headings, via Google Fonts) + Arial (body, system font)
- **TypeScript**: Strict mode (`astro/tsconfigs/strict`)
- **Deployment**: GitHub Actions → GitHub Pages

## Project structure

```
src/
  components/
    BaseLayout/        # Root HTML shell — global styles, meta tags
    DefaultTemplate/   # Page wrapper: BaseLayout + <main> slot + Footer
    CVHeader/          # Name and subtitle at the top of the CV
    CVSection/         # Collapsible accordion section (native <details>)
    Footer/            # Copyright, social links, build credit
  pages/
    index.astro        # The CV page — single page, all content lives here
  styles/
    global.css         # Global resets, typography, utility classes
    variables.css      # Design tokens (colours, spacing, fonts)
public/
  favicon.svg
```

## Before creating a new component

Check these existing components first — extend or compose them before creating new ones:

| Component | Path | Purpose |
|-----------|------|---------|
| `BaseLayout` | `src/components/BaseLayout/BaseLayout.astro` | Root HTML, meta tags, global style imports |
| `DefaultTemplate` | `src/components/DefaultTemplate/DefaultTemplate.astro` | Full-page shell (BaseLayout + `<main>`) |
| `CVHeader` | `src/components/CVHeader/CVHeader.astro` | Name + subtitle header at top of page |
| `CVSection` | `src/components/CVSection/CVSection.astro` | Collapsible section with a `title`; optional `open` prop |
| `Footer` | `src/components/Footer/Footer.astro` | Copyright, social links, build credit |

## File conventions

- **One component per folder**: `src/components/MyComponent/MyComponent.astro`
- **CSS co-located with component**: `src/components/MyComponent/MyComponent.css` — imported at the top of the `.astro` file
- **No `<style>` blocks inside `.astro` files** — use the co-located `.css` file. The only exception is truly one-off page-level styles in a page file (e.g. `index.astro`)
- **Global tokens only in `variables.css`** — never hardcode colours, fonts, or spacing in component CSS; use CSS custom properties
- **Pages are thin** — pages import components and pass props; no layout logic in pages

## CSS conventions

Use `variables.css` tokens exclusively — no raw hex or px values in component CSS.

Key tokens:
| Token | Value | Use |
|-------|-------|-----|
| `--font-heading` | EB Garamond, serif | All headings (`h1`–`h4`) |
| `--font-body` | Arial, sans-serif | Body text, labels, UI |
| `--color-bg` | `#f4f0e8` | Page background |
| `--color-text` | `#111111` | Primary text |
| `--color-muted` | `#555555` | Secondary / meta text |
| `--color-border` | `#d0cdc8` | Subtle dividers |
| `--color-border-strong` | `#444444` | Stronger dividers (header/section rules) |

Utility classes available from `global.css`: `.stack`, `.divider`.

## CVSection usage

`CVSection` wraps each section in a native `<details>` accordion. Pass `open={true}` to start expanded. Only one section stays open at a time (opening one closes the others, via the component's script).

```astro
<CVSection title="Profile" open={true}>
  <!-- starts expanded -->
</CVSection>

<CVSection title="Professional Experience">
  <!-- starts collapsed -->
</CVSection>
```

## Astro-specific rules

- Use `import.meta.env.BASE_URL` wherever paths are constructed — never hardcode `/`
- Keep client-side JS to an absolute minimum (currently just the accordion toggle and the scroll-reveal IntersectionObserver); always guard motion behind `prefers-reduced-motion`
- Prefer static rendering; avoid `client:*` directives unless genuinely necessary

## Do not

- Hardcode colours, fonts, or spacing — use CSS custom properties from `variables.css`
- Write `<style>` blocks in component `.astro` files — use the paired `.css` file
- Add dependencies without a strong reason — the project has no runtime deps beyond Astro itself
- Re-add retro/gaming styles (green background, pixel fonts, box shadows) — the design is now professional/minimal
