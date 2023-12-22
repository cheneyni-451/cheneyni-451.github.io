<script>
	import ResumeItem from '$lib/components/ResumeItem.svelte';

	export let resumeData;
</script>

<div class="resume-list">
	{#each resumeData as resumeItem}
		<ResumeItem itemData={resumeItem} />
	{/each}
</div>

<style>
	.resume-list {
		margin-top: 1em;
	}
</style>
