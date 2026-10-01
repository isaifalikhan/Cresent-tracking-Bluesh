import Image from "next/image";

const reasons = [
  {
    image: "years",
    title: "16 Years of Success",
    text: "Over a decade of trusted experience and proven tracking solutions.",
  },
  {
    image: "award",
    title: "Brand of the Year 2025",
    text: "Recognized nationally for excellence and market leadership.",
  },
  {
    image: "pta",
    title: "PTA Approved & PTCA Member",
    text: "Licensed and trusted industry representative.",
  },
  {
    image: "app",
    title: "Pakistan's No.1 Tracking Mobile App",
    text: "Real-time tracking, alerts and reports anytime.",
  },
  {
    image: "branches",
    title: "Largest Branch Network in Pakistan",
    text: "Branches across Punjab, Sindh, KPK and Balochistan.",
  },
  {
    image: "iso",
    title: "ISO Certified Company",
    text: "Committed to international quality standards.",
  },
  {
    image: "installation",
    title: "Professional Installation Team",
    text: "Certified experts ensuring secure installations.",
  },
  {
    image: "device",
    title: "European Standard ISO Certified Devices",
    text: "Advanced hardware built for accuracy and durability.",
  },
];

export default function WhyCrescent({ cityName }: { cityName?: string }) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-3xl lg:text-4xl text-green-600 dark:text-green-500 uppercase text-center mb-3">
          Why Crescent Tracking?
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Trusted by vehicle owners and businesses {cityName ? `in ${cityName} and ` : ""}across Pakistan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex items-center gap-3 rounded-2xl border-2 border-green-600/80 bg-card p-3"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 xl:w-20 xl:h-20 flex-shrink-0 rounded-xl bg-white overflow-hidden">
                <Image
                  src={`/images/why/${r.image}.webp`}
                  alt={r.title}
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
              <div className="self-stretch w-px bg-green-600/40" aria-hidden />
              <div className="py-1">
                <h3 className="font-display font-bold text-[13px] uppercase leading-tight text-green-700 dark:text-green-400 mb-1.5">
                  {r.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-snug">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
