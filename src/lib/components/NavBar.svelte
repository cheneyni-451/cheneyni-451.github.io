<script>
	import { onMount } from 'svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import Bars from '$lib/assets/Bars.svelte';
	import GitHubIcon from '$lib/assets/GitHubIcon.svelte';
	import { tweened } from 'svelte/motion';
	import { expoOut } from 'svelte/easing';
	import LinkedInIcon from '$lib/assets/LinkedInIcon.svelte';
	import { colorScheme, navBarTransitioned } from '$lib/stores';
	import Overlay from './Overlay.svelte';
	import { flyblur } from '$lib/transitions';
	import { fade, slide } from 'svelte/transition';
	import XMark from '$lib/assets/XMark.svelte';

	export let navLinks;
	export let pathname;

	let navDivTransitioned = false;
	let navLeftTransitioned = false;
	let navRightTransitioned = false;
	let mobileNavTransitioned = false;
	$: $navBarTransitioned =
		mobileNavTransitioned || (navDivTransitioned && navLeftTransitioned && navRightTransitioned);

	let ready = false;
	onMount(() => (ready = true));

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

	let innerWidth;
	let menuOpen = false;
</script>

<svelte:window bind:innerWidth />

{#if ready}
	{#if innerWidth > 700}
		<nav
			class="top-nav"
			in:flyblur|global={{ duration: 1000, y: -100 }}
			on:introend={() => (navDivTransitioned = true)}
		>
			<div class="main-nav">
				<div class="navbar-left">
					<h1 class="name"><a href="/">Cheney Ni</a></h1>
					<div class="page-link-wrapper">
						{#each navLinks as { url, text }, i}
							<a
								class="page-link"
								class:current-page={pathname === url}
								href={url}
								data-sveltekit-noscroll
								in:slide|global={{ delay: i * 200 + 400, duration: 200 }}
								on:introend={() => {
									if (i === navLinks.length - 1) {
										navLeftTransitioned = true;
									}
								}}>{text}</a
							>
						{/each}
					</div>
				</div>
				<div class="navbar-right">
					{#each linksRight as { url, iconComponent, scale }, i}
						<a
							href={url}
							target="_blank"
							in:slide|global={{ delay: (linksRight.length - i) * 200 + 400, duration: 200 }}
							on:introend={() => {
								if (i === linksRight.length - 1) {
									navRightTransitioned = true;
								}
							}}
							on:pointerenter={() => scale.set(1.25)}
							on:pointerleave={() => scale.set(1)}
							><svelte:component this={iconComponent} {scale} /></a
						>
					{/each}
				</div>
			</div>
			<div class="controls-wrapper">
				<ThemeToggle />
			</div>
		</nav>
	{:else}
		<div
			class="overlay-controls-wrapper"
			in:flyblur|global={{ duration: 400, y: -100 }}
			on:introend={() => (mobileNavTransitioned = true)}
		>
			<ThemeToggle />
			<button class="menu-button" on:click={() => (menuOpen = !menuOpen)}>
				<svelte:component this={menuOpen ? XMark : Bars} />
			</button>
		</div>

		{#if menuOpen}
			<div class="overlay-wrapper">
				<Overlay>
					<nav class="overlay-nav">
						<div class="overlay-top-row">
							<div class="overlay-name-wrapper" in:fade|global={{ delay: 400, duration: 200 }}>
								<img
									class="logo"
									src={$colorScheme === 'dark' ? '/white_text_logo.png' : '/black_text_logo.png'}
									alt="logo"
								/>
								<h1 class="overlay-name">Cheney Ni</h1>
							</div>
						</div>

						<div class="overlay-links-wrapper">
							<div class="overlay-page-links-wrapper">
								{#each navLinks as { url, text }, i}
									<a
										class="overlay-page-link"
										class:current-page={pathname === url}
										href={url}
										data-sveltekit-noscroll
										in:fade|global={{ delay: i * 100 + 600, duration: 200 }}
										on:click={() => (menuOpen = false)}>{text}</a
									>
								{/each}
							</div>

							<div
								class="overlay-social-links-wrapper"
								in:fade|global={{ delay: 400, duration: 200 }}
							>
								{#each linksRight as { url, iconComponent, scale }}
									<a class="overlay-social-link" href={url} target="_blank"
										><svelte:component this={iconComponent} {scale} /></a
									>
								{/each}
							</div>
						</div>
					</nav>
				</Overlay>
			</div>
		{/if}
	{/if}
{/if}

<style>
	.top-nav {
		width: 100%;
		height: 4em;
		padding: 0em 2em;

		box-sizing: border-box;

		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 2em;

		position: fixed;
		top: 0;

		background-color: var(--cp-crust);
		backdrop-filter: blur(0.3em);
		-webkit-backdrop-filter: blur(0.3em);

		transition: background-color 1s ease;

		z-index: 1000;
	}

	@supports (background-color: color-mix(in srgb, var(--cp-crust) 80%, transparent)) {
		.top-nav {
			background-color: color-mix(in srgb, var(--cp-crust) 80%, transparent);
		}
	}

	.main-nav {
		width: 100%;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.navbar-left {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 2em;
	}

	.name {
		font-size: 1.5em;
		font-weight: bold;

		transition: color 1s ease;
	}

	.page-link-wrapper {
		display: flex;
		column-gap: 1em;
	}

	.page-link {
		position: relative;

		font-size: 1.1em;
		font-weight: bold;

		transition: color 1s ease;
	}

	.page-link::before,
	.overlay-page-link::before {
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

	.overlay-page-link::before {
		bottom: -0.05em;
	}

	.page-link:hover::before {
		transform: scaleX(1);
	}

	.current-page::before {
		transform: scaleX(1);
		background-color: var(--cp-blue);
	}

	.navbar-right {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 2em;

		fill: var(--cp-text);
	}

	/** Overlay **/
	.overlay-controls-wrapper {
		height: 2em;

		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 1em;

		position: fixed;
		top: 1.25em;
		right: 1em;

		z-index: 1000;
	}

	.overlay-wrapper {
		position: fixed;
		top: 0;
	}

	.overlay-nav {
		height: 100%;

		display: flex;
		flex-direction: column;
	}

	.overlay-top-row {
		margin: 1em 1em;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.overlay-name-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		gap: 1em;
		align-items: center;
	}

	.logo {
		height: 2em;
	}

	.overlay-name {
		font-size: 2em;

		transition: color 1s ease;
	}

	.controls-wrapper {
		column-gap: 1em;
	}

	.menu-button {
		border: none;

		background-color: transparent;
		fill: var(--cp-text);

		cursor: pointer;

		transition: fill 1s ease;
	}

	.overlay-links-wrapper {
		height: 100%;
		margin: 2em 1em 4em 1em;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.overlay-page-links-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 2em;
	}

	.overlay-page-link {
		position: relative;

		font-size: 1.75em;
		font-weight: bold;

		transition: color 1s ease;
	}

	.overlay-social-links-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
		column-gap: 2em;
	}

	.overlay-social-link {
		fill: var(--cp-text);

		transition: fill 1s ease;
	}
</style>
