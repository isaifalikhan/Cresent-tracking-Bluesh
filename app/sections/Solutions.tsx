"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import {
  MapPin,
  Fuel,
  UserCog,
  Hexagon,
  Power,
  Package,
  Bell,
  Route,
} from "lucide-react";

const solutions = [
  {
    icon: MapPin,
    title: "GPS Tracking",
    description:
      "Real-time vehicle location tracking with precision GPS technology and historical route playback.",
    features: ["Live location updates", "Route history", "Speed monitoring"],
  },
  {
    icon: Fuel,
    title: "Fuel Monitoring",
    description:
      "Comprehensive fuel level monitoring with anomaly detection and consumption analytics.",
    features: ["Fuel level alerts", "Theft detection", "Consumption reports"],
  },
  {
    icon: UserCog,
    title: "Driver Behavior",
    description:
      "Monitor and analyze driver performance to improve safety and reduce operational risks.",
    features: ["Speed analysis", "Harsh braking alerts", "Driving scores"],
  },
  {
    icon: Hexagon,
    title: "Geo-Fencing",
    description:
      "Create virtual boundaries and receive instant alerts when vehicles enter or exit designated areas.",
    features: ["Custom zones", "Entry/exit alerts", "Time-based rules"],
  },
  {
    icon: Power,
    title: "Immobilizer",
    description:
      "Remote engine disable capability to prevent unauthorized vehicle use and theft.",
    features: ["Remote control", "Theft prevention", "Emergency stop"],
  },
  {
    icon: Package,
    title: "Asset Tracking",
    description:
      "Track valuable assets and equipment beyond vehicles with portable GPS devices.",
    features: ["Portable trackers", "Battery powered", "Multi-asset support"],
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Customizable notification system for all tracking events and anomalies.",
    features: ["SMS/Email alerts", "Custom rules", "Priority levels"],
  },
  {
    icon: Route,
    title: "Route Planning",
    description:
      "AI-powered route optimization to reduce travel time and fuel consumption.",
    features: ["Optimal routes", "Traffic integration", "Delivery scheduling"],
  },
];

export function Solutions() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-4"
          >
            Our Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Complete Fleet Management{" "}
            <span className="text-brand-green">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            From basic GPS tracking to advanced fleet analytics, we offer 
            comprehensive solutions tailored to your business needs.
          </motion.p>
        </div>

        {/* Solutions grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <StaggerItem key={solution.title}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full bg-white border-slate-100 hover:shadow-xl hover:border-brand-green/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-green group-hover:text-white transition-colors">
                      <solution.icon className="w-6 h-6 text-brand-green group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      {solution.description}
                    </p>
                    <ul className="space-y-1">
                      {solution.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-xs text-slate-500 flex items-center gap-1"
                        >
                          <span className="w-1 h-1 bg-brand-green rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="brand" size="lg" className="group" asChild>
            <Link href="/solutions/">
              Explore All Solutions
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
