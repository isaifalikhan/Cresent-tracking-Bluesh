import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Crescent Tracking Terms of Service — subscription terms, acceptable use, and service conditions.",
};

export default function TermsPage() {
  return (
    <div className="pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display font-bold text-4xl text-white mb-3">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: January 1, 2025</p>

        <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
          <section>
            <h2 className="font-display font-semibold text-xl text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By subscribing to or using Crescent Tracking (Pvt) Ltd&apos;s services, you agree to these Terms of Service. These terms constitute a legally binding agreement between you and Crescent Tracking.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-white mb-3">2. Services</h2>
            <p>
              Crescent Tracking provides GPS vehicle tracking, fleet management software, hardware devices, and related services as described in your subscription plan. Service specifications are detailed in your order confirmation.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-white mb-3">3. Subscription and Payment</h2>
            <p>
              Subscriptions are billed monthly or annually as selected. Payment is due in advance. Late payments may result in service suspension. Prices are in PKR inclusive of applicable taxes.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-white mb-3">4. Hardware</h2>
            <p>
              GPS hardware remains the property of Crescent Tracking unless purchased outright. Damaged or lost hardware will be charged at replacement cost. Installation voids are the client&apos;s responsibility if self-tampered.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-white mb-3">5. Acceptable Use</h2>
            <p>You agree not to use our services to:</p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside text-slate-400">
              <li>Track individuals without their knowledge or consent</li>
              <li>Violate any Pakistani laws or regulations</li>
              <li>Interfere with or disrupt our platform</li>
              <li>Attempt to access accounts or data of other clients</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-white mb-3">6. Service Level Agreement</h2>
            <p>
              We guarantee 99.9% platform uptime monthly. Planned maintenance will be communicated 24 hours in advance. Service credits apply for downtime exceeding the SLA, per the support plan terms.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-white mb-3">7. Cancellation</h2>
            <p>
              Monthly subscribers may cancel with 30 days written notice. Annual subscribers may cancel at renewal. Hardware must be returned within 14 days of cancellation or replacement charges apply.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-white mb-3">8. Governing Law</h2>
            <p>
              These terms are governed by the laws of Pakistan. Disputes shall be resolved in the courts of Lahore, Punjab.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-white mb-3">9. Contact</h2>
            <p>
              For terms-related inquiries: legal@crescenttracking.com or +92-300-000-0000.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
