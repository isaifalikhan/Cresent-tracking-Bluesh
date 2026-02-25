"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { dummyVehicles } from "@/lib/dummy-data";
import L from "leaflet";
import { useEffect, useState } from "react";

// Fix for default marker icon in Next.js
const icon = L.icon({
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// We need to create a custom icon component or just use default with fix
// Since I don't have the images, I'll use a CDN or just standard DivIcon if needed.
// But leaflet usually pulls from unpkg. Let's try to set default options.

export default function MapView() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Fix Leaflet's default icon path issues
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  if (!mounted) return <div className="h-full w-full bg-slate-100 animate-pulse rounded-lg flex items-center justify-center text-slate-400">Loading Map...</div>;

  // Center map on Karachi as per dummy data
  const center = { lat: 24.8607, lng: 67.0011 };

  return (
    <MapContainer center={[center.lat, center.lng]} zoom={12} scrollWheelZoom={true} className="h-full w-full rounded-lg z-0">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {dummyVehicles.map((vehicle) => (
        <Marker 
          key={vehicle.id} 
          position={[vehicle.location.lat, vehicle.location.lng]}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-brand-green">{vehicle.name}</h3>
              <p className="text-sm text-slate-600">{vehicle.plate}</p>
              <p className="text-xs mt-1">Status: <span className="font-medium capitalize">{vehicle.status}</span></p>
              <p className="text-xs">Speed: {vehicle.speed} km/h</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
