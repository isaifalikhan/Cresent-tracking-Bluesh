import { Check, Minus } from "lucide-react";

import { plans, planFeatures } from "@/lib/packages";

export default function PackageComparison({ cityName }: { cityName?: string }) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-3xl text-foreground mb-3">
          Car Tracker Packages{cityName ? ` in ${cityName}` : ""}
        </h2>
        <p className="text-muted-foreground mb-8">
          Compare the features included in each Crescent Tracking package and choose the one that fits your needs.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="bg-green-600 text-white">
                <th scope="col" className="text-left font-semibold px-4 py-3">
                  Features
                </th>
                {plans.map(({ name: p }) => (
                  <th key={p} scope="col" className="font-semibold px-3 py-3 text-center whitespace-nowrap">
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planFeatures.map((f) => (
                <tr key={f.label} className="border-t border-border even:bg-green-500/[0.03]">
                  <th scope="row" className="text-left font-normal text-foreground px-4 py-3">
                    {f.label}
                  </th>
                  {f.included.map((yes, i) => (
                    <td key={plans[i].name} className="px-3 py-3 text-center">
                      {yes ? (
                        <Check className="inline w-5 h-5 text-green-500" aria-label="Included" />
                      ) : (
                        <Minus className="inline w-4 h-4 text-muted-foreground/50" aria-label="Not included" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
