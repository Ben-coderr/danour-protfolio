import { useState } from 'react';

interface WeekModule {
  id: string;
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
    id: 'prompt-eng',
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
    id: 'vibe-coding',
    badge: 'Modern Dev',
    title: 'AI-Accelerated Software Development',
    duration: 'Week 2 · Rapid Prototyping Labs',
    summary:
      'Harnessing AI coding agents and IDEs (Cursor, Claude Code) to ship full-stack applications with high velocity. Going from conversational specification directly to production code.',
    objectives: [
      'Workflows: prompting architecture schemas, full-repo scaffolding, and diff reviews',
      'Context engineering: structuring custom instructions, rules files, and prompt context libraries',
      'Iterative rapid debugging, unit testing, and deploying responsive web apps with AI assistance',
    ],
    lab: 'Ship a responsive, live-deployed full-stack web application from idea to URL in under 3 hours using AI assistance.',
    tools: ['AI Pair Programming', 'Cursor', 'Claude Code', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 'ai-video',
    badge: 'Media Synthesis',
    title: 'AI Video Generation & Motion Synthesis',
    duration: 'Week 3 · Studio Production Labs',
    summary:
      'Directing diffusion video models for commercial and creative storytelling. Scripting, storyboard composition, image-to-video motion dynamics, and multi-shot montage editing.',
    objectives: [
      'Prompting camera motion, cinematic lighting, focal depth, and temporal frame consistency',
      'Image-to-video and text-to-video generation pipelines (Runway Gen-3, Kling AI, Luma Dream Machine)',
      'Multi-modal asset assembly: AI voice cloning, localized dialogue lip-sync, and sound effects integration',
    ],
    lab: 'Direct and produce a complete 60-second high-production commercial video campaign with voiceover.',
    tools: ['Runway Gen-3', 'Kling AI', 'Luma Dream Machine', 'ElevenLabs', 'CapCut'],
  },
  {
    id: 'brand-assets',
    badge: 'Brand & Visuals',
    title: 'AI Graphic Design & Commercial Brand Assets',
    duration: 'Week 4 · Capstone Portfolio Showcase',
    summary:
      'Engineering commercial visual identities, marketing assets, and social media creative suites using state-of-the-art image diffusion models (Midjourney, FLUX.1).',
    objectives: [
      'Advanced Midjourney and FLUX.1 prompting: art directors, camera specs, seeds, and character consistency',
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
    <div className="space-y-4">
      <div className="flex items-center justify-between pb-2 text-sm text-text-muted">
        <span className="font-semibold text-text">
          Four-Week Intensive Syllabus
        </span>
        <span>Everest Academy · Mostaganem</span>
      </div>

      <div className="space-y-3">
        {modules.map((m, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={m.id}
              className="rounded-lg bg-surface overflow-hidden transition-colors duration-150"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-text"
                aria-expanded={isOpen}
              >
                <div className="space-y-1">
                  <h4 className="text-lg sm:text-xl font-bold text-text">
                    {m.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2.5 text-small text-text-muted">
                    <span className="font-semibold text-text">{m.badge}</span>
                    <span>·</span>
                    <span>{m.duration}</span>
                  </div>
                </div>

                <div className="w-6 h-6 rounded bg-surface-2 flex items-center justify-center shrink-0 mt-1 text-text text-small font-bold">
                  {isOpen ? '-' : '+'}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 space-y-4 text-small text-text-muted">
                  <p className="leading-relaxed text-text text-body">{m.summary}</p>

                  <div className="space-y-2 pt-1">
                    <div className="text-small font-semibold text-text uppercase">Key Competencies</div>
                    <ul className="space-y-1.5 pl-4 list-disc text-text-muted">
                      {m.objectives.map((obj) => (
                        <li key={obj} className="leading-relaxed">
                          {obj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded bg-surface-2 space-y-1">
                    <div className="text-small font-semibold text-text uppercase">Applied Lab</div>
                    <p className="text-small text-text-muted leading-relaxed">{m.lab}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {m.tools.map((tool) => (
                      <span key={tool} className="text-small px-2.5 py-1 rounded bg-surface-2 text-text">
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
