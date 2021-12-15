<script lang="ts">
	import Navbar from '$lib/components/nav/Navbar.svelte';
	import '../app.css';
</script>

<Navbar />
<main class="flex flex-col justify-center items-center">
	<div class="layout-container">
		<div class="flex flex-col w-full pt-16 pb-16 content-padding">
			<slot />
		</div>
	</div>
</main>

<style>
	@media screen and (max-width: 1280px) {
		.content-padding {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
	}
</style>
