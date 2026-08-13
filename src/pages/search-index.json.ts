import { getCollection } from 'astro:content';
import { createMiniSearch } from '../lib/search/engine';
import { parseDigestArticles } from '../lib/search/parse-articles';

export async function GET() {
	const posts = await getCollection('digest');
	const miniSearch = createMiniSearch();

	for (const post of posts) {
		if (post.data.isHidden) {
			continue;
		}

		const articles = await parseDigestArticles(post.body ?? '', {
			digestTitle: post.data.title,
			digestSlug: post.id,
		});
		miniSearch.addAll(articles);
	}

	return new Response(JSON.stringify(miniSearch), {
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
}
