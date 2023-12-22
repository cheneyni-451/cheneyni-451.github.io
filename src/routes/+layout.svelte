<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import { flyblur } from '$lib/transitions';

	export let data;
	let navBarTransitioned = false;
</script>

<NavBar bind:navBarTransitioned />

{#if navBarTransitioned}
	{#key data.pathname}
		<div
			id="main"
			in:flyblur|global={{ duration: 600, y: 100 }}
			out:flyblur|global={{ duration: 300, y: 100 }}
		>
			<slot />
		</div>
	{/key}
{/if}

<style>
	#main {
		position: absolute;
		width: 50%;
		max-width: 900px;
		left: 50%;
		transform: translateX(-50%);
		margin: 3em;
	}
</style>
