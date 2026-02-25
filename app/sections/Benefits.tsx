"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import {
  Shield,
  TrendingDown,
  Clock,
  MapPin,
  Bell,
  BarChart3,
} from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Theft Protection",
    description:
      "Real-time alerts and immobilizer integration to prevent unauthorized vehicle use and recover stolen assets quickly.",
  },
  {
    icon: TrendingDown,
    title: "Fuel Savings",
    description:
      "Monitor fuel consumption, detect anomalies, and reduce fuel costs by up to 25% with intelligent monitoring.",
  },
  {
    icon: Clock,
    title: "Route Optimization",
    description:
      "Optimize delivery routes, reduce travel time, and improve operational efficiency with AI-powered suggestions.",
  },
  {
    icon: MapPin,
    title: "Live Location",
    description:
      "Track your entire fleet in real-time with precision GPS accuracy and historical route playback.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description:
      "Get notified immediately for speed violations, geofence breaches, unauthorized usage, and maintenance needs.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description:
      "Comprehensive reports on driver behavior, vehicle performance, and operational metrics to drive decisions.",
  },
];

export function Benefits() {
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
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Benefits That Drive{" "}
            <span className="text-brand-green">Real Results</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Our comprehensive tracking solutions deliver measurable improvements 
            across security, efficiency, and cost savings for your fleet operations.
          </motion.p>
        </div>

        {/* Benefits grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full bg-white border-slate-100 hover:shadow-lg hover:border-brand-green/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
