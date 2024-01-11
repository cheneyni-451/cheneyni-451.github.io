<script>
	export let text;
</script>

<div class="chip">
	{text}
</div>

<style>
	.chip {
		padding: 0.4em 0.6em;
		border: 1px solid transparent;
		border-radius: 3em;

		font-size: 0.9em;
		font-weight: 600;

		background-color: var(--cp-mauve);
		color: var(--cp-base);

		transition:
			background-color 1s ease,
			color 1s ease;
	}
</style>
