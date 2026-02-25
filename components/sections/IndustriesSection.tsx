"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Building2, HardHat, User, Package, Leaf } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const industries = [
  {
    id: "fleet",
    icon: Truck,
    label: "Fleet & Logistics",
    headline: "Command your entire fleet from one screen",
    description:
      "Logistics companies using Crescent Tracking cut operational costs by 35% on average. Real-time dispatch, route optimization, and proof of delivery — all integrated.",
    features: [
      "Live route monitoring and deviation alerts",
      "Driver assignment and dispatch management",
      "Proof of delivery with timestamp and location",
      "Customer-facing ETA sharing",
      "Multi-depot fleet management",
    ],
    stat: "35% cost reduction",
  },
  {
    id: "corporate",
    icon: Building2,
    label: "Corporate",
    headline: "Protect your company vehicles and workforce",
    description:
      "Ensure duty-of-care compliance, prevent unauthorized vehicle use after hours, and generate detailed mileage reports for expense reimbursement.",
    features: [
      "After-hours usage alerts",
      "Personal vs business mileage separation",
      "Driver safety scoring for HR",
      "Automated expense reports",
      "Compliance documentation",
    ],
    stat: "60% less unauthorized use",
  },
  {
    id: "construction",
    icon: HardHat,
    label: "Construction",
    headline: "Know where your heavy equipment is, always",
    description:
      "Construction projects lose millions to equipment theft and misuse. Track excavators, cranes, generators, and all site assets with rugged, long-life trackers.",
    features: [
      "Non-vehicle asset tracking",
      "Site geo-fencing with breach alerts",
      "Engine hours monitoring",
      "Theft recovery assistance",
      "Equipment utilization reports",
    ],
    stat: "Zero equipment loss reported",
  },
  {
    id: "personal",
    icon: User,
    label: "Personal",
    headline: "Keep your car and loved ones safe",
    description:
      "Protect your personal vehicle from theft with hidden trackers, real-time location sharing with family, and instant SOS alerts.",
    features: [
      "Family location sharing",
      "Anti-theft hidden installation",
      "SOS panic button",
      "Speed alerts for teen drivers",
      "Monthly travel reports",
    ],
    stat: "95% theft recovery rate",
  },
  {
    id: "logistics",
    icon: Package,
    label: "Cold Chain",
    headline: "Monitor temperature-sensitive cargo in transit",
    description:
      "For pharmaceutical, food, and FMCG companies, we offer GPS + temperature/humidity monitoring to ensure cold chain integrity end-to-end.",
    features: [
      "Real-time temperature logging",
      "Humidity and light exposure alerts",
      "Regulatory compliance reports",
      "Cargo seal tamper detection",
      "Multi-sensor dashboard",
    ],
    stat: "100% cold chain compliance",
  },
  {
    id: "agriculture",
    icon: Leaf,
    label: "Agriculture",
    headline: "Manage farm equipment across vast fields",
    description:
      "Track tractors, harvesters, and irrigation pumps. Monitor fuel consumption and equipment hours. Perfect for large-scale farming operations.",
    features: [
      "Farm boundary geo-fencing",
      "Equipment hours and maintenance",
      "Fuel theft detection",
      "Remote start/stop alerts",
      "Field coverage mapping",
    ],
    stat: "25% equipment utilization increase",
  },
];

export default function IndustriesSection() {
  const [active, setActive] = useState("fleet");
  const current = industries.find((i) => i.id === active)!;

  return (
    <section className="py-24 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Industries We Serve"
          title="Tailored for your industry"
          description="We understand the unique challenges of each sector. Our solutions are configured for your specific workflows."
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mt-12 mb-12">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActive(ind.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === ind.id
                  ? "bg-green-brand text-white shadow-lg shadow-green-900/40"
                  : "border border-white/10 text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              <ind.icon className="w-4 h-4" />
              {ind.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green-brand/20 border border-green-500/30 mb-6">
                <current.icon className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="font-display font-bold text-3xl text-white mb-4">
                {current.headline}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">{current.description}</p>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/20 px-4 py-2 text-sm text-green-400 font-semibold mb-8">
                ⚡ {current.stat}
              </div>
            </div>
            <div className="bg-slate-900/60 rounded-2xl border border-white/5 p-6 lg:p-8">
              <h4 className="text-white font-semibold mb-5">Key Features:</h4>
              <ul className="space-y-3">
                {current.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-1.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
