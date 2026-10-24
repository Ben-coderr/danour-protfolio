import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.union([z.number(), z.string()]),
    role: z.string(),
    type: z.enum(['web', 'ai', 'client', 'platform']),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    cover: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    stack: z.array(z.string()),
    bullets: z.array(z.string()).max(5),
    status: z.enum(['live', 'archived', 'confidential']),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    start: z.string(),
    end: z.union([z.string(), z.literal('present')]),
    location: z.string(),
    type: z.string(),
    summary: z.string(),
    highlights: z.array(z.string()),
    stack: z.array(z.string()),
    order: z.number().default(99),
    logo: z.string().optional(),
  }),
});

const teaching = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/teaching' }),
  schema: z.object({
    title: z.string(),
    org: z.string(),
    date: z.string(),
    format: z.string(),
    audience: z.string(),
    summary: z.string(),
    outcomes: z.array(z.string()),
    link: z.string().url().optional(),
    order: z.number().default(99),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, experience, teaching, posts };
