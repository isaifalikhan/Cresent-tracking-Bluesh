import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Latest insights, news, and best practices on fleet management, GPS tracking, and asset protection.",
};

const blogPosts = [
  {
    id: 1,
    title: "10 Ways to Reduce Fleet Fuel Costs in 2024",
    excerpt:
      "Discover proven strategies to optimize fuel consumption and reduce operational costs for your fleet.",
    category: "Fuel Management",
    author: "Ahmed Khan",
    date: "March 15, 2024",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "The Future of Fleet Management: AI and IoT Trends",
    excerpt:
      "Explore how artificial intelligence and IoT are transforming the fleet management industry.",
    category: "Technology",
    author: "Sarah Malik",
    date: "March 10, 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Driver Safety: Best Practices for Fleet Operators",
    excerpt:
      "Learn how to implement effective driver safety programs and reduce accident rates.",
    category: "Safety",
    author: "Fatima Zahra",
    date: "March 5, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "GPS Tracking Compliance in Pakistan: What You Need to Know",
    excerpt:
      "Understanding the regulatory requirements for vehicle tracking in Pakistan.",
    category: "Compliance",
    author: "Imran Hussain",
    date: "February 28, 2024",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Choosing the Right GPS Tracking Device for Your Fleet",
    excerpt:
      "A comprehensive guide to selecting the best tracking hardware for your specific needs.",
    category: "Technology",
    author: "Kamran Ahmed",
    date: "February 20, 2024",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Asset Tracking for Construction Companies",
    excerpt:
      "How construction businesses can protect and optimize their equipment utilization.",
    category: "Asset Tracking",
    author: "Muhammad Ali",
    date: "February 15, 2024",
    readTime: "5 min read",
    featured: false,
  },
];

const categories = [
  "All",
  "Fuel Management",
  "Technology",
  "Safety",
  "Compliance",
  "Asset Tracking",
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-brand-green/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <span className="inline-block px-4 py-1 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-6">
                Blog
              </span>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Insights &{" "}
                <span className="text-brand-green">Best Practices</span>
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-xl text-slate-600 leading-relaxed">
                Stay updated with the latest trends, tips, and insights on 
                fleet management, GPS tracking, and asset protection.
              </p>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <FadeInView>
              <Card className="overflow-hidden border-slate-100">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2">
                    <div className="bg-gradient-to-br from-brand-green to-brand-green-dark p-8 md:p-12 flex flex-col justify-center">
                      <Badge variant="secondary" className="w-fit mb-4 bg-white/20 text-white">
                        Featured Article
                      </Badge>
                      <span className="text-brand-green-light text-sm font-medium mb-3">
                        {featuredPost.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {featuredPost.title}
                      </h2>
                      <p className="text-white/80 mb-6">{featuredPost.excerpt}</p>
                      <div className="flex items-center gap-4 text-white/60 text-sm mb-6">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <Button
                        variant="secondary"
                        className="w-fit bg-white text-brand-green hover:bg-white/90"
                        asChild
                      >
                        <Link href={`/blog/${featuredPost.id}`}>
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                    <div className="bg-slate-100 min-h-[300px] lg:min-h-full flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-4xl font-bold text-brand-green">
                            {featuredPost.title.charAt(0)}
                          </span>
                        </div>
                        <p className="text-slate-400">Featured Image Placeholder</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInView>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-8 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <FadeInView>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-brand-green text-white"
                      : "bg-white text-slate-600 hover:bg-brand-green/10 hover:text-brand-green"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeInView>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Latest Articles
            </h2>
          </FadeInView>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <StaggerItem key={post.id}>
                <Card className="h-full bg-white border-slate-100 hover:shadow-xl transition-all group">
                  <CardContent className="p-0">
                    <div className="bg-slate-100 h-48 flex items-center justify-center">
                      <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-brand-green">
                          {post.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-brand-green text-sm font-medium">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3 group-hover:text-brand-green transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-slate-600 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeInView>
            <Card className="max-w-2xl mx-auto bg-brand-green border-0">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-white/80 mb-8">
                  Get the latest insights and updates delivered directly to your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button
                    variant="secondary"
                    className="bg-white text-brand-green hover:bg-white/90"
                  >
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
