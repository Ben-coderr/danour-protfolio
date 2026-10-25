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
    label: 'AI Teaching',
    title: 'Lead Generative AI Instructor',
    entity: 'Everest Academy · Practical Formation',
    command: 'run curriculum --course="Build with AI" --target=prod',
    metrics: [
      { label: 'Format', value: '1-Mo Intensive' },
      { label: 'Level', value: 'Hands-on Labs' },
      { label: 'Graduates', value: '20+ Engineers' },
    ],
    tags: ['Prompt Eng', 'Vibe Coding', 'AI Video', 'AI Graphic Design'],
    snippet: {
      prefix: 'everest-curriculum',
      lines: [
        { text: '✓ Module 01: Prompt Engineering & Context Reasoning', status: 'done' },
        { text: '✓ Module 02: Vibe Coding (AI-Assisted Full-Stack)', status: 'done' },
        { text: '✓ Module 03: AI Video Generation & Motion Synthesis', status: 'done' },
        { text: '✓ Module 04: AI Graphic Design & Visual Asset Workflows', status: 'active', highlight: true },
      ],
    },
  },
  {
    id: 'create',
    num: '02',
    label: 'Udemy & Community',
    title: 'Tech Educator & Course Creator',
    entity: 'BenCoder Arabic Community · 102K+',
    command: 'fetch audience --channel=@BenCoder --realtime',
    metrics: [
      { label: 'Audience', value: '102K+ Devs' },
      { label: 'Udemy', value: '300+ Students' },
      { label: 'Course', value: 'Python Arabic' },
    ],
    tags: ['Udemy', 'Python Arabic', 'Arabic EdTech', 'Community'],
    snippet: {
      prefix: 'community-pulse',
      lines: [
        { text: '• 300+ enrolled students in "Python for Beginners (Arabic)" on Udemy', highlight: true },
        { text: '• 102,000+ Arabic-speaking developers learning full-stack & AI' },
        { text: '• Focused on pragmatic code: real architectures, zero fluff' },
        { text: '• Practical tutorials in Arabic covering Next.js, Python, & AI tooling' },
      ],
    },
  },
  {
    id: 'build',
    num: '03',
    label: 'Build',
    title: 'Full-Stack Software Architecture',
    entity: 'JG SupplyNet & Production Web Systems',
    command: 'stack inspect --runtime=node22 --type-check=strict',
    metrics: [
      { label: 'Latest Work', value: 'JG SupplyNet' },
      { label: 'Frontend', value: 'Next.js · React' },
      { label: 'Backend', value: 'Node · API REST' },
    ],
    tags: ['JG SupplyNet', 'Next.js', 'React', 'Tailwind', 'Vercel'],
    snippet: {
      prefix: 'engine-spec',
      lines: [
        { text: 'const flagship = "JG SupplyNet (Algeria B2B Portal)";', highlight: true },
        { text: 'const stack = ["Next.js 15 (App Router)", "TypeScript", "Tailwind v4"];' },
        { text: 'const clients = ["Virexa Health SaaS", "Fiikra Creative Studio"];' },
        { text: 'const telemetry = { latency: "<300ms", uptime: "99.9%" };' },
      ],
    },
  },
  {
    id: 'hardware',
    num: '04',
    label: 'Robotics & Mentorship',
    title: 'Robotics, Embedded Systems & Mentorship',
    entity: 'DZDuino Collaboration & 1-on-1 Labs',
    command: 'embed flash --board=arduino-uno --soc=raspberry-pi-4',
    metrics: [
      { label: 'Partnership', value: 'DZDuino.com' },
      { label: 'Hardware', value: 'Arduino · RPi' },
      { label: 'Mentorship', value: '1-on-1 Web Dev' },
    ],
    tags: ['Arduino', 'Raspberry Pi', 'Robotics', 'DZDuino', 'Mentorship'],
    snippet: {
      prefix: 'hardware-controller',
      lines: [
        { text: '[DZDuino Collaboration] Robotics & Embedded Systems Cohort', highlight: true },
        { text: '[Lab] Arduino Uno & Raspberry Pi 4 sensor integration & C++' },
        { text: '[Mentorship] 3-Month Summer 1-on-1 Web Development intensive' },
        { text: '[Workshops] Hands-on seminars delivered in Tlemcen, Algiers & Oran' },
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

      {/* Auto-rotation Countdown Progress Bar */}
      <div className="h-[2px] w-full bg-border/40 overflow-hidden relative">
        {autoPlay && (
          <div
            key={activeTab}
            className="h-full bg-status transition-all"
            style={{
              animation: 'progressFill 6s linear forwards',
            }}
          />
        )}
      </div>

      {/* Interactive Tabs Header with Smooth Sliding Pill & Indicator */}
      <div className="relative grid grid-cols-4 border-b border-border bg-surface text-xs font-mono p-1 gap-1">
        {/* Sliding active pill indicator behind tabs */}
        <div
          className="absolute top-1 bottom-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] bg-surface-2 rounded-lg border border-border/80 shadow-2xs pointer-events-none z-0"
          style={{
            left: `calc(${activeTab * 25}% + 4px)`,
            width: `calc(25% - 8px)`,
          }}
          aria-hidden="true"
        />

        {/* Sliding bottom accent line */}
        <div
          className="absolute -bottom-[1px] h-[2px] bg-status transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-20"
          style={{
            left: `${activeTab * 25}%`,
            width: '25%',
          }}
          aria-hidden="true"
        />

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
              className={`relative z-10 py-2.5 px-1 sm:px-3 text-center rounded-md transition-colors duration-200 cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                isActive
                  ? 'text-text font-bold'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              <span
                className={`text-[10px] transition-colors duration-200 ${
                  isActive ? 'text-status font-bold' : 'text-text-faint'
                }`}
              >
                {pillar.num}
              </span>
              <span className="truncate tracking-tight">{pillar.label}</span>
            </button>
          );
        })}
      </div>

      {/* Horizontal Sliding Track Transition Container */}
      <div className="overflow-hidden relative w-full">
        <div
          className="flex w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
          style={{ transform: `translateX(-${activeTab * 100}%)` }}
        >
          {pillars.map((pillar, idx) => {
            const isSlideActive = idx === activeTab;
            return (
              <div
                key={pillar.id}
                className={`w-full shrink-0 p-5 sm:p-6 space-y-5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isSlideActive
                    ? 'opacity-100 scale-100 filter-none pointer-events-auto'
                    : 'opacity-15 scale-[0.985] blur-[0.4px] pointer-events-none'
                }`}
                aria-hidden={!isSlideActive}
              >
                {/* Command Line Prompt */}
                <div className="flex items-center gap-2 text-xs font-mono bg-bg/90 border border-border rounded-lg px-3.5 py-2.5 text-text-muted shadow-2xs">
                  <span className="text-status font-bold select-none">$</span>
                  <span className="text-text truncate font-semibold">{pillar.command}</span>
                  <span
                    className={`inline-block w-1.5 h-3.5 bg-status/80 align-middle ml-auto shrink-0 ${
                      isSlideActive ? 'animate-pulse' : 'opacity-0'
                    }`}
                  />
                </div>

                {/* Title & Entity */}
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-text-faint flex items-center gap-2">
                    <span>ROLE // {pillar.entity}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-text font-sans">
                    {pillar.title}
                  </h2>
                </div>

                {/* Metric Badges */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-border/60">
                  {pillar.metrics.map((m) => (
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

                {/* Output Box / Log View with Live Stream Indicator */}
                <div className="bg-bg/90 rounded-xl p-4 border border-border text-xs font-mono space-y-2 overflow-x-auto shadow-inner">
                  <div className="text-[10px] text-text-faint pb-1.5 border-b border-border/50 uppercase tracking-widest flex items-center justify-between">
                    <span>Terminal Output [{pillar.snippet.prefix}]</span>
                    <span className="text-status text-[9px] font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-status animate-ping" />
                      LIVE STREAM
                    </span>
                  </div>
                  <div className="space-y-1.5 min-h-[96px]">
                    {pillar.snippet.lines.map((line, lIdx) => (
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
                </div>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-2 border border-border text-text-muted hover:text-text transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
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
          className="text-text hover:underline inline-flex items-center gap-1 transition-colors duration-200"
        >
          Explore pillar →
        </a>
      </div>
    </div>
  );
}
