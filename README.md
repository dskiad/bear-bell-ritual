# The Most Honourable and Entirely Imaginary Order of the Bear Bell

This repository now contains the complete static website for the **Grand Assembly of the Most Honourable and Entirely Imaginary Order of the Bear Bell**.

## Live pages

- ChatGPT-hosted page: **https://bear-bell-ritual.dskiad.chatgpt.site/**
- GitHub Pages deployment: **https://dskiad.github.io/bear-bell-ritual/**

## Main entrance

Opening `index.html` presents the official Bear Bell emblem and three clear entrances:

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

A GitHub Actions workflow is included at `.github/workflows/pages.yml` to deploy the repository as a static GitHub Pages website whenever `main` is updated.

## Ritual character

The ritual itself describes the Order as a light-hearted work of parody and charitable entertainment. The website retains that framing while providing a coherent Grand Assembly structure, ceremonial officer titles and administrative tools.
