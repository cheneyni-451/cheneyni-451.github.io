<script>
	import Chip from './Chip.svelte';

	export let projectItem;
	$: ({ title, description, tags } = projectItem);
</script>

<div class="project-wrapper">
	<h1 class="title">{title}</h1>
	<p class="description">{description}</p>
	<div class="tags-list">
		{#each tags as tag}
			<Chip text={tag} />
		{/each}
	</div>
</div>

<style>
	.project-wrapper {
		width: 30%;
		max-width: 500px;

		display: flex;
		flex-direction: column;
	}

	.title {
		margin-bottom: 0.5em;

		font-size: 1.1em;
		font-weight: 900;

		transition: color 1s ease;
	}

	.description {
		margin-bottom: 0.8em;

		color: var(--cp-subtext1);

		transition: color 1s ease;
	}

	.tags-list {
		display: flex;
		flex-wrap: wrap;
		column-gap: 0.25em;
		row-gap: 0.25em;
	}

	@media (max-width: 1200px) {
		.project-wrapper {
			width: 55%;
		}
	}

	@media (max-width: 800px) {
		.project-wrapper {
			width: 80%;
		}
	}

	@media (max-width: 400px) {
		.project-wrapper {
			width: 100%;
		}
	}
</style>
