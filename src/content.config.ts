import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const digest = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/digest' }),
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

export const collections = { digest };
