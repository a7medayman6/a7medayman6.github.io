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
