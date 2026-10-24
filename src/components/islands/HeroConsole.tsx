import { useState, useEffect } from 'react';

interface Pillar {
  id: string;
  num: string;
  label: string;
  title: string;
  entity: string;
  command: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  snippet: {
    prefix: string;
    lines: { text: string; highlight?: boolean; status?: 'done' | 'active' }[];
  };
}

const pillars: Pillar[] = [
  {
    id: 'teach',
    num: '01',
    label: 'Teach',
    title: 'Lead Generative AI Instructor',
    entity: 'Everest Academy · Mostaganem',
    command: 'run curriculum --course="Build with AI" --target=prod',
    metrics: [
      { label: 'Format', value: '1-Mo Intensive' },
      { label: 'Level', value: 'Hands-on Labs' },
      { label: 'Graduates', value: '20+ Engineers' },
    ],
    tags: ['GenAI Courses', 'Workshops', 'Syllabus', 'Prompt Eng'],
    snippet: {
      prefix: 'curriculum-runner',
      lines: [
        { text: '✓ Week 01: Prompt Engineering & Context Windows', status: 'done' },
        { text: '✓ Week 02: Vector DBs, Chunking & RAG Pipelines', status: 'done' },
        { text: '✓ Week 03: Function Calling & Agent Workflows', status: 'done' },
        { text: '✓ Week 04: Shipping Production AI Applications', status: 'active', highlight: true },
      ],
    },
  },
  {
    id: 'create',
    num: '02',
    label: 'Create',
    title: 'Tech Educator & Engineering Insights',
    entity: 'BenCoder Community · Global',
    command: 'fetch audience --channel=@BenCoder --realtime',
    metrics: [
      { label: 'Audience', value: '102K+ Devs' },
      { label: 'Format', value: 'Video Tutorials' },
      { label: 'Language', value: 'English First' },
    ],
    tags: ['EdTech', 'Practical Demos', 'Architecture', 'Open Source'],
    snippet: {
      prefix: 'community-pulse',
      lines: [
        { text: '• 102,000+ engineers learning modern full-stack & AI', highlight: true },
        { text: '• Focused on pragmatic code: no fluff, real architectures' },
        { text: '• Tutorials covering Next.js, Django, PyTorch & LLM tooling' },
        { text: '• Active mentorship and community Q&A' },
      ],
    },
  },
  {
    id: 'build',
    num: '03',
    label: 'Build',
    title: 'Full-Stack Software Architecture',
    entity: 'Production Web Platforms & APIs',
    command: 'stack inspect --runtime=node22 --type-check=strict',
    metrics: [
      { label: 'Frontend', value: 'Next.js · React' },
      { label: 'Backend', value: 'Node · Django' },
      { label: 'Data', value: 'Postgres · Redis' },
    ],
    tags: ['React', 'Next.js', 'Node.js', 'Python', 'Tailwind'],
    snippet: {
      prefix: 'engine-spec',
      lines: [
        { text: 'const architecture = {' },
        { text: '  web: ["Next.js 15 (App Router)", "Tailwind v4"],', highlight: true },
        { text: '  api: ["Node.js Microservices", "Django REST Framework"],' },
        { text: '  data: ["PostgreSQL", "Prisma/Drizzle", "Redis Cache"],' },
        { text: '  reliability: "Sub-100ms latency, zero layout shift"' },
        { text: '};' },
      ],
    },
  },
  {
    id: 'apply-ai',
    num: '04',
    label: 'Apply AI',
    title: 'Large Language Models & Data Science',
    entity: 'Tassili AI · Algerian LLM Team',
    command: 'model evaluate --dataset=algerian-darija-v2 --metric=bleu',
    metrics: [
      { label: 'Focus', value: 'Algerian LLM' },
      { label: 'Base', value: 'Llama-3 Tuning' },
      { label: 'Domain', value: 'Darija Dialects' },
    ],
    tags: ['LLMs', 'Data Science', 'PyTorch', 'HuggingFace'],
    snippet: {
      prefix: 'tassili-ai-eval',
      lines: [
        { text: '[Tassili AI] Fine-tuning LLM for Algerian Darija & Arabic', highlight: true },
        { text: '[Dataset] Curated dialect corpora & synthetic QA pairs' },
        { text: '[Evaluation] Multilingual comprehension + cultural context' },
        { text: '[Status] Active research, benchmarking & optimization' },
      ],
    },
  },
];

