export interface SkillGroup {
  name: string;
  icon: string;
  description: string;
  skills: { name: string; icon?: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Applied AI & LLMs',
    icon: 'lucide:brain',
    description: 'Model deployment, multi-provider failover, and practical prompt architecture.',
    skills: [
      { name: 'Applied LLMs & Gemini Flash' },
      { name: 'Multi-Provider Failover' },
      { name: 'Prompt Engineering' },
      { name: 'Vibe Coding Methodology' },
      { name: 'Python' },
    ],
  },
  {
    name: 'Frontend & UI',
    icon: 'lucide:monitor',
    description: 'High-performance web applications with responsive design and accessibility.',
    skills: [
      { name: 'Next.js 15 & 16' },
      { name: 'React 19' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'WCAG AA Accessibility' },
    ],
  },
  {
    name: 'Backend & Data',
    icon: 'lucide:server',
    description: 'Type-safe server architecture, relational databases, and edge storage.',
    skills: [
      { name: 'FastAPI & Node.js' },
      { name: 'PostgreSQL & Prisma' },
      { name: 'SQLite FTS5 (Offline Mobile)' },
      { name: 'RESTful API Design' },
    ],
  },
  {
    name: 'Systems & Integrations',
    icon: 'lucide:terminal',
    description: 'Monorepo tooling, regional payment gateways, and embedded robotics.',
    skills: [
      { name: 'Turborepo Workspaces' },
      { name: 'Chargily Pay (CIB/Edahabia)' },
      { name: 'Git & GitHub Workflows' },
      { name: 'Arduino Uno & Raspberry Pi 4' },
      { name: 'Linux / POSIX' },
    ],
  },
  {
    name: 'Teaching & Pedagogy',
    icon: 'lucide:presentation',
    description: 'Hands-on bootcamp instruction and Arabic technical education for 102K+ developers.',
    skills: [
      { name: 'Bootcamp Instruction (Everest Academy)' },
      { name: 'Udemy Course Authoring (300+ Students)' },
      { name: 'Technical Video Content (BenCoder)' },
      { name: 'Hardware & Embedded Mentorship' },
    ],
  },
];
