<script>
	import { tooltip } from '$lib/actions.js';
	import { pageLoading } from '$lib/stores.js';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		pageLoading.set(false);
	});
</script>

<article class="section-container">
	<section class="introduction">
		<div class="hello-wrapper">
			<h1 class="hello">Hello!</h1>
			<h1 class="hello">I'm Cheney</h1>
		</div>
		<p class="title">Software Developer</p>
	</section>

	<section class="bio">
		<h2 class="bio-title">About me</h2>
		<p class="paragraph">
			I graduated from the <a href="https://eecs.engin.umich.edu/" target="_blank"
				>University of Michigan</a
			>
			at the end of 2022 while completing two summer internships at
			<a href="https://www.redroverk12.com/" target="_blank">Red Rover</a>
			and
			<a href="https://aws.amazon.com/" target="_blank">AWS</a>. After graduating, I continued
			working at <b>AWS</b> with the same team for a few months before being caught in a wave of layoffs.
		</p>
		<p class="paragraph">
			I enjoy being a software engineer because of the endless amount of information to learn. I
			enjoy working with new tools and technologies to build interesting and useful software.
		</p>
		<p class="paragraph">
			When I'm away from the keyboard, I like to bake and play video games. Recently, I've been
			trying to master making croissants, but when I get frustrated making them, I bake some
			lemon-flavored desserts.
		</p>
	</section>

	<section class="skills">
		<h2 class="skills-title">Technologies I've worked with</h2>
		<div class="skills-wrapper">
			{#each data.skills as { text, imgSrc }}
				<div class="skill-wrapper" use:tooltip={{ content: text }}>
					<img class="skill-img" src={imgSrc} alt={text} />
				</div>
			{/each}
		</div>
	</section>
</article>

<style>
	a {
		font-weight: bold;
	}

	.section-container {
		display: flex;
		flex-direction: column;
		gap: 20em;
	}

	section {
		margin-left: 3em;
		margin-right: 3em;
	}

	/** Introduction **/
	.introduction {
		height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1.5em;
	}

	.hello-wrapper {
		display: flex;
		flex-direction: row;
		column-gap: 1em;
		flex-wrap: wrap;
	}

	.hello {
		font-size: 4em;
	}

	.title {
		font-size: 1.1em;
		color: var(--cp-subtext1);
	}

	/** Bio **/
	.bio {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.bio-title {
		font-size: 1.8em;
		margin-bottom: 1em;
	}

	.paragraph {
		margin-bottom: 1.5em;
		max-width: 35em;
		line-height: 1.6;
	}

	/** Skills **/
	.skills {
		margin-bottom: 15vh;

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.skills-title {
		font-size: 1.8em;
		margin-bottom: 2em;
	}

	.skills-wrapper {
		width: 50%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		gap: 5em;
	}

	.skill-wrapper {
		width: 5em;
		height: 5em;
		display: flex;
		justify-content: center;
	}

	.skill-img {
		min-width: 0;
		min-height: 0;
		object-fit: contain;
		filter: grayscale(1);
		transition: filter 0.4s ease;
	}

	.skill-img:hover {
		filter: grayscale(0);
	}

	@media (max-width: 1400px) {
		.skills-wrapper {
			width: 80%;
		}
	}

	@media (max-width: 800px) {
		/** Introduction **/
		.introduction {
			align-items: flex-start;
		}

		.hello {
			font-size: 3.2em;
		}

		/** Bio **/
		.bio {
			align-items: flex-start;
		}

		/** Skills **/
		.skills {
			align-items: flex-start;
		}

		.skills-title {
			font-size: 1.4em;
		}

		.skills-wrapper {
			gap: 2em;
			justify-content: flex-start;
			width: 100%;
		}

		.skill-wrapper {
			width: 3em;
			height: 3em;
		}
	}

	@media (max-width: 400px) {
		/** Introduction **/
		.hello {
			font-size: 2.5em;
		}

		/** Skills **/
		.skills-title {
			font-size: 1.5em;
		}
	}

	@media (max-height: 700px) {
		.section-container {
			gap: 10em;
		}
	}
</style>
