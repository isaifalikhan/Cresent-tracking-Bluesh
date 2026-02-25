"use client";

import { motion } from "framer-motion";
import { StatsCounter } from "@/components/animations/StatsCounter";
import { FadeInView } from "@/components/animations/FadeInView";

const stats = [
  { value: 500, suffix: "+", label: "Businesses Trust Us" },
  { value: 10000, suffix: "+", label: "Vehicles Tracked" },
  { value: 99.9, suffix: "%", label: "System Uptime" },
  { value: 15, suffix: "M+", label: "Kilometers Monitored" },
];

const logos = [
  "TCS Logistics",
  "Daewoo Express",
  "Pakistan Railways",
  "Shell Pakistan",
  "Engro Corporation",
  "Nestle Pakistan",
];

export function SocialProof() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4">
        {/* Client logos */}
        <FadeInView className="mb-12">
          <p className="text-center text-sm text-slate-500 mb-8">
            Trusted by leading organizations across Pakistan
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-slate-400 font-semibold text-lg hover:text-brand-green transition-colors cursor-default"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </FadeInView>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-100">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <StatsCounter
                end={stat.value}
                suffix={stat.suffix}
                duration={2.5}
              />
              <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
