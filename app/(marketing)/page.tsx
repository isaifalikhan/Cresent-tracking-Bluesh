import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofStrip from "@/components/sections/SocialProofStrip";
import BenefitsSection from "@/components/sections/BenefitsSection";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import PlatformPreview from "@/components/sections/PlatformPreview";
import AppShowcase from "@/components/sections/AppShowcase";
import ImageGallery from "@/components/sections/ImageGallery";
import IndustriesSection from "@/components/sections/IndustriesSection";
import HowItWorks from "@/components/sections/HowItWorks";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingTeaser from "@/components/sections/PricingTeaser";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";

const homeMetadata = pageMetadata({
  title: "Crescent Tracking Pvt Ltd | Vehicle Tracking & Fleet Management in Pakistan",
  description:
    "Crescent Tracking Pvt Ltd provides vehicle tracking, car trackers, bike trackers and fleet management services in Pakistan. Monitor vehicles, assets, and fleet operations in real time with 24/7 control room support.",
  path: "/",
});

export const metadata: Metadata = {
  ...homeMetadata,
  // Home title already contains the brand, so skip the "| Crescent Tracking" template.
  title: { absolute: homeMetadata.title as string },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofStrip />
      <BenefitsSection />
      <SolutionsGrid />
      <PlatformPreview />
      <AppShowcase />
      <ImageGallery
        badge="See Crescent in Action"
        title="Crescent Tracking in Action"
        description="Our technology, team, and operations across Pakistan."
        columns={4}
        lightbox
        className="bg-muted/30"
      />
      <IndustriesSection />
      <HowItWorks />
      <TestimonialsSection />
      <PricingTeaser />
      <FAQSection />
      <CTABanner />
    </>
  );
}
