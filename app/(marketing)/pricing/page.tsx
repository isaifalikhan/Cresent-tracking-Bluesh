import type { Metadata } from "next";
import dynamic from "next/dynamic";
import PricingTeaser from "@/components/sections/PricingTeaser";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent GPS tracking pricing for Pakistani businesses. Starter from PKR 2,500/vehicle/month. Enterprise custom pricing available.",
};

export default function PricingPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-40">
          <Scene />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pointer-events-none">
          <div className="pointer-events-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400 font-medium mb-6">
            Pricing
          </span>
          <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            No hidden fees. No long-term lock-in on Starter. Hardware included. Cancel anytime.
          </p>
          </div>
        </div>
      </section>
      <PricingTeaser />
      
      {/* Add-ons */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl text-white mb-8 text-center">Available Add-ons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Fuel Sensor", price: "₨1,500/mo", desc: "Per vehicle" },
              { name: "Temperature Monitor", price: "₨2,000/mo", desc: "Per probe" },
              { name: "Driver ID Tag", price: "₨500/mo", desc: "Per driver" },
              { name: "Remote Immobilizer", price: "₨800/mo", desc: "Per vehicle" },
            ].map((addon) => (
              <div key={addon.name} className="p-5 rounded-xl border border-white/5 bg-slate-900/50 text-center">
                <h4 className="text-white font-semibold mb-1">{addon.name}</h4>
                <div className="text-green-400 font-bold text-lg">{addon.price}</div>
                <div className="text-slate-500 text-xs mt-1">{addon.desc}</div>
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
