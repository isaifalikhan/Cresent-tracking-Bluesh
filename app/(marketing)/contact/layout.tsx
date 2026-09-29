import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CITY_PHONE_DISPLAY } from "@/lib/cities";

// The contact page is a client component, so its metadata lives here.
export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description: `Contact Crescent Tracking for vehicle tracking, bike tracking and fleet management in Pakistan. Call or WhatsApp ${CITY_PHONE_DISPLAY}, visit a branch or send a message to get a quote.`,
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
