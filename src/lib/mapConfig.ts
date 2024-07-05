export const mapCategories = [
    {
        name: 'Compost Bins',
        color: 'green',
        url: 'https://data.grandlyon.com/geoserver/metropole-de-lyon/ows?SERVICE=WFS&VERSION=2.0.0&request=GetFeature&typename=metropole-de-lyon:gic_collecte.bornecompost&outputFormat=application/json&SRSNAME=EPSG:4171&startIndex=0&sortBy=gid',
        icon: 'leaf'
    },
    {
        name: 'Waste Collection Centers',
        color: 'blue',
        url: 'https://data.grandlyon.com/geoserver/metropole-de-lyon/ows?SERVICE=WFS&VERSION=2.0.0&request=GetFeature&typename=metropole-de-lyon:gip_proprete.gipdecheterie_3_0_0&outputFormat=application/json&SRSNAME=EPSG:4171&startIndex=0&sortBy=gid',
        icon: 'trash'
    },
    {
        name: 'Bottle Collection',
        color: 'orange',
        url: 'https://data.grandlyon.com/geoserver/metropole-de-lyon/ows?SERVICE=WFS&VERSION=2.0.0&request=GetFeature&typename=metropole-de-lyon:eco_ecologie.ecorebooteille&outputFormat=application/json&SRSNAME=EPSG:4171&startIndex=0&sortBy=gid',
        icon: 'wine-bottle'
    },
    {
        name: 'Glass Bins',
        color: 'purple',
        url: 'https://data.grandlyon.com/geoserver/metropole-de-lyon/ows?SERVICE=WFS&VERSION=2.0.0&request=GetFeature&typename=metropole-de-lyon:gic_collecte.siloverre&outputFormat=application/json&SRSNAME=EPSG:4171&startIndex=0&sortBy=gid',
        icon: 'wine-glass'
    },
    {
        name: 'Household Waste Drop-off',
        color: 'brown',
        url: 'https://data.grandlyon.com/geoserver/metropole-de-lyon/ows?SERVICE=WFS&VERSION=2.0.0&request=GetFeature&typename=metropole-de-lyon:gic_collecte.orduresmenageres&outputFormat=application/json&SRSNAME=EPSG:4171&startIndex=0&sortBy=gid',
        icon: 'home'
    },
    {
        name: 'Recycling Drop-off',
        color: '#DAA520', // Changed from 'yellow' to 'goldenrod'
        url: 'https://data.grandlyon.com/geoserver/metropole-de-lyon/ows?SERVICE=WFS&VERSION=2.0.0&request=GetFeature&typename=metropole-de-lyon:gic_collecte.collecteselective&outputFormat=application/json&SRSNAME=EPSG:4171&startIndex=0&sortBy=gid',
        icon: 'recycle'
    },
    {
        name: 'Garbage Bins',
        color: 'red',
        url: 'https://data.grandlyon.com/geoserver/metropole-de-lyon/ows?SERVICE=WFS&VERSION=2.0.0&request=GetFeature&typename=metropole-de-lyon:gin_nettoiement.gincorbeille&outputFormat=application/json&SRSNAME=EPSG:4171&startIndex=0&sortBy=gid',
        icon: 'trash-alt' // Added default icon
    },
];

export const heatMapCategories = mapCategories.map(category => ({
  name: `${category.name} Heat Map`,
  color: category.color,
  icon: 'fire',
  baseCategory: category.name
}));
