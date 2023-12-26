<script>
	import ResumeList from '$lib/components/ResumeList.svelte';
	export let data;
</script>

<h1 class="page-title">Resume</h1>
<ResumeList resumeData={data.resumeItems} />

<style>
	.page-title {
		font-size: 3.5em;
		margin-bottom: 1em;
		text-align: center;
	}
</style>
