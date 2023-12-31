<script>
	import { pageLoading } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => pageLoading.set(false));
</script>

<h1>Projects</h1>
