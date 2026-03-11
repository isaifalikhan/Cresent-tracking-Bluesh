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
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
            <div className="relative aspect-[4/3] min-h-[280px] rounded-2xl overflow-hidden bg-card shadow-xl ring-1 ring-border/80">
              <Image
                src="/images/track.jpeg"
                alt="Vehicle tracking - Crescent Tracking"
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

