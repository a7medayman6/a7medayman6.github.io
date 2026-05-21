# Portfolio — Developer Notes

## Stack

Plain HTML/CSS/JS, no build step. Deployed via GitHub Pages from the `master` branch root.

- `index.html` — main single-page portfolio
- `articles.html` — articles listing page
- `assets/css/style.css` — all styles (design tokens in `:root`)
- `assets/js/data.js` — all content as JS globals (`EXPERIENCE`, `PROJECTS`, `PRODUCTS`, `SKILLS`, `ARTICLES`)
- `assets/js/main.js` — renders the portfolio sections and handles all interactions
- `assets/js/articles.js` — renders the articles page

---

## Updating Articles

Articles are sourced from [a7medayman.hashnode.dev](https://a7medayman.hashnode.dev) and stored in the `ARTICLES` array in `assets/js/data.js`.

### Option A — Run the update script (recommended)

The `scripts/update-articles.js` script uses a headless browser (Playwright) to scrape the Hashnode blog and rewrite the `ARTICLES` array in `data.js`.

**First time setup** (once):
```bash
cd scripts && npm install && npx playwright install chromium
```

**Update articles (data.js only):**
```bash
cd scripts && node update-articles.js
```

**Update, commit, and push in one step:**
```bash
cd scripts && node update-articles.js --push
```

### Option B — Edit manually

Open `assets/js/data.js` and update the `ARTICLES` array. Each entry:

```js
{
  title: 'Article Title Here',
  slug: 'article-slug-from-hashnode-url',   // the part after hashnode.dev/
  date: 'Mar 14, 2024',
  readTime: '8 min read',
  brief: 'One or two sentence description shown on the articles page.',
},
```

The full Hashnode URL for each article is constructed as:
`https://a7medayman.hashnode.dev/<slug>`

---

## Adding Content

### New experience entry

Add to the `EXPERIENCE` array in `data.js`. Each entry has a `company`, `companyUrl`, `dateRange`, and a `roles` array. Each role has `title`, `dateRange`, `bullets` (strings), and `stack` (strings).

### New project

Add to `PROJECTS` in `data.js`. Fields: `title`, `summary` (shown collapsed), `description` (shown expanded), `features` (array), `stack` (array), `github` (url or null), `live` (url or null), `liveLabel` (optional, default "Live").

### New product

Same structure as projects but add to `PRODUCTS`. The "Product" badge is added automatically.

---

## Design Tokens

All colors, spacing, and typography are defined as CSS custom properties in `:root` in `style.css`:

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#F9F6F1` | Page background (warm ivory) |
| `--accent` | `#2D6A4F` | Green accent, links, highlights |
| `--text` | `#1A1A1A` | Body text |
| `--muted` | `#6B7280` | Secondary text |
| `--border` | `#E8E3DA` | Dividers and card borders |
| `--font-display` | Fraunces | Headings |
| `--font-body` | Inter | Body copy |
