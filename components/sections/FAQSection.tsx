"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/faqs";

export default function FAQSection({ headingAs = "h2" }: { headingAs?: "h1" | "h2" }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          as={headingAs}
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Stay close to your vehicles with clear answers to the most common Crescent Tracking questions."
        />

        <div className="mt-16 space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border rounded-2xl bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex items-center justify-between w-full p-6 text-left hover:bg-accent/50 transition-colors"
              >
                <span className="font-semibold text-foreground text-lg">{faq.q}</span>
                {open === i ? (
                  <Minus className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Plus className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
