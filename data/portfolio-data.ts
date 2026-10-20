export interface ProjectItem {
  id: string;
  domainTitle: string;
  category: 'Next.js' | 'Mobile & Web' | 'Enterprise / Analytics' | 'Workflow / Modernization';
  period: string;
  role: string;
  ownership: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  impactBullets: string[];
  architectureHighlights: string[];
  abstractType: 'analytics' | 'booking' | 'healthcare' | 'marketplace' | 'fintech';
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export interface WorkPhilosophyItem {
  id: string;
  title: string;
  tagline: string;
  iconName: 'Rocket' | 'ShieldCheck' | 'Cpu' | 'MessageSquareCode';
  bullets: string[];
}

export const PORTFOLIO_CONFIG = {
  showPhoneNumber: true,
  phone: "+91 98969 87025",
  email: "hardik.ynr@gmail.com",
  linkedin: "https://www.linkedin.com/in/hardik--sawhney",
  github: "https://github.com/hardiksawhney1",
  resumeUrl: "/Hardik_Sawhney_Resume.pdf",
  photoUrl: "/hardik-photo.jpg",
  location: "Bangalore, India",
  currentCompany: "GeekyAnts",
  currentRole: "Software Engineer II",
  experienceDuration: "May 2024 – Present",
};

export const PERSONAL_INFO = {
  name: "Hardik Sawhney",
  title: "Software Engineer II",
  specialization: "Frontend / Full-Stack (React, Next.js, React Native, Node.js)",
  positioningLine:
    "Software Engineer building high-performance web and mobile products, owning frontend architecture from zero to one.",
  heroIntro:
    "Specializing in zero-to-one frontend architecture, Core Web Vitals, and AI-assisted workflows using Next.js, React Native, and TypeScript. Delivering dependable production systems across enterprise domains.",
  shortBio:
    "Software Engineer with 2+ years of experience building high-performance web and mobile products. I own frontend architecture zero-to-one using React, Next.js, React Native and TypeScript, backed by Node/Nest.js APIs. I focus on Core Web Vitals, AI-assisted workflows, and high-quality, reliable releases. I've delivered across fintech, hospitality, healthcare, logistics and real estate.",
  selfImage:
    "I own features end to end and make sure they work in real-world scenarios. I break challenges down and improve system quality rather than apply quick fixes. I'm a dependable contributor on critical features and I take initiative on gaps.",
  traits: [
    "Ownership mindset from requirement to release",
    "Structured thinking applied to ambiguous problems",
    "Detail-oriented on edge cases and root-cause analysis",
    "Calm and solution-focused under production incidents and tight timelines",
  ],
  whereImHeaded:
    "Building reliable solutions that work in the real world, deepening technical expertise, taking on higher ownership in system development, understanding the product and business impact behind engineering decisions, and growing into a high-impact engineer with stronger system-design responsibility.",
};

export const HEADLINE_NUMBERS = [
  {
    number: "2+",
    label: "Years of Experience",
    subtext: "5+ products across 5 domains",
  },
  {
    number: "~95%",
    label: "PR Approval Rate",
    subtext: "First-time code review approval",
  },
  {
    number: "30–35%",
    label: "Effort Reduction",
    subtext: "Via AI-assisted workflows (Cursor/Claude)",
  },
  {
    number: "40%",
    label: "Dashboard Speedup",
    subtext: "Faster load times with SSR & memoization",
  },
  {
    number: "99.9%",
    label: "Uptime Sustained",
    subtext: "On a real-time marketplace product",
  },
  {
    number: "9.88",
    label: "B.E. CGPA (out of 10)",
    subtext: "Chitkara University Computer Science",
  },
];

export const CORE_STRENGTHS = [
  {
    title: "End-to-End Frontend Ownership",
    description:
      "Owning features from requirement gathering and design feasibility through architecture, implementation, QA sign-off, and production deployment with minimal supervision.",
    badge: "0-to-1 Delivery",
  },
  {
    title: "Scalable Component Architecture",
    description:
      "Architecting clean, modular design systems and reusable UI layers with Next.js, React, and React Native (Expo) across monorepo and multi-platform codebases.",
    badge: "Design Systems",
  },
  {
    title: "Complex Systems & Payments Integration",
    description:
      "Integrating production payment gateways (Stripe, Finix), authentication protocols (OAuth 2.0, SSO, JWT), maps, Strapi CMS, and real-time WebSockets.",
    badge: "Payments & Auth",
  },
  {
    title: "Data-Intensive Interactive UIs",
    description:
      "Engineering fast dashboards, interactive heatmaps, multi-series dynamic charts, and advanced filters querying massive datasets via Snowflake and OpenSearch.",
    badge: "Analytics & Data",
  },
  {
    title: "Performance & Core Web Vitals",
    description:
      "Optimizing SSR delivery, state memoization, intelligent caching, SEO indexing, and zero-blocking ingestion for silky 60fps and fast page loads.",
    badge: "Core Web Vitals",
  },
  {
    title: "AI-Assisted SDLC Acceleration",
    description:
      "Integrating LLM-powered engineering (Cursor, Claude Code, ChatGPT) into daily workflows to reduce boilerplate, speed debugging, and cut effort estimations by 30–35%.",
    badge: "AI-Augmented",
  },
  {
    title: "Cross-Functional Technical Alignment",
    description:
      "Translating ambiguous product goals into robust technical specs, conducting structured demos, preparing query sheets, and collaborating with Product, QA, and Backend teams.",
    badge: "Communication",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend & Mobile",
    description: "Core expertise in component-driven, responsive web and mobile engineering",
    skills: [
      { name: "React", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "React Native", highlight: true },
      { name: "Expo (incl. Expo-Web)", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript" },
      { name: "Tailwind CSS", highlight: true },
      { name: "HTML5/CSS3" },
      { name: "Redux / Redux Toolkit" },
      { name: "Zustand", highlight: true },
      { name: "TanStack Query", highlight: true },
      { name: "ShadCN UI", highlight: true },
      { name: "GlueStack UI" },
    ],
  },
  {
    title: "Backend & APIs",
    description: "API design, orchestration, real-time channels, and authentication",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Nest.js", highlight: true },
      { name: "REST APIs", highlight: true },
      { name: "GraphQL", highlight: true },
      { name: "WebSockets", highlight: true },
      { name: "OAuth 2.0 & SSO", highlight: true },
      { name: "JWT Lifecycle" },
      { name: "Hasura" },
      { name: "Strapi CMS" },
      { name: "Prisma ORM" },
      { name: "Java (working knowledge)" },
    ],
  },
  {
    title: "Databases & Cloud Infrastructure",
    description: "Data layer querying, indexing, storage, containerization, and CI/CD",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "MySQL" },
      { name: "Supabase" },
      { name: "Firebase / Firestore" },
      { name: "Redis", highlight: true },
      { name: "OpenSearch", highlight: true },
      { name: "Snowflake", highlight: true },
      { name: "Docker" },
      { name: "Vercel", highlight: true },
      { name: "Jenkins" },
      { name: "CI/CD Pipelines" },
    ],
  },
  {
    title: "Tooling, Analytics & AI",
    description: "Modern developer ergonomics, observability, and AI-accelerated workflows",
    skills: [
      { name: "Cursor & Claude Code", highlight: true },
      { name: "ChatGPT (SDLC Integration)", highlight: true },
      { name: "Git & GitHub / GitLab", highlight: true },
      { name: "Figma (Feasibility Analysis)", highlight: true },
      { name: "Postman & Swagger" },
      { name: "Jira / Agile" },
      { name: "Google Analytics & GTM", highlight: true },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "logistics-carrier-analytics",
    domainTitle: "Logistics & Carrier Analytics Platform",
    category: "Enterprise / Analytics",
    period: "Feb 2026 – Present",
    role: "Frontend Developer (sole frontend developer)",
    ownership: "Sole Frontend Owner across User & Admin Applications",
    stack: ["Next.js", "TypeScript", "OpenSearch", "Snowflake", "Stripe"],
    metrics: [
      { label: "Dashboard Load Times", value: "-40%" },
      { label: "Effort Estimations", value: "-30–35%" },
      { label: "First-Time PR Approval", value: "~95%" },
    ],
    impactBullets: [
      "Built Admin and User applications on a scalable shared architecture.",
      "Implemented auth/authorization: OAuth, SSO, role-based access, session and JWT token lifecycle management.",
      "Built and optimized a Stripe-based subscription system handling failures, retries and state synchronization.",
      "Improved SEO (SSR, indexing, navigation flows) for better discoverability.",
      "Built data-intensive features: heatmaps, dynamic charts and advanced search/filters on large datasets powered by Snowflake/OpenSearch.",
      "Optimized data ingestion for zero UI blocking; improved dashboard load times by 40% through state memoization and SEO best practices.",
      "Used AI-assisted workflows to cut effort estimations by 30–35% across tasks while keeping ~95% PR approval.",
      "Gave consultative product input that led to feature enhancements and scope expansions.",
    ],
    architectureHighlights: [
      "Shared Monorepo Architecture separating Admin, Customer, and Shared UI package modules.",
      "Zero-blocking ingestion pipeline caching Snowflake aggregations through OpenSearch indices.",
      "Resilient Stripe subscription webhook lifecycle with local optimistic UI reconciliation.",
      "Deep SEO audit implementation with dynamic OpenGraph routes and structured JSON-LD.",
    ],
    abstractType: "analytics",
  },
  {
    id: "hospitality-booking-platform",
    domainTitle: "Hospitality Booking Platform",
    category: "Next.js",
    period: "Aug 2025 – Feb 2026",
    role: "Frontend Developer, end-to-end frontend ownership (lead contributor)",
    ownership: "Lead Contributor & Frontend Architecture Owner",
    stack: ["Next.js", "Nest.js", "HotelBeds APIs", "Finix", "Google Maps", "Jenkins"],
    metrics: [
      { label: "Bug Share on Frontend", value: "10–15%" },
      { label: "Checkout Drop-offs", value: "Minimized" },
      { label: "Architecture", value: "Zero-to-One" },
    ],
    impactBullets: [
      "Set up scalable frontend architecture from scratch: reusable components, middleware, context-driven state management.",
      "Built complex booking workflows: availability, dynamic pricing, policy validation, bulk bookings, timezone-based date validation, optimized API orchestration.",
      "Integrated Finix payments with custom handling of transaction lifecycle, locking mechanisms and failure/retry scenarios.",
      "Implemented secure auth: SSO and multiple sign-in methods with proper session lifecycle management.",
      "Integrated Google Maps for location-based hotel discovery.",
      "Used Google Analytics to track user journeys and reduce checkout drop-offs.",
      "Led stakeholder demos and requirement discussions, reviewed PRs and mentored teammates; kept bug share at ~10–15% of total frontend issues.",
      "Worked with DevOps on Jenkins build/deploy workflows and contributed to effort estimations; delivery and demo quality were strongly appreciated by stakeholders.",
    ],
    architectureHighlights: [
      "Context-driven reactive booking state machine preventing race conditions during live inventory checks.",
      "Finix idempotency key locking layer to eliminate duplicate charge attempts during network fluctuation.",
      "Dynamic timezone normalization engine handling multi-region check-in/out policies seamlessly.",
      "Google Maps clustering with viewport bounds throttling for high-density metropolitan listings.",
    ],
    abstractType: "booking",
  },
  {
    id: "healthcare-platform-modernization",
    domainTitle: "Healthcare Platform Modernization",
    category: "Workflow / Modernization",
    period: "Jul 2025 – Aug 2025",
    role: "Frontend Developer and Mentor",
    ownership: "Migration Contributor & Team Mentor",
    stack: ["React", "GraphQL", "Hasura", "ShadCN UI", "Monorepo"],
    metrics: [
      { label: "Internal Teams Unblocked", value: "3+ Teams" },
      { label: "UI Regressions", value: "Zero" },
      { label: "System Scalability", value: "Monorepo" },
    ],
    impactBullets: [
      "Contributed to migrating a legacy system into a monorepo architecture, improving scalability, modularity and maintainability.",
      "Replaced a legacy UI library with ShadCN, improving performance and UI consistency with no regressions.",
      "Worked on GraphQL (Hasura) integrations and structured data handling across modules.",
      "Accelerated feature delivery for 3+ internal teams.",
      "Mentored a new Software Engineer II on architecture and development practices; supported demos.",
    ],
    architectureHighlights: [
      "Modular design token consolidation mapping legacy CSS properties onto accessible Radix/ShadCN primitives.",
      "Hasura GraphQL fragment composition ensuring single-roundtrip queries for complex patient charts.",
      "Monorepo package boundaries enforcing strict lint rules and shared TypeScript contracts.",
      "Comprehensive regression testing matrix covering accessibility and responsive viewport breakpoints.",
    ],
    abstractType: "healthcare",
  },
  {
    id: "real-estate-marketplace",
    domainTitle: "Real Estate Marketplace (Web & Mobile)",
    category: "Mobile & Web",
    period: "Feb 2025 – Jul 2025",
    role: "Frontend Developer",
    ownership: "Cross-Platform Web & Mobile Contributor",
    stack: ["Next.js", "Expo (React Native)", "Stripe", "Strapi CMS", "Google Maps", "WebSockets", "Redux"],
    metrics: [
      { label: "Production Uptime", value: "99.9%" },
      { label: "Platforms Covered", value: "Web & Mobile" },
      { label: "Chat Latency", value: "Real-Time" },
    ],
    impactBullets: [
      "Built SSR-based apps across web and mobile covering listings, live auctions, bookings and real-time updates.",
      "Built a real-time chat system with delivery/read states and complex UI edge cases.",
      "Integrated Stripe payments (web, in-app browser, SDK), Google Maps, and Strapi CMS for dynamic content.",
      "Implemented push notifications and deep-linking flows for smooth cross-platform navigation.",
      "Added crash analytics and sustained 99.9% uptime.",
    ],
    architectureHighlights: [
      "Unified business logic layer shared between Next.js web portal and Expo React Native mobile binary.",
      "Resilient WebSocket reconnection pipeline with optimistic message queuing and read-receipt reconciliations.",
      "Deep-linking route handlers mapping push notification payloads directly into auction modal screens.",
      "Automated crash reporting alerting pipeline keeping production stability strictly at 99.9%.",
    ],
    abstractType: "marketplace",
  },
  {
    id: "fintech-workflow-platform",
    domainTitle: "Fintech Workflow Platform (Web & Expo-Web)",
    category: "Mobile & Web",
    period: "Nov 2024 – Jan 2025",
    role: "Frontend Developer",
    ownership: "Core Component Architecture & Flow Developer",
    stack: ["Next.js", "Expo-Web", "TypeScript"],
    metrics: [
      { label: "State Persistence", value: "100%" },
      { label: "Platform Parity", value: "Web & Expo-Web" },
      { label: "Validation Integrity", value: "Multi-Step" },
    ],
    impactBullets: [
      "Built scalable, reusable UI components in Next.js for multiple user personas, keeping modules consistent and maintainable.",
      "Built responsive, cross-platform interfaces across Web and Expo-Web.",
      "Delivered end-to-end loan onboarding, approvals and validation-heavy EMI calculator flows.",
      "Achieved 100% state persistence across complex user flows.",
    ],
    architectureHighlights: [
      "Multi-step stepper engine with schema-validated form steps using Zod and React Hook Form.",
      "Fault-tolerant local state rehydration ensuring multi-page financial inputs survive page refreshes.",
      "Responsive financial calculation modules maintaining exact precision across web and mobile web runtimes.",
      "Persona-driven component access guard ensuring secure viewing boundaries for borrowers and approvers.",
    ],
    abstractType: "fintech",
  },
];

