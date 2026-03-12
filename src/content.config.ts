import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { postSchema } from './schemas/post';
import { aboutSchema } from './schemas/about';

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/posts' }),
  schema: postSchema,
});

const about = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.md',
    base: './src/content/about',
  }),
  schema: aboutSchema,
});

export const collections = {
  posts,
  about,
};
