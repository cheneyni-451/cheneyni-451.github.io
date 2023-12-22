<script>
	import GitHubIcon from '$lib/assets/GitHubIcon.svelte';
	import LinkedInIcon from '$lib/assets/LinkedInIcon.svelte';
	import { onMount } from 'svelte';
	import { flyblur } from '$lib/transitions';
	import { slide } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { expoOut } from 'svelte/easing';

	let ready = false;
	onMount(() => (ready = true));

	const linksLeft = [
		{ text: 'Cheney Ni', url: '/' },
		{ text: 'Projects', url: '/projects' },
		{ text: 'Resume', url: '/resume' }
	];
	const linksRight = [
		{
			iconComponent: GitHubIcon,
			url: 'https://github.com/cheneyni-451',
			scale: tweened(1, { duration: 500, easing: expoOut })
		},
		{
			iconComponent: LinkedInIcon,
			url: 'https://www.linkedin.com/in/cheneyni',
			scale: tweened(1, { duration: 500, easing: expoOut })
		}
	];

	let navDivTransitioned = false;
	let navLeftTransitioned = false;
	let navRightTransitioned = false;
	export let navBarTransitioned = false;
</script>

{#if ready}
	<nav
		class="navbar"
		in:flyblur={{ duration: 1000, y: -100 }}
		on:introend={() => {
			navDivTransitioned = true;
			navBarTransitioned = navDivTransitioned && navLeftTransitioned && navRightTransitioned;
		}}
	>
		<ul class="navbar-left">
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
					<a class="site-links" href={url}>{text}</a>
				</li>
			{/each}
		</ul>
		<ul class="navbar-right">
			{#each linksRight as { url, iconComponent, scale }, i}
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
					<a
						on:pointerenter={() => scale.set(1.6)}
						on:pointerleave={() => scale.set(1)}
						class="social-links"
						href={url}
						target="_blank"><svelte:component this={iconComponent} {scale} /></a
					>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
	@import '$lib/styles/colors.css';
	@import '$lib/styles/main.css';

	.navbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-left: 3em;
		padding-right: 3em;
		background-color: color-mix(in srgb, var(--cp-mocha-crust) 80%, transparent);
		backdrop-filter: blur(10px);
	}

	.navbar-left,
	.navbar-right {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		list-style-type: none;
		gap: 2em;
		padding: 0;
	}

	.site-links,
	.social-links {
		text-decoration: none;
		position: relative;
	}

	.site-links::before {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: var(--cp-mocha-sky);
		transform: scaleX(0);
		transition: transform 0.3s ease;
	}

	.site-links:hover::before {
		transform: scaleX(1);
	}

	.social-links {
		fill: var(--cp-mocha-text);
	}

	.social-links:hover {
		fill: var(--cp-mocha-sky);
	}

	.navbar-left li:first-child {
		font-size: larger;
		font-weight: bold;
	}
</style>
