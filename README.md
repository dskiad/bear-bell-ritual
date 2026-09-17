# The Most Honourable and Entirely Imaginary Order of the Bear Bell

This repository contains the complete static website for the **Grand Assembly of the Most Honourable and Entirely Imaginary Order of the Bear Bell**.

## Live page

- ChatGPT-hosted page: **https://bear-bell-ritual.dskiad.chatgpt.site/**
- GitHub Pages address after one-time Pages activation: **https://dskiad.github.io/bear-bell-ritual/**

## Main entrance

Opening `index.html` presents the Bear Bell title and emblem with exactly three entrances:

1. **User** — open access, no code required.
2. **Grand Secretary** — protected access.
3. **Webmaster** — protected access.

The Grand Secretary and Webmaster areas use the owner-selected access code. The plain-text code is not stored in the source; the browser verifies its SHA-256 hash.

## Website pages

- `index.html` — main three-role menu.
- `user.html` — open User / Ritual Reader area.
- `ritual.html` — browser viewer that assembles the ritual PDF from the repository PDF chunks.
- `grand-order.html` — Grand Order structure, 8 active ritual officers and proposed 20 Grand Officers.
- `grand-secretary.html` — protected Grand Secretary dashboard.
- `webmaster.html` — protected Webmaster dashboard and site map.
- `certificate-editor.html` — protected certificate editor available to Grand Secretary or Webmaster.
- `logo.svg` — Bear Bell website emblem.
- `style.css` — shared responsive styling.
- `auth.js` — shared browser access control.

## GitHub Pages

A deployment workflow is included at `.github/workflows/pages.yml`.

GitHub currently requires Pages to be enabled once in the repository settings before the workflow can publish. In GitHub open **Settings → Pages**, set **Source** to **GitHub Actions**, then run the Pages workflow again. After that, pushes to `main` will deploy the website automatically.

## Ritual character

The ritual itself describes the Order as a light-hearted work of parody and charitable entertainment. The website retains that framing while providing a coherent Grand Assembly structure, ceremonial officer titles and administrative tools.
