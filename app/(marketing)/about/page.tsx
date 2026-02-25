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

const values = [
  {
    icon: Shield,
    title: "Trustworthiness",
    description: "We protect what matters most to our clients — their assets, their data, and their business continuity.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Accurate data and reliable systems are non-negotiable. We engineer for performance.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We're not just a vendor — we're a long-term partner invested in your growth and success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards of service, technology, and customer satisfaction.",
  },
];

const team = [
  { name: "Muhammad Hassan", role: "CEO & Founder", initials: "MH" },
  { name: "Sana Mirza", role: "Chief Technology Officer", initials: "SM" },
  { name: "Faisal Akhtar", role: "Head of Operations", initials: "FA" },
  { name: "Zara Ahmed", role: "Head of Sales", initials: "ZA" },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-40">
          <Scene />
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-brand/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
          <div className="max-w-3xl pointer-events-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400 font-medium mb-6">
              Our Story
            </span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
              Built by fleet operators,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-light">
                for fleet operators
              </span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              Founded in 2012 in Lahore, Crescent Tracking started when our founder — a logistics entrepreneur — couldn&apos;t find a GPS tracking solution that actually worked for Pakistani roads, networks, and business realities. So he built one.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                badge="Our Mission"
                title="Empowering Pakistani businesses with intelligent fleet intelligence"
              />
              <p className="text-slate-400 leading-relaxed mt-6 mb-6">
                Over the past 12 years, we&apos;ve grown from a 3-person startup to a team of 80+ engineers, technicians, and support specialists serving over 500 clients across Pakistan.
              </p>
              <p className="text-slate-400 leading-relaxed">
                We&apos;ve tracked over 5,000 vehicles, helped recover hundreds of stolen assets, and saved our clients millions in fuel costs. But we&apos;re most proud of the relationships we&apos;ve built — the businesses we&apos;ve helped grow, secure, and scale.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "12+", label: "Years in Business" },
                { value: "500+", label: "Clients Served" },
                { value: "5,000+", label: "Vehicles Tracked" },
                { value: "80+", label: "Team Members" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-900 border border-white/5 rounded-2xl p-6 text-center"
                >
                  <div className="font-display font-bold text-4xl text-green-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What drives everything we do"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl border border-white/5 bg-slate-900/50"
              >
                <div className="w-11 h-11 rounded-xl bg-green-brand/20 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Leadership" title="Meet the team" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {team.map((member) => (
              <div
                key={member.name}
                className="text-center p-6 rounded-2xl border border-white/5 bg-slate-900/50 hover:border-green-500/20 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-brand to-green-dark flex items-center justify-center font-display font-bold text-white text-xl mx-auto mb-4">
                  {member.initials}
                </div>
                <h4 className="font-semibold text-white text-sm">{member.name}</h4>
                <p className="text-slate-500 text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
