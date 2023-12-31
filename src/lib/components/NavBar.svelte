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

	export let navLinks;
	export let pathname;

	let ready = false;
	onMount(() => (ready = true));

	const linksLeft = navLinks;
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
					<a
						class="left-buttons {url !== '/' && pathname === url ? 'current-page' : ''}"
						href={url}
						data-sveltekit-noscroll>{text}</a
					>
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
		height: 4em;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-left: 3em;
		padding-right: 3em;
		background-color: color-mix(in srgb, var(--cp-crust) 80%, transparent);
		backdrop-filter: blur(0.3em);
		position: sticky;
		top: 0;
		width: 100%;
		box-sizing: border-box;
		z-index: 9999;
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

	.left-buttons {
		position: relative;
		font-size: 18px;
		font-weight: bold;
	}

	.left-buttons::before {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 0.1em;
		bottom: -0.1em;
		left: 0;
		background-color: var(--cp-sky);
		transform: scaleX(0);
		transition:
			transform 0.3s ease,
			background-color 0.3s ease;
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

	.navbar-left li:first-child .left-buttons {
		font-size: 1.5em;
		font-weight: bold;
	}

	.current-page::before {
		transform: scaleX(1);
		background-color: var(--cp-blue);
	}
</style>
