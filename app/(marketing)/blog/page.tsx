import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const Scene = dynamic(() => import("@/components/three/Scene"), { ssr: false });

export const metadata: Metadata = {
  title: "Blog",
  description: "Fleet management insights, GPS tracking tips, fuel saving strategies, and industry news from Crescent Tracking.",
};

export const posts = [
  {
    slug: "reduce-fleet-fuel-costs",
    title: "10 Proven Ways to Reduce Fleet Fuel Costs in Pakistan",
    excerpt:
      "Fuel is typically the largest operational expense for Pakistani fleet operators. Here are 10 actionable strategies — backed by data from our 500+ clients — to cut your fuel bill significantly.",
    category: "Cost Reduction",
    date: "January 28, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "gps-tracking-vehicle-theft-pakistan",
    title: "How GPS Tracking Reduces Vehicle Theft Risk in Pakistan",
    excerpt:
      "Vehicle theft costs Pakistani businesses billions annually. Modern GPS tracking systems have changed the recovery equation dramatically — here's how.",
    category: "Security",
    date: "January 15, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "driver-behavior-fleet-safety",
    title: "The Hidden Cost of Poor Driver Behavior — and How to Fix It",
    excerpt:
      "Aggressive driving doesn't just endanger lives — it adds up to 20% to fuel costs and drastically increases maintenance expenses. Analytics can change this.",
    category: "Driver Safety",
    date: "January 5, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "cold-chain-monitoring-pakistan",
    title: "Cold Chain Monitoring: A Complete Guide for Pakistani Distributors",
    excerpt:
      "Pharmaceutical and food companies face strict regulatory requirements for temperature-controlled transport. GPS + IoT sensors make compliance automatic.",
    category: "Industry Guide",
    date: "December 20, 2024",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "fleet-management-erd-pakistan",
    title: "Fleet Management ROI Calculator: What Can You Save?",
    excerpt:
      "Use our simple framework to estimate how much your business could save by implementing a comprehensive fleet management system.",
    category: "Business",
    date: "December 12, 2024",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "geo-fencing-business-uses",
    title: "7 Creative Uses of Geo-Fencing That Pakistani Businesses Are Missing",
    excerpt:
      "Most businesses use geo-fencing just for basic boundary alerts. Here are 7 advanced applications that are transforming operations for our clients.",
    category: "Technology",
    date: "December 1, 2024",
    readTime: "6 min read",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="pt-24">
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-40">
          <Scene />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
          <div className="max-w-2xl pointer-events-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-400 font-medium mb-6">
              Blog
            </span>
            <h1 className="font-display font-bold text-5xl text-white leading-tight mb-4">
              Fleet intelligence insights
            </h1>
            <p className="text-slate-400 text-lg">
              Expert guides, case studies, and industry news for Pakistani fleet operators.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-2xl border border-white/5 bg-slate-900/50 hover:border-green-500/20 p-8 lg:p-10 mb-8 transition-all"
            >
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
                  Featured
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs">
                  {featured.category}
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-white group-hover:text-green-400 transition-colors mb-3">
                {featured.title}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4 max-w-2xl">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-slate-500 text-sm">
                <span>{featured.date}</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
                <span className="flex items-center gap-1.5 text-green-400 group-hover:gap-2.5 transition-all">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          )}

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-white/5 bg-slate-900/50 hover:border-green-500/20 p-6 transition-all"
              >
                <span className="px-2.5 py-1 rounded-full bg-white/5 text-slate-400 text-xs mb-4 inline-block">
                  {post.category}
                </span>
                <h3 className="font-display font-semibold text-white text-lg group-hover:text-green-400 transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-slate-500 text-xs">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
