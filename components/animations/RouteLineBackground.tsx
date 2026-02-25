"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface RouteLineBackgroundProps {
  className?: string;
}

export function RouteLineBackground({ className }: RouteLineBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main route line */}
        <motion.path
          d="M -100 400 Q 200 200, 400 400 T 800 400 T 1300 300"
          fill="none"
          stroke="url(#routeGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          style={{ pathLength }}
        />
        
        {/* Secondary route line */}
        <motion.path
          d="M -100 500 Q 300 600, 500 450 T 900 500 T 1300 400"
          fill="none"
          stroke="url(#routeGradient2)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          style={{ pathLength }}
          opacity={0.5}
        />

        {/* Waypoints */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <circle cx="400" cy="400" r="8" fill="#0D4A3E" className="animate-pulse" />
          <circle cx="800" cy="400" r="6" fill="#DC2626" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
          <circle cx="600" cy="450" r="5" fill="#0D4A3E" opacity="0.6" />
        </motion.g>

        {/* Radar rings */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <circle cx="400" cy="400" r="30" fill="none" stroke="#0D4A3E" strokeWidth="1" opacity="0.3">
            <animate attributeName="r" from="20" to="60" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
        </motion.g>

        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0D4A3E" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#0D4A3E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#DC2626" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="routeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1A6B5B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#1A6B5B" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
