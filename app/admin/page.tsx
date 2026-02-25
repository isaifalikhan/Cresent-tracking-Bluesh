
"use client";

import { motion } from "framer-motion";
import { 
  Package, 
  Clock, 
  TrendingUp, 
  Truck, 
  MoreVertical, 
  Filter, 
  Search,
  AlertCircle
} from "lucide-react";
import { shipments, systemEvents, stats } from "@/lib/dummy-data";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl backdrop-blur-sm"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-slate-400 text-sm font-medium">{stat.label}</span>
              {stat.status === "success" ? (
                <TrendingUp className="w-4 h-4 text-emerald-500" />
              ) : stat.status === "danger" ? (
                <AlertCircle className="w-4 h-4 text-rose-500" />
              ) : (
                <Package className="w-4 h-4 text-blue-500" />
              )}
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${
                stat.status === "success" ? "bg-emerald-500/10 text-emerald-400" :
                stat.status === "danger" ? "bg-rose-500/10 text-rose-400" :
                "bg-blue-500/10 text-blue-400"
              }`}>
                {stat.trend}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Table - Master Shipment List */}
        <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Master Shipment List</h2>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Search shipments..." 
                  className="bg-slate-800/50 border border-slate-700 rounded-lg pl-9 pr-4 py-1.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <button className="p-1.5 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900/80 text-slate-400 font-medium">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Origin</th>
                  <th className="px-4 py-3">Destination</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {shipments.map((shipment) => (
                  <tr key={shipment.id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-3 font-mono text-blue-400">{shipment.trackingNumber}</td>
                    <td className="px-4 py-3 text-slate-300">{shipment.origin}</td>
                    <td className="px-4 py-3 text-slate-300">{shipment.destination}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        shipment.status === "In Transit" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                        shipment.status === "Delivered" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                        shipment.status === "Delayed" ? "bg-rose-500/10 text-rose-400 border-rose-500/20" :
                        "bg-slate-500/10 text-slate-400 border-slate-500/20"
                      }`}>
                        {shipment.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-800 rounded">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Real-time Feed */}
        <div className="lg:col-span-1 bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm flex flex-col h-[500px]">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">System Events</h2>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-400">Live</span>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {systemEvents.map((event, i) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-3 items-start"
              >
                <div className="flex flex-col items-center gap-1 mt-1">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div className="w-0.5 h-full bg-slate-800 -mb-4"></div>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 w-full hover:border-slate-600 transition-colors cursor-default">
                  <p className="text-slate-200 text-sm">{event.message}</p>
                  <p className="text-slate-500 text-xs mt-1 font-mono">{event.time}</p>
                </div>
              </motion.div>
            ))}
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-3 items-start opacity-50"
              >
                <div className="flex flex-col items-center gap-1 mt-1">
                  <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                </div>
                <div className="bg-slate-800/30 p-3 rounded-lg border border-slate-700/30 w-full">
                  <p className="text-slate-400 text-sm">System Update Complete</p>
                  <p className="text-slate-600 text-xs mt-1 font-mono">Yesterday</p>
                </div>
              </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
