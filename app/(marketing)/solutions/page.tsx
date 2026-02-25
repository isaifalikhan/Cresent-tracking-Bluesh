import type { Metadata } from "next";
import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { Satellite, Fuel, Car, Map, Zap, Package, Bell, Wrench, LayoutDashboard } from "lucide-react";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore our complete GPS tracking solutions: real-time tracking, fuel monitoring, driver behavior analytics, geo-fencing, immobilizer, and asset tracking.",
};

const solutions = [
  {
    id: "gps-tracking",
    icon: Satellite,
    title: "Real-Time GPS Tracking",
    tagline: "See every vehicle, every second",
    description:
      "Our GPS tracking provides location updates every 10 seconds with accuracy to within 3–5 meters. View your entire fleet on a live map, replay historical trips, and generate detailed movement reports.",
    benefits: [
      "Live position updates every 10 seconds",
      "3–5 meter location accuracy",
      "Full trip history with replay",
      "Speed and mileage logs",
      "Idle time detection",
      "Start/stop reporting",
    ],
    whoFor: "All fleet operators, logistics companies, corporate fleets",
  },
  {
    id: "fuel-monitoring",
    icon: Fuel,
    title: "Fuel Monitoring",
    tagline: "Stop losing money at the pump",
    description:
      "Precision fuel level sensors detect sudden drops (theft), monitor refueling events, and track consumption per kilometer. Identify wasteful driving behaviors and unauthorized fuel usage.",
    benefits: [
      "Real-time fuel level monitoring",
      "Theft detection (sudden drops)",
      "Refueling event logging",
      "Fuel efficiency per route",
      "Consumption vs distance analysis",
      "Monthly fuel cost reports",
    ],
    whoFor: "Logistics companies, construction, agriculture, any fuel-intensive operation",
  },
  {
    id: "driver-behavior",
    icon: Car,
    title: "Driver Behavior Analytics",
    tagline: "Coach drivers, not just monitor them",
    description:
      "Our AI-powered driver scoring system evaluates every trip on speeding, harsh braking, aggressive cornering, rapid acceleration, and fatigue indicators. Generate scorecards and identify training needs.",
    benefits: [
      "Automated driver scorecards",
      "Speeding violation logs",
      "Harsh braking and cornering detection",
      "Fatigue and distraction alerts",
      "Driver ranking leaderboard",
      "Insurance discount documentation",
    ],
    whoFor: "Corporate fleets, logistics, companies with duty-of-care requirements",
  },
  {
    id: "geo-fencing",
    icon: Map,
    title: "Geo-Fencing",
    tagline: "Define boundaries that trigger instant alerts",
    description:
      "Draw virtual boundaries of any shape and size around locations that matter — depots, client sites, restricted zones. Get immediate notifications when vehicles enter or exit your defined areas.",
    benefits: [
      "Unlimited geo-fence zones",
      "Entry and exit alerts",
      "Time-restricted zones",
      "Multi-shape boundaries",
      "Zone activity reports",
      "After-hours breach alerts",
    ],
    whoFor: "All fleet types, particularly construction and corporate",
  },
  {
    id: "immobilizer",
    icon: Zap,
    title: "Remote Immobilizer",
    tagline: "Stop a stolen vehicle with one click",
    description:
      "Our relay-based immobilizer allows you to remotely cut the engine of any vehicle at safe low speeds. Used for theft recovery and preventing unauthorized usage after hours.",
    benefits: [
      "Remote engine cut-off",
      "Automatic immobilization trigger",
      "Safe low-speed activation",
      "Recovery mode",
      "Tamper alerts",
      "Log of all immobilization events",
    ],
    whoFor: "High-value fleets, vehicle hire companies, theft-prone areas",
  },
  {
    id: "asset-tracking",
    icon: Package,
    title: "Asset Tracking",
    tagline: "Track anything that moves — or should stay put",
    description:
      "Using long-life battery trackers and solar-powered devices, we track non-powered assets: trailers, containers, generators, heavy machinery, and valuable equipment.",
    benefits: [
      "Battery life up to 3 years",
      "Solar-powered option",
      "No vehicle power required",
      "Tamper and movement alerts",
      "Location history",
      "Low-battery notifications",
    ],
    whoFor: "Construction, logistics (trailers), events, equipment rental",
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-40">
          <Scene />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
          <div className="max-w-3xl pointer-events-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400 font-medium mb-6">
              Our Solutions
            </span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
              Every tool you need to master your fleet
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              From real-time tracking to fuel intelligence to driver coaching — our suite of solutions delivers measurable ROI for Pakistani businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {solutions.map((sol, i) => (
            <div
              key={sol.id}
              id={sol.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-8 lg:p-10 rounded-3xl border border-white/5 bg-slate-900/50 ${
                i % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-2xl bg-green-brand/20 flex items-center justify-center mb-5">
                  <sol.icon className="w-7 h-7 text-green-400" />
                </div>
                <h2 className="font-display font-bold text-3xl text-white mb-2">
                  {sol.title}
                </h2>
                <p className="text-green-400 font-medium mb-4">{sol.tagline}</p>
                <p className="text-slate-400 leading-relaxed mb-4">{sol.description}</p>
                <p className="text-slate-500 text-sm">
                  <span className="text-slate-400 font-medium">Best for:</span> {sol.whoFor}
                </p>
              </div>
              <div className={`${i % 2 !== 0 ? "lg:order-1" : ""} bg-slate-800/50 rounded-2xl p-6 border border-white/5`}>
                <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Key Capabilities</h4>
                <ul className="space-y-3">
                  {sol.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-slate-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-1.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
