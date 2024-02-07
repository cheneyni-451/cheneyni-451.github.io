<script>
	import { page } from '$app/stores';
	import { pageLoading } from '$lib/stores';
	import { onMount } from 'svelte';

	const errorCode = $page.status;

	const errorMessages = {
		404: "You, I'm afraid, are lost",
		500: 'Oh, this is all my fault'
	};

	const errorMessage = errorMessages[errorCode];

	onMount(() => {
		pageLoading.set(false);
	});
</script>

<svelte:head>
	<title>{errorCode} | {errorMessage}</title>
</svelte:head>

{#if !$pageLoading}
	<h1 class="error-code">{errorCode}</h1>
	{#if errorMessage !== undefined}
		<p class="error-message">{errorMessage}</p>
	{/if}

	<div class="button-container">
		<a class="return-link" href="/">I want to go back home</a>
	</div>
{/if}

<style>
	.error-code {
		font-size: 18em;
		text-align: center;
	}

	.error-message {
		font-size: 2em;
		text-align: center;
	}

	.button-container {
		display: flex;
		justify-content: space-evenly;
		margin: 1em;
	}

	.button-container > a {
		font-size: 1.1em;
		padding: 0.5em;
		border: 2px solid var(--cp-surface0);
		transition: border 0.5s ease;
	}

	.button-container > a:hover {
		border: 2px solid var(--cp-text);
	}
</style>
