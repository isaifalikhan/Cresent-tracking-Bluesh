import type { Metadata } from "next";
import NewsMediaClient from "./NewsMediaClient";

export const metadata: Metadata = {
  title: "News & Media - Crescent Tracking",
  description:
    "Timeline of Crescent Tracking Pvt Ltd news, events, partnerships, awards, and media coverage from 2017 onwards.",
};

export default function NewsMediaPage() {
  return <NewsMediaClient />;
}

