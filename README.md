# Chappelly

The public website for **Chappelly LLC**, established 2026. Chappelly is a small studio that
builds mobile apps: MealNav (in progress) and GymNav (coming soon).

This site exists to be the organization's public "about" page, including for Google Play
Console organization verification. It is a static site with no backend.

## Stack

Plain HTML, CSS, and JavaScript. No frameworks, no build step, no external libraries, no
package manager. Open `index.html` in a browser and it works.

```
.
├── index.html          # the whole site, one page
├── css/styles.css      # styles, light and dark via prefers-color-scheme
├── js/main.js          # footer year + mobile nav toggle
├── assets/
│   ├── favicon.svg
│   └── mealnav-icon.png   # copied from the meal-planner repo's app icon
├── CLAUDE.md           # guidance for Claude Code
└── README.md
```

## Running locally

Open `index.html` directly, or serve the folder with any static file server, for example:

```bash
python -m http.server 8000
```

then visit http://localhost:8000.

## Deploying

Any static host works (GitHub Pages, Cloudflare Pages, Netlify, an S3 bucket). Upload the
repository contents as-is. There is nothing to build.

## Maintaining

- **Apps section:** edit the cards in `index.html` under `<section id="apps">`. When GymNav
  ships, swap its placeholder icon for a real one in `assets/` and change the badge.
- **Contact email:** `index.html` currently points to `contact@chappelly.com`. Confirm this is the
  mailbox you want listed before publishing; Google Play verification checks that the site
  and the developer account's contact details agree.
- **MealNav icon:** `assets/mealnav-icon.png` is a copy of
  `apps/mobile/assets/images/icon.png` from the meal-planner repo. Re-copy it if the app icon
  changes.

## License

All rights reserved, Chappelly LLC.
