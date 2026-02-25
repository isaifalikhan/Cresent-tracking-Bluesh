
"use client";

import { motion } from "framer-motion";
import { 
  Truck, 
  MapPin, 
  Fuel, 
  Navigation,
  Clock,
  Battery
} from "lucide-react";
import { fleetVehicles } from "@/lib/dummy-data";

export default function UserFleetPage() {
  // Filter for "my" vehicles (simulated)
  const myVehicles = fleetVehicles.slice(0, 3); 

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">My Fleet</h1>
          <p className="text-slate-400 text-sm mt-1">Real-time status of your assigned vehicles.</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 bg-slate-900 rounded-lg border border-slate-800 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm text-slate-300">Live Updates Active</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Map Placeholder */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden h-[400px] relative group">
          <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-74.006,40.7128,12,0/800x600?access_token=pk.eyJ1IjoiZHVtbXkiLCJhIjoiY2w4ZHVtbXgifQ')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-500" />
              Fleet Overview
            </h3>
            <p className="text-slate-400 text-sm">3 vehicles currently active</p>
          </div>
          
          {/* Simulated Map Markers */}
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-ping" />
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
          
          <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-ping" />
          <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
        </div>

        {/* Vehicle List */}
        <div className="space-y-4 overflow-y-auto h-[400px] pr-2 custom-scrollbar">
          {myVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors shadow-lg group-hover:shadow-blue-900/20">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">{vehicle.number}</h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="px-2 py-0.5 bg-slate-800 rounded-full border border-slate-700">{vehicle.type}</span>
                      <span>•</span>
                      <span>{vehicle.driver}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                  vehicle.status === "Active" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                }`}>
                  {vehicle.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-800/50 rounded-lg text-slate-400">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">Location</p>
                    <p className="text-sm text-slate-200 truncate max-w-[120px]">{vehicle.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-800/50 rounded-lg text-slate-400">
                    <Fuel className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-semibold">Fuel Level</p>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${parseInt(vehicle.fuel) > 20 ? "bg-emerald-500" : "bg-red-500"}`}
                          style={{ width: vehicle.fuel !== "N/A" ? vehicle.fuel : "0%" }}
                        />
                      </div>
                      <span className="text-sm text-slate-200">{vehicle.fuel}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
