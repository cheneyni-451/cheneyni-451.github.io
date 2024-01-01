import tippy from 'tippy.js';
import 'tippy.js/animations/scale.css';

/** @type {import('svelte/action').Action} */
export function tooltip(node, { placement = 'right-end', animation = 'scale', ...rest }) {
	const tooltip = tippy(node, { placement, animation, touch: ['hold', 250], ...rest });

	return {
		update(options) {
			tooltip.setProps(options);
		},
		destroy() {
			tooltip.destroy();
		}
	};
}
