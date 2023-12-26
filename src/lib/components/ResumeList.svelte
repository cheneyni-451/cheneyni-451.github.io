<script>
	import ResumeItem from './ResumeItem.svelte';

	export let resumeData;
</script>

<div class="resume-list">
	{#each resumeData as resumeItem}
		<ResumeItem {resumeItem} />
	{/each}
</div>

<style>
	.resume-list {
		display: flex;
		flex-direction: column;
		row-gap: 3em;
		width: 80%;
		margin-left: auto;
	}
</style>
