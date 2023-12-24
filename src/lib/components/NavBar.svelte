<script>
	import GitHubIcon from '$lib/assets/GitHubIcon.svelte';
	import LinkedInIcon from '$lib/assets/LinkedInIcon.svelte';
	import { onMount } from 'svelte';
	import { flyblur } from '$lib/transitions';
	import { slide } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { expoOut } from 'svelte/easing';
	import ThemeToggle from './ThemeToggle.svelte';
	import { navBarTransitioned } from '$lib/stores';

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

	$: $navBarTransitioned = navDivTransitioned && navLeftTransitioned && navRightTransitioned;
</script>

{#if ready}
	<nav
		class="navbar"
		in:flyblur={{ duration: 1000, y: -100 }}
		on:introend={() => {
			navDivTransitioned = true;
		}}
	>
		<ul class="navbar-left">
			{#each linksLeft as { url, text }, i}
				<li
					in:slide|global={{ delay: i * 200 + 400, duration: 200 }}
					on:introend={() => {
						if (i === linksLeft.length - 1) {
							navLeftTransitioned = true;
						}
					}}
				>
					<a class="left-buttons" href={url}>{text}</a>
				</li>
			{/each}
		</ul>
		<ul class="navbar-right">
			{#each linksRight as { url, iconComponent, scale }, i}
				<li
					in:slide|global={{
						delay: (linksRight.length - i) * 200 + 400,
						duration: 200
					}}
					on:introend={() => {
						if (i === linksRight.length - 1) {
							navRightTransitioned = true;
						}
					}}
				>
					<a
						on:pointerenter={() => scale.set(1.25)}
						on:pointerleave={() => scale.set(1)}
						class="right-buttons"
						href={url}
						target="_blank"><svelte:component this={iconComponent} {scale} /></a
					>
				</li>
			{/each}

			<li class="right-buttons" in:slide|global={{ duration: 200 }}><ThemeToggle /></li>
		</ul>
	</nav>
{/if}

<style>
	.navbar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-left: 3em;
		padding-right: 3em;
		background-color: color-mix(in srgb, var(--cp-crust) 80%, transparent);
		backdrop-filter: blur(10px);
		transition: background-color 1s ease;
	}

	.navbar-left,
	.navbar-right {
		display: flex;
		flex-direction: row;
		align-items: center;
		list-style-type: none;
		gap: 2em;
		padding: 0;
	}

	.left-buttons,
	.right-buttons {
		text-decoration: none;
	}

	.left-buttons {
		position: relative;
		font-size: 18px;
		font-weight: bold;
		color: inherit;
	}

	.left-buttons::before {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: var(--cp-sky);
		transform: scaleX(0);
		transition: transform 0.3s ease;
	}

	.left-buttons:hover::before {
		transform: scaleX(1);
	}

	.right-buttons {
		fill: var(--cp-text);
		opacity: 0.8;
		transition: fill 0.5s ease-out;
	}

	.right-buttons:hover {
		opacity: 1;
	}

	.navbar-left li:first-child a {
		font-size: 24px;
		font-weight: bold;
	}
</style>
