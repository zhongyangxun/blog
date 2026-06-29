import { z } from 'astro/zod';

export const aboutSchema = z.object({
  title: z.string(),
  description: z.string(),
  update: z.date(),
});
