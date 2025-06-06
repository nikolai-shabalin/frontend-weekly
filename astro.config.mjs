// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://shabalin.online',
	base: '',
	integrations: [
		mdx(),
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
			customPages: [],
			serialize: (item) => {
				return {
					...item,
					lastmod: item.lastmod ? new Date(item.lastmod).toISOString() : undefined,
				};
			},
		})
	]
});
