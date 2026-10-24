import { useState } from 'react';

interface WeekModule {
  week: string;
  badge: string;
  title: string;
  duration: string;
  summary: string;
  objectives: string[];
  lab: string;
  tools: string[];
}

const modules: WeekModule[] = [
  {
    week: '01',
    badge: 'Core Track',
    title: 'Prompt Engineering & Context Architecture',
    duration: 'Week 1 · Theory & Interactive Labs',
    summary:
      'Demystifying how modern LLMs process context. Mastering system prompt personas, zero-shot and few-shot reasoning, chain-of-thought problem solving, and enforcing strict structured outputs.',
    objectives: [
      'Tokenization mechanics, temperature controls, top-p, and context window budgeting',
      'System persona design and role-based instruction hierarchies for predictable responses',
      'Defending against prompt injection, edge-case jailbreaks, and mitigating hallucinations',
    ],
    lab: 'Build an automated intelligence extractor converting unstructured raw notes into validated JSON reports.',
    tools: ['Prompt Engineering', 'Claude / ChatGPT', 'Structured Outputs', 'Context Tuning'],
  },
  {
    week: '02',
    badge: 'Modern Dev',
    title: 'Vibe Coding & AI-Accelerated Software Development',
    duration: 'Week 2 · Rapid Prototyping Labs',
    summary:
      'Harnessing AI coding agents and IDEs (Cursor, Claude Code) to ship full-stack applications at 10x velocity. Going from conversational specification directly to production code.',
    objectives: [
      'Mastering vibe-coding workflows: prompting architecture schemas, full-repo scaffolding, and diff reviews',
      'Context engineering: structuring custom instructions, rules files, and prompt context libraries',
      'Iterative rapid debugging, unit testing, and deploying responsive web apps with AI assistance',
    ],
    lab: 'Ship a responsive, live-deployed full-stack web application from idea to URL in under 3 hours using vibe coding.',
    tools: ['Vibe Coding', 'Cursor', 'Claude Code', 'Next.js', 'Tailwind CSS'],
  },
  {
    week: '03',
    badge: 'Media Synthesis',
    title: 'AI Video Generation & Motion Synthesis',
    duration: 'Week 3 · Studio Production Labs',
    summary:
      'Directing cutting-edge diffusion video models for commercial and creative storytelling. Scripting, storyboard composition, image-to-video motion dynamics, and multi-shot montage editing.',
    objectives: [
      'Prompting camera motion, cinematic lighting, focal depth, and temporal frame consistency',
      'Image-to-video and text-to-video generation pipelines (Runway Gen-3, Kling AI, Luma Dream Machine)',
      'Multi-modal asset assembly: AI voice cloning, localized dialogue lip-sync, and sound effects integration',
    ],
    lab: 'Direct and produce a complete 60-second high-production commercial video campaign with voiceover.',
    tools: ['Runway Gen-3', 'Kling AI', 'Luma Dream Machine', 'ElevenLabs', 'CapCut'],
  },
  {
    week: '04',
    badge: 'Brand & Visuals',
    title: 'AI Graphic Design & Commercial Brand Assets',
    duration: 'Week 4 · Capstone Portfolio Showcase',
    summary:
      'Engineering commercial visual identities, marketing assets, and social media creative suites using state-of-the-art image diffusion models (Midjourney, FLUX.1).',
    objectives: [
      'Advanced Midjourney & FLUX.1 prompting: art directors, camera specs, seeds, and character consistency',
      'Precision editing: inpainting, outpainting, selective re-lighting, and generative asset upscaling',
      'Designing client-ready corporate brand identity kits, social media templates, and packaging mockups',
    ],
    lab: 'Create a complete end-to-end brand identity package including logos, packaging mockups, and social graphics.',
    tools: ['Midjourney v6', 'FLUX.1', 'Canva AI', 'Photoshop Firefly', 'Graphic Design'],
  },
];

export function CurriculumAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="space-y-3 font-mono">
      <div className="flex items-center justify-between pb-3 border-b border-border text-xs">
        <span className="text-text-muted uppercase tracking-wider font-semibold">
          // 4-WEEK INTENSIVE SYLLABUS BREAKDOWN
        </span>
        <span className="text-[11px] text-text-faint">
          Everest Academy · Mostaganem
        </span>
      </div>

      <div className="space-y-2.5">
        {modules.map((m, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={m.week}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-border-strong bg-surface shadow-xs'
                  : 'border-border/70 bg-surface/50 hover:border-border hover:bg-surface'
              }`}
            >
              {/* Header trigger */}
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-text select-none"
              >
                <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded shrink-0 border ${
                      isOpen
                        ? 'bg-invert-bg text-invert-text border-transparent'
                        : 'bg-surface-2 text-text-muted border-border'
                    }`}
                  >
                    W{m.week}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-wider text-text-faint hidden sm:inline">
                        {m.badge}
                      </span>
                      <span className="text-text-faint hidden sm:inline">·</span>
                      <span className="text-[10px] text-text-faint">{m.duration}</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-text font-sans tracking-tight truncate mt-0.5">
                      {m.title}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-text-muted hidden md:inline">
                    {isOpen ? 'Collapse' : 'Expand'}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-md border border-border flex items-center justify-center text-xs text-text transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-surface-2' : ''
                    }`}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </div>
              </button>

              {/* Collapsible Content */}
              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-1 border-t border-border/60 space-y-4 text-xs font-mono">
                  <p className="text-text-muted font-sans text-sm leading-relaxed">
                    {m.summary}
                  </p>

                  {/* Key Learning Objectives */}
                  <div className="space-y-1.5 bg-surface-2/60 p-3.5 rounded-lg border border-border/50">
                    <div className="text-[10px] uppercase tracking-wider text-text-faint font-bold">
                      Key Competencies Mastered:
                    </div>
                    <ul className="space-y-1 text-text-muted">
                      {m.objectives.map((obj, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2">
                          <span className="text-status select-none">✓</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hands-on Project Lab */}
                  <div className="space-y-1">
                    <div className="text-[10px] uppercase tracking-wider text-text-faint">
                      Deliverable Project Lab:
                    </div>
                    <div className="text-text font-sans text-xs bg-bg/80 border border-border p-3 rounded-lg flex items-start gap-2">
                      <span className="text-status font-bold shrink-0">LAB:</span>
                      <span>{m.lab}</span>
                    </div>
                  </div>

                  {/* Tools Stack */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[10px] text-text-faint uppercase mr-1">Tools:</span>
                    {m.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] px-2 py-0.5 rounded bg-surface border border-border text-text"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
