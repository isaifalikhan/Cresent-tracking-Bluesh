"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Crescent Tracking transformed our delivery operations. We reduced fuel costs by 38% in the first quarter and our drivers are significantly more responsible on the road.",
    author: "Imran Shahid",
    role: "Operations Director",
    company: "Swift Logistics Pvt Ltd",
    initials: "IS",
  },
  {
    quote:
      "We've tried other tracking companies before, but Crescent's platform is a different league. The alerts are instant, the dashboard is intuitive, and their support team is always available.",
    author: "Ayesha Khalid",
    role: "Fleet Manager",
    company: "Medica Pharma Distribution",
    initials: "AK",
  },
  {
    quote:
      "After installing Crescent's immobilizer system, we haven't had a single theft incident in over two years. The peace of mind is worth every rupee.",
    author: "Ahmed Raza",
    role: "Owner",
    company: "Raza Transport & Co.",
    initials: "AR",
  },
  {
    quote:
      "The geo-fencing feature is brilliant for our construction sites. We get instant alerts if any equipment leaves the site — it's already saved us from two potential thefts.",
    author: "Salman Baig",
    role: "Project Manager",
    company: "BuildRight Construction",
    initials: "SB",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Client Testimonials"
          title="Trusted by fleet managers across Pakistan"
          description="Real results from real businesses."
        />

        <div className="relative mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-900 border border-white/5 rounded-3xl p-8 lg:p-12"
            >
              <Quote className="w-10 h-10 text-green-brand mb-6" />
              <blockquote className="text-white text-lg lg:text-xl leading-relaxed mb-8 font-medium">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-brand to-green-dark flex items-center justify-center font-display font-bold text-white">
                  {testimonials[current].initials}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonials[current].author}</div>
                  <div className="text-slate-400 text-sm">
                    {testimonials[current].role}, {testimonials[current].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-green-500" : "w-3 bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
