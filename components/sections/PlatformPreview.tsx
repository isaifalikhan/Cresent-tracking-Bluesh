"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

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
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
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
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-600 dark:text-green-400 font-medium mb-6">
              Platform Preview
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              A control center for your entire operation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our web and mobile platform gives you complete situational awareness. Manage fleets, generate reports, and respond to incidents — all from a single, intuitive dashboard.
            </p>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Dashboard screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-green-brand/15 rounded-3xl blur-2xl pointer-events-none" />

            {/* Dashboard frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/80 bg-card">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/60">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 mx-4 h-6 rounded-md bg-background/80 flex items-center px-3 border border-border/50">
                  <span className="text-muted-foreground text-xs font-mono">app.crescenttracking.com</span>
                </div>
              </div>

              {/* Dashboard image */}
              <div className="relative aspect-video w-full bg-muted/30">
                <Image
                  src="/images/dashboard.jpeg"
                  alt="Crescent Tracking dashboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
