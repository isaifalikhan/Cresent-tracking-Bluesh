"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeInView } from "@/components/animations/FadeInView";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "Fleet Manager",
    company: "Swift Logistics Pakistan",
    content:
      "Crescent Tracking has transformed our fleet operations. We've reduced fuel costs by 28% and improved delivery times significantly. The real-time alerts help us respond to issues immediately.",
    rating: 5,
  },
  {
    id: 2,
    name: "Fatima Zahra",
    role: "Operations Director",
    company: "Pakistan Transport Co.",
    content:
      "The driver behavior monitoring feature has been a game-changer for us. Accidents have decreased by 40% since implementation, and our insurance premiums have dropped.",
    rating: 5,
  },
  {
    id: 3,
    name: "Muhammad Ali",
    role: "CEO",
    company: "Construction Solutions Ltd",
    content:
      "We track over 150 pieces of heavy equipment across multiple job sites. Crescent Tracking's ruggedized devices and geo-fencing features give us complete peace of mind.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sara Malik",
    role: "Fleet Coordinator",
    company: "City Cab Services",
    content:
      "The customer support is exceptional. Any issue is resolved within hours. The dashboard is intuitive, and our drivers love the mobile app for route optimization.",
    rating: 5,
  },
  {
    id: 5,
    name: "Imran Hussain",
    role: "Logistics Head",
    company: "Fresh Produce Pakistan",
    content:
      "Temperature monitoring combined with GPS tracking ensures our perishable goods reach their destination in perfect condition. Highly recommended for cold chain logistics.",
    rating: 5,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            What Our Clients{" "}
            <span className="text-brand-green">Say About Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Don&apos;t just take our word for it. Here&apos;s what industry leaders 
            across Pakistan have to say about our tracking solutions.
          </motion.p>
        </div>

        {/* Carousel */}
        <FadeInView>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                  >
                    <Card className="h-full bg-white border-slate-100">
                      <CardContent className="p-6">
                        {/* Quote icon */}
                        <Quote className="w-10 h-10 text-brand-green/20 mb-4" />

                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 fill-yellow-400 text-yellow-400"
                              />
                            )
                          )}
                        </div>

                        {/* Content */}
                        <p className="text-slate-600 mb-6 leading-relaxed">
                          &ldquo;{testimonial.content}&rdquo;
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                            <span className="text-brand-green font-semibold">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-slate-900">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-slate-500">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      selectedIndex === index
                        ? "w-6 bg-brand-green"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
