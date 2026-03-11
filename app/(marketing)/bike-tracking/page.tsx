import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Bike Tracking - Crescent Tracking",
  description:
    "Bike tracking solution in Pakistan with latest GPS tracking equipment and high location accuracy for individual and commercial use.",
};

export default function BikeTrackingPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Solutions"
                title="Bike Tracking"
                description="Providing the best bike tracking solution in Pakistan with the latest and most advanced tracking equipment."
              />

              <div className="mt-10 space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Our bike tracking solution is designed specifically for two-wheelers, giving you live GPS visibility,
                  alerts and recovery support in case of theft or snatching. Location accuracy is within a few meters, so
                  you always know where your bike is.
                </p>
                <p>
                  With 24/7 control room support and mobile apps, you can track your bike in real time, review history and
                  receive important alerts directly on your phone.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] min-h-[280px] rounded-2xl overflow-hidden bg-card shadow-xl ring-1 ring-border/80">
              <Image
                src="/images/biketracking.jpeg"
                alt="Bike tracking - Crescent Tracking"
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

