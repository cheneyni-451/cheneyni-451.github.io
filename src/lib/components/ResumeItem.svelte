<script>
	export let itemData;
</script>

<div class="item-grid">
	<p class="item-date">{itemData.date}</p>
	<h3 class="item-title">{itemData.title}</h3>
	<p class="item-description">{itemData.description}</p>
</div>

<style>
	.item-grid {
		display: grid;
		grid-template:
			'a b'
			'a c' auto / 4fr 10fr;
		align-items: baseline;
		column-gap: 1em;
		margin-bottom: 3em;
	}

	.item-date {
		grid-area: a;
	}

	.item-title {
		grid-area: b;
		font-weight: 900;
	}

	.item-description {
		grid-area: c;
		max-width: 500px;
	}
</style>
