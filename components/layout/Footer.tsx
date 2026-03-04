import Link from "next/link";
import Image from "next/image";
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
    <footer className="bg-background border-t border-border">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/Logo.png" 
                  alt="Crescent Tracking Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-foreground leading-none block">
                  Crescent
                </span>
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest leading-none mt-0.5">
                  Tracking (Pvt) Ltd
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Pakistan&apos;s most trusted GPS fleet tracking and asset protection company. Serving businesses across all major cities since 2011.
            </p>
            <div className="space-y-3">
              <a
                href="tel:042111111278"
                className="flex items-center gap-3 text-muted-foreground hover:text-green-500 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-green-500" />
                042-111-111-278
              </a>
              <a
                href="mailto:info@crescenttracking.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-green-500 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-green-500" />
                info@crescenttracking.com
              </a>
              <a
                href="tel:03000448888"
                className="flex items-center gap-3 text-muted-foreground hover:text-green-500 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4 text-green-500" />
                Helpline: 0300-044-8888
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>
                  Office No. 1, 2nd Floor, Commercial Plaza No. 194, XX Block, Phase-3, D.H.A., Lahore.
                </span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="lg:col-span-1">
              <h4 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-green-500 text-sm transition-colors"
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
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Crescent Tracking (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>Live tracking active across Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
