import type { CollectionEntry } from 'astro:content';
import { z } from 'zod';

export const POST_CATEGORIES = [
  '技术实践',
  '读书笔记',
  '碎片随笔',
  '工具推荐',
] as const;

export const postSchema = z.object({
  title: z.string(),
  pubDate: z.date(),
  update: z.date().optional(),
  description: z.string().default(''),
  author: z.string(),
  category: z.enum(POST_CATEGORIES),
  tags: z.array(z.string()),
  series: z.string().optional(),
  seriesIndex: z.number().optional(),
  draft: z.boolean().default(false),
});

export type PostFrontmatter = z.infer<typeof postSchema>;

export type Post = CollectionEntry<'posts'>;
