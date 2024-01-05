<script>
	import MoonIcon from '$lib/assets/MoonIcon.svelte';
	import SunIcon from '$lib/assets/SunIcon.svelte';
	import { colorScheme } from '$lib/stores';

	document.documentElement.setAttribute('data-theme', $colorScheme);

	$: targetThemeIcon = $colorScheme === 'light' ? MoonIcon : SunIcon;

	function toggleTheme() {
		const targetTheme = $colorScheme === 'light' ? 'dark' : 'light';

		document.documentElement.setAttribute('data-theme', targetTheme);
		$colorScheme = document.documentElement.getAttribute('data-theme');
	}
</script>

<button
	class="theme-toggle"
	on:click={toggleTheme}
	style:fill={$colorScheme === 'light' ? 'var(--cp-mauve)' : 'var(--cp-yellow)'}
	><svelte:component this={targetThemeIcon} /></button
>

<style>
	.theme-toggle {
		display: block;
		border: none;
		padding: 0;
		background-color: transparent;
		transition: fill 0.5s ease-out;
		cursor: pointer;
	}
</style>
