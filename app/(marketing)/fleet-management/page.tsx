import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Fleet Management System - Crescent Tracking",
  description:
    "Fleet management solution with latest mobile applications and web tracking to increase productivity, cut costs and improve safety.",
};

export default function FleetManagementPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Solutions"
            title="Fleet Management System"
            description="Fleet management solution with latest mobile applications and web tracking."
          />

          <div className="mt-10 space-y-5 text-muted-foreground leading-relaxed text-lg">
            <p>
              Crescent Tracking&apos;s Fleet Management System combines real-time GPS tracking, reporting, alerts and
              analytics to help you increase productivity, cut operating costs and improve driver safety and customer
              service.
            </p>
            <p>
              Our web and mobile platforms give you a complete view of your fleet, with tools for route monitoring,
              trip history, fuel usage estimates and performance comparison over daily, weekly and monthly periods.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

