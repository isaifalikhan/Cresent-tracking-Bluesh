
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  MapPin, 
  Package, 
  Calendar, 
  Truck, 
  CheckCircle2, 
  Circle, 
  Clock,
  Plane,
  AlertTriangle
} from "lucide-react";
import { shipments, Shipment } from "@/lib/dummy-data";

export default function TrackingResult() {
  const params = useParams();
  const router = useRouter();
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchShipment = () => {
      // For demo, just pick the first one if ID doesn't match or try to find by ID
      const found = shipments.find(s => s.trackingNumber === params.id || s.id === params.id) || shipments[0];
      setShipment(found);
      setLoading(false);
    };
    
    setTimeout(fetchShipment, 1000);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!shipment) return null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-4 md:p-8">
      <header className="max-w-7xl mx-auto mb-8 flex items-center justify-between">
        <button 
          onClick={() => router.push('/tracking')}
          className="flex items-center text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Search
        </button>
        <div className="flex items-center gap-3">
          <span className="text-slate-500 text-sm">Tracking ID:</span>
          <span className="font-mono text-blue-400 font-bold tracking-wider">{shipment.trackingNumber}</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Shipment Details & Journey */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Status Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-slate-400 text-sm font-medium uppercase tracking-wider">Current Status</h2>
                <div className={`mt-1 text-2xl font-bold ${
                  shipment.status === "Delivered" ? "text-emerald-400" : 
                  shipment.status === "Delayed" ? "text-rose-400" : 
                  "text-blue-400"
                }`}>
                  {shipment.status}
                </div>
              </div>
              <div className={`p-3 rounded-full ${
                 shipment.status === "Delivered" ? "bg-emerald-500/10 text-emerald-400" : 
                 shipment.status === "Delayed" ? "bg-rose-500/10 text-rose-400" : 
                 "bg-blue-500/10 text-blue-400"
              }`}>
                {shipment.status === "Delivered" ? <CheckCircle2 className="w-6 h-6" /> : 
                 shipment.status === "Delayed" ? <AlertTriangle className="w-6 h-6" /> : 
                 <Truck className="w-6 h-6" />}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg">
                <Calendar className="w-5 h-5 text-slate-500" />
                <div>
                  <p className="text-xs text-slate-500">Estimated Delivery</p>
                  <p className="text-sm font-medium text-slate-200">{shipment.estimatedDelivery}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg">
                <MapPin className="w-5 h-5 text-slate-500" />
                <div>
                  <p className="text-xs text-slate-500">Current Location</p>
                  <p className="text-sm font-medium text-slate-200">{shipment.currentLocation}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg">
                <Package className="w-5 h-5 text-slate-500" />
                <div>
                  <p className="text-xs text-slate-500">Service</p>
                  <p className="text-sm font-medium text-slate-200">{shipment.service}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Package Journey Stepper */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold mb-6">Package Journey</h3>
            <div className="relative pl-2">
              {/* Vertical Line */}
              <div className="absolute left-[19px] top-2 bottom-4 w-0.5 bg-slate-800"></div>

              <div className="space-y-8 relative">
                {shipment.events.map((event, index) => (
                  <div key={event.id} className="flex gap-4 relative">
                    <div className={`
                      relative z-10 w-10 h-10 rounded-full border-4 flex items-center justify-center shrink-0 bg-slate-950
                      ${event.status === 'completed' ? 'border-blue-500 text-blue-500' : 
                        event.status === 'current' ? 'border-blue-500 text-white bg-blue-500' : 
                        'border-slate-800 text-slate-600'}
                    `}>
                      {event.status === 'completed' ? <CheckCircle2 className="w-5 h-5" /> : 
                       event.status === 'current' ? <Truck className="w-5 h-5" /> : 
                       <Circle className="w-5 h-5" />}
                    </div>
                    <div className={`pt-1 ${event.status === 'pending' ? 'opacity-50' : ''}`}>
                      <p className="text-sm font-medium text-slate-200">{event.description}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{event.location}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3 text-slate-600" />
                        <span className="text-xs text-slate-500 font-mono">{event.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Map */}
        <div className="lg:col-span-2 h-[600px] lg:h-auto bg-slate-900 rounded-2xl overflow-hidden relative border border-slate-800">
          {/* Map Placeholder */}
          <div className="absolute inset-0 bg-slate-950">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10" 
                 style={{ 
                   backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', 
                   backgroundSize: '30px 30px' 
                 }}>
            </div>
            
            {/* World Map Outline (SVG) - Simplified Representation */}
            <svg className="absolute inset-0 w-full h-full text-slate-800 fill-current opacity-20" viewBox="0 0 100 50" preserveAspectRatio="none">
               <path d="M20,15 Q30,5 40,15 T60,20 T80,15" stroke="currentColor" strokeWidth="0.5" fill="none" />
               <path d="M10,25 Q30,35 50,25 T90,25" stroke="currentColor" strokeWidth="0.5" fill="none" />
               {/* Just random shapes to simulate landmasses */}
               <circle cx="25" cy="15" r="5" />
               <circle cx="75" cy="15" r="5" />
               <rect x="40" y="20" width="10" height="10" />
            </svg>

            {/* Flight Path Animation */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.path
                d="M 200 400 Q 400 100 800 300" // Bezier curve simulating flight path
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="10 10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.circle 
                cx="0" cy="0" r="6" fill="#3b82f6"
                className="filter drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              >
                <animateMotion 
                  dur="2s" 
                  repeatCount="1"
                  fill="freeze"
                  path="M 200 400 Q 400 100 800 300"
                />
              </motion.circle>
            </svg>

            {/* Map Markers */}
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute opacity-75"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white relative z-10"></div>
              <span className="mt-2 text-xs font-bold text-slate-300 bg-slate-900/80 px-2 py-1 rounded backdrop-blur-md">NY</span>
            </div>

            <div className="absolute top-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <MapPin className="w-8 h-8 text-emerald-500 drop-shadow-lg mb-1" />
              <span className="text-xs font-bold text-slate-300 bg-slate-900/80 px-2 py-1 rounded backdrop-blur-md">Singapore</span>
            </div>

            {/* Map Controls (Visual only) */}
            <div className="absolute bottom-6 right-6 flex flex-col gap-2">
              <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">+</button>
              <button className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">-</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
