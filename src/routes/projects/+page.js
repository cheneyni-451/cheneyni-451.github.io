import { pageLoading } from '$lib/stores';

/** @type {import('./$types').PageLoad} */
export async function load() {
	pageLoading.set(true);

	return {};
}
