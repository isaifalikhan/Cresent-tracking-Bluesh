import { Metadata } from "next";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import {
  Shield,
  Target,
  Eye,
  Users,
  Award,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Crescent Tracking (Pvt) Ltd - Pakistan's leading fleet and asset tracking solutions provider with over 10 years of experience.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with complete transparency and honesty in all our dealings with clients and partners.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our service, from product quality to customer support.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description:
      "We continuously invest in R&D to bring cutting-edge tracking technology to our clients.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Our customers are at the heart of everything we do. Their success is our success.",
  },
];

const milestones = [
  { year: "2014", event: "Crescent Tracking founded in Karachi" },
  { year: "2016", event: "Launched first GPS tracking platform" },
  { year: "2018", event: "Expanded to 5 major cities in Pakistan" },
  { year: "2020", event: "Reached 1,000 active vehicles tracked" },
  { year: "2022", event: "Introduced AI-powered analytics" },
  { year: "2024", event: "Serving 500+ businesses nationwide" },
];

export default function AboutPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-brand-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-6">
                About Us
              </span>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Pakistan&apos;s Trusted{" "}
                <span className="text-brand-green">Tracking Partner</span>
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-xl text-slate-600 leading-relaxed">
                Since 2014, Crescent Tracking (Pvt) Ltd has been at the forefront 
                of GPS tracking and fleet management solutions in Pakistan. We help 
                businesses protect their assets, optimize operations, and reduce costs 
                through innovative technology.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "500+", label: "Business Clients" },
              { value: "10,000+", label: "Vehicles Tracked" },
              { value: "15+", label: "Cities Covered" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-brand-green mb-2">
                    {stat.value}
                  </p>
                  <p className="text-slate-600">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInView>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Our <span className="text-brand-green">Mission</span>
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  To empower businesses across Pakistan with cutting-edge tracking 
                  technology that enhances security, improves efficiency, and drives 
                  operational excellence. We believe every fleet, regardless of size, 
                  deserves access to world-class tracking solutions.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our commitment extends beyond technology – we build lasting 
                  relationships with our clients through exceptional service, 
                  continuous support, and a deep understanding of their unique challenges.
                </p>
              </div>
            </FadeInView>
            <FadeInView direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Our <span className="text-brand-green">Vision</span>
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  To be the most trusted and innovative fleet management partner 
                  in Pakistan, recognized for our technological leadership, customer 
                 -centric approach, and positive impact on the transportation industry.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We envision a future where every vehicle on Pakistan&apos;s roads 
                  is connected, every fleet is optimized, and every business can 
                  operate with complete visibility and control.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeInView>
              <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-4">
                Our Values
              </span>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                What We <span className="text-brand-green">Stand For</span>
              </h2>
            </FadeInView>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <Card className="h-full bg-white border-slate-100 hover:shadow-lg hover:border-brand-green/20 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeInView>
              <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-4">
                Our Journey
              </span>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Milestones That Define{" "}
                <span className="text-brand-green">Our Story</span>
              </h2>
            </FadeInView>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-1/2" />

              {milestones.map((milestone, index) => (
                <FadeInView
                  key={milestone.year}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? "right" : "left"}
                >
                  <div
                    className={`relative flex items-center gap-8 mb-8 ${
                      index % 2 === 0
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ml-12 md:ml-0 ${
                        index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                      }`}
                    >
                      <Card className="inline-block bg-white border-slate-100">
                        <CardContent className="p-4">
                          <span className="text-brand-green font-bold text-lg">
                            {milestone.year}
                          </span>
                          <p className="text-slate-600">{milestone.event}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-brand-green rounded-full border-4 border-white shadow-md md:-translate-x-1/2" />

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-brand-green">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Want to Learn More?
              </h2>
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="text-xl text-white/80 mb-10">
                Our team is ready to answer your questions and help you find 
                the perfect tracking solution for your business.
              </p>
            </FadeInView>
            <FadeInView delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact/"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-brand-green rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+923001234567"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </div>
  );
}
