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
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
            <div className="relative aspect-[4/3] min-h-[280px] rounded-2xl overflow-hidden bg-card shadow-xl ring-1 ring-border/80">
              <Image
                src="/images/12.jpeg"
                alt="Axle load sensors - Crescent Tracking"
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

