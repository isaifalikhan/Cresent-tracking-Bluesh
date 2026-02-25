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
import {
  MapPin,
  Fuel,
  UserCog,
  Hexagon,
  Power,
  Package,
  Bell,
  BarChart3,
  ArrowRight,
  Check,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore our comprehensive tracking solutions including GPS tracking, fuel monitoring, driver behavior analysis, geo-fencing, and more.",
};

const solutions = [
  {
    icon: MapPin,
    title: "GPS Tracking",
    badge: "Core Feature",
    shortDesc: "Real-time vehicle location tracking with precision accuracy",
    fullDescription:
      "Our GPS tracking solution provides real-time visibility of your entire fleet. With updates every 10 seconds, you can monitor vehicle location, speed, direction, and status from anywhere in the world.",
    keyFeatures: [
      "Real-time location updates (10-second intervals)",
      "Historical route playback",
      "Speed and direction monitoring",
      "Ignition status detection",
      "Multiple map views",
      "Mobile app access",
    ],
    technicalSpecs: [
      "GPS + GLONASS + Galileo support",
      "Accuracy: ±3 meters",
      "Update interval: 10-60 seconds configurable",
      "Data storage: 1 year minimum",
    ],
    pricing: "Included in all plans",
  },
  {
    icon: Fuel,
    title: "Fuel Monitoring",
    badge: "Popular",
    shortDesc: "Prevent fuel theft and optimize consumption",
    fullDescription:
      "Our fuel monitoring system uses high-precision sensors to track fuel levels in real-time. Detect anomalies, prevent theft, and optimize fuel consumption with detailed analytics.",
    keyFeatures: [
      "Real-time fuel level monitoring",
      "Fuel theft detection",
      "Consumption analysis",
      "Refueling alerts",
      "Drainage detection",
      "Efficiency reports",
    ],
    technicalSpecs: [
      "Sensor accuracy: ±1%",
      "Compatible with all fuel types",
      "Wireless sensor option available",
      "Calibration service included",
    ],
    pricing: "From PKR 500/vehicle/month",
  },
  {
    icon: UserCog,
    title: "Driver Behavior",
    badge: "Safety",
    shortDesc: "Improve safety and reduce operational risks",
    fullDescription:
      "Monitor and analyze driver behavior to improve safety, reduce accidents, and lower insurance premiums. Our AI-powered system identifies risky driving patterns and provides coaching recommendations.",
    keyFeatures: [
      "Harsh braking detection",
      "Rapid acceleration alerts",
      "Speed violation monitoring",
      "Cornering analysis",
      "Driver scoring system",
      "Safety reports",
    ],
    technicalSpecs: [
      "Built-in accelerometer",
      "AI-powered analysis",
      "Real-time alerts",
      "Customizable thresholds",
    ],
    pricing: "From PKR 300/vehicle/month",
  },
  {
    icon: Hexagon,
    title: "Geo-Fencing",
    badge: "Security",
    shortDesc: "Create virtual boundaries for your assets",
    fullDescription:
      "Set up custom geographical boundaries and receive instant alerts when vehicles enter or exit designated areas. Perfect for route compliance, security, and operational control.",
    keyFeatures: [
      "Unlimited custom zones",
      "Circular and polygon shapes",
      "Entry/exit alerts",
      "Time-based rules",
      "Route deviation detection",
      "POI management",
    ],
    technicalSpecs: [
      "Unlimited geofences",
      "Minimum radius: 100m",
      "Real-time alerts",
      "Batch import/export",
    ],
    pricing: "Included in all plans",
  },
  {
    icon: Power,
    title: "Immobilizer",
    badge: "Security",
    shortDesc: "Prevent unauthorized vehicle use remotely",
    fullDescription:
      "Take control of your vehicles remotely with our immobilizer feature. Disable the engine in case of theft or unauthorized use, directly from your dashboard or mobile app.",
    keyFeatures: [
      "Remote engine disable/enable",
      "Theft prevention",
      "Emergency stop",
      "User authorization",
      "Activity logging",
      "Alarm integration",
    ],
    technicalSpecs: [
      "Relay-based control",
      "Fail-safe design",
      "Encrypted commands",
      "Audit trail",
    ],
    pricing: "From PKR 400/vehicle/month",
  },
  {
    icon: Package,
    title: "Asset Tracking",
    badge: "Versatile",
    shortDesc: "Track valuable equipment and non-vehicle assets",
    fullDescription:
      "Beyond vehicles, track any valuable asset with our portable GPS trackers. Perfect for construction equipment, generators, containers, and high-value merchandise.",
    keyFeatures: [
      "Portable battery-powered devices",
      "Long battery life",
      "Rugged design",
      "Movement alerts",
      "Theft recovery",
      "Multi-asset dashboard",
    ],
    technicalSpecs: [
      "Battery life: 1-5 years",
      "IP67 waterproof rating",
      "Magnetic mount option",
      "Temperature resistant",
    ],
    pricing: "From PKR 1,999/device + PKR 499/month",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    badge: "Automation",
    shortDesc: "Stay informed with customizable notifications",
    fullDescription:
      "Configure custom alerts for any event or condition. Receive notifications via SMS, email, or push notifications based on your preferences and priorities.",
    keyFeatures: [
      "Custom alert rules",
      "Multi-channel delivery",
      "Priority levels",
      "Scheduled reports",
      "Escalation rules",
      "Alert history",
    ],
    technicalSpecs: [
      "Unlimited alerts",
      "SMS, Email, Push",
      "Real-time delivery",
      "Custom templates",
    ],
    pricing: "Included in all plans",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    badge: "Insights",
    shortDesc: "Comprehensive insights and custom reports",
    fullDescription:
      "Access detailed analytics and generate custom reports on fleet performance, driver behavior, fuel consumption, and more. Make data-driven decisions to optimize your operations.",
    keyFeatures: [
      "Custom report builder",
      "Scheduled delivery",
      "Data export",
      "Trend analysis",
      "Benchmarking",
      "API access",
    ],
    technicalSpecs: [
      "50+ report templates",
      "PDF, Excel, CSV export",
      "Automated scheduling",
      "REST API",
    ],
    pricing: "Included in Professional & Enterprise",
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-brand-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-6">
                Our Solutions
              </span>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Complete Tracking{" "}
                <span className="text-brand-green">Solutions</span>
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-xl text-slate-600 leading-relaxed">
                From basic GPS tracking to advanced fleet analytics, our solutions 
                are designed to meet the unique needs of businesses across Pakistan.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <StaggerItem key={solution.title}>
                <Card className="h-full bg-white border-slate-100 hover:shadow-xl hover:border-brand-green/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center group-hover:bg-brand-green transition-colors">
                        <solution.icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {solution.badge}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{solution.shortDesc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-brand-green font-medium">
                        {solution.pricing}
                      </span>
                      <Link
                        href={`#${solution.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm text-slate-500 hover:text-brand-green transition-colors"
                      >
                        Learn more
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Detailed Solutions */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                id={solution.title.toLowerCase().replace(/\s+/g, "-")}
                className="scroll-mt-32"
              >
                <FadeInView>
                  <Card className="bg-white border-slate-100 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-3">
                        {/* Header */}
                        <div className="lg:col-span-3 bg-brand-green p-8">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
                              <solution.icon className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h2 className="text-2xl font-bold text-white">
                                  {solution.title}
                                </h2>
                                <Badge
                                  variant="secondary"
                                  className="bg-white/20 text-white"
                                >
                                  {solution.badge}
                                </Badge>
                              </div>
                              <p className="text-white/80">
                                {solution.shortDesc}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-2 p-8">
                          <h3 className="font-semibold text-slate-900 mb-4">
                            Overview
                          </h3>
                          <p className="text-slate-600 mb-8">
                            {solution.fullDescription}
                          </p>

                          <h3 className="font-semibold text-slate-900 mb-4">
                            Key Features
                          </h3>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {solution.keyFeatures.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-start gap-2"
                              >
                                <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-600">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Sidebar */}
                        <div className="bg-slate-50 p-8 border-l border-slate-100">
                          <h3 className="font-semibold text-slate-900 mb-4">
                            Technical Specifications
                          </h3>
                          <ul className="space-y-2 mb-8">
                            {solution.technicalSpecs.map((spec) => (
                              <li
                                key={spec}
                                className="flex items-start gap-2 text-sm text-slate-600"
                              >
                                <Zap className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                                {spec}
                              </li>
                            ))}
                          </ul>

                          <div className="border-t border-slate-200 pt-6">
                            <p className="text-sm text-slate-500 mb-2">
                              Pricing
                            </p>
                            <p className="text-lg font-semibold text-brand-green mb-4">
                              {solution.pricing}
                            </p>
                            <Button variant="brand" className="w-full" asChild>
                              <Link href="/contact/">
                                Get Started
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
                Need a Custom Solution?
              </h2>
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="text-xl text-white/80 mb-10">
                Our team can design a tailored tracking solution that meets your 
                specific requirements and budget.
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
                  Contact Our Team
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
