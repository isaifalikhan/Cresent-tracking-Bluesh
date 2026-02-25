"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { Check, ArrowRight, Building2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small fleets",
    price: "1,499",
    period: "per vehicle/month",
    features: [
      "Real-time GPS tracking",
      "Mobile app access",
      "Basic reports",
      "Email alerts",
      "7-day history",
      "Standard support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing businesses",
    price: "2,499",
    period: "per vehicle/month",
    features: [
      "Everything in Starter",
      "Fuel monitoring",
      "Driver behavior analysis",
      "Geo-fencing",
      "30-day history",
      "Priority support",
      "API access",
      "Custom reports",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Large fleet solutions",
    price: "3,999",
    period: "per vehicle/month",
    features: [
      "Everything in Professional",
      "Immobilizer control",
      "Advanced analytics",
      "Unlimited history",
      "Dedicated manager",
      "SLA guarantee",
      "White-label option",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-4"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            Simple, Transparent{" "}
            <span className="text-brand-green">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Choose the plan that fits your fleet size and requirements. 
            All plans include hardware, installation, and support.
          </motion.p>
        </div>

        {/* Pricing cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card
                  className={`h-full relative ${
                    plan.popular
                      ? "border-brand-green shadow-xl shadow-brand-green/10"
                      : "border-slate-100"
                  }`}
                >
                  {plan.popular && (
                    <Badge
                      variant="brand"
                      className="absolute -top-3 left-1/2 -translate-x-1/2"
                    >
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="pb-4">
                    <h3 className="text-xl font-bold text-slate-900">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-slate-500">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="mb-6">
                      <span className="text-sm text-slate-500">PKR</span>
                      <span className="text-4xl font-bold text-slate-900">
                        {" "}
                        {plan.price}
                      </span>
                      <span className="text-sm text-slate-500">
                        {" "}
                        {plan.period}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-slate-600"
                        >
                          <Check className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={plan.popular ? "brand" : "outline"}
                      className="w-full group"
                      asChild
                    >
                      <Link href="/contact/">
                        {plan.cta}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="inline-flex items-center gap-4 px-6 py-4 bg-slate-50 border-slate-100">
            <Building2 className="w-8 h-8 text-brand-green" />
            <div className="text-left">
              <p className="font-semibold text-slate-900">
                Need a custom solution?
              </p>
              <p className="text-sm text-slate-500">
                Contact us for fleets over 100 vehicles
              </p>
            </div>
            <Button variant="brand" size="sm" asChild>
              <Link href="/contact/">Contact Sales</Link>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
