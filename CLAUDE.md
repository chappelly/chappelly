# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

The public website for **Chappelly LLC** (established 2026), an organization that builds
mobile apps. Its purpose is to be an "about" page for the org, including for Google Play
Console organization verification. Apps: **MealNav** (meal planner, in progress, source in the
sibling `meal-planner` repo) and **GymNav** (coming soon, nothing built yet).

## Hard constraints

- **No backend.** Static files only. Do not add server code, forms that post anywhere, or
  anything that needs hosting beyond a static file server.
- **No frameworks, no external libraries, no build step.** Plain HTML, CSS, and JavaScript
  only. No npm, no CDN scripts, no web fonts fetched from third parties, no CSS
  preprocessors. If a feature seems to need a library, do it by hand or leave it out.
- **Keep it one page** unless there is a clear reason to add another (a privacy policy page
  would be a legitimate reason; a blog would not).

## Layout

```
index.html        # the single page: header, hero, apps, about, contact, footer
css/styles.css    # all styles; CSS custom properties at the top, dark mode via media query
js/main.js        # footer year and mobile nav toggle; wrapped in an IIFE, no globals
assets/           # favicon.svg, app icons
```

## Conventions

- Semantic HTML with accessible controls (the nav toggle uses `aria-expanded` and
  `aria-controls`; keep that working if you touch it).
- Colors and spacing come from the custom properties in `:root` at the top of `styles.css`.
  Add new tokens there rather than hardcoding values in rules. Every color needs a dark-mode
  value in the `prefers-color-scheme: dark` block.
- Mobile breakpoint is 640px. The nav collapses below it.
- Voice for copy: direct, practical, a little dry. No hype. Do not promise features MealNav
  does not have; its current feature set is described in the meal-planner repo's
  `docs/MARKETING_STRATEGY.md`.
- Facts that must stay accurate on the page: legal name **Chappelly LLC**, established
  **2026**, developer name **Chappelly**.

## Checking your work

There are no tests. Open `index.html` in a browser (or `python -m http.server`) and check
both light and dark color schemes and a narrow viewport for the mobile nav.
