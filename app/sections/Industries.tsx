"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  Truck,
  Building2,
  HardHat,
  Car,
  Bus,
  Ship,
  Package,
  Factory,
} from "lucide-react";

const industries = [
  {
    id: "fleet",
    icon: Truck,
    title: "Fleet Management",
    description:
      "Comprehensive solutions for commercial fleet operators to optimize routes, reduce costs, and improve efficiency.",
    benefits: [
      "Route optimization saves up to 20% on fuel",
      "Real-time driver behavior monitoring",
      "Automated maintenance scheduling",
      "Regulatory compliance reporting",
    ],
  },
  {
    id: "logistics",
    icon: Package,
    title: "Logistics & Transport",
    description:
      "End-to-end visibility for logistics companies with delivery tracking, ETAs, and customer notifications.",
    benefits: [
      "Real-time delivery tracking",
      "Automated customer notifications",
      "Proof of delivery capture",
      "Warehouse integration",
    ],
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Fleets",
    description:
      "Manage company vehicles efficiently with usage tracking, expense management, and policy enforcement.",
    benefits: [
      "Employee vehicle usage tracking",
      "Expense report automation",
      "Policy violation alerts",
      "Pool vehicle management",
    ],
  },
  {
    id: "construction",
    icon: HardHat,
    title: "Construction",
    description:
      "Track heavy machinery, equipment, and vehicles across multiple job sites with ruggedized solutions.",
    benefits: [
      "Equipment utilization tracking",
      "Theft prevention for high-value assets",
      "Site boundary monitoring",
      "Maintenance alerts for machinery",
    ],
  },
  {
    id: "rental",
    icon: Car,
    title: "Car Rental",
    description:
      "Protect your rental fleet with immobilizers, geo-fencing, and usage monitoring capabilities.",
    benefits: [
      "Unauthorized usage prevention",
      "Boundary violation alerts",
      "Speed monitoring",
      "Rental period enforcement",
    ],
  },
  {
    id: "passenger",
    icon: Bus,
    title: "Passenger Transport",
    description:
      "Ensure passenger safety with real-time tracking, driver monitoring, and emergency response features.",
    benefits: [
      "Real-time passenger information",
      "Driver fatigue monitoring",
      "Emergency button integration",
      "Route adherence tracking",
    ],
  },
  {
    id: "marine",
    icon: Ship,
    title: "Marine & Fishing",
    description:
      "Specialized tracking solutions for boats and marine vessels with water-resistant hardware.",
    benefits: [
      "Coastal and offshore tracking",
      "Weather integration",
      "Catch location logging",
      "Emergency beacon integration",
    ],
  },
  {
    id: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    description:
      "Optimize your supply chain with inbound and outbound logistics tracking and inventory management.",
    benefits: [
      "Raw material tracking",
      "Finished goods monitoring",
      "Supplier performance analytics",
      "Just-in-time delivery coordination",
    ],
  },
];

export function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-4"
          >
            Industries We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Tailored Solutions for{" "}
            <span className="text-brand-green">Every Industry</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            From logistics to construction, we provide industry-specific tracking 
            solutions designed to address your unique challenges.
          </motion.p>
        </div>

        {/* Industries grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Industry selector */}
          <div className="lg:col-span-1 space-y-2">
            {industries.map((industry) => (
              <motion.button
                key={industry.id}
                onClick={() => setActiveIndustry(industry)}
                className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all ${
                  activeIndustry.id === industry.id
                    ? "bg-brand-green text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-brand-green/5"
                }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeIndustry.id === industry.id
                      ? "bg-white/20"
                      : "bg-brand-green/10"
                  }`}
                >
                  <industry.icon
                    className={`w-5 h-5 ${
                      activeIndustry.id === industry.id
                        ? "text-white"
                        : "text-brand-green"
                    }`}
                  />
                </div>
                <span className="font-medium">{industry.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Industry details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-white border-slate-100">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center">
                        <activeIndustry.icon className="w-8 h-8 text-brand-green" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {activeIndustry.title}
                        </h3>
                        <p className="text-slate-500">Industry Solutions</p>
                      </div>
                    </div>

                    <p className="text-slate-600 text-lg mb-8">
                      {activeIndustry.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-4">
                        Key Benefits
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {activeIndustry.benefits.map((benefit, index) => (
                          <motion.div
                            key={benefit}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <span className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="w-2 h-2 bg-brand-green rounded-full" />
                            </span>
                            <span className="text-slate-600">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
