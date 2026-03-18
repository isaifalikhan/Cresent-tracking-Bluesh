"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
import { createPortal } from "react-dom";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Vehicle Tracking", href: "/vehicle-tracking" },
      { label: "Bike Tracking", href: "/bike-tracking" },
      { label: "Fleet Management", href: "/fleet-management" },
      { label: "Asset Tracking", href: "/asset-tracking" },
      { label: "Gen-Set Tracking", href: "/genset-tracking" },
      { label: "Fuel Level Sensors", href: "/fuel-sensors" },
      { label: "Axle Load Sensors", href: "/axle-load-sensors" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "News & Media", href: "/news-media" },
      { label: "CEO Message", href: "/ceo-message" },
      { label: "Quick Links", href: "/quick-links" },
      { label: "FAQ", href: "/faq" },
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
  { label: "Our Packages", href: "/packages" },
  { label: "Tracking", href: "/tracking" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (!mobileOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileOpen, mounted]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b",
          scrolled
            ? "bg-background/95 backdrop-blur-md border-border/50 shadow-sm py-2"
            : "bg-background/50 backdrop-blur-sm border-transparent py-4"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-[100]">
          <div className="flex items-center justify-between">
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

            <div className="hidden lg:flex items-center gap-3">
              <ThemeSwitch />

              <div className="h-6 w-px bg-border/60 mx-1" />

              {/* <Link
                href="/login"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <User className="w-4 h-4" />
                Login
              </Link> */}

              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-shimmer" />
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative z-50 p-2.5 rounded-full bg-accent/50 text-foreground hover:bg-accent transition-colors border border-border/50"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setMobileOpen(false)}
                  className="fixed inset-0 bg-black/50 z-[950] lg:hidden"
                />

                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="fixed inset-y-0 right-0 w-[300px] sm:w-[360px] lg:hidden bg-popover border-l border-border shadow-2xl z-[1000] flex flex-col h-screen"
                  style={{ maxHeight: '100dvh' }}
                >
                  <div className="flex items-center justify-between p-6 border-b border-border/50 shrink-0">
                    <span className="text-lg font-semibold font-display">
                      Menu
                    </span>
                    <button
                      onClick={() => setMobileOpen(false)}
                      className="p-2 rounded-full hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
                      aria-label="Close menu"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div 
                    className="flex-1 overflow-y-auto overflow-x-hidden py-6 px-6 touch-auto"
                    data-lenis-prevent
                  >
                    <div className="flex flex-col gap-2">
                      {navLinks.map((link, i) => (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 + 0.1 }}
                        >
                          {link.children ? (
                            <div className="space-y-3 mb-4">
                              <Link
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-lg font-semibold text-foreground py-2 block hover:text-primary transition-colors"
                              >
                                {link.label}
                              </Link>
                              <div className="grid gap-2 pl-4 border-l-2 border-border/50 ml-2">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
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
                                "block py-3 text-lg font-medium transition-all border-b border-border/40 last:border-0",
                                pathname === link.href
                                  ? "text-primary"
                                  : "text-muted-foreground hover:text-foreground"
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
                      className="mt-8 flex flex-col gap-4"
                    >
                      <div className="flex items-center justify-between py-3 border-t border-border/50">
                        <span className="text-sm font-medium">
                          Switch Theme
                        </span>
                        <ThemeSwitch />
                      </div>
{/* 
                      <Link
                        href="/login"
                        onClick={() => setMobileOpen(false)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-accent transition-colors"
                      >
                        <User className="w-5 h-5" />
                        Log In
                      </Link> */}

                      <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
                      >
                        Get Started Now
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
