import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Asset Tracking - Crescent Tracking",
  description:
    "Track trailers, containers, generators and high-value mobile assets with long-life GPS tracking devices and web / mobile access.",
};

export default function AssetTrackingPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Solutions"
            title="Assets Tracking"
            description="Protect your high-value mobile assets with reliable GPS / GSM–GPRS tracking."
          />

          <div className="mt-10 space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              Crescent Tracking provides asset tracking solutions for trailers, containers, generators and other
              high-value mobile assets. Our long-life tracking devices and robust platform keep you informed about where
              your assets are, how they are being used and when they move.
            </p>
            <p>
              You can define geo-fences, receive movement and tamper alerts and view complete history, allowing you to
              reduce losses, improve utilization and plan operations with confidence.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

