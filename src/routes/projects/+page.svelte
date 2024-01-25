<script>
	import { pageLoading } from '$lib/stores';
	import { onMount } from 'svelte';
	import { projectItems } from '$lib/data/projectsData';
	import ProjectItem from '$lib/components/ProjectItem.svelte';
	import { typewriter } from '$lib/transitions';

	onMount(() => pageLoading.set(false));
	let titleTransitioned = false;
</script>

<article class="projects">
	<h1
		class="page-title"
		on:introend={() => {
			titleTransitioned = true;
		}}
		in:typewriter={{ delay: 200, speed: 1.5 }}
	>
		Projects
	</h1>
	<div class="project-list">
		{#if titleTransitioned}
			{#each projectItems as projectItem, i}
				<ProjectItem
					{projectItem}
					transitionDelay={(i * 1000) / projectItems.length + 100}
					transitionDuration={1000 / projectItems.length}
				/>
			{/each}
		{/if}
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
