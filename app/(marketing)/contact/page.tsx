"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MessageCircle, MapPin, CheckCircle2, Building2, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

type Branch = {
  type: string;
  city: string;
  address: string;
  phone: string[];
  email?: string;
};

const branches: Branch[] = [
  {
    type: "Head Office",
    city: "Quetta",
    address: "Banglow No. 9-E, Afzal Banglows, Opp SSP Traffic Office, Spinny Road, Quetta.",
    phone: ["081-2832920"],
    email: "info@crescenttrack.com",
  },
  {
    type: "Karachi Branch",
    city: "Karachi",
    address: "Residential Duplex, G-01, Ground Floor, Plot No. E-110, PECHS, Block-2, Karachi.",
    phone: ["021-34774044", "021-34774045", "0346-8222130"],
    email: "karachi@crescenttrack.com",
  },
  {
    type: "Lahore Branch",
    city: "Lahore",
    address: "1st Floor, 273 Y Block Commercial Area, DHA Phase 3, Lahore.",
    phone: ["0321-9536786"],
    email: "lahore@crescenttrack.com",
  },
  {
    type: "Multan Branch",
    city: "Multan",
    address: "Office No. 10, 1st Floor, Khilji Arcade, Near Cantt Railway Station, Akbar Road, Multan.",
    phone: ["0341-6964141"],
    email: "multan@crescenttrack.com",
  },
  {
    type: "Sialkot Branch",
    city: "Sialkot",
    address: "Al Khalil Center, Kashmir Road, Sialkot.",
    phone: ["0346-8222135"],
    email: "mubeen.skt@crescenttrack.com",
  },
  {
    type: "Sahiwal Branch",
    city: "Sahiwal",
    address: "Office No. 1, 2, 3, Hassan Market, Karbala Road, Sahiwal.",
    phone: ["0300-5130181"],
    email: "sahiwal@crescenttrack.com",
  },
  {
    type: "Islamabad Branch",
    city: "Islamabad",
    address: "Office No. 4, 2nd Floor, Raja Haq Nawaz Plaza, G-11 Markaz, Islamabad.",
    phone: ["0300-5262712"],
    email: "isb@crescenttrack.com",
  },
  {
    type: "Gujranwala Branch",
    city: "Gujranwala",
    address: "Office No. 7, 8, Fazal Town, Kacha Fatomand Road, Near Muafi Wala Chowk, Gujranwala.",
    phone: ["0333-8172777"],
  },
  {
    type: "Abbottabad Branch",
    city: "Abbottabad",
    address: "Office No. 9, 1st Floor, Jadoon Plaza, Phase-II, Opposite Aal-e-Sayyed Pharmacy, Mandian, Abbottabad.",
    phone: ["0348-4777771"],
  },
];

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  vehicles: z.string().min(1, "Please specify number of vehicles/assets"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [openBranchIndex, setOpenBranchIndex] = useState<number>(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-40">
          <Scene />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
          <div className="max-w-2xl pointer-events-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-600 dark:text-green-400 font-medium mb-6">
              Contact Us
            </span>
            <h1 className="font-display font-bold text-5xl text-foreground leading-tight mb-4">
              Let&apos;s talk about your fleet
            </h1>
            <p className="text-muted-foreground text-xl">
              Get a free consultation and custom quote within 2 hours on business days.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                  Get in touch
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: Phone,
                      label: "UAN",
                      value: "042-111-111-278",
                      href: "tel:042111111278",
                    },
                    {
                      icon: MessageCircle,
                      label: "Helpline (24/7)",
                      value: "0300-044-8888",
                      href: "tel:03000448888",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "info@crescenttrack.com",
                      href: "mailto:info@crescenttrack.com",
                    },
                  ].map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-green-brand/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-brand/30 transition-colors">
                        <c.icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <div className="text-muted-foreground text-xs mb-0.5">{c.label}</div>
                        <div className="text-foreground text-sm group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          {c.value}
                        </div>
                      </div>
                    </a>
                  ))}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-brand/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs mb-0.5">Head Office</div>
                      <div className="text-foreground text-sm">
                        Banglow No. 9-E, Afzal Banglows, Opp SSP Traffic Office, Spinny Road, Quetta.
                      </div>
                      <a href="tel:0812832920" className="text-sm text-green-600 dark:text-green-400 hover:underline mt-1 inline-block">081-2832920</a>
                      <a href="mailto:info@crescenttrack.com" className="text-sm text-green-600 dark:text-green-400 hover:underline block">info@crescenttrack.com</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl bg-muted/50 border border-border h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Map placeholder</p>
                </div>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-xl bg-card border border-border">
                <h4 className="text-foreground font-medium text-sm mb-3">Business Hours</h4>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Monday – Saturday</span>
                    <span className="text-foreground">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Support (24/7)</span>
                    <span className="text-green-600 dark:text-green-400">Always Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center py-16"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-400 mb-4" />
                  <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                    Message received!
                  </h3>
                  <p className="text-muted-foreground">
                    Our team will contact you within 2 hours on business days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-muted-foreground text-sm mb-1.5">Full Name *</label>
                      <input
                        {...register("name")}
                        placeholder="Ahmed Raza"
                        className="w-full bg-background border border-input rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:border-green-500/50 focus:outline-none transition-colors"
                      />
                      {errors.name && (
                        <p className="text-destructive text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-muted-foreground text-sm mb-1.5">Company Name *</label>
                      <input
                        {...register("company")}
                        placeholder="Your Company"
                        className="w-full bg-background border border-input rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:border-green-500/50 focus:outline-none transition-colors"
                      />
                      {errors.company && (
                        <p className="text-destructive text-xs mt-1">{errors.company.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-muted-foreground text-sm mb-1.5">Phone *</label>
                      <input
                        {...register("phone")}
                        placeholder="+92-300-000-0000"
                        className="w-full bg-background border border-input rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:border-green-500/50 focus:outline-none transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-muted-foreground text-sm mb-1.5">Email *</label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="you@company.com"
                        className="w-full bg-background border border-input rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:border-green-500/50 focus:outline-none transition-colors"
                      />
                      {errors.email && (
                        <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-muted-foreground text-sm mb-1.5">
                      Number of Vehicles / Assets *
                    </label>
                    <input
                      {...register("vehicles")}
                      placeholder="e.g. 25 trucks, 10 trailers"
                      className="w-full bg-background border border-input rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:border-green-500/50 focus:outline-none transition-colors"
                    />
                    {errors.vehicles && (
                      <p className="text-destructive text-xs mt-1">{errors.vehicles.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-muted-foreground text-sm mb-1.5">Message *</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us about your fleet requirements, challenges, or any specific solutions you're interested in..."
                      className="w-full bg-background border border-input rounded-xl px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:border-green-500/50 focus:outline-none transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  {error && (
                    <p className="text-destructive text-sm bg-destructive/10 border border-destructive/20 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-brand hover:bg-green-600 disabled:opacity-60 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-green-900/40"
                  >
                    {loading ? "Sending..." : "Send Message — Get Free Quote"}
                  </button>
                  <p className="text-muted-foreground text-xs text-center">
                    We respond within 2 hours on business days. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Branches accordion */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground text-center mb-4">
            Largest Branch Network in Pakistan
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Crescent Tracking operates a growing network of branches across Pakistan to stay close to your vehicles and your business.
          </p>

          <div className="space-y-2">
            {branches.map((branch, index) => {
              const isOpen = openBranchIndex === index;
              return (
                <div
                  key={branch.city}
                  className="rounded-xl border border-border bg-card overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenBranchIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-green-brand/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{branch.type}</h3>
                        <p className="text-xs text-muted-foreground">{branch.city}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-0 border-t border-border">
                        <div className="pl-12 space-y-3 text-sm text-muted-foreground">
                          <p className="text-foreground/90">{branch.address}</p>
                          {branch.phone.length > 0 && (
                            <div className="flex flex-wrap gap-x-6 gap-y-1">
                              {branch.phone.map((ph) => (
                                <a
                                  key={ph}
                                  href={`tel:${ph.replace(/\s/g, "").replace(/-/g, "")}`}
                                  className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                                >
                                  <Phone className="w-3.5 h-3.5" />
                                  {ph}
                                </a>
                              ))}
                            </div>
                          )}
                          {branch.email && (
                            <a
                              href={`mailto:${branch.email}`}
                              className="inline-flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                            >
                              <Mail className="w-3.5 h-3.5" />
                              {branch.email}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
