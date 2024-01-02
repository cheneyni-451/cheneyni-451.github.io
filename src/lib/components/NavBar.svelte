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
	import Bars from '$lib/assets/Bars.svelte';
	import XMark from '$lib/assets/XMark.svelte';
	import { browser } from '$app/environment';

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

	let menuOpen = false;
	$: if (browser) document.body.classList.toggle('menu-open', menuOpen);
</script>

{#if ready}
	<nav
		class="navbar"
		class:menu-open={menuOpen}
		in:flyblur={{ duration: 1000, y: -100 }}
		on:introend={() => {
			navDivTransitioned = true;
		}}
	>
		<div class="navbar-left-wrapper">
			<h1 class="name">
				<a class:menu-open={menuOpen} href={menuOpen ? 'javascript:void(0);' : '/'}>Cheney Ni</a>
			</h1>
			<ul class="navbar-left">
				{#each linksLeft as { url, text }, i}
					<li
						in:slide|global={{ delay: i * 200 + 400, duration: 200 }}
						on:introend={() => {
							if (i === linksLeft.length - 1) {
								navLeftTransitioned = true;
							}
						}}
						class="left-buttons"
						class:current-page={pathname === url}
					>
						<a on:click={() => (menuOpen = false)} href={url} data-sveltekit-noscroll>{text}</a>
					</li>
				{/each}
			</ul>
		</div>
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
					class="right-buttons"
				>
					<a
						on:click={() => (menuOpen = false)}
						on:pointerenter={() => scale.set(1.25)}
						on:pointerleave={() => scale.set(1)}
						href={url}
						target="_blank"><svelte:component this={iconComponent} {scale} /></a
					>
				</li>
			{/each}

			<li id="theme-toggle" class="right-buttons" in:slide|global={{ duration: 200 }}>
				<ThemeToggle />
			</li>
		</ul>
	</nav>
	<nav class="mobile-nav">
		<span in:slide|global={{ duration: 200 }}><ThemeToggle /></span>
		<button class="menu" on:click={() => (menuOpen = !menuOpen)}
			><svelte:component this={menuOpen ? XMark : Bars} /></button
		>
	</nav>
{/if}

<style>
	button {
		border: none;
		background-color: transparent;
	}

	.navbar {
		width: 100%;
		height: 4em;
		padding-left: 3em;
		padding-right: 3em;

		display: flex;
		flex-direction: row;
		justify-content: space-between;

		position: sticky;
		top: 0;

		background-color: color-mix(in srgb, var(--cp-crust) 80%, transparent);
		backdrop-filter: blur(0.3em);

		box-sizing: border-box;
		z-index: 1000;
	}

	.navbar-left-wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 2em;
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

	.name {
		font-size: 1.5em;
		font-weight: bold;

		display: flex;
	}

	.current-page::before {
		transform: scaleX(1);
		background-color: var(--cp-blue);
	}

	.mobile-nav {
		display: none;
	}

	.menu {
		fill: var(--cp-text);
	}

	@media (max-width: 700px) {
		:global(body.menu-open) {
			overflow: hidden;
		}

		#theme-toggle {
			display: none;
		}

		.mobile-nav {
			width: 6em;
			height: 4em;
			margin-left: auto;

			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1em;

			position: sticky;
			top: 0;

			background-color: transparent;

			z-index: 1000;
		}

		.navbar {
			width: 100%;
			height: 0;
			padding-left: 1em;
			padding-right: 1em;

			flex-direction: column;
			justify-content: space-between;

			position: fixed;
			top: 0;

			overflow: hidden;
			clear: both;

			z-index: 999;

			transition: all 0.3s ease;
		}

		.navbar.menu-open {
			height: 100%;
			padding-top: 1em;
			padding-bottom: 3em;
		}

		a.menu-open {
			cursor: default;
		}

		.navbar-left-wrapper {
			flex-direction: column;
			gap: 4em;
		}

		.name {
			width: 100%;
			font-size: 3em;
		}

		.navbar-left {
			flex-direction: column;
			row-gap: 4em;
		}

		.navbar-right {
			justify-content: center;
		}

		.left-buttons {
			font-size: 2em;
		}
	}

	@media (max-width: 400px) {
		.name {
			font-size: 2em;
		}
		.navbar-left {
			font-size: 0.8em;
		}
	}
</style>
