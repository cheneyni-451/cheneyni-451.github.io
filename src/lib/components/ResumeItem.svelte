<script>
	export let resumeItem;
	$: ({ date, title, description, tags } = resumeItem);
</script>

<div class="item-grid">
	<p class="item-date">{date}</p>
	<h3 class="item-title">{title}</h3>
	<p class="item-description">{description}</p>
	<ul class="tags-list">
		{#each tags as tag}
			<li class="tag-chip">{tag}</li>
		{/each}
	</ul>
</div>

<style>
	.item-grid {
		display: grid;
		grid-template:
			'a b'
			'a c'
			'a d' auto / 4fr 10fr;
		align-items: baseline;
		column-gap: 1em;
	}

	.item-date {
		grid-area: a;
		color: var(--cp-subtext1);
		margin-bottom: 0.7em;

		transition: color 1s ease;
	}

	.item-title {
		grid-area: b;
		font-size: 1.1em;
		font-weight: 900;
		margin-bottom: 0.5em;

		transition: color 1s ease;
	}

	.item-description {
		grid-area: c;
		max-width: 25em;
		color: var(--cp-subtext1);
		margin-bottom: 0.8em;

		transition: color 1s ease;
	}

	.tags-list {
		grid-area: d;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		column-gap: 0.25em;
		row-gap: 0.25em;
	}

	.tag-chip {
		font-size: 0.9em;
		font-weight: 600;
		padding: 0.4em 0.6em;
		border: 1px solid transparent;
		border-radius: 3em;
		background-color: var(--cp-mauve);
		color: var(--cp-base);

		transition:
			background-color 1s ease,
			color 1s ease;
	}

	@media (max-width: 600px) {
		.item-grid {
			grid-template:
				'a'
				'b'
				'c'
				'd';
		}
	}
</style>
