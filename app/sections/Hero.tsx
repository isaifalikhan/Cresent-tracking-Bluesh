"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, MapPin, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RouteLineBackground } from "@/components/animations/RouteLineBackground";

const trustBadges = [
  "ISO 9001 Certified",
  "24/7 Support",
  "99.9% Uptime",
  "PTA Approved",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-green/5">
      {/* Background animations */}
      <RouteLineBackground />
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-brand-green rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-brand-red rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-brand-green rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-brand-green/50 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Pakistan&apos;s Trusted Tracking Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
            >
              Track.{" "}
              <span className="text-brand-green">Protect.</span>{" "}
              <span className="relative">
                Optimize.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <motion.path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="#DC2626"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed"
            >
              Advanced GPS tracking and fleet management solutions for businesses 
              across Pakistan. Real-time monitoring, fuel management, and comprehensive 
              asset protection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button
                size="lg"
                variant="brand"
                className="group"
                asChild
              >
                <Link href="/contact/">
                  Get a Quote
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300"
                asChild
              >
                <Link href="/solutions/">View Solutions</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <p className="text-sm text-slate-500">
                Trusted by businesses across Pakistan:
              </p>
              <div className="flex flex-wrap gap-3">
                {trustBadges.map((badge, index) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1 text-xs text-slate-600 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100"
                  >
                    <CheckCircle className="w-3 h-3 text-brand-green" />
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main dashboard mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Live Tracking</p>
                      <p className="text-xs text-slate-500">Fleet Dashboard</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Map visualization */}
                <div className="bg-slate-50 rounded-xl h-64 mb-6 relative overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 250">
                    {/* Grid lines */}
                    <defs>
                      <pattern id="heroGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#heroGrid)" />
                    
                    {/* Route lines */}
                    <motion.path
                      d="M 50 200 Q 150 150, 200 180 T 350 120"
                      fill="none"
                      stroke="#0D4A3E"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    
                    {/* Vehicle markers */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      <circle cx="200" cy="180" r="8" fill="#0D4A3E" />
                      <circle cx="200" cy="180" r="12" fill="none" stroke="#0D4A3E" strokeWidth="2" opacity="0.3">
                        <animate attributeName="r" from="8" to="20" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                    </motion.g>
                    
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                    >
                      <circle cx="350" cy="120" r="6" fill="#DC2626" />
                    </motion.g>
                  </svg>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="text-2xl font-bold text-brand-green">247</p>
                    <p className="text-xs text-slate-500">Vehicles</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="text-2xl font-bold text-brand-green">98%</p>
                    <p className="text-xs text-slate-500">Uptime</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <p className="text-2xl font-bold text-brand-red">-23%</p>
                    <p className="text-xs text-slate-500">Fuel Cost</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-lg p-4 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Efficiency</p>
                    <p className="text-xs text-green-600">+34% improved</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-lg p-4 border border-slate-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Security</p>
                    <p className="text-xs text-brand-green">Active</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
