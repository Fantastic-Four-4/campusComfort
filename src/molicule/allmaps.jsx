import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import img12 from "./map-marker.svg"

const Map = ({ locations }) => {
  useEffect(() => {
    // Check if the map container exists
    const mapContainer = document.getElementById('map');
    if (!mapContainer) {
      return;
    }

    // Check if the map is already initialized
    
    if (mapContainer._leaflet_id) {
      return;
    }

    // Get the coordinates for Kopargaon
    const kopargaonCoordinates = [19.8804, 74.4747];

    // Create a map centered at Kopargaon with a zoom level of 10
    const map = L.map('map').setView(kopargaonCoordinates, 12);

    // Add a tile layer (you can replace this URL with other tile providers)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Define a custom icon for markers using Material-UI
    const customIcon = new L.divIcon({
        className: 'custom-icon',
        html: `<div><img src=${img12} alt="location-icon" style="width: 32px; height: 32px;"/></div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });
    // Add markers for each location in the array using the custom icon
    locations.forEach((location) => {
      L.marker([location.latitude, location.longitude], { icon: customIcon })
        .addTo(map)
        .bindPopup(<p>${location.name}</p>);
    });
  }, [locations]);

  return <div id="map" style={{ height: "100vh" }} />;
};

export default Map;