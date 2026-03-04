"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "How long does installation take?",
    a: "Standard installation takes 45–90 minutes per vehicle. For fleets of 10+ vehicles, we deploy a team and complete installation within 1–2 business days. We work around your schedule to minimize downtime.",
  },
  {
    q: "Is the GPS device hidden or visible?",
    a: "We offer both options. Our basic OBD devices plug into the diagnostic port visibly. For higher security, we offer hardwired hidden installations that are invisible without knowing exactly where to look.",
  },
  {
    q: "What happens if a vehicle goes into a cellular dead zone?",
    a: "Our devices store location data locally and automatically sync when connectivity is restored. You'll see the full path traveled, including through any areas without coverage.",
  },
  {
    q: "Can I access the platform on mobile?",
    a: "Yes. We have native iOS and Android apps plus a fully responsive web app. You can track, receive alerts, view reports, and manage your fleet from any device.",
  },
  {
    q: "Do you provide hardware or do I need to source it?",
    a: "We supply, install, and maintain all hardware. Your subscription includes the device cost spread over the contract term. We use only certified, military-grade GPS modules.",
  },
  {
    q: "What is the accuracy of location tracking?",
    a: "Our GPS devices achieve 3–5 meter accuracy under open sky. Combined with GSM network data, we provide highly reliable position data even in urban canyons.",
  },
  {
    q: "Can I integrate with my existing ERP or logistics software?",
    a: "Yes. Our Enterprise plan includes full API access. We have pre-built integrations for common ERPs and TMS platforms, and our team can develop custom integrations as needed.",
  },
  {
    q: "What is the minimum fleet size you support?",
    a: "We work with fleets of any size — from a single vehicle for personal tracking to thousands for enterprise logistics operations.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="Common questions answered"
          description="Everything you need to know about our tracking solutions."
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
