
"use client";

import { motion } from "framer-motion";
import { 
  Package, 
  Truck, 
  TrendingUp, 
  Clock, 
  AlertCircle,
  ArrowRight,
  MapPin
} from "lucide-react";
import Link from "next/link";
import { stats } from "@/lib/dummy-data";

export default function UserDashboard() {
  // Filter stats for user view (simplified)
  const userStats = [
    { label: "My Active Shipments", value: "12", trend: "+2 this week", icon: Package, color: "text-blue-400", bg: "bg-blue-500/10" },
    { label: "In Transit", value: "8", trend: "On Schedule", icon: Truck, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { label: "Pending Actions", value: "3", trend: "Requires attention", icon: AlertCircle, color: "text-amber-400", bg: "bg-amber-500/10" },
    { label: "Total Spend", value: "$45k", trend: "YTD", icon: TrendingUp, color: "text-indigo-400", bg: "bg-indigo-500/10" },
  ];

  const recentShipments = [
    { id: "SH-8821", origin: "New York, US", destination: "London, UK", status: "In Transit", eta: "2 days" },
    { id: "SH-9920", origin: "Tokyo, JP", destination: "Singapore, SG", status: "Delivered", eta: "Arrived" },
    { id: "SH-7712", origin: "Berlin, DE", destination: "Paris, FR", status: "Processing", eta: "Pending" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Welcome back, John</h1>
        <p className="text-slate-400 text-sm mt-1">Here's what's happening with your logistics today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {userStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl backdrop-blur-sm hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                stat.trend.includes("+") || stat.trend.includes("On") ? "bg-emerald-500/10 text-emerald-400" : 
                stat.trend.includes("-") || stat.trend.includes("Requires") ? "bg-amber-500/10 text-amber-400" : "bg-slate-800 text-slate-400"
              }`}>
                {stat.trend}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-sm text-slate-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Recent Shipments</h2>
            <Link href="/dashboard/shipments" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
            <div className="divide-y divide-slate-800">
              {recentShipments.map((shipment, i) => (
                <div key={shipment.id} className="p-4 hover:bg-slate-800/30 transition-colors flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                      <Package className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{shipment.id}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span>{shipment.origin}</span>
                        <ArrowRight className="w-3 h-3" />
                        <span>{shipment.destination}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border mb-1 ${
                      shipment.status === "Delivered" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                      shipment.status === "In Transit" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                      "bg-amber-500/10 text-amber-400 border-amber-500/20"
                    }`}>
                      {shipment.status}
                    </span>
                    <p className="text-xs text-slate-500">{shipment.eta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions / Fleet Status */}
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-white">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-4">
            <Link href="/dashboard/shipments" className="p-4 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transition-all hover:-translate-y-1 group">
              <div className="flex items-center justify-between mb-2">
                <Package className="w-6 h-6 text-white" />
                <ArrowRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="font-semibold text-white">Track a Package</h3>
              <p className="text-sm text-blue-100/80">Enter ID to track instantly</p>
            </Link>
            
            <Link href="/dashboard/fleet" className="p-4 bg-slate-800 border border-slate-700 rounded-xl hover:border-slate-600 transition-all hover:-translate-y-1 group">
              <div className="flex items-center justify-between mb-2">
                <Truck className="w-6 h-6 text-emerald-400" />
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="font-semibold text-white">Manage Fleet</h3>
              <p className="text-sm text-slate-400">View active vehicles</p>
            </Link>

            <button className="p-4 bg-slate-800 border border-slate-700 rounded-xl hover:border-slate-600 transition-all hover:-translate-y-1 group text-left">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-6 h-6 text-amber-400" />
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:translate-x-1 transition-transform" />
              </div>
              <h3 className="font-semibold text-white">Schedule Pickup</h3>
              <p className="text-sm text-slate-400">Book a new shipment</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
