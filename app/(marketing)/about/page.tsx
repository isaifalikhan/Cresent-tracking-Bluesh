import type { Metadata } from "next";
import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { Shield, Target, Users, Award } from "lucide-react";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Crescent Tracking — Pakistan's leading GPS fleet management and asset protection company, serving businesses since 2012.",
};

const groupOfCompanies = [
  "Crescent Tracking",
  "Crescent Security & Surveillance",
  "Crescent IT Solution",
  "Crescent Power Services",
  "Quality Security Services",
  "360 Degree Marketing",
  "Burhan Tek Solution",
  "Wood World Furniture",
  "Digi Prints (Dubai & Pakistan)",
  "City Security",
  "Oria",
  "Silver Petal",
];

const certifications = [
  "License",
  "Type Approval",
  "FBR Taxpayer Registration Certificate",
  "SECP Registration",
  "ISO Certification",
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-40">
          <Scene />
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-brand/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
          <div className="max-w-3xl pointer-events-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-600 dark:text-green-400 font-medium mb-6">
              Founded: 2011
            </span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Protecting You &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-light">
                Your Assets
              </span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Crescent Tracking Pvt Ltd provides vehicle tracking and fleet management services in Pakistan with a large nationwide branch network.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                badge="Our Vision"
                title="Protecting you with advanced technology"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mt-6 mb-6">
                Not just protecting your assets but protecting you using the latest and most advanced vehicle tracking technology.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">Our Mission</h3>
              <ul className="space-y-4">
                {[
                  "Protect customers 24/7 with unbreakable connectivity.",
                  "Provide value-added technology solutions.",
                  "Prevent unauthorized accessibility of vehicles and assets.",
                  "Provide tracking services through Satellite, GSM, GPRS, GPS, EDGE, and 3G technologies.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Group of Companies */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Network"
            title="Group of Companies"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {groupOfCompanies.map((company) => (
              <div
                key={company}
                className="p-6 rounded-2xl border border-border bg-card flex items-center gap-4 hover:border-green-500/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-green-brand/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-foreground">{company}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Compliance" title="Certifications & Registrations" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="text-center p-6 rounded-2xl border border-border bg-card hover:border-green-500/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-green-brand/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="font-semibold text-foreground">{cert}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