export const WORK_PHILOSOPHY: WorkPhilosophyItem[] = [
  {
    id: "delivery",
    title: "Delivery & Execution",
    tagline: "End-to-end ownership with high velocity and predictability",
    iconName: "Rocket",
    bullets: [
      "Independently deliver medium-to-high complexity frontend features from concept to release.",
      "Catch missing requirements, edge cases, and architectural dependencies early in sprint planning.",
      "Consistently meet sprint commitments with a disciplined target rate of 90%+.",
      "Partner closely with QA through final sign-off and smooth production rollouts.",
    ],
  },
  {
    id: "quality",
    title: "Quality & Testing",
    tagline: "Clean, maintainable code backed by thorough self-testing",
    iconName: "ShieldCheck",
    bullets: [
      "Write clean, scalable, maintainable TypeScript code adhering to component modularity.",
      "Self-test thoroughly across browsers and viewports before QA handover.",
      "Provide constructive, meaningful PR reviews (~95% first-time approval on authored code).",
      "Proactively refactor for readability, stability, and maintain living project documentation.",
    ],
  },
  {
    id: "ownership",
    title: "Technical Ownership",
    tagline: "Proactive problem-solving beyond the Figma artboard",
    iconName: "Cpu",
    bullets: [
      "Analyze Figma designs closely to flag feasibility gaps and edge cases before coding starts.",
      "Transform ambiguous requirements into concrete, modular technical implementations.",
      "Analyze real-world scenarios designs don't cover (offline states, race conditions, network drops).",
      "Lead third-party integrations (payments, SDKs, in-app browser flows) and aim for ≥1 technical improvement per sprint.",
    ],
  },
  {
    id: "collaboration",
    title: "Communication & Alignment",
    tagline: "Structured demos, transparency, and cross-team synergy",
    iconName: "MessageSquareCode",
    bullets: [
      "Conduct engaging post-sprint demos with clear stakeholder narratives.",
      "Prepare structured query sheets with annotated screenshots and video walkthroughs.",
      "Lead technical Q&A, document key architectural decisions, and translate feedback into action items.",
      "Work seamlessly across QA, UI/UX Design, Backend, and Product/Business teams.",
    ],
  },
];

