<div class="loading-wrapper">
	<div class="ring" />
	<div class="arc" />
</div>

<style>
	.loading-wrapper {
		position: absolute;
		top: 45%;
		left: 50%;
	}

	.ring {
		width: 4em;
		height: 4em;
		border: 0.2em solid var(--cp-surface0);
		border-radius: 50%;

		position: absolute;
		top: -2em;
		left: -2em;
	}

	.arc {
		width: 4em;
		height: 4em;
		border-radius: 50%;
		border-top: 0.2em solid transparent;
		border-right: 0.2em solid color-mix(in srgb, var(--cp-text) 70%, transparent);
		border-bottom: 0.2em solid var(--cp-text);
		border-left: 0.2em solid transparent;

		position: absolute;
		top: -2em;
		left: -2em;

		transform: rotateZ(0);
		-webkit-animation: spin 2s linear infinite;
		animation: spin 2s linear infinite;
	}

	@-webkit-keyframes spin {
		from {
			transform: rotateZ(0deg);
		}
		50% {
			transform: rotateZ(540deg);
		}
		to {
			transform: rotateZ(1080deg);
		}
	}

	@keyframes spin {
		from {
			transform: rotateZ(0deg);
		}
		50% {
			transform: rotateZ(540deg);
		}
		to {
			transform: rotateZ(1080deg);
		}
	}
</style>
