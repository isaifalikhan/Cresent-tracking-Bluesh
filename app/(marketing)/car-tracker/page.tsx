import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, ArrowRight } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import { cities, CITY_PHONE_TEL, CITY_WHATSAPP_URL } from "@/lib/cities";

export const metadata: Metadata = pageMetadata({
  title: "Car Tracker & Vehicle Tracking Company Across Pakistan",
  description: `Find Crescent Tracking's car tracker and vehicle tracking services in Islamabad, Rawalpindi, Lahore, Faisalabad, Multan, Sialkot, Peshawar and more cities. Call or WhatsApp us today.`,
  path: "/car-tracker",
});

export default function CarTrackerCitiesPage() {
  return (
    <div className="pt-24 bg-background min-h-screen">
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-600 dark:text-green-400 font-medium mb-6">
            <MapPin className="w-3.5 h-3.5" />
            Our Cities
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground leading-tight mb-5">
            Car Tracker &amp; Vehicle Tracking Company Across Pakistan
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
            Crescent Tracking provides GPS car trackers, bike trackers and fleet management services in cities
            across Pakistan. Choose your city below to see local office details and services.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${CITY_PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href={CITY_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold px-6 py-3 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`/car-tracker/${c.slug}`}
              className="group rounded-2xl border border-border bg-card hover:border-green-500/40 p-6 transition-all"
            >
              <MapPin className="w-5 h-5 text-green-500 mb-3" />
              <h2 className="font-display font-semibold text-lg text-foreground group-hover:text-green-500 transition-colors mb-2">
                Best Vehicle Tracking Company in {c.shortName}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                {c.address ?? c.intro}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-green-600 dark:text-green-400">
                Car Tracker in {c.shortName} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
