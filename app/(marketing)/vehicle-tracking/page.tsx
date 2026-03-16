import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Vehicle Tracking - Crescent Tracking",
  description:
    "The best vehicle tracking solution in Pakistan with real-time GPS / GPRS monitoring, immobilization and 24/7 control room support.",
};

export default function VehicleTrackingPage() {
  return (
    <div className="pt-24">
      {/* Full-width hero image */}
      <section className="bg-background">
        <div className="w-full px-0">
          <div className="relative w-full aspect-[21/9] min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] overflow-hidden">
            <Image
              src="/images/track.jpeg"
              alt="Vehicle tracking - Crescent Tracking"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Solutions"
            title="Vehicle Tracking"
            description="The best vehicle tracking solution with unbreakable services and real-time visibility."
          />

          <div className="mt-10 space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              Crescent Tracking delivers a complete vehicle tracking solution, combining advanced hardware with powerful
              software so you can see your vehicles in real time, anywhere in Pakistan. Live GPS / GPRS tracking lets
              you monitor location, speed, direction and ignition status with high accuracy.
            </p>
            <p>
              Our system supports immobilization commands, geo-fencing, history playback and detailed trip reports so
              that you can control unauthorized use, reduce theft risk and improve fleet utilization. With 24/7 control
              room coverage, you are never alone in an emergency.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

