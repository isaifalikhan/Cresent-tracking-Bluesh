import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, TrendingDown, Shield, Clock } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real results from real businesses. See how Crescent Tracking helped reduce fuel costs, prevent theft, and improve delivery performance.",
};

const caseStudies = [
  {
    title: "How Swift Logistics Cut Fuel Costs by 38% in 90 Days",
    company: "Swift Logistics Pvt Ltd",
    industry: "Logistics",
    challenge:
      "Swift Logistics was losing over PKR 2.5 million per month to fuel theft, excessive idling, and inefficient routes across their 150-vehicle fleet operating between Lahore, Karachi, and Islamabad.",
    solution:
      "We installed fuel sensors on all vehicles combined with GPS tracking and driver behavior monitoring. Custom fuel theft alerts were configured to notify management within 30 seconds of any suspicious drop.",
    results: [
      { icon: TrendingDown, metric: "38% fuel cost reduction", detail: "Saving PKR 950,000/month" },
      { icon: Shield, metric: "Zero fuel theft incidents", detail: "After first month of deployment" },
      { icon: Clock, metric: "22% improvement in delivery times", detail: "Through route optimization" },
    ],
    quote:
      "The ROI was clear within the first month. We paid for the entire system in under 10 weeks from fuel savings alone.",
    quotePerson: "Imran Shahid, Operations Director",
  },
  {
    title: "BuildRight Construction: Zero Equipment Loss in 18 Months",
    company: "BuildRight Construction",
    industry: "Construction",
    challenge:
      "BuildRight was experiencing equipment theft at 3 active construction sites, losing an average of one piece of heavy equipment per quarter — costing over PKR 10 million annually.",
    solution:
      "We deployed rugged asset trackers on all moveable equipment, set up site geo-fences, and configured after-hours movement alerts. Remote immobilizers were added to all motorized equipment.",
    results: [
      { icon: Shield, metric: "Zero theft incidents", detail: "In 18 months post-installation" },
      { icon: TrendingDown, metric: "PKR 10M+ annual savings", detail: "In equipment loss prevention" },
      { icon: Clock, metric: "35% utilization improvement", detail: "Better equipment scheduling" },
    ],
    quote:
      "We can now see exactly where every excavator, generator, and crane is at any moment. It's transformed how we manage our sites.",
    quotePerson: "Salman Baig, Project Manager",
  },
  {
    title: "Medica Pharma: Achieving 100% Cold Chain Compliance",
    company: "Medica Pharma Distribution",
    industry: "Cold Chain / Pharmaceutical",
    challenge:
      "Medica needed to demonstrate regulatory compliance for temperature-controlled pharmaceutical deliveries. Manual temperature logs were unreliable and created audit risks.",
    solution:
      "GPS tracking was combined with temperature and humidity probes in all refrigerated trucks. Automated reports were generated for each delivery, and alerts fired if temperature exceeded thresholds.",
    results: [
      { icon: Shield, metric: "100% compliance rate", detail: "All regulatory audits passed" },
      { icon: Clock, metric: "3 hours saved per week", detail: "On manual log compilation" },
      { icon: TrendingDown, metric: "Zero product spoilage", detail: "Since system deployment" },
    ],
    quote:
      "Crescent's temperature monitoring system turned a compliance headache into a competitive advantage we now market to our hospital clients.",
    quotePerson: "Ayesha Khalid, Fleet Manager",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-40">
          <Scene />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
          <div className="max-w-3xl pointer-events-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400 font-medium mb-6">
              Case Studies
            </span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white leading-tight mb-6">
              Real businesses. Real results.
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              Numbers don&apos;t lie. See how Pakistani businesses transformed their operations with Crescent Tracking.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {caseStudies.map((cs) => (
            <div key={cs.company} className="rounded-3xl border border-white/5 bg-slate-900/50 p-8 lg:p-10">
              <div className="flex flex-wrap gap-3 mb-5">
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                  {cs.industry}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs">
                  {cs.company}
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-white mb-6">
                {cs.title}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="text-slate-500 text-xs uppercase tracking-wider font-medium mb-2">The Challenge</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <h4 className="text-slate-500 text-xs uppercase tracking-wider font-medium mb-2">Our Solution</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <h4 className="text-slate-500 text-xs uppercase tracking-wider font-medium mb-3">Results</h4>
                  <div className="space-y-2.5">
                    {cs.results.map((r) => (
                      <div key={r.metric} className="flex items-start gap-2.5">
                        <r.icon className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-white text-sm font-medium">{r.metric}</div>
                          <div className="text-slate-500 text-xs">{r.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="border-l-2 border-green-500 pl-4">
                <p className="text-slate-300 text-sm italic mb-1">&ldquo;{cs.quote}&rdquo;</p>
                <cite className="text-slate-500 text-xs not-italic">— {cs.quotePerson}</cite>
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