export function HeroConsole() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % pillars.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const current = pillars[activeTab];

  return (
    <div
      className="relative rounded-xl border border-border-strong bg-surface/95 backdrop-blur-md shadow-lg overflow-hidden select-none transition-all duration-300"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Console Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-surface-2 border-b border-border text-xs font-mono">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-border-strong border border-border inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-border-strong border border-border inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-border-strong border border-border inline-block" />
          </div>
          <span className="text-text-muted text-[11px] ml-1">
            bencoder-runtime <span className="text-text-faint">v2.4.0</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-status" />
          </span>
          <span className="text-[10px] text-text-muted tracking-wider uppercase">Active Mode</span>
        </div>
      </div>

      {/* Interactive Tabs Header */}
      <div className="grid grid-cols-4 border-b border-border bg-surface text-xs font-mono">
        {pillars.map((pillar, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => {
                setActiveTab(idx);
                setAutoPlay(false);
              }}
              className={`py-2.5 px-1 sm:px-3 text-center border-r last:border-r-0 border-border transition-all duration-150 cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 ${
                isActive
                  ? 'bg-surface-2 text-text font-bold border-b-2 border-b-text shadow-inner'
                  : 'text-text-muted hover:text-text hover:bg-surface-2/50'
              }`}
            >
              <span className={`text-[10px] ${isActive ? 'text-text' : 'text-text-faint'}`}>
                {pillar.num}
              </span>
              <span className="truncate">{pillar.label}</span>
            </button>
          );
        })}
      </div>

      {/* Console Body */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* Command Line Prompt */}
        <div className="flex items-center gap-2 text-xs font-mono bg-bg/80 border border-border rounded-lg px-3 py-2 text-text-muted">
          <span className="text-status font-bold">$</span>
          <span className="text-text truncate">{current.command}</span>
        </div>

        {/* Title & Entity */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-text-faint">
            Role // {current.entity}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-text mt-0.5">
            {current.title}
          </h2>
        </div>

        {/* Metric Badges */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-border/60">
          {current.metrics.map((m) => (
            <div key={m.label} className="space-y-0.5">
              <div className="text-[10px] font-mono uppercase tracking-wider text-text-faint">
                {m.label}
              </div>
              <div className="text-xs sm:text-sm font-bold text-text font-mono truncate">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Output Box / Log View */}
        <div className="bg-bg/90 rounded-lg p-3.5 border border-border text-xs font-mono space-y-1.5 overflow-x-auto">
          <div className="text-[10px] text-text-faint pb-1 border-b border-border/50 uppercase tracking-widest flex items-center justify-between">
            <span>Terminal Output [{current.snippet.prefix}]</span>
            <span className="text-status text-[9px]">● LIVE</span>
          </div>
          {current.snippet.lines.map((line, lIdx) => (
            <div
              key={lIdx}
              className={`leading-relaxed whitespace-pre-wrap ${
                line.highlight
                  ? 'text-text font-semibold'
                  : line.status === 'done'
                  ? 'text-text-muted'
                  : 'text-text-faint'
              }`}
            >
              {line.text}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {current.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-2 border border-border text-text-muted"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Auto-play status footer bar */}
      <div className="px-4 py-2 bg-surface-2/60 border-t border-border flex items-center justify-between text-[11px] font-mono text-text-faint">
        <div className="flex items-center gap-1.5">
          <span>Click any tab to freeze</span>
          {autoPlay && <span className="animate-pulse">· auto-rotating</span>}
        </div>
        <a
          href={
            current.id === 'teach'
              ? '/#teaching'
              : current.id === 'create'
              ? 'https://linkedin.com/in/danour'
              : current.id === 'build'
              ? '/#work'
              : '/#about'
          }
          className="text-text hover:underline inline-flex items-center gap-1"
        >
          Explore pillar →
        </a>
      </div>
    </div>
  );
}
