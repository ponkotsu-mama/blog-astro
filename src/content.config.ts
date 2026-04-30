import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    excerpt: z.string(),
    message: z.string().optional(),
    prevSlug: z.string().optional(),
    prevTitle: z.string().optional(),
    nextSlug: z.string().optional(),
    nextTitle: z.string().optional(),
  }),
});

export const collections = { blog };
