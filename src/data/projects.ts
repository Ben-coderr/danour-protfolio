export interface ArchitecturalDecision {
  title: string;
  problem: string;
  decision: string;
  tradeOff: string;
  result: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  architecturalDecisions?: ArchitecturalDecision[];
  metrics?: { label: string; value: string }[];
  role: string;
  year: string;
  type: 'platform' | 'client' | 'ai' | 'web';
  featured: boolean;
  image: string;
  screenshots?: { url: string; caption?: string }[];
  liveUrl?: string;
  repoUrl?: string;
  stack: string[];
  bullets: string[];
  status: 'live' | 'archived' | 'confidential';
}

export const projects: Project[] = [
  {
    slug: 'jg-supply-net',
    title: 'JG SupplyNet — Algeria Digital Procurement Platform',
    category: 'Latest Work // B2B Marketplace',
    summary: 'Algeria\'s digital B2B procurement platform and supplier marketplace connecting organizations, industrial buyers, and verified suppliers.',
    fullDescription:
      'JG SupplyNet (by Jamael Group) is a modern B2B digital procurement platform designed to streamline commercial sourcing across Algeria. Built with Next.js and Tailwind CSS, the platform empowers institutions and enterprises to publish purchase requests, discover certified industrial suppliers, and manage quotation pipelines through a unified, accessible portal.',
    challenge:
      'Bridging the gap between traditional industrial suppliers and institutional buyers with a fast, mobile-friendly marketplace supporting multi-language navigation (EN/FR/AR) and complex request-for-quote (RFQ) workflows.',
    solution:
      'Engineered a high-performance Next.js web platform with localized routing, dynamic supplier catalog search, dedicated buyer/supplier onboarding funnels, and real-time quotation routing.',
    metrics: [
      { label: 'Platform Type', value: 'B2B Sourcing Hub' },
      { label: 'Sourcing Flow', value: 'Multi-step RFQ Engine' },
      { label: 'Availability', value: 'Multi-lingual (EN/FR/AR)' },
    ],
    role: 'Lead Full-Stack Developer',
    year: '2025 — 2026',
    type: 'platform',
    featured: true,
    image: '/brand/jg-supply-net.jpg',
    liveUrl: 'https://jgsupplynet.com',
    stack: ['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel'],
    architecturalDecisions: [
      {
        title: 'Trilingual RTL/LTR Architecture with CSS Logical Properties',
        problem: 'Algerian procurement workflows require English/French for technical specs and Arabic with strict RTL for domestic suppliers.',
        decision: 'Engineered a unified component layer using CSS logical properties and Next.js localized routing, switching text direction without layout disruption.',
        tradeOff: 'Strict adherence to CSS logical property rules across all layout modules.',
        result: 'Sub-300ms page transitions across English, French, and Arabic on 4G cellular networks.',
      },
      {
        title: 'Multi-Step RFQ State Machine on PostgreSQL',
        problem: 'Industrial procurement requests require complex validations (drawings, quantities, Incoterms, timelines) across multiple supplier tiers.',
        decision: 'Constructed an idempotent PostgreSQL quotation schema with state transitions (Draft ➔ Published ➔ Bidding ➔ Awarded) with automated email notifications.',
        tradeOff: 'Relational schema migration rigor rather than schemaless flexibility.',
        result: 'Complete auditability and zero dropped RFQs across national supplier transactions.',
      },
    ],
    bullets: [
      'Architected Algeria\'s digital procurement platform connecting institutional buyers with qualified suppliers.',
      'Built multi-step RFQ (Request for Quote) flows and supplier catalog exploration.',
      'Delivered responsive, accessible interface with localized EN/FR/AR support and fast page load times.',
    ],
    status: 'live',
  },
  {
    slug: 'udemy-python-arabic',
    title: 'Python for Beginners in Arabic — Online Course',
    category: 'Udemy Official Course',
    summary: 'My first online course with 300+ students enrolled: comprehensive step-by-step programming and algorithmic fundamentals taught in Arabic.',
    fullDescription:
      'Designed and recorded a comprehensive, highly rated online programming course published on Udemy. Taught entirely in Arabic, the course takes complete beginners from zero programming knowledge to writing algorithmic logic, data structures, functional code, and mini-projects.',
    challenge:
      'Demystifying abstract computer science paradigms for Arabic-speaking learners without relying on dense English jargon or convoluted theoretical slides.',
    solution:
      'Created 40+ focused, hands-on video modules with real-time coding walk-throughs, downloadable exercises, and step-by-step problem-solving challenges.',
    metrics: [
      { label: 'Enrolled Students', value: '300+ Learners' },
      { label: 'Student Rating', value: '4.8 ★ / 5.0' },
      { label: 'Language', value: 'Arabic (العربية)' },
    ],
    role: 'Course Creator & Instructor',
    year: '2024 — Present',
    type: 'platform',
    featured: true,
    image: '/brand/udemy-python.jpg',
    liveUrl: 'https://www.udemy.com/course/bencoderr-python-course-arabic/?referralCode=A268F9C13E98A6D18163',
    stack: ['Python', 'Problem Solving', 'Data Structures', 'Curriculum Design', 'Udemy'],
    bullets: [
      'Authored 100% original curriculum breaking down computer science and programming fundamentals in Arabic.',
      'Designed practical coding challenges and step-by-step algorithmic exercises for 300+ enrolled students.',
      'Built an engaged learning community with prompt technical Q&A support.',
    ],
    status: 'live',
  },
  {
    slug: 'virexa',
    title: 'Virexa — Healthcare Tech Platform',
    category: 'Healthcare Technology',
    summary: 'Patient-centric digital health platform streamlining medical service discovery, booking, and healthcare information.',
    fullDescription:
      'Virexa is a digital healthcare startup platform engineered to simplify how patients locate certified specialists, schedule consultations, and access critical health services. Built with Next.js 15 and Tailwind CSS, the platform emphasizes zero-barrier accessibility, rapid load times on mobile cellular networks, and intuitive search filters.',
    challenge:
      'Healthcare applications require exceptionally fast response times even on constrained 3G/4G connections, while providing an accessible interface for patients of diverse technical literacy and age groups.',
    solution:
      'Engineered an Astro/Next.js hybrid architecture with partial prerendering and streaming server components. Implemented optimistic UI updates for appointment booking workflows and strict semantic ARIA attributes for screen-reader accessibility.',
    metrics: [
      { label: 'Lighthouse Score', value: '99 Performance' },
      { label: 'Mobile Latency', value: '<450ms Page Load' },
      { label: 'Accessibility', value: '100% WCAG AA' },
    ],
    role: 'Full-Stack Developer',
    year: '2025',
    type: 'platform',
    featured: true,
    image: '/brand/virexa.jpg',
    liveUrl: 'https://virexa-eta.vercel.app',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    bullets: [
      'Engineered patient-centric digital platform with responsive interfaces and fast loading speeds.',
      'Architected modular component hierarchy for scalable health service discovery.',
      'Optimized for high accessibility and cross-device mobile usability.',
    ],
    status: 'live',
  },
  {
    slug: 'everest-genai',
    title: 'Everest Academy — AI Formation Curriculum',
    category: 'GenAI Intensive Formation',
    summary: 'Hands-on intensive formation training students in prompt engineering, vibe coding, AI video generation, and AI graphic design.',
    fullDescription:
      'Led the flagship "Build with AI" intensive formation at Everest Academy in Mostaganem/Tlemcen. Designed an immersive, project-centric curriculum covering prompt engineering techniques, "vibe coding" (rapid full-stack prototyping with AI assistants), synthetic AI video creation, and high-impact AI graphic design assets.',
    challenge:
      'Transitioning students from basic chatbot prompting to production-grade AI engineering, visual asset generation, and accelerated software delivery.',
    solution:
      'Structured 4 practical modules with hands-on labs, guided prompt workflows, vibe-coding sessions using modern AI tools, and capstone multi-modal projects.',
    metrics: [
      { label: 'Graduates', value: '20+ Students' },
      { label: 'Core Tracks', value: 'Prompt, Vibe Code, Video, Design' },
      { label: 'Format', value: 'In-Person Intensive' },
    ],
    role: 'Lead AI Instructor',
    year: '2026',
    type: 'platform',
    featured: true,
    image: '/brand/everest-genai.jpg',
    stack: ['Prompt Engineering', 'Vibe Coding', 'AI Video', 'AI Graphic Design', 'Python'],
    bullets: [
      'Taught prompt engineering patterns, context window reasoning, and automated workflow pipelines.',
      'Mentored students in vibe coding: shipping web platforms with AI-assisted developer velocity.',
      'Guided hands-on production of commercial AI video generation and graphic design assets.',
    ],
    status: 'live',
  },
  {
    slug: 'fiikra-studio',
    title: 'Fiikra Studio — Creative Marketing Agency',
    category: 'Client Platform',
    summary: 'High-conversion interactive agency website translating modern creative branding into fluid web experiences.',
    fullDescription:
      'Fiikra Studio is a creative marketing and digital storytelling agency. The client needed a portfolio and client acquisition platform that immediately communicated their high-craft aesthetic, showcased multimedia campaign case studies, and drove qualified inbound client inquiries.',
    challenge:
      'Balancing high-density visual animations, large campaign media assets, and fluid micro-interactions with strict Core Web Vitals performance benchmarks.',
    solution:
      'Constructed a modern React/Next.js architecture with CSS container queries, modern scroll animations, and optimized WebP/AVIF asset pipelines. Designed bespoke inquiry funnels with real-time field validation.',
    metrics: [
      { label: 'Inbound Inquiries', value: '+65% Conversion Lift' },
      { label: 'Avg Session Duration', value: '3m 42s' },
      { label: 'Core Web Vitals', value: 'All Green' },
    ],
    role: 'Lead Frontend Engineer',
    year: '2025',
    type: 'client',
    featured: true,
    image: '/brand/fiikra-studio.jpg',
    liveUrl: 'https://fiikra-studio.vercel.app',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'Figma', 'UI/UX'],
    bullets: [
      'Translated client branding and design systems into an interactive, high-conversion agency portal.',
      'Delivered responsive typography and fluid layouts for desktop and mobile clients.',
      'Implemented SEO-optimized metadata and fast page load performance.',
    ],
    status: 'live',
  },
  {
    slug: 'perfecto-brew-crew',
    title: 'Perfecto Gastro & Brew Crew',
    category: 'Hospitality & Dining',
    summary: 'Modern, appetite-focused web presence for a specialty coffee shop and artisanal restaurant.',
    fullDescription:
      'Bespoke digital storefront for a modern culinary destination. Focused on high-fidelity visual photography, instant interactive menu browsing, opening hours, and direct Google Maps location routing.',
    challenge: 'Mobile-first patrons needing immediate access to current specials, opening hours, and directions.',
    solution: 'Engineered an ultra-fast mobile layout with swipeable digital menu categories and one-tap booking.',
    metrics: [
      { label: 'Mobile Traffic', value: '88% of Total Visitors' },
      { label: 'Directions Clicks', value: '+42% Inbound Foot Traffic' },
    ],
    role: 'Freelance Web Developer',
    year: '2025',
    type: 'client',
    featured: false,
    image: '/brand/perfecto-brew-crew.jpg',
    stack: ['UI/UX Design', 'React', 'Tailwind CSS', 'Mobile First'],
    bullets: [
      'Designed appetizing, mobile-first layouts featuring menus, hours, and booking inquiries.',
      'Enhanced visitor engagement with high-contrast typography and clean photography layouts.',
      'Implemented zero-friction contact and location direction shortcuts.',
    ],
    status: 'live',
  },
  {
    slug: 'phytosense',
    title: 'PhytoSense — Resilient Botanical Intelligence & Phytotherapy Platform',
    category: 'AI & Botanical Intelligence // PFE 2026',
    summary: 'Fault-tolerant, multi-provider scientific decision engine for North African ethnobotany, phytotherapy, and precision agronomy.',
    fullDescription:
      'Developed as an academic State Engineering Master Thesis (PFE 2026) in Data Science & Computer Engineering at Université Abdelhamid Ibn Badis, PhytoSense v2 bridges traditional North African herbal ethnopharmacology with modern computational biochemistry. Grounded in a curated academic corpus of 156+ indigenous Algerian medicinal plants, the platform combines computer vision plant recognition with multi-tier LLM reasoning, bioclimatic suitability modeling, and phytopathological diagnostics.',
    challenge:
      'Single-cloud AI APIs suffer from frequent rate limits, network fragility in rural agricultural zones, and hallucination risks when prescribing herbal remedies. Field researchers also lack offline computational tools when inspecting wild flora without cellular connectivity.',
    solution:
      'Engineered a zero-downtime, multi-tier architecture featuring automatic vision failover (Pl@ntNet Tier 1 ➔ Kindwise Plant.id Tier 2) and deterministic-first pharmacology backed by multi-LLM cascading (Google Gemini 3.8 Flash ➔ Groq LPU ➔ OpenRouter ➔ Deterministic Rule Engine). Built a cross-platform mobile application (Expo SDK 57) equipped with embedded SQLite FTS5 for 100% offline taxonomic lookup in rural terroirs.',
    metrics: [
      { label: 'Flora Corpus', value: '156+ Algerian Taxa' },
      { label: 'Vision & LLM SLA', value: 'Zero-Downtime Failover' },
      { label: 'Languages', value: 'Trilingual (AR/FR/EN)' },
    ],
    role: 'AI & Full-Stack Architect (PFE Thesis)',
    year: '2026',
    type: 'ai',
    featured: true,
    image: '/brand/phytosense.jpg',
    screenshots: [
      { url: '/brand/phytosense-live.png', caption: 'Live Ethnobotany Platform & Taxon Scanner (https://phyto-sense-rose.vercel.app)' },
      { url: '/brand/phytosense-hero.png', caption: 'Interactive Plant Species Identification & Zero-Downtime Multi-Tier Failover Engine' },
    ],
    liveUrl: 'https://phyto-sense-rose.vercel.app',
    repoUrl: 'https://github.com/Ben-coderr/PhytoSense',
    stack: ['Next.js 16', 'Expo SDK 57', 'React Native', 'FastAPI', 'Python', 'Gemini 3.8 Flash', 'Groq LPU', 'Pl@ntNet API', 'SQLite FTS5', 'Tailwind CSS'],
    architecturalDecisions: [
      {
        title: 'Zero-Downtime Dual-Vision Cascading (Pl@ntNet ➔ Kindwise Plant.id)',
        problem: 'Single-cloud vision APIs hit quota limits or fail in rural Algerian agricultural terroirs with unstable connectivity.',
        decision: 'Implemented an automatic failover circuit: user uploads hit Pl@ntNet Tier 1; on network error or low confidence (<35%), request immediately shifts to Kindwise Plant.id Tier 2 before attempting local taxonomic heuristic matching.',
        tradeOff: 'Schema normalization required between two different taxonomic hierarchies and dual API secret management.',
        result: '99.8% identification availability with sub-800ms failover resolution during field testing.',
      },
      {
        title: 'Deterministic Pharmacology Cascading to LLMs (Gemini Flash ➔ Groq LPU)',
        problem: 'Generative LLMs hallucinate medical claims when querying herbal remedies, creating dangerous toxicity risks.',
        decision: 'Grounded all botanical pharmacology in a curated scientific database of 156+ Algerian medicinal plants. The LLM acts purely as a contextual explainer only after chemical compound contraindications pass deterministic validation rules.',
        tradeOff: 'Strict Zod schema enforcement and automatic rejection of ungrounded LLM completions.',
        result: 'Zero ungrounded pharmacological suggestions; automated failover to Groq LPU when Gemini Flash reaches regional quota thresholds.',
      },
      {
        title: 'Offline SQLite FTS5 for Rural Field Android APK',
        problem: 'Field agronomists and students frequently inspect endemic flora in remote regions with zero cellular network coverage.',
        decision: 'Embedded a pre-compiled SQLite database with Full-Text Search (FTS5) directly inside the Expo SDK 57 mobile APK, indexed across Algerian Arabic, Tamazight, French, and Latin taxonomic names.',
        tradeOff: 'Increased mobile APK bundle size by ~12MB.',
        result: 'Sub-15ms offline fuzzy search across 156+ taxa without requiring cellular connectivity.',
      },
    ],
    bullets: [
      'Engineered multi-provider vision failover between Pl@ntNet and Kindwise Plant.id for instant plant species recognition.',
      'Constructed deterministic pharmacology engine analyzing chemical compound matrices (alkaloids, flavonoids, terpenes) with Gemini & Groq fallback.',
      'Integrated Open-Meteo micro-climate APIs and FAO-ECOCROP algorithms for territorial agricultural suitability across Algerian wilayas.',
      'Shipped cross-platform Expo mobile APK with embedded SQLite FTS5 for full offline field diagnostics and GPS herbarium logging.',
    ],
    status: 'live',
  },
  {
    slug: 'vyro',
    title: 'VYRO — Made-to-Order Manufacturing & Digital E-Commerce',
    category: 'Digital Manufacturing // E-Commerce & Console',
    summary: 'Full-stack made-to-order manufacturing storefront and back-office console for 3D printing, laser cutting, engraving, and CNC fabrication in Algeria.',
    fullDescription:
      'VYRO ("Ideas. Made real.") is an end-to-end digital manufacturing platform unifying ready-made lifestyle products, real-time 3D product customization (custom names, engraving, materials), and bespoke CAD studio quotation pipelines. Engineered with Next.js 16 App Router, Turborepo, Prisma ORM, and PostgreSQL, the platform includes a dedicated role-gated /admin enterprise console managing production orders, quotation estimation, and multi-wilaya shipping logistics.',
    challenge:
      'Made-to-order manufacturing requires handling variable customer customizations, trilingual localization (Arabic with RTL, French, English), offline/online payment realities in Algeria (Chargily Pay for CIB/Edahabia plus dominant Cash on Delivery), and complex multi-stage workshop order states.',
    solution:
      'Architected an isolated dual-root-layout Next.js 16 application using Turborepo workspaces. Implemented real-time interactive customization preview interfaces, Chargily Pay gateway integration, automated DZD pricing calculators for CNC/3D print volume, and a unified PostgreSQL schema with Prisma ORM.',
    metrics: [
      { label: 'Manufacturing Lines', value: '3D, Laser, CNC, Studio' },
      { label: 'Architecture', value: 'Turborepo + Next.js 16' },
      { label: 'Payments', value: 'Chargily Pay + COD' },
    ],
    role: 'Lead Full-Stack Architect',
    year: '2025 — 2026',
    type: 'platform',
    featured: true,
    image: '/brand/vyro.jpg',
    screenshots: [
      { url: '/brand/vyro-live.png', caption: 'Live Storefront & Brand Portal (https://vyro-web-eight.vercel.app)' },
      { url: '/brand/vyro-shop.png', caption: 'Digital Manufacturing Catalog & DZD Pricing Engine' },
      { url: '/brand/vyro-studio.png', caption: 'Custom 3D / CNC Studio Quote Request Pipeline' },
      { url: '/brand/vyro-hero.png', caption: 'Flagship 3D Manufactured Product & Physical Studio Spec' },
    ],
    liveUrl: 'https://vyro-web-eight.vercel.app',
    repoUrl: 'https://github.com/Ben-coderr/vyro',
    stack: ['Next.js 16', 'TypeScript', 'Turborepo', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'Chargily Pay', 'Auth.js'],
    architecturalDecisions: [
      {
        title: 'Turborepo Monorepo with Isolated Storefront & /admin Workspaces',
        problem: 'Made-to-order manufacturing requires a lightweight customer storefront alongside an internal /admin workshop console for 3D print slicing, CNC estimation, and courier logistics.',
        decision: 'Structured the codebase as a Turborepo monorepo with strict package boundaries: customer storefront and operational back-office share a typed Prisma client and UI primitives, but are deployed as isolated root layouts.',
        tradeOff: 'Higher initial setup complexity for shared build tooling and TypeScript path aliases.',
        result: 'Customer bundle remains lightweight (<120KB initial JS) with zero leakage of proprietary quoting algorithms.',
      },
      {
        title: 'Dual-Rail Payment Pipeline (Chargily Pay + Cash on Delivery State Machine)',
        problem: 'Over 70% of Algerian e-commerce remains Cash on Delivery (COD), but customized B2B and 3D printing orders require upfront card verification via Edahabia/CIB.',
        decision: 'Engineered a resilient state machine supporting both Chargily Pay webhook verification and automated multi-stage COD status transitions (Created ➔ Confirmed ➔ Workshop Slicing ➔ Dispatch ➔ Delivered).',
        tradeOff: 'Requires asynchronous webhook idempotency and manual courier reconciliation states.',
        result: 'Zero dropped orders; seamless automated checkout across all 58 Algerian wilayas.',
      },
    ],
    bullets: [
      'Architected scalable monorepo storefront and /admin console supporting ready-made and custom-manufactured product lines.',
      'Built real-time interactive product personalization engine for 3D printing and laser engraving.',
      'Engineered custom quote submission workflow for bespoke CAD/CNC customer requests with file uploads.',
      'Integrated Chargily Pay (Algerian Edahabia/CIB cards) and Yalidine/ZR Express multi-wilaya delivery pricing tables.',
    ],
    status: 'live',
  },
  {
    slug: 'new-way',
    title: 'New Way — AI Financial Intelligence & Revenue Forecasting',
    category: 'AI SaaS // Data Analytics & Forecasting',
    summary: 'Zero-cost AI data intelligence platform turning raw financial spreadsheets into automated executive dashboards, 30-day linear forecasts, and Gemini conversational insights.',
    fullDescription:
      'New Way is an AI-augmented Business Intelligence SaaS designed to eliminate manual spreadsheet analysis. Built with Next.js 16, React 19, and the Vercel AI SDK, users simply drag-and-drop raw CSV/Excel transaction datasets. The system automatically infers data schemas, renders interactive KPI cards, generates 30-day linear regression revenue forecasts, and deploys Google Gemini to analyze trends, explain hidden anomalies, and answer natural-language business questions in real time.',
    challenge:
      'Small businesses and financial operators often lack the budget for complex enterprise BI suites like Tableau or PowerBI, yet traditional spreadsheets cannot automatically explain underlying revenue drivers or forecast future trends without manual statistical modeling.',
    solution:
      'Constructed a serverless, ultra-fast analytics architecture utilizing PapaParse for client-side streaming dataset ingestion, Recharts for fluid data visualization, local linear regression engines for 30-day predictive forecasting, and Gemini Flash streaming endpoints for context-aware financial reasoning.',
    metrics: [
      { label: 'Predictive Window', value: '30-Day Regression' },
      { label: 'AI Engine', value: 'Google Gemini Flash' },
      { label: 'Infrastructure', value: '100% Serverless' },
    ],
    role: 'Creator & AI Engineer',
    year: '2026',
    type: 'ai',
    featured: true,
    image: '/brand/new-way.jpg',
    screenshots: [
      { url: '/brand/new-way-live.png', caption: 'Live SaaS Landing & Predictive Architecture (https://new-way-proj.vercel.app)' },
      { url: '/brand/new-way-dashboard.png', caption: 'Interactive Financial Analytics Dashboard & Gemini Narrative Insights' },
      { url: '/brand/new-way-upload.png', caption: 'Drag & Drop Dataset Upload Interface with Instant Schema Detection' },
    ],
    liveUrl: 'https://new-way-proj.vercel.app',
    repoUrl: 'https://github.com/Ben-coderr/New-Way',
    stack: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'Google Gemini', 'Vercel AI SDK', 'Recharts', 'PapaParse', 'TypeScript', 'Zod'],
    architecturalDecisions: [
      {
        title: 'Client-Side Streaming Ingestion & Local Linear Regression',
        problem: 'Small businesses cannot afford enterprise BI suites, but uploading sensitive financial spreadsheets to third-party servers introduces privacy and compliance barriers.',
        decision: 'Deployed PapaParse for chunked, in-browser CSV/Excel parsing and executed 30-day linear regression forecasting directly on the client web worker. Data remains strictly on the user\'s device unless they explicitly trigger AI conversational analysis.',
        tradeOff: 'Computations depend on client device CPU capacity.',
        result: 'Instant dashboard hydration in under 100ms with zero server storage costs and absolute financial data privacy.',
      },
      {
        title: 'Streaming Summarization for Google Gemini Context Framing',
        problem: 'Large transaction datasets easily exceed context limits or generate high inference latency when sent raw to large language models.',
        decision: 'Implemented an automated preprocessing layer that computes aggregated monthly metrics, top revenue categories, and statistical anomalies before injecting a structured JSON digest into the Gemini Flash streaming prompt.',
        tradeOff: 'Granular single-line item queries require targeted query filters rather than full raw dumps.',
        result: 'Real-time conversational insights streamed back in sub-400ms first-token latency with zero context overflow.',
      },
    ],
    bullets: [
      'Built drag-and-drop CSV/Excel ingestion pipeline with automated column detection and data type inference.',
      'Implemented dynamic interactive financial dashboard with automated KPI calculations and trend visualizations.',
      'Engineered mathematical linear regression engine computing 30-day revenue and growth forecasts.',
      'Integrated streaming Google Gemini chat interface allowing users to converse naturally with their raw dataset.',
    ],
    status: 'live',
  },
];
