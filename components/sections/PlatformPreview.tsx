"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Live fleet map with real-time vehicle positions",
  "Trip history replay with second-by-second playback",
  "Fuel consumption graphs and anomaly detection",
  "Driver scorecards and ranking leaderboards",
  "Scheduled and on-demand report generation",
  "Multi-user access with role-based permissions",
];

export default function PlatformPreview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-24 lg:py-32 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400 font-medium mb-6">
              Platform Preview
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight mb-6">
              A control center for your entire operation
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Our web and mobile platform gives you complete situational awareness. Manage fleets, generate reports, and respond to incidents — all from a single, intuitive dashboard.
            </p>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Dashboard mock */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-green-brand/10 rounded-3xl blur-2xl" />

            {/* Dashboard frame */}
            <div className="relative rounded-2xl border border-white/10 bg-slate-900 overflow-hidden shadow-2xl">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-slate-800/50">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 mx-4 h-5 rounded bg-slate-700/60 flex items-center px-3">
                  <span className="text-slate-500 text-[10px] font-mono">app.crescenttracking.com</span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-4">
                {/* Top stats row */}
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {[
                    { label: "Active", value: "142", color: "text-green-400" },
                    { label: "Idle", value: "23", color: "text-amber-400" },
                    { label: "Stopped", value: "11", color: "text-slate-400" },
                    { label: "Offline", value: "4", color: "text-red-400" },
                  ].map((s) => (
                    <div key={s.label} className="bg-slate-800 rounded-lg p-2.5 text-center">
                      <div className={`font-display font-bold text-lg ${s.color}`}>{s.value}</div>
                      <div className="text-slate-500 text-[10px] mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 h-52 relative overflow-hidden border border-white/5 mb-4">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  {/* Pakistan map outline hint */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-slate-600 text-xs font-mono">LIVE MAP VIEW</div>
                  </div>
                  {/* Animated dots */}
                  {[
                    { x: "30%", y: "40%" },
                    { x: "45%", y: "55%" },
                    { x: "60%", y: "35%" },
                    { x: "70%", y: "60%" },
                    { x: "25%", y: "65%" },
                  ].map((pos, i) => (
                    <div
                      key={i}
                      className="absolute w-2.5 h-2.5"
                      style={{ left: pos.x, top: pos.y }}
                    >
                      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60" />
                      <div className="relative w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-green-300" />
                    </div>
                  ))}
                </div>

                {/* Recent alerts */}
                <div className="space-y-2">
                  {[
                    { msg: "TRK-045 entered Karachi zone", time: "2m ago", type: "info" },
                    { msg: "TRK-012 speeding alert — 95 km/h", time: "8m ago", type: "warn" },
                    { msg: "Fuel drop detected on TRK-031", time: "15m ago", type: "error" },
                  ].map((alert) => (
                    <div
                      key={alert.msg}
                      className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-800/60"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            alert.type === "info"
                              ? "bg-green-400"
                              : alert.type === "warn"
                              ? "bg-amber-400"
                              : "bg-red-400"
                          }`}
                        />
                        <span className="text-slate-300 text-[11px]">{alert.msg}</span>
                      </div>
                      <span className="text-slate-600 text-[10px] flex-shrink-0">{alert.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
