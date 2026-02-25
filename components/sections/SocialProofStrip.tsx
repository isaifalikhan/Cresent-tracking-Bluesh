"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const stats = [
  { value: 5000, suffix: "+", label: "Vehicles Tracked" },
  { value: 99.9, suffix: "%", label: "Platform Uptime", decimals: 1 },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 40, suffix: "%", label: "Avg Fuel Savings" },
  { value: 500, suffix: "+", label: "Happy Clients" },
];

const partnerLogos = [
  "TCS Couriers",
  "PIA Cargo",
  "DHL Pakistan",
  "Coca-Cola Beverages",
  "Engro Corp",
  "Dawood Group",
];

export default function SocialProofStrip() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="bg-slate-900/50 border-y border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-14"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl lg:text-4xl text-white mb-1">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    enableScrollSpy={false}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="text-slate-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div className="text-center">
          <p className="text-slate-600 text-xs uppercase tracking-widest mb-6 font-medium">
            Trusted by Pakistan&apos;s leading organizations
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {partnerLogos.map((logo) => (
              <div
                key={logo}
                className="px-5 py-2.5 rounded-lg border border-white/5 bg-white/3 text-slate-500 text-sm font-medium hover:border-green-500/30 hover:text-slate-300 transition-all duration-300"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
