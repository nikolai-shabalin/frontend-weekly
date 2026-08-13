import MiniSearch, { type Options } from 'minisearch';
import type { SearchArticle } from './types';

export const miniSearchOptions = {
	fields: ['title', 'body'],
	idField: 'id',
	storeFields: ['title', 'category', 'digestTitle', 'href'],
	searchOptions: {
		prefix: true,
		fuzzy: 0.2,
		combineWith: 'AND',
		boost: {
			title: 5,
			body: 1,
		},
	},
} satisfies Options<SearchArticle>;

export function createMiniSearch() {
	return new MiniSearch<SearchArticle>(miniSearchOptions);
}
