import { useState, useMemo } from 'react';
import { SkillIcon } from './SkillIcon';

export interface SkillItem {
  name: string;
  category: 'ai' | 'frontend' | 'backend' | 'tools' | 'teaching';
  level: string;
  context: string;
  iconType: string;
}

export const allSkills: SkillItem[] = [
  // AI & Large Language Models
  {
    name: 'Applied LLMs & Prompt Architecture',
    category: 'ai',
    level: 'Production',
    context: 'Google Gemini Flash & Vercel AI SDK (New Way & PhytoSense)',
    iconType: 'brain',
  },
  {
    name: 'Multi-Provider Failover Cascading',
    category: 'ai',
    level: 'Architecture',
    context: 'Pl@ntNet ➔ Kindwise vision failover (PhytoSense)',
    iconType: 'network',
  },
  {
    name: 'AI Pedagogy & Vibe Coding',
    category: 'ai',
    level: 'Instruction',
    context: 'Everest Academy flagship "Build with AI" curriculum',
    iconType: 'teach',
  },

  // Frontend & User Interfaces
  {
    name: 'Next.js (App Router & SSR)',
    category: 'frontend',
    level: 'Core Stack',
    context: 'JG SupplyNet, VYRO, PhytoSense & New Way',
    iconType: 'next',
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    level: 'Core Stack',
    context: 'Strict end-to-end type safety across all repositories',
    iconType: 'typescript',
  },
  {
    name: 'React 19 & Fluid UI',
    category: 'frontend',
    level: 'Core Stack',
    context: 'Interactive dashboards & streaming client components',
    iconType: 'react',
  },
  {
    name: 'Tailwind CSS & Design Systems',
    category: 'frontend',
    level: 'Core Stack',
    context: 'Responsive WCAG AA accessible component systems',
    iconType: 'tailwind',
  },

  // Backend & Data Storage
  {
    name: 'Python & FastAPI',
    category: 'backend',
    level: 'Core Stack',
    context: 'PhytoSense decision engine & Udemy Python Course',
    iconType: 'python',
  },
  {
    name: 'PostgreSQL & Prisma ORM',
    category: 'backend',
    level: 'Core Stack',
    context: 'VYRO manufacturing database schema & Sefrone APIs',
    iconType: 'postgres',
  },
  {
    name: 'Offline Full-Text Search (SQLite FTS5)',
    category: 'backend',
    level: 'Mobile Edge',
    context: 'PhytoSense offline Android APK botanical search',
    iconType: 'database',
  },

  // Systems & Regional Integrations
  {
    name: 'Turborepo Monorepo Architecture',
    category: 'tools',
    level: 'Workflow',
    context: 'Storefront + /admin workspace isolation in VYRO',
    iconType: 'terminal',
  },
  {
    name: 'Regional Payments & Logistics',
    category: 'tools',
    level: 'Integration',
    context: 'Chargily Pay (CIB/Edahabia) & Yalidine shipping tables in VYRO',
    iconType: 'zap',
  },
  {
    name: 'Microcontrollers & Linux Edge (C/C++)',
    category: 'tools',
    level: 'Embedded',
    context: 'Arduino Uno & Raspberry Pi 4 edge robotics with DZDuino',
    iconType: 'bot',
  },
  {
    name: 'Online Pedagogy & Community',
    category: 'teaching',
    level: 'Platform',
    context: '300+ Udemy students & 102K+ BenCoder developer community',
    iconType: 'play',
  },
];

const categories = [
  { id: 'all', label: 'All Core Skills', count: allSkills.length, icon: 'layers' },
  { id: 'ai', label: 'Applied AI & LLMs', count: allSkills.filter((s) => s.category === 'ai').length, icon: 'brain' },
  { id: 'frontend', label: 'Frontend & UI', count: allSkills.filter((s) => s.category === 'frontend').length, icon: 'layout' },
  { id: 'backend', label: 'Backend & Data', count: allSkills.filter((s) => s.category === 'backend').length, icon: 'server' },
  { id: 'tools', label: 'Systems & Integrations', count: allSkills.filter((s) => s.category === 'tools').length, icon: 'terminal' },
  { id: 'teaching', label: 'Teaching & Community', count: allSkills.filter((s) => s.category === 'teaching').length, icon: 'teach' },
];

export function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return allSkills;
    return allSkills.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-8 font-mono select-none">
      {/* Category Filter Tab Bar with Icons */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 cursor-pointer flex items-center gap-2 border ${
                isActive
                  ? 'bg-invert-bg text-invert-text border-transparent font-bold shadow-xs'
                  : 'bg-surface text-text-muted border-border hover:border-border-strong hover:text-text'
              }`}
            >
              <SkillIcon icon={cat.icon} className="w-3.5 h-3.5 shrink-0 opacity-80" />
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-invert-text/20 text-invert-text' : 'bg-surface-2 text-text-faint'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills Chip Grid with Authentic Monochrome Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((skill) => (
          <div
            key={skill.name}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
            className="p-3.5 rounded-xl border border-border bg-surface/80 hover:bg-surface hover:border-border-strong transition-all duration-200 group flex flex-col justify-between space-y-3 cursor-default"
          >
            {/* Header: Icon Container + Level Badge */}
            <div className="flex items-center justify-between">
              <div className="w-7 h-7 rounded-lg border border-border bg-surface-2 flex items-center justify-center text-text-muted group-hover:text-text group-hover:border-border-strong group-hover:scale-105 transition-all shrink-0">
                <SkillIcon icon={skill.iconType} className="w-3.5 h-3.5 shrink-0" />
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-surface-2 border border-border text-text-muted group-hover:text-text group-hover:border-border-strong transition-colors font-mono">
                {skill.level}
              </span>
            </div>

            {/* Skill Name & Architectural Category */}
            <div>
              <div className="text-sm font-bold text-text font-sans group-hover:translate-x-0.5 transition-transform leading-snug">
                {skill.name}
              </div>
              <div className="text-[10px] text-text-faint uppercase tracking-wider mt-1">
                {skill.category}
              </div>
            </div>

            {/* Context Verification Note */}
            <div className="text-[11px] text-text-muted truncate pt-2 border-t border-border/50">
              {skill.context}
            </div>
          </div>
        ))}
      </div>

      {/* Context Inspection Bar with Live Hover Icon */}
      <div className="p-4 rounded-xl border border-border bg-surface-2/60 flex items-center justify-between text-xs text-text-muted">
        <div className="flex items-center gap-2.5 min-w-0">
          {hoveredSkill ? (
            <div className="w-5 h-5 rounded border border-border bg-surface flex items-center justify-center text-text shrink-0">
              <SkillIcon icon={hoveredSkill.iconType} className="w-3 h-3" />
            </div>
          ) : (
            <span className="text-status shrink-0">●</span>
          )}
          <span className="truncate">
            {hoveredSkill
              ? `Demonstrated in: ${hoveredSkill.name} — ${hoveredSkill.context}`
              : `Showing ${filtered.length} core engineering capabilities. Hover any skill for production evidence.`}
          </span>
        </div>
        <span className="text-[10px] text-text-faint uppercase hidden md:inline shrink-0">
          Backed by shipped production code
        </span>
      </div>
    </div>
  );
}
