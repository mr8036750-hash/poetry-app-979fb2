# AGENTS.md

## Architecture
Static site with no build step. Netlify publishes the repo root (`netlify.toml` → `publish = "."`).

- `index.html` — page markup; the user's original structure (`#poetry-container`, `#verse`, `onclick="newVerse()"`, `app.js`) is preserved intentionally.
- `app.js` — `verses` array, `newVerse()` (random pick that never repeats the current verse, with a fade transition), `copyVerse()`, counter, Space-key shortcut.
- `style.css` — all styling; theme colors are CSS variables in `:root`.

## Conventions
- Keep it dependency-free vanilla JS with global functions (the HTML uses inline `onclick`).
- Verses are in romanized Hindustani; code comments are in Hinglish to match the owner's style.
- The first entry in `verses` must match the initial text in `index.html` (`currentIndex` starts at 0).
- Verses are objects `{ text, poet, from }`; Ghalib plus world poets. Filter chips (`setFilter`) pick all / Ghalib / world. World verses are original English (public domain) or Hinglish renderings.
