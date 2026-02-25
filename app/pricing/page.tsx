import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import {
  Check,
  X,
  ArrowRight,
  Building2,
  HelpCircle,
  Phone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing plans for GPS tracking and fleet management solutions. Choose the plan that fits your business needs.",
};

const plans = [
  {
    name: "Starter",
    description: "Perfect for small fleets up to 10 vehicles",
    price: "1,499",
    period: "per vehicle/month",
    features: [
      { text: "Real-time GPS tracking", included: true },
      { text: "Mobile app access", included: true },
      { text: "Basic reports", included: true },
      { text: "Email alerts", included: true },
      { text: "7-day history", included: true },
      { text: "Standard support", included: true },
      { text: "Fuel monitoring", included: false },
      { text: "Driver behavior", included: false },
      { text: "Geo-fencing", included: false },
      { text: "API access", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing businesses with 10-50 vehicles",
    price: "2,499",
    period: "per vehicle/month",
    features: [
      { text: "Everything in Starter", included: true },
      { text: "Fuel monitoring", included: true },
      { text: "Driver behavior analysis", included: true },
      { text: "Geo-fencing", included: true },
      { text: "30-day history", included: true },
      { text: "Priority support", included: true },
      { text: "API access", included: true },
      { text: "Custom reports", included: true },
      { text: "Immobilizer control", included: false },
      { text: "Dedicated manager", included: false },
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Large fleet solutions for 50+ vehicles",
    price: "3,999",
    period: "per vehicle/month",
    features: [
      { text: "Everything in Professional", included: true },
      { text: "Immobilizer control", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Unlimited history", included: true },
      { text: "Dedicated manager", included: true },
      { text: "SLA guarantee", included: true },
      { text: "White-label option", included: true },
      { text: "Custom integrations", included: true },
      { text: "On-premise deployment", included: true },
      { text: "24/7 phone support", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const addOns = [
  {
    name: "Fuel Monitoring Sensor",
    price: "PKR 500",
    period: "/vehicle/month",
    description: "Advanced fuel level monitoring with theft detection",
  },
  {
    name: "Temperature Monitoring",
    price: "PKR 400",
    period: "/vehicle/month",
    description: "For cold chain and temperature-sensitive cargo",
  },
  {
    name: "Driver ID System",
    price: "PKR 300",
    period: "/vehicle/month",
    description: "RFID-based driver identification and authentication",
  },
  {
    name: "Camera Integration",
    price: "PKR 1,500",
    period: "/vehicle/month",
    description: "Dashcam integration with cloud storage",
  },
];

const faqs = [
  {
    question: "Are there any setup fees?",
    answer:
      "No, there are no setup fees for Starter and Professional plans. Enterprise plans may have custom implementation fees depending on the complexity of the integration.",
  },
  {
    question: "What is the minimum contract period?",
    answer:
      "Our standard contracts are for 12 months with monthly billing options. We also offer discounted rates for annual prepayment.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes, you can upgrade your plan at any time. Downgrades take effect at the start of your next billing cycle.",
  },
  {
    question: "Is hardware included in the pricing?",
    answer:
      "Yes, GPS tracking devices are included in all plans with free installation. Asset trackers and specialized sensors are available as add-ons.",
  },
  {
    question: "Do you offer discounts for large fleets?",
    answer:
      "Yes, we offer volume discounts for fleets over 100 vehicles. Contact our sales team for a custom quote.",
  },
];

export default function PricingPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-brand-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-6">
                Pricing
              </span>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Simple, Transparent{" "}
                <span className="text-brand-green">Pricing</span>
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-xl text-slate-600 leading-relaxed">
                Choose the plan that fits your fleet size and requirements. 
                All plans include hardware, installation, and support.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <Card
                  className={`h-full relative ${
                    plan.popular
                      ? "border-brand-green shadow-xl shadow-brand-green/10 lg:scale-105"
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
                    <h3 className="text-2xl font-bold text-slate-900">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-slate-500">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="mb-6">
                      <span className="text-sm text-slate-500">PKR</span>
                      <span className="text-5xl font-bold text-slate-900">
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
                          key={feature.text}
                          className="flex items-center gap-3"
                        >
                          {feature.included ? (
                            <Check className="w-5 h-5 text-brand-green flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-slate-300 flex-shrink-0" />
                          )}
                          <span
                            className={
                              feature.included
                                ? "text-slate-600"
                                : "text-slate-400"
                            }
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant={plan.popular ? "brand" : "outline"}
                      className="w-full"
                      asChild
                    >
                      <Link href="/contact/">
                        {plan.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeInView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Optional Add-ons
              </h2>
              <p className="text-slate-600">
                Enhance your tracking solution with these additional features
              </p>
            </div>
          </FadeInView>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {addOns.map((addon) => (
              <StaggerItem key={addon.name}>
                <Card className="h-full bg-white border-slate-100">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-slate-900 mb-2">
                      {addon.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      {addon.description}
                    </p>
                    <p className="text-brand-green font-semibold">
                      {addon.price}
                      <span className="text-sm text-slate-500 font-normal">
                        {addon.period}
                      </span>
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeInView>
            <Card className="max-w-4xl mx-auto bg-brand-green border-0">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                      <Building2 className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Enterprise Solutions
                    </h2>
                    <p className="text-white/80">
                      Custom solutions for large fleets with 100+ vehicles. 
                      Get dedicated support, custom integrations, and volume discounts.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Button
                      variant="secondary"
                      className="bg-white text-brand-green hover:bg-white/90"
                      asChild
                    >
                      <Link href="/contact/">
                        Contact Sales
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <a
                      href="tel:+923001234567"
                      className="inline-flex items-center justify-center text-white/80 hover:text-white transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      +92 300 123 4567
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInView>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeInView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Pricing FAQ
              </h2>
              <p className="text-slate-600">
                Common questions about our pricing and billing
              </p>
            </div>
          </FadeInView>

          <FadeInView>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white rounded-lg border border-slate-100 px-6"
                  >
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-green">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still Have Questions?
              </h2>
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="text-xl text-white/80 mb-10">
                Our team is here to help you choose the right plan for your business.
              </p>
            </FadeInView>
            <FadeInView delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-brand-green hover:bg-white/90"
                  asChild
                >
                  <Link href="/contact/">
                    Contact Us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/services/">View Services</Link>
                </Button>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </div>
  );
}
