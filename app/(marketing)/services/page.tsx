import type { Metadata } from "next";
import dynamic from "next/dynamic";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { Wrench, Wifi, PhoneCall, BookOpen, BarChart3, Settings } from "lucide-react";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

export const metadata: Metadata = {
  title: "Services",
  description: "Complete GPS tracking services: hardware supply, professional installation, 24/7 support, training, and custom integrations.",
};

const services = [
  {
    icon: Wrench,
    title: "Hardware Supply & Installation",
    description:
      "We source, supply, and professionally install GPS devices, fuel sensors, immobilizers, and temperature sensors. All hardware is certified and backed by a 2-year warranty.",
    includes: [
      "Site survey and needs assessment",
      "Military-grade GPS devices",
      "Certified technician installation",
      "Post-installation testing",
      "2-year hardware warranty",
    ],
  },
  {
    icon: Wifi,
    title: "Platform Hosting & Maintenance",
    description:
      "Your platform runs on our 99.9% uptime infrastructure. We handle all updates, security patches, and performance optimization so you never have to worry about downtime.",
    includes: [
      "99.9% SLA uptime guarantee",
      "Automatic platform updates",
      "Data encryption and security",
      "Daily backups",
      "Server-side maintenance",
    ],
  },
  {
    icon: PhoneCall,
    title: "24/7 Technical Support",
    description:
      "Our support team is available around the clock via phone, WhatsApp, and email. Average response time under 5 minutes for critical issues.",
    includes: [
      "24/7 phone and WhatsApp support",
      "Email ticket system",
      "Remote troubleshooting",
      "On-site support (Enterprise)",
      "Dedicated account manager (Enterprise)",
    ],
  },
  {
    icon: BookOpen,
    title: "Training & Onboarding",
    description:
      "Every client receives comprehensive training for their team. We offer in-person workshops, video tutorials, and detailed documentation.",
    includes: [
      "On-site team training",
      "Video tutorial library",
      "User manuals and guides",
      "Admin panel training",
      "Refresher sessions on request",
    ],
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description:
      "We set up custom report schedules, automated emails, and analytics dashboards tailored to your KPIs and management requirements.",
    includes: [
      "50+ standard reports",
      "Custom report configuration",
      "Automated email delivery",
      "Executive dashboards",
      "Data export (Excel, PDF, CSV)",
    ],
  },
  {
    icon: Settings,
    title: "System Integration",
    description:
      "Connect our platform with your existing ERP, WMS, or TMS. We provide RESTful APIs, webhooks, and pre-built connectors.",
    includes: [
      "REST API access",
      "Webhook notifications",
      "ERP/WMS connectors",
      "Custom integration development",
      "Integration testing support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-40">
          <Scene />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
          <div className="max-w-3xl pointer-events-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400 font-medium mb-6">
              Our Services
            </span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
              End-to-end fleet management services
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              From hardware to software, installation to ongoing support — we handle everything so you can focus on running your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-7 rounded-2xl border border-white/5 bg-slate-900/50 hover:border-green-500/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-brand/20 flex items-center justify-center mb-5 group-hover:bg-green-brand/30 transition-colors">
                  <service.icon className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-slate-400 text-xs">
                      <span className="w-1 h-1 rounded-full bg-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
