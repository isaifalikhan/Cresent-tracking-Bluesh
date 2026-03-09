import type { Metadata } from "next";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Crescent Tracking",
  description:
    "Find answers about Crescent Tracking packages, technology, installation, warranty, security features, and support.",
};

export default function FAQPage() {
  return (
    <div className="pt-24">
      <FAQSection />
      <CTABanner />
    </div>
  );
}

