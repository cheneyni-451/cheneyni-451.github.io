import { navLinks } from '$lib/data/navLinks.js';

export const load = ({ url }) => {
	const { pathname } = url;

	const pageString = navLinks.find((nl) => nl.url === pathname);

	const titleString =
		pageString === undefined
			? 'Cheney Ni'
			: `${pageString.title} ${pageString.title === '' ? '' : '|'} Cheney Ni`;

	return { pathname, title: titleString };
};
