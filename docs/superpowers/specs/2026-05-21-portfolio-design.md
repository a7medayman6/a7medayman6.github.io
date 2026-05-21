# Portfolio Website Design Spec
**Date:** 2026-05-21
**Status:** Approved

---

## Overview

Single-page personal portfolio for Ahmed Ayman (Software Engineer @ Bosta) hosted on GitHub Pages at `a7medayman6.github.io`. Target audience: recruiters, freelance clients, startup founders. Replaces the existing Hugo-generated site entirely.

---

## Tech Stack

- **Approach:** Plain HTML/CSS/JS — no build step, push to `master` and GitHub Pages serves directly
- **Fonts:** `Inter` (body/UI) + `Fraunces` (name heading only) via Google Fonts
- **Icons:** Inline SVG for social icons; no icon library dependency
- **Assets:** Profile pic at `profile-pic.jpeg` (already in repo), resume at `resume.pdf` (to be compiled from `resume.tex`)

---

## Visual System

| Token | Value |
|---|---|
| Background | `#F9F6F1` (warm ivory) |
| Text | `#1A1A1A` (near-black ink) |
| Accent | `#2D6A4F` (deep green) |
| Muted | `#6B7280` (gray) |
| Border/Divider | `#E8E3DA` |
| Card radius | `12px` |
| Chip radius | `999px` |
| Card shadow | `0 2px 12px rgba(0,0,0,0.06)` |
| Hover shadow | `0 8px 24px rgba(0,0,0,0.10)` |
| Hover lift | `translateY(-2px)` |

---

## File Structure

```
index.html
resume.pdf
profile-pic.jpeg
assets/
  css/
    style.css
  js/
    data.js       # all content as JS objects
    main.js       # scroll animations, nav, collapsible cards
404.html          # simple redirect to index
```

All existing Hugo-generated files and folders are deleted before work begins.

---

## Sections

### 1. Sticky Navigation
- Fixed top bar, `backdrop-filter: blur(12px)` + `background: rgba(249,246,241,0.85)` on scroll
- Left: name in accent color
- Right: anchor links — `Experience · Projects · Skills · Blog · Contact`
- Active link highlighted in accent color via IntersectionObserver
- Hamburger menu on mobile (≤768px) with slide-down drawer

### 2. Hero
- Layout: profile pic left, text right (stacks vertically on mobile)
- Profile pic: circle, 120px, subtle ring in accent color, loaded from `profile-pic.jpeg`
- Name: `Fraunces`, large (clamp 2.5rem–4rem)
- Title: "Backend Engineer · Distributed Systems · Open Source"
- Bio: one-liner generated from resume — "3+ years building production distributed systems and leading engineering teams. Currently scaling fulfillment infrastructure at Bosta."
- CTA buttons (3):
  - **Download Resume** → `href="resume.pdf" download`
  - **Contact Me** → `href="mailto:a.ayman6000@gmail.com"`
  - **Visit Blog** → `href="https://a7medayman.hashnode.dev" target="_blank"`
- Subtle animated background: 3–4 very faint floating geometric shapes (CSS keyframes, opacity 0.03–0.05), no performance impact

### 3. Experience (vertical timeline)
- Left vertical line in `#E8E3DA`, accent-colored dot per entry
- Each entry:
  - **Company** (linked) + date range right-aligned
  - **Role** in muted italic
  - 2–3 bullet points from resume
  - Tech stack chips (accent bg at 10% opacity, accent text)
- Entries (from resume, newest first):
  1. **Bosta** (Dec 2023–Present) — Software Engineer, Backend (Fulfillment) + sub-role Sllr
  2. **R&D Center — Air Defense Forces** (Dec 2022–Dec 2023) — Software Engineer
- Scroll reveal: fade + slide-up on entry

### 4. Projects (collapsible cards grid)
- 2-column grid on desktop, 1-column on mobile
- **Default (compact) state:** title, one-liner description, top 3 stack chips, "↓ Expand" toggle button
- **Expanded state (CSS max-height transition):** full description, feature bullets, all stack chips, GitHub link button + Live Demo button (if homepage exists)
- 8 curated projects (source: resume + GitHub repos):
  1. **Systems & Protocol Implementations** — Tiny Git, Tiny Redis, Tiny SQLite (Python) · GitHub links per sub-project
  2. **Musheer — AI Arabic Sign Language Tutor** — Python, TensorFlow, FastAPI, React · Play Store link · 50K+ downloads, 1st place ASU Innovates 2022
  3. **Standuply** — Node.js, Express, MongoDB, React, Vite · Live: standuply.vercel.app
  4. **Env Box** — Next.js 14, TypeScript, MongoDB, Docker · GitHub + Live: env-box.vercel.app
  5. **Live Captions** — Android, ElevenLabs API · Play Store link · 100K+ users
  6. **Slide Craft** — TypeScript · Live: deck-craft-theta.vercel.app
  7. **Markdown Workspace** — Electron, React, Vite, TypeScript — desktop markdown editor
  8. **Mapbox Offline Server** — Node.js — tile caching server for offline map loading
