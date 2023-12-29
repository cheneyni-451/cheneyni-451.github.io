<script>
	import CaretUp from '$lib/assets/CaretUp.svelte';

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<button class="to-top-button" on:click={scrollToTop}>
	<CaretUp />
</button>

<style>
	.to-top-button {
		width: 4em;
		height: 4em;

		display: flex;
		justify-content: center;
		align-items: center;

		position: fixed;
		bottom: 4em;
		right: 4em;

		background-color: transparent;

		padding: 1em;
		border: 0.2em solid var(--cp-surface2);
		border-radius: 2em;

		fill: var(--cp-overlay2);
		cursor: pointer;

		transition:
			border-color 0.3s ease,
			fill 0.3s ease;
	}

	.to-top-button:hover {
		border-color: var(--cp-text);
		fill: var(--cp-text);
	}
</style>
