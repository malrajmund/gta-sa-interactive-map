// src/MapBox.js
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import gtasamap from '../../assets/gtasamap.webp'

mapboxgl.accessToken = 'pk.eyJ1IjoicmFqbWFsMTMzNyIsImEiOiJjbHoxa244bWQycm1jMnJzNmluNDZvYW50In0.UA9wDeoO0tzhqEqo18mObw';

const MapBox = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const imageCoordinates = [
        [-5, 5],
        [5, 5],
        [5, -5],
        [-5, -5]
    ];
    const centerCoordinates = [
        (imageCoordinates[0][0] + imageCoordinates[1][0]) / 2,
        (imageCoordinates[0][1] + imageCoordinates[3][1]) / 2
    ];

    useEffect(() => {
        if (map.current) return; // Initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: {
                version: 8,
                sources: {},
                layers: []
            },
            center: centerCoordinates,
            zoom: 5.8,
        });
        map.current.on('load', () => {
            map.current.addSource('game-map', {
                'type': 'image',
                'url': gtasamap,
                'coordinates': imageCoordinates
            });
            map.current.addLayer({
                'id': 'game-map-layer',
                'type': 'raster',
                'source': 'game-map',
            });
        });
    }, []);

    return (
        <div ref={mapContainer} className="map-container" />
    );
};

export default MapBox;
