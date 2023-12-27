<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import { flyblur } from '$lib/transitions';
	import { navBarTransitioned } from '$lib/stores';
	import { navLinks } from '$lib/data/navLinks';

	export let data;
	$: ({ pathname, title } = data);
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<NavBar {navLinks} {pathname} />

{#if $navBarTransitioned}
	{#key pathname}
		<div
			id="main"
			in:flyblur|global={{ delay: 200, duration: 600, y: 100 }}
			out:flyblur|global={{ duration: 300, y: 100 }}
		>
			<slot />
		</div>
	{/key}
{/if}

<style>
	@import '$lib/styles/main.css';

	#main {
		position: absolute;
		width: 100%;
	}
</style>
