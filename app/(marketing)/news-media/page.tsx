import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import NewsMediaClient from "./NewsMediaClient";

export const metadata: Metadata = pageMetadata({
  title: "News & Media",
  description:
    "Timeline of Crescent Tracking Pvt Ltd news, events, partnerships, awards, and media coverage from 2017 onwards.",
  path: "/news-media",
});

export default function NewsMediaPage() {
  return <NewsMediaClient />;
}

