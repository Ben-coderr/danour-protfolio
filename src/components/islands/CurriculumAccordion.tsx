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
    badge: 'Foundations',
    title: 'Prompt Engineering & LLM APIs',
    duration: 'Week 1 · 12 Hours Labs',
    summary:
      'Demystifying how autoregressive token prediction works. Mastering zero-shot, few-shot prompting, chain-of-thought reasoning, and forcing strict JSON schema outputs for software pipelines.',
    objectives: [
      'Tokenization mechanics, temperature, top-p and context window budgeting',
      'System prompt design patterns for reliable application behavior',
      'Defending against prompt injection and model hallucination',
    ],
    lab: 'Build an automated code analysis engine that ingests PR diffs and outputs structured review scores.',
    tools: ['Python', 'OpenAI API', 'Pydantic', 'Claude API'],
  },
  {
    week: '02',
    badge: 'Information Retrieval',
    title: 'Embeddings, Vector DBs & RAG Architecture',
    duration: 'Week 2 · 15 Hours Labs',
    summary:
      'Moving beyond static context. Implementing modern Retrieval-Augmented Generation (RAG) by converting unstructured enterprise documents into semantic vector space.',
    objectives: [
      'Document chunking strategies: recursive, semantic, and markdown-aware splitting',
      'Embedding generation, cosine distance, and high-dimensional vector search',
      'Hybrid search: BM25 keyword matching + dense vector reranking',
    ],
    lab: 'Build an offline Document Q&A assistant indexing university textbooks with source citation links.',
    tools: ['ChromaDB', 'Sentence Transformers', 'FastAPI', 'LangChain'],
  },
  {
    week: '03',
    badge: 'Agentic Workflows',
    title: 'Tool Use, Function Calling & Autonomous Agents',
    duration: 'Week 3 · 15 Hours Labs',
    summary:
      'Empowering models to interact with the real world. Architecting ReAct loops, deterministic function calling schemas, and stateful multi-step agent workflows.',
    objectives: [
      'Function calling schemas and parameter validation in strict mode',
      'ReAct reasoning loops (Thought -> Action -> Observation -> Response)',
      'Error recovery, retry loops, and deterministic fallback execution',
    ],
    lab: 'Create an autonomous market research agent that queries live APIs, cleans data, and writes a synthesized report.',
    tools: ['Python AsyncIO', 'Tool Calling API', 'DuckDuckGo API', 'SQLite'],
  },
  {
    week: '04',
    badge: 'Capstone & Production',
    title: 'Shipping Full-Stack AI Products to Production',
    duration: 'Week 4 · 18 Hours Labs',
    summary:
      'Connecting Python AI backends to modern user interfaces. Implementing Server-Sent Events (SSE) for token streaming, auth, rate limiting, and deploying to cloud infrastructure.',
    objectives: [
      'Next.js 15 App Router streaming UI with real-time markdown token rendering',
      'User authentication, session token budgets, and token usage limits',
      'Production deployment on cloud platforms with monitoring and telemetry',
    ],
    lab: 'Capstone Demo Day: Students present fully functional, deployed AI web platforms to peer reviewers.',
    tools: ['Next.js 15', 'FastAPI', 'Tailwind CSS', 'Vercel', 'Docker'],
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
