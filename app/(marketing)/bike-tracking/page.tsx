import type { Metadata } from "next";
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </section>

      <CTABanner />
    </div>
  );
}

