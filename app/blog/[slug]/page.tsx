import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook } from "lucide-react";

// This would normally come from a CMS or database
const blogPosts = [
  {
    id: 1,
    slug: "1",
    title: "10 Ways to Reduce Fleet Fuel Costs in 2024",
    excerpt:
      "Discover proven strategies to optimize fuel consumption and reduce operational costs for your fleet.",
    content: `
      <p>Fuel costs represent one of the largest operational expenses for fleet operators. With fuel prices continuing to fluctuate, finding ways to reduce consumption has never been more critical. In this comprehensive guide, we'll explore ten proven strategies that can help you significantly cut your fleet's fuel costs.</p>
      
      <h2>1. Implement GPS Tracking and Route Optimization</h2>
      <p>Modern GPS tracking systems do more than just show vehicle locations. They provide intelligent route optimization that can reduce unnecessary mileage by up to 20%. By analyzing traffic patterns, road conditions, and delivery schedules, these systems suggest the most fuel-efficient routes for your drivers.</p>
      
      <h2>2. Monitor Driver Behavior</h2>
      <p>Aggressive driving habits like rapid acceleration, harsh braking, and excessive idling can increase fuel consumption by up to 40%. Implementing a driver behavior monitoring system helps identify these issues and provides coaching opportunities to improve efficiency.</p>
      
      <h2>3. Maintain Proper Tire Pressure</h2>
      <p>Under-inflated tires can reduce fuel efficiency by up to 3%. Implement a regular tire pressure monitoring program and consider investing in tire pressure monitoring systems (TPMS) for your fleet.</p>
      
      <h2>4. Reduce Vehicle Idling</h2>
      <p>An idling vehicle can consume up to 0.5 gallons of fuel per hour. Set clear idling policies and use tracking systems to monitor and enforce them. Many modern systems can automatically alert you when vehicles idle beyond set time limits.</p>
      
      <h2>5. Regular Vehicle Maintenance</h2>
      <p>Well-maintained vehicles run more efficiently. Regular oil changes, air filter replacements, and engine tune-ups can improve fuel economy by up to 4%.</p>
      
      <h2>6. Use Fuel Cards with Monitoring</h2>
      <p>Fuel cards with integrated monitoring help prevent fuel theft and provide detailed consumption data. When combined with GPS tracking, you can match fuel purchases to vehicle locations and usage patterns.</p>
      
      <h2>7. Optimize Vehicle Load</h2>
      <p>Extra weight reduces fuel efficiency. Remove unnecessary equipment and optimize cargo distribution. Every 100 pounds of extra weight can reduce MPG by up to 2%.</p>
      
      <h2>8. Invest in Fuel-Efficient Vehicles</h2>
      <p>When replacing vehicles, consider fuel efficiency ratings. Hybrid and electric vehicles may have higher upfront costs but can provide significant long-term savings.</p>
      
      <h2>9. Train Drivers on Eco-Driving Techniques</h2>
      <p>Regular training on eco-driving techniques can improve fuel efficiency by up to 15%. Cover topics like smooth acceleration, maintaining steady speeds, and anticipating traffic conditions.</p>
      
      <h2>10. Analyze and Act on Data</h2>
      <p>Regular analysis of fuel consumption data helps identify trends and opportunities for improvement. Set measurable targets and track progress over time.</p>
      
      <h2>Conclusion</h2>
      <p>Reducing fuel costs requires a comprehensive approach combining technology, training, and maintenance. By implementing these strategies, fleet operators can typically achieve fuel cost reductions of 20-30%, significantly improving their bottom line while also reducing environmental impact.</p>
    `,
    category: "Fuel Management",
    author: "Ahmed Khan",
    authorRole: "Fleet Management Expert",
    date: "March 15, 2024",
    readTime: "5 min read",
    tags: ["fuel efficiency", "cost reduction", "fleet management", "GPS tracking"],
  },
  {
    id: 2,
    slug: "2",
    title: "The Future of Fleet Management: AI and IoT Trends",
    excerpt:
      "Explore how artificial intelligence and IoT are transforming the fleet management industry.",
    content: `<p>Artificial Intelligence and Internet of Things are revolutionizing fleet management...</p>`,
    category: "Technology",
    author: "Sarah Malik",
    authorRole: "Technology Analyst",
    date: "March 10, 2024",
    readTime: "7 min read",
    tags: ["AI", "IoT", "technology", "innovation"],
  },
  {
    id: 3,
    slug: "3",
    title: "Driver Safety: Best Practices for Fleet Operators",
    excerpt:
      "Learn how to implement effective driver safety programs and reduce accident rates.",
    content: `<p>Driver safety should be the top priority for every fleet operator...</p>`,
    category: "Safety",
    author: "Fatima Zahra",
    authorRole: "Safety Consultant",
    date: "March 5, 2024",
    readTime: "6 min read",
    tags: ["safety", "driver behavior", "compliance"],
  },
  {
    id: 4,
    slug: "4",
    title: "GPS Tracking Compliance in Pakistan: What You Need to Know",
    excerpt:
      "Understanding the regulatory requirements for vehicle tracking in Pakistan.",
    content: `<p>The regulatory landscape for GPS tracking in Pakistan is evolving...</p>`,
    category: "Compliance",
    author: "Imran Hussain",
    authorRole: "Legal Advisor",
    date: "February 28, 2024",
    readTime: "4 min read",
    tags: ["compliance", "regulations", "Pakistan"],
  },
  {
    id: 5,
    slug: "5",
    title: "Choosing the Right GPS Tracking Device for Your Fleet",
    excerpt:
      "A comprehensive guide to selecting the best tracking hardware for your specific needs.",
    content: `<p>With so many GPS tracking devices on the market, choosing the right one can be challenging...</p>`,
    category: "Technology",
    author: "Kamran Ahmed",
    authorRole: "Technical Specialist",
    date: "February 20, 2024",
    readTime: "8 min read",
    tags: ["GPS", "hardware", "buying guide"],
  },
  {
    id: 6,
    slug: "6",
    title: "Asset Tracking for Construction Companies",
    excerpt:
      "How construction businesses can protect and optimize their equipment utilization.",
    content: `<p>Construction equipment represents a significant investment for any construction company...</p>`,
    category: "Asset Tracking",
    author: "Muhammad Ali",
    authorRole: "Industry Expert",
    date: "February 15, 2024",
    readTime: "5 min read",
    tags: ["construction", "asset tracking", "equipment"],
  },
];

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Blog Post Not Found
          </h1>
          <p className="text-slate-600 mb-8">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button asChild>
            <Link href="/blog/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32">
      {/* Article Header */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-brand-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" className="mb-6" asChild>
              <Link href="/blog/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>

            <Badge variant="brand" className="mb-4">
              {post.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-slate-600 mb-8">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center">
                  <span className="text-brand-green font-semibold">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-slate-900">{post.author}</p>
                  <p className="text-xs">{post.authorRole}</p>
                </div>
              </div>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Sidebar */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="sticky top-32">
                  <Card className="mb-6">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-slate-900 mb-4">
                        Share Article
                      </h3>
                      <div className="flex gap-2">
                        <button className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
                          <Twitter className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
                          <Facebook className="w-5 h-5" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-slate-900 mb-4">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full hover:bg-brand-green/10 hover:text-brand-green transition-colors cursor-pointer"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <div
                  className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-brand-green prose-strong:text-slate-900"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Card key={relatedPost.id} className="bg-white border-slate-100">
                    <CardContent className="p-6">
                      <span className="text-brand-green text-sm font-medium">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-2 mb-3">
                        <Link
                          href={`/blog/${relatedPost.slug}`}
                          className="hover:text-brand-green transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {relatedPost.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
