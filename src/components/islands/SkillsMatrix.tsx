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
  // AI & Data
  { name: 'Generative AI & LLMs', category: 'ai', level: 'Production', context: 'Everest Academy & AI Formation', iconType: 'brain' },
  { name: 'Prompt Engineering', category: 'ai', level: 'Instruction', context: 'Advanced prompting & context engineering', iconType: 'terminal' },
  { name: 'Vibe Coding & AI Tools', category: 'ai', level: 'Mastery', context: 'Rapid AI-assisted full-stack development', iconType: 'zap' },
  { name: 'AI Video & Graphic Design', category: 'ai', level: 'Instruction', context: 'Runway, Kling, Midjourney, FLUX.1', iconType: 'video' },
  { name: 'Python', category: 'ai', level: 'Core Stack', context: 'Data pipelines & Udemy 300+ students', iconType: 'python' },
  { name: 'RAG & Vector DBs', category: 'ai', level: 'Core Stack', context: 'ChromaDB, Pinecone retrieval', iconType: 'database' },
  { name: 'Machine Learning', category: 'ai', level: 'Academic', context: 'Univ. Mostaganem Data Science', iconType: 'network' },
  { name: 'Data Security', category: 'ai', level: 'Production', context: 'Enterprise IT & Sonatrach', iconType: 'shield' },

  // Frontend
  { name: 'Next.js 15 (App Router)', category: 'frontend', level: 'Core Stack', context: 'Production Web Platforms (JG SupplyNet)', iconType: 'next' },
  { name: 'React', category: 'frontend', level: 'Core Stack', context: 'SPAs & Streaming AI interfaces', iconType: 'react' },
  { name: 'TypeScript', category: 'frontend', level: 'Core Stack', context: 'End-to-end type safety', iconType: 'typescript' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'Core Stack', context: 'Design systems & responsive UI', iconType: 'tailwind' },
  { name: 'UI/UX & Figma', category: 'frontend', level: 'Design', context: 'Prototyping & user journeys', iconType: 'figma' },

  // Backend & Data
  { name: 'Node.js', category: 'backend', level: 'Core Stack', context: 'REST APIs & microservices', iconType: 'node' },
  { name: 'Django / REST Framework', category: 'backend', level: 'Core Stack', context: 'Enterprise backends & auth', iconType: 'django' },
  { name: 'PostgreSQL', category: 'backend', level: 'Core Stack', context: 'Relational data modeling', iconType: 'postgres' },
  { name: 'MongoDB', category: 'backend', level: 'Production', context: 'Document storage & caches', iconType: 'mongo' },
  { name: 'FastAPI', category: 'backend', level: 'Production', context: 'High-speed Python AI APIs', iconType: 'fastapi' },

  // Tools & Systems
  { name: 'Robotics & Hardware', category: 'tools', level: 'Instruction', context: 'Arduino & Raspberry Pi with DZDuino', iconType: 'bot' },
  { name: 'Git & GitHub', category: 'tools', level: 'Workflow', context: 'CI/CD & team version control', iconType: 'github' },
  { name: 'Linux / POSIX', category: 'tools', level: 'System', context: 'Server administration & bash', iconType: 'linux' },
  { name: 'Docker', category: 'tools', level: 'DevOps', context: 'Containerized deployments', iconType: 'docker' },
  { name: 'VS Code & Tooling', category: 'tools', level: 'Workflow', context: 'Custom extensions & profiling', iconType: 'vscode' },
  { name: 'Windows Server', category: 'tools', level: 'Enterprise', context: 'Sonatrach enterprise infrastructure', iconType: 'server' },

  // Teaching & Communication
  { name: 'AI Instruction', category: 'teaching', level: 'Lead Instructor', context: 'Everest Academy flagship formation', iconType: 'teach' },
  { name: 'Online Teaching (Udemy)', category: 'teaching', level: 'Instructor', context: 'Python for Beginners (300+ students)', iconType: 'book' },
  { name: 'Content Creation (102K+)', category: 'teaching', level: 'BenCoder', context: 'Global developer audience', iconType: 'play' },
  { name: 'Public Speaking & Workshops', category: 'teaching', level: 'Speaker', context: 'Tlemcen, Algiers & Oran sessions', iconType: 'mic' },
  { name: '1-on-1 Mentorship', category: 'teaching', level: 'Mentor', context: '3-Month Web Dev Intensive & Robotics', iconType: 'users' },
];

const categories = [
  { id: 'all', label: 'All Capabilities', count: allSkills.length, icon: 'layers' },
  { id: 'ai', label: 'AI & Machine Learning', count: allSkills.filter((s) => s.category === 'ai').length, icon: 'brain' },
  { id: 'frontend', label: 'Frontend & UI', count: allSkills.filter((s) => s.category === 'frontend').length, icon: 'layout' },
  { id: 'backend', label: 'Backend & Data', count: allSkills.filter((s) => s.category === 'backend').length, icon: 'server' },
  { id: 'tools', label: 'Systems & DevOps', count: allSkills.filter((s) => s.category === 'tools').length, icon: 'terminal' },
  { id: 'teaching', label: 'Instruction & EdTech', count: allSkills.filter((s) => s.category === 'teaching').length, icon: 'teach' },
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
              ? `Inspecting: ${hoveredSkill.name} (${hoveredSkill.level}) — ${hoveredSkill.context}`
              : `Showing ${filtered.length} verified technical competencies. Hover any skill for verified context.`}
          </span>
        </div>
        <span className="text-[10px] text-text-faint uppercase hidden md:inline shrink-0">
          Zero arbitrary fluff · 100% verified
        </span>
      </div>
    </div>
  );
}
