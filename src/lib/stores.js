import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const navBarTransitioned = writable(false);

export const pageLoading = writable(true);

/**
 * @type {('dark'|'light')}
 */
export const colorScheme = writable(
	browser ? (window.matchMedia('(prefers-color-scheme: dark').matches ? 'dark' : 'light') : 'dark'
);
