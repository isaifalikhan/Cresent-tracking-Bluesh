import type { Metadata } from "next";
import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { Shield, Target, Users, Award } from "lucide-react";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Crescent Tracking — Pakistan's leading GPS fleet management and asset protection company, serving businesses since 2011.",
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
              Crescent Tracking Pvt Ltd provides vehicle tracking and fleet management services in Pakistan with a large nationwide branch network. We are part of Crescent Group of Companies and are committed to protecting both your assets and your peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* About & Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading
                badge="About Us"
                title="Why our clients love to work with us"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mt-6">
                Crescent Tracking has been put into place to fill the gap in the market for a company that can provide a truly GPS / GSM–GPRS based security solution that is flexible and adaptable in diversified environments. We offer state-of-the-art automatic vehicle and personal location systems that keep you connected to what matters most.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-3xl font-display font-bold text-foreground">27,000+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-3xl font-display font-bold text-foreground">13+</p>
                <p className="text-sm text-muted-foreground mt-1">Years in Business</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-3xl font-display font-bold text-foreground">2,000+</p>
                <p className="text-sm text-muted-foreground mt-1">Departments Served</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-3xl font-display font-bold text-foreground">2,000+</p>
                <p className="text-sm text-muted-foreground mt-1">Total Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                badge="Our Vision"
                title="Protecting you with the most advanced tracking equipment"
              />
              <p className="text-muted-foreground text-lg leading-relaxed mt-6 mb-6">
                Just not protecting your assets, it is protecting you with the latest and most advanced vehicle tracking equipment. Our vision is to be Pakistan&apos;s most trusted name in security, connectivity, and peace of mind.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-6">Our Mission</h3>
              <ul className="space-y-4">
                {[
                  "To protect 24/7 with unbreakable connectivity.",
                  "To present value-added tracking technology.",
                  "To stop unauthorized accessibility of vehicles and assets.",
                  "To provide tracking services through Satellite, GSM, GPRS, GPS, EDGE, 3G and newer technologies.",
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
