<article class="section-container">
	<section class="introduction">
		<h1 class="hello">Hello! I'm Cheney</h1>
		<h2 class="title">Software Developer</h2>
	</section>

	<section class="bio">
		<p class="paragraph">
			I graduated from the <a href="https://eecs.engin.umich.edu/" target="_blank"
				>University of Michigan</a
			>
			at the end of 2022, completing two summer internships at
			<a href="https://www.redroverk12.com/" target="_blank">Red Rover</a>
			and
			<a href="https://aws.amazon.com/" target="_blank">AWS</a>. After graduating, I worked at
			<b>AWS</b> on the same team I was on during my internship for a few months before being caught
			in a wave of layoffs.
		</p>
		<p class="paragraph"></p>
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
	.introduction {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1.5em;
	}

	.hello {
		font-size: 4em;
	}

	.title {
		font-size: 1.1em;
		color: var(--cp-subtext0);
	}

	.bio {
		height: 50vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.paragraph {
		margin-bottom: 1.5em;
		max-width: 35em;
		line-height: 1.5em;
	}
</style>
