<script>
	import ResumeList from '$lib/components/ResumeList.svelte';
	export let data;
</script>

<h1>Resume</h1>
<ResumeList resumeData={data.resumeItems} />
