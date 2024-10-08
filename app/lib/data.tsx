const apiKeyThunderstorm = process.env.NEXT_PUBLIC_THUNDERFOREST;
const apiKeyMapbox = process.env.NEXT_PUBLIC_MAPBOX;

export interface MapsDetails {
    url?: string | undefined,
    urlForCode?: string | undefined,
    name?: string | undefined,
    license?: string | undefined,
    maxRequests?: string | undefined,
    site?: string | undefined,
}

export const maps: MapsDetails[] = [
    {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        name: 'OpenStreetMap Standard',
        license: 'ODbL (Open Database License)',
        maxRequests: 'Illimité, y compris pour un usage commercial',
        site: 'https://www.openstreetmap.org/',
    },
    {
        url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        name: 'OpenStreetMap Humanitarian',
        license: 'ODbL (Open Database License)',
        maxRequests: 'Illimité, y compris pour un usage commercial',
        site: 'https://www.openstreetmap.org/',
    },
    {
        url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
        name: 'Carto Voyager',
        license: 'CARTO License',
        maxRequests: 'Gratuit pour usage non commercial',
        site: 'https://carto.com/',
    },
    {
        url: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        name: 'Carto Light All',
        license: 'CARTO License',
        maxRequests: 'Gratuit pour usage non commercial',
        site: 'https://carto.com/',
    },
    {
        url: 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
        name: 'Carto Light No Labels',
        license: 'CARTO License',
        maxRequests: 'Gratuit pour usage non commercial',
        site: 'https://carto.com/',
    },
    {
        url: 'https://cartocdn_{s}.global.ssl.fastly.net/base-antique/{z}/{x}/{y}.png',
        name: 'Carto Antique',
        license: 'CARTO License',
        maxRequests: 'Gratuit pour usage non commercial',
        site: 'https://carto.com/',
    },
    {
        url: 'https://cartocdn_{s}.global.ssl.fastly.net/base-flatblue/{z}/{x}/{y}.png',
        name: 'Carto Flat Blue',
        license: 'CARTO License',
        maxRequests: 'Gratuit pour usage non commercial',
        site: 'https://carto.com/',
    },
    {
        url: 'https://cartocdn_{s}.global.ssl.fastly.net/base-midnight/{z}/{x}/{y}.png',
        name: 'Carto Midnight',
        license: 'CARTO License',
        maxRequests: 'Gratuit pour usage non commercial',
        site: 'https://carto.com/',
    },
    {
        url: 'https://api.mapbox.com/styles/v1/nicolastroadec/clu10mdy400nu01qwgizt8el8/tiles/512/{z}/{x}/{y}?access_token=' + apiKeyMapbox,
        urlForCode: 'https://api.mapbox.com/styles/v1/[YOUR_USERNAME]/clu10mdy400nu01qwgizt8el8/tiles/512/{z}/{x}/{y}?access_token=[YOUR_ACCESS_TOKEN]',
        name: 'Mapbox Custom Style',
        license: 'Propriétaire',
        maxRequests: '200 000 requêtes gratuites, par tuile, par mois',
        site: 'https://www.mapbox.com/',
    },
    {
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}',
        name: 'ArcGIS World Terrain Base',
        license: 'Esri World Imagery',
        maxRequests: 'Fond de carte gratuit pour usage non commercial, mais plus mis à jour',
        site: 'https://www.arcgis.com/',
    },
    {
        url: 'https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=' + apiKeyThunderstorm,
        urlForCode: 'https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=YOUR_API_KEY',
        name: 'Thunderforest Outdoors',
        license: 'Propriétaire',
        maxRequests: '150 000 requêtes gratuites par mois',
        site: 'https://www.thunderforest.com/',
    },
    {
        url: 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=' + apiKeyThunderstorm,
        urlForCode: 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=YOUR_API_KEY',
        name: 'Thunderforest Cycle',
        license: 'Propriétaire',
        maxRequests: '150 000 requêtes gratuites par mois',
        site: 'https://www.thunderforest.com/',
    },
    {
        url: 'https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=' + apiKeyThunderstorm,
        urlForCode: 'https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=YOUR_API_KEY',
        name: 'Thunderforest Transport Dark',
        license: 'Propriétaire',
        maxRequests: '150 000 requêtes gratuites par mois',
        site: 'https://www.thunderforest.com/',
    },
    {
        url: 'https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=' + apiKeyThunderstorm,
        urlForCode: 'https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=YOUR_API_KEY',
        name: 'Thunderforest Pioneer',
        license: 'Propriétaire',
        maxRequests: '150 000 requêtes gratuites par mois',
        site: 'https://www.thunderforest.com/',
    },
    {
        url: 'https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=' + apiKeyThunderstorm,
        urlForCode: 'https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=YOUR_API_KEY',
        name: 'Thunderforest Mobile Atlas',
        license: 'Propriétaire',
        maxRequests: '150 000 requêtes gratuites par mois',
        site: 'https://www.thunderforest.com/',
    },
    {
        url: 'https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=' + apiKeyThunderstorm,
        urlForCode: 'https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=YOUR_API_KEY',
        name: 'Thunderforest Neighbourhood',
        license: 'Propriétaire',
        maxRequests: '150 000 requêtes gratuites par mois',
        site: 'https://www.thunderforest.com/',
    },
    {
        url: 'https://{s}.tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=' + apiKeyThunderstorm,
        urlForCode: 'https://{s}.tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=YOUR_API_KEY',
        name: 'Thunderforest Atlas',
        license: 'Propriétaire',
        maxRequests: '150 000 requêtes gratuites par mois',
        site: 'https://www.thunderforest.com/',
    },
];