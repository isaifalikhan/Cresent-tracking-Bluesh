
"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Package,
  MapPin,
  Calendar,
  ArrowRight,
  Truck
} from "lucide-react";
import { shipments } from "@/lib/dummy-data";
import Link from "next/link";

export default function UserShipmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">My Shipments</h1>
          <p className="text-slate-400 text-sm mt-1">Track and manage your incoming and outgoing packages.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-lg shadow-blue-500/20">
            <Package className="w-4 h-4" />
            New Shipment
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 flex gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search by tracking ID, origin, or destination..." 
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition-colors flex items-center gap-2 text-sm">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        <div className="space-y-4">
          {shipments.slice(0, 5).map((shipment, index) => (
            <motion.div
              key={shipment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                    <Package className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-white">{shipment.id}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        shipment.status === "Delivered" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                        shipment.status === "In Transit" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                        shipment.status === "Delayed" ? "bg-red-500/10 text-red-400 border-red-500/20" :
                        "bg-amber-500/10 text-amber-400 border-amber-500/20"
                      }`}>
                        {shipment.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Calendar className="w-4 h-4" />
                      <span>Updated 2 hours ago</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex items-center gap-4 lg:px-8">
                  <div className="flex-1">
                    <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Origin</p>
                    <p className="text-slate-200 font-medium">{shipment.origin}</p>
                  </div>
                  <div className="hidden md:flex flex-col items-center flex-1 px-4">
                    <div className="w-full h-0.5 bg-slate-800 relative">
                      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-600" />
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1 bg-slate-900 rounded-full border border-slate-700">
                        <Truck className="w-3 h-3 text-slate-400" />
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">2 days remaining</p>
                  </div>
                  <div className="flex-1 text-right lg:text-left">
                    <p className="text-xs text-slate-500 uppercase font-semibold mb-1">Destination</p>
                    <p className="text-slate-200 font-medium">{shipment.destination}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-t lg:border-t-0 border-slate-800 pt-4 lg:pt-0">
                  <Link 
                    href={`/tracking/${shipment.id}`}
                    className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    Track Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
