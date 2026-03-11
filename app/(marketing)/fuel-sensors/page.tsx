import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Fuel Level Sensors - Crescent Tracking",
  description:
    "Fuel level sensors integrated with Crescent Tracking platform to monitor fuel usage, detect theft and control costs.",
};

export default function FuelSensorsPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Sensors"
                title="Fuel Level Sensors"
                description="Gain full visibility into fuel usage and detect theft or leakage in real time."
              />

              <div className="mt-10 space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Crescent Fuel Level Sensors provide a clear overview of fuel usage by vehicle or stationary unit. By
                  integrating live sensor data with GPS tracking, you can see exactly when and where refueling or fuel
                  draining events occur.
                </p>
                <p>
                  This helps you prevent fuel theft, optimize fueling practices and better understand the true operating
                  cost of each vehicle or generator in your fleet.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] min-h-[280px] rounded-2xl overflow-hidden bg-card shadow-xl ring-1 ring-border/80">
              <Image
                src="/images/fuelmanagement.jpeg"
                alt="Fuel level sensors - Crescent Tracking"
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

      <CTABanner />
    </div>
  );
}