export const EXPERIENCE_LABELED_BULLETS = [
  {
    label: "Product Ownership",
    text: "Core owner of end-to-end frontend delivery across 5+ high-traffic products (fintech, hospitality, healthcare, logistics, real estate).",
  },
  {
    label: "Performance & Architecture",
    text: "Built SSR-first, mobile-responsive Next.js and React Native (Expo) apps with reusable, layered architecture and fast page loads.",
  },
  {
    label: "Full-Stack Delivery",
    text: "Built Nest.js services and integrated REST/GraphQL APIs, payments (Stripe, Finix) and real-time WebSocket features end to end.",
  },
  {
    label: "Agile & Release Quality",
    text: "Drove sprint planning, stakeholder alignment and peer reviews; shipped fast via CI/CD pipelines.",
  },
  {
    label: "AI-Assisted Engineering",
    text: "Embedded LLM tools (Cursor, Claude Code) into the SDLC to speed up delivery, boilerplate and debugging.",
  },
];

export const RESUME_CONTRIBUTIONS = [
  {
    title: "Hospitality Booking Platform",
    role: "Lead Contributor",
    stack: "Next.js · Nest.js · Finix APIs",
    bullets: [
      "Architected a high-concurrency booking engine supporting dynamic pricing, real-time inventory sync, and multi-step transactional flows.",
      "Integrated Auth SSO and Google Analytics to track user journeys and optimize drop-off rates for resilient checkouts.",
      "Scaled API layers to handle traffic spikes; gave technical mentorship and PR reviews.",
    ],
  },
  {
    title: "Real Estate Marketplace",
    role: "Web & Mobile",
    stack: "Next.js · Expo · Stripe · Strapi",
    bullets: [
      "Delivered SSR web and mobile apps focused on user retention, featuring live auctions and WebSocket chat.",
      "Built seamless Stripe flows, deep linking, and offline-first discovery via Google Maps.",
      "Implemented Redux state, push notifications and crash analytics, sustaining 99.9% uptime.",
    ],
  },
  {
    title: "Carrier Analytics Dashboard",
    role: "Data Viz",
    stack: "Next.js · OpenSearch · Snowflake",
    bullets: [
      "Optimized data ingestion pipelines to visualize complex logistics datasets with zero UI blocking.",
      "Improved dashboard load times by 40% via advanced state memoization and strict SEO best practices.",
    ],
  },
  {
    title: "Financial Workflow System",
    role: "Frontend Owner",
    stack: "Next.js · Expo · TypeScript",
    bullets: [
      "Built end-to-end workflows for loan onboarding, approvals, and validation-heavy EMI calculators.",
      "Engineered robust backend integration with 100% state persistence across complex user flows.",
    ],
  },
  {
    title: "Healthcare Ecosystem",
    role: "Modernization",
    stack: "React · GraphQL · Hasura · ShadCN",
    bullets: [
      "Led a critical monorepo migration and UI modernization, accelerating feature delivery for 3+ internal teams.",
    ],
  },
];

