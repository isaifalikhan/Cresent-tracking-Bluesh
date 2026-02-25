"use client";

import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+92 300 123 4567", "+92 21 1234 5678"],
    action: { label: "Call Now", href: "tel:+923001234567" },
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@crescenttracking.com", "support@crescenttracking.com"],
    action: { label: "Send Email", href: "mailto:info@crescenttracking.com" },
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["123 Business Avenue", "Karachi, Pakistan"],
    action: { label: "Get Directions", href: "#" },
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
    action: null,
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-brand-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-6">
                Contact Us
              </span>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Get in <span className="text-brand-green">Touch</span>
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-xl text-slate-600 leading-relaxed">
                Have questions about our tracking solutions? We&apos;re here to help. 
                Reach out to our team for a free consultation.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <FadeInView key={info.title} delay={index * 0.1}>
                <Card className="h-full bg-white border-slate-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-brand-green" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail) => (
                        <p key={detail} className="text-sm text-slate-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                    {info.action && (
                      <a
                        href={info.action.href}
                        className="text-sm text-brand-green hover:underline font-medium"
                      >
                        {info.action.label}
                      </a>
                    )}
                  </CardContent>
                </Card>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <FadeInView>
              <Card className="bg-white border-slate-100">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-slate-600 mb-8">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-slate-600">
                        Thank you for reaching out. We&apos;ll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            {...register("name")}
                            className={errors.name ? "border-red-500" : ""}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.name.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            placeholder="Your Company"
                            {...register("company")}
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            placeholder="+92 300 123 4567"
                            {...register("phone")}
                            className={errors.phone ? "border-red-500" : ""}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            {...register("email")}
                            className={errors.email ? "border-red-500" : ""}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="vehicleCount">
                          Number of Vehicles/Assets *
                        </Label>
                        <Input
                          id="vehicleCount"
                          placeholder="e.g., 25"
                          {...register("vehicleCount")}
                          className={errors.vehicleCount ? "border-red-500" : ""}
                        />
                        {errors.vehicleCount && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.vehicleCount.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your tracking needs..."
                          rows={5}
                          {...register("message")}
                          className={errors.message ? "border-red-500" : ""}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        variant="brand"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </FadeInView>

            {/* Map & WhatsApp */}
            <FadeInView direction="left">
              <div className="space-y-6">
                {/* Map placeholder */}
                <Card className="bg-white border-slate-100 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-80 bg-slate-100 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-brand-green mx-auto mb-3" />
                        <p className="text-slate-600 font-medium">
                          Karachi, Pakistan
                        </p>
                        <p className="text-slate-400 text-sm">
                          Interactive Map Placeholder
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp CTA */}
                <Card className="bg-green-500 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          Chat on WhatsApp
                        </h3>
                        <p className="text-white/80 text-sm">
                          Get instant responses to your queries
                        </p>
                      </div>
                      <Button
                        variant="secondary"
                        className="bg-white text-green-600 hover:bg-white/90"
                        asChild
                      >
                        <a
                          href="https://wa.me/923001234567"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Chat Now
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-green">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
            </FadeInView>
            <FadeInView delay={0.1}>
              <p className="text-xl text-white/80 mb-10">
                Request a free demo and see how our tracking solutions can help your business.
              </p>
            </FadeInView>
            <FadeInView delay={0.2}>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-brand-green hover:bg-white/90"
                asChild
              >
                <Link href="/pricing/">View Pricing</Link>
              </Button>
            </FadeInView>
          </div>
        </div>
      </section>
    </div>
  );
}
