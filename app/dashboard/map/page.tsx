"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const MapView = dynamic(() => import("@/components/dashboard/Map"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-slate-100 animate-pulse flex items-center justify-center text-slate-400">Loading Map...</div>
});

function MapContent() {
  const searchParams = useSearchParams();
  const vehicleId = searchParams.get('vehicle');
  
  // Logic to focus on vehicleId would go here if MapView supported it
  // For now, we just show the map

  return <MapView />;
}

export default function MapPage() {
  return (
    <div className="h-[calc(100vh-8rem)] w-full rounded-lg overflow-hidden border relative">
       <Suspense fallback={<div>Loading...</div>}>
         <MapContent />
       </Suspense>
       
       <div className="absolute top-4 right-4 z-[1000] bg-white p-4 rounded-lg shadow-lg max-w-xs">
         <h3 className="font-bold text-sm mb-2">Map Legend</h3>
         <div className="space-y-2 text-xs">
           <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-green-500"></div>
             <span>Moving</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-amber-500"></div>
             <span>Idle</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-red-500"></div>
             <span>Stopped</span>
           </div>
         </div>
       </div>
    </div>
  );
}
