import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Axle Load Sensors - Crescent Tracking",
  description:
    "Axle load sensors integrated with Crescent Tracking to monitor vehicle load, protect infrastructure and improve safety.",
};

export default function AxleLoadSensorsPage() {
  return (
    <div className="pt-24">
      <section className="bg-background">
        <div className="relative w-full aspect-[21/9] min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] overflow-hidden">
          <Image
            src="/images/12.jpeg"
            alt="Axle load sensors - Crescent Tracking"
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
            title="Axle Load Sensors"
            description="Monitor vehicle load in real time to improve safety and protect your assets."
          />

          <div className="mt-10 space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              Axle load sensors provide live information about the load on each axle, helping you ensure that vehicles
              are not overloaded and that goods are being moved within safe and legal limits.
            </p>
            <p>
              Integrated with Crescent Tracking, axle load data can be viewed alongside location, speed and route
              information, giving you deeper insight into how vehicles are operated and where improvements can be made.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

