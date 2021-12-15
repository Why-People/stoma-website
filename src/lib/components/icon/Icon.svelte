<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	export let icon: SvelteComponent;
</script>

<div on:click>
	<svelte:component this={icon} />
</div>

<style>
	div {
		width: 32px;
		height: 32px;
	}
</style>
