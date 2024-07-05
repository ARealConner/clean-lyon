<script lang="ts">
	import { onMount } from 'svelte';
	import 'leaflet/dist/leaflet.css';
	import type { Map as LeafletMap } from 'leaflet';
	import { fetchCategoryData, generateHeatMapData, type MarkerCategory } from '$lib/fetchData';
	import { mapCategories } from '$lib/mapConfig';
	import '@fortawesome/fontawesome-free/css/all.min.css';

	let L: typeof import('leaflet') & { heatLayer: any };
	let map: LeafletMap;
	let layerControl: L.Control.Layers;
	let canvasRenderer: L.Canvas;
	let heatLayers: Record<string, L.Layer> = {};

	onMount(async () => {
		if (typeof window !== 'undefined') {
			const leaflet = await import('leaflet');
			// @ts-ignore
			await import('leaflet.heat');
			L = { ...leaflet, heatLayer: (window as any).L.heatLayer };

			map = L.map('map', {
				preferCanvas: true
			}).setView([45.75, 4.85], 13);

			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; OpenStreetMap contributors'
			}).addTo(map);

			canvasRenderer = L.canvas();

			// Create an empty layer control
			layerControl = L.control.layers({}, {}).addTo(map);

			// Fetch all category data first
			const categoryPromises = mapCategories.map((category) => fetchCategoryData(category));
			const categories = await Promise.all(categoryPromises);

			// Add marker layers first
			categories.forEach((category) => {
				addLayerToMap(category);
			});

			// Then add heat map layers
			for (const category of categories) {
				const heatMapData = await generateHeatMapData(category);
				addHeatMapLayer(category.name, heatMapData, category.color);
			}
		}
	});

	function addLayerToMap(category: MarkerCategory) {
		const layer = L.geoJSON(category.data, {
			pointToLayer: (feature, latlng) => {
				if (category.name === 'Garbage Bins') {
					return L.circle(latlng, {
						renderer: canvasRenderer,
						color: category.color,
						fillColor: category.color,
						fillOpacity: 0.7,
						radius: 10
					});
				} else {
					const icon = L.divIcon({
						html: `<i class="fas fa-${category.icon}" style="color: ${category.color};"></i>`,
						iconSize: [20, 20],
						className: 'custom-div-icon'
					});
					return L.marker(latlng, { icon });
				}
			},
			onEachFeature: (feature, layer) => {
				const popupContent = Object.entries(feature.properties)
					.map(([key, value]) => `<b>${key}:</b> ${value}`)
					.join('<br>');
				layer.bindPopup(popupContent);
			}
		});

		// Create custom HTML for layer control
		const layerControlHTML = `
			<span class="layer-control-item">
				<i class="fas fa-${category.icon}" style="color: ${category.color};"></i>
				${category.name}
			</span>
		`;

		// Add the layer to the map and the layer control
		if (category.name !== 'Garbage Bins') {
			layer.addTo(map);
		}
		layerControl.addOverlay(layer, layerControlHTML);
	}

	function addHeatMapLayer(categoryName: string, data: number[][], color: string) {
		const heatLayer = L.heatLayer(data, {
			radius: 40, // Increased from 25 to 40
			blur: 30, // Increased from 15 to 30
			maxZoom: 17,
			max: 1,
			gradient: { 0.2: '#ff0000', 0.4: '#ff7f00', 0.6: '#ffff00', 0.8: '#7fff00', 1: '#00ff00' }
		});

		heatLayers[categoryName] = heatLayer;

		const layerControlHTML = `
			<span class="layer-control-item">
				<i class="fas fa-fire" style="color: ${color};"></i>
				${categoryName} Heat Map
			</span>
		`;

		layerControl.addOverlay(heatLayer, layerControlHTML);
	}
</script>

<div id="map"></div>

<style>
	#map {
		height: 100vh;
	}
	:global(.custom-div-icon) {
		background: none;
		border: none;
	}
	:global(.custom-div-icon i) {
		font-size: 18px;
		text-shadow:
			0 0 3px #ffffff,
			0 0 5px #ffffff;
	}
	:global(.leaflet-control-layers-overlays label) {
		display: flex !important;
		align-items: center;
		margin-bottom: 5px;
	}
	:global(.leaflet-control-layers-overlays span) {
		display: flex !important;
		align-items: center;
		margin-left: 5px;
	}
	:global(.leaflet-control-layers-overlays .layer-control-item) {
		display: flex;
		align-items: center;
	}
	:global(.leaflet-control-layers-overlays .layer-control-item i) {
		margin-right: 5px;
		width: 20px;
		text-align: center;
	}
</style>
