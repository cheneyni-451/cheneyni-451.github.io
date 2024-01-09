<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import { flyblur } from '$lib/transitions';
	import { navBarTransitioned } from '$lib/stores';
	import { navLinks } from '$lib/data/navLinks';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import { fade } from 'svelte/transition';
	import Spinner from '$lib/components/Spinner.svelte';
	import { pageLoading } from '$lib/stores';
	import Overlay from '$lib/components/Overlay.svelte';
	import { afterNavigate } from '$app/navigation';

	export let data;
	$: ({ pathname, title } = data);

	let scrollY;

	afterNavigate(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<svelte:window bind:scrollY />

{#if $pageLoading}
	<Overlay>
		<Spinner />
	</Overlay>
{/if}

{#if $navBarTransitioned}
	{#key pathname}
		<div
			class="main"
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

<NavBar {navLinks} {pathname} />

<style>
	@import '$lib/styles/main.css';

	.main {
		width: 100%;
		margin-top: 8em;
	}
</style>
