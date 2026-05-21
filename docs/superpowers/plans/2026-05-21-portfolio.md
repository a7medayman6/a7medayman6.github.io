# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete single-page portfolio for Ahmed Ayman using plain HTML/CSS/JS, deployable directly to GitHub Pages with no build step.

**Architecture:** Single `index.html` with all section markup; `assets/css/style.css` for all styles; `assets/js/data.js` for content objects; `assets/js/main.js` for all interactions. Content is rendered into the DOM from `data.js` via `main.js` for experience, projects, and skills sections.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox, IntersectionObserver), vanilla JS ES6, Google Fonts (Inter + Fraunces), inline SVG icons.

---

## File Map

| File | Responsibility |
|---|---|
| `index.html` | Page structure, all section scaffolding, SEO meta |
| `assets/css/style.css` | All styles — tokens, layout, components, responsive |
| `assets/js/data.js` | Experience, projects, skills data objects |
| `assets/js/main.js` | DOM rendering, scroll reveal, nav, card toggles |
| `404.html` | Redirect to `/` for GH Pages routing |
| `resume.pdf` | Compiled from `resume.tex` |

---

### Task 1: Repo Cleanup

**Files:**
- Delete: all Hugo files/folders except `.git/`, `profile-pic.jpeg`, `resume.tex`, `docs/`

- [ ] **Step 1: Remove all Hugo output**

```bash
cd /home/abed/Local/Personal/dev/a7medayman6.github.io
rm -rf about assets blog categories projects tags thoughts
rm -f 404.html index.html index.xml robots.txt sitemap.xml
rm -f profile-pic_16x16.jpeg profile-pic_32x32.jpeg
```

- [ ] **Step 2: Verify only essentials remain**

```bash
find . -not -path './.git/*' -not -path './docs/*' | sort
```

Expected:
```
.
./profile-pic.jpeg
./resume.tex
```

- [ ] **Step 3: Commit**

```bash
git add -A && git commit -m "chore: remove hugo site, start fresh"
```

---

### Task 2: Scaffold Files

**Files:**
- Create: `index.html`, `assets/css/style.css`, `assets/js/data.js`, `assets/js/main.js`, `404.html`

- [ ] **Step 1: Create directories**

```bash
mkdir -p assets/css assets/js
```

