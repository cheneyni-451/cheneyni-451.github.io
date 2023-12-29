<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import { flyblur } from '$lib/transitions';
	import { navBarTransitioned } from '$lib/stores';
	import { navLinks } from '$lib/data/navLinks';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import { fade } from 'svelte/transition';

	export let data;
	$: ({ pathname, title } = data);

	let scrollY;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<svelte:window bind:scrollY />

<NavBar {navLinks} {pathname} />

{#if $navBarTransitioned}
	{#key pathname}
		<div
			id="main"
			in:flyblur|global={{ delay: 300, duration: 600, y: 100 }}
			out:flyblur|global={{ duration: 200, y: 100 }}
		>
			<slot />
		</div>
	{/key}
{/if}

{#if scrollY > 400}
	<div transition:fade={{ duration: 200 }}>
		<ScrollToTop />
	</div>
{/if}

<style>
	@import '$lib/styles/main.css';

	#main {
		width: 100%;
	}
</style>
