<script lang="ts">
	import "../app.css";
	import { page } from '$app/stores';
	import { base } from '$app/paths';  // Add this import
	import { Menu, X, Sun, Moon, Home, Info, FileText, Map, Book, ExternalLink, Presentation } from 'lucide-svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let isMenuOpen = false;
	let isDarkMode = false;
	let y = 0;
	let isFooterVisible = false;

	onMount(() => {
		// This will make it based off of system settings
	//   isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	//   document.documentElement.classList.toggle('dark-mode', isDarkMode);
		isFooterVisible = true;
	});
  
	$: isScrolled = y > 20;
  
	function toggleDarkMode() {
	  isDarkMode = !isDarkMode;
	  document.documentElement.classList.toggle('dark-mode');
	}
  
	const menuItems = [
	  { href: `${base}/`, label: 'Home', icon: Home },
	  { href: `${base}/about`, label: 'About', icon: Info },
	  { href: `${base}/report`, label: 'Report', icon: FileText },
	  { href: `${base}/presentation`, label: 'Presentation', icon: Presentation },
	  { href: `${base}/lyon-waste-map`, label: 'Waste Map', icon: Map },
	  { href: `${base}/waste-management-guide`, label: 'Management Guide', icon: Book }
	];

	const currentYear = new Date().getFullYear();

	// Add this line to create a prop for controlling the container
	export let useContainer = false;
</script>

<svelte:window bind:scrollY={y}/>

<nav class="fixed w-full z-50 transition-all duration-500 ease-in-out {isScrolled ? 'bg-white/70 backdrop-blur-lg' : 'bg-transparent'}" 
	   class:py-4={!isScrolled} class:py-2={isScrolled}>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	  <div class="flex justify-between items-center">
		<a href="{base}/" class="text-4xl font-black tracking-tighter transition-all duration-300 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
		  Clean<span class="text-yellow-400">Lyon</span>
		</a>
		<div class="hidden md:flex space-x-2">
		  {#each menuItems as item}
			<a
			  href={item.href}
			  class="group px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out flex items-center space-x-2 hover:bg-black/10 hover:backdrop-blur-lg
			  {$page.url.pathname === item.href 
				? 'bg-black/20 text-black backdrop-blur-lg' 
				: `${isScrolled ? 'text-gray-700' : 'text-black'}`}"
			>
			  <svelte:component this={item.icon} class="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
			  <span>{item.label}</span>
			</a>
		  {/each}
		  <button on:click={toggleDarkMode} 
			class="p-2 rounded-full hover:bg-black/10 hover:backdrop-blur-lg transition-all duration-300 text-yellow-400"
			in:slide={{delay: 300, duration: 400, easing: cubicInOut}}
		  >
			{#if isDarkMode}
			  <Sun class="w-5 h-5" />
			{:else}
			  <Moon class="w-5 h-5" />
			{/if}
		  </button>
		</div>
		<button on:click={() => isMenuOpen = !isMenuOpen} 
		  class="md:hidden p-2 rounded-full hover:bg-black/10 hover:backdrop-blur-lg transition-all duration-300 {isScrolled ? 'text-gray-700' : 'text-black'}"
		  aria-label="Toggle menu">
		  {#if isMenuOpen}
			<X class="w-6 h-6" />
		  {:else}
			<Menu class="w-6 h-6" />
		  {/if}
		</button>
	  </div>
	</div>
  
	{#if isMenuOpen}
	  <div transition:fly="{{ y: -20, duration: 300, easing: cubicInOut }}" class="md:hidden" id="mobile-menu">
		<div class="px-2 pt-2 pb-3 space-y-1 bg-white/70 backdrop-blur-lg">
		  {#each menuItems as item}
			<a
			  href={item.href}
			  class="block px-3 py-2 rounded-full text-base font-medium transition-all duration-300 ease-in-out flex items-center space-x-2
			  {$page.url.pathname === item.href 
				? 'bg-gradient-to-r from-green-400 to-blue-500 text-white' 
				: 'text-gray-700 hover:bg-black/10'}"
			>
			  <svelte:component this={item.icon} class="w-5 h-5" />
			  <span>{item.label}</span>
			</a>
		  {/each}
		  <button on:click={toggleDarkMode} class="w-full text-left px-3 py-2 rounded-full text-base font-medium transition-all duration-300 ease-in-out text-gray-700 hover:bg-black/10 flex items-center space-x-2">
			{#if isDarkMode}
			  <Sun class="w-5 h-5" />
			{:else}
			<Moon class="w-5 h-5" />
			{/if}
			<span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
		  </button>
		</div>
	  </div>
	{/if}
  </nav>
  
  <main class="pt-16 min-h-screen bg-gradient-to-br from-green-50 to-blue-50 transition-all duration-500">
	{#if useContainer}
	  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
		<div class="glassmorphism p-8 rounded-3xl">
		  <slot></slot>
		</div>
	  </div>
	{:else}
	  <slot></slot>
	{/if}
  </main>

{#if isFooterVisible}
<footer class="bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white py-12" transition:fade={{ duration: 1000 }}>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <div class="flex flex-col justify-between h-full">
        <div>
          <div class="w-full max-w-xs mb-4">
            <svg class="w-full h-auto" viewBox="0 0 400 120" preserveAspectRatio="xMidYMid meet">
              <use xlink:href="/WPI_logo.svg#wpi-logo"></use>
            </svg>
          </div>
          <div class="text-lg font-semibold tracking-wide">
            Worcester Polytechnic Institute
            <span class="block text-yellow-300">Global Projects Program</span>
          </div>
        </div>
        <p class="text-sm text-green-100 max-w-md mt-4">
          Empowering students to make a global impact through innovative projects and research.
        </p>
      </div>
      <div class="flex flex-col justify-between h-full">
        <div>
          <h3 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 mb-2">
            CleanLyon Team
          </h3>
          <p class="text-lg mb-4">International Qualifying Project {currentYear}</p>
          <a href="https://www.wpi.edu" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-green-700 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-all duration-300">
            Visit Project Page
            <ExternalLink class="w-5 h-5 ml-2" />
          </a>
        </div>
        <p class="text-sm text-green-100 italic mt-4">
          This work is freely available for academic and non-commercial use.
        </p>
      </div>
    </div>
    <div class="mt-8 pt-6 border-t border-white/10 text-center text-sm text-green-100">
      © {currentYear} CleanLyon Team. All rights reserved.
    </div>
  </div>
</footer>
{/if}

<style lang="postcss">
	:global(body) {
		@apply m-0 p-0 font-sans text-gray-900;
	}

	:global(.dark-mode) {
		filter: invert(0.9) hue-rotate(90deg) brightness(1.1) contrast(1);
	}

	:global(.dark-mode img),
	:global(.dark-mode video) {
		filter: invert(0.9) hue-rotate(-90deg) brightness(1.1) contrast(1);
	}

	:global(.dark-mode footer) {
		filter: invert(0.1) hue-rotate(-90deg) brightness(0.9) contrast(1);
	}

	footer {
		position: relative;
		overflow: hidden;
	}

	footer::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, #3b82f6, #10b981, #3b82f6);
		animation: shimmer 2s infinite linear;
	}

	@keyframes shimmer {
		0% { background-position: 0% 0%; }
		100% { background-position: 200% 0%; }
	}

	:global(.dark-mode) footer::before {
		filter: invert(1) hue-rotate(180deg);
	}
</style>