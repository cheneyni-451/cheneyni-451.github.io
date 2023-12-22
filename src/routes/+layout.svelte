<script>
	import NavBar from '../components/NavBar.svelte';
	import { flyblur } from '$lib/transitions';
	import { navBarTransitioned } from '$lib/stores';

	export let data;
</script>

<NavBar />

{#if $navBarTransitioned}
	{#key data.pathname}
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
		width: 50%;
		max-width: 900px;
		left: 50%;
		transform: translateX(-50%);
		margin: 3em;
	}
</style>
