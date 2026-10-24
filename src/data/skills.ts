export interface SkillGroup {
  name: string;
  icon: string;
  description: string;
  skills: { name: string; icon?: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'AI & Data',
    icon: 'lucide:brain',
    description: 'Foundational models, local LLM fine-tuning, and practical data analysis.',
    skills: [
      { name: 'Generative AI' },
      { name: 'LLMs' },
      { name: 'Machine Learning' },
      { name: 'Data Analysis & Reporting' },
      { name: 'Data Security Fundamentals' },
      { name: 'Python' },
    ],
  },
  {
    name: 'Frontend',
    icon: 'lucide:monitor',
    description: 'Modern, high-performance web applications with clean typography and responsive layouts.',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
      { name: 'UI/UX Design' },
      { name: 'Figma' },
    ],
  },
  {
    name: 'Backend & APIs',
    icon: 'lucide:server',
    description: 'Robust server architecture, REST endpoints, and secure application logic.',
    skills: [
      { name: 'Node.js' },
      { name: 'Django' },
      { name: 'REST APIs' },
      { name: 'Python' },
    ],
  },
  {
    name: 'Data Layer',
    icon: 'lucide:database',
    description: 'Relational schema design and document storage systems.',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
    ],
  },
  {
    name: 'Tools & Infrastructure',
    icon: 'lucide:terminal',
    description: 'Development toolchains, operating systems, and server management.',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'VS Code' },
      { name: 'Linux' },
      { name: 'Windows Server' },
      { name: 'Computer Networks' },
      { name: 'IT Support' },
    ],
  },
  {
    name: 'Teaching & Communication',
    icon: 'lucide:presentation',
    description: 'Curriculum creation, public speaking, and community education for over 102K engineers.',
    skills: [
      { name: 'AI Instruction' },
      { name: 'Public Speaking' },
      { name: 'Curriculum Design' },
      { name: 'Tech Content Creation' },
      { name: 'Robotics & Automation (basics)' },
    ],
  },
];
