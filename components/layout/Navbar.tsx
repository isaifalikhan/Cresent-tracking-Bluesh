"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/ModeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "GPS Tracking", href: "/solutions#gps-tracking" },
      { label: "Fuel Monitoring", href: "/solutions#fuel-monitoring" },
      { label: "Driver Behavior", href: "/solutions#driver-behavior" },
      { label: "Geo-fencing", href: "/solutions#geo-fencing" },
      { label: "Immobilizer", href: "/solutions#immobilizer" },
      { label: "Asset Tracking", href: "/solutions#asset-tracking" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Fleet & Logistics", href: "/industries#fleet" },
      { label: "Corporate", href: "/industries#corporate" },
      { label: "Construction", href: "/industries#construction" },
      { label: "Personal", href: "/industries#personal" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Tracking", href: "/tracking" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 shadow-sm py-2"
          : "bg-background/50 backdrop-blur-sm border-transparent py-4"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative w-24 h-16 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/Logo.png" 
                alt="Crescent Tracking Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
         
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-background/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-border/50 shadow-sm">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    pathname === link.href
                      ? "text-primary-foreground bg-primary shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-300 opacity-70",
                        activeDropdown === link.label ? "rotate-180" : ""
                      )}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 p-2 rounded-2xl bg-popover/95 backdrop-blur-xl border border-border shadow-xl overflow-hidden z-50"
                    >
                      <div className="grid gap-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-all group/item"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover/item:bg-primary transition-colors" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA & Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ModeToggle />
            
            <div className="h-6 w-px bg-border/60 mx-1" />

            <Link 
              href="/login" 
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <User className="w-4 h-4" />
              Login
            </Link>

            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-shimmer" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 p-2.5 rounded-full bg-accent/50 text-foreground hover:bg-accent transition-colors border border-border/50"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 lg:hidden bg-background/98 backdrop-blur-2xl z-40 flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2 mb-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  {link.children ? (
                    <div className="space-y-3">
                      <Link 
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-lg font-semibold text-foreground px-4 py-2 block hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                      <div className="grid gap-1 pl-4 border-l-2 border-border/50 ml-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-lg font-medium transition-all",
                        pathname === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-auto flex flex-col gap-4"
            >
              <div className="flex items-center justify-between px-4 py-4 bg-accent/30 rounded-2xl">
                <span className="text-sm font-medium">Switch Theme</span>
                <ModeToggle />
              </div>
              
              <Link
                href="/login"
                className="w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-accent transition-colors"
              >
                <User className="w-5 h-5" />
                Log In
              </Link>
              
              <Link
                href="/contact"
                className="w-full flex items-center justify-center px-4 py-4 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20"
              >
                Get Started Now
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
