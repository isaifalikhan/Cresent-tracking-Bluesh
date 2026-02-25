"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/industries/", label: "Industries" },
  { href: "/solutions/", label: "Solutions" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/case-studies/", label: "Case Studies" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div
        className={`bg-brand-green text-white text-xs py-2 transition-all duration-300 ${
          isScrolled ? "hidden" : "block"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="tel:+923001234567"
              className="flex items-center gap-1 hover:text-brand-red transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>+92 300 123 4567</span>
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>Karachi, Pakistan</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-white hover:text-brand-red transition-colors font-medium"
            >
              Login
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href="/contact/"
              className="hover:text-brand-red transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg leading-tight ${
                  isScrolled ? "text-brand-green" : "text-brand-green"
                }`}
              >
                Crescent
              </span>
              <span
                className={`text-xs leading-tight ${
                  isScrolled ? "text-muted-foreground" : "text-muted-foreground"
                }`}
              >
                Tracking
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isScrolled
                    ? "text-foreground hover:text-brand-green hover:bg-brand-green/5"
                    : "text-foreground hover:text-brand-green hover:bg-brand-green/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="brand" size="sm" asChild>
              <Link href="/contact/">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-lg leading-tight text-brand-green">
                        Crescent
                      </span>
                      <span className="text-xs leading-tight text-muted-foreground">
                        Tracking
                      </span>
                    </div>
                  </Link>
                </div>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="px-4 py-3 text-base font-medium rounded-lg hover:bg-brand-green/5 hover:text-brand-green transition-colors"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-auto pt-8">
                  <Button variant="brand" className="w-full" asChild>
                    <Link href="/contact/">Get Started</Link>
                  </Button>
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>+92 300 123 4567</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
