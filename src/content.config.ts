import { defineCollection } from "astro:content";
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const eventsCollection = defineCollection({
  loader: glob({ base: './src/content/events', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.string(),
    tag: z.string(),
    image: z.object({
      url: image(),
      alt: z.string()
    }),
  }),
});

export const collections = {
  events: eventsCollection,
};
