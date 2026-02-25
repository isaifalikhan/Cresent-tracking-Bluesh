import type { Metadata } from "next";
import dynamic from "next/dynamic";
import IndustriesSection from "@/components/sections/IndustriesSection";
import CTABanner from "@/components/sections/CTABanner";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

export const metadata: Metadata = {
  title: "Industries",
  description: "GPS tracking solutions for fleet & logistics, corporate, construction, personal, cold chain, and agriculture industries in Pakistan.",
};

export default function IndustriesPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-40">
          <Scene />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
          <div className="max-w-3xl pointer-events-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400 font-medium mb-6">
              Industries
            </span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
              Solutions built for your industry
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              We understand that every industry has unique challenges. Our solutions are tailored to meet the specific needs of your sector.
            </p>
          </div>
        </div>
      </section>
      <IndustriesSection />
      <CTABanner />
    </div>
  );
}
