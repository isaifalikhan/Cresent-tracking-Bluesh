import type { Metadata } from "next";
import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { Wrench, Wifi, PhoneCall, BookOpen, BarChart3, Settings, Truck, Fuel, Camera, Zap, Shield, Smartphone } from "lucide-react";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

export const metadata: Metadata = {
  title: "Services - Crescent Tracking Pvt Ltd",
  description: "Comprehensive vehicle tracking and fleet management services including Fuel Monitoring, Asset Tracking, and Dash Cam installations.",
};

const services = [
  {
    icon: Truck,
    title: "Fleet Management",
    description: "Complete fleet management solutions for cars, bikes, buses, trucks, and commercial vehicles.",
    includes: ["Real-time tracking", "Route playback", "Speed monitoring", "Maintenance alerts"],
  },
  {
    icon: Fuel,
    title: "Fuel Management",
    description: "Advanced fuel monitoring using Fuel Level Sensors to prevent theft and optimize consumption.",
    includes: ["Fuel level monitoring", "Theft detection", "Consumption reports", "Refill alerts"],
  },
  {
    icon: Settings,
    title: "Axle Load & Weight Sensors",
    description: "Precise weight monitoring for heavy transport vehicles to ensure compliance and safety.",
    includes: ["Load monitoring", "Overload alerts", "Weight reports", "Axle load distribution"],
  },
  {
    icon: Camera,
    title: "Dash Cam Installations",
    description: "Professional dash cam installation for PSVs, HTV, and LTV vehicles for evidence and safety.",
    includes: ["Live video streaming", "Event recording", "Driver behavior monitoring", "SD card storage"],
  },
  {
    icon: Zap,
    title: "Generator Tracking",
    description: "Monitor generator runtime, fuel levels, and location to ensure optimal performance and security.",
    includes: ["Runtime monitoring", "Fuel monitoring", "Maintenance scheduling", "Remote on/off (optional)"],
  },
  {
    icon: Shield,
    title: "Asset & Personal Tracking",
    description: "Keep track of valuable assets and loved ones with our portable and reliable tracking solutions.",
    includes: ["Portable devices", "Geo-fencing", "SOS panic button", "Long battery life"],
  },
  {
    icon: Smartphone,
    title: "Security & Patrolling",
    description: "Specialized monitoring for patrolling vehicles on highways and security departments.",
    includes: ["Patrol route verification", "Zone monitoring", "Instant alerts", "Central control room integration"],
  },
];

const trackingDevices = [
  "Vehicle GPS tracker",
  "Personal tracker",
  "Watch tracker",
  "Portable tracking device",
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-40">
          <Scene />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
          <div className="max-w-3xl pointer-events-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400 font-medium mb-6">
              Our Expertise
            </span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Comprehensive Tracking Solutions
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              From fleet management to personal safety, we provide cutting-edge technology to protect what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-7 rounded-2xl border border-border bg-card hover:border-green-500/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-brand/20 flex items-center justify-center mb-5 group-hover:bg-green-brand/30 transition-colors">
                  <service.icon className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground text-xs">
                      <span className="w-1 h-1 rounded-full bg-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking Devices */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Hardware" title="Tracking Devices" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {trackingDevices.map((device) => (
              <div
                key={device}
                className="p-6 rounded-2xl border border-border bg-card text-center hover:border-green-500/20 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-green-brand/10 flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-foreground">{device}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Service */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-900/10 border border-green-500/20 rounded-3xl p-8 lg:p-12">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-600 dark:text-green-400 font-medium mb-6">
                Value Added Service
              </span>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-6">
                Tracking + Insurance
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Combined vehicle tracking and insurance service to provide maximum security and protection for vehicles and assets. Get comprehensive coverage along with real-time monitoring.
              </p>
              <CTABanner />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
