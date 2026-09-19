// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://frontend-weekly.ru',
	base: '',
	experimental: {
		incrementalBuild: true,
	},
	vite: {
		build: {
			rolldownOptions: {
				onLog(level, log, defaultHandler) {
					if (
						log.code === 'MODULE_LEVEL_DIRECTIVE' &&
						log.id?.includes('?astroPropagatedAssets') &&
						log.message.includes('use astro:head-inject')
					) {
						return;
					}

					defaultHandler(level, log);
				}
			}
		}
	},
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
