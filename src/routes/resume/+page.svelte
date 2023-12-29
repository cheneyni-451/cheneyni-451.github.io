<script>
	import ResumeList from '$lib/components/ResumeList.svelte';
	export let data;
</script>

<article class="resume">
	<h1 class="page-title">Resume</h1>
	<ResumeList resumeData={data.resumeItems} />
</article>

<style>
	.resume {
		margin-top: 3em;
	}

	.page-title {
		font-size: 3.5em;
		margin-bottom: 1em;
		text-align: center;
	}
</style>
