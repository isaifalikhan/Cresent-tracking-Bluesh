
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, Globe, ArrowRight } from "lucide-react";

export default function TrackingLanding() {
  const [trackingId, setTrackingId] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      router.push(`/tracking/${trackingId}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl text-center space-y-8"
      >
        <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-4 ring-1 ring-blue-500/20">
          <Globe className="w-6 h-6 text-blue-400" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
          Track your World
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
          Real-time global logistics monitoring. 
          <span className="block text-slate-500 text-sm mt-2">Enter your shipment ID to begin.</span>
        </p>

        <form onSubmit={handleSearch} className="relative max-w-md mx-auto mt-12 group">
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-center bg-slate-900/80 border border-slate-800 rounded-full p-2 shadow-2xl backdrop-blur-xl transition-all duration-300 focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/50">
            <Search className="w-5 h-5 text-slate-500 ml-3" />
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="e.g. TRK-8829-XJ"
              className="flex-1 bg-transparent border-none text-white placeholder-slate-600 focus:outline-none px-4 py-2 text-lg font-mono tracking-wider w-full"
            />
            <button 
              type="submit"
              className="p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
              disabled={!trackingId.trim()}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>

        <div className="pt-12 flex justify-center gap-8 opacity-50">
          {['Global Logistics Corp', 'Ultra-Track', 'Swift-Move'].map((brand, i) => (
            <span key={i} className="text-sm font-semibold text-slate-600 uppercase tracking-widest">{brand}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
