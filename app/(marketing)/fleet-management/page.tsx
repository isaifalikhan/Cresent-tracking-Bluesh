import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Fleet Management System - Crescent Tracking",
  description:
    "Fleet management solution with latest mobile applications and web tracking to increase productivity, cut costs and improve safety.",
};

const platformScreens = [
  { src: "/images/fleeymonitoring.jpeg", label: "Fleet monitoring" },
  { src: "/images/tripreport.jpeg", label: "Trip reports" },
  { src: "/images/historyplay.jpeg", label: "History playback" },
  { src: "/images/summaryreport.jpeg", label: "Summary reports" },
];

export default function FleetManagementPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Solutions"
                title="Fleet Management System"
                description="Fleet management solution with latest mobile applications and web tracking."
              />

              <div className="mt-10 space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Crescent Tracking&apos;s Fleet Management System combines real-time GPS tracking, reporting, alerts and
                  analytics to help you increase productivity, cut operating costs and improve driver safety and customer
                  service.
                </p>
                <p>
                  Our web and mobile platforms give you a complete view of your fleet, with tools for route monitoring,
                  trip history, fuel usage estimates and performance comparison over daily, weekly and monthly periods.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] min-h-[280px] rounded-2xl overflow-hidden bg-card shadow-xl ring-1 ring-border/80">
              <Image
                src="/images/fleet.jpeg"
                alt="Fleet management - Crescent Tracking"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Platform screens */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Platform"
            title="Fleet platform in action"
            description="Trip reports, history playback, monitoring and summary reports — all in one place."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformScreens.map(({ src, label }) => (
              <div
                key={src}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-card shadow-lg ring-1 ring-border/80 transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-green-500/30"
              >
                <Image
                  src={src}
                  alt={label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                  <p className="text-white text-sm font-semibold drop-shadow-md">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

