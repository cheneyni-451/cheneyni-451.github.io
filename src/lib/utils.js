export function split_css_unit(value) {
	const split = typeof value === 'string' && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return split ? [parseFloat(split[1]), split[2] || 'px'] : [/** @type {number} */ (value), 'px'];
}

export function createObserver(
	targetElement,
	handleIntersect,
	{ root = null, rootMargin = '0px', threshold = 0 } = {}
) {
	const options = { root, rootMargin, threshold };

	const observer = new IntersectionObserver(handleIntersect, options);
	observer.observe(targetElement);
}
