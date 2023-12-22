<script>
	import MoonIcon from '$lib/assets/MoonIcon.svelte';
	import SunIcon from '$lib/assets/SunIcon.svelte';

	const preferredColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
	document.documentElement.setAttribute('data-theme', preferredColorScheme);

	let currentTheme = document.documentElement.getAttribute('data-theme');
	$: targetThemeIcon = currentTheme === 'light' ? MoonIcon : SunIcon;

	function toggleTheme() {
		let targetTheme = 'light';

		if (currentTheme === 'light') {
			targetTheme = 'dark';
		}

		document.documentElement.setAttribute('data-theme', targetTheme);
		currentTheme = document.documentElement.getAttribute('data-theme');
	}
</script>

<button
	class="theme-toggle"
	on:click={toggleTheme}
	style="fill: {currentTheme === 'light' ? 'var(--cp-mauve)' : 'var(--cp-yellow)'}"
	><svelte:component this={targetThemeIcon} /></button
>

<style>
	.theme-toggle {
		display: block;
		border: none;
		padding: 0;
		background-color: transparent;
		transition: fill 0.5s ease-out;
	}
</style>
