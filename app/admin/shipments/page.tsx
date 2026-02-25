
"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Download,
  Plus
} from "lucide-react";
import { shipments } from "@/lib/dummy-data";

export default function ShipmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Active Shipments</h1>
          <p className="text-slate-400 text-sm mt-1">Manage and track all ongoing logistics operations.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-lg shadow-blue-500/20">
            <Plus className="w-4 h-4" />
            New Shipment
          </button>
        </div>
      </div>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm">
        <div className="p-4 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search by ID, Origin, or Destination..." 
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors text-sm">
              <Filter className="w-4 h-4" />
              Status
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors text-sm">
              <Filter className="w-4 h-4" />
              Date
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900/80 text-slate-400 font-medium border-b border-slate-800">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Origin</th>
                <th className="px-6 py-4">Destination</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4">Est. Delivery</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {shipments.map((shipment, index) => (
                <motion.tr 
                  key={shipment.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-6 py-4 font-mono text-blue-400 font-medium">{shipment.trackingNumber}</td>
                  <td className="px-6 py-4 text-slate-300">{shipment.origin}</td>
                  <td className="px-6 py-4 text-slate-300">{shipment.destination}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      shipment.status === "In Transit" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                      shipment.status === "Delivered" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                      shipment.status === "Delayed" ? "bg-rose-500/10 text-rose-400 border-rose-500/20" :
                      "bg-slate-500/10 text-slate-400 border-slate-500/20"
                    }`}>
                      {shipment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{shipment.service}</td>
                  <td className="px-6 py-4 text-slate-300">{shipment.estimatedDelivery}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-white transition-colors p-1.5 hover:bg-slate-800 rounded-lg">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-slate-800 flex items-center justify-between text-sm text-slate-400">
          <span>Showing 5 of 12,405 shipments</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-slate-800 rounded hover:bg-slate-700 hover:text-white transition-colors disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 bg-slate-800 rounded hover:bg-slate-700 hover:text-white transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
