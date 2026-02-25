import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { ArrowRight, TrendingUp, Users, Fuel, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how businesses across Pakistan have transformed their operations with Crescent Tracking's fleet management solutions.",
};

const caseStudies = [
  {
    id: 1,
    company: "Swift Logistics Pakistan",
    industry: "Logistics",
    logo: "SL",
    challenge:
      "Managing a fleet of 150 delivery vehicles with inefficient route planning and high fuel costs.",
    solution:
      "Implemented GPS tracking with route optimization and fuel monitoring across the entire fleet.",
    results: [
      { metric: "28%", label: "Fuel Cost Reduction", icon: Fuel },
      { metric: "35%", label: "Delivery Time Improvement", icon: Clock },
      { metric: "150+", label: "Vehicles Optimized", icon: Users },
    ],
    quote:
      "Crescent Tracking has transformed our operations. We've seen significant improvements in efficiency and cost savings.",
    author: "Ahmed Khan",
    role: "Fleet Manager",
    featured: true,
  },
  {
    id: 2,
    company: "Pakistan Transport Co.",
    industry: "Passenger Transport",
    logo: "PTC",
    challenge:
      "Safety concerns and high accident rates due to lack of driver behavior monitoring.",
    solution:
      "Deployed driver behavior analysis with real-time alerts and coaching programs.",
    results: [
      { metric: "40%", label: "Accident Reduction", icon: TrendingUp },
      { metric: "25%", label: "Insurance Savings", icon: Fuel },
      { metric: "200", label: "Drivers Monitored", icon: Users },
    ],
    quote:
      "The driver behavior system has been a game-changer for our safety record.",
    author: "Fatima Zahra",
    role: "Operations Director",
    featured: false,
  },
  {
    id: 3,
    company: "Construction Solutions Ltd",
    industry: "Construction",
    logo: "CSL",
    challenge:
      "Equipment theft and underutilization of heavy machinery across multiple job sites.",
    solution:
      "Installed asset tracking devices on all equipment with geo-fencing and usage monitoring.",
    results: [
      { metric: "100%", label: "Theft Recovery Rate", icon: TrendingUp },
      { metric: "30%", label: "Utilization Increase", icon: Clock },
      { metric: "85", label: "Assets Tracked", icon: Users },
    ],
    quote:
      "We now have complete visibility of our equipment. The peace of mind is invaluable.",
    author: "Muhammad Ali",
    role: "Project Manager",
    featured: false,
  },
  {
    id: 4,
    company: "City Cab Services",
    industry: "Transportation",
    logo: "CCS",
    challenge:
      "Lack of real-time visibility and customer complaints about service quality.",
    solution:
      "Implemented live tracking with customer notification system and performance analytics.",
    results: [
      { metric: "45%", label: "Customer Satisfaction", icon: TrendingUp },
      { metric: "20%", label: "Response Time", icon: Clock },
      { metric: "300", label: "Cabs Connected", icon: Users },
    ],
    quote:
      "Our customers love being able to track their rides in real-time.",
    author: "Sara Malik",
    role: "Fleet Coordinator",
    featured: false,
  },
  {
    id: 5,
    company: "Fresh Produce Pakistan",
    industry: "Cold Chain Logistics",
    logo: "FPP",
    challenge:
      "Temperature-sensitive cargo spoiling due to lack of monitoring during transport.",
    solution:
      "Deployed temperature monitoring with GPS tracking and automated alerts.",
    results: [
      { metric: "95%", label: "Cargo Quality Maintained", icon: TrendingUp },
      { metric: "50%", label: "Spoilage Reduction", icon: Fuel },
      { metric: "60", label: "Reefers Monitored", icon: Users },
    ],
    quote:
      "Temperature monitoring has been crucial for maintaining our product quality.",
    author: "Imran Hussain",
    role: "Logistics Head",
    featured: false,
  },
  {
    id: 6,
    company: "National Courier Service",
    industry: "Courier & Delivery",
    logo: "NCS",
    challenge:
      "Inefficient delivery routes and inability to provide accurate ETAs to customers.",
    solution:
      "Implemented route optimization with real-time tracking and customer notifications.",
    results: [
      { metric: "32%", label: "Route Efficiency", icon: TrendingUp },
      { metric: "99%", label: "On-Time Delivery", icon: Clock },
      { metric: "500", label: "Delivery Vehicles", icon: Users },
    ],
    quote:
      "Route optimization has revolutionized our delivery operations.",
    author: "Kamran Ahmed",
    role: "Operations Manager",
    featured: false,
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-brand-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-6">
                Case Studies
              </span>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Real Results,{" "}
                <span className="text-brand-green">Real Businesses</span>
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-xl text-slate-600 leading-relaxed">
                See how businesses across Pakistan have transformed their 
                operations and achieved measurable results with our tracking solutions.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeInView>
            <Card className="overflow-hidden border-slate-100">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 md:p-12">
                    <Badge variant="brand" className="mb-4">
                      Featured Case Study
                    </Badge>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      {caseStudies[0].company}
                    </h2>
                    <p className="text-slate-500 mb-6">
                      {caseStudies[0].industry}
                    </p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">
                          The Challenge
                        </h3>
                        <p className="text-slate-600">
                          {caseStudies[0].challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">
                          Our Solution
                        </h3>
                        <p className="text-slate-600">
                          {caseStudies[0].solution}
                        </p>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-brand-green pl-4 italic text-slate-600 mb-4">
                      &ldquo;{caseStudies[0].quote}&rdquo;
                    </blockquote>
                    <p className="text-sm text-slate-500">
                      — {caseStudies[0].author}, {caseStudies[0].role}
                    </p>
                  </div>

                  <div className="bg-brand-green p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-white mb-8">
                      Results Achieved
                    </h3>
                    <div className="grid grid-cols-3 gap-6">
                      {caseStudies[0].results.map((result) => (
                        <div key={result.label} className="text-center">
                          <result.icon className="w-8 h-8 text-white/60 mx-auto mb-3" />
                          <p className="text-3xl font-bold text-white mb-1">
                            {result.metric}
                          </p>
                          <p className="text-sm text-white/80">{result.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeInView>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeInView>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                More Success Stories
              </h2>
              <p className="text-slate-600">
                Discover how businesses across different industries benefit from our solutions
              </p>
            </div>
          </FadeInView>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(1).map((study) => (
              <StaggerItem key={study.id}>
                <Card className="h-full bg-white border-slate-100 hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center">
                        <span className="text-brand-green font-bold text-lg">
                          {study.logo}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">
                          {study.company}
                        </h3>
                        <p className="text-sm text-slate-500">{study.industry}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.results.map((result) => (
                        <div key={result.label} className="text-center">
                          <p className="text-xl font-bold text-brand-green">
                            {result.metric}
                          </p>
                          <p className="text-xs text-slate-500">{result.label}</p>
                        </div>
                      ))}
                    </div>

                    <blockquote className="text-sm text-slate-600 italic mb-4">
                      &ldquo;{study.quote}&rdquo;
                    </blockquote>
                    <p className="text-xs text-slate-500">
                      — {study.author}, {study.role}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-brand-green">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Businesses Served" },
              { value: "10,000+", label: "Vehicles Tracked" },
              { value: "25%", label: "Avg. Fuel Savings" },
              { value: "99%", label: "Client Satisfaction" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-white/80">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Ready to Achieve Similar Results?
              </h2>
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="text-xl text-slate-600 mb-10">
                Join hundreds of businesses that trust Crescent Tracking for their 
                fleet management needs.
              </p>
            </FadeInView>
            <FadeInView delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="brand" size="lg" asChild>
                  <Link href="/contact/">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/pricing/">View Pricing</Link>
                </Button>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </div>
  );
}
