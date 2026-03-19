"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTABanner() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-green-100 to-green-50 dark:from-green-950 dark:via-green-900 dark:to-green-950 transition-colors duration-300" />
          <div className="absolute inset-0 bg-grid-light dark:bg-grid opacity-30 mix-blend-overlay" />
          {/* Glow orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 dark:bg-green-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 dark:bg-green-light/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center px-8 py-16 lg:py-20">
            <h2 className="font-display font-bold text-green-950 dark:text-white text-4xl lg:text-5xl mb-4 transition-colors duration-300">
              Ready to take control of your fleet?
            </h2>
            <p className="text-green-800/80 dark:text-green-100/80 text-lg max-w-2xl mx-auto mb-10 transition-colors duration-300">
              Join  50,000 Pakistani businesses already using Crescent Tracking to protect assets, reduce costs, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700 dark:bg-white dark:text-green-950 dark:hover:bg-green-50 font-bold px-8 py-4 rounded-xl transition-all shadow-xl group"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/923000448888"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-600/30 text-green-700 hover:bg-green-600/10 dark:border-white/30 dark:text-white dark:hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
