<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import { Trash2, Recycle, Leaf, BarChart, FileText, Map, Book, Presentation, Info } from 'lucide-svelte';
  
    interface Statistic {
      icon: typeof Trash2;
      value: string;
      label: string;
    }
  
    const statistics: Statistic[] = [
      { icon: Trash2, value: "61.2%", label: "Waste Incinerated" },
      { icon: Recycle, value: "28.2%", label: "Recycling Rate" },
      { icon: Leaf, value: "7.3%", label: "Waste Landfilled" },
      { icon: BarChart, value: "400+", label: "Collection Points per 100k Residents" },
    ];
  
    let visible = false;
  
    onMount(() => {
      visible = true;
    });
</script>
  
<svelte:head>
  <title>CleanLyon: Urban Waste Management in Lyon, France</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 relative">
  <div class="absolute inset-0 z-0 opacity-10">
    <img src="/images/lyon-cityscape.png" alt="Lyon Cityscape" class="object-cover w-full h-full" />
  </div>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {#if visible}
      <header class="text-center mb-16" in:fade={{ duration: 1000, delay: 200 }}>
        <h1 class="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
          CleanLyon
        </h1>
        <p class="text-2xl text-gray-700 max-w-3xl mx-auto">
          Pioneering Urban Waste Management in Lyon, France
        </p>
      </header>

      <div class="mb-16" in:fade={{ duration: 1000, delay: 300 }}>
        <img src="/images/waste-management-hero.png" alt="Waste Management in Lyon" class="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <section class="mb-16 relative" in:fade={{ duration: 1000, delay: 400 }}>
        <div class="bg-white rounded-lg shadow-2xl p-8 md:p-12 overflow-hidden">
          <div class="relative z-10">
            <h2 class="text-3xl font-semibold mb-4 text-gray-800">Project Overview</h2>
            <p class="text-gray-600 mb-4 text-lg">
              Our International Qualifying Project (IQP) at Worcester Polytechnic Institute focused on analyzing Lyon's urban waste management system. We conducted extensive research, interviews, and on-site observations to understand the city's innovative approaches and their potential application in other urban environments.
            </p>
            <p class="text-gray-600 text-lg">
              Through our study, we identified key factors contributing to Lyon's success in waste management, including efficient collection infrastructure, advanced recycling programs, and effective public engagement strategies.
            </p>
          </div>
          <div class="absolute top-0 right-0 w-1/3 h-full opacity-10 z-0">
            <img src="/images/lyon-skyline.jpg" alt="Lyon Skyline" class="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      <section class="mb-16" in:fade={{ duration: 1000, delay: 600 }}>
        <h2 class="text-4xl font-semibold mb-8 text-center text-gray-800">Lyon Overview</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {#each statistics as stat, i}
            <div class="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300" in:fly="{{ y: 50, duration: 500, delay: 200 * i }}">
              <svelte:component this={stat.icon} class="w-24 h-24 mb-4 text-green-500" />
              <span class="text-4xl font-bold text-gray-800 mb-2">{stat.value}</span>
              <span class="text-sm text-gray-600 text-center">{stat.label}</span>
            </div>
          {/each}
        </div>
      </section>

      <section in:fade={{ duration: 1000, delay: 800 }}>
        <div class="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-2xl p-8 text-white relative overflow-hidden">
          <div class="relative z-10">
            <h2 class="text-3xl font-semibold mb-4">Explore Our Findings</h2>
            <p class="mb-6 text-lg">
              Dive deeper into our research and discover how Lyon's waste management practices can inspire sustainable solutions for cities worldwide.
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="/about" class="bg-white text-gray-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center">
                <Info class="w-5 h-5 mr-2" /> About
              </a>
              <a href="/report" class="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition-colors flex items-center">
                <FileText class="w-5 h-5 mr-2" /> Read Full Report
              </a>
              <a href="/presentation" class="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-100 transition-colors flex items-center">
                <Presentation class="w-5 h-5 mr-2" /> View Presentation
              </a>
              <a href="/lyon-waste-map" class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors flex items-center">
                <Map class="w-5 h-5 mr-2" /> Explore Waste Map
              </a>
              <a href="/waste-management-guide" class="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors flex items-center">
                <Book class="w-5 h-5 mr-2" /> Management Guide
              </a>
            </div>
          </div>
        </div>
      </section>
    {/if}
  </div>
</div>