- [ ] **Step 2: Write `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ahmed Ayman — Backend Engineer</title>
  <meta name="description" content="Ahmed Ayman — Backend Engineer. Distributed systems, microservices, Node.js/TypeScript. Open to roles and collaborations." />
  <meta name="author" content="Ahmed Ayman" />
  <meta property="og:title" content="Ahmed Ayman — Backend Engineer" />
  <meta property="og:description" content="3+ years building production distributed systems. Currently scaling fulfillment infrastructure at Bosta." />
  <meta property="og:image" content="https://a7medayman6.github.io/profile-pic.jpeg" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://a7medayman6.github.io" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="https://a7medayman6.github.io" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/style.css" />
</head>
<body>

  <!-- NAV -->
  <nav id="nav" aria-label="Main navigation">
    <div class="nav-inner">
      <a href="#hero" class="nav-brand">Ahmed Ayman</a>
      <button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" role="list">
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <div class="nav-drawer" aria-hidden="true">
      <ul role="list">
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- HERO -->
  <section id="hero" class="hero">
    <div class="hero-bg">
      <div class="hero-shape hero-shape-1"></div>
      <div class="hero-shape hero-shape-2"></div>
      <div class="hero-shape hero-shape-3"></div>
    </div>
    <div class="container hero-inner">
      <div class="hero-img-wrap">
        <img src="profile-pic.jpeg" alt="Ahmed Ayman" class="hero-img" width="120" height="120" />
      </div>
      <div class="hero-text">
        <h1 class="hero-name">Ahmed Ayman</h1>
        <p class="hero-title">Backend Engineer · Distributed Systems · Open Source</p>
        <p class="hero-bio">3+ years building production distributed systems and leading engineering teams. Currently scaling fulfillment infrastructure at Bosta.</p>
        <div class="hero-ctas">
          <a href="resume.pdf" download class="btn btn-primary">Download Resume</a>
          <a href="mailto:a.ayman6000@gmail.com" class="btn btn-secondary">Contact Me</a>
          <a href="https://a7medayman.hashnode.dev" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">Visit Blog</a>
        </div>
      </div>
    </div>
  </section>

  <!-- EXPERIENCE -->
  <section id="experience" class="section reveal">
    <div class="container">
      <h2 class="section-title">Experience</h2>
      <div class="timeline" id="timeline-container"></div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects" class="section reveal">
    <div class="container">
      <h2 class="section-title">Projects</h2>
      <div class="projects-grid" id="projects-container"></div>
    </div>
  </section>

  <!-- SKILLS -->
  <section id="skills" class="section reveal">
    <div class="container">
      <h2 class="section-title">Skills</h2>
      <div class="skills-list" id="skills-container"></div>
    </div>
  </section>

  <!-- BLOG CTA -->
  <section id="blog" class="blog-cta">
    <div class="container blog-cta-inner">
      <h2 class="blog-cta-title">I write about backend engineering,<br/>distributed systems, and the craft of software.</h2>
      <p class="blog-cta-sub">If you're building something complex, you'll find something useful in there.</p>
      <a href="https://a7medayman.hashnode.dev" target="_blank" rel="noopener noreferrer" class="btn btn-light">Read the Blog →</a>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="section contact reveal">
    <div class="container contact-inner">
      <h2 class="section-title">Let's work together.</h2>
      <p class="contact-sub">Open to senior backend engineering roles, consulting engagements, and technical collaborations. Based in Cairo — available remote.</p>
      <a href="mailto:a.ayman6000@gmail.com" class="btn btn-primary">Send an Email</a>
      <div class="social-links">
        <a href="https://github.com/a7medayman6" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="https://linkedin.com/in/a7medayman6" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="container footer-inner">
      <span class="footer-name">Ahmed Ayman · Cairo, Egypt</span>
      <div class="footer-links">
        <a href="https://github.com/a7medayman6" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="https://linkedin.com/in/a7medayman6" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
      </div>
      <span class="footer-tagline">Built with care.</span>
    </div>
  </footer>

  <script src="assets/js/data.js"></script>
  <script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Create empty asset files**

```bash
touch assets/css/style.css assets/js/data.js assets/js/main.js 404.html
```

- [ ] **Step 4: Verify in browser**

Open `index.html`. Expected: unstyled page, all section headings visible, no JS console errors.

- [ ] **Step 5: Commit**

```bash
git add index.html assets/ 404.html
git commit -m "feat: scaffold index.html and asset files"
```

---

### Task 3: Content Data (`assets/js/data.js`)

**Files:**
- Write: `assets/js/data.js`

- [ ] **Step 1: Write complete data file**

```js
const EXPERIENCE = [
  {
    company: 'Bosta',
    companyUrl: 'https://bosta.co/en-eg/home',
    dateRange: 'Dec 2023 – Present',
    roles: [
      {
        title: 'Software Engineer — Backend (Fulfillment)',
        dateRange: 'Jul 2025 – Present',
        bullets: [
          'Architected B2B fulfillment platform from greenfield for 1,500+ merchants on NestJS/TypeScript microservices (GCP Cloud Run, GKE, Pub/Sub), processing 8K–14K+ daily orders (2.5M+ lifetime).',
          'Designed high-throughput webhook ingestion service processing 2,000+ req/min across 5+ systems with Pub/Sub fanout, idempotent event processing, and a time-range replay API — zero webhook loss during peak load.',
          'Implemented Saga orchestration across order, inventory, and shipping services, reducing order creation errors by 40% and eliminating orphaned order states.',
          'Profiled high-traffic APIs with clinic.js; restructured MySQL queries with composite indexes, cutting average order-to-ship cycle time by 30%.',
          'Led and mentored 2 backend engineers; established Jest + Supertest test suites on core order workflows.',
        ],
        stack: ['NestJS', 'TypeScript', 'GCP', 'Pub/Sub', 'MySQL', 'Kubernetes', 'Unleash', 'Jest'],
      },
      {
        title: 'Software Engineer — Backend (Sllr)',
        dateRange: 'Dec 2023 – Jul 2025',
        bullets: [
          'Owned core multi-tenant e-commerce platform (orders, inventory, products, store builder) serving 25K+ merchants and 1M+ orders.',
          'Led architecture and delivery of Sllr Chat — unified social commerce inbox integrating Facebook and Instagram Graph API webhooks with FSM-based order bot; grew to 1M+ conversations and 20M+ messages.',
          'Implemented custom Paymob wallet integration enabling direct payment settlement at storefront checkout.',
        ],
        stack: ['Node.js', 'TypeScript', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Pub/Sub'],
      },
    ],
  },
  {
    company: 'R&D Center — Air Defense Forces',
    companyUrl: null,
    dateRange: 'Dec 2022 – Dec 2023',
    roles: [
      {
        title: 'Software Engineer',
        dateRange: 'Dec 2022 – Dec 2023',
        bullets: [
          'Led a team of 5 engineers to re-architect communication middleware and C2 backend services, replacing synchronous RPC with an event-driven Redis ecosystem — increasing measured throughput by 40%.',
          'Containerized 8+ services with multi-stage Docker builds; built GitLab CI/CD pipelines with parallel test execution, reducing build times by 35%.',
        ],
        stack: ['Node.js', 'Redis', 'Docker', 'GitLab CI', 'Linux'],
      },
    ],
  },
];

const PROJECTS = [
  {
    title: 'Musheer — AI Arabic Sign Language Tutor',
    summary: 'Real-time Arabic Sign Language recognition tutor with 91% accuracy and 50K+ Play Store downloads.',
    description: 'Built a custom Arabic Sign Language dataset (600 images/sign, multiple signers), trained an LSTM+CNN on MediaPipe Holistic keypoint outputs. Shipped as a mobile app with a FastAPI backend for inference.',
    features: [
      '91% classification accuracy on custom ARSL dataset',
      '50,000+ downloads on Google Play Store',
      'First Place at ASU Innovates 2022 & ibTIECar Metaverse',
      'Real-time hand and body keypoint detection via MediaPipe Holistic',
    ],
    stack: ['Python', 'TensorFlow', 'LSTM+CNN', 'MediaPipe', 'FastAPI', 'React'],
    github: null,
    live: 'https://play.google.com/store/apps/details?id=com.musheer.musheer',
    liveLabel: 'Play Store',
  },
  {
    title: 'Live Captions — Real-Time Captioning App',
    summary: 'Production Android captioning app with 100K+ users powered by on-device and managed transcription.',
    description: 'Designed audio chunking and streaming pipeline. Evaluated on-device models vs. ElevenLabs managed transcription on accuracy/latency tradeoffs; drove switch to managed service for better quality.',
    features: [
      '100,000+ users in production',
      'Hybrid on-device + managed transcription architecture',
      'Audio chunking pipeline optimized for real-time latency',
      'ElevenLabs API integration for high-accuracy transcription',
    ],
    stack: ['Android', 'ElevenLabs API', 'Java'],
    github: null,
    live: 'https://play.google.com/store/apps/details?id=com.tools.livecaptions',
    liveLabel: 'Play Store',
  },
  {
    title: 'Systems & Protocol Implementations',
    summary: 'From-scratch implementations of Git, Redis, and SQLite to understand production system internals.',
    description: 'Three separate projects built from first principles: Tiny Git (SHA-1 DAG, staging index, diffing, commit traversal), Tiny Redis (multithreaded TCP RESP server, TTL expiration, disk persistence), Tiny SQLite (B-tree file format parsing with SELECT query execution).',
    features: [
      'Tiny Git: SHA-1 content-addressable DAG, staging, diffing, commit traversal',
      'Tiny Redis: multithreaded TCP server, RESP protocol, TTL, disk persistence',
      'Tiny SQLite: B-tree traversal, file format parsing, SELECT execution',
    ],
    stack: ['Python'],
    github: null,
    live: null,
    extraLinks: [
      { label: 'Tiny Git', url: 'https://github.com/a7medayman6/Tiny-Git' },
      { label: 'Tiny Redis', url: 'https://github.com/a7medayman6/Tiny-Redis' },
      { label: 'Tiny SQLite', url: 'https://github.com/a7medayman6/Tiny-SQLite' },
    ],
  },
  {
    title: 'Env Box',
    summary: 'Open-source secrets management platform with AES-256 encryption, team RBAC, and audit logging.',
    description: 'Lightweight web app for managing environment variables across Dev/Staging/Prod environments. AES-256 per-variable encryption, team role-based access control, audit trail, and .env import/export.',
    features: [
      'AES-256 per-variable encryption at rest',
      'Team RBAC with owner/editor/viewer roles',
      'Full audit log for all secret access and changes',
      '.env file import/export across Dev/Staging/Prod environments',
      'Dockerized with live deployment',
    ],
    stack: ['Next.js 14', 'TypeScript', 'MongoDB', 'Docker'],
    github: 'https://github.com/a7medayman6/env-box',
    live: 'https://env-box.vercel.app',
    liveLabel: 'Live Demo',
  },
  {
    title: 'Standuply',
    summary: 'Async standup platform for small teams with voice updates and automated daily digest reports.',
    description: 'Private workspaces, text and voice update sharing, automated daily digest reports with team analytics. Built full-stack end-to-end.',
    features: [
      'Private team workspaces with invite-based access',
      'Text and voice standup update recording',
      'Automated daily digest emails with team analytics',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'React', 'Vite'],
    github: null,
    live: 'https://standuply.vercel.app',
    liveLabel: 'Live Demo',
  },
  {
    title: 'Slide Craft',
    summary: 'Presentation builder with live editing and instant deck generation.',
    description: 'TypeScript-based slide creation tool with a live preview editor and deck export capabilities.',
    features: [
      'Live slide editing with instant preview',
      'Deck export and sharing',
      'TypeScript throughout for type safety',
    ],
    stack: ['TypeScript'],
    github: 'https://github.com/a7medayman6/slide-craft',
    live: 'https://deck-craft-theta.vercel.app',
    liveLabel: 'Live Demo',
  },
  {
    title: 'Markdown Workspace',
    summary: 'Modern desktop Markdown editor with workspace management built on Electron.',
    description: 'Desktop app for Markdown editing with a full workspace model, file tree, live preview, and theme support. Built with Electron, React, Vite, and TypeScript.',
    features: [
      'Workspace-based file organization with tree view',
      'Live split-pane Markdown preview',
      'Electron desktop packaging for Mac/Windows/Linux',
    ],
    stack: ['Electron', 'React', 'Vite', 'TypeScript'],
    github: 'https://github.com/a7medayman6/markdown-workspace',
    live: null,
  },
  {
    title: 'Mapbox Offline Server',
    summary: 'Node.js tile caching proxy for serving Mapbox maps offline without internet.',
    description: 'Caches Mapbox tile requests to disk so maps can be served in air-gapped or low-connectivity environments. Works with any Mapbox GL JS client unchanged.',
    features: [
      'Transparent tile request proxying and disk caching',
      'Works with any Mapbox GL JS client without code changes',
      'Configurable cache directory and map style targets',
    ],
    stack: ['Node.js', 'JavaScript'],
    github: 'https://github.com/a7medayman6/Mapbox-Offline-Server',
    live: null,
  },
];

const SKILLS = {
  Languages:           ['Node.js', 'TypeScript', 'Python', 'JavaScript', 'SQL', 'Bash'],
  Frameworks:          ['NestJS', 'Express.js', 'FastAPI', 'Jest', 'Supertest'],
  'Databases & Search':['MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'RabbitMQ', 'GCP Pub/Sub'],
  'Cloud & DevOps':    ['GCP', 'Docker', 'Kubernetes', 'GitLab CI', 'GitHub Actions', 'Linux'],
  Architecture:        ['Microservices', 'Event-Driven', 'Saga Orchestration', 'REST', 'GraphQL', 'Webhooks'],
  'Tools & Security':  ['JWT', 'OAuth 2.0', 'RBAC', 'AES-256', 'clinic.js', 'Unleash', 'TypeORM'],
};
```

- [ ] **Step 2: Verify in browser console**

Open `index.html`, open DevTools console, run:
```js
EXPERIENCE.length      // 2
PROJECTS.length        // 8
Object.keys(SKILLS).length  // 6
```

- [ ] **Step 3: Commit**

```bash
git add assets/js/data.js
git commit -m "feat: add content data (experience, projects, skills)"
```

---

### Task 4: CSS — Tokens, Reset, Base, Utilities

**Files:**
- Write: `assets/css/style.css` (replaces empty file)

- [ ] **Step 1: Write to `assets/css/style.css`**

```css
/* ============================
   DESIGN TOKENS
   ============================ */
:root {
  --bg:           #F9F6F1;
  --text:         #1A1A1A;
  --accent:       #2D6A4F;
  --accent-light: rgba(45,106,79,0.10);
  --muted:        #6B7280;
  --border:       #E8E3DA;
  --white:        #ffffff;
  --dark:         #1A1A1A;

  --radius-card: 12px;
  --radius-chip: 999px;
  --radius-btn:  8px;

  --shadow-card:  0 2px 12px rgba(0,0,0,0.06);
  --shadow-hover: 0 8px 24px rgba(0,0,0,0.10);

  --font-body:    'Inter', system-ui, sans-serif;
  --font-display: 'Fraunces', Georgia, serif;

  --nav-h:        64px;
  --container:    1080px;
  --section-pad:  96px;
}

/* ============================
   RESET
   ============================ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
img   { display: block; max-width: 100%; }
a     { color: inherit; text-decoration: none; }
ul,ol { list-style: none; }
button { cursor: pointer; border: none; background: none; font: inherit; }

/* ============================
   LAYOUT
   ============================ */
.container {
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 24px;
}

.section { padding: var(--section-pad) 0; }

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2rem);
  font-weight: 700;
  margin-bottom: 48px;
}
.section-title::after {
  content: '';
  display: block;
  width: 40px;
  height: 3px;
  background: var(--accent);
  margin-top: 10px;
  border-radius: 2px;
}

