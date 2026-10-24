export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  role: string;
  year: string;
  type: 'platform' | 'client' | 'ai' | 'web';
  featured: boolean;
  liveUrl?: string;
  repoUrl?: string;
  stack: string[];
  bullets: string[];
  status: 'live' | 'archived' | 'confidential';
}

export const projects: Project[] = [
  {
    slug: 'virexa',
    title: 'Virexa — Healthcare Startup Platform',
    category: 'Healthcare Tech Platform',
    summary: "Full digital platform aimed at improving patients' lives through tech-driven healthcare solutions.",
    role: 'Full-Stack Developer',
    year: '2025',
    type: 'platform',
    featured: true,
    liveUrl: 'https://virexa-eta.vercel.app',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'TypeScript'],
    bullets: [
      "Engineered patient-centric digital platform with responsive interfaces and fast loading speeds.",
      "Architected modular component hierarchy for scalable health service discovery.",
      "Optimized for high accessibility and cross-device mobile usability.",
    ],
    status: 'live',
  },
  {
    slug: 'fiikra-studio',
    title: 'Fiikra Studio — Marketing Agency Website',
    category: 'Client Platform',
    summary: 'Professional agency platform built and deployed for a creative marketing client.',
    role: 'Lead Frontend Engineer',
    year: '2025',
    type: 'client',
    featured: true,
    liveUrl: 'https://fiikra-studio.vercel.app',
    stack: ['React', 'Next.js', 'Tailwind CSS', 'Figma', 'UI/UX'],
    bullets: [
      "Translated client branding and design systems into an interactive, high-conversion agency portal.",
      "Delivered responsive typography and fluid layouts for desktop and mobile clients.",
      "Implemented SEO-optimized metadata and fast page load performance.",
    ],
    status: 'live',
  },
  {
    slug: 'tassili-ai',
    title: 'Tassili AI — Algerian Large Language Model',
    category: 'AI Initiative',
    summary: 'Contributing to Algerian LLM initiative with a focus on practical, locally relevant AI applications.',
    role: 'AI Team Member',
    year: '2026',
    type: 'ai',
    featured: true,
    stack: ['Python', 'LLMs', 'Generative AI', 'Data Science', 'Machine Learning'],
    bullets: [
      "Contribute to AI development around national Algerian LLM model initiatives.",
      "Focus on culturally and linguistically nuanced language modeling for regional users.",
      "Research practical applications for making AI accessible in the local ecosystem.",
    ],
    status: 'confidential',
  },
  {
    slug: 'jg-supply-net',
    title: 'JG Supply Net',
    category: 'Commercial Business Site',
    summary: 'Designed and delivered a professional corporate website for an international business supplier.',
    role: 'Freelance Full-Stack Developer',
    year: '2025',
    type: 'client',
    featured: false,
    liveUrl: 'https://jgsupplynet.com',
    stack: ['React', 'Node.js', 'Tailwind CSS', 'Responsive Web'],
    bullets: [
      "Built clean, corporate web presence for client supply catalog and business inquiries.",
      "Ensured cross-browser compatibility and rapid response times.",
      "Provided maintenance-free architecture with static-first generation.",
    ],
    status: 'live',
  },
  {
    slug: 'perfecto-brew-crew',
    title: 'Perfecto Gastro & Brew Crew',
    category: 'Hospitality & Dining',
    summary: 'Custom, modern websites for a restaurant and specialty coffee shop.',
    role: 'Freelance Web Developer',
    year: '2025',
    type: 'client',
    featured: false,
    stack: ['UI/UX Design', 'React', 'Tailwind CSS', 'Mobile First'],
    bullets: [
      "Designed appetizing, mobile-first layouts featuring menus, hours, and booking inquiries.",
      "Enhanced visitor engagement with high-contrast typography and clean photography layouts.",
      "Implemented zero-friction contact and location direction shortcuts.",
    ],
    status: 'live',
  },
];
