import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PricingTeaser from "@/components/sections/PricingTeaser";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";

const Scene = dynamic(() => import("@/components/three/Scene"), {
  ssr: false,
});

const pricingExtras = [
  {
    name: "Basic Extra",
    type: "Yearly",
    features: ["SMS Alerts (ACC On/Off)"],
  },
  {
    name: "Basic Extra",
    type: "One Time Cost",
    features: [
      "Web Access for Self Tracking (For Laptop/PC)",
      "Mobile Application for Self Tracking (Android/iOS)",
    ],
  },
  {
    name: "Sensors",
    type: "Per Sensor + Basic Package",
    features: ["Fuel Level Sensor", "Axle Load Sensor"],
  },
  {
    name: "Accessories",
    type: "One Time Cost",
    features: [
      "Microphone - Rs. 15000",
      "Temperature Sensors (Each) - Rs. 15000",
      "iButton with Driver ID Keys - Rs. 15000",
    ],
  },
];

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Compare Bike Tracking and Vehicle Track (Basic, VIP, Executive) packages plus available extras for Crescent Tracking services in Pakistan.",
};

export default function PricingPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-40">
          <Scene />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pointer-events-none">
          <div className="pointer-events-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-600 dark:text-green-400 font-medium mb-6">
              Pricing
            </span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Packages and pricing for every need
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Choose between Bike Tracking and Vehicle Track packages (Basic, VIP, Executive) and add extras as needed.
            </p>
          </div>
        </div>
      </section>
      <PricingTeaser />
      
      {/* Add-ons */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl text-foreground mb-8 text-center">
            Available Extras
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricingExtras.map((extra) => (
              <div
                key={`${extra.name}-${extra.type}`}
                className="p-5 rounded-xl border border-border bg-card"
              >
                <h4 className="text-foreground font-semibold mb-1">
                  {extra.name}
                </h4>
                <div className="text-green-600 dark:text-green-400 font-semibold text-xs uppercase tracking-wide">
                  {extra.type}
                </div>
                <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                  {extra.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTABanner />
    </div>
  );
}
