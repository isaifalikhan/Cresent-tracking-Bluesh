import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Find answers about Crescent Tracking packages, technology, installation, warranty, security features, and support.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <FAQSection headingAs="h1" />
      <CTABanner />
    </div>
  );
}

