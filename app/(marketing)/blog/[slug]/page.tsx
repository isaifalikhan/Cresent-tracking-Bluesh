import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { notFound } from "next/navigation";
import { posts } from "../page";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

const postContent: Record<string, string> = {
  "reduce-fleet-fuel-costs": `
Fuel costs represent 30–40% of total fleet operating expenses for most Pakistani businesses. With rising petrol prices, finding ways to reduce consumption has never been more critical.

## 1. Install Fuel Monitoring Sensors

The first step is knowing exactly how much fuel you're using — and where it's going. Precision fuel sensors integrated with your GPS system provide:
- Real-time fuel level readings
- Detection of sudden drops (potential theft)
- Consumption per kilometer by vehicle and route

Our clients typically find 8–12% "invisible" fuel consumption that couldn't be explained before sensor installation.

## 2. Combat Fuel Theft

Fuel theft is endemic across Pakistan's transport industry. Drivers siphoning fuel, inflating receipts, or colluding with fuel pump attendants can cost a 50-vehicle fleet PKR 500,000+ per month.

GPS + fuel sensors create an ironclad audit trail that makes theft immediately visible and acts as a powerful deterrent.

## 3. Eliminate Excessive Idling

Idling burns fuel at 0.5–0.8 liters per hour. A vehicle idling for just 2 hours per day wastes roughly 30 liters per month — or PKR 7,500 at current petrol prices.

Configure alerts for any vehicle idling beyond 5 minutes, and review idle time reports weekly with drivers.

## 4. Optimize Routes

Inefficient routing adds unnecessary kilometers to every trip. GPS-based route optimization can reduce total distances driven by 15–25% for typical delivery fleets.

## 5. Monitor Driver Behavior

Aggressive driving — speeding, harsh acceleration, hard braking — increases fuel consumption by up to 20%. Implement driver scorecards and tie performance bonuses to fuel efficiency metrics.

## 6. Schedule Preventive Maintenance

Poorly maintained vehicles consume significantly more fuel. Underinflated tires alone can reduce fuel efficiency by 3%. Automated maintenance reminders based on mileage ensure vehicles are always in optimal condition.

## 7. Right-Size Your Fleet

GPS data reveals underutilized vehicles. If some trucks are operating at 30% capacity, consolidating routes can dramatically reduce total fuel consumption.

## 8. Analyze High-Consumption Vehicles

Sort vehicles by fuel consumption per kilometer weekly. High-consumption vehicles may have mechanical issues, be driven more aggressively, or be assigned to inappropriate routes.

## 9. Set Fuel Budgets Per Vehicle

With accurate consumption data, you can set monthly fuel budgets per vehicle and alert managers when budgets are being exceeded.

## 10. Create a Fuel Efficiency Culture

Share driver performance data with your team. Create friendly competitions around fuel efficiency. When drivers know they're being measured — and that good performance is recognized — behavior improves.

---

The cumulative effect of implementing all these strategies is typically a 30–45% reduction in fuel costs within 90 days. For a 50-vehicle fleet spending PKR 3 million/month on fuel, that's a potential saving of PKR 1–1.35 million every month.

Ready to start saving? [Contact us](/contact) for a free fuel efficiency assessment.
  `,
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const content = postContent[params.slug] || post.excerpt;

  return (
    <div className="pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="mb-3">
          <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">
            {post.category}
          </span>
        </div>

        <h1 className="font-display font-bold text-4xl lg:text-5xl text-white leading-tight mb-4">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-slate-500 text-sm mb-10 pb-8 border-b border-white/5">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <div className="prose prose-invert prose-green max-w-none">
          {content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h2 key={i} className="font-display font-bold text-2xl text-white mt-10 mb-4">
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line.startsWith("- ")) {
              return (
                <li key={i} className="text-slate-300 text-base leading-relaxed ml-4 mb-1">
                  {line.replace("- ", "")}
                </li>
              );
            }
            if (line.startsWith("---")) {
              return <hr key={i} className="border-white/10 my-8" />;
            }
            if (line.trim() === "") return <br key={i} />;
            return (
              <p key={i} className="text-slate-300 text-base leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-green-400 hover:text-green-300 underline">$1</a>') }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
