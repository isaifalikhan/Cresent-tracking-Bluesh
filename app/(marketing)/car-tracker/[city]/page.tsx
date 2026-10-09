import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Satellite,
  Power,
  Fuel,
  Smartphone,
  Headphones,
  Route,
  BellRing,
  CheckCircle2,
} from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import PackageComparison from "@/components/sections/PackageComparison";
import WhyCrescent from "@/components/sections/WhyCrescent";
import {
  cities,
  getCity,
  CITY_EMAIL,
  CITY_PHONE_DISPLAY,
  CITY_PHONE_TEL,
  CITY_WHATSAPP_URL,
  type City,
} from "@/lib/cities";
import { OG_IMAGE, SITE_NAME } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = getCity(params.city);
  if (!city) return {};
  const title = `Best Car Tracker in ${city.shortName} | Vehicle Tracking Company ${city.shortName}`;
  const description = `Looking for the best tracker in ${city.shortName}? Crescent Tracking offers GPS car & bike trackers, anti-theft immobilizer & fleet management in ${city.shortName}. Call ${CITY_PHONE_DISPLAY} or WhatsApp us today.`;
  const url = `/car-tracker/${city.slug}`;
  return {
    title: { absolute: title },
    description,
    keywords: [
      `best tracker in ${city.shortName}`,
      `best car tracker in ${city.shortName}`,
      `tracker company in ${city.shortName}`,
      `car tracker in ${city.shortName}`,
      `vehicle tracking company in ${city.shortName}`,
      `best vehicle tracking company in ${city.shortName}`,
      `GPS tracker ${city.shortName}`,
      `car tracking ${city.shortName}`,
      `bike tracker ${city.shortName}`,
      `fleet management ${city.shortName}`,
      `tracker company ${city.shortName}`,
    ],
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website", siteName: SITE_NAME, locale: "en_US", images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

const features = [
  { icon: Satellite, title: "Live GPS Tracking", text: "See your car's exact location, speed and ignition status in real time." },
  { icon: Power, title: "Remote Engine Immobilizer", text: "Stop a stolen vehicle remotely with one command from our control room." },
  { icon: BellRing, title: "Instant Alerts", text: "Get alerts for ignition, over-speeding, geo-fence exit, tampering and more." },
  { icon: Route, title: "History Playback", text: "Replay every trip with complete route, stops and timings." },
  { icon: Fuel, title: "Fuel Monitoring", text: "Fuel sensors detect theft and track consumption for every vehicle." },
  { icon: Smartphone, title: "Mobile App & Web Portal", text: "Track your vehicle anytime from your Android, iPhone or computer." },
  { icon: Headphones, title: "24/7 Control Room", text: "Our monitoring team is available round the clock for emergencies." },
  { icon: ShieldCheck, title: "Theft Recovery Support", text: "Fast coordination with authorities to help recover your vehicle." },
];

const services = [
  { label: "Car Tracking", href: "/vehicle-tracking" },
  { label: "Bike Tracking", href: "/bike-tracking" },
  { label: "Fleet Management", href: "/fleet-management" },
  { label: "Fuel Level Sensors", href: "/fuel-sensors" },
  { label: "Genset Tracking", href: "/genset-tracking" },
  { label: "Asset Tracking", href: "/asset-tracking" },
];

function getFaqs(city: City) {
  return [
    {
      q: `Which is the best car tracker company in ${city.shortName}?`,
      a: `Crescent Tracking is one of the most trusted vehicle tracking companies in ${city.shortName}, offering live GPS tracking, remote engine immobilization, fuel monitoring and a 24/7 control room. Call or WhatsApp us on ${CITY_PHONE_DISPLAY} to get started.`,
    },
    {
      q: `How can I install a car tracker in ${city.shortName}?`,
      a: `Simply call or WhatsApp us on ${CITY_PHONE_DISPLAY}${city.address ? ` or visit our office at ${city.address}` : ""}. Our team will guide you on the right package and schedule the installation of your car tracker.`,
    },
    {
      q: `Can I track my car from my mobile phone?`,
      a: `Yes. Once the tracker is installed, you can see your vehicle's live location, trip history and alerts on our mobile app and web portal from anywhere in ${city.shortName} or across Pakistan.`,
    },
    {
      q: `Do you offer fleet management for businesses in ${city.shortName}?`,
      a: `Yes. We provide complete fleet management for companies in ${city.shortName}, including driver behaviour reports, fuel sensors, geo-fencing and detailed trip reports for ${city.industries.slice(0, 3).join(", ").toLowerCase()} and more.`,
    },
    {
      q: `What happens if my car is stolen in ${city.shortName}?`,
      a: `Contact our 24/7 control room immediately. We can track your vehicle's live location, remotely immobilize the engine and coordinate with the authorities to support recovery.`,
    },
  ];
}

const contactLinkClass = "text-green-600 dark:text-green-400 font-medium underline underline-offset-2";

/** Turns "call or WhatsApp us on <number>" in an FAQ answer into tap-to-call and WhatsApp links. */
function linkContacts(text: string) {
  const match = text.match(/(call) or (WhatsApp) us on ([\d-]+)/i);
  if (!match || match.index === undefined) return text;
  const [whole, call, whatsapp, number] = match;
  return (
    <>
      {text.slice(0, match.index)}
      <a href={`tel:${CITY_PHONE_TEL}`} className={contactLinkClass}>{call}</a>
      {" or "}
      <a href={CITY_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={contactLinkClass}>{whatsapp}</a>
      {" us on "}
      <a href={`tel:${CITY_PHONE_TEL}`} className={contactLinkClass}>{number}</a>
      {text.slice(match.index + whole.length)}
    </>
  );
}

export default function CityTrackerPage({ params }: { params: { city: string } }) {
  const city = getCity(params.city);
  if (!city) notFound();

  const faqs = getFaqs(city);
  const otherCities = cities.filter((c) => c.slug !== city.slug);
  const pageUrl = `https://www.crescenttrack.com/car-tracker/${city.slug}`;
  const mapEmbed = city.geo
    ? `https://www.google.com/maps?q=${city.geo.lat},${city.geo.lng}&z=17&output=embed`
    : null;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${pageUrl}#business`,
      name: `Crescent Tracking - ${city.name}`,
      description: city.intro,
      url: pageUrl,
      image: "https://www.crescenttrack.com/Logo.png",
      logo: "https://www.crescenttrack.com/Logo.png",
      telephone: CITY_PHONE_TEL,
      email: CITY_EMAIL,
      ...(city.address && {
        address: {
          "@type": "PostalAddress",
          streetAddress: city.address,
          addressLocality: city.shortName,
          addressRegion: city.region,
          addressCountry: "PK",
        },
      }),
      ...(city.mapUrl && { hasMap: city.mapUrl }),
      ...(city.geo && {
        geo: { "@type": "GeoCoordinates", latitude: city.geo.lat, longitude: city.geo.lng },
      }),
      areaServed: { "@type": "City", name: city.shortName },
      parentOrganization: { "@id": "https://www.crescenttrack.com/#organization" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.crescenttrack.com" },
        { "@type": "ListItem", position: 2, name: "Car Tracker", item: "https://www.crescenttrack.com/car-tracker" },
        { "@type": "ListItem", position: 3, name: city.shortName, item: pageUrl },
      ],
    },
  ];

  return (
    <div className="pt-24 bg-background min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-grid-light dark:bg-grid opacity-50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/car-tracker"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Cities
            </Link>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-sm text-green-600 dark:text-green-400 font-medium mb-6">
            <MapPin className="w-3.5 h-3.5" />
            Car Tracker in {city.shortName}
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
            Best Car Tracker &amp; Vehicle Tracking Company in {city.shortName}
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">{city.intro}</p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${CITY_PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href={CITY_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold px-6 py-3 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href={`mailto:${CITY_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-border hover:border-green-500/50 text-foreground font-semibold px-6 py-3 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-6 ${mapEmbed ? "lg:grid-cols-2" : ""}`}>
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                Crescent Tracking {city.shortName} {city.address ? "Office" : "Contact"}
              </h2>
              <ul className="space-y-5">
                {city.address && (
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="text-foreground font-medium">{city.address}</p>
                    </div>
                  </li>
                )}
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href={`mailto:${CITY_EMAIL}`} className="text-foreground font-medium hover:text-green-500 break-all">
                      {CITY_EMAIL}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={`tel:${CITY_PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a
                  href={CITY_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white text-sm font-semibold px-5 py-2.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                {city.mapUrl && (
                  <a
                    href={city.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border hover:border-green-500/50 text-foreground text-sm font-semibold px-5 py-2.5 transition-colors"
                  >
                    <Navigation className="w-4 h-4" /> Get Directions
                  </a>
                )}
              </div>
            </div>

            {mapEmbed && (
              <div className="rounded-2xl overflow-hidden border border-border min-h-[320px]">
                <iframe
                  title={`Crescent Tracking ${city.shortName} office location`}
                  src={mapEmbed}
                  className="w-full h-full min-h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <WhyCrescent cityName={city.shortName} />

      {/* Article */}
      <article className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-muted-foreground text-base leading-relaxed">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground leading-tight">
            Pakistan&apos;s No. 1 Vehicle Tracking Service Provider is Available in {city.shortName}
          </h2>
          <p>
            In the fast-evolving corporate and transit landscape of {city.shortName}, maintaining full visibility
            over your assets is no longer a luxury—it is a core operational requirement. As local traffic grows and
            logistics networks expand, businesses and vehicle owners face rising challenges ranging from fuel
            inefficiencies to security risks.
          </p>
          <p>
            Stepping up to solve these modern logistics challenges is Crescent Tracking Pvt Ltd, a premier provider
            delivering cutting-edge Vehicle Tracking and Fleet Management Services right here in {city.shortName}.
          </p>
          <p>
            Whether you are a business owner managing a massive commercial fleet or an individual looking to
            safeguard your personal car, Crescent Tracking brings enterprise-grade technology to your doorstep. Here
            is a detailed look at how their services are transforming security and efficiency across the city.
          </p>

          <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground pt-6">
            Why Advanced Vehicle Tracking Matters in {city.shortName}
          </h2>
          <p>
            Operating vehicles in a bustling urban environment like {city.shortName} presents unique demands.
            Business fleets must navigate traffic delays, fluctuating fuel costs, and unpredictable route
            deviations, while individual owners must contend with security vulnerabilities.
          </p>
          <p>{city.localNeed}</p>
          <p>
            Standard GPS systems merely show a dot on a map. Crescent Tracking goes far beyond basic navigation,
            transforming raw location data into actionable insights that protect your investments and optimize
            your daily operations.
          </p>

          <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground pt-6">
            Key Services Offered by Crescent Tracking Pvt Ltd
          </h2>

          <h3 className="font-display font-semibold text-xl text-foreground pt-2">1. Real-Time Vehicle Tracking</h3>
          <p>
            Know exactly where your vehicles are at any given second. Crescent Tracking utilizes high-precision GPS
            modules paired with a robust software platform, allowing users to monitor precise locations, travel
            speeds, and exact routes via a user-friendly mobile app or desktop dashboard.
          </p>

          <h3 className="font-display font-semibold text-xl text-foreground pt-2">
            2. Comprehensive Fleet Management Services
          </h3>
          <p>
            For local corporations, logistics providers, and delivery services, managing multiple assets
            simultaneously can be a logistical headache. Crescent Tracking simplifies this with comprehensive fleet
            management analytics, including:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
              <span>
                <strong className="text-foreground">Driver Behavior Monitoring:</strong> Track harsh braking, sudden
                acceleration, over-speeding, and prolonged idling to ensure driver safety and preserve vehicle
                longevity.
              </span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
              <span>
                <strong className="text-foreground">Maintenance Scheduling:</strong> Receive automated alerts for oil
                changes, tire rotations, and routine inspections to keep your fleet in peak condition.
              </span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
              <span>
                <strong className="text-foreground">Optimized Routing:</strong> Reduce travel times and delivery
                delays across the city by analyzing historical route data.
              </span>
            </li>
          </ul>

          <h3 className="font-display font-semibold text-xl text-foreground pt-2">3. Advanced Geo-Fencing Capabilities</h3>
          <p>
            Define digital boundaries for your vehicles. If a vehicle enters or exits a designated zone within{" "}
            {city.shortName} without authorization, the system sends an immediate alert to your phone. This feature
            is particularly vital for companies managing specific regional delivery zones or strict operational
            perimeters.
          </p>

          <h3 className="font-display font-semibold text-xl text-foreground pt-2">4. Fuel Management and Optimization</h3>
          <p>
            With fuel costs directly impacting business profitability, managing consumption is crucial. Crescent
            Tracking&apos;s advanced fuel monitoring sensors help detect sudden fuel drops, track fill-up anomalies,
            and eliminate unauthorized vehicle usage—saving your business significant operational costs.
          </p>

          <h3 className="font-display font-semibold text-xl text-foreground pt-2">5. Remote Engine Immobilization</h3>
          <p>
            In the unfortunate event of unauthorized use or vehicle theft, time is of the essence. Crescent
            Tracking&apos;s anti-theft technology enables users to remotely cut off the engine power safely through
            their smartphone application, instantly preventing unauthorized movement and securing the asset until
            recovery.
          </p>

          <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground pt-6">
            The Crescent Tracking Advantage: Localized Support, Global Standards
          </h2>
          <p>
            What truly sets Crescent Tracking Pvt Ltd apart in {city.shortName} is their dedication to reliable
            customer service. Technology is only as good as the support behind it, and Crescent Tracking pairs its
            state-of-the-art software with a 24/7 dedicated control room and localized customer service teams.
            Should an anomaly arise or emergency assistance be required, help is always just a phone call away —{" "}
            <a href={`tel:${CITY_PHONE_TEL}`} className="text-green-600 dark:text-green-400 underline">
              call us
            </a>{" "}
            or{" "}
            <a
              href={CITY_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 underline"
            >
              WhatsApp us
            </a>
            .
          </p>

          <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground pt-6">
            Areas We Cover in {city.shortName}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-2">
            {city.areas.map((a) => (
              <li key={a} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                {a}
              </li>
            ))}
          </ul>
          <p>
            Our trackers work on every major route in and around the city, such as{" "}
            {city.routes.slice(0, -1).join(", ")} and {city.routes[city.routes.length - 1]}, and across the rest
            of Pakistan. Customers using Crescent Tracking in {city.shortName} include{" "}
            {city.industries.join(", ").toLowerCase()}.
          </p>
        </div>
      </article>

      {/* Features */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-foreground mb-8 text-center">
            Car Tracker Features in {city.shortName}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-5">
                <Icon className="w-6 h-6 text-green-500 mb-3" />
                <h3 className="font-semibold text-foreground mb-1.5">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-foreground mb-4">
            Our Tracking Services in {city.shortName}
          </h2>
          <p className="text-muted-foreground mb-6">
            Beyond car tracking, we offer a full range of GPS and IoT solutions for individuals and businesses in{" "}
            {city.shortName}:
          </p>
          <div className="flex flex-wrap gap-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-full border border-border hover:border-green-500/50 hover:text-green-500 px-4 py-2 text-sm text-foreground transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-card p-5">
                <summary className="cursor-pointer list-none font-semibold text-foreground flex justify-between gap-4">
                  {f.q}
                  <span className="text-green-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{linkContacts(f.a)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl text-foreground mb-5">
            Car Tracker in Other Cities
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/car-tracker/${c.slug}`}
                className="rounded-full bg-green-500/10 border border-green-500/20 hover:border-green-500/50 px-4 py-2 text-sm text-green-700 dark:text-green-400 transition-colors"
              >
                Car Tracker in {c.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PackageComparison cityName={city.shortName} />

      <CTABanner showWhatsApp />
    </div>
  );
}
