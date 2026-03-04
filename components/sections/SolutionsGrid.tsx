"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  Satellite,
  Fuel,
  Car,
  Map,
  Zap,
  Package,
  Bell,
  Wrench,
  LayoutDashboard,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Satellite,
    title: "Real-Time GPS Tracking",
    description: "Live location updates every 10 seconds. See exactly where every vehicle is, right now.",
    href: "/solutions#web-tracking",
    featured: true,
  },
  {
    icon: Fuel,
    title: "Fuel Monitoring",
    description: "Detect theft, unauthorized usage, and optimize consumption with precision fuel sensors.",
    href: "/solutions#sensors",
  },
  {
    icon: Car,
    title: "Driver Behavior Analytics",
    description: "Score and coach drivers on speeding, harsh braking, cornering, and fatigue patterns.",
    href: "/solutions#mobile-app",
  },
  {
    icon: Map,
    title: "Geo-Fencing",
    description: "Define virtual boundaries. Get instant alerts when assets enter or leave zones.",
    href: "/solutions#geo-fencing",
  },
  {
    icon: Zap,
    title: "Remote Immobilizer",
    description: "Cut the engine remotely if a vehicle is stolen or used without authorization.",
    href: "/solutions#remote-control",
  },
  {
    icon: Package,
    title: "Asset Tracking",
    description: "Track trailers, generators, containers, and high-value assets with long-life trackers.",
    href: "/solutions#web-tracking",
  },
  {
    icon: Bell,
    title: "Smart Alerts System",
    description: "Customizable alert rules for any event — delivered via SMS, email, or WhatsApp.",
    href: "/solutions#sms-alerts",
  },
  {
    icon: Wrench,
    title: "Maintenance Management",
    description: "Automated service reminders based on mileage, engine hours, or calendar intervals.",
    href: "/solutions#reports",
  },
  {
    icon: LayoutDashboard,
    title: "Fleet Dashboard",
    description: "Unified command center for your entire fleet. Reports, analytics, and live maps.",
    href: "/solutions#web-tracking",
  },
];

export default function SolutionsGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Solutions"
          title="Everything your fleet needs, in one platform"
          description="Purpose-built for Pakistani roads, regulations, and business requirements."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16"
        >
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: i * 0.05 } },
              }}
            >
              <Link
                href={sol.href}
                className={`group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 h-full ${
              sol.featured
                ? "border-primary/20 dark:border-green-500/30 bg-gradient-to-br from-primary/5 dark:from-green-950/40 to-background dark:to-slate-900 hover:border-primary/40 dark:hover:border-green-500/60"
                : "border-border bg-card hover:border-border/80 hover:bg-accent/50"
            }`}
              >
                {sol.featured && (
                  <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-wider text-green-600 dark:text-green-400 border border-green-600/30 dark:border-green-500/30 rounded-full px-2.5 py-0.5">
                    Core
                  </span>
                )}
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 ${
                    sol.featured ? "bg-green-brand" : "bg-muted group-hover:bg-green-brand/20"
                  } transition-colors duration-300`}
                >
                  <sol.icon
                    className={`w-5 h-5 ${
                      sol.featured ? "text-white" : "text-muted-foreground group-hover:text-green-600 dark:group-hover:text-green-400"
                    } transition-colors duration-300`}
                  />
                </div>
                <h3 className="font-display font-semibold text-foreground text-base mb-2">
                  {sol.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {sol.description}
                </p>
                <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400 text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium transition-colors"
          >
            Explore all solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
