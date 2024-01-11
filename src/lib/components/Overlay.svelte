<script>
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';

	onMount(() => {
		if (browser) document.body.classList.toggle('noscroll', true);
	});

	onDestroy(() => {
		if (browser) document.body.classList.toggle('noscroll', false);
	});
</script>

<div class="overlay">
	<slot />
</div>

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

		transition: background-color 1s ease;
	}
</style>
