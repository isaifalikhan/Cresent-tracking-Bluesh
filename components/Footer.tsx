"use client";

import Link from "next/link";
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  company: [
    { href: "/about/", label: "About Us" },
    { href: "/case-studies/", label: "Case Studies" },
    { href: "/blog/", label: "Blog" },
    { href: "/contact/", label: "Contact" },
  ],
  services: [
    { href: "/solutions/", label: "GPS Tracking" },
    { href: "/solutions/", label: "Fuel Monitoring" },
    { href: "/solutions/", label: "Driver Behavior" },
    { href: "/solutions/", label: "Geo-Fencing" },
  ],
  industries: [
    { href: "/industries/", label: "Fleet Management" },
    { href: "/industries/", label: "Logistics" },
    { href: "/industries/", label: "Construction" },
    { href: "/industries/", label: "Corporate" },
  ],
  legal: [
    { href: "/privacy/", label: "Privacy Policy" },
    { href: "/terms/", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-white">
                  Crescent
                </span>
                <span className="text-sm leading-tight text-slate-400">
                  Tracking (Pvt) Ltd
                </span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              Pakistan&apos;s leading fleet and asset tracking solutions provider. 
              Track, protect, and optimize your vehicles and assets with cutting-edge GPS technology.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-green transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-green transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-green transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact info */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-brand-green" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Call Us</p>
                <a href="tel:+923001234567" className="text-white hover:text-brand-green transition-colors">
                  +92 300 123 4567
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-brand-green" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Email Us</p>
                <a href="mailto:info@crescenttracking.com" className="text-white hover:text-brand-green transition-colors">
                  info@crescenttracking.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-green/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-brand-green" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Visit Us</p>
                <span className="text-white">
                  Karachi, Pakistan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-slate-950 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Crescent Tracking (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-500 text-sm hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
