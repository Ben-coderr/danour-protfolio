/**
 * Map technology, tool, and domain names to verified monochrome icons
 * using Simple Icons and Lucide.
 */
export function getTechIcon(name: string): string | undefined {
  const normalized = name.toLowerCase().trim();

  // Tech Stacks & Frameworks (Simple Icons)
  if (normalized.includes('react')) return 'simple-icons:react';
  if (normalized.includes('next')) return 'simple-icons:nextdotjs';
  if (normalized.includes('tailwind')) return 'simple-icons:tailwindcss';
  if (normalized.includes('typescript')) return 'simple-icons:typescript';
  if (normalized.includes('javascript')) return 'simple-icons:javascript';
  if (normalized.includes('python')) return 'simple-icons:python';
  if (normalized.includes('django')) return 'simple-icons:django';
  if (normalized.includes('node')) return 'simple-icons:nodedotjs';
  if (normalized.includes('postgres')) return 'simple-icons:postgresql';
  if (normalized.includes('mongo')) return 'simple-icons:mongodb';
  if (normalized.includes('github')) return 'simple-icons:github';
  if (normalized.includes('git')) return 'simple-icons:git';
  if (normalized.includes('linux')) return 'simple-icons:linux';
  if (normalized.includes('figma')) return 'simple-icons:figma';
  if (normalized.includes('vs code') || normalized.includes('vscode')) return 'simple-icons:visualstudiocode';

  // AI & Data Domains (Lucide)
  if (
    normalized.includes('generative ai') ||
    normalized.includes('genai') ||
    normalized.includes('ai instruction')
  ) {
    return 'lucide:sparkles';
  }
  if (normalized.includes('llm') || normalized.includes('language model') || normalized.includes('ai team')) {
    return 'lucide:brain';
  }
  if (normalized.includes('machine learning') || normalized.includes('data science') || normalized.includes('algorithms')) {
    return 'lucide:cpu';
  }
  if (normalized.includes('data analysis') || normalized.includes('data layer') || normalized.includes('database')) {
    return 'lucide:database';
  }
  if (normalized.includes('security')) {
    return 'lucide:shield-check';
  }

  // Systems & Tools
  if (normalized.includes('rest') || normalized.includes('api')) {
    return 'lucide:network';
  }
  if (normalized.includes('windows server') || normalized.includes('server')) {
    return 'lucide:server';
  }
  if (normalized.includes('network')) {
    return 'lucide:network';
  }
  if (normalized.includes('it support') || normalized.includes('support')) {
    return 'lucide:wrench';
  }
  if (normalized.includes('ui/ux') || normalized.includes('design')) {
    return 'lucide:palette';
  }

  // Teaching & Communication
  if (normalized.includes('speaking') || normalized.includes('public')) {
    return 'lucide:mic';
  }
  if (
    normalized.includes('curriculum') ||
    normalized.includes('syllabus') ||
    normalized.includes('course') ||
    normalized.includes('instruction') ||
    normalized.includes('teaching')
  ) {
    return 'lucide:book-open';
  }
  if (
    normalized.includes('content') ||
    normalized.includes('video') ||
    normalized.includes('creator') ||
    normalized.includes('tutorials')
  ) {
    return 'lucide:video';
  }
  if (normalized.includes('robotics') || normalized.includes('automation')) {
    return 'lucide:bot';
  }

  return undefined;
}
