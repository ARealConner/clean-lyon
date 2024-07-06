<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import {
		Trash2,
		Recycle,
		Leaf,
		BarChart,
		FileText,
		Map,
		Book,
		Presentation,
		Info
	} from 'lucide-svelte';
	import { base } from '$app/paths';

	interface Statistic {
		icon: typeof Trash2;
		value: string;
		label: string;
	}

	const statistics: Statistic[] = [
		{ icon: Trash2, value: '61.2%', label: 'Waste Incinerated' },
		{ icon: Recycle, value: '28.2%', label: 'Recycling Rate' },
		{ icon: Leaf, value: '7.3%', label: 'Waste Landfilled' },
		{ icon: BarChart, value: '400+', label: 'Collection Points per 100k Residents' }
	];

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>CleanLyon: Urban Waste Management in Lyon, France</title>
</svelte:head>

<div class="relative min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
	<div class="absolute inset-0 z-0 opacity-10">
		<img
			src="{base}/images/lyon-cityscape.png"
			alt="Lyon Cityscape"
			class="h-full w-full object-cover"
		/>
	</div>
	<div class="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		{#if visible}
			<header class="mb-16 text-center" in:fade={{ duration: 1000, delay: 200 }}>
				<h1
					class="mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-6xl font-bold text-transparent"
				>
					CleanLyon
				</h1>
				<p class="mx-auto max-w-3xl text-2xl text-gray-700">
					Pioneering Urban Waste Management in Lyon, France
				</p>
			</header>

			<div class="mb-16" in:fade={{ duration: 1000, delay: 300 }}>
				<img
					src="{base}/images/waste-management-hero.png"
					alt="Waste Management in Lyon"
					class="h-auto w-full rounded-lg shadow-2xl"
				/>
			</div>

			<section class="relative mb-16" in:fade={{ duration: 1000, delay: 400 }}>
				<div class="overflow-hidden rounded-lg bg-white p-8 shadow-2xl md:p-12">
					<div class="relative z-10">
						<h2 class="mb-4 text-3xl font-semibold text-gray-800">Project Overview</h2>
						<p class="mb-4 text-lg text-gray-600">
							Our Interactive Qualifying Project (IQP) at Worcester Polytechnic Institute focused on
							analyzing Lyon's urban waste management system. We conducted extensive research,
							interviews, and on-site observations to understand the city's innovative approaches
							and their potential application in other urban environments.
						</p>
						<p class="text-lg text-gray-600">
							Through our study, we identified key factors contributing to Lyon's success in waste
							management, including efficient collection infrastructure, advanced recycling
							programs, and effective public engagement strategies.
						</p>
					</div>
					<div class="absolute right-0 top-0 z-0 h-full w-1/3 opacity-10">
						<img
							src="{base}/images/lyon-skyline.jpg"
							alt="Lyon Skyline"
							class="h-full w-full object-cover"
						/>
					</div>
				</div>
			</section>

			<section class="mb-16" in:fade={{ duration: 1000, delay: 600 }}>
				<h2 class="mb-8 text-center text-4xl font-semibold text-gray-800">Lyon Overview</h2>
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{#each statistics as stat, i}
						<div
							class="flex transform flex-col items-center justify-center rounded-lg bg-white p-6 shadow-xl transition-transform duration-300 hover:scale-105"
							in:fly={{ y: 50, duration: 500, delay: 200 * i }}
						>
							<svelte:component this={stat.icon} class="mb-4 h-24 w-24 text-green-500" />
							<span class="mb-2 text-4xl font-bold text-gray-800">{stat.value}</span>
							<span class="text-center text-sm text-gray-600">{stat.label}</span>
						</div>
					{/each}
				</div>
			</section>

			<section in:fade={{ duration: 1000, delay: 800 }}>
				<div
					class="relative overflow-hidden rounded-lg bg-gradient-to-r from-green-500 to-blue-500 p-8 text-white shadow-2xl"
				>
					<div class="relative z-10">
						<h2 class="mb-4 text-3xl font-semibold">Explore Our Findings</h2>
						<p class="mb-6 text-lg">
							Dive deeper into our research and discover how Lyon's waste management practices can
							inspire sustainable solutions for cities worldwide.
						</p>
						<div class="flex flex-wrap gap-4">
							<a
								href="/about"
								class="flex items-center rounded-full bg-white px-6 py-3 font-semibold text-gray-600 transition-colors hover:bg-gray-100"
							>
								<Info class="mr-2 h-5 w-5" /> About
							</a>
							<a
								href="/report"
								class="flex items-center rounded-full bg-white px-6 py-3 font-semibold text-green-600 transition-colors hover:bg-green-100"
							>
								<FileText class="mr-2 h-5 w-5" /> Read Full Report
							</a>
							<a
								href="/presentation"
								class="flex items-center rounded-full bg-white px-6 py-3 font-semibold text-orange-600 transition-colors hover:bg-orange-100"
							>
								<Presentation class="mr-2 h-5 w-5" /> View Presentation
							</a>
							<a
								href="/lyon-waste-map"
								class="flex items-center rounded-full bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-100"
							>
								<Map class="mr-2 h-5 w-5" /> Explore Waste Map
							</a>
							<a
								href="/waste-management-guide"
								class="flex items-center rounded-full bg-white px-6 py-3 font-semibold text-purple-600 transition-colors hover:bg-purple-100"
							>
								<Book class="mr-2 h-5 w-5" /> Management Guide
							</a>
						</div>
					</div>
				</div>
			</section>
		{/if}
	</div>
</div>
