import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Gen-Set Tracking - Crescent Tracking",
  description:
    "Monitor generator sets and stationary power equipment with GPS tracking, sensors and remote status visibility.",
};

export default function GensetTrackingPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Solutions"
            title="Gen-Set Tracking"
            description="Track and monitor generator sets and other stationary powered assets."
          />

          <div className="mt-10 space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              Our Gen-Set Tracking solution helps organizations monitor the location, running hours, fuel usage and
              status of generator sets and other stationary powered equipment. This improves maintenance planning,
              reduces fuel theft and ensures that backup power is available when needed.
            </p>
            <p>
              Combined with fuel, temperature and other sensors, you get a complete picture of how each unit is being
              used, enabling better control and more efficient operations.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

