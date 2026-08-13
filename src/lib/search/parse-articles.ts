import GithubSlugger from 'github-slugger';
import type { Heading, List, ListItem, Nodes, Root, RootContent } from 'mdast';
import { toString } from 'mdast-util-to-string';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import type { SearchArticle } from './types';

interface ParseDigestOptions {
	digestTitle: string;
	digestSlug: string;
}

const SKIP_NODE_TYPES = new Set([
	'mdxjsEsm',
	'mdxJsxFlowElement',
	'mdxJsxTextElement',
	'mdxFlowExpression',
	'mdxTextExpression',
	'thematicBreak',
	'yaml',
]);

function flattenText(value: string): string {
	return value.replace(/\s+/g, ' ').trim();
}

function findFirstLinkText(node: Nodes): string | undefined {
	if (node.type === 'link') {
		const text = flattenText(toString(node));
		return text || undefined;
	}

	if (!('children' in node) || !node.children) {
		return undefined;
	}

	for (const child of node.children) {
		const found = findFirstLinkText(child as Nodes);
		if (found) {
			return found;
		}
	}

	return undefined;
}

function isHeading(node: RootContent): node is Heading {
	return node.type === 'heading';
}

function isList(node: RootContent): node is List {
	return node.type === 'list';
}

function collectListItems(list: List): ListItem[] {
	return list.children.filter((item): item is ListItem => item.type === 'listItem');
}

export async function parseDigestArticles(
	body: string,
	{ digestTitle, digestSlug }: ParseDigestOptions,
): Promise<SearchArticle[]> {
	const processor = unified().use(remarkParse).use(remarkMdx).use(remarkGfm);
	const tree = processor.parse(body) as Root;
	const slugger = new GithubSlugger();
	const articles: SearchArticle[] = [];

	let category = '';
	let categorySlug = '';
	let listIndex = 0;

	const children = tree.children.filter((node) => !SKIP_NODE_TYPES.has(node.type));

	const pushListItem = (item: ListItem) => {
		const title = findFirstLinkText(item);
		const bodyText = flattenText(toString(item));

		if (!title) {
			return;
		}

		listIndex += 1;
		const anchor = categorySlug || `item-${listIndex}`;
		const href = categorySlug ? `/${digestSlug}/#${categorySlug}` : `/${digestSlug}/`;

		articles.push({
			id: `${digestSlug}#${anchor}-item-${listIndex}`,
			title,
			body: bodyText,
			category,
			digestTitle,
			digestSlug,
			href,
		});
	};

	let index = 0;
	while (index < children.length) {
		const node = children[index];
		if (!node) {
			break;
		}

		if (isHeading(node) && node.depth === 2) {
			category = flattenText(toString(node));
			categorySlug = slugger.slug(category);
			index += 1;
			continue;
		}

		if (isHeading(node) && node.depth === 3) {
			const title = flattenText(toString(node));
			const headingSlug = slugger.slug(title);
			const bodyNodes: RootContent[] = [];
			let cursor = index + 1;

			while (cursor < children.length) {
				const next = children[cursor];
				if (isHeading(next) && next.depth <= 3) {
					break;
				}
				bodyNodes.push(next);
				cursor += 1;
			}

			const articleBody = flattenText(bodyNodes.map((item) => toString(item)).join(' '));

			if (title) {
				articles.push({
					id: `${digestSlug}#${headingSlug}`,
					title,
					body: articleBody,
					category,
					digestTitle,
					digestSlug,
					href: `/${digestSlug}/#${headingSlug}`,
				});
			}

			for (const bodyNode of bodyNodes) {
				if (isList(bodyNode)) {
					for (const item of collectListItems(bodyNode)) {
						pushListItem(item);
					}
				}
			}

			index = cursor;
			continue;
		}

		if (isList(node)) {
			for (const item of collectListItems(node)) {
				pushListItem(item);
			}
			index += 1;
			continue;
		}

		index += 1;
	}

	return articles;
}
