import { useState, useMemo } from 'react';

interface SkillItem {
  name: string;
  category: 'ai' | 'frontend' | 'backend' | 'tools' | 'teaching';
  level: string;
  context: string;
  iconType: string;
}

const allSkills: SkillItem[] = [
  // AI & Data
  { name: 'Generative AI & LLMs', category: 'ai', level: 'Production', context: 'Everest Academy & AI Formation', iconType: 'brain' },
  { name: 'Prompt Engineering', category: 'ai', level: 'Instruction', context: 'Advanced prompting & context engineering', iconType: 'sparkles' },
  { name: 'Vibe Coding & AI Tools', category: 'ai', level: 'Mastery', context: 'Rapid AI-assisted full-stack development', iconType: 'cpu' },
  { name: 'AI Video & Graphic Design', category: 'ai', level: 'Instruction', context: 'Runway, Kling, Midjourney, FLUX.1', iconType: 'sparkles' },
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
  { name: 'FastAPI', category: 'backend', level: 'Production', context: 'High-speed Python AI APIs', iconType: 'api' },

  // Tools & Systems
  { name: 'Robotics & Hardware', category: 'tools', level: 'Instruction', context: 'Arduino & Raspberry Pi with DZDuino', iconType: 'cpu' },
  { name: 'Git & GitHub', category: 'tools', level: 'Workflow', context: 'CI/CD & team version control', iconType: 'git' },
  { name: 'Linux / POSIX', category: 'tools', level: 'System', context: 'Server administration & bash', iconType: 'linux' },
  { name: 'Docker', category: 'tools', level: 'DevOps', context: 'Containerized deployments', iconType: 'docker' },
  { name: 'VS Code & Tooling', category: 'tools', level: 'Workflow', context: 'Custom extensions & profiling', iconType: 'code' },
  { name: 'Windows Server', category: 'tools', level: 'Enterprise', context: 'Sonatrach enterprise infrastructure', iconType: 'server' },

  // Teaching & Communication
  { name: 'AI Instruction', category: 'teaching', level: 'Lead Instructor', context: 'Everest Academy flagship formation', iconType: 'teach' },
  { name: 'Online Teaching (Udemy)', category: 'teaching', level: 'Instructor', context: 'Python for Beginners (300+ students)', iconType: 'book' },
  { name: 'Content Creation (102K+)', category: 'teaching', level: 'BenCoder', context: 'Global developer audience', iconType: 'video' },
  { name: 'Public Speaking & Workshops', category: 'teaching', level: 'Speaker', context: 'Tlemcen, Algiers & Oran sessions', iconType: 'mic' },
  { name: '1-on-1 Mentorship', category: 'teaching', level: 'Mentor', context: '3-Month Web Dev Intensive & Robotics', iconType: 'teach' },
];

const categories = [
  { id: 'all', label: 'All Capabilities', count: allSkills.length },
  { id: 'ai', label: 'AI & Machine Learning', count: allSkills.filter((s) => s.category === 'ai').length },
  { id: 'frontend', label: 'Frontend & UI', count: allSkills.filter((s) => s.category === 'frontend').length },
  { id: 'backend', label: 'Backend & Data', count: allSkills.filter((s) => s.category === 'backend').length },
  { id: 'tools', label: 'Systems & DevOps', count: allSkills.filter((s) => s.category === 'tools').length },
  { id: 'teaching', label: 'Instruction & EdTech', count: allSkills.filter((s) => s.category === 'teaching').length },
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
      {/* Category Filter Tab Bar */}
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

      {/* Skills Chip Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((skill) => (
          <div
            key={skill.name}
            onMouseEnter={() => setHoveredSkill(skill)}
            onMouseLeave={() => setHoveredSkill(null)}
            className="p-3.5 rounded-xl border border-border bg-surface/80 hover:bg-surface hover:border-border-strong transition-all duration-200 group flex flex-col justify-between space-y-2 cursor-default"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-text-faint uppercase tracking-wider">
                {skill.category}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-surface-2 border border-border text-text-muted group-hover:text-text group-hover:border-border-strong transition-colors">
                {skill.level}
              </span>
            </div>

            <div className="text-sm font-bold text-text font-sans group-hover:translate-x-0.5 transition-transform">
              {skill.name}
            </div>

            <div className="text-[11px] text-text-muted truncate pt-1 border-t border-border/50">
              {skill.context}
            </div>
          </div>
        ))}
      </div>

      {/* Context Inspection Bar */}
      <div className="p-4 rounded-xl border border-border bg-surface-2/60 flex items-center justify-between text-xs text-text-muted">
        <div className="flex items-center gap-2">
          <span className="text-status">●</span>
          <span>
            {hoveredSkill
              ? `Inspecting: ${hoveredSkill.name} (${hoveredSkill.level}) — ${hoveredSkill.context}`
              : `Showing ${filtered.length} verified technical competencies. Hover any skill for verified context.`}
          </span>
        </div>
        <span className="text-[10px] text-text-faint uppercase hidden md:inline">
          Zero arbitrary fluff · 100% verified
        </span>
      </div>
    </div>
  );
}