export const EXPERIENCE_DATA = {
  role: "Software Engineer II",
  company: "GeekyAnts",
  duration: "May 2024 – Present",
  location: "Bangalore, India",
  summary:
    "Core owner of end-to-end frontend delivery across 5+ high-traffic products spanning fintech, hospitality, healthcare, logistics, and real estate.",
  bullets: EXPERIENCE_LABELED_BULLETS.map((b) => `${b.label}: ${b.text}`),
};

export const ACHIEVEMENTS = [
  {
    title: "Geekathon Winner (AI Hackathon)",
    subtitle: "Built an AI-powered project estimation engine",
    description:
      "Engineered an intelligent forecasting tool that leverages historical project and task data to accurately predict feature scopes and reduce manual effort estimation overhead.",
    highlight: "1st Place Winner",
  },
  {
    title: "Consistent Delivery Excellence",
    subtitle: "~95% First-Time PR Approval Rate",
    description:
      "Shipped production-ready features across full product lifecycles with strong ownership, rigorous self-testing, and exceptional code quality standards.",
    highlight: "Quality Benchmark",
  },
  {
    title: "Stakeholder & Team Recognition",
    subtitle: "High-Craft Demos & Zero-Regression Migrations",
    description:
      "Consistently recognized by product and engineering stakeholders for clear, structured requirement translation, polished demo execution, and mentoring junior engineers.",
    highlight: "Leadership & Impact",
  },
];

export const EDUCATION = {
  degree: "Bachelor of Engineering (B.E.) in Computer Science",
  institution: "Chitkara University",
  location: "Punjab, India",
  duration: "Aug 2021 – Jun 2025",
  cgpa: "9.88 / 10.0",
  coursework: ["Data Structures & Algorithms (DSA)", "Web Development", "C++", "Python", "Database Systems"],
};
