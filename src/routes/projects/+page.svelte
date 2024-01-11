<script>
	import { pageLoading } from '$lib/stores';
	import { onMount } from 'svelte';
	import { projectItems } from '$lib/data/projectsData';
	import ProjectItem from '$lib/components/ProjectItem.svelte';

	onMount(() => pageLoading.set(false));
</script>

<article class="projects">
	<h1 class="page-title">Projects</h1>
	<div class="project-list">
		{#each projectItems as projectItem}
			<ProjectItem {projectItem} />
		{/each}
	</div>
</article>

<style>
	.projects {
		margin: 3em;
	}

	.page-title {
		font-size: 3.5em;
		margin-bottom: 1em;
		text-align: center;

		transition: color 1s ease;
	}

	.project-list {
		display: flex;
		flex-direction: column;
		row-gap: 3em;
		align-items: center;
	}

	@media (max-width: 600px) {
		.projects {
			margin: 5em 1.5em;
		}
	}
</style>
