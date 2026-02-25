"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Zap, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const trustBadges = [
  { icon: Shield, text: "ISO Certified" },
  { icon: Zap, text: "99.9% Uptime" },
  { icon: MapPin, text: "Pakistan-Wide Coverage" },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || !bgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
      aria-label="Hero"
    >
      {/* Parallax background */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

        {/* 3D Globe Scene */}
        <div className="absolute inset-0 z-0 opacity-60 lg:opacity-100">
           <Scene />
        </div>

        {/* Green radial glow */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-green-brand/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-20 pointer-events-none">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl pointer-events-auto"
          >
            {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400 font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Pakistan&apos;s #1 Fleet Management Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] tracking-tight mb-6"
          >
            Track.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-light">
              Protect.
            </span>{" "}
            <br />
            Optimize.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
          >
            Real-time GPS tracking, fuel intelligence, and driver analytics — giving Pakistani businesses complete control over their fleet and assets, 24/7.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-green-brand hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-green-900/40 hover:-translate-y-0.5 group"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-green-500/50 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 hover:bg-green-500/5"
            >
              View Solutions
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-5 items-center"
          >
            <span className="text-slate-500 text-sm">Trusted by businesses across Pakistan:</span>
            {trustBadges.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 text-slate-400 text-sm"
              >
                <Icon className="w-4 h-4 text-green-500" />
                {text}
              </div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Empty column for Globe visibility */}
        <div className="hidden lg:block h-full min-h-[500px]" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
