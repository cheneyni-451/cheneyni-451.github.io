<script>
	import Chip from './Chip.svelte';

	export let resumeItem;
	$: ({ date, title, description, tags } = resumeItem);
</script>

<div class="item-grid">
	<p class="item-date">{date}</p>
	<h3 class="item-title">{title}</h3>
	<p class="item-description">{description}</p>
	<div class="tags-list">
		{#each tags as tag}
			<Chip text={tag} />
		{/each}
	</div>
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
