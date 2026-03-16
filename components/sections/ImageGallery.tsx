"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const GALLERY_IMAGES = [
  "/images/track.jpeg",
  "/images/fleet.jpeg",
  "/images/dashboard.jpeg",
  "/images/fuelmanage.jpeg",
  "/images/fuelmanagement.jpeg",
  "/images/tripreport.jpeg",
  "/images/biketracking.jpeg",
  "/images/Gpstracker.jpeg",
  "/images/summaryreport.jpeg",
  "/images/historyplay.jpeg",
  "/images/fleeymonitoring.jpeg",
  "/images/12.jpeg",
  "/images/13.jpeg",
  "/images/14.jpeg",
  // Filename with spaces: use encoded path so Next.js Image works in production
  "/images/WhatsApp%20Image%202026-03-10%20at%201.22.35%20PM.jpeg",
] as const;

interface ImageGalleryProps {
  title?: string;
  badge?: string;
  description?: string;
  columns?: 2 | 3 | 4;
  lightbox?: boolean;
  className?: string;
}

export default function ImageGallery({
  title = "Our Gallery",
  badge = "Crescent in Action",
  description,
  columns = 4,
  lightbox = true,
  className = "",
}: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <section className={`py-16 lg:py-24 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {(title || badge || description) && (
            <div className="text-center max-w-2xl mx-auto mb-12">
              {badge && (
                <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-600 dark:text-green-400 font-medium mb-4">
                  {badge}
                </span>
              )}
              {title && (
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-3">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              )}
            </div>
          )}

          {/* Full-width grid: 1 col mobile, 2–3 cols larger screens; larger cells */}
          <div
            className={`grid gap-6 sm:gap-8 grid-cols-1 ${
              columns === 3 ? "md:grid-cols-2 xl:grid-cols-3" : columns === 4 ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2"
            }`}
          >
            {GALLERY_IMAGES.map((src, index) => (
              <motion.div
                key={src + index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className={`relative aspect-[16/10] min-h-[280px] sm:min-h-[320px] rounded-2xl overflow-hidden bg-card shadow-lg ring-1 ring-border/80 transition-all duration-300 ${
                  lightbox
                    ? "cursor-pointer hover:shadow-xl hover:ring-2 hover:ring-green-500/40 hover:-translate-y-0.5"
                    : ""
                } group`}
                onClick={() => lightbox && setSelectedIndex(index)}
              >
                <Image
                  src={src}
                  alt={`Crescent Tracking ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {lightbox && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-foreground shadow-lg backdrop-blur-sm">
                      View
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-4 right-4 z-10 rounded-full p-2.5 bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl h-[80vh] min-h-[300px] rounded-2xl overflow-hidden bg-card shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[selectedIndex]}
                alt={`Crescent Tracking gallery ${selectedIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