/* ============================
   SCROLL REVEAL
   ============================ */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ============================
   BUTTONS
   ============================ */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  border-radius: var(--radius-btn);
  font-size: 0.875rem;
  font-weight: 600;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s, color 0.2s;
  white-space: nowrap;
}
.btn-primary { background: var(--accent); color: var(--white); }
.btn-primary:hover {
  background: #235a40;
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(45,106,79,0.3);
}
.btn-secondary {
  background: var(--accent-light);
  color: var(--accent);
  border: 1px solid rgba(45,106,79,0.2);
}
.btn-secondary:hover { background: rgba(45,106,79,0.16); transform: translateY(-1px); }
.btn-ghost { background: transparent; color: var(--muted); border: 1px solid var(--border); }
.btn-ghost:hover { background: var(--border); color: var(--text); }
.btn-light { background: var(--bg); color: var(--dark); font-weight: 600; }
.btn-light:hover { background: #fff; transform: translateY(-1px); }

/* ============================
   CHIPS
   ============================ */
.chips { display: flex; flex-wrap: wrap; gap: 6px; }
.chip {
  display: inline-block;
  padding: 3px 10px;
  border-radius: var(--radius-chip);
  font-size: 0.75rem;
  font-weight: 500;
  background: var(--accent-light);
  color: var(--accent);
  transition: transform 0.15s;
}
.chip:hover { transform: scale(1.04); }

/* ============================
   NAV
   ============================ */
#nav {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 100;
  height: var(--nav-h);
  transition: background 0.3s, box-shadow 0.3s;
}
#nav.scrolled {
  background: rgba(249,246,241,0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 var(--border);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-h);
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 24px;
}
.nav-brand {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent);
}
.nav-links { display: flex; gap: 32px; }
.nav-links a {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--muted);
  transition: color 0.2s;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0; right: 0;
  height: 2px;
  background: var(--accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s;
}
.nav-links a:hover,
.nav-links a.active { color: var(--accent); }
.nav-links a.active::after { transform: scaleX(1); }

