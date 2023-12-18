<script>
	import GitHubIcon from '$lib/assets/GitHubIcon.svelte';
	import LinkedInIcon from '$lib/assets/LinkedInIcon.svelte';
	import { onMount } from 'svelte';
	import { flyblur } from '$lib/transitions';
	import { slide } from 'svelte/transition';

	let ready = false;
	onMount(() => (ready = true));

	const linksLeft = [
		{ text: 'Home', url: '/' },
		{ text: 'Projects', url: '/projects' },
		{ text: 'Resume', url: '/resume' }
	];
	const linksRight = [
		{ iconComponent: GitHubIcon, url: 'https://github.com/cheneyni-451' },
		{ iconComponent: LinkedInIcon, url: 'https://www.linkedin.com/in/cheneyni' }
	];
	let navDivTransitioned = false;
	let navLeftTransitioned = false;
	let navRightTransitioned = false;
	export let navBarTransitioned = false;
</script>

{#if ready}
	<nav
		id="navbar"
		in:flyblur={{ duration: 1000, y: -100 }}
		on:introend={() => {
			navDivTransitioned = true;
			navBarTransitioned = navDivTransitioned && navLeftTransitioned && navRightTransitioned;
		}}
	>
		<ul id="navbar-left">
			{#each linksLeft as { url, text }, i}
				<li
					in:slide|global={{ delay: i * 200 + 400, duration: 200 }}
					on:introend={() => {
						if (i === linksLeft.length - 1) {
							navLeftTransitioned = true;
							navBarTransitioned =
								navDivTransitioned && navLeftTransitioned && navRightTransitioned;
						}
					}}
				>
					<a href={url}>{text}</a>
				</li>
			{/each}
		</ul>
		<ul id="navbar-right">
			{#each linksRight as { url, iconComponent }, i}
				<li
					in:slide|global={{
						delay: (linksRight.length - 1 - i) * 400 + 400,
						duration: 200
					}}
					on:introend={() => {
						if (i === linksRight.length - 1) {
							navRightTransitioned = true;
							navBarTransitioned =
								navDivTransitioned && navLeftTransitioned && navRightTransitioned;
						}
					}}
				>
					<a href={url} target="_blank"><svelte:component this={iconComponent} /></a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
	@import '$lib/styles/colors.css';
	@import '$lib/styles/main.css';

	#navbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-left: 3em;
		padding-right: 3em;
		background-color: color-mix(in srgb, var(--cp-mocha-crust) 80%, transparent);
		backdrop-filter: blur(10px);
	}

	#navbar-left,
	#navbar-right {
		display: flex;
		flex-direction: row;
		list-style-type: none;
		gap: 2em;
		padding: 0;
	}

	#navbar-left a,
	#navbar-right a {
		text-decoration: none;
	}
</style>
