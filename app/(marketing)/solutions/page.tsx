import type { Metadata } from "next";
import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { Satellite, Fuel, Car, Map, Zap, Package, Bell, Wrench, LayoutDashboard, Smartphone, FileText, Shield, Radio } from "lucide-react";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

export const metadata: Metadata = {
  title: "Solutions - Crescent Tracking Pvt Ltd",
  description: "Web-based fleet management platform, real-time tracking, SMS alerts, and comprehensive reporting.",
};

const solutions = [
  {
    id: "web-tracking",
    icon: LayoutDashboard,
    title: "Web-Based Tracking Platform",
    tagline: "Powerful fleet management software",
    description:
      "Monitor one or thousands of vehicles with our comprehensive web-based platform. Get real-time data on location, speed, direction, and status.",
    benefits: [
      "Real-time GPS location tracking",
      "Vehicle speed & ignition monitoring",
      "Direction and movement status",
      "Vehicle alarms and alerts",
      "Temperature & Fuel monitoring",
      "CAN Bus dashboard monitoring",
    ],
    whoFor: "Fleet managers, logistics companies",
  },
  {
    id: "sms-alerts",
    icon: Bell,
    title: "SMS & Instant Alerts",
    tagline: "Stay informed instantly",
    description:
      "Receive immediate notifications for critical events directly to your phone or email. Never miss a beat with our robust alerting system.",
    benefits: [
      "Ignition ON/OFF alerts",
      "Geo-fence entry/exit alerts",
      "Battery tampering & disconnect alerts",
      "Speed violation alerts",
      "Panic button & SOS alerts",
      "Door open alerts",
    ],
    whoFor: "Security teams, vehicle owners",
  },
  {
    id: "remote-control",
    icon: Zap,
    title: "Remote Control & Security",
    tagline: "Take control from anywhere",
    description:
      "Secure your vehicle remotely with our immobilization technology. Stop unauthorized use or recover stolen vehicles with a single command.",
    benefits: [
      "Vehicle immobilization via SMS",
      "Vehicle mobilization via SMS",
      "Built-in anti-jammer technology",
      "Real-time monitoring",
      "Driver behavior monitoring",
      "Instant security notifications",
    ],
    whoFor: "High-value asset protection",
  },
  {
    id: "geo-fencing",
    icon: Map,
    title: "Geo-Fencing",
    tagline: "Define your operational zones",
    description:
      "Monitor vehicles entering or leaving defined zones. Create up to 64 custom zones per vehicle for precise territorial management.",
    benefits: [
      "Monitor zone entry/exit",
      "Up to 64 zones per vehicle",
      "SMS & Email alerts",
      "Route deviation monitoring",
      "Territory management",
      "Restricted area alerts",
    ],
    whoFor: "Logistics, distribution, sales teams",
  },
  {
    id: "reports",
    icon: FileText,
    title: "Comprehensive Reports",
    tagline: "Data-driven decision making",
    description:
      "Generate detailed reports to analyze fleet performance, costs, and utilization. Export data in Excel or PDF formats for offline analysis.",
    benefits: [
      "Vehicle history & Activity reports",
      "Fuel usage & Trip cost reports",
      "Route alarm & POI reports",
      "Miles by state & KM reports",
      "Export to Excel & PDF",
      "Automated scheduled reports",
    ],
    whoFor: "Management, finance, operations",
  },
  {
    id: "mobile-app",
    icon: Smartphone,
    title: "Mobile Application",
    tagline: "Fleet management in your pocket",
    description:
      "Stay connected to your fleet on the go with our feature-rich mobile application. Access critical data and alerts anytime, anywhere.",
    benefits: [
      "Live vehicle tracking",
      "Real-time alert notifications",
      "Trip history playback",
      "Fleet management dashboard",
      "Driver activity monitoring",
      "User-friendly interface",
    ],
    whoFor: "Remote managers, field supervisors",
  },
  {
    id: "sensors",
    icon: Radio,
    title: "Advanced Sensors",
    tagline: "Deep insights into vehicle status",
    description:
      "Extend your tracking capabilities with specialized sensors for fuel, temperature, and weight monitoring.",
    benefits: [
      "Fuel level sensors",
      "Temperature sensors (Reefer)",
      "Axle load & weight sensors",
      "Door sensors",
      "PTO sensors",
      "Custom sensor integration",
    ],
    whoFor: "Cold chain, heavy transport, construction",
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-40">
          <Scene />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
          <div className="max-w-3xl pointer-events-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-600 dark:text-green-400 font-medium mb-6">
              Our Solutions
            </span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Every tool you need to master your fleet
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              From real-time tracking to fuel intelligence to driver coaching — our suite of solutions delivers measurable ROI for Pakistani businesses.
            </p>
          </div>
        </div>
      </section>

      {/* System Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading badge="Technology" title="System Overview" />
              <p className="text-muted-foreground text-lg leading-relaxed mt-6 mb-6">
                Our web-based fleet management software allows businesses to monitor one or thousands of vehicles with ease.
              </p>
              <ul className="space-y-4">
                {[
                  "GPS Satellite Tracking",
                  "GSM Communication Network",
                  "GPRS Data Transmission",
                  "Central Monitoring Control Room",
                ].map((tech) => (
                  <li key={tech} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-8 h-8 rounded-full bg-green-brand/10 flex items-center justify-center">
                      <Satellite className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-muted/30 rounded-3xl p-8 border border-border">
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">Platform Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Real-time GPS Location",
                  "Vehicle Speed Monitoring",
                  "Direction & Movement",
                  "Alarms & Alerts",
                  "Fuel Level Monitoring",
                  "Temperature Monitoring",
                  "CAN Bus Dashboard",
                  "Fleet Operations",
                ].map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {solutions.map((sol, i) => (
            <div
              key={sol.id}
              id={sol.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-8 lg:p-10 rounded-3xl border border-border bg-card ${
                i % 2 !== 0 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-2xl bg-green-brand/20 flex items-center justify-center mb-5">
                  <sol.icon className="w-7 h-7 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="font-display font-bold text-3xl text-foreground mb-2">
                  {sol.title}
                </h2>
                <p className="text-green-600 dark:text-green-400 font-medium mb-4">{sol.tagline}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">{sol.description}</p>
                <p className="text-muted-foreground text-sm">
                  <span className="text-foreground font-medium">Best for:</span> {sol.whoFor}
                </p>
              </div>
              <div className={`${i % 2 !== 0 ? "lg:order-1" : ""} bg-muted/50 rounded-2xl p-6 border border-border`}>
                <h4 className="text-foreground font-semibold mb-4 text-sm uppercase tracking-wider">Key Features</h4>
                <ul className="space-y-3">
                  {sol.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-muted-foreground text-sm">
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
