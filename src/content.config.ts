import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    category: z.enum(['技术实践', '读书笔记', '碎片随笔', '工具推荐']),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog,
};
