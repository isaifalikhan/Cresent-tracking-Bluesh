import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Quick Links - Crescent Tracking",
  description:
    "Direct access to Crescent Tracking web platforms and mobile apps for Web Track 1, Web Track 2, and Web Track 3.",
};

const quickLinks = [
  {
    label: "Web Track 1",
    description: "Original Crescent Tracking web and mobile access.",
    items: [
      {
        type: "Android Mobile Application",
        href: "https://play.google.com/store/apps/details?id=com.gosafesystem.gpsmonitor&hl=en",
      },
      {
        type: "iOS Link Based Mobile Application",
        href: "https://apps.apple.com/pk/app/teletix/id1453987204",
      },
      {
        type: "Web Tracking for Laptop/PC",
        href: "http://trackgf.crescenttrack.com:1367/Account/LogOn",
      },
    ],
  },
  {
    label: "Web Track 2",
    description: "Pegasus Atlas based tracking access.",
    items: [
      {
        type: "Android Mobile Application",
        href: "https://play.google.com/store/apps/details?id=com.cresent.app&hl=en",
      },
      {
        type: "iOS Mobile Application",
        href: "https://apps.apple.com/pk/app/crescent-tracking-ultra/id6502603426?uo=2",
      },
      {
        type: "Web Tracking for Laptop/PC",
        href: "http://pegasusatlas.com/mainpage.aspx",
      },
    ],
  },
  {
    label: "Web Track 3",
    description: "Teletix based tracking portal.",
    items: [
      {
        type: "Android Mobile Application",
        href: "https://play.google.com/store/apps/details?id=com.gosafesystem.gpsmonitor&hl=en",
      },
      {
        type: "iOS Mobile Application",
        href: "https://apps.apple.com/pk/app/teletix/id1453987204",
      },
      {
        type: "Web Tracking for Laptop/PC",
        href: "http://trackjm.crescenttrack.com:2020/Account/LogOn",
      },
    ],
  },
];

export default function QuickLinksPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Quick Links"
            title="Stay close to your vehicles"
            description="Use these direct links to access Crescent Tracking web portals and mobile applications."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((group) => (
              <div
                key={group.label}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4"
              >
                <div>
                  <h2 className="font-display font-semibold text-xl text-foreground">
                    {group.label}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">{group.description}</p>
                </div>

                <ul className="space-y-3 text-sm">
                  {group.items.map((item) => (
                    <li key={`${group.label}-${item.type}`}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 underline-offset-4 hover:underline"
                      >
                        {item.type}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

