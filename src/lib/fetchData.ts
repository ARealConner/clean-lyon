import type { GeoJSON } from 'leaflet';
import { mapCategories } from './mapConfig';

export interface MarkerCategory {
    name: string;
    color: string;
    data: GeoJSON.FeatureCollection;
    icon?: string;
}

async function fetchGeoJSON(url: string): Promise<GeoJSON.FeatureCollection> {
    const response = await fetch(url);
    return await response.json();
}

// Define a bounding box for Lyon
const lyonBoundingBox = {
    north: 46.0049,  
    south: 45.5136,  
    east: 5.1794,    
    west: 4.5191     
};

// Function to check if a point is within the bounding box
function isWithinLyon(coordinates: number[]): boolean {
    const [lon, lat] = coordinates;
    return (
        lat >= lyonBoundingBox.south &&
        lat <= lyonBoundingBox.north &&
        lon >= lyonBoundingBox.west &&
        lon <= lyonBoundingBox.east
    );
}

// Filter function for GeoJSON features
function filterFeatures(feature: GeoJSON.Feature): boolean {
    if (feature.geometry.type === 'Point') {
        return isWithinLyon(feature.geometry.coordinates);
    }
    return false;
}

export async function fetchCategoryData(category: typeof mapCategories[0]): Promise<MarkerCategory> {
    const rawData = await fetchGeoJSON(category.url);
    const filteredData: GeoJSON.FeatureCollection = {
        type: 'FeatureCollection',
        features: rawData.features.filter(filterFeatures)
    };
    return {
        ...category,
        data: filteredData
    };
}

export async function generateHeatMapData(category: MarkerCategory): Promise<number[][]> {
  return category.data.features.map(feature => {
    if (feature.geometry.type === 'Point') {
        const coords = feature.geometry.coordinates;
        return [coords[1], coords[0], 1]; // [lat, lng, intensity]
    }
    return [0, 0, 0]; // Return a default value if the geometry type is not 'Point'
  });
}