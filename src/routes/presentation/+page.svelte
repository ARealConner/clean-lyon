<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';

	let totalSlides = 23;
	let loadedSlides = 0;
	let slides: string[] = [];
	let presentationContainer: HTMLElement;

	function toggleFullScreen() {
		if (!document.fullscreenElement) {
			presentationContainer.requestFullscreen().catch((err) => {
				console.error(`Error attempting to enable full-screen mode: ${err.message}`);
			});
		} else {
			document.exitFullscreen();
		}
	}

	onMount(async () => {
		register();

		for (let i = 1; i <= totalSlides; i++) {
			slides = [...slides, `/slides/Slide${i}.jpg`];
			loadedSlides++;
		}
	});
</script>

<div class="presentation-container" bind:this={presentationContainer}>
	{#if loadedSlides > 0}
		<swiper-container navigation="true" pagination="true" scrollbar="true">
			{#each slides as slide}
				<swiper-slide>
					<img src={slide} alt="Presentation Slide" class="h-auto w-full" />
				</swiper-slide>
			{/each}
		</swiper-container>
		<div class="fullscreen-btn-container">
			<button on:click={toggleFullScreen} class="fullscreen-btn" aria-label="Toggle fullscreen">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-6 w-6"
				>
					<path
						d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
					/>
				</svg>
			</button>
		</div>
	{:else}
		<p>Loading slides...</p>
	{/if}
</div>

<style>
	.presentation-container {
		max-width: 100%;
		width: 100%;
		height: 81vh;
		margin: 0 auto;
		position: relative;
	}
	:global(swiper-container) {
		width: 100%;
		height: 100%;
	}
	:global(swiper-slide) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	:global(swiper-slide img) {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}
	:global(swiper-container::part(button-prev)),
	:global(swiper-container::part(button-next)) {
		color: #3b82f6;
	}
	:global(swiper-container::part(bullet-active)) {
		background: #3b82f6;
	}
	.fullscreen-btn-container {
		position: absolute;
		bottom: 20px;
		right: 20px;
		z-index: 10;
	}
	.fullscreen-btn {
		background-color: rgba(255, 255, 255, 0.7);
		color: #64748b;
		padding: 0.5rem;
		border-radius: 50%;
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		cursor: pointer;
	}
	.fullscreen-btn:hover {
		color: #3b82f6;
		background-color: rgba(255, 255, 255, 0.9);
		transform: scale(1.1);
	}
	.fullscreen-btn:focus {
		outline: none;
		box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
	}
	.fullscreen-btn svg {
		width: 1.5rem;
		height: 1.5rem;
	}
	:global(.presentation-container:fullscreen) {
		background-color: white;
		max-width: none;
		padding: 0;
	}
	:global(.presentation-container:fullscreen .fullscreen-btn-container) {
		bottom: 40px;
		right: 40px;
	}
</style>