- Cards: `background: #fff`, `border: 1px solid #E8E3DA`, hover lift + deeper shadow

### 5. Skills
- 6 category rows, label left, chips right (wraps on mobile)
- Categories and chips:
  - **Languages:** Node.js, TypeScript, Python, JavaScript, SQL, Bash
  - **Frameworks:** NestJS, Express.js, FastAPI, Jest, Supertest
  - **Databases & Search:** MySQL, MongoDB, Redis, Elasticsearch, RabbitMQ, GCP Pub/Sub
  - **Cloud & DevOps:** GCP, Docker, Kubernetes, GitLab CI, GitHub Actions, Linux
  - **Architecture:** Microservices, Event-Driven, Saga Orchestration, REST, GraphQL, Webhooks
  - **Tools & Security:** JWT, OAuth 2.0, RBAC, AES-256, clinic.js, Unleash, TypeORM
- Chip style: category-tinted soft background, dark text, `999px` radius

### 6. Blog CTA
- Full-width section, dark background (`#1A1A1A`), warm ivory text
- Headline: "I write about backend engineering, distributed systems, and the craft of software."
- Sub-copy: 1 sentence inviting engineers and teams to read
- Single CTA button: "Read the Blog →" → hashnode URL
- Visually distinct from surrounding white sections

### 7. Contact
- Centered, max-width 560px
- Headline: "Let's work together."
- Sub-copy: short invite mentioning open to engineering roles, consulting, and collaborations
- Single button: "Send an Email" → `mailto:a.ayman6000@gmail.com`
- Social links row: GitHub icon + LinkedIn icon

### 8. Footer
- Centered, small text
- Name + "Cairo, Egypt"
- GitHub + LinkedIn icon links
- Tagline: "Built with care."

---

## Interactions & Animations

| Interaction | Implementation |
|---|---|
| Section reveal | `IntersectionObserver` adds `.visible` class → CSS `opacity` + `translateY` transition |
| Active nav link | `IntersectionObserver` on each section, highlights matching nav anchor |
| Smooth scroll | `scroll-behavior: smooth` on `html` |
| Sticky nav blur | `scroll` event listener adds `.scrolled` class to nav |
| Card expand/collapse | JS toggles `.expanded` class → CSS `max-height` transition on inner content |
| Card hover | CSS `transform: translateY(-2px)` + shadow deepens |
| Button hover | Darken background 10%, `transition: 0.2s` |
| Chip hover | `transform: scale(1.02)` |
| Mobile nav | JS toggles `.open` class on nav drawer |

---

## Responsive Breakpoints

| Breakpoint | Layout changes |
|---|---|
| ≤480px | Hero stacks, single col projects, nav drawer |
| ≤768px | 2-col → 1-col projects, hero stacks, skills wrap |
| ≥1024px | Full 2-col projects, side-by-side hero |

---

## SEO & Meta

```html
<meta name="description" content="Ahmed Ayman — Backend Engineer. Distributed systems, microservices, Node.js/TypeScript. Open to roles and collaborations.">
<meta property="og:title" content="Ahmed Ayman — Backend Engineer">
<meta property="og:image" content="profile-pic.jpeg">
<meta property="og:type" content="website">
<link rel="canonical" href="https://a7medayman6.github.io">
```

---

## Data Source Strategy

All content hardcoded in `assets/js/data.js` as JS objects (parsed from resume + GitHub API results gathered during design phase). No runtime API calls — keeps the site fast and avoids CORS / rate-limit issues on GitHub Pages.

---

## Deployment

1. Compile `resume.tex` → `resume.pdf` (requires LaTeX locally: `pdflatex resume.tex`)
2. Delete all non-git files except `resume.tex`, `profile-pic.jpeg`, `.git/`
3. Build the new `index.html`, `assets/`, `404.html`
4. `git add . && git commit -m "rebuild: new portfolio" && git push origin master`
5. GitHub Pages serves from `master` branch root — no config needed

---

## Out of Scope

- Dark mode toggle (architecture is dark-mode ready via CSS variables but toggle not implemented)
- CMS / editable content
- Contact form with server (mailto only)
- Build tooling / npm scripts
