import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";
import { Camera, Video, Eye, Package, MoveLeft, UserCheck, CloudUpload, BellRing, History } from "lucide-react";

export const metadata: Metadata = pageMetadata({
  title: "AI Dashcam & Multi-Camera Video Telematics",
  description:
    "Crescent Tracking dashcams give you front, cabin, rear, side and cargo camera views with live video, driver fatigue alerts and event recording, integrated with GPS tracking.",
  path: "/dashcam",
});

const cameras = [
  {
    icon: Video,
    position: "Front",
    model: "JC450",
    text: "Records the road ahead in HD to capture collisions, near-misses and traffic incidents as evidence.",
  },
  {
    icon: UserCheck,
    position: "Cabin",
    model: "JC171",
    text: "Driver-facing camera that detects fatigue, yawning, phone use and distraction with instant alerts.",
  },
  {
    icon: Camera,
    position: "Rear",
    model: "CE01",
    text: "Covers the area behind the vehicle for safer reversing and rear-end incident recording.",
  },
  {
    icon: MoveLeft,
    position: "Side",
    model: "CE02",
    text: "Eliminates blind spots along the side of trucks and buses during lane changes and turns.",
  },
  {
    icon: Package,
    position: "Cargo",
    model: "CI01",
    text: "Monitors the cargo area to verify loading, prevent pilferage and document the condition of goods.",
  },
];

const features = [
  { icon: Eye, title: "Live Video Streaming", text: "View any camera on your vehicle live from the web portal or mobile app." },
  { icon: BellRing, title: "Driver Safety Alerts", text: "Real-time alerts for drowsiness, distraction, harsh braking and over-speeding." },
  { icon: History, title: "Event Recording & Playback", text: "Automatic clips around critical events, synced with GPS location and speed." },
  { icon: CloudUpload, title: "Cloud Evidence Storage", text: "Download and share footage for insurance claims and dispute resolution." },
];

export default function DashcamPage() {
  return (
    <div className="pt-24">
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            badge="New Product"
            title="AI Dashcam & Video Telematics"
            description="See what happens on the road, in the cabin and in the cargo hold, all from one platform alongside your live GPS tracking."
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="rounded-3xl border border-border bg-white p-4 sm:p-6 overflow-hidden">
            <Image
              src="/images/dashcam-system.png"
              alt="Multi-camera dashcam system on a truck: front, cabin, rear, left side and cargo cameras"
              width={1920}
              height={1130}
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Camera Setup"
            title="Up to five cameras, full vehicle coverage"
            description="Pick the cameras your operation needs, from a single front dashcam to a complete 360° setup for trucks and buses."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {cameras.map((cam) => (
              <div key={cam.position} className="p-6 rounded-2xl border border-border bg-card">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-green-brand/20 flex items-center justify-center">
                    <cam.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground border border-border rounded-full px-2.5 py-0.5">
                    {cam.model}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">{cam.position} Camera</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cam.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading badge="Features" title="Video that works with your tracking" />
              <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Crescent dashcams connect directly to the Crescent Tracking platform, so every video clip is tied to
                  the vehicle&apos;s location, speed and route at that moment.
                </p>
                <p>
                  Fleet managers can coach drivers with real footage, protect them against false claims and cut accident
                  and insurance costs across the fleet.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.title} className="p-5 rounded-2xl border border-border bg-card">
                  <f.icon className="w-6 h-6 text-green-600 dark:text-green-400 mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
