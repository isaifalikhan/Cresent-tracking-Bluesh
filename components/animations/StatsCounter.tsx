"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

interface StatsCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  label?: string;
}

export function StatsCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2.5,
  className = "",
  label,
}: StatsCounterProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-green">
        {inView ? (
          <CountUp
            start={0}
            end={end}
            duration={duration}
            prefix={prefix}
            suffix={suffix}
            enableScrollSpy={false}
          />
        ) : (
          <span>{prefix}0{suffix}</span>
        )}
      </div>
      {label && (
        <p className="mt-2 text-sm md:text-base text-muted-foreground">{label}</p>
      )}
    </div>
  );
}
