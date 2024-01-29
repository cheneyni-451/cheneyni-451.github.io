<script>
	import ExternalLink from '$lib/assets/ExternalLink.svelte';
	import ResumeItem from '$lib/components/ResumeItem.svelte';
	import { pageLoading } from '$lib/stores';
	import { typewriter } from '$lib/transitions.js';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let data;

	onMount(() => pageLoading.set(false));

	let resumeLinkHover = false;
	let titleTransitioned = false;
</script>

<article class="resume">
	<h1
		class="page-title"
		on:introend={() => (titleTransitioned = true)}
		in:typewriter={{ delay: 500, speed: 1.5 }}
	>
		Resume
	</h1>
	{#if titleTransitioned}
		<div class="content">
			<div class="resume-list">
				{#each data.resumeItems as resumeItem, i}
					<div
						in:fade|global={{
							delay: (i * 1000) / data.resumeItems.length + 200,
							duration: 1000 / data.resumeItems.length
						}}
					>
						<ResumeItem {resumeItem} />
					</div>
				{/each}
			</div>
			<a
				on:mouseover={() => (resumeLinkHover = true)}
				on:focus={() => (resumeLinkHover = true)}
				on:mouseout={() => (resumeLinkHover = false)}
				on:blur={() => (resumeLinkHover = false)}
				class="resume-link"
				href="/Ni-Cheney_Resume.pdf"
				target="_blank"
				in:fade={{ delay: 1200, duration: 200 }}
				>View full resume
				<span class="external-link-icon"><ExternalLink scale={0.7} hover={resumeLinkHover} /></span>
			</a>
		</div>
	{/if}
</article>

<style>
	.resume {
		margin: 3em;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.page-title {
		font-size: 3.5em;
		margin-bottom: 1em;
		text-align: center;

		transition: color 1s ease;
	}

	.content {
		display: inline flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2em;
	}

	.resume-list {
		display: flex;
		flex-direction: column;
		row-gap: 3em;
		align-items: center;
	}

	.resume-link {
		font-size: 1.1em;
		font-weight: bold;

		transition: color 1s ease;
	}

	.resume-link:hover {
		color: var(--cp-blue);
		transition-duration: 0.3s;
	}

	.external-link-icon {
		margin-left: 0.2em;

		display: inline-block;

		fill: var(--cp-text);
	}

	@media (max-width: 600px) {
		.resume {
			margin: 5em 1.5em;
		}
	}
</style>
