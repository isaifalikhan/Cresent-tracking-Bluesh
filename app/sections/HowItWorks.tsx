"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FadeInView } from "@/components/animations/FadeInView";
import { Phone, Settings, MapPin } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Contact Us",
    description:
      "Reach out to our team for a free consultation. We'll understand your tracking needs and recommend the best solution for your fleet or assets.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Installation",
    description:
      "Our certified technicians install GPS tracking devices in your vehicles or assets. The process is quick, non-intrusive, and doesn't void warranties.",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Start Tracking",
    description:
      "Access your personalized dashboard and mobile app to start monitoring your fleet in real-time. Get instant alerts and detailed reports.",
  },
];

export function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: "-100px" });

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
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Get Started in{" "}
            <span className="text-brand-green">3 Simple Steps</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            From consultation to full deployment, we make the process seamless 
            and hassle-free. Start tracking your fleet within 24 hours.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative" ref={lineRef}>
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 z-0">
            <motion.div
              className="h-full bg-brand-green"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <FadeInView key={step.number} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full bg-white border-slate-100 hover:shadow-xl hover:border-brand-green/20 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      {/* Step number */}
                      <div className="relative inline-block mb-6">
                        <div className="w-20 h-20 bg-brand-green rounded-2xl flex items-center justify-center mx-auto">
                          <step.icon className="w-10 h-10 text-white" />
                        </div>
                        <span className="absolute -top-2 -right-2 w-8 h-8 bg-brand-red text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
