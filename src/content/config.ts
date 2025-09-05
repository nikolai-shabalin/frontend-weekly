import { defineCollection, z } from 'astro:content';

const digest = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		isHidden: z.boolean().default(false),
		mascotMessages: z.array(
			z.object({
				text: z.string(),
				index: z.number(),
			})
		).optional(),
	}),
});

const initiative = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { digest, initiative };
