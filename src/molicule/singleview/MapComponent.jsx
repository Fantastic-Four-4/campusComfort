import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export function MapComponent({ address }) {
  const [location, setLocation] = useState([51.505, -0.09]); // Default to some location

  function SetViewOnClick({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
  }
  
  useEffect(() => {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`)
      .then((response) => response.json())
      .then((data) => {
        if (data[0]) {
          setLocation([data[0].lat, data[0].lon]);
        }
      });
  }, [address]);

  return (
    <MapContainer
    center={location} zoom={14} style={{ width: '100%', height: '100vh' }}
    >
      <SetViewOnClick coords={location} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={location}></Marker>
      
    </MapContainer>
  );
}