.nav-hamburger { display: none; flex-direction: column; gap: 5px; width: 24px; }
.nav-hamburger span {
  display: block; height: 2px;
  background: var(--text); border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}
.nav-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-hamburger.open span:nth-child(2) { opacity: 0; }
.nav-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.nav-drawer {
  display: none;
  background: var(--bg);
  border-top: 1px solid var(--border);
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
}
.nav-drawer.open { max-height: 300px; }
.nav-drawer ul { padding: 16px 24px 24px; display: flex; flex-direction: column; gap: 16px; }
.nav-drawer a { font-size: 1rem; font-weight: 500; color: var(--muted); transition: color 0.2s; }
.nav-drawer a:hover { color: var(--accent); }

@media (max-width: 768px) {
  .nav-links    { display: none; }
  .nav-hamburger{ display: flex; }
  .nav-drawer   { display: block; }
}

/* ============================
   HERO
   ============================ */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--nav-h);
  overflow: hidden;
}
.hero-bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
.hero-shape {
  position: absolute;
  border-radius: 50%;
  background: var(--accent);
  animation: float 18s ease-in-out infinite;
}
.hero-shape-1 { width: 480px; height: 480px; top: -120px; right: -80px; opacity: 0.04; animation-delay: 0s; }
.hero-shape-2 { width: 280px; height: 280px; bottom: 60px; left: -60px; opacity: 0.03; animation-delay: -6s; }
.hero-shape-3 { width: 180px; height: 180px; top: 40%; right: 20%; opacity: 0.025; animation-delay: -12s; }
@keyframes float {
  0%,100% { transform: translate(0,0) scale(1); }
  33%      { transform: translate(12px,-18px) scale(1.02); }
  66%      { transform: translate(-8px,10px) scale(0.98); }
}
.hero-inner {
  position: relative; z-index: 1;
  display: flex; align-items: center; gap: 60px;
  padding-top: 48px; padding-bottom: 80px;
}
.hero-img-wrap { flex-shrink: 0; }
.hero-img {
  width: 120px; height: 120px;
  border-radius: 50%; object-fit: cover;
  box-shadow: 0 0 0 4px var(--bg), 0 0 0 6px var(--accent);
}
.hero-text { max-width: 560px; }
.hero-name {
  font-family: var(--font-display);
  font-size: clamp(2.5rem,6vw,4rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
}
.hero-title {
  font-size: 1rem; font-weight: 500;
  color: var(--accent); letter-spacing: 0.01em; margin-bottom: 16px;
}
.hero-bio {
  font-size: 1.05rem; color: var(--muted);
  line-height: 1.7; margin-bottom: 32px;
}
.hero-ctas { display: flex; flex-wrap: wrap; gap: 12px; }

@media (max-width: 768px) {
  .hero-inner { flex-direction: column; align-items: flex-start; gap: 28px; padding-top: 40px; }
}

/* ============================
   EXPERIENCE TIMELINE
   ============================ */
#experience { background: var(--white); }
.timeline { position: relative; padding-left: 32px; }
.timeline::before {
  content: ''; position: absolute;
  left: 6px; top: 8px; bottom: 8px;
  width: 2px; background: var(--border);
}
.timeline-entry { position: relative; margin-bottom: 56px; }
.timeline-entry:last-child { margin-bottom: 0; }
.timeline-entry::before {
  content: ''; position: absolute;
  left: -28px; top: 6px;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 3px var(--white), 0 0 0 5px var(--accent-light);
}
.timeline-header {
  display: flex; align-items: baseline;
  justify-content: space-between; flex-wrap: wrap;
  gap: 8px; margin-bottom: 4px;
}
.timeline-company { font-size: 1.1rem; font-weight: 600; }
.timeline-company a { transition: color 0.2s; }
.timeline-company a:hover { color: var(--accent); }
.timeline-date { font-size: 0.8rem; color: var(--muted); font-weight: 500; }
.timeline-role { margin-bottom: 20px; margin-top: 8px; }
.timeline-role-header {
  display: flex; justify-content: space-between;
  align-items: baseline; flex-wrap: wrap;
  gap: 6px; margin-bottom: 10px;
}
.timeline-role-title { font-size: 0.9rem; font-style: italic; color: var(--muted); }
.timeline-role-date  { font-size: 0.75rem; color: var(--muted); }
.timeline-bullets    { margin-bottom: 12px; padding-left: 16px; }
.timeline-bullets li { font-size: 0.9rem; line-height: 1.6; margin-bottom: 6px; list-style: disc; }

/* ============================
   PROJECTS
   ============================ */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 20px;
}
.project-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}
.project-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-hover); }
.project-card-compact { padding: 24px; }
.project-title       { font-size: 1rem; font-weight: 600; margin-bottom: 8px; }
.project-summary     { font-size: 0.875rem; color: var(--muted); line-height: 1.6; margin-bottom: 14px; }
.project-stack-preview { margin-bottom: 16px; }
.project-toggle {
  font-size: 0.8rem; font-weight: 600; color: var(--accent);
  display: flex; align-items: center; gap: 4px;
  transition: color 0.2s; padding: 0;
}
.project-toggle:hover { color: #235a40; }
.project-toggle-icon { display: inline-block; transition: transform 0.3s; }
.project-card.expanded .project-toggle-icon { transform: rotate(180deg); }

.project-expanded    { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
.project-card.expanded .project-expanded { max-height: 700px; }
.project-expanded-inner {
  padding: 20px 24px 24px;
  border-top: 1px solid var(--border);
}
.project-description { font-size: 0.875rem; line-height: 1.7; margin-bottom: 16px; }
.project-features    { margin-bottom: 16px; padding-left: 16px; }
.project-features li { font-size: 0.85rem; color: var(--muted); line-height: 1.6; margin-bottom: 4px; list-style: disc; }
.project-expanded-label {
  font-size: 0.7rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: var(--muted); margin-bottom: 8px; margin-top: 14px;
}
.project-links { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
.project-link {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 0.8rem; font-weight: 600; color: var(--accent);
  border: 1px solid rgba(45,106,79,0.25);
  padding: 6px 14px; border-radius: var(--radius-btn);
  transition: background 0.2s, color 0.2s;
}
.project-link:hover { background: var(--accent); color: var(--white); }

@media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr; } }

/* ============================
   SKILLS
   ============================ */
#skills { background: var(--white); }
.skills-list { display: flex; flex-direction: column; gap: 20px; }
.skill-row   { display: flex; align-items: flex-start; gap: 20px; }
.skill-label {
  flex-shrink: 0; width: 160px;
  font-size: 0.8rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.06em;
  color: var(--muted); padding-top: 4px;
}
.skill-chips { display: flex; flex-wrap: wrap; gap: 8px; }

.skill-row:nth-child(1) .chip { background: rgba(45,106,79,0.08);  color: #1a4d33; }
.skill-row:nth-child(2) .chip { background: rgba(59,130,246,0.08); color: #1d4ed8; }
.skill-row:nth-child(3) .chip { background: rgba(168,85,247,0.08); color: #7e22ce; }
.skill-row:nth-child(4) .chip { background: rgba(239,68,68,0.08);  color: #b91c1c; }
.skill-row:nth-child(5) .chip { background: rgba(245,158,11,0.08); color: #92400e; }
.skill-row:nth-child(6) .chip { background: rgba(20,184,166,0.08); color: #0f766e; }

@media (max-width: 600px) {
  .skill-row { flex-direction: column; gap: 10px; }
  .skill-label { width: auto; }
}

/* ============================
   BLOG CTA
   ============================ */
.blog-cta { background: var(--dark); color: var(--bg); padding: var(--section-pad) 0; }
.blog-cta-inner { text-align: center; max-width: 640px; margin: 0 auto; }
.blog-cta-title {
  font-family: var(--font-display);
  font-size: clamp(1.4rem,3.5vw,2rem);
  font-weight: 700; line-height: 1.3;
  margin-bottom: 16px; color: var(--bg);
}
.blog-cta-sub { font-size: 1rem; color: rgba(249,246,241,0.65); margin-bottom: 32px; line-height: 1.7; }

/* ============================
   CONTACT
   ============================ */
.contact-inner { text-align: center; max-width: 560px; margin: 0 auto; }
.contact-sub   { font-size: 1rem; color: var(--muted); line-height: 1.7; margin-bottom: 28px; }
.social-links  { display: flex; justify-content: center; gap: 20px; margin-top: 24px; }
.social-links a {
  display: flex; align-items: center; justify-content: center;
  width: 44px; height: 44px;
  border-radius: 50%; border: 1px solid var(--border);
  color: var(--muted); transition: color 0.2s, border-color 0.2s, background 0.2s;
}
.social-links a:hover { color: var(--accent); border-color: var(--accent); background: var(--accent-light); }

/* ============================
   FOOTER
   ============================ */
.footer { padding: 32px 0; border-top: 1px solid var(--border); }
.footer-inner {
  display: flex; align-items: center;
  justify-content: space-between; flex-wrap: wrap; gap: 16px;
}
.footer-name    { font-size: 0.85rem; color: var(--muted); }
.footer-links   { display: flex; gap: 16px; }
.footer-links a { color: var(--muted); transition: color 0.2s; }
.footer-links a:hover { color: var(--accent); }
.footer-tagline { font-size: 0.8rem; color: var(--muted); }

@media (max-width: 600px) {
  .footer-inner { flex-direction: column; align-items: center; text-align: center; }
}
```

- [ ] **Step 2: Verify in browser**

Refresh `index.html`. Expected: warm ivory background, nav visible, hero layout with profile pic and buttons visible, correct fonts and colors.

- [ ] **Step 3: Commit**

```bash
git add assets/css/style.css
git commit -m "feat: add complete stylesheet"
```

---

### Task 5: JavaScript — `assets/js/main.js`

**Files:**
- Write: `assets/js/main.js`

- [ ] **Step 1: Write complete `assets/js/main.js`**

```js
/* ---- RENDER: EXPERIENCE ---- */
function renderExperience() {
  const container = document.getElementById('timeline-container');
  if (!container) return;
  container.innerHTML = EXPERIENCE.map(entry => `
    <div class="timeline-entry reveal">
      <div class="timeline-header">
        <span class="timeline-company">
          ${entry.companyUrl
            ? `<a href="${entry.companyUrl}" target="_blank" rel="noopener noreferrer">${entry.company}</a>`
            : entry.company}
        </span>
        <span class="timeline-date">${entry.dateRange}</span>
      </div>
      <div class="timeline-roles">
        ${entry.roles.map(role => `
          <div class="timeline-role">
            <div class="timeline-role-header">
              <span class="timeline-role-title">${role.title}</span>
              <span class="timeline-role-date">${role.dateRange}</span>
            </div>
            <ul class="timeline-bullets">
              ${role.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
            <div class="chips">
              ${role.stack.map(s => `<span class="chip">${s}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ---- RENDER: PROJECTS ---- */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  container.innerHTML = PROJECTS.map((p, i) => {
    const previewStack = p.stack.slice(0, 3);
    const links = [];
    if (p.github) links.push(`<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub ↗</a>`);
    if (p.live)   links.push(`<a href="${p.live}"   target="_blank" rel="noopener noreferrer" class="project-link">${p.liveLabel || 'Live'} ↗</a>`);
    if (p.extraLinks) p.extraLinks.forEach(l =>
      links.push(`<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="project-link">${l.label} ↗</a>`)
    );

    return `
      <div class="project-card reveal" data-index="${i}">
        <div class="project-card-compact">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-summary">${p.summary}</p>
          <div class="project-stack-preview chips">
            ${previewStack.map(s => `<span class="chip">${s}</span>`).join('')}
            ${p.stack.length > 3 ? `<span class="chip">+${p.stack.length - 3} more</span>` : ''}
          </div>
          <button class="project-toggle" aria-expanded="false">
            <span class="project-toggle-icon">↓</span>&nbsp;Expand
          </button>
        </div>
        <div class="project-expanded" aria-hidden="true">
          <div class="project-expanded-inner">
            <p class="project-description">${p.description}</p>
            <p class="project-expanded-label">Features</p>
            <ul class="project-features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
            <p class="project-expanded-label">Stack</p>
            <div class="chips">${p.stack.map(s => `<span class="chip">${s}</span>`).join('')}</div>
            ${links.length ? `<div class="project-links">${links.join('')}</div>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.project-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const card     = btn.closest('.project-card');
      const expanded = card.classList.toggle('expanded');
      const icon     = btn.querySelector('.project-toggle-icon');
      btn.setAttribute('aria-expanded', expanded);
      card.querySelector('.project-expanded').setAttribute('aria-hidden', !expanded);
      icon.textContent = expanded ? '↑' : '↓';
      btn.lastChild.textContent = ' ' + (expanded ? 'Collapse' : 'Expand');
    });
  });
}

/* ---- RENDER: SKILLS ---- */
function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;
  container.innerHTML = Object.entries(SKILLS).map(([cat, items]) => `
    <div class="skill-row reveal">
      <span class="skill-label">${cat}</span>
      <div class="skill-chips chips">${items.map(s => `<span class="chip">${s}</span>`).join('')}</div>
    </div>
  `).join('');
}

/* ---- SCROLL REVEAL ---- */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ---- ACTIVE NAV ---- */
function initActiveNav() {
  const links = document.querySelectorAll('.nav-links a');
  const obs   = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(a => a.classList.remove('active'));
        const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
}

/* ---- STICKY NAV BLUR ---- */
function initNavBlur() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
}

/* ---- MOBILE NAV ---- */
function initMobileNav() {
  const btn    = document.querySelector('.nav-hamburger');
  const drawer = document.querySelector('.nav-drawer');
  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    drawer.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    drawer.setAttribute('aria-hidden', !open);
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    btn.classList.remove('open');
    drawer.classList.remove('open');
    btn.setAttribute('aria-expanded', false);
    drawer.setAttribute('aria-hidden', true);
  }));
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  renderExperience();
  renderProjects();
  renderSkills();
  initReveal();
  initActiveNav();
  initNavBlur();
  initMobileNav();
});
```

- [ ] **Step 2: Verify in browser**

Refresh `index.html`. Check:
- Experience timeline shows 2 companies with role entries, bullets, and chips
- Projects grid: 8 cards in 2 columns; clicking Expand reveals full content; clicking Collapse hides it
- Skills: 6 rows with tinted chips per category
- Scroll down: sections fade in, active nav link highlights
- Nav blurs after scrolling past 20px
- Resize to 375px: hamburger appears; tap opens/closes drawer

- [ ] **Step 3: Commit**

```bash
git add assets/js/main.js
git commit -m "feat: add main.js — render, scroll reveal, nav, card toggles"
```

---

### Task 6: 404, Resume PDF, Deploy

**Files:**
- Write: `404.html`
- Compile: `resume.pdf`

- [ ] **Step 1: Write `404.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="refresh" content="0;url=/" />
  <title>Redirecting…</title>
</head>
<body>
  <p>Redirecting to <a href="/">Ahmed Ayman's portfolio</a>…</p>
</body>
</html>
```

- [ ] **Step 2: Compile resume PDF**

```bash
pdflatex resume.tex && pdflatex resume.tex
```

If `pdflatex` not available:
```bash
sudo apt-get install -y texlive-latex-extra texlive-fonts-recommended
pdflatex resume.tex && pdflatex resume.tex
```

Expected: `resume.pdf` in repo root. Open with `xdg-open resume.pdf` to confirm it renders.

- [ ] **Step 3: Commit**

```bash
git add 404.html resume.pdf
git commit -m "feat: add 404 redirect and compiled resume PDF"
```

- [ ] **Step 4: Final browser check**

Open `index.html` locally and verify:
- [ ] Nav sticky, blurs, mobile hamburger works
- [ ] Hero: profile pic circular with green ring, name, subtitle, 3 buttons
- [ ] Experience: timeline line, 2 companies, bullets, chips
- [ ] Projects: 8 cards, expand/collapse all work
- [ ] Skills: 6 rows, tinted chips
- [ ] Blog CTA: dark section, hashnode button
- [ ] Contact: centered, email button, social icons
- [ ] Footer: name, location, links
- [ ] Download Resume button downloads `resume.pdf`
- [ ] Contact Me opens `mailto:a.ayman6000@gmail.com`
- [ ] Resize to 375px: layout is clean, no overflow

- [ ] **Step 5: Push to GitHub Pages**

```bash
git push origin master
```

Wait 60 seconds, then open `https://a7medayman6.github.io`. Confirm live.
