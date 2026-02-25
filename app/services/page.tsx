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
  MapPin,
  Fuel,
  UserCog,
  Hexagon,
  Power,
  Package,
  Bell,
  Route,
  BarChart3,
  Wrench,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive fleet management services including GPS tracking, fuel monitoring, driver behavior analysis, and more.",
};

const services = [
  {
    icon: MapPin,
    title: "GPS Vehicle Tracking",
    shortDesc: "Real-time location tracking for your entire fleet",
    description:
      "Our advanced GPS tracking system provides real-time location updates every 10 seconds, giving you complete visibility of your fleet. Track vehicle speed, direction, and status with precision accuracy.",
    features: [
      "Real-time location updates (10-second intervals)",
      "Historical route playback up to 1 year",
      "Speed and direction monitoring",
      "Ignition status detection",
      "Multiple map views (Satellite, Street, Terrain)",
      "Mobile app for on-the-go tracking",
    ],
    whoFor: [
      "Fleet operators",
      "Logistics companies",
      "Rental car services",
      "Personal vehicle owners",
    ],
  },
  {
    icon: Fuel,
    title: "Fuel Monitoring",
    shortDesc: "Prevent fuel theft and optimize consumption",
    description:
      "Our fuel monitoring system uses advanced sensors to track fuel levels in real-time. Detect anomalies, prevent theft, and optimize fuel consumption with detailed analytics and reports.",
    features: [
      "Real-time fuel level monitoring",
      "Fuel theft detection with instant alerts",
      "Consumption analysis and reporting",
      "Refueling and drainage alerts",
      "Mileage and efficiency calculations",
      "Integration with fuel cards",
    ],
    whoFor: [
      "Transport companies",
      "Construction fleets",
      "Long-haul operators",
      "Fuel-intensive businesses",
    ],
  },
  {
    icon: UserCog,
    title: "Driver Behavior Analysis",
    shortDesc: "Improve safety and reduce operational risks",
    description:
      "Monitor and analyze driver behavior to improve safety, reduce accidents, and lower insurance premiums. Our system tracks harsh braking, rapid acceleration, speeding, and cornering.",
    features: [
      "Harsh braking and acceleration detection",
      "Speed limit violation alerts",
      "Cornering and lane change monitoring",
      "Driver scoring and ranking",
      "Safety report generation",
      "Coaching recommendations",
    ],
    whoFor: [
      "Commercial fleets",
      "Passenger transport",
      "Delivery services",
      "Safety-conscious operators",
    ],
  },
  {
    icon: Hexagon,
    title: "Geo-Fencing",
    shortDesc: "Create virtual boundaries for your assets",
    description:
      "Set up custom geographical boundaries and receive instant alerts when vehicles enter or exit designated areas. Perfect for route compliance, security, and operational control.",
    features: [
      "Unlimited custom zones",
      "Circular and polygon geofences",
      "Entry and exit alerts",
      "Time-based rules",
      "Route deviation detection",
      "POI (Point of Interest) marking",
    ],
    whoFor: [
      "Delivery companies",
      "Security operations",
      "Construction sites",
      "Restricted area monitoring",
    ],
  },
  {
    icon: Power,
    title: "Remote Immobilizer",
    shortDesc: "Prevent unauthorized vehicle use",
    description:
      "Take control of your vehicles remotely with our immobilizer feature. Disable the engine in case of theft or unauthorized use, directly from your dashboard or mobile app.",
    features: [
      "Remote engine disable/enable",
      "Theft prevention and recovery",
      "Emergency stop capability",
      "Authorized user verification",
      "Activity logging",
      "Integration with alarm systems",
    ],
    whoFor: [
      "Rental companies",
      "Finance companies",
      "High-security fleets",
      "Asset protection",
    ],
  },
  {
    icon: Package,
    title: "Asset Tracking",
    shortDesc: "Track valuable equipment and non-vehicle assets",
    description:
      "Beyond vehicles, track any valuable asset with our portable GPS trackers. Perfect for construction equipment, generators, containers, and high-value merchandise.",
    features: [
      "Portable battery-powered trackers",
      "Long battery life (up to 5 years)",
      "Rugged, weatherproof design",
      "Movement alerts",
      "Theft recovery assistance",
      "Multi-asset dashboard",
    ],
    whoFor: [
      "Construction companies",
      "Equipment rental",
      "Shipping and logistics",
      "High-value cargo",
    ],
  },
  {
    icon: Bell,
    title: "Smart Alerts & Notifications",
    shortDesc: "Stay informed with customizable alerts",
    description:
      "Configure custom alerts for any event or condition. Receive notifications via SMS, email, or push notifications based on your preferences and priorities.",
    features: [
      "Custom alert rules",
      "Multi-channel notifications (SMS/Email/Push)",
      "Priority levels",
      "Scheduled reports",
      "Escalation rules",
      "Alert history and analytics",
    ],
    whoFor: [
      "All fleet types",
      "Operations managers",
      "Security teams",
      "Compliance officers",
    ],
  },
  {
    icon: Route,
    title: "Route Optimization",
    shortDesc: "AI-powered route planning and optimization",
    description:
      "Optimize delivery routes, reduce travel time, and minimize fuel consumption with our AI-powered route planning system. Integrate traffic data and delivery constraints.",
    features: [
      "AI-powered route suggestions",
      "Traffic integration",
      "Multi-stop optimization",
      "Delivery time windows",
      "Driver assignment",
      "Real-time rerouting",
    ],
    whoFor: [
      "Delivery services",
      "Field service teams",
      "Sales teams",
      "Logistics operators",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    shortDesc: "Comprehensive insights and custom reports",
    description:
      "Access detailed analytics and generate custom reports on fleet performance, driver behavior, fuel consumption, and more. Export data in multiple formats.",
    features: [
      "Custom report builder",
      "Scheduled report delivery",
      "Data export (PDF, Excel, CSV)",
      "Trend analysis",
      "Benchmarking tools",
      "API access for integrations",
    ],
    whoFor: [
      "Management teams",
      "Analysts",
      "Finance departments",
      "Operations managers",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-brand-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-6">
                Our Services
              </span>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Comprehensive Fleet{" "}
                <span className="text-brand-green">Services</span>
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-xl text-slate-600 leading-relaxed">
                From basic GPS tracking to advanced fleet analytics, we offer 
                a complete suite of services designed to optimize your operations, 
                enhance security, and reduce costs.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <Card className="h-full bg-white border-slate-100 hover:shadow-xl hover:border-brand-green/20 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-green transition-colors">
                      <service.icon className="w-7 h-7 text-brand-green group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{service.shortDesc}</p>
                    <Link
                      href={`#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center text-brand-green font-medium hover:underline"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                id={service.title.toLowerCase().replace(/\s+/g, "-")}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <FadeInView direction={index % 2 === 0 ? "right" : "left"}>
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-brand-green" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-6">
                      {service.description}
                    </p>
                    <Button variant="brand" asChild>
                      <Link href="/contact/">Get Started</Link>
                    </Button>
                  </div>
                </FadeInView>

                <FadeInView direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Card className="bg-white border-slate-100">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-slate-900 mb-4">
                          Key Features
                        </h3>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-sm text-slate-600"
                            >
                              <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <h3 className="font-semibold text-slate-900 mb-4">
                          Who It&apos;s For
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.whoFor.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1 bg-brand-green/10 text-brand-green text-xs rounded-full"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
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
                Ready to Get Started?
              </h2>
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="text-xl text-white/80 mb-10">
                Contact us today for a free consultation and demo of our services.
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
                  Request a Demo
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
