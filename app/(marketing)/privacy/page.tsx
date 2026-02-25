import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Crescent Tracking Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-display font-bold text-4xl text-white mb-3">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: January 1, 2025</p>

        <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
          <section>
            <h2 className="font-display font-semibold text-xl text-white mb-3">1. Information We Collect</h2>
            <p>
              Crescent Tracking (Pvt) Ltd collects information necessary to provide our GPS tracking and fleet management services. This includes:
            </p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside text-slate-400">
              <li>Contact information (name, email, phone number, company)</li>
              <li>Vehicle location and movement data from installed GPS devices</li>
              <li>Driver behavior data (speed, acceleration patterns)</li>
              <li>Fuel sensor readings and consumption data</li>
              <li>Account usage and login information</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-white mb-3">2. How We Use Your Information</h2>
            <p>We use collected information exclusively to:</p>
            <ul className="mt-3 space-y-1.5 list-disc list-inside text-slate-400">
              <li>Provide and improve our tracking platform</li>
              <li>Generate reports and analytics for your account</li>
              <li>Send alerts and notifications as configured</li>
              <li>Provide customer support</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-white mb-3">3. Data Security</h2>
            <p>
              All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We maintain ISO-compliant security practices and conduct regular security audits. Location data is stored on servers within Pakistan.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-white mb-3">4. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. Data may be shared only with your explicit consent or as required by Pakistani law enforcement with proper legal authorization.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-white mb-3">5. Data Retention</h2>
            <p>
              Location history is retained for the period specified in your subscription plan (30, 90, or unlimited days). Account data is retained for the duration of your subscription plus 30 days after termination.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-white mb-3">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data at any time. Contact us at privacy@crescenttracking.com to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-xl text-white mb-3">7. Contact</h2>
            <p>
              For privacy-related concerns, contact our Data Protection Officer at privacy@crescenttracking.com or call +92-300-000-0000.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
