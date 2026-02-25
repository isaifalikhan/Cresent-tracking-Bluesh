"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  MapPin,
  Navigation,
  Gauge,
  Bell,
  Settings,
  BarChart3,
  Users,
  Truck,
} from "lucide-react";

const dashboardFeatures = [
  { icon: MapPin, label: "Live Map", active: true },
  { icon: Navigation, label: "Routes" },
  { icon: Gauge, label: "Metrics" },
  { icon: Bell, label: "Alerts" },
  { icon: BarChart3, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

const sidebarItems = [
  { icon: Truck, label: "Fleet Overview", count: 247 },
  { icon: Users, label: "Drivers", count: 189 },
  { icon: MapPin, label: "Active Routes", count: 42 },
  { icon: Bell, label: "Alerts", count: 3, alert: true },
];

export function PlatformPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-brand-green-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <FadeInView>
              <Badge variant="brand" className="mb-6">
                Live Platform
              </Badge>
            </FadeInView>
            
            <FadeInView delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful Dashboard at{" "}
                <span className="text-brand-green">Your Fingertips</span>
              </h2>
            </FadeInView>
            
            <FadeInView delay={0.2}>
              <p className="text-lg text-slate-300 mb-8">
                Our intuitive web and mobile dashboard gives you complete visibility 
                and control over your entire fleet. Access real-time data, generate 
                reports, and manage alerts from anywhere.
              </p>
            </FadeInView>

            <FadeInView delay={0.3}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Real-time tracking map",
                  "Custom report builder",
                  "Multi-user access",
                  "Mobile app available",
                  "API integration",
                  "White-label options",
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 text-slate-300"
                  >
                    <span className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 bg-brand-green rounded-full" />
                    </span>
                    {feature}
                  </motion.div>
                ))}
              </div>
            </FadeInView>
          </div>

          {/* Dashboard Mockup */}
          <FadeInView delay={0.3} direction="left">
            <div className="bg-slate-950 rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
              {/* Browser chrome */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-slate-700 rounded-md px-3 py-1 text-xs text-slate-400 text-center">
                    dashboard.crescenttracking.com
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="flex h-80">
                {/* Sidebar */}
                <div className="w-48 bg-slate-900 border-r border-slate-800 p-4 hidden sm:block">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-white text-sm">Crescent</span>
                  </div>
                  
                  <nav className="space-y-1">
                    {sidebarItems.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                          item.alert
                            ? "bg-brand-red/10 text-brand-red"
                            : "text-slate-400 hover:bg-slate-800 hover:text-white"
                        } transition-colors cursor-pointer`}
                      >
                        <div className="flex items-center gap-2">
                          <item.icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </div>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            item.alert
                              ? "bg-brand-red text-white"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          {item.count}
                        </span>
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Main content */}
                <div className="flex-1 p-4">
                  {/* Top nav */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {dashboardFeatures.map((feature) => (
                        <button
                          key={feature.label}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                            feature.active
                              ? "bg-brand-green text-white"
                              : "text-slate-400 hover:bg-slate-800 hover:text-white"
                          }`}
                        >
                          <feature.icon className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">{feature.label}</span>
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs text-slate-400">Live</span>
                    </div>
                  </div>

                  {/* Map area */}
                  <div className="bg-slate-800 rounded-xl h-48 relative overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full">
                      <defs>
                        <pattern
                          id="dashGrid"
                          width="15"
                          height="15"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 15 0 L 0 0 0 15"
                            fill="none"
                            stroke="#334155"
                            strokeWidth="0.5"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#dashGrid)" />
                      
                      {/* Animated route */}
                      <motion.path
                        d="M 50 150 Q 150 100, 250 130 T 450 80"
                        fill="none"
                        stroke="#0D4A3E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      />
                      
                      {/* Vehicle markers */}
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <circle cx="250" cy="130" r="5" fill="#0D4A3E" />
                        <circle cx="250" cy="130" r="8" fill="none" stroke="#0D4A3E" strokeWidth="1" opacity="0.5">
                          <animate attributeName="r" from="5" to="15" dur="1.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                      </motion.g>
                      
                      <circle cx="450" cy="80" r="4" fill="#DC2626" />
                      <circle cx="150" cy="120" r="4" fill="#0D4A3E" opacity="0.6" />
                    </svg>

                    {/* Stats overlay */}
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                      <div className="bg-slate-900/90 backdrop-blur rounded-lg px-3 py-2 flex-1">
                        <p className="text-xs text-slate-400">Active</p>
                        <p className="text-lg font-bold text-white">198</p>
                      </div>
                      <div className="bg-slate-900/90 backdrop-blur rounded-lg px-3 py-2 flex-1">
                        <p className="text-xs text-slate-400">Idle</p>
                        <p className="text-lg font-bold text-yellow-500">32</p>
                      </div>
                      <div className="bg-slate-900/90 backdrop-blur rounded-lg px-3 py-2 flex-1">
                        <p className="text-xs text-slate-400">Offline</p>
                        <p className="text-lg font-bold text-slate-500">17</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
