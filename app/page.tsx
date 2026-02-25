import { Hero } from "./sections/Hero";
import { SocialProof } from "./sections/SocialProof";
import { Benefits } from "./sections/Benefits";
import { Solutions } from "./sections/Solutions";
import { PlatformPreview } from "./sections/PlatformPreview";
import { Industries } from "./sections/Industries";
import { HowItWorks } from "./sections/HowItWorks";
import { Testimonials } from "./sections/Testimonials";
import { Pricing } from "./sections/Pricing";
import { FAQ } from "./sections/FAQ";
import { CTA } from "./sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Benefits />
      <Solutions />
      <PlatformPreview />
      <Industries />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
