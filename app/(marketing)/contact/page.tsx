"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

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
      <section className="py-16 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-40">
          <Scene />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
          <div className="max-w-2xl pointer-events-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400 font-medium mb-6">
              Contact Us
            </span>
            <h1 className="font-display font-bold text-5xl text-white leading-tight mb-4">
              Let&apos;s talk about your fleet
            </h1>
            <p className="text-slate-400 text-xl">
              Get a free consultation and custom quote within 2 hours on business days.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display font-bold text-2xl text-white mb-6">
                  Get in touch
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+92-300-000-0000",
                      href: "tel:+92300000000",
                    },
                    {
                      icon: MessageCircle,
                      label: "WhatsApp",
                      value: "+92-300-000-0000",
                      href: "https://wa.me/92300000000",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "info@crescenttracking.com",
                      href: "mailto:info@crescenttracking.com",
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
                        <c.icon className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs mb-0.5">{c.label}</div>
                        <div className="text-white text-sm group-hover:text-green-400 transition-colors">
                          {c.value}
                        </div>
                      </div>
                    </a>
                  ))}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-brand/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-green-400" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs mb-0.5">Address</div>
                      <div className="text-white text-sm">
                        Office 123, Business Hub,<br />
                        Gulberg III, Lahore, Pakistan
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl bg-slate-800/50 border border-white/5 h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-slate-500 text-sm">Map placeholder</p>
                </div>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-xl bg-slate-900 border border-white/5">
                <h4 className="text-white font-medium text-sm mb-3">Business Hours</h4>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span>Monday – Saturday</span>
                    <span className="text-white">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Support (24/7)</span>
                    <span className="text-green-400">Always Available</span>
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
                  <CheckCircle2 className="w-16 h-16 text-green-400 mb-4" />
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    Message received!
                  </h3>
                  <p className="text-slate-400">
                    Our team will contact you within 2 hours on business days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-sm mb-1.5">Full Name *</label>
                      <input
                        {...register("name")}
                        placeholder="Ahmed Raza"
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:border-green-500/50 focus:outline-none transition-colors"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm mb-1.5">Company Name *</label>
                      <input
                        {...register("company")}
                        placeholder="Your Company"
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:border-green-500/50 focus:outline-none transition-colors"
                      />
                      {errors.company && (
                        <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-sm mb-1.5">Phone *</label>
                      <input
                        {...register("phone")}
                        placeholder="+92-300-000-0000"
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:border-green-500/50 focus:outline-none transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm mb-1.5">Email *</label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="you@company.com"
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:border-green-500/50 focus:outline-none transition-colors"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-1.5">
                      Number of Vehicles / Assets *
                    </label>
                    <input
                      {...register("vehicles")}
                      placeholder="e.g. 25 trucks, 10 trailers"
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:border-green-500/50 focus:outline-none transition-colors"
                    />
                    {errors.vehicles && (
                      <p className="text-red-400 text-xs mt-1">{errors.vehicles.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-1.5">Message *</label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Tell us about your fleet requirements, challenges, or any specific solutions you're interested in..."
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:border-green-500/50 focus:outline-none transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  {error && (
                    <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
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
                  <p className="text-slate-600 text-xs text-center">
                    We respond within 2 hours on business days. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
