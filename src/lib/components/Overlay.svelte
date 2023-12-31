<script>
	import { onMount } from 'svelte';

	let mounted = false;
	onMount(() => (mounted = true));
</script>

{#if mounted}
	<div class="overlay">
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
