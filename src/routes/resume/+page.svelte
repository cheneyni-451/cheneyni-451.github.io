<script>
	import ResumeItem from '$lib/components/ResumeItem.svelte';
	import { pageLoading } from '$lib/stores.js';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => pageLoading.set(false));
</script>

<article class="resume">
	<h1 class="page-title">Resume</h1>
	<div class="resume-list">
		{#each data.resumeItems as resumeItem}
			<ResumeItem {resumeItem} />
		{/each}
	</div>
</article>

<style>
	.resume {
		margin: 3em;
	}

	.page-title {
		font-size: 3.5em;
		margin-bottom: 1em;
		text-align: center;
	}

	.resume-list {
		display: flex;
		flex-direction: column;
		row-gap: 3em;
		margin-left: auto;
		align-items: center;
	}

	@media (max-width: 600px) {
		.resume {
			margin: 5em 1.5em;
		}
	}
</style>
