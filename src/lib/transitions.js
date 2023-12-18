import { cubicOut } from 'svelte/easing';
import { split_css_unit } from './utils';

/**
 *
 * @param {Element} node
 * @param {import('svelte/transition').FlyParams & import('svelte/transition').BlurParams} params
 * @returns {import('svelte/transition').TransitionConfig}
 */
export function flyblur(
	node,
	{ delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, amount = 30, opacity = 0 } = {}
) {
	const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const transform = style.transform === 'none' ? '' : style.transform;
	const od = target_opacity * (1 - opacity);
	const f = style.filter === 'none' ? '' : style.filter;
	const [xValue, xUnit] = split_css_unit(x);
	const [yValue, yUnit] = split_css_unit(y);
	const [blurValue, blurUnit] = split_css_unit(amount);
	return {
		delay,
		duration,
		easing,
		css: (t, u) => `
            transform: ${transform} translate(${(1 - t) * xValue}${xUnit}, ${
							(1 - t) * yValue
						}${yUnit});
            opacity: ${target_opacity - od * u};
            filter: ${f} blur(${u * blurValue}${blurUnit});
        `
	};
}

export function typewriter(node, { delay = 0, speed = 1 }) {
	const text = node.textContent;
	const duration = text.length / (speed * 0.01);

	return {
		duration,
		delay,
		tick: (t) => {
			const i = Math.trunc(text.length * t);
			node.textContent = text.slice(0, i);
		}
	};
}
