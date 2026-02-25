"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, TrendingDown, Clock, Eye, AlertTriangle, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: Shield,
    title: "Theft Prevention",
    description:
      "Real-time location monitoring and instant alerts when vehicles leave designated zones. Recover stolen assets in minutes, not days.",
    color: "from-green-500 to-emerald-600",
    stat: "95% recovery rate",
  },
  {
    icon: TrendingDown,
    title: "Fuel Cost Reduction",
    description:
      "Detect fuel theft, unauthorized idling, and inefficient routes. Our clients average 40% reduction in fuel expenditure within 3 months.",
    color: "from-blue-500 to-cyan-500",
    stat: "40% avg savings",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Optimize routes with live traffic data. Improve delivery SLAs and customer satisfaction with accurate ETAs sent automatically.",
    color: "from-violet-500 to-purple-600",
    stat: "30% faster deliveries",
  },
  {
    icon: Eye,
    title: "Complete Visibility",
    description:
      "Monitor your entire fleet from one dashboard. Live maps, trip history, stop reports, and driver activity — all in one place.",
    color: "from-amber-500 to-orange-500",
    stat: "360° fleet visibility",
  },
  {
    icon: AlertTriangle,
    title: "Instant Alerts",
    description:
      "Get notified via SMS, email, or app for speeding, harsh braking, geo-fence breaches, and engine tampering — the moment it happens.",
    color: "from-red-500 to-rose-500",
    stat: "< 5 sec alert time",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Comprehensive reports on mileage, utilization, maintenance schedules, and driver performance. Make informed fleet decisions.",
    color: "from-teal-500 to-green-500",
    stat: "50+ report types",
  },
];

export default function BenefitsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="py-24 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Crescent Tracking"
          title="Built for businesses that can't afford to lose control"
          description="Every feature is designed to give you measurable ROI — from day one."
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative p-6 lg:p-7 rounded-2xl border border-white/5 bg-slate-900/50 hover:border-white/10 hover:bg-slate-900/80 transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} mb-5`}
              >
                <benefit.icon className="w-5 h-5 text-white" />
              </div>

              <h3 className="font-display font-semibold text-white text-lg mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {benefit.description}
              </p>

              {/* Stat pill */}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {benefit.stat}
              </span>

              {/* Hover gradient border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, rgba(26,122,60,0.05) 0%, transparent 50%)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
