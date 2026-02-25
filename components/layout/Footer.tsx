import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const footerLinks = {
  Solutions: [
    { label: "GPS Tracking", href: "/solutions#gps-tracking" },
    { label: "Fuel Monitoring", href: "/solutions#fuel-monitoring" },
    { label: "Driver Behavior", href: "/solutions#driver-behavior" },
    { label: "Geo-fencing", href: "/solutions#geo-fencing" },
    { label: "Immobilizer", href: "/solutions#immobilizer" },
    { label: "Asset Tracking", href: "/solutions#asset-tracking" },
  ],
  Industries: [
    { label: "Fleet & Logistics", href: "/industries#fleet" },
    { label: "Corporate", href: "/industries#corporate" },
    { label: "Construction", href: "/industries#construction" },
    { label: "Personal", href: "/industries#personal" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-brand to-green-dark flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white leading-none block">
                  Crescent
                </span>
                <span className="text-[10px] text-green-400 font-mono uppercase tracking-widest leading-none">
                  Tracking (Pvt) Ltd
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Pakistan&apos;s most trusted GPS fleet tracking and asset protection company. Serving businesses across all major cities since 2012.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+92300000000"
                className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-green-500" />
                +92-300-000-0000
              </a>
              <a
                href="mailto:info@crescenttracking.com"
                className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-green-500" />
                info@crescenttracking.com
              </a>
              <a
                href="https://wa.me/92300000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-green-400 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4 text-green-500" />
                WhatsApp Support
              </a>
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>Office 123, Business Hub, Gulberg III, Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="lg:col-span-1">
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-green-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Crescent Tracking (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-500 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>Live tracking active across Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
