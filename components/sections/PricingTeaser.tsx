"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const packagesList = [
  {
    name: "Bike Tracking",
    features: [
      { name: "24/7 Real Time Tracking", available: true },
      { name: "24/7 Call Center Facility", available: true },
      { name: "Geo Fence & Battery Temper Call", available: false },
      {
        name: "Theft/Snatched Vehicle Recovery Assistance",
        available: true,
      },
      { name: "Built-In Jammer detector", available: false },
      {
        name: "Web Access for Self Tracking (For Laptop/PC)",
        available: true,
      },
      {
        name: "Mobile Application for Self Tracking (Android/iOS)",
        available: true,
      },
      {
        name: "SMS Engine Kill Through Mobile Application",
        available: false,
      },
      { name: "History & Trip Reports", available: false },
      { name: "SMS Alerts (ACC On/Off)", available: false },
      { name: "In-Vehicle Microphone & Speaker", available: false },
      { name: "In-Vehicle Camera", available: false },
      { name: "Door Alert Via SMS", available: false },
      { name: "Panic Button", available: false },
    ],
  },
  {
    name: "Vehicle Track - Basic",
    features: [
      { name: "24/7 Real Time Tracking", available: true },
      { name: "24/7 Call Center Facility", available: true },
      { name: "Geo Fence & Battery Temper Call", available: true },
      {
        name: "Theft/Snatched Vehicle Recovery Assistance",
        available: true,
      },
      { name: "Built-In Jammer detector", available: false },
      {
        name: "Web Access for Self Tracking (For Laptop/PC)",
        available: true,
      },
      {
        name: "Mobile Application for Self Tracking (Android/iOS)",
        available: true,
      },
      {
        name: "SMS Engine Kill Through Mobile Application",
        available: true,
      },
      { name: "History & Trip Reports", available: false },
      { name: "SMS Alerts (ACC On/Off)", available: false },
      { name: "In-Vehicle Microphone & Speaker", available: false },
      { name: "In-Vehicle Camera", available: false },
      { name: "Door Alert Via SMS", available: false },
      { name: "Panic Button", available: false },
    ],
  },
  {
    name: "Vehicle Track - VIP",
    features: [
      { name: "24/7 Real Time Tracking", available: true },
      { name: "24/7 Call Center Facility", available: true },
      { name: "Geo Fence & Battery Temper Call", available: true },
      {
        name: "Theft/Snatched Vehicle Recovery Assistance",
        available: true,
      },
      { name: "Built-In Jammer detector", available: true },
      {
        name: "Web Access for Self Tracking (For Laptop/PC)",
        available: true,
      },
      {
        name: "Mobile Application for Self Tracking (Android/iOS)",
        available: true,
      },
      {
        name: "SMS Engine Kill Through Mobile Application",
        available: true,
      },
      { name: "History & Trip Reports", available: true },
      { name: "SMS Alerts (ACC On/Off)", available: true },
      { name: "In-Vehicle Microphone & Speaker", available: true },
      { name: "In-Vehicle Camera", available: false },
      { name: "Door Alert Via SMS", available: false },
      { name: "Panic Button", available: true },
    ],
  },
  {
    name: "Vehicle Track - Executive",
    features: [
      { name: "24/7 Real Time Tracking", available: true },
      { name: "24/7 Call Center Facility", available: true },
      { name: "Geo Fence & Battery Temper Call", available: true },
      {
        name: "Theft/Snatched Vehicle Recovery Assistance",
        available: true,
      },
      { name: "Built-In Jammer detector", available: true },
      {
        name: "Web Access for Self Tracking (For Laptop/PC)",
        available: true,
      },
      {
        name: "Mobile Application for Self Tracking (Android/iOS)",
        available: true,
      },
      {
        name: "SMS Engine Kill Through Mobile Application",
        available: true,
      },
      { name: "History & Trip Reports", available: true },
      { name: "SMS Alerts (ACC On/Off)", available: true },
      { name: "In-Vehicle Microphone & Speaker", available: true },
      { name: "In-Vehicle Camera", available: true },
      { name: "Door Alert Via SMS", available: true },
      { name: "Panic Button", available: true },
    ],
  },
];

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

function getPackageTagline(name: string) {
  if (name === "Bike Tracking") {
    return "For individual bike and personal use";
  }
  if (name === "Vehicle Track - Basic") {
    return "Essential tracking and security for vehicles";
  }
  if (name === "Vehicle Track - VIP") {
    return "Advanced tracking with more security features";
  }
  if (name === "Vehicle Track - Executive") {
    return "Full-featured tracking with all sensors and accessories";
  }
  return "";
}

export default function PricingTeaser() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Packages"
          title="Choose the right tracking package"
          description="Compare Bike Tracking and Vehicle Track packages, then talk to our team to find the best fit for your needs."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {packagesList.map((pkg, i) => (
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
                  {getPackageTagline(pkg.name)}
                </p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {pkg.features
                  .filter((feature) => feature.available)
                  .map((feature) => (
                    <li
                      key={feature.name}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature.name}
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
