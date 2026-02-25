"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeInView } from "@/components/animations/FadeInView";

const faqs = [
  {
    question: "How does GPS vehicle tracking work?",
    answer:
      "Our GPS tracking devices use satellite technology to determine the precise location of your vehicles. The device transmits this data via cellular networks to our secure servers, where you can access it through our web dashboard or mobile app in real-time.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation typically takes 30-60 minutes per vehicle, depending on the type of vehicle and features required. Our certified technicians ensure proper installation without voiding your vehicle warranty. For large fleets, we can install multiple vehicles simultaneously.",
  },
  {
    question: "Can I track my vehicles from my phone?",
    answer:
      "Yes! Our mobile app is available for both iOS and Android devices. You can track your fleet, receive alerts, view reports, and manage settings from anywhere with an internet connection.",
  },
  {
    question: "What happens if a vehicle goes out of cellular coverage?",
    answer:
      "Our devices store location data locally when out of coverage and automatically sync once the vehicle returns to a coverage area. You won't lose any tracking history, and critical alerts are queued for delivery.",
  },
  {
    question: "Is the tracking data secure?",
    answer:
      "Absolutely. We use bank-level encryption for all data transmission and storage. Our servers are hosted in secure, redundant data centers. You have full control over who can access your fleet data through our role-based access control system.",
  },
  {
    question: "Can I integrate with my existing systems?",
    answer:
      "Yes, we offer API access for Professional and Enterprise plans. You can integrate our tracking data with your ERP, fleet management, or logistics software. Our technical team can assist with custom integrations.",
  },
  {
    question: "What kind of alerts can I set up?",
    answer:
      "You can configure alerts for speed violations, geofence breaches, unauthorized usage, harsh driving behavior, low fuel, maintenance reminders, and more. Alerts can be sent via SMS, email, or push notifications.",
  },
  {
    question: "Do you offer support after installation?",
    answer:
      "Yes, we provide ongoing technical support through phone, email, and live chat. Starter plans include standard business hours support, while Professional and Enterprise plans include priority 24/7 support with dedicated account managers.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Header */}
          <div className="lg:sticky lg:top-32">
            <FadeInView>
              <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-4">
                FAQ
              </span>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Frequently Asked{" "}
                <span className="text-brand-green">Questions</span>
              </h2>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-lg text-slate-600 mb-8">
                Got questions? We&apos;ve got answers. If you can&apos;t find what 
                you&apos;re looking for, feel free to contact our support team.
              </p>
            </FadeInView>
            <FadeInView delay={0.3}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                  <span className="text-brand-green font-semibold">?</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    Still have questions?
                  </p>
                  <a
                    href="/contact/"
                    className="text-brand-green hover:underline"
                  >
                    Contact our team
                  </a>
                </div>
              </div>
            </FadeInView>
          </div>

          {/* Right side - Accordion */}
          <FadeInView delay={0.2} direction="left">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border border-slate-100 px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
