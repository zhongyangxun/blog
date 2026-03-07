import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    update: z.date().optional(),
    description: z.string(),
    author: z.string(),
    category: z.enum(['技术实践', '读书笔记', '碎片随笔', '工具推荐']),
    tags: z.array(z.string()),
    series: z.string().optional(),
    seriesIndex: z.number().optional(),
  }),
});

export const collections = {
  blog,
};
