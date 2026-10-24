export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  fullDescription?: string;
  challenge?: string;
  solution?: string;
  metrics?: { label: string; value: string }[];
  role: string;
  year: string;
  type: 'platform' | 'client' | 'ai' | 'web';
  featured: boolean;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  stack: string[];
  bullets: string[];
  status: 'live' | 'archived' | 'confidential';
}

export const projects: Project[] = [
  {
    slug: 'tassili-ai',
    title: 'Tassili AI — Algerian Large Language Model',
    category: 'National AI Initiative',
    summary: 'Fine-tuning sovereign language models natively adapted for the cultural, linguistic, and dialectal nuances of Algerian Darija.',
    fullDescription:
      'Tassili AI is an ambitious Algerian artificial intelligence project building sovereign language models. Mainstream LLMs like GPT-4 or generic Llama checkpoints struggle with Algerian Darija because it is a low-resource linguistic system mixing Algerian Arabic dialects, Tamazight influences, and French loanwords, transcribed in both Arabic and Latin (Arabizi) scripts. As an AI team contributor, I work on dataset curation, tokenization strategy, and evaluation pipelines.',
    challenge:
      'Standard Arabic tokenizers segment Algerian Darija phrases into excessively long, fractured token sequences, driving up inference latency and degrading semantic comprehension. Furthermore, training corpora suffer from noisy social web transcriptions with irregular orthography.',
    solution:
      'Implemented custom preprocessing and subword vocabulary adaptation on top of Llama-3 checkpoints. Formulated synthetic multi-turn conversational datasets capturing real Algerian daily problem-solving, commercial exchanges, and administrative inquiries. Engineered benchmark suites testing dialect comprehension vs. translation hallucination.',
    metrics: [
      { label: 'Token Efficiency', value: '+38% Subword Compression' },
      { label: 'Dialect Bleuscore', value: '41.2 on Darija Benchmark' },
      { label: 'Inference Target', value: '<120ms First Token' },
    ],
    role: 'AI Team Contributor',
    year: '2025 — 2026',
    type: 'ai',
    featured: true,
    image: '/brand/tassili-ai.jpg',
    stack: ['Python', 'LLMs', 'PyTorch', 'Hugging Face', 'Data Science', 'FastAPI'],
    bullets: [
      'Contribute to data pipelines and tokenization strategies for Algerian Darija corpora.',
      'Investigate Arabic and Latin-script Arabizi dialect nuances for fine-tuning.',
      'Participate in architecture decisions for real-world enterprise AI adoption in North Africa.',
    ],
    status: 'confidential',
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
    slug: 'everest-genai',
    title: 'Everest GenAI Platform & Sandbox',
    category: 'EdTech & AI Tooling',
    summary: 'Interactive learning sandbox and prompt evaluation workbench built for students of the "Build with AI" curriculum.',
    fullDescription:
      'To provide students in the Everest Academy "Build with AI" course with real-world practice, I built a browser-based AI engineering workbench. The platform allows students to test token usage, evaluate temperature settings, inspect vector chunk embeddings, and debug autonomous ReAct agent loops in real-time.',
    challenge:
      'Students frequently struggled to visualize invisible concepts like vector embedding distances, token boundaries, and multi-turn agent state transitions using command-line scripts alone.',
    solution:
      'Created an interactive visual inspector displaying cosine similarities in 2D space, real-time token color highlighting, and a visual ReAct agent loop step visualizer.',
    metrics: [
      { label: 'Student Completion', value: '100% Final Demo Rate' },
      { label: 'Interactive Labs', value: '16 Guided Workbenches' },
      { label: 'Student Cohort', value: '20+ Engineers Trained' },
    ],
    role: 'Creator & Lead Instructor',
    year: '2026',
    type: 'platform',
    featured: true,
    image: '/brand/everest-genai.jpg',
    stack: ['React', 'Python', 'FastAPI', 'ChromaDB', 'Tailwind CSS'],
    bullets: [
      'Engineered interactive prompt experimentation workbench for 20+ students.',
      'Visualized vector chunking, cosine distance, and agent tool execution chains.',
      'Streamed token responses via Server-Sent Events with zero UI layout shifts.',
    ],
    status: 'live',
  },
  {
    slug: 'jg-supply-net',
    title: 'JG Supply Net — Commercial Supplier Portal',
    category: 'Commercial Business Site',
    summary: 'Corporate web catalog and quotation portal for an international industrial equipment supplier.',
    fullDescription:
      'JG Supply Net serves industrial and commercial clients with equipment supply and logistics. Designed and built a static-first, highly reliable corporate catalog enabling rapid product discovery and quotation requests without technical overhead.',
    challenge: 'Organizing hundreds of technical product specifications in a lightning-fast, mobile-friendly catalog.',
    solution: 'Built with static site generation, full-text client-side catalog search, and direct WhatsApp / email inquiry routing.',
    metrics: [
      { label: 'Page Load', value: '<300ms Static' },
      { label: 'Uptime', value: '99.99%' },
    ],
    role: 'Freelance Full-Stack Developer',
    year: '2025',
    type: 'client',
    featured: false,
    image: '/brand/jg-supply-net.jpg',
    liveUrl: 'https://jgsupplynet.com',
    stack: ['React', 'Node.js', 'Tailwind CSS', 'Static Generation'],
    bullets: [
      'Built clean, corporate web presence for client supply catalog and business inquiries.',
      'Ensured cross-browser compatibility and rapid response times.',
      'Provided maintenance-free architecture with static-first generation.',
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
];
