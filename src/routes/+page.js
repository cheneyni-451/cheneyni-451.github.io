import { skills } from '$lib/data/skills';
import { pageLoading } from '$lib/stores';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	pageLoading.set(true);

	return { skills };
}
