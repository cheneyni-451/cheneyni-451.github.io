import { skills } from '$lib/data/skills';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return { skills };
}
