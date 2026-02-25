"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  toggleActions?: string;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

export function useScrollAnimation(
  animationCallback: (tl: gsap.core.Timeline) => void,
  options: ScrollAnimationOptions = {}
) {
  const elementRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !elementRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: options.trigger || elementRef.current,
        start: options.start || "top 80%",
        end: options.end || "bottom 20%",
        scrub: options.scrub || false,
        markers: options.markers || false,
        toggleActions: options.toggleActions || "play none none reverse",
        onEnter: options.onEnter,
        onLeave: options.onLeave,
        onEnterBack: options.onEnterBack,
        onLeaveBack: options.onLeaveBack,
      },
    });

    timelineRef.current = tl;
    animationCallback(tl);

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
        if (timelineRef.current.scrollTrigger) {
          timelineRef.current.scrollTrigger.kill();
        }
      }
    };
  }, []);

  return elementRef;
}
