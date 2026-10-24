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
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
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
      { label: 'Format', value: 'Complete Video Course' },
      { label: 'Language', value: 'Arabic (العربية)' },
    ],
    role: 'Course Creator & Instructor',
    year: '2024 — Present',
    type: 'platform',
    featured: true,
    image: '/brand/udemy-python.jpg',
    liveUrl: 'https://www.udemy.com/course/bencoderr-python-course-arabic/?referralCode=A268F9C13E98A6D18163&couponCode=26BBPFEO2MXTRMT',
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
];
