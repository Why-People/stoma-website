<script lang="ts">
	export let isOpen: boolean;
	// Make sure drop-out animation doesn't play on page load
	let showContent = isOpen;
	$: {
		if (!isOpen) {
			setTimeout(() => (showContent = false), 500);
		} else {
			showContent = true;
		}
	}
</script>

{#if showContent}
	<div class={`${isOpen ? 'drop-open drop-down-container' : 'drop-closed'}`}>
		<slot />
	</div>
{/if}

<style>
	.drop-open {
		height: 100vh;
		overflow-y: auto;
		animation: drop-in 0.5s ease-in-out;
	}

	@keyframes drop-in {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	.drop-closed {
		visibility: hidden;
		opacity: 0;
		height: 0;
		animation: drop-out 0.5s ease-in-out;
	}

	@keyframes drop-out {
		from {
			height: 75vh;
			visibility: visible;
			opacity: 1;
		}
		to {
			height: 0;
			visibility: hidden;
		}
	}

	.drop-down-container {
		margin-top: 1rem;
		/* Note: this is a hack to allow for complete scrolling of the dropdown menu if needed */
		padding-bottom: clamp(10rem, 15rem - 50%, 15rem);
	}
</style>
