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
	}

	.item-title {
		grid-area: b;
		font-size: 1.1em;
		font-weight: 900;
		margin-bottom: 0.5em;
	}

	.item-description {
		grid-area: c;
		max-width: 25em;
		color: var(--cp-subtext1);
		margin-bottom: 0.8em;
	}

	.tags-list {
		grid-area: d;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
	}

	.tag-chip {
		font-size: 0.9em;
		font-weight: 600;
		padding: 0.4em 0.8em 0.4em 0.8em;
		border: 1px solid transparent;
		border-radius: 3em;
		margin-right: 0.5em;
		background-color: color-mix(in srgb, var(--cp-blue) 20%, var(--cp-base));
		color: color-mix(in srgb, var(--cp-blue) 40%, var(--cp-text));
	}
</style>
