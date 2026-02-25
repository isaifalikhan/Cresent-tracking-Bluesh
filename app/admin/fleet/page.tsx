
"use client";

import { motion } from "framer-motion";
import { 
  Truck, 
  Plane, 
  Ship, 
  MoreVertical, 
  MapPin, 
  Fuel,
  AlertCircle
} from "lucide-react";
import { fleetVehicles } from "@/lib/dummy-data";

export default function FleetPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case "Truck": return <Truck className="w-5 h-5" />;
      case "Van": return <Truck className="w-5 h-5" />; // Using Truck for Van as generic vehicle
      case "Plane": return <Plane className="w-5 h-5" />;
      case "Ship": return <Ship className="w-5 h-5" />;
      default: return <Truck className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Fleet Management</h1>
          <p className="text-slate-400 text-sm mt-1">Monitor vehicle status and driver assignments.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-sm text-slate-300">Active: 42</span>
            </div>
            <div className="w-px h-4 bg-slate-800"></div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              <span className="text-sm text-slate-300">Maintenance: 3</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fleetVehicles.map((vehicle, index) => (
          <motion.div
            key={vehicle.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-lg ${
                  vehicle.type === 'Plane' ? 'bg-sky-500/10 text-sky-400' :
                  vehicle.type === 'Ship' ? 'bg-indigo-500/10 text-indigo-400' :
                  'bg-emerald-500/10 text-emerald-400'
                }`}>
                  {getIcon(vehicle.type)}
                </div>
                <div>
                  <h3 className="font-bold text-white tracking-wide">{vehicle.number}</h3>
                  <p className="text-xs text-slate-400">{vehicle.type}</p>
                </div>
              </div>
              <button className="text-slate-500 hover:text-white transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm border-b border-slate-800/50 pb-2">
                <span className="text-slate-500">Status</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  vehicle.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                  vehicle.status === 'Maintenance' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' :
                  'bg-slate-500/10 text-slate-400 border border-slate-500/20'
                }`}>
                  {vehicle.status}
                </span>
              </div>
              
              <div className="flex items-center justify-between text-sm border-b border-slate-800/50 pb-2">
                <span className="text-slate-500">Driver</span>
                <span className="text-slate-300">{vehicle.driver}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Location
                </span>
                <span className="text-slate-300">{vehicle.location}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500 flex items-center gap-1">
                  <Fuel className="w-3 h-3" /> Fuel Level
                </span>
                <span className={`font-mono ${
                  vehicle.fuel === 'N/A' ? 'text-slate-500' : 
                  parseInt(vehicle.fuel) < 50 ? 'text-orange-400' : 'text-emerald-400'
                }`}>
                  {vehicle.fuel}
                </span>
              </div>
            </div>

            {vehicle.status === 'Maintenance' && (
               <div className="mt-4 p-2 bg-rose-500/5 border border-rose-500/10 rounded-lg flex items-center gap-2 text-xs text-rose-400">
                 <AlertCircle className="w-3 h-3" />
                 <span>Scheduled maintenance until Oct 25</span>
               </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
