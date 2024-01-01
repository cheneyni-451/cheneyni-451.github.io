<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let mounted = false;
	onMount(() => (mounted = true));
</script>

{#if mounted}
	<div class="overlay" transition:fade|global={{ duration: 200 }}>
		<slot />
	</div>
{/if}

<style>
	.overlay {
		position: absolute;
		width: 100vw;
		height: 100vh;
		top: 0;
		background-color: var(--cp-mantle);
	}
</style>
