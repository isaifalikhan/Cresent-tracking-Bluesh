"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PhoneCall, Cpu, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Consult & Configure",
    description:
      "Our team visits your fleet, assesses your requirements, and designs the optimal tracking configuration. We handle hardware selection, installation scheduling, and software setup.",
  },
  {
    step: "02",
    icon: Cpu,
    title: "Install & Activate",
    description:
      "Certified technicians install GPS devices in your vehicles — discreetly and professionally. Devices are activated, tested, and added to your dashboard within 24 hours.",
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Track & Optimize",
    description:
      "Log in to your live dashboard, set up alerts, and start saving. Our support team provides onboarding training and is available 24/7 to help you get maximum ROI.",
  },
];

export default function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "center center",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title="Up and running in 3 simple steps"
          description="From first contact to full deployment — we make it effortless."
        />

        <div ref={ref} className="relative mt-16">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[16.67%] right-[16.67%] h-px bg-slate-800">
            <div
              ref={lineRef}
              className="absolute inset-0 bg-gradient-to-r from-green-brand via-green-light to-green-brand origin-left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative text-center lg:text-left"
              >
                {/* Step number circle */}
                <div className="flex lg:justify-start justify-center mb-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-dark to-green-brand flex items-center justify-center shadow-xl shadow-green-900/40">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-green-brand border-2 border-slate-950 flex items-center justify-center">
                      <span className="text-white text-xs font-bold font-mono">{step.step}</span>
                    </div>
                  </div>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
