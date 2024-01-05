<script>
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let mounted = false;
	onMount(() => {
		mounted = true;

		if (browser) document.body.classList.toggle('noscroll', true);
	});

	onDestroy(() => {
		if (browser) document.body.classList.toggle('noscroll', false);
	});
</script>

{#if mounted}
	<div class="overlay" transition:fade|global={{ duration: 200 }}>
		<slot />
	</div>
{/if}

<style>
	:global(body.noscroll) {
		overflow: hidden;
	}

	.overlay {
		position: absolute;
		width: 100vw;
		height: 100vh;
		top: 0;
		background-color: var(--cp-mantle);
		z-index: 10;
	}
</style>
