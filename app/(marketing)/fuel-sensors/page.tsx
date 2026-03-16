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
      <section className="bg-background">
        <div className="relative w-full aspect-[21/9] min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] overflow-hidden">
          <Image
            src="/images/fuelmanagement.jpeg"
            alt="Fuel level sensors - Crescent Tracking"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      <CTABanner />
    </div>
  );
}

