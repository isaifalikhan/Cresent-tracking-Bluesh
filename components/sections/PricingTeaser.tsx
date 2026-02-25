"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const plans = [
  {
    name: "Starter",
    tagline: "For small fleets",
    price: "2,500",
    unit: "/ vehicle / month",
    features: [
      "Real-time GPS tracking",
      "Basic alerts (speed, geo-fence)",
      "30-day trip history",
      "Mobile & web app",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Business",
    tagline: "Most popular",
    price: "4,500",
    unit: "/ vehicle / month",
    features: [
      "Everything in Starter",
      "Fuel monitoring",
      "Driver behavior scoring",
      "Maintenance reminders",
      "90-day trip history",
      "Priority support",
      "Custom reports",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "For large operations",
    price: "Custom",
    unit: "",
    features: [
      "Everything in Business",
      "Dedicated account manager",
      "API integration",
      "White-label option",
      "Unlimited history",
      "Custom integrations",
      "24/7 phone support",
      "On-site training",
    ],
    cta: "Talk to Sales",
    popular: false,
  },
];

export default function PricingTeaser() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 lg:py-32 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Simple Pricing"
          title="Transparent pricing, no hidden fees"
          description="All plans include hardware setup, installation, and onboarding. PKR pricing inclusive of all taxes."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.popular
                  ? "border-2 border-green-500 bg-gradient-to-b from-green-950/30 to-slate-900 shadow-xl shadow-green-900/20"
                  : "border border-white/5 bg-slate-900/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-green-brand text-white text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-display font-bold text-white text-xl mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.tagline}</p>
              </div>
              <div className="mb-6">
                <span className="font-display font-bold text-white text-4xl">
                  {plan.price === "Custom" ? "" : "₨"}
                  {plan.price}
                </span>
                {plan.unit && <span className="text-slate-500 text-sm ml-1">{plan.unit}</span>}
              </div>
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={plan.name === "Enterprise" ? "/contact" : "/pricing"}
                className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.popular
                    ? "bg-green-brand hover:bg-green-600 text-white shadow-lg shadow-green-900/40"
                    : "border border-white/10 text-white hover:border-white/30 hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          All prices in PKR. Minimum 10 vehicles for Business plan. Annual subscriptions available with 15% discount.{" "}
          <Link href="/pricing" className="text-green-400 hover:text-green-300 transition-colors">
            See full pricing →
          </Link>
        </p>
      </div>
    </section>
  );
}
