<script>
	export let projectItem;
	$: ({ title, description, tags } = projectItem);
</script>

<div class="project-wrapper">
	<h1 class="title">{title}</h1>
	<p class="description">{description}</p>
	<ul class="tags-list">
		{#each tags as tag}
			<li class="tag-chip">{tag}</li>
		{/each}
	</ul>
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
	}

	.description {
		margin-bottom: 0.8em;

		color: var(--cp-subtext1);
	}

	.tags-list {
		display: flex;
		flex-wrap: wrap;
		column-gap: 0.25em;
		row-gap: 0.25em;
	}

	.tag-chip {
		padding: 0.4em 0.6em;
		border: 1px solid transparent;
		border-radius: 3em;

		font-size: 0.9em;
		font-weight: 900;

		background-color: var(--cp-mauve);
		color: var(--cp-base);
	}

	@media (max-width: 1200px) {
		.project-wrapper {
			width: 50%;
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
