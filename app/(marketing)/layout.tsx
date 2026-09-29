import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { CITY_EMAIL, CITY_PHONE_TEL } from "@/lib/cities";

const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Crescent Tracking (Pvt) Ltd",
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/Logo.png`,
    email: CITY_EMAIL,
    foundingDate: "2011",
    areaServed: { "@type": "Country", name: "Pakistan" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CITY_PHONE_TEL,
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  },
];

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
