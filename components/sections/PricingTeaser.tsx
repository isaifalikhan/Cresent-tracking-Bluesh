"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { plans, featuresForPlan } from "@/lib/packages";

export const packageExtras = [
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

export default function PricingTeaser() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Packages"
          title="Choose the right tracking package"
          description="Compare Bike Tracking (Basic), Basic Plus, VIP and Executive packages, then talk to our team to find the best fit for your needs."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {plans.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative rounded-2xl p-7 flex flex-col border border-border bg-card"
            >
              <div className="mb-6">
                <h3 className="font-display font-bold text-foreground text-xl mb-1">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {pkg.tagline}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {featuresForPlan(i).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
              </ul>

              <Link
                href="/contact"
                className="w-full py-3 rounded-xl font-semibold text-center transition-all bg-muted text-foreground hover:bg-muted/80"
              >
                Talk to sales
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          Package availability may vary based on vehicle type and installation requirements.{" "}
          <Link
            href="/packages"
            className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
          >
            See full package details →
          </Link>
        </p>
      </div>
    </section>
  );
}
