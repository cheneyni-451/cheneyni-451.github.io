<script>
	import ResumeList from '$lib/components/ResumeList.svelte';
	import { pageLoading } from '$lib/stores.js';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => pageLoading.set(false));
</script>

<article class="resume">
	<h1 class="page-title">Resume</h1>
	<ResumeList resumeData={data.resumeItems} />
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

	@media (max-width: 600px) {
		.resume {
			margin: 1.5em;
		}
	}
</style>
