import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "CEO Message - Crescent Tracking",
  description:
    "A message from Nasir Khan, CEO/Managing Director of Crescent Group of Companies, on Crescent Tracking’s journey and commitment.",
};

export default function CEOMessagePage() {
  return (
    <div className="pt-24">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Tracking-style background */}
        <div className="absolute inset-0 bg-grid-light dark:bg-grid opacity-40 pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-green-brand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 right-0 w-[520px] h-[520px] bg-green-brand/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Leadership Message"
            title="Message from the CEO"
            description="Our journey, our values, and our commitment to protecting you and your assets."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.2fr)] gap-10 items-start">
            <div className="relative rounded-3xl border border-border/70 bg-card/95 shadow-xl backdrop-blur-sm p-6 sm:p-8 lg:p-10 space-y-5 text-muted-foreground leading-relaxed text-lg">
              <span className="absolute -top-7 left-8 text-6xl text-green-500/20 select-none">
                &ldquo;
              </span>
              <p>Dear Friends, Colleagues &amp; Valued Customers,</p>
              <p>
                From humble beginnings in 2011, the Crescent Group of Companies has been on an epic journey towards
                business excellence and our promise to deliver the very best to our customers. Crescent Group of
                Companies envisions becoming a true symbol of care — not only for our customers, but also for our
                employees and business partners.
              </p>
              <p>
                Today, the Crescent Group has taken multiple initiatives to provide world-class services to our clients
                and to ensure smooth and efficient operations. Our focus on best-in-class vehicle tracking technology to
                enable business operations has ensured that Crescent runs on one of the finest systems in Pakistan for
                faster and more secure business transactions.
              </p>
              <p>
                As a forward-looking professional company, we believe in planning for the long term and have a well laid
                out HR policy for our employees. Our people are the key to our success, and we take measured steps to
                build skill, capability, and efficiency in our staff so that they can achieve their professional goals.
              </p>
              <p>
                In conclusion, I wish to thank our customers for their trust, our Board of Directors as well as our
                management team for their valuable guidance. Special thanks to the members of our staff who consistently
                provide a high level of customer service.
              </p>
              <p>
                I, along with the entire team of Crescent Tracking, invite you to the world of Crescent Group.
              </p>
              <div className="pt-6 border-t border-border/60 mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="font-semibold text-foreground">Best Wishes,</p>
                  <p className="font-semibold text-foreground">Nasir Khan</p>
                  <p className="text-muted-foreground text-sm">CEO / Managing Director</p>
                  <p className="text-muted-foreground text-sm">Crescent Group of Companies</p>
                </div>
                <p className="text-sm uppercase tracking-[0.2em] text-green-600 dark:text-green-400 font-medium">
                  Crescent Tracking
                </p>
              </div>
            </div>

            <div className="relative w-full max-w-sm mx-auto">
              {/* Radar / tracking aura */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                <div className="relative w-56 h-56 rounded-full border border-green-500/30 bg-green-brand/5">
                  <div className="absolute inset-4 rounded-full border border-green-500/40 radar-ring" />
                  <div className="absolute inset-10 rounded-full border border-green-500/25 radar-ring" />
                  <div className="absolute inset-[52px] rounded-full bg-green-brand/5" />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/ceo.jpg"
                    alt="Nasir Khan, CEO of Crescent Group of Companies"
                    fill
                    sizes="(min-width: 1024px) 320px, 60vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="px-5 py-4 border-t border-border/70 bg-gradient-to-r from-green-brand/10 via-background/80 to-green-brand/5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Nasir Khan</p>
                    <p className="text-xs text-muted-foreground">CEO / Managing Director, Crescent Group</p>
                  </div>
                  <span className="inline-flex items-center justify-center rounded-full border border-green-500/40 px-3 py-1 text-[11px] font-mono uppercase tracking-wide text-green-600 dark:text-green-400">
                    Leadership
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

