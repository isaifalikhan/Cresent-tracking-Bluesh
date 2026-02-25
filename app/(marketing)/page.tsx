import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofStrip from "@/components/sections/SocialProofStrip";
import BenefitsSection from "@/components/sections/BenefitsSection";
import SolutionsGrid from "@/components/sections/SolutionsGrid";
import PlatformPreview from "@/components/sections/PlatformPreview";
import IndustriesSection from "@/components/sections/IndustriesSection";
import HowItWorks from "@/components/sections/HowItWorks";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingTeaser from "@/components/sections/PricingTeaser";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Crescent Tracking | GPS Fleet Management & Asset Protection Pakistan",
  description:
    "Pakistan's leading GPS tracking and fleet management company. Real-time vehicle tracking, fuel monitoring, driver behavior analytics, and complete asset protection.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofStrip />
      <BenefitsSection />
      <SolutionsGrid />
      <PlatformPreview />
      <IndustriesSection />
      <HowItWorks />
      <TestimonialsSection />
      <PricingTeaser />
      <FAQSection />
      <CTABanner />
    </>
  );
}
