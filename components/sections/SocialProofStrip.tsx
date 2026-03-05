"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { value: 5000, suffix: "+", label: "Vehicles Tracked" },
  { value: 99.9, suffix: "%", label: "Platform Uptime", decimals: 1 },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 40, suffix: "%", label: "Avg Fuel Savings" },
  { value: 500, suffix: "+", label: "Happy Clients" },
];

const clientLogos = [
  "/clients/client1.png",
  "/clients/client2.jpg",
  "/clients/client3.jpg",
  "/clients/client4.png",
  "/clients/client5.jpg",
  "/clients/client6.jpg",
  "/clients/client7.jpg",
  "/clients/client8.jpg",
  "/clients/client9.jpg",
  "/clients/client10.jpg",
  "/clients/client11.png",
  "/clients/client12.png",
  "/clients/client13.png",
  "/clients/client14.jpg",
  "/clients/client15.jpg",
  "/clients/client16.png",
  "/clients/client17.png",
  "/clients/client18.png",
];

export default function SocialProofStrip() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="bg-muted/30 border-y border-border py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-14">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-1">
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
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground text-xs uppercase tracking-widest mb-6 font-medium">
            Trusted by Pakistan&apos;s leading organizations
          </p>
          <div className="relative overflow-hidden border border-border/60 rounded-2xl bg-card">
            <motion.div
              className="flex items-center gap-8 py-8 will-change-transform"
              initial={{ x: 0 }}
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...clientLogos, ...clientLogos].map((src, i) => (
                <div
                  key={`${src}-${i}`}
                  className="shrink-0 opacity-80 hover:opacity-100 transition-opacity w-48"
                >
                  <Image
                    src={src}
                    alt="Client logo"
                    width={250}
                    height={100}
                    className="h-20 w-auto object-contain grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
