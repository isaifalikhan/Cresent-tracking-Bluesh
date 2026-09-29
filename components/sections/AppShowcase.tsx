"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Poster = { src: string; alt: string; width: number; height: number };

// Two columns, each holding one portrait + one square poster, so both columns end at the same height.
const COLUMNS: Poster[][] = [
  [
    {
      src: "/images/app/fleet-management-app.jpg",
      alt: "Crescent Tracking fleet management app with live map, vehicle list and fleet status",
      width: 1066,
      height: 1600,
    },
    {
      src: "/images/app/over-speed-alert.jpg",
      alt: "Crescent Tracking over speed alert notifications on a mobile phone",
      width: 1080,
      height: 1080,
    },
  ],
  [
    {
      src: "/images/app/real-time-vehicle-tracking.jpg",
      alt: "Real-time vehicle tracking with live location, speed and vehicle status",
      width: 1066,
      height: 1600,
    },
    {
      src: "/images/app/live-tracking-mobile-app.jpg",
      alt: "Upgraded Crescent mobile app for live tracking",
      width: 1600,
      height: 1600,
    },
  ],
];

const POSTERS = COLUMNS.flat();

export default function AppShowcase() {
  const [selected, setSelected] = useState<Poster | null>(null);

  return (
    <>
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-600 dark:text-green-400 font-medium mb-4">
              Crescent Mobile App
            </span>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-3">
              Track, Manage &amp; Grow From Your Phone
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Live location, speed visibility, over-speed alerts and complete fleet status — all in the upgraded Crescent app.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {COLUMNS.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-6 sm:gap-8">
                {column.map((poster) => {
                  const index = POSTERS.indexOf(poster);
                  return (
                    <motion.button
                      type="button"
                      key={poster.src}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      onClick={() => setSelected(poster)}
                      aria-label={`View ${poster.alt}`}
                      className="group relative block w-full rounded-2xl overflow-hidden bg-card shadow-lg ring-1 ring-border/80 transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-green-500/40 hover:-translate-y-0.5"
                    >
                      <Image
                        src={poster.src}
                        alt={poster.alt}
                        width={poster.width}
                        height={poster.height}
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="w-full h-auto"
                      />
                    </motion.button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-4 right-4 z-10 rounded-full p-2.5 bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setSelected(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl h-[85vh] min-h-[300px]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selected.src} alt={selected.alt} fill sizes="100vw" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
