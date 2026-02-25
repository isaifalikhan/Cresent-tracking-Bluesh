import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import {
  Truck,
  Building2,
  HardHat,
  Car,
  Bus,
  Ship,
  Package,
  Factory,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Discover how Crescent Tracking serves various industries including fleet management, logistics, construction, and more with tailored GPS tracking solutions.",
};

const industries = [
  {
    icon: Truck,
    title: "Fleet Management",
    description:
      "Comprehensive solutions for commercial fleet operators to optimize routes, reduce costs, and improve operational efficiency.",
    challenges: [
      "High fuel costs",
      "Inefficient route planning",
      "Vehicle maintenance tracking",
      "Driver accountability",
    ],
    solutions: [
      "Real-time GPS tracking",
      "Fuel monitoring system",
      "Route optimization",
      "Driver behavior analysis",
    ],
    results: [
      "Up to 25% fuel savings",
      "30% improvement in delivery times",
      "40% reduction in idle time",
      "Enhanced driver safety",
    ],
  },
  {
    icon: Package,
    title: "Logistics & Transport",
    description:
      "End-to-end visibility for logistics companies with delivery tracking, ETAs, and customer notifications.",
    challenges: [
      "Delivery delays",
      "Lack of visibility",
      "Customer complaints",
      "Proof of delivery",
    ],
    solutions: [
      "Live tracking portal",
      "Automated notifications",
      "Delivery confirmation",
      "Route optimization",
    ],
    results: [
      "Real-time delivery updates",
      "Improved customer satisfaction",
      "Reduced delivery disputes",
      "Optimized fleet utilization",
    ],
  },
  {
    icon: Building2,
    title: "Corporate Fleets",
    description:
      "Manage company vehicles efficiently with usage tracking, expense management, and policy enforcement.",
    challenges: [
      "Unauthorized vehicle use",
      "Expense management",
      "Policy compliance",
      "Pool vehicle coordination",
    ],
    solutions: [
      "Usage tracking",
      "Geo-fencing",
      "Automated reports",
      "Booking system integration",
    ],
    results: [
      "Reduced unauthorized usage",
      "Streamlined expense reporting",
      "Improved policy compliance",
      "Better vehicle utilization",
    ],
  },
  {
    icon: HardHat,
    title: "Construction",
    description:
      "Track heavy machinery, equipment, and vehicles across multiple job sites with ruggedized solutions.",
    challenges: [
      "Equipment theft",
      "Underutilized assets",
      "Maintenance tracking",
      "Site security",
    ],
    solutions: [
      "Asset tracking devices",
      "Usage monitoring",
      "Maintenance alerts",
      "Site boundary monitoring",
    ],
    results: [
      "Theft prevention and recovery",
      "Improved equipment utilization",
      "Reduced downtime",
      "Enhanced site security",
    ],
  },
  {
    icon: Car,
    title: "Car Rental",
    description:
      "Protect your rental fleet with immobilizers, geo-fencing, and usage monitoring capabilities.",
    challenges: [
      "Vehicle theft",
      "Unauthorized usage",
      "Boundary violations",
      "Rental period enforcement",
    ],
    solutions: [
      "Remote immobilizer",
      "Geo-fencing alerts",
      "Speed monitoring",
      "Usage tracking",
    ],
    results: [
      "Reduced vehicle theft",
      "Enforced rental agreements",
      "Lower insurance premiums",
      "Improved fleet recovery",
    ],
  },
  {
    icon: Bus,
    title: "Passenger Transport",
    description:
      "Ensure passenger safety with real-time tracking, driver monitoring, and emergency response features.",
    challenges: [
      "Passenger safety",
      "Route adherence",
      "Driver fatigue",
      "Emergency response",
    ],
    solutions: [
      "Real-time passenger info",
      "Route monitoring",
      "Driver behavior analysis",
      "Emergency button",
    ],
    results: [
      "Enhanced passenger safety",
      "Improved on-time performance",
      "Reduced accidents",
      "Faster emergency response",
    ],
  },
  {
    icon: Ship,
    title: "Marine & Fishing",
    description:
      "Specialized tracking solutions for boats and marine vessels with water-resistant hardware.",
    challenges: [
      "Offshore visibility",
      "Weather risks",
      "Catch documentation",
      "Emergency situations",
    ],
    solutions: [
      "Marine-grade trackers",
      "Weather integration",
      "Location logging",
      "Emergency beacon",
    ],
    results: [
      "Coastal and offshore tracking",
      "Weather-aware routing",
      "Regulatory compliance",
      "Improved safety at sea",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Optimize your supply chain with inbound and outbound logistics tracking and inventory management.",
    challenges: [
      "Supply chain visibility",
      "Inventory tracking",
      "Supplier coordination",
      "Delivery scheduling",
    ],
    solutions: [
      "Raw material tracking",
      "Finished goods monitoring",
      "Supplier analytics",
      "JIT coordination",
    ],
    results: [
      "End-to-end visibility",
      "Reduced inventory costs",
      "Improved supplier performance",
      "Optimized production scheduling",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-brand-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-6">
                Industries We Serve
              </span>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Tailored Solutions for{" "}
                <span className="text-brand-green">Every Industry</span>
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-xl text-slate-600 leading-relaxed">
                From logistics to construction, we understand the unique challenges 
                of each industry and provide customized tracking solutions that 
                deliver measurable results.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <StaggerItem key={industry.title}>
                <Card className="h-full bg-white border-slate-100 hover:shadow-xl hover:border-brand-green/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-green transition-colors">
                      <industry.icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {industry.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Detailed Industries */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <FadeInView direction={index % 2 === 0 ? "right" : "left"}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6">
                      <industry.icon className="w-8 h-8 text-brand-green" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      {industry.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-6">
                      {industry.description}
                    </p>
                    <Button variant="brand" asChild>
                      <Link href="/contact/">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </FadeInView>

                <FadeInView direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="grid gap-4">
                      {/* Challenges */}
                      <Card className="bg-white border-slate-100">
                        <CardContent className="p-5">
                          <h3 className="font-semibold text-slate-900 mb-3">
                            Industry Challenges
                          </h3>
                          <ul className="space-y-2">
                            {industry.challenges.map((challenge) => (
                              <li
                                key={challenge}
                                className="flex items-center gap-2 text-sm text-slate-600"
                              >
                                <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Solutions */}
                      <Card className="bg-white border-slate-100">
                        <CardContent className="p-5">
                          <h3 className="font-semibold text-slate-900 mb-3">
                            Our Solutions
                          </h3>
                          <ul className="space-y-2">
                            {industry.solutions.map((solution) => (
                              <li
                                key={solution}
                                className="flex items-center gap-2 text-sm text-slate-600"
                              >
                                <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      {/* Results */}
                      <Card className="bg-brand-green/5 border-brand-green/20">
                        <CardContent className="p-5">
                          <h3 className="font-semibold text-brand-green mb-3">
                            Expected Results
                          </h3>
                          <ul className="space-y-2">
                            {industry.results.map((result) => (
                              <li
                                key={result}
                                className="flex items-center gap-2 text-sm text-slate-700"
                              >
                                <CheckCircle className="w-4 h-4 text-brand-green" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </FadeInView>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-green">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Not Sure Which Solution Fits Your Industry?
              </h2>
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="text-xl text-white/80 mb-10">
                Our experts will analyze your needs and recommend the perfect 
                tracking solution for your business.
              </p>
            </FadeInView>
            <FadeInView delay={0.2}>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-brand-green hover:bg-white/90"
                asChild
              >
                <Link href="/contact/">
                  Schedule a Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </FadeInView>
          </div>
        </div>
      </section>
    </div>
  );
}
