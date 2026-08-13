import MiniSearch from 'minisearch';
import { miniSearchOptions } from './engine';

export const MIN_QUERY_LENGTH = 2;
export const MAX_DROPDOWN_RESULTS = 8;
export const SEARCH_FRAGMENT_KEY = 'search-text-fragment';

const INDEX_URL = `${import.meta.env.BASE_URL}search-index.json`.replace(/\/{2,}/g, '/');

let indexPromise: Promise<MiniSearch> | null = null;

export interface SearchHit {
	title: string;
	category: string;
	digestTitle: string;
	href: string;
}

export async function loadIndex() {
	if (!indexPromise) {
		indexPromise = fetch(INDEX_URL)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Failed to load search index: ${response.status}`);
				}
				return response.json();
			})
			.then((index) => MiniSearch.loadJS(index, miniSearchOptions))
			.catch((error) => {
				indexPromise = null;
				throw error;
			});
	}

	return indexPromise;
}

export async function searchArticles(query: string): Promise<SearchHit[]> {
	const miniSearch = await loadIndex();
	return miniSearch.search(query).map((hit) => ({
		title: String(hit.title ?? ''),
		category: String(hit.category ?? ''),
		digestTitle: String(hit.digestTitle ?? ''),
		href: String(hit.href ?? ''),
	}));
}

export function escapeHtml(value: string) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');
}

export function highlight(text: string, query: string) {
	const escaped = escapeHtml(text);
	const terms = query
		.trim()
		.split(/\s+/)
		.filter((term) => term.length > 0)
		.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

	if (terms.length === 0) {
		return escaped;
	}

	return escaped.replace(new RegExp(`(${terms.join('|')})`, 'gi'), '<mark>$1</mark>');
}

export function digestLabel(title: string) {
	const match = title.match(/#\d+/);
	return match ? `Дайджест ${match[0]}` : title;
}

function encodeTextFragment(text: string) {
	return encodeURIComponent(text.trim())
		.replaceAll('-', '%2D')
		.replaceAll("'", '%27');
}

export function articleHref(href: string, title: string) {
	const url = new URL(href, window.location.origin);
	url.hash = `:~:text=${encodeTextFragment(title)}`;
	return `${url.pathname}${url.hash}`;
}

export function allResultsHref(query: string) {
	const base = import.meta.env.BASE_URL.endsWith('/')
		? import.meta.env.BASE_URL
		: `${import.meta.env.BASE_URL}/`;
	return `${base}search/?q=${encodeURIComponent(query)}`;
}

export function rememberSearchFragment(text: string) {
	sessionStorage.setItem(SEARCH_FRAGMENT_KEY, text);
}

function findTextRange(root: Element, needle: string) {
	const query = needle.replace(/\s+/g, ' ').trim();
	if (!query) {
		return null;
	}

	const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
		acceptNode(node) {
			const parent = node.parentElement;
			if (!parent || parent.closest('[data-search], script, style, noscript')) {
				return NodeFilter.FILTER_REJECT;
			}
			return NodeFilter.FILTER_ACCEPT;
		},
	});

	const parts: Array<{ node: Text; start: number }> = [];
	let haystack = '';
	let current = walker.nextNode();

	while (current instanceof Text) {
		parts.push({ node: current, start: haystack.length });
		haystack += current.nodeValue ?? '';
		current = walker.nextNode();
	}

	const index = haystack.toLowerCase().indexOf(query.toLowerCase());
	if (index === -1) {
		return null;
	}

	const endIndex = index + query.length;
	const range = document.createRange();

	for (const part of parts) {
		const value = part.node.nodeValue ?? '';
		const partEnd = part.start + value.length;

		if (index >= part.start && index < partEnd) {
			range.setStart(part.node, index - part.start);
		}

		if (endIndex > part.start && endIndex <= partEnd) {
			range.setEnd(part.node, endIndex - part.start);
			break;
		}
	}

	return range;
}

export function applySearchHighlight() {
	if ('highlights' in CSS) {
		CSS.highlights.delete('search-result');
	}

	const text = sessionStorage.getItem(SEARCH_FRAGMENT_KEY);
	sessionStorage.removeItem(SEARCH_FRAGMENT_KEY);

	if (!text || !('highlights' in CSS)) {
		return;
	}

	const root = document.querySelector('.content') ?? document.querySelector('main');
	if (!(root instanceof HTMLElement)) {
		return;
	}

	const range = findTextRange(root, text);
	if (!range) {
		return;
	}

	CSS.highlights.set('search-result', new Highlight(range));

	const target = range.startContainer instanceof Element
		? range.startContainer
		: range.startContainer.parentElement;
	target?.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'smooth' });
}

export function foundCountLabel(count: number, query: string) {
	const mod10 = count % 10;
	const mod100 = count % 100;
	let verb = 'Найдено';
	let noun = 'статей';

	if (mod10 === 1 && mod100 !== 11) {
		verb = 'Найдена';
		noun = 'статья';
	} else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
		verb = 'Найдены';
		noun = 'статьи';
	}

	return `${verb} ${count} ${noun} по запросу «${query}»`;
}
