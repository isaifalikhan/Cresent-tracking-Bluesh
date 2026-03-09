"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "What is Crescent?",
    a: "Crescent is a large business group and Crescent Tracking is our dedicated vehicle tracking company. We operate in a highly competitive environment where service providers must optimize resources and provide timely information. Crescent delivers a state-of-the-art GPS / GPRS solution that lets you monitor and control moving assets in real time, giving you secure access to your vehicle from anywhere.",
  },
  {
    q: "How can I upgrade my package?",
    a: "You can upgrade your package at any time by paying the difference in package cost. Contact our Customer Service or Sales team and they will guide you through the upgrade process and any applicable charges.",
  },
  {
    q: "What documentation is required to register for Crescent Tracking?",
    a: "To register for Crescent Tracking you need a valid CNIC and the Vehicle Registration document. In some cases, additional documents may be requested as per regulatory or company policy.",
  },
  {
    q: "For how long are Crescent products under warranty?",
    a: "Crescent products come with a warranty period during which we will repair device-related faults to keep you satisfied. The warranty is not applicable if the device has been opened or repaired by anyone other than Crescent workshop staff, or if it has been damaged due to collision, water damage, or other misuse.",
  },
  {
    q: "Are Crescent products compatible with my type of vehicle?",
    a: "Yes. The tracking devices used by Crescent are compatible with almost all types of vehicles, including cars, bikes, commercial vehicles, and fleets. Our installation team will recommend the right device for your vehicle type.",
  },
  {
    q: "Can I get my tracking device transferred to another vehicle?",
    a: "Yes, you can have your tracking unit transferred from one vehicle to another. To avoid any inconvenience, please inform the Customer Service Department in advance so they can schedule the work and guide you through the procedure and applicable charges.",
  },
  {
    q: "Can I change the ownership of a tracking device?",
    a: "Yes. Ownership can be changed after completing the required documentation, including a No Objection Certificate (NOC) from the existing owner and the new owner’s CNIC and contact details.",
  },
  {
    q: "What if I personalize or change my vehicle registration number?",
    a: "If you change or personalize your vehicle registration number, it is essential that you inform the Customer Service Department so we can update your records and ensure that reports, alerts, and legal documentation remain accurate.",
  },
  {
    q: "Why should I switch to Crescent from another tracking company?",
    a: "With state-of-the-art infrastructure, Crescent monitors your vehicles through GPS and GPRS, providing a cost-effective, efficient, and secure way to track your vehicles in less time with higher reliability. Our 24/7 control room and nationwide coverage help ensure better protection and support.",
  },
  {
    q: "What technology does Crescent use to track vehicles?",
    a: "Vehicles are monitored using a combination of GPS, GPRS, and GSM technologies. This hybrid approach ensures continuous tracking, communication, and control, even in challenging environments.",
  },
  {
    q: "What are GPS and GPRS?",
    a: "GPS (Global Positioning System) uses satellites to determine the exact location of your vehicle. GPRS (General Packet Radio Service) uses mobile networks to transmit this data so that you can see the speed, direction, and position of the vehicle in near real time.",
  },
  {
    q: "How does the tracking device work?",
    a: "The device installed in your vehicle collects GPS data and uses GPRS and GSM technology to send status updates, alerts, and commands. Crescent’s control room and platforms use this information to display live location, history, and alarms.",
  },
  {
    q: "How long does installation take?",
    a: "For a standard vehicle, installation usually takes around 4–6 hours including wiring, device configuration, and testing. For larger fleets, our team plans installations to minimize downtime and complete work as efficiently as possible.",
  },
  {
    q: "Does Crescent work in other cities?",
    a: "Yes. Crescent operates across Pakistan with 24/7 monitoring. Your vehicles can be tracked in major cities and on highways nationwide as long as there is sufficient GSM coverage.",
  },
  {
    q: "Can I change my vehicle password or security PIN?",
    a: "Yes, you can change your password or security PIN at any time by contacting the Crescent Security Department or Customer Service. For your safety, verification steps will be required before updating credentials.",
  },
  {
    q: "What should I do if my car is stolen or snatched?",
    a: "Do not resist. Safely hand over the vehicle and do not disclose that a tracking device is installed. Immediately call the Crescent Control Room at 0333-7776123 and briefly explain the incident. Our team will start recovery operations right away and keep you updated.",
  },
  {
    q: "What happens if my car battery is tampered with or disconnected?",
    a: "If the battery is disconnected or tampered with, the device sends a high-alert signal to Crescent’s Control Room. Our team, along with law enforcement where required, responds immediately according to the situation. To avoid false alarms and inconvenience, please inform us in advance if you plan to disconnect the battery for maintenance.",
  },
  {
    q: "When should I get my tracking device re-checked?",
    a: "Crescent devices are designed to work smoothly and have a long service life, typically up to 5 years or more. The device performs self-tests via network signals, but if you notice any issue with tracking, alerts, or reports, you should contact Customer Service to schedule a checkup.",
  },
  {
    q: "Does the tracking device affect my car battery?",
    a: "Devices used by Crescent are engineered to operate on very low power consumption and do not normally affect the car battery. However, if there is an existing electrical fault or abnormality in the vehicle’s wiring, overall battery drain can increase. Our technicians inspect for such issues during installation.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
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
