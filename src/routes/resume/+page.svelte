<script>
	import ResumeList from '../../components/ResumeList.svelte';
	export let data;
</script>

<h1>Resume</h1>
<ResumeList resumeData={data.resumeItems} />
